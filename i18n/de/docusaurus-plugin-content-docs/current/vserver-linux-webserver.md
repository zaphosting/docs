---
id: vserver-linux-webserver
title: "VPS: Installation von Nginx und Apache Webserver"
description: "Entdecke, wie du Apache oder Nginx Webserver einrichtest und konfigurierst, um deine Website effizient zu hosten → Jetzt mehr erfahren"
sidebar_label: Webserver installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Nginx und Apache sind beliebte Webservices, die verwendet werden, um Webseiten an den Browser eines Nutzers auszuliefern. Unten zeigen wir dir, wie du einen der Services auf deinem System installierst.  
<InlineVoucher />


## Vorbereitung

Bevor die eigentliche Installation eines Webservers starten kann, muss sichergestellt werden, dass das System auf dem neuesten Stand ist. Dafür verbinden wir uns per SSH mit dem Server. Falls du nicht weißt, was SSH ist und wie man es nutzt, schau dir die folgende Anleitung an: [Erstzugang (SSH)](vserver-linux-ssh.md).

Dort kannst du das System je nach Betriebssystem mit folgendem Befehl aktualisieren:

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

## Fazit

Glückwunsch, du hast deinen gewünschten Webserver erfolgreich installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 

<InlineVoucher />