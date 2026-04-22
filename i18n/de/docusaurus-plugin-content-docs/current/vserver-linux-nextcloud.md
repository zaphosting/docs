---
id: vserver-linux-nextcloud
title: "Nextcloud auf einem Linux Server einrichten – Baue deine private Cloud"
description: "Entdecke, wie du einen leistungsstarken Nextcloud-Server auf Linux für optimales Cloud-Hosting einrichtest → Jetzt mehr erfahren"
sidebar_label: Nextcloud installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Nextcloud ist eine Open-Source-Cloud-Lösung und ein Fork von Owncloud, gegründet 2016 vom ehemaligen Owncloud-Gründer Frank Kalitschek.

![](https://screensaver01.zap-hosting.com/index.php/s/kCndbKaFAaktERk/preview)

Um optimale Performance, Stabilität und Funktionalität zu gewährleisten, empfehlen wir folgendes Setup für das Hosting eines Nextcloud-Servers. Der Nextcloud-Server ist nicht kompatibel mit Windows und MacOS. Zumindest nicht ohne zusätzliche Virtualisierung oder ähnliche Workarounds.

## Nextcloud mit dem One Click Apps Installer installieren

Du kannst **Nextcloud** direkt über unseren **One Click Apps Installer** im VPS Webinterface installieren. Nach der ersten Einrichtung öffnest du den App-Katalog, suchst nach **Nextcloud** und startest die Installation mit deinen bevorzugten Projekt-, Umgebung- und Domain-Einstellungen. So bekommst du eine schnelle und benutzerfreundliche Möglichkeit, **Nextcloud** zu deployen und zu verwalten – ganz ohne manuelle Kommandozeilen-Installation, aber mit integriertem webbasiertem Management, Custom Domain Support und SSL-Bereitstellung, wo verfügbar.

<InlineVoucher />

## Vorbereitung

Die folgenden Anforderungen werden von den Entwicklern empfohlen und basieren auf unseren eigenen Erfahrungen. Wenn du diese Voraussetzungen nicht erfüllst, kann es zu Problemen kommen.

#### Hardware

| Komponenten     | Minimum                | Empfohlen                  |
| -------------- | ---------------------- | ------------------------- |
| CPU            | 2x 1 GHz               | 4x 2+ GHz                 |
| RAM            | 512 MB                 | 4+ GB                     |
| Speicher       | 10 GB                  | 50+ GB                    |
| Bandbreite     | 100 Mbit/s (Up & Down) | 500 Mbit/s (Up & Down) Empfohlen, wenn mehrere Nutzer die Cloud verwenden |

#### Software

| Plattform         | Optionen                                                      |
| ---------------- | ------------------------------------------------------------ |
| Betriebssystem   | Ubuntu (14.04, 16.04, 18.04), Debian (8,9,10), CentOS 6.5/7   |
| Datenbank        | MySQL oder MariaDB 5.5+ (empfohlen), SQLite (nur für Tests und Minimal-Instanzen empfohlen) |
| Webserver        | Apache 2.4 mit `mod_php` oder `php-fpm` (empfohlen)           |
| PHP              | 5.6, 7.0 (empfohlen), 7.1 (empfohlen), 7.2                   |

Für die Installation der Cloud auf einem Linux Server muss eine Verbindung über einen SSH-Client hergestellt werden. Falls du nicht sicher bist, wie SSH funktioniert, hier eine Anleitung: [Erster Zugriff (SSH)](vserver-linux-ssh.md)

Sobald die Verbindung steht, kannst du die notwendigen Pakete installieren, die für die eigentliche Nextcloud-Installation gebraucht werden. Dazu gehört die Installation eines Webservers sowie PHP.


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
# Schritt 1: PHP 7.3 PPA Repository hinzufügen
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Schritt 2: PHP 7.3 installieren
sudo apt -y install php7.3

# Schritt 3: PHP 7.3 Erweiterungen installieren
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 9:
```
# Schritt 1: PHP 7.3 PPA Repository hinzufügen
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Schritt 2: PHP 7.3 installieren
sudo apt -y install php7.3

# Schritt 3: PHP 7.3 Erweiterungen installieren
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 10:
```
# Schritt 1: PHP 7.3 installieren
sudo apt -y install php php-common

# Schritt 2: PHP 7.3 Erweiterungen installieren
sudo apt -y install php-cli php-fpm php-json php-pdo php-mysql php-zip php-gd  php-mbstring php-curl php-xml php-pear php-bcmath
```

PHP-Version prüfen:
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
# Schritt 1: PHP 7.3 PPA hinzufügen
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Schritt 2: PHP 7.3 installieren
sudo apt-get update
sudo apt-get install -y php7.3

# Schritt 3: PHP 7.3 Erweiterungen installieren
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 18.X:
```
# Schritt 1: PHP 7.3 PPA hinzufügen
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Schritt 2: PHP 7.3 installieren
sudo apt-get update
sudo apt-get install -y php7.3

# Schritt 3: PHP 7.3 Erweiterungen installieren
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 19.X:
```
# Schritt 1: PHP 7.3 PPA hinzufügen
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Schritt 2: PHP 7.3 installieren
sudo apt-get update
sudo apt-get install -y php7.3

# Schritt 3: PHP 7.3 Erweiterungen installieren
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

PHP-Version prüfen:
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
# Schritt 1: Yum Repository einrichten
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# Schritt 2: PHP 7.3 installieren
yum --enablerepo=remi-php73 install php

# Schritt 3: PHP 7.3 Erweiterungen installieren
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7:
```
# Schritt 1: Yum Repository einrichten
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# Schritt 2: PHP 7.3 installieren
yum --enablerepo=remi-php73 install php

# Schritt 3: PHP 7.3 Erweiterungen installieren
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8:
```
# Schritt 1: Yum Repository einrichten
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# Schritt 2: PHP 7.3 installieren
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

PHP-Version prüfen:
```
php -v
```

</TabItem>
</Tabs>

Der nächste Schritt ist die Auswahl eines Datenbanktyps, um die relevanten Informationen zu speichern. Es gibt mehrere Optionen:


<Tabs>

<TabItem value="MariaDB" label="MariaDB" default>

<br/>
Wenn du dich für diese Datenbank entschieden hast, folge diesen Schritten:

Paketinstallation:
```
sudo apt-get install mariadb-server php-mysql
```

Während der Installation wirst du aufgefordert, ein Root-Passwort zu setzen. Falls keine Passwortabfrage erscheint, ist das Standardpasswort leer. Das ist unsicher und sollte sofort geändert werden!

Als nächstes verbindest du dich mit dem Datenbankserver und erstellst die benötigte Datenbank:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Danach muss ein Benutzer erstellt werden, der Zugriff auf die Nextcloud-Datenbank bekommt:

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'DEIN_PASSWORT_HIER';
```

:::info
Überspringe diesen Schritt nicht, indem du den Root-User nutzt. Das ist unsicher und gefährdet deine Daten!
:::

Zum Schluss werden dem neuen Benutzer die Rechte zugewiesen:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Wenn du fertig bist, kannst du mit Ctrl-D die Datenbank verlassen und mit den nächsten Schritten weitermachen.

</TabItem>
<TabItem value="MySQL" label="MySQL">

<br/>
Wenn du dich für diese Datenbank entschieden hast, folge diesen Schritten:

Paketinstallation:
```
sudo apt-get install mysql-server php-mysql
```

Während der Installation wirst du aufgefordert, ein Root-Passwort zu setzen. Falls keine Passwortabfrage erscheint, ist das Standardpasswort leer. Das ist unsicher und sollte sofort geändert werden!

Als nächstes verbindest du dich mit dem Datenbankserver und erstellst die benötigte Datenbank:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Danach muss ein Benutzer erstellt werden, der Zugriff auf die Nextcloud-Datenbank bekommt:

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'DEIN_PASSWORT_HIER';
```

:::info
Überspringe diesen Schritt nicht, indem du den Root-User nutzt. Das ist unsicher und gefährdet deine Daten!
:::

Zum Schluss werden dem neuen Benutzer die Rechte zugewiesen:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Wenn du fertig bist, kannst du mit Ctrl-D die Datenbank verlassen und mit den nächsten Schritten weitermachen.

</TabItem>
<TabItem value="PostgreSQL" label="PostgreSQL">
<br/>
Wenn du dich für diese Datenbank entschieden hast, folge diesen Schritten:

Paketinstallation:
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

Während der Installation wirst du aufgefordert, ein Root-Passwort zu setzen. Falls keine Passwortabfrage erscheint, ist das Standardpasswort leer. Das ist unsicher und sollte sofort geändert werden!

Als nächstes verbindest du dich mit dem Datenbankserver und erstellst die benötigte Datenbank:

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

Danach muss ein Benutzer erstellt werden, der Zugriff auf die Nextcloud-Datenbank bekommt:

```sql
CREATE USER nextcloud with encrypted password 'DEIN_PASSWORT_HIER';
```

:::info
Überspringe diesen Schritt nicht, indem du den Root-User nutzt. Das ist unsicher und gefährdet deine Daten!
:::

Zum Schluss werden dem neuen Benutzer die Rechte zugewiesen:

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

Wenn du fertig bist, kannst du mit Ctrl-D die Datenbank verlassen. Danach kannst du die PostgreSQL-Datenbank entweder über den Webinstaller oder über die **config.php** konfigurieren.

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
Wenn du dich für diese Datenbank entschieden hast, folge diesen Schritten:

Paketinstallation:
```
apt-get install sqlite3 php-sqlite3
```

Neue SQLite 3 Datenbank erstellen:
```
sqlite3 DatabaseName.db
```

Danach kann die SQLite 3 Datenbank entweder über den Webinstaller oder über die **config.php** konfiguriert werden.
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

Jetzt kann die eigentliche Installation von Nextcloud gestartet werden. Die Software muss heruntergeladen und entpackt werden:
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

Sobald dieser Schritt abgeschlossen ist, kannst du das Installationsskript starten. Der Zugriff erfolgt über den Browser über folgende URL:

:::info
**http://domain.tld/nextcloud/** 
:::

Das Installationsskript erscheint, in dem ein Root-User erstellt und die Datenbankinformationen definiert werden:

![](https://screensaver01.zap-hosting.com/index.php/s/79kgamkS36Dgi9x/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/qJs3Sd8TiYAg6mB/preview)


## Sicherheit und Schutz

**Setup Warnungen**

![](https://screensaver01.zap-hosting.com/index.php/s/nat3Fekj6MRP8Nw/preview)



**Datenverzeichnis**

Es wird dringend empfohlen, das Datenverzeichnis außerhalb des Webroot-Verzeichnisses (also außerhalb von /var/www) zu platzieren. Am einfachsten geht das bei einer Neuinstallation. Das Verzeichnis kann während der Einrichtung definiert werden. Das Verzeichnis muss aber vorher erstellt und die entsprechenden Rechte gesetzt werden. Die Daten könnten z.B. in einem Verzeichnis namens Cloud im Home-Verzeichnis gespeichert werden.


```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS via SSL-Zertifikat (Let's Encrypt)** 

Eine gute Cloud-Lösung sollte nur über eine SSL-Verbindung erreichbar sein. Ohne SSL-Verschlüsselung werden Daten und Informationen im Klartext übertragen. Solche Infos können leicht und schnell abgefangen und ohne Verschlüsselung gelesen werden.

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



Außerdem sollte sämtlicher HTTP-Traffic per permanentem Redirect mit Statuscode 301 auf HTTPS umgeleitet werden. Das erreichst du mit Apache z.B. durch folgende VirtualHosts-Konfiguration:

```
<VirtualHost *:80>
   ServerName domain.tld
   Redirect permanent / https://domain.tld/
</VirtualHost>
```


## Nextcloud verwalten

Der Zugriff auf Nextcloud ist über den Browser sowie über Smartphone und PC per App möglich. Die Download-Quellen findest du hier: https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/aw6qpNE7TkwQeaP/preview)

Unter den Einstellungen kannst du auch nach der Einrichtung noch einige Optionen anpassen und wichtige Infos wie Logs, Aktivitäten einsehen. Dazu gehören zusätzliche Sicherheitsfeatures (Zwei-Faktor-Authentifizierung, Verschlüsselung, ...), Design-Anpassungen (Logo, Farbe, Slogan, Header), Zugriffsrechte und vieles mehr.

**Apps**

Außerdem kannst du neben den Standard-Apps auch weitere Apps installieren. Diese findest du im Menüpunkt **Apps**.

![](https://screensaver01.zap-hosting.com/index.php/s/wKERd24E25668kt/preview)

Mit solchen **Apps** kannst du Nextcloud noch individueller an deine Wünsche anpassen.


## Fazit

Glückwunsch, du hast Nextcloud erfolgreich installiert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />