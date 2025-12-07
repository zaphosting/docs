---
id: vserver-windows-ftpserver
title: "VPS: Installazione di FTP"
description: "Scopri come configurare e gestire un server FTP FileZilla su Windows per trasferimenti file sicuri e controllo accessi utenti → Scopri di più ora"
sidebar_label: Installa FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il **FTP (File Transfer Protocol)** è un protocollo di rete usato per trasferire file su una rete TCP/IP. È stato sviluppato per facilitare lo scambio di file tra sistemi.

Con **FileZilla Server** puoi configurare un server FTP su un sistema operativo Windows. FileZilla Server è facile da installare e configurare, e offre tante funzionalità come la creazione di account utente, la gestione dei permessi di accesso e il trasferimento file.
<InlineVoucher />


## Preparazione

### Download

Per configurare un server FTP serve il software giusto. FileZilla Server è una soluzione perfetta per Windows. Puoi scaricarlo qui: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Installazione

Dopo aver scaricato il file di setup, eseguilo cliccandoci sopra. Si aprirà questa finestra: ![](https://screensaver01.zap-hosting.com/index.php/s/Qi97fYbyoKDdsi3/preview)



Qui puoi scegliere i pacchetti da installare. Di solito va bene lasciare quelli pre-selezionati, quindi clicca su **Next** e scegli la cartella di installazione:

![](https://screensaver01.zap-hosting.com/index.php/s/fsMiKt9Zjas4Rme/preview)

Nel nostro esempio FileZilla Server verrà installato in **C:\Program Files (x86)\FileZilla Server**, ma puoi scegliere la tua cartella. Dopo aver scelto il percorso, devi decidere come installare e avviare il server FTP, impostare la porta e definire una password amministratore.



![](https://screensaver01.zap-hosting.com/index.php/s/gCoGAcGnTtLQ2P6/preview)

Clicca ancora su **Next** e poi su **Install** per avviare l’installazione. Si aprirà l’interfaccia di amministrazione di FileZilla FTP Server. Clicca su **Connect to FileZilla FTP Server**.

Comparirà una finestra con i campi Host, Port e Password. Lascia i primi due così come sono e inserisci la password amministratore che hai scelto. Poi clicca su **Ok** per connetterti.



## Configurazione

### Creazione utente

Per connetterti al server via FTP devi creare un utente. 
Clicca su **Server** nel menu in alto e poi su **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/D7KHSrkGZEErEcH/preview)

Nel menu Users clicca su **Add** per aggiungere un nuovo utente:

![](https://screensaver01.zap-hosting.com/index.php/s/mtdi4oRmR4ZDzyq/preview)

Nel nostro esempio l’utente si chiama **YourUserName**, ma puoi scegliere il nome che vuoi.



### Password e permessi

Ora che l’utente è creato, devi configurare accesso e permessi. Attiva l’utente e imposta la password nella categoria **General** sotto **Credentials**. Ti consigliamo di usare una password per sicurezza. Seleziona **Require a password to log in** e inserisci la password che preferisci.

![](https://screensaver01.zap-hosting.com/index.php/s/gwkkexqXgmfXc2q/preview)

Per dare i permessi giusti, devi indicare quali cartelle l’utente può vedere cliccando su **Add** in mount points. Devi specificare un percorso virtuale e uno reale. Nel nostro esempio abbiamo mappato il disco C sotto \.

![](https://screensaver01.zap-hosting.com/index.php/s/LE46PteX7eAftjQ/preview)

A destra trovi l’opzione **Permissions** per impostare i diritti di accesso. Se vuoi che l’utente possa leggere e modificare i file, scegli **Read+Write**.

::: danger
Per motivi di sicurezza, dai accesso all’utente solo alle cartelle necessarie.
:::

Conferma tutto cliccando su **Apply**.



## Eccezioni Firewall di Windows

Per permettere la connessione al server FTP, devi abilitare FileZilla Server nel firewall di Windows. Vai in **Pannello di controllo\Sistema e sicurezza\Windows Defender Firewall** e clicca su **Consenti app o funzionalità attraverso Windows Defender Firewall**.
Nella finestra successiva seleziona l’app da autorizzare:

![](https://screensaver01.zap-hosting.com/index.php/s/aorQ7Y8gQJPSE8e/preview)

Nel nostro esempio il percorso è **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/wx7p5GykbQfx8B6/preview)

Chiudi con **OK** e ora la connessione al tuo server FTP è attiva.


## Conclusione

Complimenti, hai installato e configurato con successo il server FTP sul tuo VPS! Se hai domande o problemi, il nostro support è sempre pronto ad aiutarti, ogni giorno!

<InlineVoucher />