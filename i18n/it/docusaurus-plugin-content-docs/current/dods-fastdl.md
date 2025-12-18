---
id: dods-fastdl
title: "Day of Defeat: Source: Configurare FastDL"
description: "Scopri come velocizzare il download dei contenuti di gioco e ridurre il carico sul server con FastDL usando lo spazio web ZAP-Hosting → Scopri di più ora"
sidebar_label: FastDL
services:
  - gameserver-dods
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduzione

FastDL (Fast Download) è un metodo per distribuire contenuti personalizzati come mappe, suoni o modelli tramite un server web esterno invece che dal server di gioco stesso. Questo migliora la velocità di download per i giocatori e riduce il carico sul server.

Per usare FastDL, ti serve accesso a un server web HTTP pubblico. Una soluzione top è un **pacchetto Webspace ZAP-Hosting**, perfetto per distribuire contenuti di gioco. Questa guida ti spiega come configurare FastDL usando lo spazio web ZAP.

<InlineVoucher />

## Requisiti

Ti serve un server attivo di Day of Defeat: Source ospitato da ZAP-Hosting e un pacchetto webspace aggiuntivo. Devi avere accesso FTP o al File Manager sia per il server di gioco che per lo spazio web.

Sul lato gioco, i file che vuoi distribuire (come mappe `.bsp`, file audio o modelli) devono essere già organizzati correttamente. La stessa struttura dovrà essere replicata nello spazio web per permettere una consegna FastDL senza intoppi.

## Preparare lo Spazio Web

Per gestire e caricare i file FastDL, ti consigliamo di usare il **File Manager** integrato nell’interfaccia web ZAP. Lo trovi direttamente nel pannello sotto **Webspace > File Manager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Nella cartella principale del tuo spazio web, crea una cartella chiamata `fastdl`. Dentro questa, crea sottocartelle come `maps`, `sound` o `models` a seconda dei contenuti che vuoi servire. La struttura delle cartelle deve rispecchiare esattamente quella usata dal tuo server Day of Defeat: Source.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Prima di caricare i file, assicurati che siano **compressi in formato `.bz2`** (bzip2). La maggior parte dei motori Source richiede che i file siano consegnati in questo formato. Per esempio, una mappa `custom_map.bsp` va caricata come `custom_map.bsp.bz2`.

:::info Compressione con 7-Zip
Per preparare i file per FastDL, puoi usare programmi come **7-Zip** per comprimerli in `.bz2`. Basta cliccare col tasto destro sul file, scegliere **7-Zip > Aggiungi all’archivio...**, selezionare `bzip2` come formato e confermare.
:::

Dopo aver caricato i file compressi nelle cartelle giuste, assicurati che **tutte le directory e i file abbiano i permessi di lettura corretti** per essere accessibili pubblicamente. Il File Manager ti permette di modificare i permessi di cartelle e file.

Una volta caricati e controllati i permessi, i contenuti FastDL saranno disponibili tramite questo URL pubblico:

```
https://[tuo-dominio].zap.cloud/fastdl/
```

Puoi testare aprendo l’URL nel browser e verificando che i file siano raggiungibili.

## Configurare il Server di Gioco

Nel pannello ZAP, sotto l’amministrazione del server di gioco, apri il file `server.cfg` dalla pagina **Configs** e inserisci queste righe:

```cfg
sv_downloadurl "https://[tuo-dominio].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Controlla che l’URL FastDL corrisponda esattamente alla struttura del tuo spazio web. Dopo aver salvato, riavvia il server di gioco per applicare la configurazione.

## Conclusione

FastDL si può configurare in modo rapido e affidabile usando il tuo spazio web ZAP. Così puoi consegnare contenuti personalizzati in modo veloce ed efficiente, migliorando l’esperienza di tutti i giocatori sul tuo server Day of Defeat: Source.

Per domande o supporto, il nostro team è sempre pronto ad aiutarti ogni giorno! 🙂

<InlineVoucher />