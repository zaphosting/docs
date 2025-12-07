---
id: factorio-mods
title: "Factorio: Installera Mods/DLCs på din Factorio-server"
description: "Upptäck hur du förbättrar ditt Factorio-spelande genom att aktivera DLCs och lägga till mods för en skräddarsydd upplevelse → Lär dig mer nu"
sidebar_label: Installera Mods/DLCs
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/factorio-mods.json';

## Introduktion

Factorio har inbyggt stöd för moddar som gör det enkelt att lägga till en mängd olika mods till ditt spel och server, tillsammans med köpta DLCs. I den här guiden går vi igenom hur du aktiverar DLCs och installerar mods på din klient och Factorio-server.

<InlineVoucher />

## Förberedelser

Du kan besöka [officiella Factorio mods](https://mods.factorio.com/) för att utforska mods. På den här sidan hittar du ett enormt bibliotek med gratis mods skapade av communityn inom en mängd olika kategorier.

:::tip
Se till att de mods du laddar ner stöder versionen av din Factorio-server.
:::

## Aktivera DLCs

Med Factorio 2.0-uppdateringen introducerades det första DLC:t någonsin, kallat Space Age. För detta lades en ny inställning till i webbgränssnittet där du kan slå på eller av DLC:t.

<YouTube videoId="i9CuAsCxUsk" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BRa5saY3L76xe5F/preview" title="Aktivera Factorio Space Age DLC" description="Vill du förstå bättre när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

Gå till ditt produkts webbgränssnitt och öppna **Inställningar**. Scrolla ner och hitta alternativet **Space Age DLC**, som bör vara aktiverat som standard.

![](https://screensaver01.zap-hosting.com/index.php/s/T5G5GrEzwoxM3Xk/preview)

Växla funktionen och klicka på den gröna **Spara**-knappen längst ner på sidan. Nu har du framgångsrikt aktiverat ett Factorio DLC.

## Lägga till & Ladda upp Mods

När du har laddat ner dina valda mods måste du ladda upp dem till din Factorio-server via FTP. Använd gärna vår guide för [FTP-åtkomst](gameserver-ftpaccess.md) för hjälp med att koppla upp dig mot servern.

:::note
Servern måste vara stoppad innan du lägger till eller ändrar mods, annars kan ändringarna försvinna.
:::

När du är redo, navigera till följande mapp och ladda upp dina nedladdade mods, som ska vara i `.zip`-format.

```
../factorio/saves/mods
```

![](https://screensaver01.zap-hosting.com/index.php/s/APFEnmg29jBCFKn/preview)

:::tip
När du moddar måste mods vara synkade mellan klienten och servern. Factorio gör detta superenkelt. När du ansluter till servern första gången efter att ha ändrat mods kommer spelet automatiskt fråga om du vill synka mods.
:::

Slutligen, starta om din server för att automatiskt aktivera och installera mods på din Factorio-server. Om du stöter på fel, som att servern stängs ner automatiskt, kolla under **Information->Händelselogg** i webbgränssnittet för att se eventuella fel. Ofta beror det på versionskonflikter.

## Populära Mods

Letar du fortfarande efter de perfekta modsen till din server? Kolla in vår noga utvalda lista med de mest populära och rekommenderade modsen för att boosta ditt spelande och ge din server den där sista touchen den förtjänar. Bli inspirerad och hitta precis de tilläggen som passar ditt projekt.

<SearchableItemList items={items} />

## Avslutning

Grattis, du har nu installerat mods på din Factorio-server! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />