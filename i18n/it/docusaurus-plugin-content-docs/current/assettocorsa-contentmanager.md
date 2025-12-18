---
id: assettocorsa-contentmanager
title: "Assetto Corsa: Configura il Server con Content Manager"
description: "Scopri come configurare e gestire al meglio le impostazioni del tuo server di gioco per performance ottimali e personalizzazione → Scopri di più ora"
sidebar_label: Configura il Server con Content Manager
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
**Importante** Per gestire il server con Content Manager, è necessaria la versione completa, la versione lite *non* può gestire i server.
:::

<InlineVoucher />


## Preparazione

Per prima cosa apriamo il nostro Content Manager e clicchiamo sul menu a sandwich in alto a destra, dove selezioniamo "Server":

![](https://screensaver01.zap-hosting.com/index.php/s/LGKdDPSCMCEMEZj/preview)

Qui creiamo un nuovo preset e lo selezioniamo:

![](https://screensaver01.zap-hosting.com/index.php/s/XLTcJkwrAAwB65o/preview)

## Imposta Slot Server

Prima di tutto dobbiamo impostare la capacità del nostro server, nel nostro caso il server ha solo 10 slot, quindi selezioniamo '10' per Capacity:

![](https://screensaver01.zap-hosting.com/index.php/s/XreNRjbpSJJqEsQ/preview)

## Imposta Mappa

Di default è selezionata Imola come mappa, cliccando sulla mappa possiamo scegliere la nostra preferita:

![](https://screensaver01.zap-hosting.com/index.php/s/B87ywSwXHL6qzFD/preview)



## Imposta Auto

Ora passiamo alla scheda "Entry List", qui possiamo aggiungere nuove auto:


![](https://screensaver01.zap-hosting.com/index.php/s/bY5Q5WB7nDq7f8q/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/w6oxDfGJifFZbd7/preview)


:::info
Assicurati che tutti gli slot auto siano riempiti e che non vengano superati gli slot disponibili.

![](https://screensaver01.zap-hosting.com/index.php/s/tSZn2QJLzfDx4r9/preview)
:::

## Configura Upload FTP

Dal menu "Advanced" possiamo configurare un uploader FTP così da caricare la configurazione del server con un solo click.

![](https://screensaver01.zap-hosting.com/index.php/s/7TmdJPGKAbAJnDP/preview)


Ora inserisci qui i dati FTP:

![](https://screensaver01.zap-hosting.com/index.php/s/7R9xNeEbDQpF4BD/preview)

:::info
Nel campo "Folder" devi inserire l’ID del tuo game server come lo vedi nell’URL del tuo server, per esempio:

> https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/
:::

Nel nostro caso sarà:

```
/g427814/assetto-corsa/
```

Per AssettoServer: 

```
/g427814/assettoserver/
```

Dopodiché puoi cliccare su "Upload Content", la config, la mappa e le auto configurate verranno caricate automaticamente, poi ti basta avviare il server!

<InlineVoucher />