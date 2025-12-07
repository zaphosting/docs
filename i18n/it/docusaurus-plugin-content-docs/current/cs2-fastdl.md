---
id: cs2-fastdl
title: "Counter-Strike 2: Configurare FastDL"
description: "Scopri come ottimizzare la distribuzione dei contenuti di gioco con FastDL per velocizzare i download e ridurre il carico sul server per i giocatori di Counter-Strike 2 → Scopri di più ora"
sidebar_label: FastDL
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduzione

FastDL (Fast Download) è un metodo per distribuire contenuti personalizzati come mappe, suoni o modelli tramite un server web esterno invece che dal server di gioco stesso. Questo migliora la velocità di download per i giocatori e riduce il carico sul server.

Per usare FastDL, ti serve l’accesso a un server web HTTP pubblico. Una soluzione top è un **pacchetto Webspace ZAP-Hosting**, perfetto per distribuire contenuti di gioco. Questa guida ti spiega come configurare FastDL usando il webspace ZAP.

<InlineVoucher />

## Requisiti

Ti serve un server Counter-Strike 2 attivo ospitato da ZAP-Hosting e un pacchetto webspace aggiuntivo. Devi avere accesso FTP o al File Manager sia per il server di gioco che per il webspace.

Sul lato gioco, i file che vuoi distribuire (come mappe `.bsp`, file audio o modelli) devono essere già organizzati correttamente. La stessa struttura dovrà essere replicata sul webspace per permettere una consegna FastDL senza intoppi.

## Preparare il Webspace

Per gestire e caricare i file FastDL, ti consigliamo di usare il **File Manager** disponibile nell’interfaccia webspace ZAP. Lo trovi direttamente nel pannello web sotto **Webspace > File Manager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Nella directory principale del tuo webspace, crea una cartella chiamata `fastdl`. Dentro questa cartella, crea sottocartelle come `maps`, `sound` o `models` a seconda dei contenuti che vuoi servire. La struttura delle cartelle deve rispecchiare esattamente quella usata dal tuo server Counter-Strike 2.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Prima di caricare i file, assicurati che siano **compressi in formato `.bz2`** (bzip2). La maggior parte dei motori Source richiede che i file siano consegnati in questo formato. Per esempio, una mappa `custom_map.bsp` va caricata come `custom_map.bsp.bz2`.

:::info Compressione con 7-Zip
Per preparare i file per FastDL, puoi usare strumenti come **7-Zip** per comprimerli in formato `.bz2`. Basta cliccare col tasto destro sul file, scegliere **7-Zip > Aggiungi all’archivio...**, selezionare `bzip2` come formato archivio e confermare.
:::

Dopo aver caricato i file compressi nelle cartelle giuste, assicurati che **tutte le directory e i file abbiano i permessi di lettura corretti** per essere accessibili pubblicamente. Il File Manager ti permette di modificare i permessi di cartelle e file.

Una volta caricati e controllati i permessi, i contenuti FastDL saranno disponibili tramite questo URL pubblico:

```
https://[tuo-dominio].zap.cloud/fastdl/
```

Puoi testarlo aprendo l’URL nel browser e verificando che i file siano accessibili.

## Configurare il Server di Gioco

Nel pannello ZAP, sotto l’amministrazione del server di gioco, apri il file `server.cfg` dalla pagina **Configs** e inserisci queste righe:

```cfg
sv_downloadurl "https://[tuo-dominio].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Assicurati che l’URL FastDL corrisponda esattamente alla struttura del tuo webspace. Dopo aver salvato, riavvia il server di gioco per applicare la configurazione.

## Conclusione

FastDL si può configurare in modo rapido e affidabile usando il tuo webspace ZAP. Questo permette una consegna veloce ed efficiente dei contenuti personalizzati, migliorando l’esperienza di tutti i giocatori sul tuo server Counter-Strike 2.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />