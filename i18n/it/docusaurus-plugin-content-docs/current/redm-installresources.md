---
id: redm-installresources
title: "RedM: Installazione delle risorse"
description: "Scopri come potenziare il tuo server RedM con risorse popolari per progetti più grandi come i server roleplay → Scopri di più ora"
sidebar_label: Installa risorse
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le risorse possono essere usate per espandere il tuo server RedM con funzionalità extra. Questo è particolarmente interessante se stai pensando di avviare progetti più grandi, come un server roleplay o simili. Senza queste risorse aggiuntive, non si può fare molto.

RedM e la sua community offrono una vasta gamma di risorse. Una panoramica delle risorse più popolari la trovi sul forum Cfx.re: https://forum.cfx.re/c/redm-development/54



<InlineVoucher />

## Preparazione

L’installazione delle risorse avviene tramite FTP. Ti servirà un client FTP per caricare i file sul tuo server. Se non hai mai usato FTP, ti consigliamo di dare un’occhiata alla guida [Accesso FTP](gameserver-ftpaccess.md).

Le risorse scaricate sono solitamente in formato compresso. Questo significa che devi decomprimere i file con un programma come 7Zip, WinRAR o WinZip. La cartella decompressa della risorsa dovrebbe contenere almeno questi file: `__resource.lua` o `fxmanifest.lua` insieme agli script associati.

:::info
Se questi file non ci sono, potrebbero trovarsi in una sottocartella all’interno della risorsa.
:::

## Installazione

### Caricamento file

Ora devi caricare i file decompressi come cartella singola (se non lo sono già). La cartella va caricata nella directory `resources` del server. La struttura tipica è: `/gXXXXXX/redm-txadmin/YOUR_FRAMEWORK/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/ofMKfG6rfewsb3o/preview)



Alcune risorse lavorano con un database e spesso includono file SQL da importare. Se è il tuo caso, dai un’occhiata alla nostra guida [Importazione file SQL](redm-sql-file-import.md) per sapere come fare.

### Attivazione

Per far sì che la risorsa venga caricata all’avvio del server, devi attivarla nel file `server.cfg` del tuo server. L’attivazione si fa con il comando `start [nome risorsa]`.

Per esempio, se hai caricato la risorsa nella cartella `eup-ui`, il comando da inserire nel config sarà:
```
start eup-ui
```

Puoi modificare il file `server.cfg` tramite il CFG Editor nell’interfaccia di txAdmin.

:::info
Assicurati che il nome della cartella che hai caricato corrisponda esattamente a quello nel comando start, compreso il maiuscolo/minuscolo.
:::



## Conclusione
Infine, riavvia il server. La risorsa installata verrà caricata automaticamente al prossimo avvio completo del server. Hai installato con successo una risorsa nel tuo server di gioco RedM. Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />