---
id: fivem-esx-changemoneyicon
title: "FiveM: Cambia l'icona del denaro"
description: "Scopri come personalizzare l'icona del denaro del tuo server per un'esperienza di gioco unica → Scopri di più ora"
sidebar_label: Cambia Icona Denaro
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guida Archiviata
Questo documento è stato archiviato. I documenti vengono archiviati quando non sono più rilevanti, sono errati o non aggiornati. È stato archiviato per i seguenti motivi:

**Motivo**: Il metodo descritto è per una versione ESX obsoleta. Questo approccio non può essere usato con la versione ESX attuale, poiché la struttura è cambiata.
::::



<InlineVoucher />

## Connettiti via FTP

Prima di tutto, devi configurare l’[Accesso via FTP](gameserver-ftpaccess.md).


Dopo averlo configurato, puoi connetterti e aprire la cartella del server.

![](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


Qui apriamo il file `server.cfg` nella cartella `server-data`.

## Modifica la Config

Ora aggiungiamo questa riga sopra la linea `start essentialmode`:

```Lua
set es_moneyIcon "$"
```

Qui puoi sostituire il simbolo $ con la tua icona personalizzata.

![](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


Dopo aver salvato il file e riavviato il server, l’icona del denaro sarà cambiata in game.

<InlineVoucher />