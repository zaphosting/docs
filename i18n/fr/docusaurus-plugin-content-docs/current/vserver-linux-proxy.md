---
id: vserver-linux-proxy
title: "VPS : Configurer un Reverse Proxy avec nginx sur Linux"
description: "Découvrez comment configurer un reverse proxy sécurisé et efficace pour sites web et serveurs de jeux afin d'améliorer l'accès et la protection → En savoir plus maintenant"
sidebar_label: Reverse Proxy
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Un serveur reverse proxy est un serveur qui agit comme intermédiaire entre les utilisateurs finaux et un autre serveur. Les sites web et les serveurs de jeux sont des cas d’usage populaires pour la mise en place d’un reverse proxy, chacun offrant divers avantages comme la sécurité, la facilité d’accès et la protection.

Dans ce guide, nous allons explorer le processus de configuration d’un reverse proxy polyvalent pour sites web ainsi qu’un adapté aux serveurs de jeux.

<InlineVoucher />

## Préparation

Pour configurer un reverse proxy, vous aurez besoin d’un **serveur Linux** qui hébergera votre proxy. Dans cet exemple, nous utiliserons Ubuntu comme distribution Linux, mais les étapes d’installation devraient être très similaires pour la plupart des distributions Linux.

:::tip Spécifications recommandées pour le VPS
Pour un reverse proxy destiné aux serveurs de jeux, nous recommandons fortement d’opter pour des vitesses réseau élevées, surtout si votre serveur accueille beaucoup de joueurs. En effet, votre VPS va streamer du TCP/UDP brut directement entre le client (joueur) et le serveur de jeux. Sinon, un serveur avec des specs de base et peu d’améliorations suffira pour un proxy lié au web. :)
:::

Nous recommandons de configurer le proxy avec un **domaine** que vous possédez. Pour chaque sous-domaine que vous souhaitez utiliser, vous devez créer un enregistrement DNS `A` (par exemple `zapdocs.example.com`), pointant vers l’adresse IP de votre __VPS Linux__. C’est ce que les utilisateurs utiliseront pour accéder à votre site web ou serveur de jeux.

### Accéder au VPS

Avec votre VPS Linux prêt, vous devrez vous y connecter. Veuillez utiliser notre guide [Accès SSH initial](vserver-linux-ssh.md) pour en savoir plus sur la procédure.

### Installation de Nginx

Vous utiliserez Nginx pour héberger un serveur reverse proxy car c’est un serveur web open-source très performant et populaire.

Une fois connecté à votre VPS, utilisez la commande suivante pour installer Nginx.

```
sudo apt install nginx
```

Une fois installé, vous devrez ajuster votre pare-feu pour que le service soit accessible depuis Internet. Pour ce guide, nous utiliserons le **pare-feu UFW** car Nginx s’enregistre comme une application, ce qui facilite la configuration. Vous pouvez en apprendre plus sur le pare-feu UFW avec notre guide [Conseils de sécurité Linux](vserver-linux-security-tips.md).

:::note
Si vous utilisez d’autres pare-feux (comme Iptables), assurez-vous de bien autoriser l’accès à Nginx, notamment sur les ports 80 et 443 où le service nginx opère.
:::

Vous pouvez vérifier les profils Nginx en lançant `sudo ufw app list`. Dans ce cas, nous voulons sélectionner l’option **Nginx Full**, qui donne accès au HTTP pour les tests et au HTTPS pour la production.

```
sudo ufw allow 'Nginx Full'
```

Avec Nginx maintenant configuré, essayez d’accéder à la page via un navigateur pour vérifier que tout fonctionne comme prévu. Si la page de test s’affiche correctement, vous pouvez continuer le guide.

```
http://[votre_ip_serveur]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Pour les sites web

Un reverse proxy pour sites web peut être très utile pour plusieurs raisons, notamment pour rediriger vers des ressources internes du serveur, comme une instance vaultwarden (sans avoir besoin du port dans l’URL), ou pour relayer l’utilisateur vers du contenu externe, ce qui est pratique pour la répartition de charge et la protection.

Un des plus grands avantages est que votre serveur peut gérer des requêtes provenant de plusieurs sources/domaine, contrairement à un serveur web unique fonctionnant sur le port 80/443.

### Configuration Nginx

Commencez par créer une entrée dans le répertoire Nginx pour le domaine que vous avez choisi plus tôt, qui sera généralement un sous-domaine comme `zapdocs.example.com` dans notre exemple.

:::important
Assurez-vous d’avoir configuré un enregistrement `A` pointant vers l’adresse IP de votre serveur proxy avant de continuer. Sans cela, le domaine et les étapes suivantes ne fonctionneront pas comme prévu.
:::

Accédez au dossier des blocs serveur avec la commande suivante. C’est ici que vous stockerez toutes vos configurations proxy.

```
cd /etc/nginx/sites-available/
```

Utilisez maintenant la commande suivante pour créer un nouveau fichier de configuration. Nous recommandons d’utiliser le domaine comme nom de fichier, pour faciliter l’identification (ex. zapdocs.example.com). Remplacez `[your_filename]` par le nom de fichier que vous souhaitez.

```
sudo nano [your_filename]
```

Cela ouvrira l’éditeur nano, qui vous permettra d’entrer le contenu. Copiez le modèle suivant dans l’éditeur. Vous devez remplacer `[your_domain]` par le domaine que vous souhaitez proxyfier, suivi de `[your_target_server]` par le serveur cible que vous voulez atteindre.

```
upstream targetServer {
    # Ajoutez le serveur cible que vous souhaitez atteindre. Cela peut être :
    # Redirection interne "localhost" (ex. 127.0.0.1:9090)
    # Serveur externe (ex. 103.146.43.52:9000)
    server [your_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # Domaine à gérer (ex. zapdocs.example.com)
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

Une fois tous les champs adaptés à votre configuration, sauvegardez le fichier et quittez nano avec `CTRL + X`, puis `Y` pour confirmer et enfin `ENTRER`.

Vous devez maintenant activer le bloc serveur en créant un lien symbolique vers le répertoire actif.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Pour vérifier que tout est correct, notamment la syntaxe, utilisez `sudo nginx -t` pour voir si des erreurs apparaissent. Si tout est OK, la dernière étape est de redémarrer Nginx pour appliquer le nouveau bloc serveur.

```
systemctl reload nginx.service
```

Une fois le service redémarré, testez l’accès au domaine que vous avez configuré pour le reverse proxy dans votre navigateur. En cas de succès, la page devrait charger le contenu désiré que vous avez défini dans le paramètre `targetServer`. En cas de problème, nous recommandons de consulter les logs pour dépanner avec `journalctl -f -u nginx.service` afin d’identifier d’éventuelles erreurs.

## Pour les serveurs de jeux

Un reverse proxy pour serveurs de jeux peut être très utile pour plusieurs raisons, notamment pour offrir une couche supplémentaire de sécurité et de fiabilité en améliorant la mitigation et en restreignant l’accès à l’hôte principal.

:::tip
La plupart des serveurs dédiés de jeux fonctionnent parfaitement avec un proxy TCP/UDP brut que vous allez configurer. Cependant, une petite minorité de jeux comme BeamMP peuvent mal fonctionner avec les VPN et proxies, donc il faudra tester au cas par cas.
:::

### Configuration Nginx

Cette configuration nécessite le module **Nginx Stream**, qui ne fait pas partie d’une installation Nginx par défaut.

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

Vous allez ajouter un nouveau bloc `stream` dans le fichier principal `nginx.conf` où vous définirez le serveur en amont et le port par lequel il sera accessible sur votre proxy.

Ouvrez simplement le fichier avec la commande suivante.

```
sudo nano /etc/nginx/nginx.conf
```

Collez dans ce fichier le modèle suivant qui ajoute un bloc `stream`. Vous devrez remplacer `[your_target_server]` par le serveur vers lequel vous souhaitez streamer, avec le port correspondant (par exemple `:30120` pour FiveM). De même, remplacez `[your_port_listener]` par le port sur lequel vous voulez que les gens accèdent à votre contenu via le proxy.

```
stream {
    upstream targetServer {
        # Ajoutez le serveur cible que vous souhaitez atteindre (ex. 103.146.43.52:30120)
        server [your_target_server];
    }

    server {
        # Port d’écoute qui accepte et relaie les connexions (ex. 30120)
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

En gros, Nginx écoutera sur le port spécifié les connexions entrantes et streamera tout vers le serveur cible que vous avez défini (de votre serveur proxy vers votre vrai serveur de jeux).

Une fois tous les champs adaptés à votre configuration, sauvegardez le fichier et quittez nano avec `CTRL + X`, puis `Y` pour confirmer et enfin `ENTRER`.

Pour vérifier que tout est correct, notamment la syntaxe, utilisez `sudo nginx -t` pour voir si des erreurs apparaissent. Si tout est OK, la dernière étape est de redémarrer Nginx pour appliquer la nouvelle configuration.

```
systemctl reload nginx.service
```

Une fois le service redémarré, essayez de vous connecter à votre serveur de jeux via le domaine proxy. En cas de succès, vous devriez pouvoir vous connecter au serveur de jeux, précisément celui que vous avez défini dans le paramètre `targetServer`. En cas de problème, nous recommandons de consulter les logs pour dépanner avec `journalctl -f -u nginx.service` afin d’identifier d’éventuelles erreurs.

## Certificat SSL

Avec votre reverse proxy configuré, nous recommandons vivement d’ajouter un certificat SSL à vos domaines utilisés pour garantir que le site transmet les données de manière sécurisée via HTTPS. Consultez notre guide [Installer Certbot](dedicated-linux-certbot.md), qui couvre tout le processus de demande et de renouvellement automatique des certificats SSL pour vos domaines.

## Conclusion

Félicitations, vous avez configuré avec succès un reverse proxy pour un site web ou votre serveur de jeux (ou les deux :), vous offrant diverses améliorations en termes de sécurité, fiabilité et performance. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />