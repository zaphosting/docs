---
id: fivem-esx-spawnpoints
title: "FiveM: Gestisci e personalizza i punti di spawn con ESX"
description: "Scopri come personalizzare ed espandere i punti di spawn nel framework ESX per un'esperienza di gioco migliorata → Scopri di più ora"
sidebar_label: Punti di Spawn
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Vuoi cambiare i punti di spawn di default o aggiungerne di nuovi? La gestione dei punti di spawn nel **framework ESX** è definita in `es_extended`. Qui ti spieghiamo come personalizzarli. 

<InlineVoucher />

## Configurazione

I punti di spawn si modificano tramite il file di configurazione `main.lua` di `es_extended` (../es_extended/shared/config/). Puoi modificare questo file via FTP. Se non sai ancora come usare FTP, ti consigliamo di dare un’occhiata alla nostra guida su [Accesso FTP](gameserver-ftpaccess.md). 

La configurazione di default dei punti di spawn è la seguente: 

```
Config.DefaultSpawns = { -- Se vuoi più posizioni di spawn e sceglierle a caso, decommenta il codice commentato o aggiungi altre location
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
}
```

Facciamo finta che tu voglia aggiungere altri punti di spawn, dovrai semplicemente aggiungere un’altra voce nel file di configurazione: 

```
Config.DefaultSpawns = { -- Se vuoi più posizioni di spawn e sceglierle a caso, decommenta il codice commentato o aggiungi altre location
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
    --{x = 766.5239, y = -112.0400, z = 30.2922, heading = 1.0} // NUOVO SPAWN 
}
```

:::info Trova le coordinate
Per ottenere le coordinate attuali ti serve una risorsa adatta. Su internet ne trovi diverse, scegli quella che ti piace di più. :)
:::

## Conclusione

Hai cambiato con successo i punti di spawn esistenti o ne hai aggiunti di nuovi seguendo questo metodo. Per altre domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />