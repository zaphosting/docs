---
id: fivem-esx-disableinventory
title: "FiveM: Disattiva l'inventario (F2)"
description: "Scopri come disattivare l'inventario di default in ESX per personalizzare l'esperienza del tuo server → Scopri di più ora"
sidebar_label: Disattiva l'inventario (F2)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guida Archiviata
Questo documento è stato archiviato. I documenti vengono archiviati quando non sono più rilevanti, sono errati o non aggiornati. È stato archiviato per i seguenti motivi:

**Motivo**: Il metodo descritto è per una versione obsoleta di ESX. Questo approccio non può essere utilizzato per la versione attuale di ESX, poiché la struttura è cambiata. 
::::

<InlineVoucher />

## Collegati via FTP

Prima di poter disattivare l'inventario, devi configurare l'[Accesso via FTP](gameserver-ftpaccess.md).

Dopo averlo configurato, puoi connetterti e aprire la cartella del server:

![](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## Apporta le modifiche

Ora apriamo il percorso `server-data/resources/[esx]`, qui troviamo la cartella es_extended:

![](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

In questa cartella apriamo il file `config.lua`.

Dopo aver aperto il file con un editor di testo, cerchiamo questo codice:

```Lua
Config.EnableDefaultInventory   = true -- Display the default Inventory ( F2 )
```

Lo sostituiamo con:

```Lua
Config.EnableDefaultInventory   = false
```


Ora possiamo salvare il file e riavviare il server; una volta entrati, l'inventario non sarà più accessibile.

<InlineVoucher />