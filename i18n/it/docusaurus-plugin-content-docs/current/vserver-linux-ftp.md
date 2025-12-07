---
id: vserver-linux-ftp
title: "VPS: Il servizio FTP non funziona - Risoluzione problemi"
description: "Scopri come risolvere e ripristinare l'accesso FTP sul tuo VPS quando i server di gioco o Teamspeak non sono raggiungibili → Scopri di più ora"
sidebar_label: Il servizio FTP non funziona
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Cosa fare se il server di gioco o Teamspeak non è raggiungibile via FTP?

:::info
Attenzione: i passaggi seguenti funzionano solo sul tuo VPS se è stata installata l'interfaccia web ZAP!
:::

Se il server creato non è raggiungibile via FTP, nella maggior parte dei casi il servizio FTP (ProFTPD) non è attivo. In rari casi può dipendere da una configurazione errata o da una porta occupata, cioè la porta FTP 21 è usata/occupata da un altro programma.

## Controlla il problema FTP più nel dettaglio:

### Verifica la disponibilità
Puoi farlo facilmente usando il browser FTP nell’interfaccia web. Clicca su "FTP browser" nel menu sotto Strumenti del server interessato

![](https://screensaver01.zap-hosting.com/index.php/s/GiqyC6G5cLsbSqp/preview)

Poi premi una volta il pulsante "Connessione diretta".

![](https://screensaver01.zap-hosting.com/index.php/s/ZSbrF5raYzdMgzZ/preview)

Ora probabilmente vedrai questa schermata:

![](https://screensaver01.zap-hosting.com/index.php/s/GtcCWfqadKGJoY7/preview)

Dato che è chiaro che la connessione tramite WebFTP o tool FTP non funziona, devi dare un’occhiata più da vicino al servizio FTP sul VPS.

### Controlla lo stato di ProFTPD

Per farlo, connettiti al tuo server via SSH / Console e digita il comando "service proftpd status". Lo stato verrà letto e mostrato così:

![](https://screensaver01.zap-hosting.com/index.php/s/TWqySPM3D5RmgYL/preview)

Qui puoi vedere che lo stato è "dead", cioè il servizio è offline e quindi non raggiungibile.

### Riavvia il servizio FTP
Puoi riavviare il servizio FTP con questo comando:

```
service proftpd start
```

Se non ricevi risposta dopo aver eseguito il comando, di solito il servizio è di nuovo online/disponibile.

Puoi verificarlo di nuovo con il comando "service proftpd status". Dovrebbe apparire così:

![](https://screensaver01.zap-hosting.com/index.php/s/iYxKMLJ2QfgzBKD/preview)

Ora che lo stato è "active" e non più "dead", puoi riprovare la connessione tramite tool FTP e WebFTP.

### Riprova la connessione
Ora dovresti riuscire a connetterti e vedere i tuoi dati.

### Problema risolto
✅ Il servizio FTP (ProFTPD) è di nuovo avviato/attivo e nulla ostacola lo scambio dati!

<InlineVoucher />