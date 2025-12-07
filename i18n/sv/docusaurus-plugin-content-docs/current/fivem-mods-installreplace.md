---
id: fivem-mods-installreplace
title: "FiveM: Installera ersättnings-carmods på servern"
description: "Upptäck hur du sätter upp och laddar upp mods till din FiveM-server för custom gameplay → Lär dig mer nu"
sidebar_label: Installera ersättnings-carmods
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Koppla upp dig via FTP
Börja med att koppla upp dig mot din server via FTP, du kan använda vår guide [Access via FTP](gameserver-ftpaccess.md) för det.

## Förberedelser

Skapa nu en mapp för dina mods i "resources"-mappen.

:::info
Du kan döpa mappen till vad som helst så länge den inte innehåller specialtecken. I vårt exempel heter den "assets".
:::

Skapa sedan en fxmanifest.lua-fil i din nyss skapade "assets"-mapp.

Följande text klistrar du in i filen:

```
fx_version 'cerulean'
games { 'gta5' }

```

Spara och stäng sedan fxmanifest.lua, vi behöver den inte mer.

I din assets-mapp skapar du nu en mapp som heter "stream".

![](https://screensaver01.zap-hosting.com/index.php/s/yZgpLTTPtpe2sXZ/preview)

## Ladda upp mods

Öppna nu stream-mappen, här kan du dra & släppa alla ytd och yft-filer:

![](https://screensaver01.zap-hosting.com/index.php/s/mxNAFtBHaAjeQYj/preview)

När alla mods är uppladdade är det bara att lägga till din resource i server.cfg, som du hittar i "server-data"-mappen på din FiveM-server.

Du kan öppna den med valfri texteditor, under "start"-raderna lägger du till din resource så här:

```
start assets
```

Klart! Efter en serveromstart ska Carmodden nu finnas på servern!

<InlineVoucher />