---
id: fivem-esx-disableinventory
title: "FiveM: Inaktivera inventory (F2)"
description: "Lär dig hur du inaktiverar standard-inventory i ESX för att anpassa din serverupplevelse → Läs mer nu"
sidebar_label: Inaktivera Inventory (F2)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Arkiverad Guide
Det här dokumentet har arkiverats. Dokument arkiveras om de inte längre är relevanta, felaktiga eller inaktuella. Det har arkiverats av följande anledning:

**Anledning**: Metoden gäller en föråldrad ESX-version. Den här metoden kan inte användas för nuvarande ESX-version eftersom strukturen har ändrats. 
::::

<InlineVoucher />

## Anslut till FTP

Innan vi kan inaktivera inventory måste [FTP-åtkomst](gameserver-ftpaccess.md) vara uppsatt.

När det är klart kan du ansluta och öppna servermappen:

![](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## Gör ändringarna

Nu öppnar vi sökvägen `server-data/resources/[esx]`, där hittar vi en mapp som heter es_extended:

![](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

I den här mappen öppnar vi filen `config.lua`.

När vi öppnat filen i en textredigerare letar vi upp följande kod:

```Lua
Config.EnableDefaultInventory   = true -- Visa standard Inventory ( F2 )
```

Den byter vi ut mot:

```Lua
Config.EnableDefaultInventory   = false
```


Spara filen och starta om servern. När du ansluter igen går det inte längre att öppna inventoryt.

<InlineVoucher />