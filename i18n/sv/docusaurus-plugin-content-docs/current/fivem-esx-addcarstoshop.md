---
id: fivem-esx-addcarstoshop
title: "FiveM: Lägga till bilar i butiken"
description: "Upptäck hur du hanterar och lägger till fordon i din databas för en skräddarsydd bilbutiksupplevelse → Lär dig mer nu"
sidebar_label: Lägg till bilar i bilhandeln
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Tillgång till databasen

Först måste vi koppla upp oss mot vår databas. Det gör vi under fliken "Databases"

![](https://screensaver01.zap-hosting.com/index.php/s/8NYJC6Qq5inG5yk/preview)

Där klickar vi på den blå ikonen och loggar in med våra uppgifter, som vi också hittar på sidan.

![](https://screensaver01.zap-hosting.com/index.php/s/XK5CLoeckxxHk8w/preview)

## Hitta spawn-namn

Sen måste vi ta reda på spawn-namnet på bilen. Det kan vi göra genom att testa runt eller genom att kolla igenom följande sida:
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## Lägg till nytt fordon

När vi valt en bil kan vi lägga till den i listan.

:::info
Som standard finns det redan många bilar i bilbutiken. Kolla om din bil redan finns med.
:::

Först kollar vi bilkategorierna. Så vi vet vilka vi kan lägga till.
Det gör vi i tabellen "vehicle_categories"

![](https://screensaver01.zap-hosting.com/index.php/s/PYSt6anrdXs8QLY/preview)

Här behöver vi kolumnen "name". Den kommer vi ihåg.


![](https://screensaver01.zap-hosting.com/index.php/s/CnrQJcGbf3SPdtg/preview)

När vi gjort det går vi till tabellen "vehicles".
Sen klickar vi på Insert


![](https://screensaver01.zap-hosting.com/index.php/s/eN5x9o724a6tKwf/preview)

Nu lägger vi till ett nytt fordon. En kort förklaring vad som står för vad:

**name** Namnet som visas i butiken  
**model** Spawn-namn (se till att det är skrivet med små bokstäver)  
**price** Pris på fordonet  
**category** Kategorin vi precis plockade ut

Jag har ett litet exempel till er här:


![](https://screensaver01.zap-hosting.com/index.php/s/cFrrLYKTALmCnFP/preview)

<InlineVoucher />