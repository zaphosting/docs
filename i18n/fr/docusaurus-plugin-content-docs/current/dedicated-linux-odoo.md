---
id: dedicated-linux-odoo
title: "Installer Odoo sur un serveur Linux - Lance ton propre ERP et CRM Open Source"
description: "Découvre comment gérer et automatiser les processus métier avec la plateforme ERP et CRM intégrée d’Odoo pour simplifier les opérations de ton entreprise → En savoir plus maintenant"
sidebar_label: Installer Odoo
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Odoo est une plateforme modulaire open source qui combine les fonctionnalités de planification des ressources d’entreprise (ERP) et de gestion de la relation client (CRM). Elle permet aux entreprises de gérer et d’automatiser des processus tels que la comptabilité, la gestion des stocks, la gestion de projets et les ventes depuis un seul système.

Grâce à ses extensions flexibles, Odoo peut être adapté à des besoins spécifiques et offre une solution intégrée pour gérer tous les domaines d’une entreprise.

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

Tu envisages d’héberger ce service toi-même ? On te guide étape par étape pour l’installer et le configurer, avec tout ce qu’il faut savoir.



## Prérequis

Avant d’installer **Odoo**, assure-toi que ton environnement d’hébergement répond aux exigences suivantes pour garantir une installation fluide et des performances optimales.

| Matériel  | Minimum     | Recommandé  |
| --------- | ----------- | ----------- |
| CPU       | 1 cœur vCPU | 4 cœurs vCPU|
| RAM       | 1 Go        | 4 Go        |
| Espace disque | 15 Go    | 25 Go       |

Le logiciel nécessite que toutes les dépendances requises soient installées et qu’il fonctionne sur un système d’exploitation supporté. Vérifie que ton serveur remplit les conditions suivantes avant de lancer l’installation :

**Dépendances :** `Docker`

**Système d’exploitation :** Dernière version d’Ubuntu/Debian compatible avec Docker 26+

Assure-toi que toutes les dépendances sont installées et que la version du système d’exploitation est correcte pour éviter les problèmes de compatibilité lors de l’installation d’Odoo.



## Préparation

Avant de configurer **Odoo**, tu dois préparer ton système. Cela inclut la mise à jour de ton système d’exploitation vers la dernière version et l’installation de toutes les dépendances nécessaires. Ces préparatifs garantissent un environnement stable et aident à prévenir les problèmes pendant ou après l’installation.


### Mise à jour du système
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par une mise à jour système. Pour cela, exécute la commande suivante :

```
sudo apt update && sudo apt upgrade -y
```
Cela garantit que ton système dispose des derniers correctifs de sécurité et des versions logicielles avant de continuer.

### Installer les dépendances
Une fois la mise à jour terminée, tu peux procéder à l’installation des dépendances. Odoo sera déployé et exécuté sur ta machine via plusieurs conteneurs Docker. Docker doit donc être installé en premier. Pour cela, lance la commande suivante :

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un guide complet sur l’installation et l’utilisation de Docker est disponible dans notre [guide Docker](dedicated-linux-docker.md).



### Configurer ton domaine

Par défaut, Odoo tourne sur l’hôte via les ports 80 (HTTP) et 443 (HTTPS). Configure un domaine avec des enregistrements DNS pointant vers l’hôte. Si le domaine est géré par nous, tu peux facilement le faire via l’option [EasyDNS](domain-easydns.md).




## Installation
Maintenant que tous les prérequis sont remplis et que les préparations sont faites, tu peux passer à l’installation de l’application Odoo.

Quand tu travailles avec plusieurs configurations Docker, c’est une bonne pratique de créer une structure de dossiers claire pour isoler les projets. Une méthode courante est de créer un dossier *docker* dans le répertoire personnel de l’utilisateur, avec un sous-dossier dédié pour chaque domaine. Ainsi, plusieurs projets peuvent cohabiter sur le même serveur sans conflits de configuration.

Par exemple, pour préparer la structure pour le domaine `example.com` :

```
mkdir -p /docker/example.com
cd /docker/example.com
```

Dans ce dossier projet, il est recommandé de créer des sous-dossiers qui seront montés en volumes par les conteneurs. Ces volumes permettent de partager les données entre services ou de les conserver de façon persistante. Un cas critique est la racine web partagée, à laquelle nginx et certbot doivent accéder pour générer et renouveler les certificats SSL. Une structure adaptée peut être créée ainsi :

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

Cela fournit des dossiers dédiés pour la configuration nginx, les certificats SSL, les fichiers d’inclusion, et le contenu spécifique à Odoo comme les configs et addons.




### Créer le Docker Compose

Dans ton projet docker, crée le fichier compose.yml avec `nano compose.yml`. Colle-y le code suivant :

```
services:
  db:
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=odoo
      - POSTGRES_PASSWORD=odoo
      - PGDATA=/var/lib/postgresql/data/pgdata
    volumes:
      - odoo-db-data:/var/lib/postgresql/data

  odoo:
    image: odoo:18.0
    depends_on:
      - db
    ports:
      - "8069:8069"
    volumes:
      - odoo-web-data:/var/lib/odoo
      - ./config:/etc/odoo
      - ./addons:/mnt/extra-addons
    command: odoo -d odoo_db -i base --db_user=odoo --db_password=odoo --db_host=db

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf:/etc/nginx/conf.d
      - ./nginx/inc:/etc/nginx/inc
      - ./nginx/ssl:/etc/nginx/ssl
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt
    depends_on:
      - odoo

  certbot:
    image: certbot/certbot
    volumes:
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt

volumes:
  odoo-db-data:
  odoo-web-data:
```



### Pare-feu

Pour que nginx et certbot fonctionnent correctement, il faut autoriser les ports TCP 80 (HTTP) et 443 (HTTPS) dans le pare-feu. Ces ports sont essentiels car certbot utilise le port 80 pour la validation HTTP, tandis que le port 443 est nécessaire pour le trafic chiffré HTTPS. Si UFW (Uncomplicated Firewall) est activé, ajoute les règles nécessaires avec ces commandes :

```
sudo ufw allow http
sudo ufw allow https
```

Vérifie ensuite avec `sudo ufw status` que les ports sont bien ouverts. Assure-toi qu’aucune autre configuration de pare-feu ne bloque ces ports, sinon la génération de certificats ou le trafic HTTPS sécurisé pourraient échouer.



### Configuration de Nginx

La configuration de nginx commence par la création d’un fichier de config pour ton domaine. Dans le dossier `nginx/conf`, crée un nouveau fichier nommé selon ton domaine. Par exemple, exécute `nano nginx/conf/example.com.conf` et ajoute les directives de base en remplaçant le placeholder par ton vrai domaine :

```
server {
    listen 80;
    server_name example.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

Cette config permet à certbot de compléter le challenge ACME et d’émettre des certificats SSL valides. Elle assure aussi que toutes les requêtes HTTP sont redirigées vers HTTPS.

Une fois le fichier sauvegardé, lance les conteneurs nécessaires : base de données, Odoo et nginx. Tape la commande suivante :

```
sudo docker compose up -d db odoo nginx
```

Les conteneurs tourneront en arrière-plan, et nginx utilisera déjà la nouvelle config, permettant à certbot de générer les certificats à l’étape suivante.


### Générer les certificats SSL

Lance la commande ci-dessous pour créer les certificats SSL avec certbot. Pense à remplacer ton domaine après le flag `-d` et à mettre une adresse mail valide à la place de user@mail.com.

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

Génère ensuite un fichier paramètre DH dédié pour renforcer la sécurité de l’échange de clés cryptographiques.

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

Crée maintenant le fichier `ssl.conf` avec `nano nginx/ssl/ssl.conf` et ajoute ce contenu. N’oublie pas de remplacer example.com par ton domaine :

```
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ecdh_curve X25519:prime256v1:secp384r1;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-CHACHA20-POLY1305;
ssl_prefer_server_ciphers off;
ssl_session_timeout 1d;
ssl_session_cache shared:MozSSL:10m;
ssl_dhparam "/etc/nginx/ssl/dhparam.pem";
ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
resolver 1.1.1.1 1.0.0.1 valid=300s;
```



## Configuration



### Configuration Nginx

Modifie le fichier de configuration nginx que tu as créé plus tôt et remplace son contenu par la config ci-dessous pour que ton site ne soit servi qu’en HTTPS.

Pense bien à insérer ton vrai nom de domaine dans la directive `server_name` et à spécifier les bons chemins vers tes fichiers de certificat dans les directives `ssl_certificate` et `ssl_certificate_key`.

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # Inclure les réglages SSL de Mozilla
    include /etc/nginx/ssl/ssl.conf;

    # Chemins des certificats (vérifie qu’ils correspondent à ton volume monté)
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # En-têtes de sécurité
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    access_log /var/log/nginx/odoo_access.log;
    error_log  /var/log/nginx/odoo_error.log;

    #Gzip
    include /etc/nginx/inc/gzip.conf;

    # Paramètres proxy pour Odoo
    location / {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Host $host;
        proxy_redirect off;
        proxy_request_buffering off;
        # Timeouts recommandés pour requêtes standards
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # Mise en cache des fichiers statiques
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # Augmentation des timeouts pour le long polling
    location /longpolling {
        proxy_pass http://odoo:8069;
        proxy_connect_timeout 60s;
        proxy_send_timeout    300s;
        proxy_read_timeout    300s;
        send_timeout          300s;
    }

    location /websocket {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name example.com;

    # Permet à Certbot d’accéder à l’URL de challenge
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```



Une fois les modifications sauvegardées dans la config nginx, applique les nouveaux réglages en redémarrant le conteneur nginx :

```
sudo docker compose restart nginx
```

Le redémarrage garantit que nginx charge la nouvelle configuration et commence immédiatement à servir les requêtes avec les nouveaux paramètres. Surveille les messages d’erreur pendant le redémarrage. En cas de problème, tu peux consulter les logs du conteneur avec `sudo docker compose logs nginx` pour dépanner. Quand le conteneur tourne sans erreur, revisite ton site pour confirmer que HTTPS est actif et que le site s’affiche correctement.



### Options de configuration Odoo

Pour appliquer des réglages personnalisés, tu peux créer un fichier de configuration dédié pour Odoo. Place un nouveau fichier à `config/odoo.conf` et ajoute les options souhaitées.

Dans ce fichier, tu peux définir plusieurs paramètres utiles : `list_db = False` masque la sélection de base de données sur la page de connexion, `proxy_mode = True` indique à Odoo qu’il tourne derrière un reverse proxy, et si tu veux utiliser des addons personnalisés, tu peux décommenter la ligne `addons_path` et la pointer vers le dossier addons que tu as créé plus tôt. Exemple de config :

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```



### Supprimer le flag -i base

Le flag `-i base` doit être retiré du fichier `compose.yml`, sinon la base de données sera recréée à chaque redémarrage du conteneur Odoo. Pour le retirer, ouvre le fichier compose avec `nano compose.yml` et modifie la commande comme suit :

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```



## Accéder au site web

Une fois l’installation et la configuration terminées et tous les services en fonctionnement, tu peux accéder en toute sécurité à ton site en entrant ton domaine dans la barre d’adresse du navigateur.



![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

Cela affichera la page de démarrage de ta nouvelle installation. Pour la première connexion, un compte par défaut est fourni avec le nom d’utilisateur `admin` et le mot de passe `admin`. Il est fortement recommandé de changer ces identifiants.



## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré avec succès Odoo sur ton VPS/serveur dédié. On te conseille aussi de jeter un œil aux ressources suivantes, qui peuvent t’apporter de l’aide et des conseils supplémentaires pendant ta configuration serveur :

- [Odoo.com](https://odoo.com) - Site officiel
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - Documentation Odoo

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou assistance, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂