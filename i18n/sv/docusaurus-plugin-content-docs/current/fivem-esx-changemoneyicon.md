---
id: fivem-esx-changemoneyicon
title: "FiveM: Byt pengaikon"
description: "Upptäck hur du anpassar din servers pengaikon för en personlig in-game-upplevelse → Lär dig mer nu"
sidebar_label: Byt pengaikon
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Arkiverad guide
Det här dokumentet har arkiverats. Dokument arkiveras om de inte längre är relevanta, felaktiga eller inaktuella. Det har arkiverats av följande anledning:

**Orsak**: Metoden gäller en föråldrad ESX-version. Den här metoden kan inte användas för nuvarande ESX-version eftersom strukturen har ändrats. 
::::



<InlineVoucher />

## Koppla upp dig via FTP

Först måste [åtkomst via FTP](gameserver-ftpaccess.md) vara konfigurerad.


När det är klart kan du koppla upp dig och öppna servermappen.

![](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


Här öppnar vi filen `server.cfg` i mappen `server-data`.

## Redigera konfigurationen

Nu lägger vi till följande ovanför raden `start essentialmode`:

```Lua
set es_moneyIcon "$"
```

Här kan vi byta ut $ mot vår egen ikon.

![](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


Efter att du sparat filen och startat om servern kommer pengaikonen att vara ändrad i spelet.

<InlineVoucher />