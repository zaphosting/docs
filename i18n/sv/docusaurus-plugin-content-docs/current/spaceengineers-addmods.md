---
id: spaceengineers-addmods
title: "Space Engineers: Installera mods"
description: "Upptäck hur du säkert konfigurerar och lägger till mods på din Space Engineers-server för en skräddarsydd spelupplevelse → Lär dig mer nu"
sidebar_label: Installera mods
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Förberedelser

För att kunna lägga till mods på en server måste en konfigurationsfil redigeras. För att undvika problem med att ändringarna ska träda i kraft, se till att din server är stoppad innan du börjar!

För att rätt konfig ska hanteras senare måste du ta reda på namnet på ditt savegame i förväg. Om du inte har ändrat inställningarna för detta är standardnamnet "zap001". Men för säkerhets skull, kolla detta som beskrivet nedan:

För att komma till serverns inställningar, öppna menyalternativet "Inställningar" i vänstermenyn under fliken "Inställningar"

![](https://screensaver01.zap-hosting.com/index.php/s/Begs32xtfWitRDA/preview)

Namnet på savegame kan ses eller ändras i det första fältet på denna sida. Kom ihåg detta namn så att rätt konfigurationsfil kan redigeras senare.

![](https://screensaver01.zap-hosting.com/index.php/s/DHs7JGyxRMSfDKN/preview)

Installationen av **Notepad++** är också ett krav för denna guide så att du kan följa stegen exakt som de visas!

## Välj ut mods

Massor av mods finns i Space Engineers workshop. Workshopen hittar du [här](https://steamcommunity.com/workshop/about/?appid=244850).

När du hittat en intressant mod klickar du på den för att se alla detaljer. Om du gillar modden måste du nu spara moddens ID. Mod-ID:t är oftast markerat med fetstil på sidan eller högst upp i URL-fältet:

![](https://screensaver01.zap-hosting.com/index.php/s/k6WKbbZEizX7TpR/preview)

## Öppna konfigurationsfiler

Det finns två sätt att redigera en servers filer. Antingen via [FTP-access](gameserver-ftpaccess.md) eller via Config Editor i webbgränssnittet.

Här redigerar vi konfigen manuellt via FTP för att undvika syntaxfel. Hur du ansluter via FTP beskrivs noggrant i guiden som länkas ovan.

När du är ansluten via FTP navigerar du till följande mapp:

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

Denna mapp listar alla savegames som någonsin skapats på servern. För att kunna anpassa konfigurationen för ett specifikt savegame måste du öppna motsvarande mapp. I vårt exempel är det mappen "zap001":

![](https://screensaver01.zap-hosting.com/index.php/s/cLT8FLSnQE42ZwN/preview)

Nu ska sandbox-filen redigeras i denna mapp. Det är just denna konfig som ska öppnas, som på bilden!

![](https://screensaver01.zap-hosting.com/index.php/s/bKrCK6LcCMbkwbb/preview)

## Lägg till mods

Det finns redan en mod-sektion i konfigen, längst ner i filen. Markera den delen med musen och ta bort den. Lägg sedan till följande innehåll:

`<Mods></Mods>`

När innehållet är insatt, placera markören mellan "&gt;" & "&lt;" och tryck ENTER en gång. Då får du automatiskt rätt syntax och kan fortsätta.

![](https://screensaver01.zap-hosting.com/index.php/s/JbTqfX455XbffRs/preview)

Nästa steg är att lägga till den första modden. Vi jobbar med en "ModItem" som representerar en mod. Kopiera följande kod och klistra in den i konfigen som i GIF:en:

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![](https://screensaver01.zap-hosting.com/index.php/s/FkgJmMTBAp8SLzp/preview)

:::info
Byt ut 12345 mot mod-ID:t för din valda mod!
:::

Som du ser i GIF:en, upprepa samma steg för att lägga till fler mods. När alla önskade mods är tillagda sparar du konfigen med **CTRL+S** och stänger filen. Starta sedan servern som vanligt, så installeras mods automatiskt.

<InlineVoucher />