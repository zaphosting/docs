---
id: source-custom-content
title: Installera custom content och mods på gameservrar
description: "Upptäck hur custom content förbättrar spelupplevelsen i source-spel som Counter-Strike och Garry's Mod med maps, skins och ljud → Lär dig mer nu"
sidebar_label: Custom Content
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Vad är custom content?

Vissa source-spel som Counter-Strike eller Garry's Mod har blivit kända för sin variation. Allt detta blev möjligt tack vare stöd för plugins och **custom content**. Under åren har olika spellägen utvecklats, som Zombie Mod, Hide and Seek, Minigames, Jailbreak och mycket mer.

![](https://screensaver01.zap-hosting.com/index.php/s/MxDRfHZDFRHEjog/preview)

<InlineVoucher />

Såna servrar använder ofta maps, player skins och ljud skapade av communityn. För att spelare ska kunna använda eller se serverns custom content måste innehållet först laddas ner från servern. Här finns två alternativ:

- FastDL
- Steam Workshop

Beroende på användningsområde är det ena alternativet bättre än det andra. Här är en översikt över skillnaderna mellan FastDL och Workshop:

|  Custom Inhalte  | FastDL | Steam Workshop |
| :--------------: | :----: | :------------: |
|       Maps       |   ✓    |       ✓        |
| Materials/Models |   ✓    |       ✗        |
|      Sounds      |   ✓    |       ✗        |



## Ställ in custom content



### FastDL

Nedan förklaras hur du sätter upp en FastDL-server med hjälp av en av våra [Webspace-produkter](https://zap-hosting.com/en/shop/product/webspace/). Men du kan också använda vilken annan lösning som helst som erbjuder en publikt tillgänglig webbserver. För att börja med setupen öppnar vi webspace-produkten och går in i administrationen:

![](https://screensaver01.zap-hosting.com/index.php/s/JdmBxGiicrQTxDt/preview)



Där öppnar vi filhanteraren och skapar följande mappar:

![](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)



Efter det måste webspace auktoriseras så att nedladdning av innehållet i spelet fungerar som det ska:

![](https://screensaver01.zap-hosting.com/index.php/s/7xSDbPRW6MYomk4/preview)

:::info
Behörigheterna måste sättas för alla mappar!
:::

Nu kan custom content laddas upp. Filernas måste finnas både på servern och på FastDL (webspace). På gameservern laddas filerna upp unpackade och på FastDL bör de laddas upp packade som bzip2. Programmet 7Zip rekommenderas för detta.

Till sist behöver bara FastDL-servern anges i gameservern. Konfigurationen görs via **server.cfg**. Följande kommandon måste läggas till i configen:

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // Byt ut URL:en mot din ZAP webspace-URL.
```

Efter omstart och anslutning till servern ska motsvarande innehåll laddas ner. Det kan också kollas i spelets konsol:

![](https://screensaver01.zap-hosting.com/index.php/s/Xbk5gSQAMQSK9Me/preview)



### Steam Workshop

Nedan förklaras hur du sätter upp Steam Workshop. Först måste du öppna Steam Workshop-sidan. Välj spelet i Steam och öppna workshop där. Här tar vi [CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections) som exempel. Väl där klickar vi på menyalternativet Browse och väljer Collection:

![](https://screensaver01.zap-hosting.com/index.php/s/PaTrSqacw7733yB/preview)

Där högerklickar vi på Collection och skapar en collection för gameservern:

![](https://screensaver01.zap-hosting.com/index.php/s/JZmsT6KexmteeJw/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/99bEm45t48rCzAT/preview)

Collectionen är nu skapad men är tom som standard. Därför öppnar vi nu om workshop för spelet och väljer de objekt vi vill lägga till:

![](https://screensaver01.zap-hosting.com/index.php/s/WpYrLbYESYjmmWa/preview)

När du är klar med samlandet går du tillbaka till collectionen, högerklickar och väljer Copy Page URL. ID:t för collectionen behövs från URL:en, som kan se ut så här:

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

Detta ID måste sedan läggas in under Steam Workshop i din gameserver-administration:

![](https://screensaver01.zap-hosting.com/index.php/s/6gCM5rWoeBeg57M/preview)

<InlineVoucher />