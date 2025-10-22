---
id: dedicated-linux-proxy
title: "Serveur dédié : Configurer un Reverse Proxy avec nginx sur Linux"
description: "Découvrez comment configurer un reverse proxy sécurisé et performant pour sites web et serveurs de jeux afin d'améliorer l'accès et la protection → En savoir plus maintenant"
sidebar_label: Reverse Proxy
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Un serveur reverse proxy est un serveur qui agit comme intermédiaire entre les utilisateurs finaux et un autre serveur. Les sites web et les serveurs de jeux sont des cas d’usage populaires pour un reverse proxy, chacun offrant divers avantages comme la sécurité, la facilité d’accès et la protection.

Dans ce guide, on va explorer le processus de mise en place d’un reverse proxy polyvalent pour sites web ainsi qu’un configuré spécialement pour les serveurs de jeux.

<InlineVoucher />

## Préparation

Pour configurer un reverse proxy, il vous faudra un **serveur Linux** qui hébergera votre proxy. Dans cet exemple, on utilise Ubuntu comme distribution Linux, mais les étapes d’installation sont très similaires pour la plupart des distributions Linux.

:::tip Specs VPS recommandées
Pour un reverse proxy dédié aux serveurs de jeux, on recommande fortement d’opter pour des vitesses réseau élevées, surtout si votre serveur accueille beaucoup de joueurs. En effet, votre VPS va streamer du TCP/UDP brut directement entre le client (joueur) et le serveur de jeux. Sinon, un serveur avec des specs de base et peu d’améliorations suffira pour un proxy web. :)
:::

On recommande de configurer le proxy avec un **domaine** que vous possédez. Pour chaque sous-domaine que vous souhaitez utiliser, créez un enregistrement DNS `A` (par exemple `zapdocs.example.com`), pointant vers l’adresse IP de votre __VPS Linux__. C’est ce que les utilisateurs utiliseront pour accéder à votre site web ou serveur de jeux.

### Accès au VPS

Avec votre VPS Linux prêt, vous devrez vous y connecter. Utilisez notre [guide d’accès SSH initial](vserver-linux-ssh.md) pour apprendre comment faire.

### Installation de Nginx

Vous allez utiliser Nginx pour héberger le reverse proxy car c’est un serveur web open-source très performant et populaire.

Une fois connecté à votre VPS, lancez la commande suivante pour installer Nginx.

```
sudo apt install nginx
```

Une fois installé, vous devrez ajuster votre pare-feu pour que le service soit accessible depuis Internet. Pour ce guide, on utilise le **pare-feu UFW** car Nginx s’enregistre comme une app, ce qui facilite la configuration. Vous pouvez en apprendre plus sur UFW avec notre [guide de sécurité Linux](vserver-linux-security-tips.md).

:::note
Si vous utilisez d’autres pare-feux (comme Iptables), assurez-vous d’autoriser l’accès à Nginx, notamment sur les ports 80 et 443 où le service nginx opère.
:::

Vous pouvez vérifier les profils Nginx avec `sudo ufw app list`. Ici, on choisira l’option **Nginx Full**, qui donne accès au HTTP pour les tests et au HTTPS pour la production.

```
sudo ufw allow 'Nginx Full'
```

Avec Nginx installé, essayez d’accéder à la page via un navigateur pour vérifier que tout fonctionne. Si la page de test s’affiche correctement, vous pouvez continuer le guide.

```
http://[votre_ip_serveur]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Pour les sites web

Un reverse proxy pour sites web peut être super utile pour plein de raisons, comme rediriger vers des ressources internes (par exemple une instance vaultwarden sans avoir besoin du port dans l’URL), ou relayer l’utilisateur vers du contenu externe, ce qui est pratique pour la répartition de charge et la protection.

Un des gros avantages, c’est que votre serveur peut gérer des requêtes venant de plusieurs sources/domaine, contrairement à un serveur web classique qui tourne sur le port 80/443.

### Configuration Nginx

Commencez par créer une entrée dans le dossier Nginx pour le domaine que vous avez choisi, généralement un sous-domaine comme `zapdocs.example.com` dans notre exemple.

:::important
Assurez-vous d’avoir configuré un enregistrement `A` pointant vers l’adresse IP de votre serveur proxy avant de continuer. Sans ça, le domaine et les étapes suivantes ne fonctionneront pas comme prévu.
:::

Accédez au dossier des blocs serveur avec la commande suivante. C’est ici que vous stockerez toutes vos configs proxy.

```
cd /etc/nginx/sites-available/
```

Créez maintenant un nouveau fichier de config. On recommande d’utiliser le nom de domaine comme nom de fichier pour s’y retrouver facilement (ex : zapdocs.example.com). Remplacez `[your_filename]` par le nom de fichier que vous voulez.

```
sudo nano [your_filename]
```

Cela ouvrira l’éditeur nano, où vous pourrez coller le template suivant. Adaptez `[your_domain]` avec le domaine à proxyfier, puis `[your_target_server]` avec le serveur cible que vous voulez atteindre.

```
upstream targetServer {
    # Ajoutez le serveur cible que vous souhaitez atteindre. Cela peut être :
    # Une redirection interne "localhost" (ex : 127.0.0.1:9090)
    # Un serveur externe (ex : 103.146.43.52:9000)
    server [your_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # Domaine à gérer (ex : zapdocs.example.com)
    server_name [your_domain];

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass_request_headers on;
        proxy_http_version 1.1;
        proxy_pass http://targetServer;
    }
}
```

Une fois les valeurs adaptées, sauvegardez et quittez nano avec `CTRL + X`, puis `Y` pour confirmer et enfin `ENTRER`.

Activez maintenant ce bloc serveur en créant un lien symbolique vers le dossier actif.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Pour vérifier que tout est correct, notamment la syntaxe, utilisez `sudo nginx -t`. Si tout est OK, redémarrez Nginx pour appliquer la nouvelle config.

```
systemctl reload nginx.service
```

Une fois le service redémarré, testez l’accès au domaine configuré dans votre navigateur. Si ça marche, la page doit afficher le contenu que vous avez défini dans `targetServer`. En cas de problème, consultez les logs avec `journalctl -f -u nginx.service` pour identifier les erreurs.

## Pour les serveurs de jeux

Un reverse proxy pour serveurs de jeux peut apporter plein d’avantages, notamment une couche de sécurité et de fiabilité supplémentaire en améliorant la mitigation et en restreignant l’accès à l’hôte principal.

:::tip
La plupart des serveurs dédiés de jeux fonctionnent parfaitement avec un proxy TCP/UDP brut que vous allez configurer. Cependant, une petite minorité de jeux comme BeamMP peuvent mal fonctionner avec VPNs et proxies, donc testez au cas par cas.
:::

### Configuration Nginx

Pour ça, il faut le module **Nginx Stream**, qui n’est pas inclus dans une installation Nginx par défaut.

#### Installer le module Nginx stream

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt install -y libnginx-mod-stream
```
</TabItem>

<TabItem value="centos-fedora" label="CentOS & Fedora">
```bash
sudo dnf -y install nginx-mod-stream 
```
</TabItem>

</Tabs>

#### Configuration du stream Nginx

Vous allez ajouter un nouveau bloc `stream` dans le fichier principal `nginx.conf` où vous définirez le serveur upstream et le port d’accès sur votre proxy.

Ouvrez simplement le fichier avec la commande suivante.

```
sudo nano /etc/nginx/nginx.conf
```

Collez dans ce fichier le template suivant qui ajoute un bloc `stream`. Remplacez `[your_target_server]` par le serveur vers lequel vous voulez streamer, avec le port (ex : `:30120` pour FiveM). Remplacez aussi `[your_port_listener]` par le port sur lequel les gens accéderont via le proxy.

```
stream {
    upstream targetServer {
        # Ajoutez le serveur cible que vous souhaitez atteindre (ex : 103.146.43.52:30120)
        server [your_target_server];
    }

    server {
        # Port d’écoute qui accepte et relaie les connexions (ex : 30120)
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

En gros, Nginx écoutera sur ce port précis les connexions entrantes et streamera tout vers le serveur cible que vous avez défini (de votre proxy vers votre vrai serveur de jeux).

Une fois les valeurs adaptées, sauvegardez et quittez nano avec `CTRL + X`, puis `Y` et `ENTRER`.

Vérifiez la syntaxe avec `sudo nginx -t`. Si tout est OK, redémarrez Nginx pour appliquer la config.

```
systemctl reload nginx.service
```

Après redémarrage, essayez de vous connecter à votre serveur de jeux via le domaine proxy. Si ça marche, vous devriez pouvoir rejoindre le serveur défini dans `targetServer`. En cas de souci, consultez les logs avec `journalctl -f -u nginx.service` pour débugger.

## Certificat SSL

Avec votre reverse proxy en place, on recommande vivement d’ajouter un certificat SSL sur vos domaines pour garantir une transmission sécurisée via HTTPS. Consultez notre [guide Installer Certbot](dedicated-linux-certbot.md) qui couvre tout le processus de demande et de renouvellement automatique des certificats SSL pour vos domaines.

## Conclusion

Bravo, vous avez configuré avec succès un reverse proxy pour un site web ou votre serveur de jeux (ou les deux :), ce qui vous apporte sécurité, fiabilité et meilleures performances. Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />