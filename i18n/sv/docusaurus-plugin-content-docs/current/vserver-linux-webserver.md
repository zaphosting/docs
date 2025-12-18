---
id: vserver-linux-webserver
title: "VPS: Installera Nginx och Apache webbserver"
description: "Lär dig hur du sätter upp och konfigurerar Apache eller Nginx webbservrar för att effektivt hosta din hemsida → Läs mer nu"
sidebar_label: Installera webbserver
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Nginx och Apache är populära webbservrar som används för att leverera webbsidor till användarens webbläsare. Nedan visar vi hur du installerar en av servrarna på ditt system.  
<InlineVoucher />


## Förberedelser

Innan själva installationen av webbservern kan börja behöver du se till att systemet är uppdaterat. För att göra detta ansluter vi till servern via SSH. Om du inte vet vad SSH är eller hur du använder det, kolla in den här guiden: [Initial access (SSH)](vserver-linux-ssh.md).

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

När förberedelserna är klara kan installationen av webbservern börja. Beroende på operativsystem och webbserver kör du följande kommandon:



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

Efter installationen kan du ladda upp dina hemsidefiler. Anslut till din server via FTP/SFTP, navigera till följande mapp och ladda upp filerna.

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

Efter installationen kan du ladda upp dina hemsidefiler. Anslut till din server via FTP/SFTP, navigera till följande mapp och ladda upp filerna.

```
/usr/share/nginx/html
```



## Versionskontroll

När installationen är klar kan du med kommandona `apache2 -v` (Apache) och `nginx -v` (Nginx) kontrollera att installationen lyckades. Utdata bör se ut ungefär så här:



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

Om du får något av dessa svar har webbservern installerats korrekt. 

## Avslutning

Grattis, du har nu installerat och konfigurerat din valda webbserver! Har du fler frågor eller problem är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 

<InlineVoucher />