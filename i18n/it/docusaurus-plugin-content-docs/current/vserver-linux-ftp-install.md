---
id: vserver-linux-ftp-install
title: "VPS: Installazione di un server FTP"
description: "Scopri come configurare e gestire un server FTP sicuro su Linux con FileZilla Server per trasferire file in modo efficiente → Scopri di più ora"
sidebar_label: Installa server FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il **FTP (File Transfer Protocol)** è un protocollo di rete usato per trasferire file su una rete TCP/IP. È stato sviluppato per permettere lo scambio semplice di file tra sistemi. Con **FileZilla Server** è possibile configurare un server FTP su un sistema operativo Linux. FileZilla Server è facile da installare e configurare, e offre tante funzionalità come la creazione di account utente, la gestione dei permessi di accesso e il trasferimento file. In questa guida vedremo come installare e configurare il servizio **FileZilla Server** su un server Linux.

<InlineVoucher />

## Installazione

Per aggiungere un utente FTP, prima devi installare il server FTP. Per farlo, connettiti una volta al server via SSH (Putty).

Per installare il server FTP, digita il comando **apt-get install proftpd**. Conferma la richiesta con **Y** e premi invio:

![](https://screensaver01.zap-hosting.com/index.php/s/seKtY9GBELG78in/preview)

Ora dobbiamo modificare la configurazione. Digita **nano /etc/proftpd/proftpd.conf** e conferma. Si aprirà il file di configurazione nell’editor Nano:

![](https://screensaver01.zap-hosting.com/index.php/s/J5kS2bJFjDyLpCZ/preview)

Aggiungi le seguenti righe: 

![](https://screensaver01.zap-hosting.com/index.php/s/TZoDZpiBQi5Yb5L/preview)

Ora devi riavviare il server FTP per applicare le modifiche. Usa questo comando: **service proftpd restart**

## Aggiungere utenti

Per creare un nuovo utente FTP, prima creiamo un gruppo FTP con il comando **addgroup ftpuser**. Vedrai qualcosa del genere: 

![](https://screensaver01.zap-hosting.com/index.php/s/M2jnE6mWqQLKkme/preview)

Ora aggiungiamo il primo utente FTP con i comandi: **adduser benutzerftp -shell /bin/false -home /var/www** e poi **adduser benutzerftp ftpuser**.

Ti verrà chiesto di impostare una password: 

![](https://screensaver01.zap-hosting.com/index.php/s/LKsops7sKTr2jXt/preview)

Conferma che i dati inseriti siano corretti: 

![](https://screensaver01.zap-hosting.com/index.php/s/LWdMS2j7PnRQwnd/preview)

Ultimo passaggio: assegna l’utente al gruppo con **adduser benutzerftp ftpuser** :

![](https://screensaver01.zap-hosting.com/index.php/s/66fqTTttpM5BPkg/preview)

Ora puoi connetterti con le credenziali impostate:

![](https://screensaver01.zap-hosting.com/index.php/s/ftccknJBSoC2pCH/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/zRsRHA3NWNCwcsj/preview)



## Conclusione

Complimenti, hai installato e configurato con successo il server FTP! Se hai altre domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />