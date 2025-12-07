---
id: abioticfactor-server-savegames
title: "Abiotic Factor: Hantera Abiotic Factor Savegames"
description: "Upptäck hur du hanterar och säkerhetskopierar dina Abiotic Factor-sparspar lokalt och på din server för tryggt spelande → Lär dig mer nu"
sidebar_label: Hantera Savegames
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I den här guiden går vi igenom hur du hanterar dina Abiotic Factor-sparspar på din spelserver, inklusive hur du säkerhetskopierar dina lokala och serverbaserade sparfiler samt laddar upp dem till din server.

<InlineVoucher />

## Förberedelser

För att komma åt dina serverfiler behöver du en FTP-klient som till exempel [WinSCP](https://winscp.net/eng/index.php) eller [FileZilla](https://filezilla-project.org/), båda är open-source och gratis att ladda ner.

Du måste ansluta till din server via FTP-klienten med de inloggningsuppgifter som du hittar under **Verktyg->FTP-Browser** i ditt spelservers webbgränssnitt. Använd gärna vår guide [Access via FTP](gameserver-ftpaccess.md) för mer hjälp med att ansluta till din server.

## Säkerhetskopiera Savegame

### Lokalt Savegame

Lokala sparfiler är de du skapat när du hostar ett multiplayer-spel lokalt på din dator. Dessa hittar du i Windows Local AppData, specifikt i följande sökväg:
```
../AppData/Local/AbioticFactor/Saved/SaveGames/[ditt_steamid]/Worlds
```

:::tip
Du kan enkelt komma åt den här sökvägen direkt genom att trycka `CTRL` + `R` samtidigt och skriva in följande sökväg i kör-dialogen: `%userprofile%/AppData/Local/AbioticFactor/Saved/SaveGames`. Tryck bara på **OK** så öppnas mappen.

![](https://screensaver01.zap-hosting.com/index.php/s/zd7Zy5C6EH7BMHa/preview)
:::

Se till att navigera till rätt Steam ID-mapp och sedan in i `Worlds`-mappen. Där hittar du alla dina lokala sparfiler.

### Åtkomst till Savegame via FTP

Att säkerhetskopiera ditt spar från servern är enkelt. När du är ansluten till din spelserver via FTP-klienten, gå till följande sökväg:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds
```

Här hittar du dina sparfiler. Högerklicka på mappen och välj **Download** för att spara den lokalt på din dator.

![](https://screensaver01.zap-hosting.com/index.php/s/RJSeBFpCdGamK7s/preview)

### Automatisk Backup

Vi erbjuder även en funktion för att automatiskt säkerhetskopiera ditt spar (och konfigurationsfilen) direkt via vårt webbgränssnitt. Gå till ditt spelservers webbgränssnitt och öppna **Verktyg->Backups**. Där kan du ställa in olika alternativ för att schemalägga automatiska backups för din server. Vi ger dig 10 GB gratis backup-lagring där dina backups sparas. För mer info om backups, kolla in vår dedikerade guide [Backups](gameserver-backups.md).

## Ladda upp Savegame

Precis som med backup är det enkelt att ladda upp ditt spar. Se först till att du är ansluten till din spelserver via FTP-klient. Navigera sedan till följande sökväg:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

:::note
Just nu stödjer inte Abiotic Factor dedikerade servrar att byta mellan sparfiler, så du måste ladda upp innehållet från din sparmapp direkt in i huvudmappen `world`.
:::

Öppna mappen med det spar du vill ladda upp. Dra och släpp sedan allt innehåll från din sparmapp in i serverns huvudmapp `world`. Då laddas ditt spar upp till servern.

![](https://screensaver01.zap-hosting.com/index.php/s/wsT4MXpp2MFWLtQ/preview)

:::info
Om huvudmappen `world` saknas, försök att stänga av och starta om servern. Om det inte hjälper, använd knappen **Revalidate Steam Files** på spelserverns dashboard för att återställa standardfilerna.
:::

## Aktivera Savegame

Till skillnad från att vanligtvis behöva redigera en konfigurationsfil för att aktivera ditt spar, behöver du inte göra det här eftersom Abiotic Factor dedikerade servrar ännu inte stödjer sparväxling.

Starta helt enkelt om din server så kommer den vid nästa start att ladda det sparinnehåll du laddat upp i huvudmappen `world`.

<InlineVoucher />