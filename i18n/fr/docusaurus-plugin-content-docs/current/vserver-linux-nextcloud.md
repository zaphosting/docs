---
id: vserver-linux-nextcloud
title: "Installer Nextcloud sur un serveur Linux - Crée ta propre solution de stockage cloud privée"
description: "Découvre comment configurer un serveur Nextcloud performant sous Linux pour un hébergement cloud optimal → En savoir plus maintenant"
sidebar_label: Installer Nextcloud
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Nextcloud est une solution cloud open source et un fork d’Owncloud, fondée en 2016 par Frank Kalitschek, ancien fondateur d’Owncloud.

![](https://screensaver01.zap-hosting.com/index.php/s/kCndbKaFAaktERk/preview)

Pour garantir des performances, une stabilité et des fonctionnalités optimales, la configuration suivante est recommandée pour héberger un serveur Nextcloud. Le serveur Nextcloud n’est pas compatible avec Windows ni MacOS. Du moins pas sans virtualisation supplémentaire ou autres contournements similaires.

## Installer Nextcloud avec le One Click Apps Installer

Tu peux installer **Nextcloud** directement via notre **One Click Apps Installer** dans l’interface web de ton VPS. Après avoir terminé la configuration initiale des apps, ouvre le catalogue d’applications, cherche **Nextcloud**, et lance le déploiement avec tes paramètres préférés pour le projet, l’environnement et le domaine. C’est une manière rapide et simple de déployer et gérer **Nextcloud** sans passer par la ligne de commande, tout en profitant d’une gestion web intégrée, du support de domaine personnalisé et de la mise en place SSL quand disponible.

<InlineVoucher />

## Préparation

Les prérequis suivants sont recommandés par les développeurs et basés sur notre propre expérience. Tu risques d’avoir des soucis si tu ne respectes pas ces conditions.

#### Matériel

| Composants    | Minimum                | Recommandé                  |
| ------------- | ---------------------- | --------------------------- |
| CPU           | 2x 1 GHz               | 4x 2+ GHz                   |
| RAM           | 512 Mo                 | 4+ Go                       |
| Stockage      | 10 Go                  | 50+ Go                      |
| Bande passante| 100 Mbit/s (up & down) | 500 Mbit/s (up & down) Recommandé si plusieurs utilisateurs doivent utiliser le cloud |

#### Logiciel

| Plateforme        | Options                                                      |
| ----------------- | ------------------------------------------------------------ |
| Système d’exploitation | Ubuntu (14.04, 16.04, 18.04), Debian (8,9,10), CentOS 6.5/7   |
| Base de données   | MySQL ou MariaDB 5.5+ (recommandé), SQLite (uniquement pour tests et instances minimales) |
| Serveur web      | Apache 2.4 avec `mod_php` ou `php-fpm` (recommandé)          |
| PHP              | 5.6, 7.0 (recommandé), 7.1 (recommandé), 7.2                 |

Une connexion via un client SSH est nécessaire pour installer le cloud sur un serveur Linux. Si tu ne sais pas comment utiliser SSH, voici un guide pour t’aider : [Accès initial (SSH)](vserver-linux-ssh.md)

Une fois la connexion établie, tu peux commencer à installer les paquets nécessaires à l’installation de Nextcloud. Cela inclut l’installation d’un serveur web ainsi que PHP.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Debian" label="Debian" default>

<br/>

**Apache (serveur web)**

🗄️ Debian 8/9/10 :
```
sudo apt update && sudo apt -y upgrade
sudo apt -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Debian 8 :
```
# Étape 1 : Ajouter le dépôt PPA PHP 7.3
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Étape 2 : Installer PHP 7.3
sudo apt -y install php7.3

# Étape 3 : Installer les extensions PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 9 :
```
# Étape 1 : Ajouter le dépôt PPA PHP 7.3
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Étape 2 : Installer PHP 7.3
sudo apt -y install php7.3

# Étape 3 : Installer les extensions PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 10 :
```
# Étape 1 : Installer PHP 7.3
sudo apt -y install php php-common

# Étape 2 : Installer les extensions PHP 7.3
sudo apt -y install php-cli php-fpm php-json php-pdo php-mysql php-zip php-gd  php-mbstring php-curl php-xml php-pear php-bcmath
```

Vérifie la version de PHP pour confirmer le bon fonctionnement
```
php -v
```

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

<br/>

**Apache (serveur web)**

🗄️ Ubuntu 16.X/18.X/19.X :
```
sudo apt update && sudo apt -y upgrade
sudo apt-get -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Ubuntu 16.X :
```
# Étape 1 : Ajouter le PPA PHP 7.3
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Étape 2 : Installer PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Étape 3 : Installer les extensions PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 18.X :
```
# Étape 1 : Ajouter le PPA PHP 7.3
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Étape 2 : Installer PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Étape 3 : Installer les extensions PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 19.X :
```
# Étape 1 : Ajouter le PPA PHP 7.3
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Étape 2 : Installer PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Étape 3 : Installer les extensions PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

Vérifie la version de PHP pour confirmer le bon fonctionnement
```
php -v
```


</TabItem>
<TabItem value="CentOS" label="CentOS">
<br/>

**Apache (serveur web)**

🗄️ CentOS 6 :
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd.service
```

🗄️ CentOS 7 :
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

🗄️ CentOS 8 :
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

**PHP (Hypertext Preprocessor)**

🗄️ CentOS 6 :
```
# Étape 1 : Configurer le dépôt Yum
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# Étape 2 : Installer PHP 7.3
yum --enablerepo=remi-php73 install php

# Étape 3 : Installer les extensions PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7 :
```
# Étape 1 : Configurer le dépôt Yum
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# Étape 2 : Installer PHP 7.3
yum --enablerepo=remi-php73 install php

# Étape 3 : Installer les extensions PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8 :
```
# Étape 1 : Configurer le dépôt Yum
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# Étape 2 : Installer PHP 7.3
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

Vérifie la version de PHP pour confirmer le bon fonctionnement
```
php -v
```

</TabItem>
</Tabs>

L’étape suivante consiste à définir un type de base de données pour stocker les infos nécessaires. Plusieurs options sont possibles :


<Tabs>

<TabItem value="MariaDB" label="MariaDB" default>

<br/>
Si tu as choisi ce type de base de données, suis ces étapes :

Installation des paquets :
```
sudo apt-get install mariadb-server php-mysql
```

Pendant l’installation, il te sera demandé de définir un mot de passe root. S’il n’y a pas de demande, le mot de passe par défaut est vide. Ce n’est pas sécurisé, il faut donc le changer immédiatement après !

Ensuite, connecte-toi au serveur de base de données et crée la base requise :

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Puis crée un utilisateur qui aura accès à la base Nextcloud.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'VOTRE_MOT_DE_PASSE_ICI';
```

:::info
Ne saute pas cette étape en utilisant l’utilisateur root. Ce n’est pas sécurisé et met tes données en danger !
:::

Enfin, attribue les permissions à ce nouvel utilisateur :

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Quand c’est fait, appuie sur Ctrl-D pour quitter la base et continue avec les étapes suivantes.

</TabItem>
<TabItem value="MySQL" label="MySQL">

<br/>
Si tu as choisi ce type de base de données, suis ces étapes :

Installation des paquets :
```
sudo apt-get install mysql-server php-mysql
```

Pendant l’installation, il te sera demandé de définir un mot de passe root. S’il n’y a pas de demande, le mot de passe par défaut est vide. Ce n’est pas sécurisé, il faut donc le changer immédiatement après !

Ensuite, connecte-toi au serveur de base de données et crée la base requise :

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Puis crée un utilisateur qui aura accès à la base Nextcloud.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'VOTRE_MOT_DE_PASSE_ICI';
```

:::info
Ne saute pas cette étape en utilisant l’utilisateur root. Ce n’est pas sécurisé et met tes données en danger !
:::


Enfin, attribue les permissions à ce nouvel utilisateur :

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Quand c’est fait, appuie sur Ctrl-D pour quitter la base et continue avec les étapes suivantes.

</TabItem>
<TabItem value="PostgreSQL" label="PostgreSQL">
<br/>
Si tu as choisi ce type de base de données, suis ces étapes :

Installation des paquets :
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

Pendant l’installation, il te sera demandé de définir un mot de passe root. S’il n’y a pas de demande, le mot de passe par défaut est vide. Ce n’est pas sécurisé, il faut donc le changer immédiatement après !

Ensuite, connecte-toi au serveur de base de données et crée la base requise :

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

Puis crée un utilisateur qui aura accès à la base Nextcloud.

```sql
CREATE USER nextcloud with encrypted password 'VOTRE_MOT_DE_PASSE_ICI';
```

:::info
Ne saute pas cette étape en utilisant l’utilisateur root. Ce n’est pas sécurisé et met tes données en danger !
:::

Enfin, attribue les permissions à ce nouvel utilisateur :

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

Quand c’est fait, appuie sur Ctrl-D pour quitter la base. Ensuite, tu peux modifier la base PostgreSQL soit via l’installateur web, soit via le fichier **config.php**.

```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "pgsql",
  "dbname"        => "nextcloud",
  "dbuser"        => "username",
  "dbpass"        => "password",
  "dbhost"        => "localhost",
  "dbtableprefix" => "",
);
```

</TabItem>
<TabItem value="SQLite" label="SQLite">

<br/>
Si tu as choisi ce type de base de données, suis ces étapes :

Installation des paquets :
```
apt-get install sqlite3 php-sqlite3
```

Créer une nouvelle base SQLite 3
```
sqlite3 DatabaseName.db
```

Après ça, la base SQLite 3 peut être modifiée soit via l’installateur web, soit via le fichier **config.php**.
```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "sqlite",
  "dbname"        => "nextcloud",
  "dbtableprefix" => "",
);
```
</TabItem>
</Tabs>

## Installation

Maintenant, l’installation proprement dite de Nextcloud peut commencer. Il faut télécharger et décompresser le logiciel :
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

Une fois cette étape terminée, lance le script d’installation. L’accès se fait via le navigateur à l’URL suivante :

:::info
**http://domaine.tld/nextcloud/** 
:::

La configuration du script d’installation apparaît, où un utilisateur root est créé et les infos de la base de données définies :

![](https://screensaver01.zap-hosting.com/index.php/s/79kgamkS36Dgi9x/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/qJs3Sd8TiYAg6mB/preview)


## Sécurité et protection

**Avertissements de configuration**

![](https://screensaver01.zap-hosting.com/index.php/s/nat3Fekj6MRP8Nw/preview)



**Répertoire des données**

Il est fortement recommandé de placer le répertoire des données en dehors du répertoire racine web (c’est-à-dire en dehors de /var/www). Le plus simple est de le faire lors d’une nouvelle installation. Le répertoire peut être défini pendant la configuration. Cependant, il faut d’abord créer ce répertoire et définir les permissions correspondantes. Par exemple, les données peuvent être stockées dans un dossier appelé Cloud dans le répertoire personnel.

```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS via certificat SSL (Let's Encrypt)** 

Une bonne solution cloud doit être accessible uniquement via une connexion SSL. Sans chiffrement SSL, les données et infos sont transférées en clair. Ces infos peuvent être interceptées et lues facilement et rapidement sans chiffrement.

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
 DocumentRoot "/var/www/nextcloud"
 ServerName domaine.tld

 ErrorLog ${APACHE_LOG_DIR}/error.log
 CustomLog ${APACHE_LOG_DIR}/access.log combined

<Directory /var/www/nextcloud/>
 Options +FollowSymlinks
 AllowOverride All

 <IfModule mod_dav.c>
 Dav off
 </IfModule>

 SetEnv HOME /var/www/nextcloud
 SetEnv HTTP_HOME /var/www/nextcloud
 Satisfy Any

</Directory>

SSLCertificateFile /etc/letsencrypt/live/domaine.tld/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/domaine.tld/privkey.pem
</VirtualHost>
</IfModule>

<IfModule mod_headers.c>
     Header always set Strict-Transport-Security "max-age=15768000; preload"
 </IfModule>
```



De plus, tout le trafic HTTP doit être redirigé vers HTTPS via une redirection permanente avec le code 301. Cela peut être fait avec Apache en utilisant une configuration comme celle-ci pour les VirtualHosts Apache :

```
<VirtualHost *:80>
   ServerName domaine.tld
   Redirect permanent / https://domaine.tld/
</VirtualHost>
```


## Gérer Nextcloud

L’accès à Nextcloud est possible via navigateur, ainsi que via smartphone et ordinateur avec l’app. Tu peux télécharger les apps ici : https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/aw6qpNE7TkwQeaP/preview)

Dans les paramètres, tu peux ajuster encore plein d’options après l’installation et consulter des infos importantes comme les logs, activités. Cela inclut des réglages de sécurité supplémentaires (authentification à deux facteurs, chiffrement, ...), des options de design (logo, couleur, slogan, header), les réglages d’accès et bien plus.

**Apps**

En plus, tu peux installer des apps supplémentaires en plus des apps par défaut. Tu y accèdes via le menu **Apps**.

![](https://screensaver01.zap-hosting.com/index.php/s/wKERd24E25668kt/preview)

Avec ces **Apps**, tu peux personnaliser Nextcloud encore plus selon tes envies.


## Conclusion

Félicitations, tu as installé Nextcloud avec succès ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !

<InlineVoucher />