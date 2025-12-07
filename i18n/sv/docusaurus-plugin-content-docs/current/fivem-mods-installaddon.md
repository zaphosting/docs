---
id: fivem-mods-installaddon
title: "FiveM: Installera Addon Carmods på Servern"
description: "Upptäck hur du enkelt laddar ner och konverterar biltillägg för FiveM för att förbättra din spelupplevelse med steg-för-steg-guide → Lär dig mer nu"
sidebar_label: Installera Addon Carmods
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Koppla upp dig via FTP

Först ska du koppla upp dig mot din server via FTP, du kan använda vår [Access via FTP](gameserver-ftpaccess.md).

## Förberedelser

I den här guiden använder vi verktyget [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest), som gör processen mycket enklare. Ladda ner mapparna "NConvert.zip" och "rpf2fivem.zip" från "Releases"-sektionen:

![](https://screensaver01.zap-hosting.com/index.php/s/7o2JCm3SdMz5Gga/preview)

Packa först upp rpf2fivem i en tom mapp:

![](https://screensaver01.zap-hosting.com/index.php/s/czBs5E82SpPa2Px/preview)

Öppna sedan NConvert zip-filen och kopiera mappen "NConvert" till samma mapp:

![](https://screensaver01.zap-hosting.com/index.php/s/8qNGTCMLjgZNTbK/preview)

Nu kan vi öppna `rpf2fivem.exe`!


## Ladda ner Mods

För att installera mods via rpf2fivem måste vi lägga till direkta länkar, t.ex. från gta5-mods.com. Välj bara den carmod du vill ha och klicka på "Download".

Högerklicka sedan på nedladdningsknappen och välj "Kopiera länkadress", som du klistrar in uppe till vänster i rpf2fivem:

![](https://screensaver01.zap-hosting.com/index.php/s/T6ksM4qmfodiy8s/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cdNmSztB69TN74T/preview)

Här kan du skriva in ett eget resursnamn och klicka på "Add to queue".

Vill du ladda ner fler mods kan du enkelt lägga till dem på samma sätt, flera carmods kan installeras samtidigt:

## Konvertera Mods

När du har en lista med mods trycker du bara på "Start"-knappen.

:::info
Tips: Bocka alltid i 'compress/downsize textures' för att undvika texturfel på Carmods i FiveM.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BrFZWJkMaryLrzg/preview)

Nu laddas carmodsen ner och förbereds för FiveM.

## Ladda upp resurser

När rpf2fivem är klar hittar du carmodsen i mappen "rpf2fivem":

![](https://screensaver01.zap-hosting.com/index.php/s/yPCK5nwFa9Xscif/preview)

Ladda enkelt upp dessa via [Install resources](fivem-installresources.md). En `servercfg.txt` skapas också i rpf2fivem-mappen med de rader du behöver för att lägga till carmodsen direkt i server.cfg – kopiera bara in dem där.

Klart! Carmodsen är nu installerade på din server och kan användas efter en omstart.

<InlineVoucher />