---
id: redm-server-customisation
title: "RedM: Anpassa serverdetaljer"
description: "Upptäck hur du anpassar ditt servernamn med färger och emojis för att få det att sticka ut i serverlistan → Lär dig mer nu"
sidebar_label: Anpassa serverdetaljer
services:
  - gameserver-redm
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Vill du anpassa din server för att visa egen info i serverlistan? Det är busenkelt! I den här guiden lär du dig hur du ställer in olika anpassningar som gör att din server verkligen sticker ut i listan!



<InlineVoucher />



## Anpassa servernamn

### Färgkoder

Det finns flera färger du kan lägga till i ditt servernamn. Dessa anges med en prefixkod när du vill byta färg. Listan på tillgängliga färger hittar du i tabellen nedan.

:::info
För att använda färger i ditt servernamn måste du ha en giltig [Cfx.re-prenumeration](https://portal.cfx.re/subscriptions) som inkluderar den här förmånen. Har du det men det ändå inte funkar? Se då till att du har angett en [egen licensnyckel](redm-licensekey.md).
:::

Nu kan du ändra ditt servernamn via någon av de tre metoderna som beskrivs i avsnittet om åtkomst till konfiguration. Här är ett exempel på hur färger används och resultatet de ger:
```
sv_hostname "^2ZAP-Hosting ^0| ^4Official Community Server ^0- ^1Events coming ^8soon^1!"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)



| Kod  | Färg       | Hex-kod  |
| ---- | ---------- | -------- |
| ^0   | Vit        | #F0F0F0  |
| ^1   | Röd        | #F44336  |
| ^2   | Grön       | #4CAF50  |
| ^3   | Gul        | #FFEB3B  |
| ^4   | Blå        | #42A5F5  |
| ^5   | Ljusblå    | #03A9F4  |
| ^6   | Lila       | #9C27B0  |
| ^7   | Vit        | #F0F0F0  |
| ^8   | Orange     | #FF5722  |
| ^9   | Grå        | #9E9E9E  |

### Emojis

RedM låter dig också lägga in emojis direkt i servernamnet. Klistra bara in vilka emojis du vill i `sv_hostname`-parametern i din serverkonfiguration så funkar det. Du behöver inte någon Cfx.re-prenumeration för detta.



## Ställa in projektdetaljer

### Serverbeskrivning

Att sätta en serverbeskrivning är grymt för att ge en kort och tydlig översikt av din server. Du kan enkelt lägga in en kort beskrivning för ditt RedM-spelserverprojekt som visas bredvid servernamnet i serverlistan. Här är ett exempel på hur du sätter en projektbeskrivning och resultatet:

```
sets sv_projectDesc "Join our Discord to stay updated on latest events! discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### Servertaggar

Att sätta servertaggar hjälper till att tydliggöra vad din server handlar om och gör det lättare för spelare att hitta din server när de filtrerar efter sina intressen. När du satt taggar syns de på din servers sida i serverlistan och används även för filtrering. Här är ett exempel på hur du sätter taggar och resultatet:

```
sets tags "zap, zap-hosting, official, community, zap-community, zap-community-server"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### Andra diverse detaljer

Du kan också ändra några andra serverdetaljer efter eget tycke.

#### Speltyp

Parametern gametype ändrar vad som visas på din servers sida i serverlistan. Detta ändrar **inte** gamemode på själva servern. Du kan ändra gametype via din spelservers webbgränssnitt eller genom att sätta en tagg:

```
sets gametype "Freeroam"
```

#### Språk

Slutligen kan du ändra språket som visas på din servers sida i serverlistan. Vi har en [Språk / plats (flagga)](redm-locale.md) för att ställa in lokalisering. Detta gör du via webbgränssnittet eller genom att sätta en tagg:

```
sets locale "en-GB"
```

Du kan hitta en lista på alla locale-taggar genom att kolla [den här resursen](https://github.com/TiagoDanin/Locale-Codes#locale-list) eller liknande.



## Avslutning

Om du följt alla stegen har du nu lyckats anpassa din RedM-spelserver. Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />