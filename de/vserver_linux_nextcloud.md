---
id: vserver_linux_nextcloud
title: Nextcloud
sidebar_label: Nextcloud
---

## ❓ Was ist Nextcloud?

Nextcloud ist eine Open-Source-Cloud-Lösung und Abspaltung von Owncloud, die 2016 vom ehemaligen Owncloud-Gründer Frank Kalitschek aufgrund unterschiedlicher Auffassungen ins Leben gerufen wurde.

![img](https://screensaver01.zap-hosting.com/index.php/s/psZWxkYQebyiqoc/preview)

Um eine optimale Leistung, Stabilität und Funktionalität zu gewährleisten, wird für den Betrieb eines Nextcloud-Servers die folgende Einrichtung empfohlen. Der Nextcloud-Server ist nicht mit Windows und MacOS kompatibel. Zumindest nicht ohne weitere Virtualisierung oder ähnlichen Workarounds.<br>

**Systemvoraussetzungen**

<br>
**Hardware**

| **Components** | Minimum                | Recommended                 |
| -------------- | ---------------------- | --------------------------- |
| CPU            | 2x 1 GHz               | 4x 2+ GHz                   |
| RAM            | 512 MB                 | 4+ GB                       |
| Disc           | 10 GB                  | 50+ GB                      |
| Bandwidth      | 100 mbit/s (up & down) | 500mbit/s (up & down) Sinnvoll, wenn mehrere User die Cloud benutzen sollen |

<br>
**Software**

| Platform         | Options                                                      |
| ---------------- | ------------------------------------------------------------ |
| Operating System | Ubuntu (14.04, 16.04, 18.04), Debian(8,9,10), CentOS 6.5/7   |
| Database         | MySQL or MariaDB 5.5+ (recommended),  SQLite (only recommended for testing and minimal-instances) |
| Web server       | Apache 2.4 with `mod_php` or `php-fpm` (recommended)         |
| PHP              | 5.6, 7.0 (recommended), 7.1 (recommended), 7.2               |

> Die Anforderungen wurden aus unseren eigenen Erfahrungen und den Informationen der Entwickler zusammengestellt.



## 🛠 Nextcloud einrichten


### Vorbereitung

Damit die Cloud auf einem Linux-Server installiert werden kann, muss eine Verbindung über einen SSH-Client hergestellt werden. Wenn du dir nicht sicher bist, wie man SSH benutzt, findest du hier eine Anleitung dazu: [Erstzugriff (SSH)](vserver_linux_ssh.md)

Sobald die Verbindung hergestellt wurde, ist es möglich, mit der Installation der notwendigen Pakete zu beginnen, welche für die eigentliche Installation von Nextcloud erforderlich sind. Dazu gehört zum einen die Installation eines Webservers als auch PHP.

<!--DOCUSAURUS_CODE_TABS-->
<!--Debian-->
<br>

**Apache (Web server)**

🗄️ Debian 8/9/10:
```
sudo apt update && sudo apt -y upgrade
sudo apt -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Debian 8:
```
# Schritt 1: Hinzufügen des PHP 7.3 PPA Repository
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
# Schritt 1: Hinzufügen des PHP 7.3 PPA Repository
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

PHP-Version auf Funktionalität prüfen
```
php -v
```

<!--Ubuntu-->

<br>

**Apache (Web server)**

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

PHP-Version auf Funktionalität prüfen
```
php -v
```


<!--CentOS-->
<br>

**Apache (Web server)**

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
# Schritt 1: Yum-Repository einrichten
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# Schritt 2: PHP 7.3 installieren
yum --enablerepo=remi-php73 install php

# Schritt 3: PHP 7.3 Erweiterungen installieren
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7:
```
# Schritt 1: Yum-Repository einrichten
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# Schritt 2: PHP 7.3 installieren
yum --enablerepo=remi-php73 install php

# Schritt 3: PHP 7.3 Erweiterungen installieren
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8:
```
# Schritt 1: Yum-Repository einrichten
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# Schritt 2: PHP 7.3 installieren
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

PHP-Version auf Funktionalität prüfen
```
php -v
```

<!--END_DOCUSAURUS_CODE_TABS-->

Als Nächstes wird ein Datenbank Typ benötigt um die relevanten Informationen abspeichern zu können. Dabei gibt es mehrere Optionen:

<!--DOCUSAURUS_CODE_TABS-->

<!--MariaDB-->
<br>
Wenn du dich für diesen Datenbanktypen entschieden hast, dann musst du folgende Schritte befolgen:

Pakete installieren:
```
sudo apt-get install mariadb-server php-mysql
```

Während der Installation wird man aufgefordert, ein Root-Passwort  zu setzen. Wenn keine Aufforderung zur Auswahl eines Passworts kommt, ist das Standardpasswort leer. Dies ist unsicher und sollte daher unmittelbar danach geändert werden! 

Der nächste Schritt besteht darin, eine Verbindung zum Datenbankserver herzustellen und die erforderliche Datenbank zu erstellen:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

Danach muss ein Benutzer angelegt werden, welcher Zugriff auf die Nextcloud DB erhält. 

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

> Überspringen diesen Schritt nicht, indem der Benutzer root verwendet wird. Dies ist nicht sicher und gefährdet deine Daten!

Der letzte Schritt ist die Vergabe der Berechtigungen für den neuen Benutzer:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Wenn du damit fertig bist, dann kannst du Strg-D drücken, um die Datenbank zu verlassen um mit den weiteren Schritten fortzufahren.

<!--MySQL-->
<br>
Wenn du dich für diesen Datenbanktypen entschieden hast, dann musst du folgende Schritte befolgen:

Pakete installieren:
```
sudo apt-get install mysql-server php-mysql
```

Während der Installation wird man aufgefordert, ein Root-Passwort  zu setzen. Wenn keine Aufforderung zur Auswahl eines Passworts kommt, ist das Standardpasswort leer. Dies ist unsicher und sollte daher unmittelbar danach geändert werden! 

Der nächste Schritt besteht darin, eine Verbindung zum Datenbankserver herzustellen und die erforderliche Datenbank zu erstellen:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

Danach muss ein Benutzer angelegt werden, welcher Zugriff auf die Nextcloud DB erhält. 

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

> Überspringen diesen Schritt nicht, indem der Benutzer root verwendet wird. Dies ist nicht sicher und gefährdet deine Daten!


Der letzte Schritt ist die Vergabe der Berechtigungen für den neuen Benutzer:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Wenn du damit fertig bist, dann kannst du Strg-D drücken, um die Datenbank zu verlassen um mit den weiteren Schritten fortzufahren.

<!--PostgreSQL-->
<br>
Wenn du dich für diesen Datenbanktypen entschieden hast, dann musst du folgende Schritte befolgen:

Pakete installieren:
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

Während der Installation wird man aufgefordert, ein Root-Passwort zu setzen.

Der nächste Schritt besteht darin, eine Verbindung zum Datenbankserver herzustellen und die erforderliche Datenbank zu erstellen:

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

```sql
CREATE USER nextcloud with encrypted password 'YOUR_PASSWORD_HERE';
```

Danach muss ein Benutzer angelegt werden, welcher Zugriff auf die Nextcloud DB erhält. 

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

> Überspringe diesen Schritt nicht, indem der Benutzer root verwendet wird. Dies ist nicht sicher und gefährdet deine Daten!

Der letzte Schritt ist die Vergabe der Berechtigungen für den neuen Benutzer:

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

Wenn du damit fertig bist, dann kannst du Strg-D drücken, um die Datenbank zu verlassen. Im Anschluss kann die PostgreSQL Datenbank entweder über den Webinstaller oder über die **config.php** Config bearbeitet werden.

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

<!--SQLite-->
<br>
Wenn du dich für diesen Datenbanktypen entschieden hast, dann musst du folgende Schritte befolgen:

Pakete installieren:
```
apt-get install sqlite3 php-sqlite3
```

Neue SQLite 3 Datenbank anlegen
```
sqlite3 DatabaseName.db
```

Im Anschluss kann die SQLite 3 Datenbank entweder über den Webinstaller oder über die **config.php** Config bearbeitet werden.
```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "sqlite",
  "dbname"        => "nextcloud",
  "dbtableprefix" => "",
);
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Installation

Nun kann die eigentliche Installation von Nextcloud gestartet werden. Die Software muss heruntergeladen und entpackt werden:

```
cd /var/www/nextcloud/
wget https://download.nextcloud.com/server/releases/nextcloud-16.0.4.zip
apt-get install unzip
unzip nextcloud-16.0.4.zip
chown -R www-data:www-data nextcloud
rm nextcloud-16.0.4.zip
```

Wenn dieser Schritt abgeschlossen ist, dann ist es an der Zeit  das Installationsscript auszuführen. Der Zugriff erfolgt über den Browser mit folgender Adresse:

> **http://domain.tld/nextcloud/** 

Es erscheint die Konfiguration des Installationsscipt, in der ein Root-Benutzer angelegt und die Datenbankinformationen definiert werden:

![img](https://screensaver01.zap-hosting.com/index.php/s/DeEyH2Ni6fKDbTm/preview)


![img](https://screensaver01.zap-hosting.com/index.php/s/pidgFL4z2o7ZJc6/preview)


### Absicherung und Sicherheit


**Setup Warnungen**

![img](https://screensaver01.zap-hosting.com/index.php/s/y5RSDRRdHiRRLgm/preview)



**Daten-Verzeichnis**

Es wird dringend empfohlen, das Datenverzeichnis außerhalb des Web-Stammverzeichnisses zu platzieren (d.h. außerhalb von /var/www). Am einfachsten ist es, dies bei einer Neuinstallation zu tun. Das Verzeichnis kann im Setup definiert werden. Allerdings muss das Verzeichnis zuerst erstellt und die entsprechenden Rechte gesetzt werden. Die Daten könnten z.B. in einem Verzeichnis mit dem Namen Cloud im Home-Verzeichnis gespeichert werden.



```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS via SSL-Zertifikat (Let's Encrypt)** 

Eine gute Cloud sollte nur über eine SSL-Verschlüsselung zugänglich sein. Ohne eine SSL-Verschlüsselung werden die Daten und Informationen im Klartext übertragen. Solche Informationen können ohne Verschlüsselung schnell und einfach abgefangen und gelesen werden.



```
<IfModule mod_ssl.c>
<VirtualHost *:443>
 DocumentRoot "/var/www/html/cloud"
 ServerName domain.tld

 ErrorLog ${APACHE_LOG_DIR}/error.log
 CustomLog ${APACHE_LOG_DIR}/access.log combined

<Directory /var/www/html/cloud/>
 Options +FollowSymlinks
 AllowOverride All

 <IfModule mod_dav.c>
 Dav off
 </IfModule>

 SetEnv HOME /var/www/html/cloud
 SetEnv HTTP_HOME /var/www/html/cloud
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



Darüber hinaus sollte der gesamte HTTP-Verkehr unter Verwendung einer permanenten Umleitung mit Statuscode 301 auf HTTPS umgeleitet werden. Dies kann unter Verwendung des Apache mit einer Konfiguration wie der folgenden Apache-VirtualHosts-Konfiguration erreicht werden:

```
<VirtualHost *:80>
   ServerName domain.tld
   Redirect permanent / https://domain.tld/
</VirtualHost>
```

Wenn du dir nicht sicher bist, wie du ein SSL-Zertifikat generieren kannst, dann findest du hier eine Anleitung dazu: [Placeholder]([vserver_linux_ssh.md](https://github.com/zap-docs/docs/blob/master/de/vserver_linux_ssh.md))



## 💻 Nextcloud verwalten

Der Zugriff auf die Nextcloud ist sowohl über den Browser, als auch über das Smartphone und den Computer per App möglich. Die Downloadquellen sind hier zu finden: https://nextcloud.com/install/#install-clients

![img](https://screensaver01.zap-hosting.com/index.php/s/jHPsfXDf5dHFk2y/preview)

Unter den Einstellungen können auch nach der Einrichtung noch einige Optionen angepasst und wichtige Informationen wie Logs, Aktivitäten eingesehen werden. Dazu gehören unter anderem zusätzliche Sicherheitseinstellungen (Zwei-Faktor-Authentifizierung, Verschlüsselung, ... ), Designeinstellungen (Logo, Farbe, Slogan, Header), Zugriffseinstellungen und vieles mehr.

**Apps**

Zusätzlich gibt es auch die Möglichkeit neben den Standard Apps noch weitere Apps zu installieren. Diese können über den Menüpunkt **Apps** eingesehen werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/MtXpFpCEt7ZQ7ZY/preview)

Mit solchen **Apps** ist es möglich die Nextcloud zusätzlich noch weiter nach seinen Wünschen zu individualisieren.
