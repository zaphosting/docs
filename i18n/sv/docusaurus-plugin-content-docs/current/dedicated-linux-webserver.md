---
id: dedicated-linux-webserver
title: "Installera Nginx och Apache på en Linux-server - Konfigurera kraftfulla webbservermiljöer"
description: "Upptäck hur du installerar och konfigurerar Nginx eller Apache webbservrar för att effektivt hosta din webbplats → Läs mer nu"
sidebar_label: Installera webbserver
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Nginx och Apache är populära webbservrar som används för att leverera webbsidor till användarens webbläsare. Nedan visar vi hur du installerar en av servrarna på ditt system. 



## Förberedelser

Innan själva installationen av en webbserver kan börja är det viktigt att se till att systemet är uppdaterat. För att göra detta ansluter vi till servern via SSH. Om du inte vet vad SSH är eller hur du använder det, kolla in följande guide: [Första åtkomst (SSH)](vserver-linux-ssh.md).

När du är inloggad kan du uppdatera systemet med följande kommando beroende på ditt operativsystem:

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

När förberedelserna är klara kan installationen av webbservern börja. Beroende på operativsystem och webbserver måste följande kommandon köras:



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

Efter att webbservern är installerad kan du ladda upp dina webbplatsfiler. Anslut till din server via FTP/SFTP, navigera till följande katalog och ladda upp filerna.

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

Efter att webbservern är installerad kan du ladda upp dina webbplatsfiler. Anslut till din server via FTP/SFTP, navigera till följande katalog och ladda upp filerna.

```
/usr/share/nginx/html
```



## Versionskontroll

När installationen är klar kan du använda kommandona `apache2 -v` (Apache) och `nginx -v` (Nginx) för att kontrollera att installationen lyckades. Utdata bör se ut ungefär så här:



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

Om något av dessa visas betyder det att webbservern har installerats framgångsrikt. 


