---
id: fivem-resolve-dbconnection
title: "FiveM: Lös problem med databasanslutning"
description: "Upptäck hur du fixar databasanslutningsproblem på din FiveM-server och återställer smidig kommunikation med din databas → Läs mer nu"
sidebar_label: Lös DB-anslutning
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Oxmysql är en grym open-source FiveM-resurs som redan är installerad på din FiveM-server för att möjliggöra kommunikation mellan servern och din databas. Under utvecklingen kan det hända att du gör ändringar (som att uppdatera databasuppgifter) som kräver att du ändrar oxmysql-anslutningssträngen. Exempel på databasanslutningsproblem:

![](https://screensaver01.zap-hosting.com/index.php/s/G5zACEEErfP4EHG/preview)

I den här guiden går vi igenom hur du löser problem med databasanslutningen på din FiveM-server genom att justera anslutningssträngen i din serverkonfigurationsfil.

<InlineVoucher />



## Automatisk metod

Börja med att öppna din servers webbpanel på hemsidan och gå till **Inställningar**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)

Scrolla längst ner på sidan där du hittar **Åtgärder**-knapparna. Klicka på **Rekonfigurera MySQL-anslutningssträng** och starta sedan om din server för att ändringarna ska träda i kraft.

![](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

Detta uppdaterar automatiskt din `server.cfg` med rätt aktuella uppgifter, vilket gör att din databas bör börja fungera igen.

## Manuell metod

För att fixa detta manuellt behöver du tillgång till din `server.cfg` där du justerar anslutningssträngen med de uppgifter som finns i din webbpanel. Logga in i txAdmin och öppna CFG-editorn. I en annan flik, gå till **Verktyg->Databaser** där du kan se dina nuvarande uppgifter.

![](https://screensaver01.zap-hosting.com/index.php/s/7JJgtatLzZRXCDM/preview)

I din `server.cfg` lägger du till följande rad (eller **ersätter** den om den redan finns), och fyller i dina egna databasuppgifter från webbpanelen.

```
set mysql_connection_string "mysql://USER:LÖSENORD@SERVER:3306/DATABAS"
```

![](https://screensaver01.zap-hosting.com/index.php/s/sf9sMJoZyJttHBE/preview)

När du är klar, spara filen och starta om servern.



## Slutsats

Nästa gång servern startar ska den kunna nå databasen igen och allt bör fungera som det ska. Du har nu fixat dina problem med databasanslutningen. Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns här för dig varje dag! 🙂

<InlineVoucher />