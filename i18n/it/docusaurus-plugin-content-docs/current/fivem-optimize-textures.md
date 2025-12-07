---
id: fivem-optimize-textures
title: "FiveM: Ottimizza le texture"
description: "Scopri come ottimizzare le texture delle mod GTA5 per ridurre le dimensioni e migliorare le prestazioni di gioco → Scopri di più ora"
sidebar_label: Ottimizza le texture
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Vuoi ottimizzare le texture delle tue mod GTA5 e ridurne le dimensioni senza perdere qualità? In questa guida ti mostriamo come comprimere efficacemente le texture sotto i 16MB. Con pochi semplici passaggi e gli strumenti giusti, puoi migliorare le prestazioni del gioco e risparmiare spazio di archiviazione. Questo aiuta anche a evitare problemi come:

```
Asset hevo/hevo.ytd usa 166.0 MiB di memoria fisica. Asset sovradimensionati possono e porteranno a problemi di streaming (modelli che non si caricano/renderizzano, comunemente noti come 'perdita di texture', 'bug della città' o 'streaming non ottimale').
```

<InlineVoucher />


## Preparazione

Prima di iniziare, assicurati di aver scaricato e installato gli strumenti necessari. Scarica **OpenIV** e **XnResize** dai siti ufficiali e segui le istruzioni per l’installazione. Questi tool ti serviranno per modificare le texture:

- **OpenIV**  [(Download)](https://openiv.com/)
- **XnResize** [(Download)](https://www.xnview.com/en/xnresize/#downloads)



## Configurazione
Una volta scaricati e installati gli strumenti, puoi iniziare a modificare le texture. Trova il file .ytd della tua mod in OpenIV e aprilo per accedere alle texture.

![OpenIV Texture Dictionary](https://screensaver01.zap-hosting.com/index.php/s/K879XfYoR4sqN6d/preview) 

In OpenIV, in basso a sinistra trovi l’opzione "Export all textures". Cliccaci per esportare tutte le texture della tua mod. Salvale in una cartella dentro la directory del tuo veicolo mod, per esempio sotto "textures". 



## Ottimizzazione

Ora che hai esportato tutte le texture, è il momento di modificarle e ridimensionarle. Avvia XnResize sul tuo PC. Trascina tutti i file .dds esportati nella finestra di XnResize. Ora dovresti vedere tutte le texture nell’applicazione. Nella scheda "Action" di XnResize, imposta larghezza e altezza in percentuale e riduci la dimensione delle texture al 50% rispetto all’originale. Assicurati di mantenere il rapporto d’aspetto.

![XnResize Action Tab](https://screensaver01.zap-hosting.com/index.php/s/sQMq7goPYDb89cM/preview)



Nella scheda "Output", seleziona una cartella di destinazione per le texture modificate, per esempio "textures_resized", e imposta il formato su DDS - Direct Draw Surface.

![XnResize Output Tab](https://screensaver01.zap-hosting.com/index.php/s/Do927b2WQsYTszN/preview)



## Conclusione
Dopo aver modificato tutte le texture e ridimensionato, sostituisci le vecchie texture nella tua mod con le nuove versioni compresse. Vedrai che la dimensione delle texture compresse è molto più bassa, il che non solo fa risparmiare spazio, ma migliora anche le prestazioni del gioco.

| **Descrizione**            | **Texture Dictionary Originale** | **Texture Dictionary Compressa** | **X Volte Meglio** |
| :-------------------------- | :------------------------------ | :------------------------------ | :----------------- |
| **Dimensione Compressa**    | 11.8 MB                         | 1.23 MB                         | 9.6x               |
| **Dimensione Non Compressa**| 164 MB                         | 11 MB                          | 14.9x              |
| **Memoria Virtuale**        | 0.05 MiB                       | 0.05 MiB                       | -                  |
| **Memoria Fisica**          | 166.00 MiB                     | 10.69 MiB                      | 15.5x              |

Non dimenticare di testare le texture in gioco. Se dovessero sorgere problemi, puoi sempre ripristinare singole texture alle dimensioni originali o usare i file .dds originali.

<InlineVoucher />