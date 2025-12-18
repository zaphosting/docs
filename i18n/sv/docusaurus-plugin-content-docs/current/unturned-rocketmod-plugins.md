---
id: unturned-rocketmod-plugins
title: "Unturned: Installera plugins på servern"
description: "Lär dig hur du installerar och aktiverar plugins på en Unturned Rocket Mod-server för att förbättra gameplay och serverfunktionalitet → Läs mer nu"
sidebar_label: Installera Plugins
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Installera plugins på en Unturned Rocket Mod-server

### Steg 1
Först måste en anslutning till servern via [FTP-åtkomst](gameserver-ftpaccess.md) upprättas.

Så fort FTP-anslutningen är etablerad ska mappen "Plugins" öppnas.  
Den finns under 
```
/unturned-rocket/Servers/ZAP001/Rocket/Plugins. 
```
Den bör också vara tom från början: 

![](https://screensaver01.zap-hosting.com/index.php/s/wYY7jLji9YaNcBp/preview)

### Steg 2

Nu kan ett plugin laddas upp.  
Plugins för Rocketmod hittar du till exempel på Github: https://github.com/RocketModPlugins  
När du laddat ner önskat plugin måste det packas upp.  
Beroende på operativsystem kan det packas upp direkt, men vissa kräver extra program som 7Zip för att packa upp arkivet.

På Windows räcker det till exempel att dubbelklicka på ZIP-arkivet och sedan dra ut innehållet till skrivbordet. 

![](https://screensaver01.zap-hosting.com/index.php/s/qnpy29HySQzJTBL/preview)

När detta är gjort kan det laddas upp, även via "drag and drop":  

![](https://screensaver01.zap-hosting.com/index.php/s/o4ZNQtyosnw5eHo/preview)

Nu finns det önskade pluginet på servern:

![](https://screensaver01.zap-hosting.com/index.php/s/DYXpnZ2n5ibxW5t/preview)

### Steg 3

Nu kan gameservern startas i webbgränssnittet: 

![](https://screensaver01.zap-hosting.com/index.php/s/pgyBsYcoXNP7dnL/preview)

Servern är nu online med det önskade pluginet: 

![](https://screensaver01.zap-hosting.com/index.php/s/ZZLPBprWoBZfTQ6/preview)


<InlineVoucher />