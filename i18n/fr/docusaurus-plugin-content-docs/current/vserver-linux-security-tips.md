---
id: vserver-linux-security-tips
title: "VPS : Conseils de Sécurité Linux"
description: "Découvrez comment renforcer la sécurité de votre serveur Linux avec des conseils essentiels pour éviter les accès non autorisés et protéger vos services → En savoir plus maintenant"
sidebar_label: Conseils de Sécurité
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ce guide contient quelques astuces et conseils pour rendre votre serveur Linux plus sécurisé. Surtout que les serveurs (virtuels) doivent être accessibles de l’extérieur, une protection basique contre les accès indésirables est clairement recommandée et ne doit pas être négligée.

:::info
Veuillez noter que ces instructions ne sont pas exhaustives et que des informations plus détaillées sont disponibles dans d’autres sections de la documentation ZAP. (ex. [2FA (SSH)](vserver-linux-ssh2fa.md))
:::

:::tip
La manière la plus simple de protéger votre serveur est toujours la même, quel que soit le serveur : utilisez des mots de passe sécurisés, mettez vos services à jour régulièrement et faites attention aux services que vous installez ainsi qu’aux guides que vous suivez.
:::

<InlineVoucher />

## Sécuriser SSH

SSH (Secure Shell) est un service qui vous permet d’accéder à distance à la console de votre serveur pour exécuter des commandes. Voici comment configurer SSH sur votre serveur : [Accès initial (SSH)](vserver-linux-ssh.md)

Par défaut, la connexion SSH se fait avec un mot de passe. Cependant, cela présente un gros inconvénient : l’authentification peut être contournée assez facilement via une attaque par force brute, surtout si vous utilisez un mot de passe trop simple. Donc si vous choisissez cette méthode, utilisez un mot de passe **sécurisé**.

Pour mieux protéger votre serveur contre les accès SSH non désirés, activez l’authentification uniquement via clés SSH et désactivez la connexion par mot de passe. Jetez un œil au guide [Clé SSH](vserver-linux-sshkey.md) qui explique comment générer et ajouter des clés SSH.

## Configuration des ports de vos services

| Service | Port |
|---------|------|
| SSH     | 22   |
| FTP     | 21   |
| Mail    | 25   |
| DNS     | 53   |
| HTTP    | 80   |
| HTTPS   | 443  |

Des services comme SSH ou FTP utilisent toujours les mêmes ports par défaut (certains listés dans le tableau ci-dessus). Si un acteur malveillant externe veut forcer l’accès au service SSH de votre serveur, il doit d’abord savoir quel port est utilisé. Si vous ne modifiez pas ces ports, les ports 22 et 21 sont généralement les cibles pour exécuter des commandes directement sur le serveur ou accéder aux fichiers via FTP.

Pour éviter ça, on recommande de configurer les ports des services standards en ports personnalisés. Dans la suite de ce guide, vous apprendrez comment faire :

:::danger
Le port choisi doit être entre 1024 et 65536 et ne doit pas être déjà utilisé !
:::
Vous pouvez utiliser `cat /etc/services` pour afficher quelques ports standards et éviter d’en choisir un déjà pris.

### Port SSH

Pour changer le port SSH, il faut modifier le fichier de configuration. Il se trouve normalement dans `/etc/ssh/sshd_config`, mais si ce n’est pas le cas, utilisez cette commande pour le trouver :
```
find / -name "sshd_config" 2>/dev/null
```

Ouvrez ensuite le fichier avec nano (en root ou avec *sudo*).
```
sudo nano /etc/ssh/sshd_config
```

Ajoutez votre port désiré après `Port`. Si `Port` est commenté (ex. `#Port 22`), enlevez le "#" et remplacez 22 par votre port. Sauvegardez (dans Nano Ctrl + o) et fermez (Ctrl + x).

![Port sshd](https://screensaver01.zap-hosting.com/index.php/s/F4Z4SDjLW4y2iDp/preview)

Redémarrez le service SSH pour appliquer les changements.
```
# Sous Ubuntu/Debian/CentOS par ex.
sudo systemctl restart sshd
```

### Port FTP

Si vous avez installé un service FTP comme **proFTPd**, le port peut aussi être changé en éditant son fichier de config, de façon similaire à SSH.

Trouvez le fichier `proftpd.conf`
```
find / -name "proftpd.conf" 2>/dev/null
```

Il se trouve normalement dans `/etc/proftpd.conf` (CentOS) ou `/etc/proftpd/proftpd.conf` (Ubuntu, Debian).
Ouvrez-le avec nano, enlevez le "#" devant `port` et mettez votre port désiré. Faites attention à ne pas choisir un port invalide.

:::tip
Utilisez Ctrl + W pour chercher dans nano.
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://screensaver01.zap-hosting.com/index.php/s/qw3a88EwfDCMKXS/preview)

## Utilisation d’un pare-feu

Le principe d’accessibilité externe d’un serveur est toujours le même : un port doit être ouvert pour que le serveur soit accessible. Pour SSH, c’est **par défaut** le port 22/TCP. (voir plus haut comment changer ce port)

Le problème, c’est que ce port est accessible à tout le monde, peu importe la personne, la localisation ou l’intention. C’est une grosse faille de sécurité car des acteurs malveillants peuvent inonder le serveur de tentatives de connexion pour trouver le bon mot de passe (via force brute si la connexion par mot de passe est activée) ou tenter de saturer le réseau du serveur (ex. DDoS).

Pour limiter ces risques, vous pouvez appliquer des règles de pare-feu qui restreignent l’accès aux ports ouverts.

Deux méthodes principales existent :
- **IPTables** : le pare-feu Linux original, très puissant mais un peu plus complexe à utiliser.
- **UFW** : une interface simplifiée pour IPTables, plus facile mais un peu moins flexible.

C’est à vous de choisir la méthode qui vous convient. Selon l’usage, IPTables peut être nécessaire, mais souvent UFW suffit (ex. ouvrir/fermer des ports, c’est déjà mieux que rien !).

### IPTables

Ici, vous allez créer plusieurs règles IPTables pour limiter le nombre de tentatives de connexion. Les explications des commandes sont sous le bloc de code.

Notez que cette règle s’applique uniquement au **port 22** (valeur après `--dport`), il faudra adapter pour d’autres services.

:::note
Ces commandes ne fonctionnent pas forcément sur toutes les distributions Linux, mais sur la majorité des plus populaires.
:::

Connectez-vous à votre serveur Linux. Si besoin, suivez notre guide [Accès initial (SSH)](vserver-linux-ssh.md). Ensuite, lancez les commandes dans l’ordre.

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1. La première règle bloque les paquets si plus de 2 connexions en état `TIME_WAIT` vers le port 22 viennent d’une même IP.
2. La deuxième ajoute l’adresse IP d’une nouvelle connexion à la liste `recent`.
3. La troisième bloque les nouvelles connexions d’IP ayant tenté plus de 2 connexions en 1 seconde.

### UFW

Comme dit plus haut, UFW est une interface plus simple pour IPTables. Commencez par installer UFW, car il n’est pas toujours installé par défaut. Exécutez les commandes en root ou avec *sudo*.

Connectez-vous à votre serveur Linux. Si besoin, suivez notre guide [Accès initial (SSH)](vserver-linux-ssh.md). Les instructions ont été testées sur Debian et Ubuntu, mais devraient marcher sur d’autres distributions.

Mettez à jour les paquets et services :
```
sudo apt update && sudo apt upgrade -y
```

Installez UFW via apt :
```
sudo apt install ufw -y
```

Vérifiez que l’installation a réussi :
```
sudo ufw status
> Firewall not loaded
```

Pour ne pas vous bloquer hors de votre serveur, activez d’abord le service ssh avant d’activer le pare-feu.

:::caution
Si vous avez changé le port SSH, entrez ici le nouveau port à la place de 22.
:::

Activez le service ssh avec ces commandes :
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

Le résultat devrait ressembler à ça :
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```

Limitez maintenant les connexions à 6 par minute :
```
ufw limit 22/tcp
```

:::note
UFW limite les connexions à 6 par minute. Ce limiteur est simple et peut ne pas convenir à tous les cas. Pour une config plus fine, préférez IPTables.
:::

:::tip
Le pare-feu (IPTables ou UFW) ne fait que compter bêtement les tentatives et les bloquer. Avec Fail2Ban, vous pouvez analyser les logs pour détecter les anomalies. La section suivante explique comment installer et activer Fail2Ban.
:::

## Mesures supplémentaires avec Fail2Ban

Fail2Ban est un service qui bloque les adresses IP utilisées pour des connexions probablement malveillantes. Il surveille certains fichiers logs pour détecter les anomalies et sécurise votre système efficacement et simplement.

Après installation, Fail2Ban propose des configs préfabriquées pour plusieurs services courants, dont :
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
D’autres services peuvent être ajoutés via expressions régulières (RegEx) et en spécifiant le fichier log.

Par exemple, regardons une entrée dans `/var/log/auth.log`. Ce fichier contient toutes les tentatives de connexion SSH, réussies ou non.
![/var/log/auth.log](https://screensaver01.zap-hosting.com/index.php/s/XzpxrWZRkpFJseo/preview)

Voici une entrée :
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Ban utilise ce fichier pour surveiller les échecs d’authentification. Comme le log contient l’IP de l’attaquant, Fail2Ban peut bloquer cette IP après quelques tentatives ratées.

### Installation de Fail2Ban

Connectez-vous à votre serveur Linux. Si besoin, suivez [Accès initial (SSH)](vserver-linux-ssh.md). Exécutez les commandes en root ou avec *sudo*.

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

Après installation, vérifiez le statut avec `systemctl` : (Quittez avec Ctrl+C)
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

Fail2Ban est installé mais pas encore actif ni configuré. Regardez dans `/etc/fail2ban` où vous trouverez ces fichiers :
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
Pour activer une "jail", créez un fichier `jail.local`. Copiez le contenu de `jail.conf` dedans et ouvrez-le :
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

Vous pouvez maintenant faire toutes les configurations dans `jail.local`, y compris les services à surveiller.
Concentrez-vous sur la partie après `[Default]`. Cette section sert aux réglages généraux.

Descendez un peu dans ce fichier jusqu’à trouver cette partie et modifiez-la comme suit :

| Attribut     | Explication                                              | Valeur       |
|--------------|----------------------------------------------------------|--------------|
| ignoreip     | IP à ne pas bloquer                                      | 127.0.0.1/8  |
| ignorecommand| Pas pertinent                                           |              |
| bantime      | Durée du blocage d’une IP                                | 1h           |
| findtime     | Période pendant laquelle les échecs sont comptabilisés  | 10m          |
| maxretry     | Nombre d’échecs avant blocage                            | 5            |

```
# peut être défini avec espace (et/ou virgule) comme séparateur.
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" est le nombre de secondes pendant lesquelles un hôte est banni.
bantime  = 1h

# Un hôte est banni s’il a généré "maxretry" échecs durant les "findtime"
# secondes.
findtime  = 10m

# "maxretry" est le nombre d’échecs avant bannissement.
maxretry = 5
```

Vous avez fini la config générale. Pour surveiller le service SSH, descendez jusqu’à la section `[sshd]`. Si vous avez modifié le port, indiquez-le sous `port`.

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
Vous pouvez aussi faire des réglages spécifiques à un service (comme ici `maxretry` plus bas que la valeur générale). Si vous ne le faites pas, la config générale s’applique.
:::

Redémarrez Fail2Ban pour activer la surveillance :
```
sudo systemctl restart fail2ban.service
```

### Vérifier le fonctionnement de Fail2Ban

Si vous avez accès à un VPN ou un second serveur, vous pouvez tester Fail2Ban en vous bloquant vous-même. Avec un VPN ou un hotspot mobile, vous aurez une IP différente, ce qui permet de tester.

:::danger
Ne testez pas sur votre réseau principal, votre IP pourrait être bloquée et vous **seriez verrouillé hors de votre serveur**.
:::

Essayez de vous connecter en SSH (avec une autre IP !) et entrez un mauvais mot de passe plusieurs fois. Le résultat devrait ressembler à ça :
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

Affichez le statut de Fail2Ban. Vous verrez qu’une IP est bloquée.
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
Si vous avez beaucoup de bans d’IP, il est conseillé d’augmenter la durée du ban à chaque tentative ratée pour limiter les connexions possibles.
:::

```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
# La durée du ban augmente à chaque bannissement de cette IP
bantime.increment = true
# Facteur d’échelle de 24 heures (1h,24h,48h,3j,4j....)
bantime.factor = 24
# Durée max du ban = 5 semaines
bantime.maxtime = 5w
```

## Sécuriser les serveurs web avec Cloudflare

Beaucoup utilisent Cloudflare comme gestionnaire DNS de leur domaine. Cloudflare possède l’un des plus grands réseaux au monde, offrant des temps de chargement plus rapides, une latence plus faible et une meilleure expérience globale. Ils protègent aussi vos sites contre les attaques DoS/DDoS, y compris les inondations et les nouvelles attaques qui apparaissent chaque jour.

Dans ce guide, vous apprendrez à protéger votre serveur web contre ces attaques.

On part du principe que votre domaine est déjà géré par Cloudflare. Sinon, suivez [leur guide](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) pour migrer votre domaine. Allez dans l’onglet DNS Records du tableau de bord Cloudflare, et assurez-vous que l’enregistrement vers votre serveur web a le nuage orange et indique "Proxied".

![](https://screensaver01.zap-hosting.com/index.php/s/wptKPBTLwmKxx8F/preview)

Tout le trafic passant par votre domaine transitera par Cloudflare, puis vers votre serveur, ce qui garantit un trafic légitime.
Cependant, votre serveur reste accessible en dehors de Cloudflare. Pour cela, vous devez limiter l’accès aux ports 80 et 443 du protocole TCP sur votre serveur Linux, et n’autoriser que le trafic légitime venant de Cloudflare.

Pour cela, vous pouvez limiter manuellement l’accès avec des règles de pare-feu basées sur la [liste IPv4 publique Cloudflare](https://cloudflare.com/ips-v4) et la [liste IPv6 publique Cloudflare](https://cloudflare.com/ips-v6).

Sinon, gagnez du temps avec des outils comme [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) qui importent rapidement ces règles en masse.
Assurez-vous de ne pas avoir d’autres règles autorisant un accès illimité à votre serveur web, sinon elles prendront le dessus.

## Conclusion – votre serveur est maintenant bien plus sécurisé !

Ce guide vous a montré des fonctions basiques et avancées pour sécuriser votre serveur Linux. Si vous avez appliqué toutes les recommandations adaptées à votre système, votre serveur est déjà bien plus sûr qu’avant – bravo !

D’autres mesures sont possibles :
- [2FA (SSH)](vserver-linux-ssh2fa.md)
- Ajouter des configurations supplémentaires à Fail2Ban
- Configurer des notifications mail dans Fail2Ban
- Et bien plus...

<InlineVoucher />