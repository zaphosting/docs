---
id: minecraft-custom-seed
title: "Minecraft: Anpassat världseed"
description: "Upptäck hur du skapar unika Minecraft-världar genom att sätta egna seeds för nya äventyr och världsgenerering → Lär dig mer nu"
sidebar_label: Anpassat världseed
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Ett seed i Minecraft är en specifik kod bestående av siffror eller bokstäver som bestämmer hur din spelvärld genereras. Det formar terrängen, biom, strukturer och resurser du kommer hitta i din värld. Att använda samma seed med samma spelversion och inställningar skapar alltid samma världslayout, vilket gör det enkelt att dela unika världar med andra.

Tänk på att du inte kan ändra seed för en befintlig värld. Seedet påverkar bara genereringen av en ny värld. För att använda ett annat seed måste du alltid skapa en ny värld efter att du ställt in det.

<InlineVoucher />

## Konfiguration

För att konfigurera ett anpassat seed, stoppa först din server för att undvika datakonflikter. Öppna sedan din `server.properties`-fil. Du hittar den här konfigurationsfilen i serverns administrationspanel under **Konfigurationer**.

![img](https://screensaver01.zap-hosting.com/index.php/s/XBKN9r3CAweP9RG/download)

Leta upp raden som börjar med `level-seed=`. Här kan du skriva in ditt önskade seed-värde. Till exempel:

```
level-seed=12345
```

Byt ut `12345` mot din egen seed-kod. Det kan vara vilken siffer- eller textsträng som helst. När du har satt ditt anpassade seed måste du generera en ny värld för att det ska börja gälla.

Det enklaste sättet är att ändra `level-name` i **Inställningar** till ett nytt, oanvänt namn, till exempel `world1`. Det säkerställer att Minecraft skapar en helt ny världsmapp med ditt nya seed.

Vill du veta mer om hur du återskapar en befintlig värld kan du kolla in vår guide [Återskapa värld](minecraft-worlds.md) för detaljerade instruktioner. Till sist, starta din server igen. Minecraft kommer nu generera en ny värld med ditt anpassade seed.

## Slutsats

Med de här stegen har du framgångsrikt satt ett nytt seed för din nya värld. Starta om servern, utforska din nygenererade värld och njut av ditt helt egna unika Minecraft-äventyr. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />