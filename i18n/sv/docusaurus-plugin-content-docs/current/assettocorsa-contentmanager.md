---
id: assettocorsa-contentmanager
title: "Assetto Corsa: Konfigurera Server med Content Manager"
description: "Upptäck hur du effektivt konfigurerar och hanterar din spelserver för optimal prestanda och anpassning → Lär dig mer nu"
sidebar_label: Konfigurera Server med Content Manager
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
**Viktigt** För att hantera servern med Content Manager krävs fullversionen, lite-versionen kan *inte* hantera servrar.
:::

<InlineVoucher />


## Förberedelser

Först öppnar vi vår Content Manager och klickar på hamburgermenyn uppe till höger, där vi väljer "Server":

![](https://screensaver01.zap-hosting.com/index.php/s/LGKdDPSCMCEMEZj/preview)

Här skapar vi nu en ny preset och väljer den:

![](https://screensaver01.zap-hosting.com/index.php/s/XLTcJkwrAAwB65o/preview)

## Ställ in Server Slots

Vi behöver först ställa in hur mycket kapacitet vår server har, i vårt fall är servern bara 10 slots, så vi väljer '10' för Kapacitet:

![](https://screensaver01.zap-hosting.com/index.php/s/XreNRjbpSJJqEsQ/preview)

## Välj Bana

Här är Imola vald som standardbana, genom att klicka på banan kan vi välja en egen bana:

![](https://screensaver01.zap-hosting.com/index.php/s/B87ywSwXHL6qzFD/preview)



## Välj Bilar

Nu byter vi till fliken "Entry List", här kan vi lägga till nya bilar:


![](https://screensaver01.zap-hosting.com/index.php/s/bY5Q5WB7nDq7f8q/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/w6oxDfGJifFZbd7/preview)


:::info
Tänk på att alla bilplatser är fyllda och att du inte sätter fler än tillgängliga slots.

![](https://screensaver01.zap-hosting.com/index.php/s/tSZn2QJLzfDx4r9/preview)
:::

## Konfigurera FTP-Upload

Via menyn "Advanced" kan vi konfigurera en FTP-uploader så att du kan ladda upp din serverkonfiguration med ett klick.

![](https://screensaver01.zap-hosting.com/index.php/s/7TmdJPGKAbAJnDP/preview)


Fyll nu i dina FTP-uppgifter här:

![](https://screensaver01.zap-hosting.com/index.php/s/7R9xNeEbDQpF4BD/preview)

:::info
I "Folder" måste du ange ID:t för din spelserver som du ser det i URL:en för din spelserver, till exempel:

> https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/
:::

I vårt fall blir det:

```
/g427814/assetto-corsa/
```

För AssettoServer: 

```
/g427814/assettoserver/
```

Efter det kan du klicka på "Upload Content", konfigurationen, banan och bilarna som har ställts in laddas upp automatiskt, sen är det bara att starta din server!

<InlineVoucher />