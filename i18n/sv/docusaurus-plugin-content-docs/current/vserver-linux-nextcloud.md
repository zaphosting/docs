---
id: vserver-linux-nextcloud
title: "Installera Nextcloud på en Linux-server - Bygg din privata molnlagring"
description: "Upptäck hur du sätter upp en högpresterande Nextcloud-server på Linux för optimal molnhosting → Läs mer nu"
sidebar_label: Installera Nextcloud
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Nextcloud är en open source molnlösning och en fork av Owncloud, grundad 2016 av Ownclouds tidigare grundare Frank Kalitschek.

![](https://screensaver01.zap-hosting.com/index.php/s/kCndbKaFAaktERk/preview)

För att uppnå optimal prestanda, stabilitet och funktionalitet rekommenderas följande setup för att hosta en Nextcloud-server. Nextcloud-servern är inte kompatibel med Windows och MacOS. Åtminstone inte utan vidare virtualisering eller liknande lösningar.

## Installera Nextcloud med One Click Apps Installer

Du kan installera **Nextcloud** direkt via vår **One Click Apps Installer** i VPS-webbgränssnittet. Efter att ha slutfört den initiala app-installationen, öppna appkatalogen, sök efter **Nextcloud** och starta deployment med dina föredragna projekt-, miljö- och domäninställningar. Detta ger dig ett snabbt och användarvänligt sätt att deploya och hantera **Nextcloud** utan manuell kommandoradskonfiguration, samtidigt som du får fördelarna av integrerad webbaserad hantering, stöd för egna domäner och SSL-provisionering där det finns tillgängligt.

<InlineVoucher />

## Förberedelser

Följande krav rekommenderas av utvecklarna och baseras på vår egen erfarenhet. Du kan stöta på problem om du inte uppfyller dessa förutsättningar.

#### Hårdvara

| Komponenter   | Minimum                | Rekommenderat               |
| ------------- | ---------------------- | --------------------------- |
| CPU           | 2x 1 GHz               | 4x 2+ GHz                   |
| RAM           | 512 MB                 | 4+ GB                       |
| Lagring       | 10 GB                  | 50+ GB                      |
| Bandbredd     | 100 mbit/s (upp & ner) | 500 mbit/s (upp & ner) Rekommenderas om flera användare ska använda molnet |

#### Mjukvara

| Plattform         | Alternativ                                                   |
| ----------------- | ------------------------------------------------------------ |
| Operativsystem    | Ubuntu (14.04, 16.04, 18.04), Debian (8,9,10), CentOS 6.5/7  |
| Databas           | MySQL eller MariaDB 5.5+ (rekommenderat), SQLite (endast för test och minimala instanser) |
| Webbserver        | Apache 2.4 med `mod_php` eller `php-fpm` (rekommenderat)     |
| PHP               | 5.6, 7.0 (rekommenderat), 7.1 (rekommenderat), 7.2           |

En anslutning måste upprättas via en SSH-klient för att installera molnet på en Linux-server. Om du är osäker på hur man använder SSH, här är en guide: [Initial access (SSH)](vserver-linux-ssh.md)

När anslutningen är upprättad kan du börja installera de nödvändiga paketen som krävs för själva installationen av Nextcloud. Detta inkluderar installation av webbserver samt PHP.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Debian" label="Debian" default>

<br/>

**Apache (Webbserver)**

🗄️ Debian 8/9/10:
```
sudo apt update && sudo apt -y upgrade
sudo apt -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Debian 8:
```
# Steg 1: Lägg till PHP 7.3 PPA-repository
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Steg 2: Installera PHP 7.3
sudo apt -y install php7.3

# Steg 3: Installera PHP 7.3-tillägg
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 9:
```
# Steg 1: Lägg till PHP 7.3 PPA-repository
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Steg 2: Installera PHP 7.3
sudo apt -y install php7.3

# Steg 3: Installera PHP 7.3-tillägg
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 10:
```
# Steg 1: Installera PHP 7.3
sudo apt -y install php php-common

# Steg 2: Installera PHP 7.3-tillägg
sudo apt -y install php-cli php-fpm php-json php-pdo php-mysql php-zip php-gd  php-mbstring php-curl php-xml php-pear php-bcmath
```

Kontrollera PHP-version för funktionalitet
```
php -v
```

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

<br/>

**Apache (Webbserver)**

🗄️ Ubuntu 16.X/18.X/19.X:
```
sudo apt update && sudo apt -y upgrade
sudo apt-get -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Ubuntu 16.X:
```
# Steg 1: Lägg till PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Steg 2: Installera PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Steg 3: Installera PHP 7.3-tillägg
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 18.X:
```
# Steg 1: Lägg till PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Steg 2: Installera PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Steg 3: Installera PHP 7.3-tillägg
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 19.X:
```
# Steg 1: Lägg till PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Steg 2: Installera PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Steg 3: Installera PHP 7.3-tillägg
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

Kontrollera PHP-version för funktionalitet
```
php -v
```


</TabItem>
<TabItem value="CentOS" label="CentOS">
<br/>

**Apache (Webbserver)**

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
# Steg 1: Ställ in Yum repository
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# Steg 2: Installera PHP 7.3
yum --enablerepo=remi-php73 install php

# Steg 3: Installera PHP 7.3-tillägg
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7:
```
# Steg 1: Ställ in Yum repository
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# Steg 2: Installera PHP 7.3
yum --enablerepo=remi-php73 install php

# Steg 3: Installera PHP 7.3-tillägg
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8:
```
# Steg 1: Ställ in Yum repository
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# Steg 2: Installera PHP 7.3
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

Kontrollera PHP-version för funktionalitet
```
php -v
```

</TabItem>
</Tabs>

Nästa steg är att definiera en databas för att lagra relevant information. Det finns flera alternativ:


<Tabs>

<TabItem value="MariaDB" label="MariaDB" default>

<br/>
Om du valt att använda denna typ av databas, följ dessa steg:

Paketinstallation:
```
sudo apt-get install mariadb-server php-mysql
```

Under installationen kommer du bli ombedd att sätta ett root-lösenord. Om inget lösenord efterfrågas är standardlösenordet tomt. Detta är inte säkert och bör därför ändras omedelbart efteråt!

Nästa steg är att ansluta till databasservern och skapa den nödvändiga databasen:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Därefter måste en användare skapas som får tillgång till Nextcloud-databasen.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'DITT_LÖSENORD_HÄR';
```

:::info
Hoppa inte över detta steg genom att använda root-användaren. Det är inte säkert och kan äventyra dina data!
:::

Sista steget är att ge rättigheter till den nya användaren:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

När du är klar kan du trycka Ctrl-D för att lämna databasen och fortsätta med nästa steg.

</TabItem>
<TabItem value="MySQL" label="MySQL">

<br/>
Om du valt att använda denna typ av databas, följ dessa steg:

Paketinstallation:
```
sudo apt-get install mysql-server php-mysql
```

Under installationen kommer du bli ombedd att sätta ett root-lösenord. Om inget lösenord efterfrågas är standardlösenordet tomt. Detta är inte säkert och bör därför ändras omedelbart efteråt!

Nästa steg är att ansluta till databasservern och skapa den nödvändiga databasen:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Därefter måste en användare skapas som får tillgång till Nextcloud-databasen.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'DITT_LÖSENORD_HÄR';
```

:::info
Hoppa inte över detta steg genom att använda root-användaren. Det är inte säkert och kan äventyra dina data!
:::


Sista steget är att ge rättigheter till den nya användaren:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

När du är klar kan du trycka Ctrl-D för att lämna databasen och fortsätta med nästa steg.

</TabItem>
<TabItem value="PostgreSQL" label="PostgreSQL">
<br/>
Om du valt att använda denna typ av databas, följ dessa steg:

Paketinstallation:
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

Under installationen kommer du bli ombedd att sätta ett root-lösenord. Om inget lösenord efterfrågas är standardlösenordet tomt. Detta är inte säkert och bör därför ändras omedelbart efteråt!

Nästa steg är att ansluta till databasservern och skapa den nödvändiga databasen:

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

Därefter måste en användare skapas som får tillgång till Nextcloud-databasen.

```sql
CREATE USER nextcloud with encrypted password 'DITT_LÖSENORD_HÄR';
```

:::info
Hoppa inte över detta steg genom att använda root-användaren. Det är inte säkert och kan äventyra dina data!
:::

Sista steget är att ge rättigheter till den nya användaren:

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

När du är klar kan du trycka Ctrl-D för att lämna databasen. Därefter kan du modifiera PostgreSQL-databasen antingen via webbinstallationen eller via **config.php**-konfigurationen.

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
Om du valt att använda denna typ av databas, följ dessa steg:

Paketinstallation:
```
apt-get install sqlite3 php-sqlite3
```

Skapa ny SQLite 3-databas
```
sqlite3 DatabaseName.db
```

Efter det kan SQLite 3-databasen modifieras antingen via webbinstallationen eller via **config.php**-konfigurationen.
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

Nu kan själva installationen av Nextcloud starta. Mjukvaran behöver laddas ner och packas upp:
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

När detta steg är klart är det dags att köra installationsscriptet. Åtkomst sker via webbläsaren via följande URL:

:::info
**http://domain.tld/nextcloud/** 
:::

Installationsscriptets konfiguration visas, där en root-användare skapas och databasuppgifter definieras:

![](https://screensaver01.zap-hosting.com/index.php/s/79kgamkS36Dgi9x/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/qJs3Sd8TiYAg6mB/preview)


## Säkerhet och trygghet

**Setup-varningar**

![](https://screensaver01.zap-hosting.com/index.php/s/nat3Fekj6MRP8Nw/preview)



**Datakatalog**

Det rekommenderas starkt att placera datakatalogen utanför webbroot-katalogen (dvs utanför /var/www). Det enklaste sättet att göra detta är vid en nyinstallation. Katalogen kan definieras under setup. Dock måste katalogen först skapas och rätt behörigheter sättas. Data kan till exempel lagras i en katalog som heter Cloud i hemkatalogen.


```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS via SSL-certifikat (Let's Encrypt)** 

En bra molnlösning bör endast vara åtkomlig via SSL-anslutning. Utan SSL-kryptering överförs data och information i klartext. Sådan information kan enkelt och snabbt avlyssnas och läsas utan kryptering.

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



Dessutom bör all HTTP-trafik omdirigeras till HTTPS med en permanent omdirigering med statuskod 301. Detta kan göras med Apache med en konfiguration som följande Apache VirtualHosts-konfiguration:

```
<VirtualHost *:80>
   ServerName domain.tld
   Redirect permanent / https://domain.tld/
</VirtualHost>
```


## Hantera Nextcloud

Åtkomst till Nextcloud är möjlig via webbläsaren, samt via smartphone och dator med appen. Nedladdningskällor finns här: https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/aw6qpNE7TkwQeaP/preview)

Under inställningar kan du justera fler alternativ även efter setup och se viktig information som loggar, aktiviteter. Detta inkluderar extra säkerhetsinställningar (tvåfaktorsautentisering, kryptering, ...), designinställningar (logga, färg, slogan, header), åtkomstinställningar och mycket mer.

**Appar**

Dessutom finns möjligheten att installera extra appar utöver standardapparna. Du når dem via menyalternativet **Appar**.

![](https://screensaver01.zap-hosting.com/index.php/s/wKERd24E25668kt/preview)

Med sådana **Appar** kan du ytterligare anpassa Nextcloud efter dina önskemål.


## Slutsats

Grattis, du har installerat Nextcloud framgångsrikt! Om du har fler frågor eller problem, kontakta gärna vårt supportteam som finns tillgängligt varje dag för att hjälpa dig!

<InlineVoucher />