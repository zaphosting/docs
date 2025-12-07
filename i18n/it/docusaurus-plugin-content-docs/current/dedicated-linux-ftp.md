---
id: dedicated-linux-ftp
title: "Dedicated Server: Il servizio FTP non funziona - Risoluzione problemi"
description: "Scopri come risolvere i problemi di accesso FTP sul tuo VPS per ripristinare la connettività del server e gestire al meglio il tuo server di gioco o Teamspeak → Scopri di più no"
sidebar_label: Il servizio FTP non funziona
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Cosa fare se il server di gioco o il server Teamspeak non sono raggiungibili via FTP?

:::info
Attenzione: i passaggi seguenti funzionano solo sul tuo VPS se è stata installata l’interfaccia web ZAP!
:::

Se il server creato non è raggiungibile via FTP, nella maggior parte dei casi il servizio FTP (ProFTPD) non è attivo. In rari casi può dipendere da una configurazione errata o da una porta occupata, ad esempio la porta FTP 21 è usata/occupata da un altro programma.



## Controlla più da vicino il problema FTP:

### Verifica la disponibilità
Puoi farlo facilmente usando il browser FTP nell’interfaccia web. Clicca su "FTP browser" nel menu sotto Strumenti del server interessato

![](https://screensaver01.zap-hosting.com/index.php/s/G394GJkDc9WXEzs/preview)

Poi premi una volta il pulsante "Connessione diretta". 

![](https://screensaver01.zap-hosting.com/index.php/s/KLCmb8A4xSjWmy9/preview)

Ora probabilmente vedrai questa schermata:

![](https://screensaver01.zap-hosting.com/index.php/s/FFJo8XeEJcX7RTM/preview)

Dato che è chiaro che la connessione via WebFTP o tool FTP non funziona, devi dare un’occhiata più da vicino al servizio FTP sul VPS.

### Controlla lo stato di ProFTPD

Per farlo, connettiti al tuo server via SSH / Console e inserisci il comando "service proftpd status". Lo stato verrà letto e mostrato così:

![](https://screensaver01.zap-hosting.com/index.php/s/zsg8qwFJsWEAZkA/preview)


Qui puoi vedere che lo stato è "dead", cioè il servizio è offline e quindi non raggiungibile.


### Riavvia il servizio FTP
Il servizio FTP può essere riavviato con questo comando:

```
service proftpd start
```

Se dopo aver eseguito il comando non ricevi risposta, di solito il servizio è di nuovo online/disponibile.

Puoi verificare di nuovo con il comando "service proftpd status". Dovrebbe apparire così:

![](https://screensaver01.zap-hosting.com/index.php/s/8QNNnoMFYG4rt2D/preview)

Ora che lo stato è "active" e non più "dead", puoi riprovare la connessione con il tool FTP o WebFTP.

### Riprova la connessione
Ora dovresti riuscire a connetterti e vedere i tuoi dati.

### Problema risolto
✅ Il servizio FTP (ProFTPD) è di nuovo attivo e non ci sono più ostacoli allo scambio dati!