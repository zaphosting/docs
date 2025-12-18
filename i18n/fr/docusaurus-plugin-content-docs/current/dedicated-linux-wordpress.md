---
id: dedicated-linux-wordpress
title: "Serveur dédié : Installation de WordPress"
description: "Découvrez comment installer WordPress sur un serveur Linux avec la stack LAMP pour créer et gérer votre site web efficacement → En savoir plus maintenant"
sidebar_label: Installer WordPress
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

WordPress est un système de gestion de contenu web très populaire utilisé pour gérer et publier des sites web. Aujourd’hui, WordPress s’est étendu à divers autres domaines comme le mailing, les forums, les boutiques en ligne et bien plus encore. Cela est renforcé par une communauté dynamique qui a créé un écosystème solide de plugins ainsi que des templates qui facilitent la mise en place de n’importe quoi en tant qu’utilisateur final. Dans ce guide, nous allons couvrir le processus d’installation du CMS WordPress sur un serveur Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## Préparation

Commencez par vous connecter à votre serveur via SSH. Si vous ne savez pas comment faire, jetez un œil à notre [guide d’accès initial (SSH)](dedicated-linux-ssh.md).

:::info
Dans ce guide, nous utiliserons la distribution Ubuntu, associée à Apache comme serveur web, MySQL pour la base de données et PHP comme dépendance principale. C’est ce qu’on appelle la stack LAMP : Linux, Apache, MySQL et PHP.
:::

Une fois connecté, commencez par lancer la commande de mise à jour.
```
sudo apt update
```

Ensuite, vous pouvez installer toutes les dépendances nécessaires. Copiez simplement la commande complète ci-dessous et collez-la pour installer toutes les dépendances en une fois. Soyez patient, cela peut prendre un peu de temps.
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

Une fois les dépendances installées, il y a quelques petites étapes recommandées à suivre pour s’assurer que toutes les dépendances principales de la stack LAMP fonctionnent correctement.

### Apache & Pare-feu

Pour commencer, vous devez configurer le pare-feu pour permettre au serveur web Apache de communiquer avec Internet et vous assurer qu’il fonctionne. Il est important que les règles appropriées du pare-feu soient créées pour que le serveur web soit accessible depuis Internet.

Dans cet exemple, nous utiliserons le **pare-feu UFW** car Apache a une application enregistrée pour celui-ci. Si vous utilisez un autre pare-feu, assurez-vous d’autoriser le port 80 (HTTP) à travers le pare-feu. Vous pouvez en apprendre plus sur les pare-feux sous Linux via notre guide [Gérer le pare-feu](vserver-linux-firewall.md).

Assurez-vous que le pare-feu UFW est activé et qu’une règle pour SSH est créée.
```
# Créer une règle pour autoriser SSH
sudo ufw allow OpenSSH

# Activer le pare-feu UFW
sudo ufw enable
```

:::caution
Assurez-vous d’avoir une règle configurée pour SSH si vous utilisez le pare-feu UFW ! Sinon, vous **ne pourrez pas** vous reconnecter en SSH si vous perdez la connexion à votre session actuelle !
:::

Créez maintenant la règle pour autoriser Apache puis vérifiez que les règles sont bien présentes.
```
# Créer une règle pour autoriser Apache
sudo ufw allow in "Apache Full"

# Vérifier les règles du pare-feu UFW
sudo ufw status
```

:::tip
Vous pouvez voir les profils disponibles en lançant la commande `ufw app list`. Dans l’exemple ci-dessus, utiliser `Apache Full` signifie que les règles pour HTTP (port 80) et HTTPS (port 443) sont créées.
:::

Vous devriez voir les règles `Apache` et `Apache (v6)` avec l’action `ALLOW`, ce qui confirme que le pare-feu est prêt. Vous verrez aussi d’autres règles que vous avez peut-être déjà configurées, y compris celle pour SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Avec le pare-feu ouvert pour Apache, vous devez maintenant vérifier qu’Apache fonctionne. Vous pouvez tester en accédant à votre adresse IP dans un navigateur, comme ceci : `http://[votre_adresse_ip]`

Si tout fonctionne, vous devriez voir une page d’accueil par défaut. Sinon, vérifiez le statut du service avec la commande : `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configuration MySQL

La prochaine étape est la configuration initiale de MySQL. Il est recommandé d’exécuter un script d’installation sécurisée, qui garantit que votre instance MySQL reste sécurisée. C’est optionnel mais fortement conseillé. Lancez-le avec la commande `sudo mysql_secure_installation`.

Cela vous guidera dans une configuration interactive. D’abord, vous serez invité à configurer la validation des mots de passe. On recommande de choisir `Y` pour n’autoriser que des mots de passe sécurisés à l’avenir, puis de sélectionner soit `MEDIUM` via `1` ou `STRONG` via `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Ensuite, vous serez invité à supprimer l’utilisateur `anonymous` et à interdire la connexion root à distance. Pour les deux, on recommande fortement de répondre `Y` pour des raisons de sécurité. Cela supprime l’utilisateur test et limite l’accès root à local via SSH uniquement, réduisant ainsi les risques.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Enfin, vous serez invité à supprimer la base de données `test` et à recharger les tables de privilèges. Là encore, on recommande d’accepter avec `Y` car la base test n’est pas nécessaire et il faut recharger les privilèges pour que les changements prennent effet.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Vérifiez maintenant si la base MySQL tourne en essayant de vous connecter avec la commande : `sudo mysql -u root`. Si ça marche, un message de bienvenue s’affichera. Vous pouvez quitter avec la commande `quit` quand vous êtes prêt.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Tester PHP

Enfin, vous devez vérifier que PHP fonctionne comme prévu. Pour cela, créez un fichier `info.php` dans le répertoire Apache `/var/www/html/` avec un contenu PHP qui exécute la commande `phpinfo()`.
```
# Ouvrir l’éditeur nano sur le nouveau fichier
nano /var/www/html/info.php

# Coller le contenu suivant dans l’éditeur
<?php
phpinfo();
?>
```

Une fois prêt, sauvegardez le fichier en appuyant sur `CTRL+X` puis `Y` et `Entrée` pour confirmer les modifications.

Accédez maintenant à l’URL suivante qui doit afficher une page d’info PHP si tout fonctionne correctement.
```
http://[votre_adresse_ip]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Avec les dépendances LAMP principales testées et fonctionnelles, vous êtes prêt à passer à l’installation principale du CMS WordPress.

## Installation

L’installation de WordPress se divise en trois étapes : préparer une base de données MySQL, installer WordPress, puis configurer via l’assistant d’installation WordPress.

### Base de données MySQL

Pour commencer l’installation, vous devez créer une nouvelle base de données MySQL. C’est important car vous utiliserez ces infos dans l’assistant d’installation WordPress plus tard, donc on vous conseille d’utiliser nos exemples.

Copiez simplement les commandes suivantes pour créer la base, les tables et l’utilisateur nécessaires.
```
# Connexion à MySQL
sudo mysql -u root

# Créer la base de données
CREATE DATABASE wordpress;

# Créer un utilisateur dédié wordpress
# Remplacez [your_password] par votre propre mot de passe
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Définir les privilèges pour l’utilisateur (copiez en une seule fois)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Recharger les tables de privilèges
FLUSH PRIVILEGES;
```

Une fois la base et l’utilisateur créés, quittez avec la commande `quit`. Vous êtes maintenant prêt à installer WordPress.

### Installer WordPress

Pour l’installation principale, on recommande d’utiliser la version officielle de **wordpress.org** directement plutôt que le paquet APT, car WordPress le conseille pour éviter des soucis potentiels.

Pour télécharger la dernière version, utilisez la commande suivante qui télécharge la release dans le dossier temporaire.
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Décompressez ensuite l’archive, ce qui créera un dossier `wordpress` avec tous les fichiers nécessaires.
```
tar -xvf latest.tar.gz
```

Avec les fichiers extraits, vous devez copier le dossier dans le répertoire Apache `/var/www/html/` pour rendre tout accessible via le web. Lancez les commandes suivantes qui copient le dossier, créent un dossier `uploads` et ajustent les permissions pour que le groupe `www-data` du serveur web ait accès.
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

Avec ça, WordPress devrait être installé. Accédez à l’assistant d’installation WordPress via : `http://[votre_adresse_ip]/wordpress`

### Assistant d’installation

Dans l’assistant, vous pouvez maintenant configurer WordPress, c’est la dernière étape de l’installation. D’abord, vous serez invité à choisir votre langue.

Ensuite, vous devrez configurer les paramètres de la base de données. Vous avez déjà préparé ça dans MySQL lors de la première étape, donc utilisez les mêmes identifiants et valeurs ici. Si vous avez suivi nos exemples, remplissez comme suit en remplaçant `[your_password]` par le mot de passe que vous avez choisi.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Une fois cette étape terminée, vous serez invité à lancer l’installation. C’est la dernière partie du processus.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Sur la page suivante, vous devrez renseigner plusieurs infos comme le titre du site, une adresse email, un nom d’utilisateur et un mot de passe pour le compte root WordPress qui permettra d’accéder au panneau. Vous pouvez aussi choisir la visibilité pour les moteurs de recherche, si vous voulez que votre site soit indexé ou non.

:::tip
Pensez à choisir un mot de passe fort et à sauvegarder vos identifiants pour ne pas perdre l’accès à votre panneau WordPress !
:::

Quand vous êtes prêt, cliquez sur le bouton **Installer WordPress** pour finaliser l’installation.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Vous arriverez sur une page de succès qui vous redirige vers la page de **Connexion**. Cliquez dessus puis utilisez vos identifiants pour vous connecter à votre panneau WordPress pour la toute première fois !

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

Et voilà, une fois connecté avec succès, vous êtes sur votre panneau WordPress, avec une installation complète.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Conclusion

Félicitations, vous avez installé et configuré WordPress avec succès ! Comme prochaine étape, on vous **recommande vivement** de configurer un domaine et un **certificat SSL** pour garantir que les données soient transmises de manière sécurisée et faciliter l’accès au panneau WordPress. Consultez notre [guide Certbot](dedicated-linux-certbot.md) en vous concentrant sur le **plugin Apache** et suivez la configuration interactive pour mettre en place rapidement et facilement un certificat pour votre domaine.

Pour aller plus loin, on vous conseille de parcourir nos guides [Plugins WordPress](webspace-wordpress-plugins.md) et [WordPress Elementor](webspace-wordpress-elementor.md) qui expliquent comment installer des plugins et utiliser Elementor, un constructeur de pages populaire et facile à prendre en main.

Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous assister ! 🙂