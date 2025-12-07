---
id: minecraft-faultyworld
title: "Minecraft: Ta bort trasiga chunks från världen"
description: "Lär dig hur du fixar Minecraft chunk-fel och återställer smidig gameplay genom att ta bort korrupta delar av världen → Läs mer nu"
sidebar_label: Trasig Värld (Chunks)
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Din värld är delvis överbelastad eller buggig och det begränsar spelet så att du inte kan spela ordentligt längre? Det kan bero på att det finns för många föremål i vissa områden av din värld eller att den generellt innehåller skadade chunks. Ett Chunk Error är en ganska vanlig glitch i Minecraft som uppstår när en chunk laddas felaktigt.

![img](https://screensaver01.zap-hosting.com/index.php/s/A5bj6posqkTfGK8/preview)

## Förberedelser

Det finns olika verktyg som kan användas för att modifiera Minecraft-världar. Ett av de vanligaste verktygen är [MCA Selector](https://github.com/Querz/mcaselector), som vi kommer använda i den här guiden. Ladda ner filen `MCA_Selector_Setup.exe`.

Utöver det behöver du filerna från din värld på din dator. Världen kan laddas ner via FTP. Om du inte är bekant med FTP rekommenderar vi att du kollar in vår guide [Access via FTP](gameserver-ftpaccess.md). Ladda ner mappen `world` från din spelserver.

## Ladda världen

När du har laddat ner verktyget och världen kan du importera världen i verktyget. Klicka i verktyget på `File -> Open World`. Då bör du se din värld som i vårt exempel.

:::info
Beroende på koordinaterna kan du behöva zooma ut med musen för att hitta rätt område.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/eGY45mKdd4ZEwW4/download)

## Ta bort chunk(s)
Du kan välja enskilda rutor (chunks) med ett musklick. Leta upp och markera de chunks som är problematiska och som du vill ta bort. Klicka sedan på `Selection -> Delete selected Chunks` i menyn.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDCAEX3iWyjjXQm/download)

De valda chunksen har nu tagits bort och du kan ladda upp världen till din server igen via FTP.

## Avslutning
Grattis, du har nu tagit bort de trasiga chunksen och borde kunna spela i den här världen som vanligt igen. Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />