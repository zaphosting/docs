---
id: dedicated-linux-wordpress
title: "Installer WordPress sur un serveur Linux - Lance ton propre site web ou blog"
description: "Découvre comment installer WordPress sur un serveur Linux avec la stack LAMP pour créer et gérer ton site web efficacement → En savoir plus maintenant"
sidebar_label: Installer WordPress
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

WordPress est un système de gestion de contenu web très populaire utilisé pour gérer et publier des sites web. Aujourd’hui, WordPress s’est étendu à plein d’autres domaines comme le mailing, les forums, les boutiques en ligne et bien plus encore. Tout ça grâce à une communauté dynamique qui a créé un écosystème solide de plugins et de templates, rendant la configuration super simple pour les utilisateurs finaux. Dans ce guide, on va voir comment installer le CMS WordPress sur un serveur Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## Préparation

Commence par te connecter à ton serveur via SSH. Si tu ne sais pas comment faire, jette un œil à notre [guide d’accès initial (SSH)](dedicated-linux-ssh.md).

:::info
Dans ce guide, on utilise la distro Ubuntu, avec Apache comme serveur web, MySQL pour la base de données et PHP comme dépendance principale. C’est ce qu’on appelle la stack LAMP : Linux, Apache, MySQL et PHP.
:::

Une fois connecté, lance la commande de mise à jour.
```
sudo apt update
```

Ensuite, installe toutes les dépendances nécessaires. Copie-colle la commande complète ci-dessous pour tout installer d’un coup. Sois patient, ça peut prendre un peu de temps.
```
sudo apt install apache2 \
                 ghostscript \
                 libapache2-mod-php \
                 mysql-server \
                 php \
                 php-bcmath \
                 php-curl \
                 php-imagick \
                 php-intl \
                 php-json \
                 php-mbstring \
                 php-mysql \
                 php-xml \
                 php-zip
```

Une fois les dépendances installées, il y a quelques petites étapes recommandées pour s’assurer que toutes les dépendances clés de la stack LAMP fonctionnent bien.

### Apache & Pare-feu

Pour commencer, il faut configurer le pare-feu pour que le serveur web Apache puisse communiquer avec Internet et s’assurer qu’il fonctionne. C’est super important de créer les bonnes règles dans le pare-feu pour que le serveur web soit accessible depuis Internet.

Ici, on utilise le **pare-feu UFW** parce qu’Apache a une application enregistrée pour ça. Si tu utilises un autre pare-feu, assure-toi d’autoriser le port 80 (HTTP). Tu peux en apprendre plus sur les pare-feux Linux dans notre [guide Gérer le pare-feu](vserver-linux-firewall.md).

Vérifie que le pare-feu UFW est activé et qu’une règle pour SSH est bien créée.
```
# Crée une règle pour autoriser SSH
sudo ufw allow OpenSSH

# Active le pare-feu UFW
sudo ufw enable
```

:::caution
Assure-toi d’avoir une règle pour SSH si tu utilises UFW ! Sinon, tu **ne pourras plus** te connecter en SSH si ta session actuelle est coupée !
:::

Maintenant, crée la règle pour autoriser Apache puis vérifie que les règles sont bien en place.
```
# Crée une règle pour autoriser Apache
sudo ufw allow in "Apache Full"

# Vérifie les règles du pare-feu UFW
sudo ufw status
```

:::tip
Tu peux voir les profils disponibles avec la commande `ufw app list`. Dans l’exemple, `Apache Full` crée les règles pour HTTP (port 80) et HTTPS (port 443).
:::

Tu devrais voir les règles `Apache` et `Apache (v6)` avec l’action `ALLOW`, ce qui confirme que le pare-feu est prêt. Tu verras aussi les autres règles que tu as pu configurer, y compris celle pour SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Avec le pare-feu ouvert pour Apache, vérifie maintenant qu’Apache fonctionne. Pour ça, essaie d’accéder à ton adresse IP dans un navigateur, comme ceci : `http://[ton_adresse_ip]`

Si ça marche, tu verras une page d’accueil par défaut. Sinon, vérifie le statut du service avec : `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configuration MySQL

La prochaine étape, c’est la configuration initiale de MySQL. On recommande de lancer un script d’installation sécurisée pour garder ton serveur MySQL bien protégé. C’est optionnel mais vraiment conseillé. Lance la commande `sudo mysql_secure_installation`.

Tu seras guidé dans une configuration interactive. D’abord, il te sera demandé si tu veux activer la validation des mots de passe. On recommande de répondre `Y` pour n’autoriser que des mots de passe sécurisés, puis de choisir `MEDIUM` avec `1` ou `STRONG` avec `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Ensuite, il te sera demandé de supprimer l’utilisateur `anonymous` et d’interdire la connexion root à distance. On recommande fortement de répondre `Y` pour les deux, pour des raisons de sécurité. Ça supprime l’utilisateur test et limite l’accès root à la machine locale via SSH, ce qui réduit les risques.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Enfin, il te sera demandé de supprimer la base de données `test` et de recharger les tables de privilèges. Là encore, réponds `Y` car la base test n’est pas nécessaire et il faut recharger les privilèges pour que les changements prennent effet.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Vérifie maintenant que la base MySQL tourne bien en essayant de te connecter avec : `sudo mysql -u root`. Si ça marche, tu verras un message de bienvenue. Tu peux sortir avec la commande `quit`.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Tester PHP

Pour finir, vérifie que PHP fonctionne comme prévu. Crée un fichier `info.php` dans le dossier Apache `/var/www/html/` avec un contenu PHP qui lance la commande `phpinfo()`.
```
# Ouvre l’éditeur nano sur le nouveau fichier
nano /var/www/html/info.php

# Colle ce contenu dans l’éditeur
<?php
phpinfo();
?>
```

Sauvegarde avec `CTRL+X`, puis `Y` et `Entrée` pour confirmer.

Accède ensuite à cette URL qui doit afficher une page d’info PHP si tout est OK.
```
http://[ton_adresse_ip]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Avec les dépendances LAMP testées et fonctionnelles, tu peux maintenant passer à l’installation principale de WordPress.

## Installation

L’installation de WordPress se divise en trois étapes : préparer la base MySQL, installer WordPress, puis configurer via l’assistant d’installation WordPress.

### Base de données MySQL

Pour commencer, crée une nouvelle base MySQL. C’est important de bien retenir ces infos car tu en auras besoin dans l’assistant WordPress plus tard. On te conseille d’utiliser nos exemples.

Copie-colle ces commandes pour créer la base, les tables et l’utilisateur.
```
# Connexion à MySQL
sudo mysql -u root

# Crée la base de données
CREATE DATABASE wordpress;

# Crée un utilisateur dédié wordpress
# Remplace [your_password] par ton propre mot de passe
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Donne les privilèges à l’utilisateur (copie en une fois)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Recharge les tables de privilèges
FLUSH PRIVILEGES;
```

Une fois la base et l’utilisateur créés, quitte avec la commande `quit`. Tu es prêt pour installer WordPress.

### Installer WordPress

Pour l’installation principale, on recommande de prendre la version officielle de **wordpress.org** plutôt que le paquet APT, car c’est ce que WordPress conseille pour éviter les soucis.

Pour télécharger la dernière version, utilise cette commande qui la récupère dans le dossier temporaire.
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Décompresse ensuite l’archive, ça va créer un dossier `wordpress` avec tous les fichiers nécessaires.
```
tar -xvf latest.tar.gz
```

Avec les fichiers extraits, copie le dossier dans `/var/www/html/` d’Apache pour que tout soit accessible via le web. Lance ces commandes pour copier, créer un dossier `uploads` et ajuster les permissions pour que le groupe `www-data` ait accès.
```
# Copie le dossier wordpress et mets à jour la propriété
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Crée le dossier uploads
mkdir /var/www/html/wordpress/wp-content/uploads

# Ajuste les permissions des fichiers
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

Avec ça, WordPress est installé. Accède à l’assistant d’installation via : `http://[ton_adresse_ip]/wordpress`

### Assistant d’installation

Dans l’assistant, tu vas configurer WordPress, c’est la dernière étape. D’abord, choisis ta langue.

Ensuite, configure les paramètres de la base de données. Tu as déjà préparé ça dans MySQL, donc utilise les mêmes identifiants. Si tu as suivi nos exemples, remplis comme suit en remplaçant `[your_password]` par ton mot de passe.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Après ça, lance l’installation.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Sur la page suivante, renseigne le titre du site, une adresse email, un nom d’utilisateur et un mot de passe pour le compte admin WordPress. Tu peux aussi choisir si tu veux que ton site soit indexé par les moteurs de recherche ou non.

:::tip
Choisis un mot de passe solide et garde bien tes identifiants pour ne pas perdre l’accès à ton panneau WordPress !
:::

Quand tu es prêt, clique sur **Installer WordPress** pour finir l’installation.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Tu seras redirigé vers une page de succès qui te mène à la page de connexion. Clique dessus et connecte-toi avec tes identifiants pour la première fois !

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

Et voilà, une fois connecté, tu arrives sur ton panneau WordPress avec une installation complète.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Conclusion

Félicitations, tu as installé et configuré WordPress avec succès ! La prochaine étape, on te recommande **fortement** de configurer un domaine et un **certificat SSL** pour sécuriser les échanges et faciliter l’accès au panneau WordPress. Consulte notre [guide Certbot](dedicated-linux-certbot.md) en te concentrant sur le **plugin Apache** et suis la configuration interactive pour mettre en place un certificat rapidement et facilement pour ton domaine.

Pour aller plus loin, on te conseille de jeter un œil à nos guides [Plugins WordPress](webspace-wordpress-plugins.md) et [WordPress Elementor](webspace-wordpress-elementor.md) qui expliquent comment installer des plugins et utiliser Elementor, un constructeur de pages super populaire et facile à prendre en main.

Si tu as des questions ou besoin d’aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂