---
id: redm-change-servericon
title: "RedM: Cambia l'icona nella lista server"
description: "Scopri come personalizzare l'icona del tuo server RedM con un'immagine PNG perfetta da 96x96 per un look unico → Scopri di più ora"
sidebar_label: Cambia icona server
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Vuoi personalizzare il tuo server e impostare un'icona personalizzata? È facilissimo! In questa guida imparerai come preparare un'immagine e impostarla come nuova icona personalizzata del tuo server.

<InlineVoucher />

## Preparazione
Per impostare un'icona personalizzata per il tuo server RedM, devi prima preparare un file immagine di dimensioni 96x96 pixel in formato PNG (estensione `.png`). Ti consigliamo di usare un programma di editing immagini come GIMP, oppure un tool online per ridimensionare e convertire la tua immagine esistente. Una volta che hai l’immagine pronta con queste specifiche, sei pronto per caricarla e impostarla nella configurazione del server.

## Installazione

### Caricamento file

Il passo successivo è caricare l’immagine pronta sul tuo game server RedM, tramite FTP. Se non hai mai usato FTP, ti consigliamo di dare un’occhiata alla guida su [Accesso FTP](gameserver-ftpaccess.md).

Una volta connesso via FTP, vai nella cartella `gXXXXXX/redm-txadmin/YOUR_FRAMEWORK/` e carica lì il file dell’icona del server. In questo esempio usiamo il template di default CFX. Carica il file nella cartella del tuo framework. Ricordati bene il nome del file.

![img](https://screensaver01.zap-hosting.com/index.php/s/XyxtsR2FbmjD6SM/download)

### Attivazione

Per fare in modo che l’icona venga caricata all’avvio del server, devi ora impostarla nel file `server.cfg` del tuo server, sotto il parametro `load_server_icon`. Per esempio, se hai chiamato l’icona `zaphosting96x96`, il comando da inserire sarà:

```
# Caricamento icona server (file PNG 96x96)
load_server_icon zaphosting96x96.png
```

:::info
Assicurati che il nome del file immagine nel comando corrisponda esattamente a quello che hai caricato, inclusa la differenza tra maiuscole e minuscole.
:::

## Conclusione

Se hai seguito tutti i passaggi, la tua nuova icona server sarà visibile al prossimo riavvio del server. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />