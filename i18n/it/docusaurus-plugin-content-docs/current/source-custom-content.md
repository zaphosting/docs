---
id: source-custom-content
title: Installare contenuti personalizzati e mod sui server di gioco
description: "Scopri come i contenuti personalizzati migliorano il gameplay nei giochi Source come Counter-Strike e Garry's Mod con mappe, skin e suoni → Scopri di più ora"
sidebar_label: Contenuti Personalizzati
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Che cos’è il contenuto personalizzato?

Alcuni giochi Source come Counter-Strike o Garry's Mod sono diventati famosi per la loro varietà. Tutto questo è stato possibile grazie al supporto di plugin e **contenuti personalizzati**. Nel corso degli anni sono stati sviluppati vari game mode, come Zombie Mod, Nascondino, Minigiochi, Jailbreak e molto altro.

![](https://screensaver01.zap-hosting.com/index.php/s/MxDRfHZDFRHEjog/preview)

<InlineVoucher />

Questi server spesso usano mappe, skin per i giocatori e suoni creati dalla community. Per permettere ai giocatori di usare o visualizzare i contenuti personalizzati del server, questi devono prima essere scaricati dal server. In questo caso ci sono due opzioni:

- FastDL
- Steam Workshop

A seconda dell’ambito di utilizzo, una opzione è più utile dell’altra. Qui sotto trovi una panoramica delle differenze tra FastDL e Workshop:

|  Contenuti Personalizzati  | FastDL | Steam Workshop |
| :------------------------: | :----: | :------------: |
|           Mappe            |   ✓    |       ✓        |
| Materiali/Modelli          |   ✓    |       ✗        |
|           Suoni            |   ✓    |       ✗        |



## Configurare i contenuti personalizzati



### FastDL

Qui ti spieghiamo come configurare il server FastDL usando uno dei nostri [prodotti Webspace](https://zap-hosting.com/en/shop/product/webspace/). Puoi comunque usare qualsiasi altra soluzione che offra un server web accessibile pubblicamente. Per iniziare, apriamo il prodotto webspace e accediamo all’amministrazione:

![](https://screensaver01.zap-hosting.com/index.php/s/JdmBxGiicrQTxDt/preview)



Una volta dentro, apriamo il file manager e creiamo queste cartelle:

![](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)



Dopodiché, il webspace deve essere autorizzato per far funzionare correttamente il download dei contenuti nel gioco:

![](https://screensaver01.zap-hosting.com/index.php/s/7xSDbPRW6MYomk4/preview)

:::info
I permessi devono essere impostati su tutte le cartelle!
:::

Ora puoi caricare i contenuti personalizzati. I file devono essere disponibili sia sul server di gioco che sul FastDL (webspace). Sul server di gioco i file vanno caricati decompressi, mentre sul FastDL è meglio caricarli compressi in formato bzip2. Ti consigliamo di usare il programma 7Zip per questo.

Infine, devi solo indicare il server FastDL al server di gioco. La configurazione si fa tramite il file **server.cfg**. Aggiungi questi comandi alla config:

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // Sostituisci l’URL con quello del tuo webspace ZAP.
```

Dopo il riavvio e la connessione al server, i contenuti dovrebbero scaricarsi automaticamente. Puoi verificarlo anche nella console del gioco:

![](https://screensaver01.zap-hosting.com/index.php/s/Xbk5gSQAMQSK9Me/preview)



### Steam Workshop

Ora ti spieghiamo come configurare lo Steam Workshop. Prima di tutto, apri la pagina dello Steam Workshop. Per farlo, seleziona il gioco giusto su Steam e apri lì il workshop. Prendiamo come esempio [CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections). Una volta lì, clicca su Browse e seleziona Collection:

![](https://screensaver01.zap-hosting.com/index.php/s/PaTrSqacw7733yB/preview)

Clicca con il tasto destro su Collection e crea la collection per il server di gioco:

![](https://screensaver01.zap-hosting.com/index.php/s/JZmsT6KexmteeJw/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/99bEm45t48rCzAT/preview)

La collection è stata creata con successo, ma di default è vuota. Quindi riapriamo il workshop del gioco e selezioniamo gli oggetti da aggiungere:

![](https://screensaver01.zap-hosting.com/index.php/s/WpYrLbYESYjmmWa/preview)

Quando hai finito di raccogliere, torna alla collection, clicca col tasto destro e seleziona Copy Page URL. Ti serve l’ID della collection che trovi nell’URL, che può essere così:

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

Alla fine devi aggiungere questo ID nello Steam Workshop nella tua amministrazione server di gioco:

![](https://screensaver01.zap-hosting.com/index.php/s/6gCM5rWoeBeg57M/preview)

<InlineVoucher />