---
id: dedicated-linux-wordpress
title: "Configurer WordPress sur un serveur Linux - Lance ton propre site web ou blog"
description: "Découvre comment installer WordPress sur un serveur Linux avec la stack LAMP pour créer et gérer ton site web efficacement → En savoir plus maintenant"
sidebar_label: Installer WordPress
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

WordPress est un système de gestion de contenu web très populaire utilisé pour gérer et publier des sites web. De nos jours, WordPress s’est étendu à plein d’autres domaines comme le mailing, les forums, les boutiques et bien plus encore. Tout ça est soutenu par une communauté dynamique qui a créé un écosystème solide de plugins ainsi que des templates qui rendent la configuration super simple pour les utilisateurs finaux. Dans ce guide, on va voir comment installer le CMS WordPress sur un serveur Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## Installer WordPress avec le One Click Apps Installer

Tu peux installer **WordPress** directement via notre **One Click Apps Installer** dans l’interface web de ton VPS. Après avoir fait la configuration initiale des apps, ouvre le catalogue d’applications, cherche **WordPress**, et lance le déploiement avec ton projet, environnement et paramètres de domaine préférés. C’est une manière rapide et simple de déployer et gérer **WordPress** sans passer par la ligne de commande, tout en profitant d’une gestion intégrée via le web, du support de domaine personnalisé, et de la mise en place SSL quand c’est dispo.

## Préparation

Commence par te connecter à ton serveur via SSH. Si tu ne sais pas comment faire, jette un œil à notre guide [Accès initial (SSH)](dedicated-linux-ssh.md).

:::info
Dans ce guide, on utilise la distro Ubuntu, avec Apache comme serveur web, MySQL pour la base de données et PHP comme dépendance principale. C’est ce qu’on appelle la stack LAMP : Linux, Apache, MySQL et PHP.
:::

Une fois connecté, commence par lancer la commande de mise à jour.
```
sudo apt update
```

Ensuite, tu peux installer toutes les dépendances nécessaires. Copie simplement la commande complète ci-dessous et colle-la pour tout installer d’un coup. Sois patient, ça peut prendre un peu de temps.
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

Une fois les dépendances installées, il y a quelques petites étapes recommandées à suivre pour s’assurer que toutes les dépendances principales de la stack LAMP fonctionnent bien.

### Apache & Pare-feu

Pour commencer, tu dois configurer le pare-feu pour permettre au serveur web Apache de communiquer avec Internet et vérifier qu’il fonctionne. C’est important de créer les règles de pare-feu appropriées pour que le serveur web soit accessible depuis Internet.

Dans cet exemple, on utilise le **pare-feu UFW** car Apache a une application enregistrée pour ça. Si tu utilises un autre pare-feu, assure-toi d’autoriser le port 80 (HTTP) à travers le pare-feu. Tu peux en apprendre plus sur les pare-feux sous Linux via notre guide [Gérer le pare-feu](vserver-linux-firewall.md).

Assure-toi que le pare-feu UFW est activé et qu’une règle pour SSH est créée.
```
# Crée une règle pour autoriser SSH
sudo ufw allow OpenSSH

# Active le pare-feu UFW
sudo ufw enable
```

:::caution
Assure-toi d’avoir une règle pour SSH si tu utilises le pare-feu UFW ! Sinon, tu **ne pourras pas** te reconnecter en SSH si ta session actuelle est perdue !
:::

Maintenant, crée la règle pour autoriser Apache puis vérifie que les règles sont bien en place.
```
# Crée une règle pour autoriser Apache
sudo ufw allow in "Apache Full"

# Vérifie les règles du pare-feu UFW
sudo ufw status
```

:::tip
Tu peux voir les profils disponibles avec la commande `ufw app list`. Dans l’exemple ci-dessus, utiliser `Apache Full` signifie que les règles pour HTTP (port 80) et HTTPS (port 443) sont créées.
:::

Tu devrais voir les règles `Apache` et `Apache (v6)` avec l’action `ALLOW`, ce qui confirme que le pare-feu est prêt. Tu verras aussi les autres règles que tu as peut-être déjà configurées, y compris celle pour SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Avec le pare-feu ouvert pour Apache, vérifie maintenant qu’Apache fonctionne. Tu peux tester en accédant à ton adresse IP dans un navigateur, comme ceci : `http://[ton_adresse_ip]`

Si ça fonctionne, tu devrais voir une page d’accueil par défaut. Sinon, vérifie le statut du service avec la commande : `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configuration MySQL

La prochaine étape est la configuration initiale de MySQL. Il est recommandé de lancer un script d’installation sécurisée, qui garantit que ton instance MySQL reste sécurisée. C’est optionnel mais fortement conseillé. Tu peux le faire avec la commande `sudo mysql_secure_installation`.

Tu seras guidé dans une configuration interactive. D’abord, on te demandera la validation des mots de passe. On recommande de choisir `Y` pour n’autoriser que des mots de passe sécurisés à l’avenir, puis de sélectionner soit `MEDIUM` via `1` ou `STRONG` via `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Ensuite, on te demandera si tu veux supprimer l’utilisateur `anonymous` et interdire la connexion root à distance. Pour les deux, on recommande fortement de répondre `Y` pour des raisons de sécurité. Ça supprime l’utilisateur test et limite l’accès root à local via SSH uniquement, ce qui réduit les risques.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Enfin, on te demandera si tu veux supprimer la base de données `test` et recharger les tables de privilèges. Là encore, on recommande de répondre `Y` car la base test n’est pas nécessaire et il faut recharger les privilèges pour que les changements prennent effet.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Vérifie maintenant si la base MySQL tourne bien en essayant de te connecter avec la commande : `sudo mysql -u root`. Si ça marche, tu verras un message de bienvenue. Tu peux sortir avec la commande `quit` quand tu veux.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Tester PHP

Enfin, assure-toi que PHP fonctionne comme prévu. Pour ça, crée un fichier `info.php` dans le répertoire Apache `/var/www/html/` avec un contenu PHP qui lance la commande `phpinfo()`.
```
# Ouvre l’éditeur nano sur le nouveau fichier
nano /var/www/html/info.php

# Colle ce contenu dans l’éditeur
<?php
phpinfo();
?>
```

Une fois prêt, sauvegarde le fichier en appuyant sur `CTRL+X` puis `Y` et `Entrée` pour confirmer les modifications.

Accède maintenant à cette URL qui doit afficher une page d’info PHP si tout fonctionne bien.
```
http://[ton_adresse_ip]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Avec les dépendances LAMP principales testées et fonctionnelles, tu es prêt à passer à l’installation principale du CRM WordPress.

## Installation

L’installation de WordPress se divise en trois étapes : préparer une base de données MySQL, installer WordPress, puis configurer via l’assistant d’installation WordPress.

### Base de données MySQL

Pour commencer l’installation, tu dois créer une nouvelle base de données MySQL. C’est important car tu utiliseras ces infos dans l’assistant d’installation WordPress plus tard, donc on te conseille d’utiliser nos exemples.

Copie simplement les commandes suivantes pour créer la base, les tables et les utilisateurs nécessaires.
```
# Connexion à MySQL
sudo mysql -u root

# Créer la base de données
CREATE DATABASE wordpress;

# Créer un utilisateur dédié wordpress
# Remplace [your_password] par ton propre mot de passe
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Définir les privilèges pour l’utilisateur (copie en une seule fois)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Recharger les tables de privilèges
FLUSH PRIVILEGES;
```

Une fois la base et l’utilisateur créés, sors avec la commande `quit`. Tu es maintenant prêt à installer WordPress.

### Installer WordPress

Pour l’installation principale, on recommande et on va utiliser la version officielle de **wordpress.org** plutôt que le paquet APT, car WordPress conseille ça pour éviter des soucis potentiels.

Pour télécharger la dernière version, utilise cette commande qui récupère la release dans le dossier temporaire.
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Maintenant, décompresse l’archive qui va créer un dossier `wordpress` avec tous les fichiers nécessaires.
```
tar -xvf latest.tar.gz
```

Avec les fichiers extraits, tu dois copier le dossier dans le répertoire Apache `/var/www/html/` pour que tout soit accessible via le web. Lance les commandes suivantes qui copient le dossier, créent un dossier `uploads` et ajustent les permissions pour que le groupe `www-data` du serveur web ait accès.
```
# Copier le dossier wordpress et mettre à jour la propriété
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Créer le dossier uploads
mkdir /var/www/html/wordpress/wp-content/uploads

# Ajuster les permissions des fichiers
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

Et voilà, WordPress devrait être installé. Accède à l’assistant d’installation WordPress via : `http://[ton_adresse_ip]/wordpress`

### Assistant d’installation

Avec l’assistant, tu peux maintenant configurer WordPress, c’est la dernière étape de l’installation. D’abord, tu seras invité à choisir ta langue.

Ensuite, tu devras configurer les paramètres de la base de données. Tu as déjà préparé ça dans MySQL au début, donc utilise les mêmes identifiants et valeurs ici. Si tu as suivi nos exemples, remplis les options comme ci-dessous, en remplaçant `[your_password]` par le mot de passe que tu as choisi.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Une fois cette étape terminée, tu seras invité à lancer l’installation. C’est la dernière partie du processus.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Sur la page suivante, tu devras entrer plusieurs infos comme le titre du site, une adresse email, un nom d’utilisateur et un mot de passe pour le compte root WordPress qui te permettra d’accéder au panneau. Tu peux aussi décider de la visibilité pour les moteurs de recherche, si tu veux que ton site soit indexé ou non.

:::tip
Pense bien à choisir un mot de passe solide et à sauvegarder tes identifiants pour ne pas perdre l’accès à ton panneau WordPress !
:::

Quand tu es prêt, clique sur le bouton **Installer WordPress** pour finaliser l’installation.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Tu seras redirigé vers une page de succès qui t’envoie vers la page de **Connexion**. Clique dessus puis utilise tes identifiants pour te connecter à ton panneau WordPress pour la toute première fois !

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

Et voilà, une fois connecté avec succès, tu es maintenant sur ton panneau WordPress, avec une installation complète.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Conclusion

Félicitations, tu as installé et configuré WordPress avec succès ! La prochaine étape, on te **recommande vivement** de configurer un domaine et un **certificat SSL** pour sécuriser la transmission des données et faciliter l’accès au panneau WordPress. Consulte notre [guide Certbot](dedicated-linux-certbot.md) en te concentrant sur le **plugin Apache** et suis la configuration interactive pour mettre en place rapidement un certificat pour ton domaine.

Pour aller plus loin, on te conseille de jeter un œil à nos guides [Plugins WordPress](webspace-wordpress-plugins.md) et [WordPress Elementor](webspace-wordpress-elementor.md) qui expliquent comment installer des plugins et utiliser Elementor, un constructeur de pages populaire et super simple à prendre en main.

Si tu as d’autres questions ou besoin d’aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’assister ! 🙂