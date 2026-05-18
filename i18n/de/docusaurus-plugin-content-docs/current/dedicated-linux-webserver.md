---
id: dedicated-linux-webserver
title: "Nginx und Apache auf einem Linux Server einrichten – Leistungsstarke Webserver-Umgebungen konfigurieren"
description: "Entdecke, wie du Nginx oder Apache Webserver einrichtest und konfigurierst, um deine Website effizient zu hosten → Jetzt mehr erfahren"
sidebar_label: Webserver installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Nginx und Apache sind beliebte Webservices, die genutzt werden, um Webseiten an den Browser eines Nutzers auszuliefern. Im Folgenden zeigen wir dir, wie du einen der Services auf deinem System installierst.



## Vorbereitung

Bevor die eigentliche Installation eines Webservers starten kann, muss sichergestellt werden, dass das System auf dem neuesten Stand ist. Dazu verbinden wir uns per SSH mit dem Server. Falls du nicht weißt, was SSH ist und wie du es nutzt, schau dir unsere Anleitung an: [Erstzugang (SSH)](vserver-linux-ssh.md).

Dort angekommen kannst du das System mit folgendem Befehl je nach Betriebssystem updaten:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper update

// Fedora
sudo dnf upgrade --refresh
```



## Installation

Nachdem die Vorbereitung abgeschlossen ist, kann die Installation des Webservers starten. Je nach Betriebssystem und Webserver müssen dafür folgende Befehle ausgeführt werden:



### Apache

```
// Debian
sudo apt install apache2

// Ubuntu
sudo apt install apache2

// CentOS
sudo yum install httpd

// OpenSUSE
sudo zypper install httpd

// Fedora
sudo dnf install httpd
```

Nach der Installation des Webservers kannst du die Dateien deiner Website hochladen. Verbinde dich per FTP/SFTP mit deinem Server, navigiere in folgendes Verzeichnis und lade die Dateien hoch.

```
/var/www/html/
```



### Nginx

```
// Debian
sudo apt install nginx

// Ubuntu
sudo apt install nginx

// CentOS
sudo yum install nginx

// OpenSUSE
sudo zypper install nginx

// Fedora
sudo dnf install nginx
```

Nach der Installation des Webservers kannst du die Dateien deiner Website hochladen. Verbinde dich per FTP/SFTP mit deinem Server, navigiere in folgendes Verzeichnis und lade die Dateien hoch.

```
/usr/share/nginx/html
```



## Versions-Check

Nachdem die Installation abgeschlossen ist, kannst du mit den Befehlen `apache2 -v` (Apache) und `nginx -v` (Nginx) prüfen, ob die Installation erfolgreich war. Die Ausgabe sollte ungefähr so aussehen:



### Apache

```
apache2 -v
Server version: Apache/2.4.41 (Ubuntu)
Server built:   XXXX-XX-XXTXX:XX:XX
```



### Nginx

```
nginx -V
nginx version: nginx/1.2.3
...
```

Wenn einer der beiden Fälle eintritt, wurde der Webserver erfolgreich installiert. 
