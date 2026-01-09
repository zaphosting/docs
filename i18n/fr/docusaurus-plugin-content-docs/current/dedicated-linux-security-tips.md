---
id: dedicated-linux-security-tips
title: "Serveur dédié : Conseils de sécurité Linux"
description: "Découvrez comment renforcer la sécurité de votre serveur Linux avec des conseils essentiels pour éviter les accès non autorisés et protéger vos services → En savoir plus maintenant"
sidebar_label: Conseils de sécurité
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ce guide contient quelques astuces et conseils pour rendre votre serveur Linux plus sécurisé. Surtout que les serveurs doivent être accessibles de l’extérieur, une protection basique contre les accès indésirables est clairement recommandée et ne doit pas être négligée.

:::info
Veuillez noter que ces instructions ne sont pas exhaustives et que des informations plus détaillées se trouvent dans d’autres sections de la documentation ZAP. (par ex. [2FA (SSH)](vserver-linux-ssh2fa.md))
:::

:::tip
La manière la plus simple de protéger votre serveur est toujours la même, quel que soit le serveur : utilisez des mots de passe sécurisés, mettez vos services à jour régulièrement et faites attention aux services que vous installez ainsi qu’aux guides que vous suivez.
:::

## Sécuriser SSH

SSH (Secure Shell) est un service qui vous permet d’accéder à distance à la console de votre serveur pour exécuter des commandes. Voici comment configurer SSH sur votre serveur : [Accès initial (SSH)](vserver-linux-ssh.md)

Par défaut, une connexion par mot de passe est utilisée pour SSH. Cependant, cela présente le gros inconvénient que l’authentification peut être contournée relativement facilement via une attaque par force brute, surtout si vous utilisez un mot de passe trop simple pour votre connexion SSH. Donc si vous décidez d’utiliser la solution par mot de passe, merci d’utiliser un mot de passe **sécurisé**.

Pour protéger encore mieux votre serveur contre les accès SSH non désirés, vous devriez activer l’authentification exclusivement via des clés SSH et désactiver la connexion par mot de passe. Jetez un œil au guide [Clé SSH](vserver-linux-sshkey.md) qui explique comment générer et ajouter des clés SSH.

## Configuration des ports de vos services

| Service | Port |
|---------|------|
| SSH     | 22   |
| FTP     | 21   |
| Mail    | 25   |
| DNS     | 53   |
| HTTP    | 80   |
| HTTPS   | 443  |

Des services comme SSH ou FTP utilisent toujours les mêmes ports par défaut (certains listés dans le tableau ci-dessus). Si un acteur malveillant externe veut forcer l’accès au service SSH de votre serveur, il doit d’abord savoir quel port est utilisé pour SSH. Si vous ne configurez pas ces ports différemment, alors les ports 22 et 21 sont généralement une cible pour exécuter des commandes directement sur le serveur ou accéder aux fichiers via FTP.

Pour éviter cela, nous recommandons de configurer les ports des services standards en ports personnalisés. Dans la suite de ce guide, vous découvrirez comment faire :

:::danger
Le port que vous souhaitez doit être compris entre 1024 et 65536 et ne doit pas être déjà utilisé !
:::
Vous pouvez utiliser `cat /etc/services` pour afficher certains ports standards afin d’éviter de choisir un port déjà utilisé.

### Port SSH

Pour changer le port SSH, vous devez modifier le fichier de configuration. Il se trouve normalement dans `/etc/ssh/sshd_config` par défaut, mais s’il n’est pas là, vous pouvez utiliser la commande suivante pour le trouver.
```
find / -name "sshd_config" 2>/dev/null
```

Ouvrez ensuite le fichier avec nano (en root ou avec *sudo*).
```
sudo nano /etc/ssh/sshd_config
```

Ajoutez votre port désiré après `Port`. Si `Port` est commenté (ex. `#Port 22`), enlevez le "#" et remplacez le 22 par votre port. Sauvegardez ensuite le fichier (dans Nano avec Ctrl + o) et fermez-le (Nano : Ctrl + x).

![Port sshd](https://screensaver01.zap-hosting.com/index.php/s/F4Z4SDjLW4y2iDp/preview)

Le service SSH doit maintenant être redémarré pour que les changements prennent effet.
```
# Sous Ubuntu/Debian/CentOS par ex.
sudo systemctl restart sshd
```

### Port FTP

Si vous avez installé un service FTP comme **proFTPd**, le port peut aussi être changé simplement en éditant le fichier de config. La procédure est donc similaire à celle du service SSH.

Trouvez le fichier de configuration `proftpd.conf`
```
find / -name "proftpd.conf" 2>/dev/null
```

Le fichier se trouve normalement dans `/etc/proftpd.conf` (CentOS) ou `/etc/proftpd/proftpd.conf` (Ubuntu, Debian).
Ouvrez-le avec nano, enlevez le "#" devant `port` et entrez votre port désiré après. Faites attention à ce que ce soit un port valide.

:::tip
Utilisez Ctrl + W pour chercher dans nano.
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://screensaver01.zap-hosting.com/index.php/s/qw3a88EwfDCMKXS/preview)

## Utilisation d’un pare-feu

Le principe d’accessibilité externe d’un serveur est toujours le même : un port doit être ouvert pour que le serveur soit accessible de l’extérieur. Pour SSH, c’est **par défaut** le port 22/TCP. (voir plus haut comment changer ce port par défaut)

Le problème est que ce port est maintenant accessible à tout le monde, peu importe la personne, l’emplacement ou l’intention. Cela représente une grosse faille de sécurité car des acteurs malveillants pourraient inonder le serveur de tentatives de connexion pour soit découvrir le mot de passe correct (via une attaque par force brute si la connexion par mot de passe est encore activée) ou essayer de surcharger le réseau du serveur via un flood (ex. DDoS), ce qui arrive souvent.

Pour réduire ces effets, vous pouvez appliquer des règles de pare-feu qui limitent l’accès aux ports ouverts.

Deux méthodes différentes sont possibles :
- **IPTables** : c’est le pare-feu Linux original. Il offre beaucoup d’options mais est un peu plus compliqué à utiliser.
- **UFW** : c’est une interface plus simple pour utiliser IPTables sans les commandes complexes, mais un peu plus restrictive.

Au final, c’est vous qui choisissez la méthode. Selon l’usage, vous aurez peut-être besoin de la polyvalence d’IPTables, mais parfois UFW suffit (ex. ouvrir/fermer des ports, ce qui est déjà mieux que rien !).

### IPTables

Dans cette section, vous allez utiliser IPTables pour créer plusieurs règles qui limitent le nombre de tentatives de connexion. Les explications des commandes sont sous le bloc de code.

Notez que cette règle est activée uniquement pour **le port 22** (valeur après `--dport`) et que les commandes pour d’autres services doivent être adaptées.

:::note
Les commandes suivantes ne fonctionnent pas forcément sur toutes les distributions Linux, mais elles marcheront sur la grande majorité des plus populaires.
:::

Connectez-vous d’abord à votre serveur Linux. Si besoin, suivez notre guide [Accès initial (SSH)](vserver-linux-ssh.md). Ensuite, lancez les commandes dans l’ordre.

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1.  La première règle bloque les paquets s’il y a plus de 2 connexions en état `TIME_WAIT` vers le port 22 depuis une même IP.
2.  La deuxième règle ajoute l’adresse IP d’une nouvelle connexion à la liste `recent`.
3.  La troisième règle bloque les nouvelles connexions d’IP qui ont tenté plus de 2 connexions dans la dernière seconde.

### UFW

Comme dit plus haut, UFW est une interface "plus simple" pour IPTables. La première étape est d’installer UFW, car il n’est pas toujours installé par défaut. Exécutez les commandes en root ou avec *sudo*.

Connectez-vous à votre serveur Linux. Si besoin, suivez notre guide [Accès initial (SSH)](vserver-linux-ssh.md). Les instructions suivantes ont été testées sur Debian et Ubuntu, mais devraient marcher sur d’autres distributions.

D’abord, mettez à jour apt et les services existants.
```
sudo apt update && sudo apt upgrade -y
```

Ensuite, installez UFW via apt.
```
sudo apt install ufw -y
```

Vérifiez que l’installation a réussi.
```
sudo ufw status
> Firewall not loaded
```

Pour ne pas vous bloquer l’accès à votre serveur, le service ssh doit être autorisé avant d’activer le pare-feu.

:::caution
Si vous avez déjà changé le port SSH, entrez ici le nouveau port au lieu de 22.
:::

Activez le service ssh avec ces commandes.
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

Un résultat réussi ressemble à ça.
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```

Exécutez maintenant la commande qui limite les connexions à 6 par minute.
```
ufw limit 22/tcp
```

:::note
UFW ne permet de limiter les connexions qu’à 6 par minute. Le limiteur UFW est assez simple et peut ne pas convenir à toutes les situations. Pour une configuration plus détaillée et flexible, nous recommandons d’utiliser IPTables directement.
:::

:::tip
Le pare-feu (IPTables ou UFW) ne fait que compter "bêtement" les tentatives de connexion et les bloquer. Avec Fail2Ban, il est possible d’analyser les fichiers logs pour détecter des anomalies. La section suivante explique comment installer et activer Fail2Ban.
:::

## Mesures de protection supplémentaires avec Fail2Ban

Fail2Ban est un service qui bloque les adresses IP utilisées pour se connecter au serveur avec des intentions probablement malveillantes. Fail2Ban surveille certains fichiers logs pour détecter des anomalies et sécurise ainsi votre système de manière efficace et simple.

Après installation, Fail2Ban propose déjà des configurations préconstruites pour plusieurs services courants, notamment :
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
D’autres services peuvent être ajoutés simplement via une expression régulière (RegEx) et en spécifiant le fichier log voulu.

Par exemple, regardons une entrée dans `/var/log/auth.log`. Ce fichier contient toutes les tentatives de connexion SSH, réussies ou échouées.
![/var/log/auth.log](https://screensaver01.zap-hosting.com/index.php/s/XzpxrWZRkpFJseo/preview)

Voici une entrée :
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Ban utilise ce fichier log et le surveille pour les échecs d’authentification. Comme le fichier log contient directement l’adresse IP de l’attaquant, Fail2Ban peut bloquer cette IP après quelques tentatives ratées.

### Installation de Fail2Ban

Connectez-vous à votre serveur Linux. Si besoin, suivez notre guide [Accès initial (SSH)](vserver-linux-ssh.md). Exécutez les commandes en root ou avec *sudo*.

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

Après installation, vérifiez le statut avec `systemctl` : (quittez systemctl avec Ctrl+C)
```
systemctl status fail2ban.service
* fail2ban.service - Fail2Ban Service
     Loaded: loaded (/lib/systemd/system/fail2ban.service; enabled; vendor pres>
     Active: active (running) since Sat 2023-12-02 13:10:33 UTC; 24s ago
       Docs: man:fail2ban(1)
    Process: 23988 ExecStartPre=/bin/mkdir -p /run/fail2ban (code=exited, statu>
   Main PID: 23989 (fail2ban-server)
        CPU: 409ms
     CGroup: /system.slice/fail2ban.service
             `-23989 /usr/bin/python3 /usr/bin/fail2ban-server -xf start

Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Starting Fail2Ban Service...
Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Started Fail2Ban Service.
Dec 02 13:10:34 vps-zap515723-1 fail2ban-server[23989]: Server ready
```

### Configuration de Fail2Ban

Fail2Ban est installé, mais pas encore actif ni configuré. Regardez dans `/etc/fail2ban` où vous trouverez ces fichiers :
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
Pour créer une "jail" active, créez un fichier `jail.local`. Copiez simplement le contenu de `jail.conf` dans ce nouveau fichier et ouvrez-le :
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

Toutes les configurations se font maintenant dans `jail.local`, y compris les services à surveiller.
Concentrez-vous sur la partie après `[Default]`. Cette section sert à définir les réglages par défaut/généraux.

Descendez un peu dans ce fichier jusqu’à trouver cette partie et modifiez-la comme suit par exemple :

| Attribut     | Explication                                                                 | Valeur       |
|--------------|-----------------------------------------------------------------------------|--------------|
| ignoreip     | Adresses IP qui ne doivent pas être bloquées                               | 127.0.0.1/8  |
| ignorecommand| Pas pertinent.                                                              |              |
| bantime      | Durée pendant laquelle une IP est bloquée                                  | 1h           |
| findtime     | Période pendant laquelle les échecs sont pris en compte                    | 10m          |
| maxretry     | Nombre d’échecs avant blocage                                              | 5            |

```
# peut être défini avec espace (et/ou virgule) comme séparateur.
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" est le nombre de secondes pendant lesquelles un hôte est banni.
bantime  = 1h

# Un hôte est banni s’il a généré "maxretry" échecs pendant les "findtime"
# secondes.
findtime  = 10m

# "maxretry" est le nombre d’échecs avant qu’un hôte soit banni.
maxretry = 5
```

Vous avez fini la configuration par défaut. Pour surveiller le service SSH, descendez un peu plus jusqu’à la section `[sshd]`. Si vous avez modifié votre port, indiquez-le sous `port`.

La section `[sshd]` ressemble à ça :
```
[sshd]

enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 4
```
:::tip
Comme vous voyez, il est possible de faire des réglages individuels pour chaque service (ici `maxretry` est plus bas que la valeur par défaut). Même si vous avez fait des réglages généraux, vous pouvez configurer la plupart des paramètres pour chaque service. Sinon, la valeur générale est utilisée.
:::

Redémarrez Fail2Ban pour commencer la surveillance.
```
sudo systemctl restart fail2ban.service
```

### Vérifier le fonctionnement de Fail2Ban

Si vous avez accès à un VPN ou un second serveur, vous pouvez essayer de vous faire bloquer par Fail2Ban pour tester si le service fonctionne. Avec un VPN ou un hotspot via votre téléphone, vous aurez une IP différente, ce qui permet de tester Fail2Ban.

:::danger
Ne testez pas cela sur votre réseau habituel, car votre propre IP pourrait être bloquée et vous **seriez verrouillé dehors**.
:::

Essayez de vous connecter en SSH à votre serveur (avec une IP différente !) et entrez un mauvais mot de passe à chaque fois. Le résultat devrait ressembler à ça :
```
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
root@185.223.29.xxx: Permission denied (publickey,password).
root@vps-zap515723-2:/var/log# ssh root@185.223.29.179
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
^C
root@vps-zap515723-2:/var/log# ssh root@185.223.29.xxx
ssh: connect to host 185.223.29.xxx port 22: Connection refused
```

Comme vous voyez, la connexion est maintenant refusée (`Connection refused` au lieu de `Permission denied`).

Affichez maintenant le statut de Fail2Ban. Vous verrez qu’une IP a été bloquée.
```
fail2ban-client status sshd
Status for the jail: sshd
|- Filter
|  |- Currently failed: 4
|  |- Total failed:     8
|  `- File list:        /var/log/auth.log
`- Actions
   |- Currently banned: 1
   |- Total banned:     1
   `- Banned IP list:   xxx
```

Pour débloquer une IP, utilisez : `fail2ban-client set sshd unbanip {votre IP}`.

:::info
Si vous avez un nombre inhabituellement élevé de blocages d’IP, il est conseillé d’augmenter la durée du ban à chaque tentative échouée pour réduire les tentatives possibles.
:::

```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
# La durée du ban augmente à chaque blocage de cette IP
bantime.increment = true
# Facteur d’échelle de 24 heures (1h,24h,48h,3j,4j....)
bantime.factor = 24
# Durée maximale du ban = 5 semaines
bantime.maxtime = 5w
```

## Sécuriser les serveurs web avec Cloudflare

Beaucoup utilisent Cloudflare comme gestionnaire DNS de leur domaine. Cloudflare possède non seulement l’un des plus grands réseaux au monde, offrant des temps de chargement plus rapides, une latence plus faible et une meilleure expérience globale, mais protège aussi vos sites web contre les attaques DoS/DDoS, y compris les floods et les nouvelles formes d’attaques qui apparaissent chaque jour.

Dans ce guide, vous apprendrez comment protéger votre serveur web des attaques.

On part du principe que votre domaine est déjà géré par Cloudflare, sinon vous pouvez suivre [leur guide](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) pour migrer votre domaine. Allez dans l’onglet DNS Records du tableau de bord Cloudflare, et assurez-vous que votre enregistrement vers votre serveur web a le nuage orange et indique "Proxied".

![](https://screensaver01.zap-hosting.com/index.php/s/wptKPBTLwmKxx8F/preview)

Ainsi, tout le trafic passant par votre domaine transite par Cloudflare avant d’arriver sur votre serveur, ce qui garantit un trafic légitime.

Cependant, votre serveur reste accessible en dehors de Cloudflare. Pour cela, vous devez limiter l’accès aux ports 80 et 443 du protocole TCP de votre serveur Linux, et n’autoriser l’accès que si le trafic vient de Cloudflare.

Pour cela, vous pouvez limiter manuellement l’accès avec des règles de pare-feu en utilisant la [liste IPv4 publique Cloudflare](https://cloudflare.com/ips-v4) et la [liste IPv6 publique Cloudflare](https://cloudflare.com/ips-v6).

Sinon, vous pouvez gagner du temps avec des outils comme [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) qui importent rapidement ces règles en masse.

Assurez-vous de ne pas avoir d’autres règles qui autorisent un accès illimité à votre serveur web, sinon ces règles ne fonctionneront pas.

## Conclusion - votre serveur est maintenant bien plus sécurisé !

Ce guide vous a montré des fonctions basiques et avancées pour sécuriser votre serveur Linux. Si vous avez appliqué toutes les recommandations adaptées à votre système, votre serveur est déjà bien plus sécurisé qu’avant – félicitations !

D’autres mesures peuvent bien sûr être prises :
- [2FA (SSH)](vserver-linux-ssh2fa.md)
- Ajouter des configurations supplémentaires à Fail2Ban
- Configurer des notifications mail dans Fail2Ban
- Et bien plus encore...