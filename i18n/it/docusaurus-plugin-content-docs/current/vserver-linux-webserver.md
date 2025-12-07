---
id: vserver-linux-webserver
title: "VPS: Installazione di Nginx e Apache webserver"
description: "Scopri come configurare e installare Apache o Nginx per ospitare il tuo sito web in modo efficiente → Scopri di più ora"
sidebar_label: Installa webserver
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Nginx e Apache sono web server molto popolari usati per consegnare pagine web al browser degli utenti. Qui sotto ti mostriamo come installare uno di questi servizi sul tuo sistema.  
<InlineVoucher />


## Preparazione

Prima di iniziare l’installazione vera e propria del webserver, è fondamentale assicurarsi che il sistema sia aggiornato. Per farlo, connettiti al server via SSH. Se non sai cos’è SSH o come usarlo, dai un’occhiata a questa guida: [Accesso iniziale (SSH)](vserver-linux-ssh.md).

Una volta connesso, aggiorna il sistema con il comando giusto per il tuo OS:

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

Dopo aver completato la preparazione, puoi partire con l’installazione del webserver. A seconda del sistema operativo e del webserver scelto, esegui uno di questi comandi:



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

Dopo aver installato il webserver, puoi caricare i file del tuo sito. Connettiti al server via FTP/SFTP, vai nella cartella qui sotto e carica i file.

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

Dopo aver installato il webserver, puoi caricare i file del tuo sito. Connettiti al server via FTP/SFTP, vai nella cartella qui sotto e carica i file.

```
/usr/share/nginx/html
```



## Controllo versione

Una volta finita l’installazione, puoi verificare che tutto sia andato a buon fine con i comandi `apache2 -v` (per Apache) e `nginx -v` (per Nginx). L’output dovrebbe essere simile a questo:



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

Se vedi uno di questi output, il webserver è stato installato con successo. 

## Conclusione

Congratulazioni, hai installato e configurato il webserver che volevi! Se hai altre domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni! 

<InlineVoucher />