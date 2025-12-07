---
id: rimworldtogether-mods
title: "RimWorld Together: Installera mods"
description: "Upptäck hur du förbättrar din RimWorld Together-server med populära mods för smidig online co-op → Lär dig mer nu"
sidebar_label: Installera Mods
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rimworldtogether-mods.json';

## Introduktion

RimWorld Together är en superpopulär open-source multiplayer-mod som drivs helt av RimWorld-communityn och gör det möjligt att spela online CO-OP i RimWorld. I den här guiden visar vi hur du installerar mods på din RimWorld Together-server.

<InlineVoucher />

## Samla Mods

Du kan installera en mängd olika RimWorld-mods på din RimWorld Together-server.

Mods delas in i tre olika typer:
- **Obligatoriska Mods**: Dessa krävs, vilket betyder att klienten måste ha dem för att kunna ansluta.
- **Valfria Mods**: Dessa är inte nödvändiga, klienten kan ansluta även utan dem.
- **Förbjudna Mods**: Mods i denna kategori är bannlysta, vilket gör att servern direkt nekar klientens anslutning.

Du kommer att se dessa tre typer i nästa avsnitt om uppladdning av mods, eftersom mods är uppdelade i tre mappar.

### Core-filer & DLCs

RimWorld Together låter dig enkelt ladda ner Core-filer och DLCs. Dessa behandlas precis som vilken annan mod som helst.

Du kan ladda ner Core och DLCs direkt från [RimWorld Together GitHub Repository](https://github.com/RimworldTogether/RimWorld-Together), specifikt genom att ladda ner mappen **Extras.zip**.

### Andra Mods

Du hittar massor av RimWorld-mods genom att söka på nätet. Vi rekommenderar starkt att använda [RimWorlds Steam Workshop](https://steamcommunity.com/app/294100/workshop/) när du letar mods, tack vare dess stora popularitet och därmed fler tillgängliga mods.

När du prenumererar på mods direkt via Steam Workshop laddas de ner via din Steam-klient till följande katalog: `../steamapps/workshop/content/294100`.

:::tip
Om du inte äger RimWorld på Steam kan du ändå ladda ner Steam Workshop-filer och mods med SteamCMD. Börja med att ladda ner [SteamCMD från Valves officiella webbplats](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Kör **steamcmd.exe** och vänta tills installationen är klar. När det är klart, skriv `login anonymous` i konsolen.

Nu kan du börja ladda ner mods genom att köra `workshop_download_item 294100 [workshop_id]`, där du byter ut `[workshop_id]` mot ID:t för Steam Workshop-moden. Du hittar ID:t genom att kolla i URL:en, specifikt slutet, t.ex: `/?id=3230195082`.

Alla mods du laddar ner via SteamCMD hamnar i följande sökväg: `../steamapps/workshop/content/294100`.
:::

När du har laddat ner mods kan du gå vidare till nästa avsnitt som handlar om att ladda upp dem till din gameserver.

:::note
Det finns vissa mods som garanterat inte är kompatibla med RimWorld Together. Du kan se listan över bekräftat [inkompatibla mods här](https://github.com/RimworldTogether/RimWorld-Together/blob/development/IncompatibilityList.md).

Utöver detta kan det finnas andra mods som inte fungerar som förväntat med RimWorld Together, så du kan behöva göra lite research och tester för att säkerställa att mods funkar som de ska.
:::

## Ladda upp Mods

Nu när du har mods redo kan du börja med att ansluta till din gameserver via FTP. Läs vår guide [Access via FTP](gameserver-ftpaccess.md) för att lära dig hur.

När din FTP-klient är redo, navigera till följande katalog:
```
../rimworld-together/Mods
```

I den här katalogen ser du tre separata mappar för olika typer av mods. Detta kopplar tillbaka till början av föregående avsnitt där vi gick igenom varje mod-typ. Om du inte läst det än, rekommenderar vi att du går tillbaka och läser för att förstå var varje mod ska placeras.

Med detta i åtanke, öppna filerna för de mods du laddat ner och ladda upp varje mod-mapp en och en till rätt modkategori-mapp på din gameserver.

:::note
Servern måste vara avstängd innan du lägger till eller ändrar mods, annars kan ändringarna försvinna.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/3TsB3wYFzoxK3NL/preview)

## Starta Servern

När du har laddat upp de mods du vill ha, starta bara servern igen. Nästa gång servern startar kommer alla mods du lagt till att finnas med.

Du har nu installerat nya mods på din RimWorld Together-gameserver!

## Populära Mods

Letar du fortfarande efter de perfekta mods för din server? Bläddra igenom vår noga utvalda lista med de mest populära och rekommenderade mods för att förbättra din spelupplevelse och ge din server den där sista touchen den förtjänar. Hitta inspiration och precis de tilläggen som passar ditt projekt.

<SearchableItemList items={items} />

<InlineVoucher />