---
id: dedicated-linux-ftp-install
title: "Configura ProFTPD su un Server Linux - Ospita un Servizio FTP Sicuro"
description: "Scopri come configurare e gestire un server FTP sicuro su Linux con FileZilla Server per semplificare trasferimenti di file e accesso utenti → Scopri di più ora"
sidebar_label: Installa server FTP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il **FTP (File Transfer Protocol)** è un protocollo di rete usato per trasferire file su una rete TCP/IP. Il protocollo è stato sviluppato per permettere lo scambio facile di file tra sistemi. Con **FileZilla Server** è possibile configurare un server FTP su un sistema operativo Linux. FileZilla Server è semplice da installare e configurare, e offre tante funzionalità come la possibilità di creare account utente, gestire i permessi di accesso e trasferire file. In questa guida vedremo come installare e configurare il servizio **FileZilla Server** su un server Linux.

## Come installo il server FTP per aggiungere un utente?

Per aggiungere un utente FTP, prima devi installare il server FTP. Per farlo, connettiti una volta al server via SSH (Putty).

Per installare il server FTP, digita il comando **apt-get install proftpd**. Conferma la richiesta con **Y** e premi invio:

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

Ora dobbiamo modificare la configurazione. Digita **nano /etc/proftpd/proftpd.conf** e conferma. Si aprirà il file di configurazione nell’editor Nano:

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

Devi aggiungere le seguenti righe:

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

Ora devi riavviare il server FTP per applicare le modifiche. Usa questo comando: **service proftpd restart**

## Come aggiungo un utente FTP?

Per creare un nuovo utente FTP, prima dobbiamo creare un gruppo FTP. Lo facciamo con il comando **addgroup ftpuser**. Dovrebbe apparire così:

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

Ora possiamo aggiungere il primo utente FTP con i comandi: **adduser benutzerftp -shell /bin/false -home /var/www** e poi **adduser benutzerftp ftpuser**.

Ti verrà chiesto di impostare una password:

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

Poi conferma che i dati inseriti siano corretti:

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

L’ultimo passo è assegnare il nuovo utente al gruppo con **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

Ora puoi connetterti con le credenziali che hai impostato:

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)