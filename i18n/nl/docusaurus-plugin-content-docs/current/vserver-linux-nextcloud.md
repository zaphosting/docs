---
id: vserver-linux-nextcloud
title: "Nextcloud installeren op een Linux-server - Bouw je eigen private cloud opslag"
description: "Ontdek hoe je een krachtige Nextcloud-server op Linux opzet voor optimale cloud hosting → Leer het nu"
sidebar_label: Nextcloud installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Nextcloud is een open source cloudoplossing en een fork van Owncloud, opgericht in 2016 door de voormalige Owncloud-oprichter Frank Kalitschek.

![](https://screensaver01.zap-hosting.com/index.php/s/kCndbKaFAaktERk/preview)

Voor optimale performance, stabiliteit en functionaliteit wordt de volgende setup aanbevolen voor het hosten van een Nextcloud-server. De Nextcloud-server is niet compatibel met Windows en MacOS. Tenminste niet zonder extra virtualisatie of vergelijkbare workarounds.

<InlineVoucher />

## Voorbereiding

De volgende vereisten worden aanbevolen door de ontwikkelaars en zijn gebaseerd op onze eigen ervaring. Je kunt problemen tegenkomen als je niet aan deze voorwaarden voldoet.

#### Hardware

| Componenten   | Minimaal              | Aanbevolen                  |
| ------------- | --------------------- | --------------------------- |
| CPU           | 2x 1 GHz              | 4x 2+ GHz                   |
| RAM           | 512 MB                | 4+ GB                      |
| Opslag       | 10 GB                 | 50+ GB                     |
| Bandbreedte   | 100 mbit/s (up & down)| 500 mbit/s (up & down) Aanbevolen als meerdere gebruikers de cloud gaan gebruiken |

#### Software

| Platform         | Opties                                                      |
| ---------------- | ------------------------------------------------------------ |
| Besturingssysteem| Ubuntu (14.04, 16.04, 18.04), Debian (8,9,10), CentOS 6.5/7  |
| Database         | MySQL of MariaDB 5.5+ (aanbevolen), SQLite (alleen voor testen en minimale installaties) |
| Webserver        | Apache 2.4 met `mod_php` of `php-fpm` (aanbevolen)           |
| PHP              | 5.6, 7.0 (aanbevolen), 7.1 (aanbevolen), 7.2                 |

Je moet verbinding maken via een SSH-client om de cloud op een Linux-server te installeren. Als je niet zeker weet hoe je SSH gebruikt, bekijk dan deze gids: [Eerste toegang (SSH)](vserver-linux-ssh.md)

Zodra de verbinding staat, kun je de benodigde pakketten installeren die nodig zijn voor de daadwerkelijke Nextcloud-installatie. Dit omvat het installeren van een webserver en PHP.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Debian" label="Debian" default>

<br/>

**Apache (Webserver)**

🗄️ Debian 8/9/10:
```
sudo apt update && sudo apt -y upgrade
sudo apt -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Debian 8:
```
# Stap 1: PHP 7.3 PPA repository toevoegen
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Stap 2: PHP 7.3 installeren
sudo apt -y install php7.3

# Stap 3: PHP 7.3 extensies installeren
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 9:
```
# Stap 1: PHP 7.3 PPA repository toevoegen
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Stap 2: PHP 7.3 installeren
sudo apt -y install php7.3

# Stap 3: PHP 7.3 extensies installeren
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 10:
```
# Stap 1: PHP 7.3 installeren
sudo apt -y install php php-common

# Stap 2: PHP 7.3 extensies installeren
sudo apt -y install php-cli php-fpm php-json php-pdo php-mysql php-zip php-gd  php-mbstring php-curl php-xml php-pear php-bcmath
```

Controleer PHP-versie voor functionaliteit
```
php -v
```

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

<br/>

**Apache (Webserver)**

🗄️ Ubuntu 16.X/18.X/19.X:
```
sudo apt update && sudo apt -y upgrade
sudo apt-get -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Ubuntu 16.X:
```
# Stap 1: PHP 7.3 PPA toevoegen
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Stap 2: PHP 7.3 installeren
sudo apt-get update
sudo apt-get install -y php7.3

# Stap 3: PHP 7.3 extensies installeren
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 18.X:
```
# Stap 1: PHP 7.3 PPA toevoegen
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Stap 2: PHP 7.3 installeren
sudo apt-get update
sudo apt-get install -y php7.3

# Stap 3: PHP 7.3 extensies installeren
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 19.X:
```
# Stap 1: PHP 7.3 PPA toevoegen
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Stap 2: PHP 7.3 installeren
sudo apt-get update
sudo apt-get install -y php7.3

# Stap 3: PHP 7.3 extensies installeren
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

Controleer PHP-versie voor functionaliteit
```
php -v
```


</TabItem>
<TabItem value="CentOS" label="CentOS">
<br/>

**Apache (Webserver)**

🗄️ CentOS 6:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd.service
```

🗄️ CentOS 7:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

🗄️ CentOS 8:
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

🗄️ CentOS 6:
```
# Stap 1: Yum repository instellen
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# Stap 2: PHP 7.3 installeren
yum --enablerepo=remi-php73 install php

# Stap 3: PHP 7.3 extensies installeren
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7:
```
# Stap 1: Yum repository instellen
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# Stap 2: PHP 7.3 installeren
yum --enablerepo=remi-php73 install php

# Stap 3: PHP 7.3 extensies installeren
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8:
```
# Stap 1: Yum repository instellen
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# Stap 2: PHP 7.3 installeren
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

Controleer PHP-versie voor functionaliteit
```
php -v
```

</TabItem>
</Tabs>

De volgende stap is het kiezen van een database type om de relevante informatie op te slaan. Er zijn verschillende opties:


<Tabs>

<TabItem value="MariaDB" label="MariaDB" default>

<br/>
Als je hebt gekozen voor dit type database, volg dan deze stappen:

Pakket installatie:
```
sudo apt-get install mariadb-server php-mysql
```

Tijdens de installatie wordt je gevraagd een root-wachtwoord in te stellen. Als er geen wachtwoord gevraagd wordt, is het standaard wachtwoord leeg. Dit is niet veilig en moet daarom direct aangepast worden!

De volgende stap is verbinden met de database-server en de benodigde database aanmaken:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Daarna moet er een gebruiker worden aangemaakt die toegang krijgt tot de Nextcloud database.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'JOUW_WACHTWOORD_HIER';
```

:::info
Sla deze stap niet over door de root gebruiker te gebruiken. Dit is niet veilig en kan je data in gevaar brengen!
:::

De laatste stap is het toekennen van rechten aan de nieuwe gebruiker:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Als je klaar bent, druk je op Ctrl-D om de database te verlaten en verder te gaan met de volgende stappen.

</TabItem>
<TabItem value="MySQL" label="MySQL">

<br/>
Als je hebt gekozen voor dit type database, volg dan deze stappen:

Pakket installatie:
```
sudo apt-get install mysql-server php-mysql
```

Tijdens de installatie wordt je gevraagd een root-wachtwoord in te stellen. Als er geen wachtwoord gevraagd wordt, is het standaard wachtwoord leeg. Dit is niet veilig en moet daarom direct aangepast worden!

De volgende stap is verbinden met de database-server en de benodigde database aanmaken:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Daarna moet er een gebruiker worden aangemaakt die toegang krijgt tot de Nextcloud database.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'JOUW_WACHTWOORD_HIER';
```

:::info
Sla deze stap niet over door de root gebruiker te gebruiken. Dit is niet veilig en kan je data in gevaar brengen!
:::


De laatste stap is het toekennen van rechten aan de nieuwe gebruiker:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Als je klaar bent, druk je op Ctrl-D om de database te verlaten en verder te gaan met de volgende stappen.

</TabItem>
<TabItem value="PostgreSQL" label="PostgreSQL">
<br/>
Als je hebt gekozen voor dit type database, volg dan deze stappen:

Pakket installatie:
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

Tijdens de installatie wordt je gevraagd een root-wachtwoord in te stellen. Als er geen wachtwoord gevraagd wordt, is het standaard wachtwoord leeg. Dit is niet veilig en moet daarom direct aangepast worden!

De volgende stap is verbinden met de database-server en de benodigde database aanmaken:

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

Daarna moet er een gebruiker worden aangemaakt die toegang krijgt tot de Nextcloud database.

```sql
CREATE USER nextcloud with encrypted password 'JOUW_WACHTWOORD_HIER';
```

:::info
Sla deze stap niet over door de root gebruiker te gebruiken. Dit is niet veilig en kan je data in gevaar brengen!
:::

De laatste stap is het toekennen van rechten aan de nieuwe gebruiker:

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

Als je klaar bent, druk je op Ctrl-D om de database te verlaten. Daarna kun je de PostgreSQL database aanpassen via de webinstaller of via de **config.php** configuratie.

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
Als je hebt gekozen voor dit type database, volg dan deze stappen:

Pakket installatie:
```
apt-get install sqlite3 php-sqlite3
```

Nieuwe SQLite 3 database aanmaken
```
sqlite3 DatabaseName.db
```

Daarna kan de SQLite 3 database aangepast worden via de webinstaller of via de **config.php** configuratie.
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

## Installatie

Nu kan de daadwerkelijke installatie van Nextcloud beginnen. De software moet gedownload en uitgepakt worden:
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

Als deze stap klaar is, is het tijd om het installatiescript te starten. Toegang is mogelijk via de browser via de volgende URL:

:::info
**http://domain.tld/nextcloud/** 
:::

Het installatiescherm verschijnt, waarin een root gebruiker wordt aangemaakt en databasegegevens worden ingevuld:

![](https://screensaver01.zap-hosting.com/index.php/s/79kgamkS36Dgi9x/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/qJs3Sd8TiYAg6mB/preview)


## Beveiliging en veiligheid

**Setup waarschuwingen**

![](https://screensaver01.zap-hosting.com/index.php/s/nat3Fekj6MRP8Nw/preview)



**Data map**

Het wordt sterk aanbevolen om de datamap buiten de webroot te plaatsen (dus buiten /var/www). De makkelijkste manier is dit direct bij een nieuwe installatie te doen. De map kan tijdens de setup worden gedefinieerd. De map moet echter eerst aangemaakt worden en de juiste rechten krijgen. De data kan bijvoorbeeld opgeslagen worden in een map genaamd Cloud in de home directory.


```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS via SSL-certificaat (Let's Encrypt)** 

Een goede cloud oplossing is alleen bereikbaar via een SSL-verbinding. Zonder SSL-versleuteling worden data en informatie in platte tekst verstuurd. Deze info kan makkelijk en snel onderschept en gelezen worden zonder encryptie.

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
 DocumentRoot "/var/www/nextcloud"
 ServerName domain.tld

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

SSLCertificateFile /etc/letsencrypt/live/domain.tld/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/domain.tld/privkey.pem
</VirtualHost>
</IfModule>

<IfModule mod_headers.c>
     Header always set Strict-Transport-Security "max-age=15768000; preload"
 </IfModule>
```



Daarnaast moet al het HTTP-verkeer worden doorgestuurd naar HTTPS met een permanente redirect (statuscode 301). Dit kan met Apache via een configuratie zoals de volgende Apache VirtualHosts configuratie:

```
<VirtualHost *:80>
   ServerName domain.tld
   Redirect permanent / https://domain.tld/
</VirtualHost>
```


## Nextcloud beheren

Toegang tot Nextcloud kan via de browser, maar ook via smartphone en computer met de app. Download links vind je hier: https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/aw6qpNE7TkwQeaP/preview)

Onder instellingen kun je ook na de setup nog opties aanpassen en belangrijke info bekijken zoals logs en activiteiten. Dit omvat extra beveiligingsinstellingen (twee-factor authenticatie, encryptie, ...), design instellingen (logo, kleur, slogan, header), toegangsinstellingen en nog veel meer.

**Apps**

Daarnaast is het mogelijk om extra apps te installeren naast de standaard apps. Je vindt ze via het menu-item **Apps**.

![](https://screensaver01.zap-hosting.com/index.php/s/wKERd24E25668kt/preview)

Met zulke **Apps** kun je Nextcloud nog verder personaliseren naar jouw wensen.


## Conclusie

Gefeliciteerd, je hebt Nextcloud succesvol geïnstalleerd! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />