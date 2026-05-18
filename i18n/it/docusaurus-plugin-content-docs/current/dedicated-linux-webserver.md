---
id: dedicated-linux-webserver
title: "Configura Nginx e Apache su un Server Linux - Imposta Ambienti Web Potenti"
description: "Scopri come installare e configurare i web server Nginx o Apache per ospitare il tuo sito in modo efficiente → Scopri di più ora"
sidebar_label: Installa webserver
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Nginx e Apache sono web server super popolari usati per consegnare pagine web al browser degli utenti. Qui sotto ti mostriamo come installare uno di questi servizi sul tuo sistema.

## Preparazione

Prima di partire con l’installazione vera e propria del webserver, è fondamentale assicurarsi che il sistema sia aggiornato. Per farlo, ci connettiamo al server via SSH. Se non sai cos’è SSH o come usarlo, dai un’occhiata a questa guida: [Accesso iniziale (SSH)](vserver-linux-ssh.md).

Una volta dentro, aggiorna il sistema con il comando giusto per il tuo OS:

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

## Installazione

Dopo aver preparato tutto, puoi finalmente installare il webserver. A seconda del sistema operativo e del webserver scelto, esegui uno di questi comandi:

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

Dopo l’installazione, puoi caricare i file del tuo sito. Connettiti al server via FTP/SFTP, vai nella cartella qui sotto e carica i tuoi file:

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

Dopo l’installazione, carica i file del tuo sito. Connettiti via FTP/SFTP, naviga in questa directory e carica i file:

```
/usr/share/nginx/html
```

## Controllo Versione

Una volta finito, verifica che tutto sia andato a buon fine con questi comandi: `apache2 -v` per Apache e `nginx -v` per Nginx. Dovresti vedere un output simile a questo:

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

Se vedi qualcosa di simile, congratulazioni: il tuo webserver è installato e pronto all’uso!