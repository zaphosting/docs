---
id: soulmask-server-savegames
title: "Soulmask: Hantera Soulmask Savegames"
description: "Upptäck hur du hanterar och säkerhetskopierar dina Soulmask-spel sparade lokalt och på din server för tryggt spelande → Läs mer nu"
sidebar_label: Hantera Savegames
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I den här guiden går vi igenom hur du hanterar dina Soulmask Savegames på din spelserver, inklusive hur du säkerhetskopierar dina lokala och serverbaserade savegames samt laddar upp dem till din server.

<InlineVoucher />

## Förberedelser

För att komma åt dina serverfiler behöver du en FTP-klient som till exempel [WinSCP](https://winscp.net/eng/index.php) eller [FileZilla](https://filezilla-project.org/), båda är open-source och gratis att ladda ner.

Du måste ansluta till din server via FTP-klienten med de inloggningsuppgifter som du hittar under **Verktyg->FTP-Browser** i din spelservers webbgränssnitt. Använd gärna vår guide [Access via FTP](gameserver-ftpaccess.md) för mer hjälp med att ansluta till din server.

## Säkerhetskopiera Savegame

### Lokalt Savegame

Lokala savegames är de du skapat när du hostar ett multiplayer-spel lokalt på din dator. Dessa hittar du i din Windows Local AppData, specifikt i följande sökväg:
```
../AppData/Local/WS/[ditt_steamid]/AutoGames
```

:::tip
Du kan enkelt komma åt den här sökvägen direkt genom att trycka `CTRL` + `R` samtidigt och skriva in följande sökväg i kör-dialogen: `%userprofile%/appdata/local/WS/`. Tryck bara på **OK** och öppna mappen med ditt SteamID för att nå AutoGames-mappen.

![](https://screensaver01.zap-hosting.com/index.php/s/FT4J9Jdi8d8LDxq/preview)
:::

Här hittar du alla dina lokala savegames. Varje mapp är märkt med serverns inbjudningskod, vilket gör det enkelt att hitta rätt värld.

### Åtkomst till Savegame via FTP

Att säkerhetskopiera ditt savegame från servern är enkelt. När du är ansluten till din spelserver via FTP-klienten, navigera till följande sökväg:
```
../soulmask/WS/Saved/Worlds/Dedicated
```

Här hittar du huvudmappen `Level01_Main`, där sparfilen för den dedikerade servern finns. Högerklicka på mappen och välj **Download** för att spara den lokalt på din dator.

:::note
Just nu stödjer Soulmask dedikerade servrar endast ett savegame åt gången, som finns i huvudmappen `Level01_Main`.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Ywna6zc3BkCK6ES/preview)

### Automatisk Säkerhetskopiering

Vi erbjuder även en funktion för att automatiskt säkerhetskopiera ditt savegame (och konfigurationsfil) direkt via vårt webbgränssnitt. Gå till din spelservers webbgränssnitt och öppna **Verktyg->Backups**. Här kan du ställa in olika alternativ för schemalagda automatiska backups för din server. Vi ger dig 10 GB gratis backup-lagring där dina backups sparas. För mer info om backups, kolla in vår dedikerade [Backups](gameserver-backups.md) guide.

## Ladda upp Savegame

Precis som med säkerhetskopiering är det enkelt att ladda upp ditt savegame. Se först till att du är ansluten till din spelserver via FTP-klient och att servern är avstängd.

:::note
Just nu stödjer Soulmask dedikerade servrar endast ett savegame åt gången, som finns i huvudmappen `Level01_Main`.
:::

När du är redo, navigera till följande sökväg:
```
../soulmask/WS/Saved/Worlds/Dedicated/Level01_Main
```

![](https://screensaver01.zap-hosting.com/index.php/s/iWKPKw5Grg4JgPi/preview)

Dra och släpp filen **world.db** från det savegame du vill ladda upp och ersätt den befintliga filen. Se till att ladda ner den befintliga filen från servern om du vill behålla den, annars förloras den när du skriver över.

Du kan även ladda upp din gameplay-inställningsfil genom att gå till följande sökväg:
```
../soulmask/WS/Saved/GameplaySettings
```

![](https://screensaver01.zap-hosting.com/index.php/s/yqXF9EaDCin5rzT/preview)

Dra och släpp filen **GameXishu.json** från det savegame du vill ladda upp och ersätt den befintliga filen. Ladda ner den befintliga filen om du vill behålla den innan du ersätter.

:::tip
Om savegame-filen du använder har ett lite annorlunda namn på **GameXishu.json**, till exempel `GameXishu_2.json`, byt namn tillbaka till `GameXishu.json` så att den känns igen av den dedikerade servern.
:::

Starta sedan servern igen, och ditt savegame ska nu laddas in utan problem.

<InlineVoucher />