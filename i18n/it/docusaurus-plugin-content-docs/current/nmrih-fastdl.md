---
id: nmrih-fastdl
title: "No More Room In Hell: Configurare FastDL"
description: "Scopri come ottimizzare la distribuzione dei contenuti di gioco con FastDL usando lo spazio web di ZAP-Hosting per download più veloci e meno carico sul server → Scopri di più ora"
sidebar_label: FastDL
services:
  - gameserver-nmrih
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduzione

FastDL (Fast Download) è un metodo per distribuire contenuti personalizzati come mappe, suoni o modelli tramite un server web esterno invece che dal server di gioco stesso. Questo migliora la velocità di download per i giocatori e riduce il carico sul server.

Per usare FastDL, ti serve accesso a un server web HTTP pubblico. Una scelta top è un **pacchetto Webspace ZAP-Hosting**, perfetto per distribuire contenuti di gioco. Questa guida ti spiega come configurare FastDL usando lo spazio web ZAP.

<InlineVoucher />

## Requisiti

Ti serve un server No More Room In Hell attivo ospitato da ZAP-Hosting e un pacchetto webspace aggiuntivo. Devi avere accesso FTP o al File Manager sia per il server di gioco che per lo spazio web.

Sul lato gioco, i file che vuoi distribuire (come mappe `.bsp`, file audio o modelli) devono già essere organizzati correttamente. La stessa struttura dovrà essere replicata sul webspace per permettere una consegna FastDL senza intoppi.

## Preparare lo Spazio Web

Per gestire e caricare i file FastDL, ti consigliamo di usare il **File Manager** disponibile nell’interfaccia web di ZAP webspace. Lo trovi direttamente nel pannello web sotto **Webspace > File Manager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Nella directory principale del tuo webspace, crea una cartella chiamata `fastdl`. Dentro questa cartella, crea sottocartelle come `maps`, `sound` o `models` a seconda dei contenuti che vuoi servire. La struttura delle cartelle deve rispecchiare esattamente quella usata dal tuo server No More Room In Hell.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Prima di caricare i file, assicurati che siano **compressi nel formato `.bz2`** (bzip2). La maggior parte dei motori basati su Source richiede che i file siano consegnati in questo formato. Per esempio, una mappa `custom_map.bsp` va caricata come `custom_map.bsp.bz2`.

:::info Compressione con 7-Zip
Per preparare i file per FastDL, puoi usare strumenti come **7-Zip** per comprimerli in `.bz2`. Basta cliccare col tasto destro sul file, scegliere **7-Zip > Aggiungi all’archivio...**, selezionare `bzip2` come formato archivio e confermare.
:::

Dopo aver caricato i file compressi nelle cartelle giuste, assicurati che **tutte le directory e i file abbiano i permessi di lettura corretti** per essere accessibili pubblicamente. Il File Manager ti permette di modificare i permessi di cartelle e file.

Una volta caricati e controllati i permessi, i contenuti FastDL saranno disponibili tramite questo URL pubblico:

```
https://[tuo-dominio].zap.cloud/fastdl/
```

Puoi testarlo aprendo l’URL nel browser e verificando che i file siano accessibili.

## Configurare il Server di Gioco

Nell’interfaccia ZAP, sotto l’amministrazione del server di gioco, apri il file `server.cfg` dalla pagina **Configs** e inserisci queste righe:

```cfg
sv_downloadurl "https://[tuo-dominio].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Assicurati che l’URL FastDL corrisponda esattamente alla struttura usata sul tuo webspace. Dopo aver salvato, riavvia il server di gioco per applicare la configurazione.

## Conclusione

FastDL si può configurare in modo rapido e affidabile usando il tuo webspace ZAP. Questo permette una consegna veloce ed efficiente dei contenuti personalizzati e migliora l’esperienza di tutti i giocatori sul tuo server No More Room In Hell.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />