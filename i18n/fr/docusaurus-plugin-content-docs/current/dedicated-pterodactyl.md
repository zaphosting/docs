---
id: dedicated-pterodactyl
title: "Serveur dédié : Installation de Pterodactyl"
description: "Découvrez comment configurer et gérer efficacement votre propre panneau serveur de jeux Pterodactyl → En savoir plus maintenant"
sidebar_label: Installer Pterodactyl
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le panneau Pterodactyl est un panneau de contrôle open source conçu pour gérer et héberger facilement des serveurs de jeux. Il offre une interface utilisateur permettant aux administrateurs de configurer et gérer centralement plusieurs serveurs de jeux.

Dans ce guide, nous allons explorer les étapes nécessaires pour installer votre propre instance Pterodactyl sur votre serveur.

## Préparation

Vous aurez besoin d’un serveur dédié sous Linux pour installer le panneau Pterodactyl. Vous devez utiliser l’un des systèmes d’exploitation compatibles listés dans le tableau ci-dessous.

| OS     | Versions compatibles |
| ------ | -------------------- |
| Ubuntu | 20.04, 22.04         |
| CentOS | 7, 8                 |
| Debian | 11, 12               |

## Dépendances

Pterodactyl nécessite plusieurs dépendances pour pouvoir s’installer et fonctionner correctement. Il s’appuie également sur un gestionnaire de dépendances PHP populaire nommé Composer.

### Liste des dépendances

Voici une liste courte des dépendances dont vous aurez besoin pour ce guide. Rendez-vous dans la section suivante qui explique comment installer ces dépendances.

- PHP 8.1 avec les extensions suivantes : cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml ou dom, curl, zip, et fpm.
- MariaDB
- Serveur web – dans ce guide, nous utiliserons Nginx.
- curl
- tar
- unzip
- git
- composer v2

### Installation des dépendances

Commencez par exécuter cette commande essentielle qui vous permettra d’ajouter des paquets non inclus par défaut dans le système.

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

Ensuite, installez les dépôts supplémentaires pour PHP, Redis et MariaDB (MySQL).

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

Vous devrez aussi installer Redis, nécessaire pour le stockage temporaire des données.

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

Pour le serveur web, nous avons choisi Nginx car il est fiable et open-source. Vous devriez l’installer ou utiliser un autre serveur web comme Apache ou Caddy, même si cela ne correspondrait pas parfaitement à ce guide.

```bash
sudo apt install nginx # Télécharger et installer Nginx
sudo ufw allow 'Nginx Full' # Ajuster le pare-feu
```

Nous vous recommandons d’aller sur `http://[votre_ip_serveur]/`, en remplaçant `[votre_ip_serveur]` par l’adresse IP de votre serveur, pour tester et vérifier que Nginx fonctionne. Vous devriez voir une page d’accueil par défaut.

Ensuite, installez MariaDB, qui servira de base de données MySQL.
```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Enfin, mettez à jour la liste des dépôts et installez les dépendances restantes.
```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

Vous devriez maintenant avoir toutes les dépendances nécessaires installées et pouvez passer à l’installation de Composer.

### Installation de Composer

Maintenant que vos dépendances principales sont installées, vous devez installer Composer, un gestionnaire de dépendances PHP très utilisé. Cela vous permettra de télécharger et installer facilement tout le service Pterodactyl.

Lancez simplement la commande suivante :
```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Télécharger le panneau

Maintenant que tous les prérequis sont en place, vous devez installer le panneau Pterodactyl.

Créez un dossier où le panneau sera stocké avec la commande ci-dessous.
```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

Clonez ensuite le dépôt officiel Pterodactyl sur GitHub pour télécharger les fichiers nécessaires.
```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

Une fois le clonage terminé, le panneau sera téléchargé avec succès. Dans la section suivante, vous configurerez une large gamme de paramètres essentiels pour garantir que le panneau est bien installé et fonctionne correctement.

## Installation

La première étape de l’installation consiste à configurer une base de données MySQL qui stockera toutes les données de votre panneau Pterodactyl. Si vous avez déjà une base MySQL prête avec un utilisateur approprié, vous pouvez passer la sous-section suivante.

### Configuration de la base de données

Connectez-vous à votre base de données MySQL pour commencer. Si c’est une instance MySQL fraîche, vous pouvez simplement lancer :
```
mysql -u root -p
```

Sinon, si vous avez déjà une instance MySQL, utilisez votre login avec `-u` pour le nom d’utilisateur et `-p` pour le mot de passe.

Une fois connecté, créez un nouvel utilisateur que vous utiliserez pour votre instance Pterodactyl. Remplacez `[votre_mot_de_passe]` par le mot de passe que vous souhaitez utiliser. Faites-le avec :
```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[votre_mot_de_passe]';
```

Ensuite, créez une base de données pour votre instance Pterodactyl et donnez les droits nécessaires à votre nouvel utilisateur pour agir sur cette base.
```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

Vous avez configuré avec succès un utilisateur MySQL et une base pour votre instance Pterodactyl, vous pouvez continuer l’installation. Tapez `exit` pour quitter MySQL.

### Poursuite de l’installation

Copiez maintenant le fichier d’environnement par défaut où vous stockerez vos tokens secrets.
```bash
cp .env.example .env
```

Ensuite, utilisez Composer pour installer automatiquement tous les paquets nécessaires en lançant :
```bash
composer install --no-dev --optimize-autoloader
```

Générez aussi une clé de chiffrement pour votre application avec :
```bash
php artisan key:generate --force
```

### Configuration de l’environnement

Configurez maintenant votre instance Pterodactyl. Cela se fait simplement en lançant les commandes suivantes. Chaque commande vous guidera dans une configuration interactive couvrant plusieurs paramètres comme les sessions, l’email, le cache, etc.

```bash
php artisan p:environment:setup # Première commande
php artisan p:environment:database # Deuxième commande
```

### Configuration de la base de données

L’étape suivante consiste à configurer les données de base nécessaires au fonctionnement du panneau, en utilisant la base que vous avez créée. Lancez simplement la commande suivante.

:::info
Cela peut prendre quelques minutes. Ne quittez pas le processus sous peine de casser l’installation. Soyez patient :)
:::

```bash
php artisan migrate --seed --force
```

### Création de l’utilisateur admin

Maintenant que la base est prête, créez votre premier utilisateur administrateur pour pouvoir vous connecter au panneau Pterodactyl.
```bash
php artisan p:user:make
```

### Configuration des permissions

L’étape suivante consiste à définir les permissions nécessaires sur les fichiers du panneau Pterodactyl pour que l’instance puisse toujours lire et écrire sans problème.

Attribuez les permissions avec la commande suivante :
```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

Une fois fait, vous devriez pouvoir accéder à votre panneau Pterodactyl en allant sur le lien suivant, en remplaçant `votre_ip` par l’IP de votre serveur.
```
http://[votre_ip]/
```

### Workers de la file d’attente

La dernière étape de l’installation consiste à configurer un cronjob qui s’exécute régulièrement avec un worker de file d’attente responsable de nombreuses tâches en arrière-plan.

Ouvrez votre crontab avec `sudo crontab -e`. Une fois ouvert, ajoutez la ligne suivante pour exécuter le cronjob chaque minute pour votre panneau Pterodactyl.
```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

Ensuite, créez un worker de file d’attente avec `systemd` qui maintient le processus en arrière-plan.

Créez un nouveau fichier pour le worker en lançant la commande suivante qui ouvrira l’éditeur nano.
```
nano /etc/systemd/system/pteroq.service
```

Collez-y le contenu suivant :
```
# Fichier Worker de la file d’attente Pterodactyl
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# Sur certains systèmes, l’utilisateur et le groupe peuvent être différents.
# Certains systèmes utilisent `apache` ou `nginx` comme utilisateur et groupe.
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

:::note
Si vous utilisez CentOS, remplacez `redis-server.service` par `redis.service` dans ce fichier.
:::

Sauvegardez avec `CTRL + X` puis `Y` pour confirmer.

Enfin, activez le service Redis et le service que vous venez de créer pour qu’ils démarrent au boot du système.
```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

Vous avez installé Pterodactyl avec succès sur votre serveur. Vous devriez pouvoir accéder au panneau via l’URL suivante, en remplaçant `[votre_ip_serveur]` par l’IP de votre serveur.
```
http://[votre_ip_serveur]
```

## Optionnel : Configuration du serveur web

En option, vous pouvez configurer votre serveur web. Dans ce guide, nous avons utilisé Nginx, cette section explique donc comment ajuster sa configuration.

Configurer le serveur web vous permettra d’utiliser votre propre domaine pour le panneau et d’ajouter un certificat SSL à votre site.

### Enregistrement DNS du domaine

Pour que votre serveur soit accessible via votre domaine, vous devez créer un enregistrement DNS de type `A` pour ce domaine. Cela dépendra de votre fournisseur, mais vous devriez trouver cette option dans un panneau de gestion DNS de votre domaine. L’enregistrement doit pointer vers l’adresse IP de votre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### Suppression de la configuration par défaut

Commencez par supprimer la configuration Nginx par défaut en supprimant simplement le fichier.
```bash
rm /etc/nginx/sites-enabled/default
```

À ce stade, créez un nouveau fichier de configuration pour votre site Pterodactyl. Décidez si vous souhaitez utiliser SSL ou non, car la configuration et les étapes diffèrent légèrement selon le choix.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx With SSL" label="Nginx avec SSL" default>

### Configuration de Certbot

Pour que votre site ait un certificat SSL, vous devez configurer un système qui gère et renouvelle automatiquement vos certificats. Ici, vous utiliserez Certbot, open-source.

Installez d’abord Certbot sur votre serveur. Pour Nginx, installez aussi le paquet python3 certbot.
```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

Ensuite, vous devez configurer la vérification pour générer un certificat. Ici, vous utiliserez un challenge DNS, plus sécurisé qu’un challenge HTTP.

Vous devrez créer un enregistrement DNS `TXT` pour le domaine que vous souhaitez utiliser. Cela dépendra de votre fournisseur, mais vous devriez trouver cette option dans un panneau de gestion DNS.

Lancez la commande suivante pour obtenir le contenu à mettre dans votre enregistrement `TXT`. Remplacez `[votre_domaine]` par votre domaine.
```bash
certbot -d [votre_domaine] --manual --preferred-challenges dns certonly
```

Une fois l’enregistrement DNS configuré, mettez en place le renouvellement automatique via un cronjob. Ouvrez crontab avec `sudo crontab -e` et ajoutez la ligne suivante pour renouveler le certificat chaque jour à 23h00 heure système.

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### Création du fichier de configuration

Maintenant que votre certificat SSL est prêt, créez le fichier de configuration.

Ouvrez nano à l’emplacement cible avec le nom de fichier spécifié.
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Collez la configuration suivante. Remplacez `[votre_domaine]` par le domaine pour lequel vous avez configuré les enregistrements DNS.

:::warning
Assurez-vous d’avoir configuré le certificat SSL, sinon le serveur web ne démarrera pas correctement.
:::

```
server_tokens off;

server {
    listen 80;
    server_name [votre_domaine];
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name [votre_domaine];

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    ssl_certificate /etc/letsencrypt/live/[votre_domaine]/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/[votre_domaine]/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

</TabItem>
<TabItem value="Nginx Without SSL" label="Nginx sans SSL">

#### Création du fichier de configuration

Ouvrez nano à l’emplacement cible avec le nom de fichier spécifié.
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Collez la configuration suivante. Remplacez `[votre_domaine]` par le domaine pour lequel vous avez configuré un enregistrement DNS pointant vers l’IP de votre serveur.

:::warning
Assurez-vous d’avoir configuré le certificat SSL, sinon le serveur web ne démarrera pas correctement.
:::

```
server {
    listen 80;
    server_name [votre_domaine];

    root /var/www/pterodactyl/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}
```
</TabItem>
</Tabs>

### Appliquer la configuration

Après avoir modifié la configuration, activez-la avec la commande suivante.
```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # Pas nécessaire pour CentOS

sudo systemctl restart nginx # Redémarrer Nginx
```

Si tout s’est bien passé, vous devriez maintenant pouvoir accéder facilement à votre panneau Pterodactyl via le domaine que vous avez configuré.

Vous avez configuré avec succès votre serveur web pour utiliser votre domaine et ajouter un certificat SSL à votre site.