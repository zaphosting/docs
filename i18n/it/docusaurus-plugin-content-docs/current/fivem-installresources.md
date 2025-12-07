---
id: fivem-installresources
title: "FiveM: Installazione delle risorse"
description: "Scopri come potenziare il tuo server FiveM con risorse popolari per progetti più grandi come i server roleplay → Scopri di più ora"
sidebar_label: Installa risorse
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/fivem-resources.json';

## Introduzione

Le risorse possono essere usate per espandere il tuo server FiveM con funzionalità extra. Questo è particolarmente interessante se stai pianificando di avviare progetti più grandi, come un server roleplay o simili. Senza queste risorse aggiuntive, non si può fare molto.

FiveM e la sua community offrono una vasta gamma di risorse. Una panoramica delle risorse più popolari la trovi sul forum Cfx.re: https://forum.cfx.re/c/development/releases/7



<InlineVoucher />

## Preparazione

L’installazione delle risorse avviene tramite FTP. Ti servirà un client FTP per caricare i file sul tuo server. Se non hai mai usato FTP, ti consigliamo di dare un’occhiata alla nostra guida su [Accesso FTP](gameserver-ftpaccess.md).

Le risorse scaricate sono solitamente in formato compresso. Questo significa che devi decomprimere i file con un programma come 7Zip, Winrar o WinZip. La cartella della risorsa decompressa dovrebbe contenere almeno i seguenti file: `__resource.lua` o `fxmanifest.lua` insieme agli script associati.

:::info
Se questi file non sono presenti, potrebbero trovarsi in una sottocartella all’interno della risorsa.
:::

## Installazione

### Caricamento file

Ora devi caricare i file decompressi come una cartella singola (se non lo sono già). La tua cartella deve essere caricata nella directory `resources` del server. La struttura tipica è: `/gXXXXXX/fivem/YOUR_TEMPLATE/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/9ZEX32BSrwGDjEc/preview)



Alcune risorse lavorano con un database e spesso includono file SQL da importare nel database. Se è il tuo caso, dai un’occhiata alla nostra guida su [Importazione file SQL](fivem-sql-file-import.md) per sapere come fare.

### Attivazione

Per far sì che la risorsa installata venga caricata all’avvio del server, devi attivarla nel file `server.cfg` del tuo server. L’attivazione si fa con il comando `start [nome risorsa]`.

Per esempio, se hai caricato la risorsa nella cartella `eup-ui`, il comando di avvio nel config deve essere così: 
```
start eup-ui
```

Puoi modificare il file `server.cfg` tramite il CFG Editor nell’interfaccia txAdmin.

:::info
Assicurati che il nome della cartella che hai caricato corrisponda esattamente a quello nel comando start, inclusa la differenza tra maiuscole e minuscole.
:::


## Risorse Popolari

Cerchi ancora le risorse perfette per il tuo server? Dai un’occhiata alla nostra lista selezionata delle risorse più popolari e consigliate per migliorare il gameplay e dare al tuo server quel tocco finale che merita. Lasciati ispirare e trova proprio le aggiunte giuste per il tuo progetto.

<SearchableItemList items={items} />


## Conclusione
Ora puoi riavviare il server. La risorsa installata dovrebbe caricarsi automaticamente al prossimo avvio completo del server. Hai installato con successo una risorsa nel tuo game server FiveM. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />