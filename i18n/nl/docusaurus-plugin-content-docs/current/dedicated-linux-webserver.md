---
id: dedicated-linux-webserver
title: "Dedicated Server: Installatie van Nginx en Apache webserver"
description: "Ontdek hoe je Nginx of Apache webservers installeert en configureert om je website efficiënt te hosten → Leer het nu"
sidebar_label: Webserver installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Nginx en Apache zijn populaire webservices die gebruikt worden om webpagina’s aan de browser van een gebruiker te leveren. Hieronder laten we je zien hoe je één van deze services op je systeem installeert. 



## Voorbereiding

Voordat je echt begint met het installeren van een webserver, is het belangrijk om te zorgen dat je systeem up-to-date is. Hiervoor maak je verbinding met je server via SSH. Als je niet weet wat SSH is of hoe je het gebruikt, check dan deze gids: [Eerste toegang (SSH)](vserver-linux-ssh.md).

Eenmaal verbonden kun je het systeem updaten met het volgende commando, afhankelijk van je besturingssysteem:

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



## Installatie

Als de voorbereiding klaar is, kun je beginnen met het installeren van de webserver. Afhankelijk van je besturingssysteem en de webserver die je kiest, voer je de volgende commando’s uit:



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

Na de installatie van de webserver kun je de bestanden van je website uploaden. Maak verbinding met je server via FTP/SFTP, navigeer naar de volgende map en upload je bestanden.

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

Na de installatie van de webserver kun je de bestanden van je website uploaden. Maak verbinding met je server via FTP/SFTP, navigeer naar de volgende map en upload je bestanden.

```
/usr/share/nginx/html
```



## Versie-check

Als de installatie klaar is, kun je met de commando’s `apache2 -v` (Apache) en `nginx -v` (Nginx) checken of alles goed is gegaan. De output zou er ongeveer zo uit moeten zien:



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

Als je zo’n output krijgt, dan is de webserver succesvol geïnstalleerd. 


