---
id: rimworldtogether-server-savegames
title: "Rimworld Together: Hantera Rimworld Together Savegames"
description: "Lär dig hur du hanterar och säkerhetskopierar dina Rimworld Together savegames för smidig multiplayer-spel → Läs mer nu"
sidebar_label: Hantera Savegames
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I den här guiden går vi igenom hur du hanterar dina Rimworld Together savegames på din spelserver, inklusive hur du säkerhetskopierar dina lokala och serverbaserade savegames samt laddar upp dem till din server.

:::info
Tänk på att flytta ett befintligt vanilla-spel till en Rimworld Together-server med mods kan leda till problem i spelet. Detta gäller särskilt när du flyttar världar mellan servrar med olika mods.
:::

<InlineVoucher />

## Förberedelser

För att komma åt dina serverfiler behöver du en FTP-klient som [WinSCP](https://winscp.net/eng/index.php) eller [FileZilla](https://filezilla-project.org/), båda är open-source och gratis att ladda ner.

Du måste ansluta till din server via en FTP-klient med de inloggningsuppgifter som du hittar under **Verktyg->FTP-Browser** i din spelservers webbgränssnitt. Använd gärna vår guide [Access via FTP](gameserver-ftpaccess.md) för mer hjälp med att ansluta till din server.


## Säkerhetskopiera Savegame

### Lokalt Savegame

Lokala savegames är de du skapat när du hostar ett multiplayer-spel lokalt på din dator. Dessa hittar du i Windows LocalLow AppData, specifikt i följande sökväg:
```
../AppData/LocalLow/Ludeon Studios/RimWorld by Ludeon Studios/Saves
```

:::tip
Du kan enkelt komma åt den här sökvägen direkt genom att trycka `CTRL` + `R` samtidigt och skriva in följande sökväg i kör-dialogen: `%userprofile%/appdata/locallow/Ludeon Studios/RimWorld by Ludeon Studios/Saves`. Tryck bara på **OK** så öppnas mappen.

![](https://screensaver01.zap-hosting.com/index.php/s/LZ6Ljo2DfBoH45s/preview)
:::

Här hittar du alla dina lokala savegames.

### Åtkomst till Savegame via FTP

Att säkerhetskopiera ditt savegame från servern är enkelt. När du är ansluten till din spelserver via en FTP-klient, navigera till följande sökväg:
```
../rimworld-together/Saves
```

Här bör du se mappar som var och en representerar ett savegame. Högerklicka på mappen och välj **Download** för att spara den lokalt på din dator.

![](https://screensaver01.zap-hosting.com/index.php/s/yjYXnDSHs7g5eCH/preview)

### Automatisk Säkerhetskopiering

Vi erbjuder även en funktion för att automatiskt säkerhetskopiera ditt savegame (och konfigurationsfil) direkt via vårt webbgränssnitt. Gå till din spelservers webbgränssnitt och öppna **Verktyg->Backups**. Här kan du ställa in olika alternativ för att schemalägga automatiska säkerhetskopior för din server. Vi ger dig 10 GB gratis backup-lagring där dina säkerhetskopior sparas. För mer info om säkerhetskopior, kolla in vår dedikerade guide [Backups](gameserver-backups.md).

## Ladda upp Savegame

Precis som med säkerhetskopiering är det enkelt att ladda upp ditt savegame. Se först till att du är ansluten till din spelserver via en FTP-klient. Navigera sedan till följande sökväg:
```
../rimworld-together/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/s4zakSdKniMdGmT/preview)

Dra och släpp helt enkelt dina savegames i den här mappen via FTP-klienten så laddas de upp till din server.

:::info
Som nämnt i början av guiden kan flytt av världar mellan servrar med olika mods orsaka problem i spelet.
:::

<InlineVoucher />