---
id: minecraft-timings-report
title: "Minecraft: Identifiera serverproblem med timings-rapport"
description: "Lär dig analysera serverprestandaproblem med hjälp av timings-rapporter för att hitta lagg och optimera din server → Läs mer nu"
sidebar_label: Timings-Report
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Förklaring

### Vad är en timings-rapport?

Timings-rapporter är väldigt lika din dators aktivitetskontroll och hjälper dig att hitta problemet, särskilt vid lagg. En timings-rapport spelar in alla serveraktiviteter och visar dem visuellt.

## Timings-rapport

## Skapa timings-rapport

Beroende på servermjukvaran skapas timings-rapporten på olika sätt. I grund och botten måste du starta inspelningen först med följande kommando (förutom för **Paper Spigot** (om inte inställningarna ändrats))

`/timings start`

Under inspelningen, använd servern som du brukar göra så att de problem som finns kan spelas in och sedan analyseras mer i detalj. Inspelningen bör pågå i **minst 10 minuter** eller längre om möjligt.

## Exportera timings-rapport

För att skapa och exportera timings-rapporten använder du följande kommando:

`/timings paste`

Efter några sekunder visas ett meddelande som säger att exporten lyckades. Timings-rapporten kan öppnas genom att klicka på länken.

![](https://screensaver01.zap-hosting.com/index.php/s/wpmB2jr2XCibHtY/preview)

## Analys

### ↔️ Begränsa värden

När timings-rapporten har exporterats och öppnats som beskrivet ovan, bör ett fönster som liknar detta dyka upp:

![](https://screensaver01.zap-hosting.com/index.php/s/9xMMtpr2jePk7B5/preview)

Börja med att titta närmare på grafen för att kunna kolla ungefärliga värden för de olika inspelningspunkterna genom att föra musen över dem.

För att få så exakta värden som möjligt, som pekar på ett möjligt problem på servern, bör den problematiska perioden först begränsas med hjälp av reglagen nedanför, som visas i grafen:

![](https://screensaver01.zap-hosting.com/index.php/s/yfkbfqJdcQwbsiB/preview)

### Undersök servervärden

Det finns totalt 3 kolumner. Som du ser på skärmbilden nedan visar ruta nummer 1 hur stor % av en tick (20 ticks är en sekund) huvudprocessen behöver. Där kan du också se hur ofta processen kördes under inspelningen.

I ruta nummer 2 ser du mer exakta värden i millisekunder, men tänk på att tiden aldrig bör vara högre än 50 ms. Om så är fallet kan det orsaka en kedjereaktion där alla efterföljande processer samlas på hög, vilket i slutändan leder till lagg eftersom servern bara kan hantera processerna med fördröjning.

:::info
**Full Server Tick** kan oftast ignoreras, eftersom värdena alltid ligger i det röda området, men det är inget stort problem.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/gLkFeTek6yR5tME/preview)

Du bör alltid undersöka de färgmarkerade värdepunkterna lite närmare.

I det här exemplet tittar vi på processen för alla entiteter (djur, monster, föremål osv.) eftersom värdena redan visas som orange. Då kan du direkt dra slutsatsen att det finns ett problem med för många entiteter på servern.
Det kan finnas mobfarmar på servern eller massor av nya mobs som spawnas. Om du har problem med för många entiteter kan du sänka spawnfrekvensen i inställningarna eller installera plugins som begränsar antalet entiteter och tar bort dem automatiskt vid behov.

Som nämnt ovan visar listan i princip alltid huvudprocessen. Genom att klicka på en process kan vi titta närmare på individuella processer för varje typ av entitet och undersöka dem. Kolla också kolumn 2 och 3 som nämnts tidigare.

Du kommer märka att **Minecraft::tickEntity - nms.EntitySkeleton** har kört många processer. Mobfarmar kan återigen vara boven.

![](https://screensaver01.zap-hosting.com/index.php/s/fZzeemocpsNfxXL/preview)

En annan process med redan orange värden är väntande block. Block som väntar kan vara särskilt ineffektiva eftersom servern måste kolla statusen för varje väntande block varje tick. Exempel på detta är flygande sand, grus eller till och med lava och vatten.

Om mycket vatten används som exempel på en stor farm kan detta orsaka många problem. Problemet kan också uppstå när nya chunks genereras och vattendrag skapas i dessa chunks i ett berg. Servern måste räkna ut status varje gång igen så att vattnet flyter smidigt. Dessutom måste servern skapa och ladda chunks, vilket också är en väldigt intensiv process.

![](https://screensaver01.zap-hosting.com/index.php/s/GWz98fTiknCkWZW)

Alla vidare undersökningar kan göras på samma sätt, eftersom stegen är exakt desamma för alla andra processer. Om du fortfarande behöver hjälp med utvärderingen finns vi alltid här för dig!

### Kolla plugins

I vissa fall orsakas problem även av plugins. För att ta reda på om ett plugin kan vara boven kan du temporärt ta bort installerade plugins från servern och kolla systemets nuvarande status igen.

Om det finns problem med plugins kan detta också undersökas i avsnittet "Plugins". Värdena listas också i tre kolumner med exakt samma struktur som de vanliga servervärdena ovan. Skillnaden är att huvudprocessen inte längre visas. Istället visas själva pluginet. Men vi kan fortfarande kolla alla processer genom att klicka på dem och undersöka värdena närmare.

![](https://screensaver01.zap-hosting.com/index.php/s/CzitKykWC2dzExD)

<InlineVoucher />