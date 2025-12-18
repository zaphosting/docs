---
id: satisfactory-savegame
title: "Satisfactory: Hantera Savegames"
description: "Upptäck hur du hanterar och säkerhetskopierar dina Satisfactory-spelningar lokalt och på din server för tryggt spelande → Lär dig mer nu"
sidebar_label: Hantera Savegames
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I den här guiden går vi igenom hur du hanterar dina Satisfactory-savegames på din spelserver, inklusive hur du säkerhetskopierar dina lokala och serverbaserade savegames samt laddar upp dem till din server.

<InlineVoucher />

## Förberedelser

För att komma åt dina serverfiler behöver du en FTP-klient som till exempel [WinSCP](https://winscp.net/eng/index.php) eller [FileZilla](https://filezilla-project.org/), båda är open-source och gratis att ladda ner.

Du måste ansluta till din server via FTP-klienten med de inloggningsuppgifter som du hittar under **Verktyg->FTP-Browser** i din spelservers webbgränssnitt. Använd gärna vår guide [Access via FTP](gameserver-ftpaccess.md) för mer hjälp med att ansluta till din server.

## Säkerhetskopiera Savegame

### Lokalt Savegame

Lokala savegames är de du skapat när du spelat singleplayer eller hostat multiplayer lokalt på din dator. De finns i din Windows AppData, specifikt i följande mapp:
```
../AppData/Local/FactoryGame/Saved/SaveGames
```

:::tip
Du kan snabbt komma åt den här mappen genom att trycka `CTRL` + `R` samtidigt och skriva in följande sökväg i kör-dialogen: `%localappdata%/FactoryGame/Saved/SaveGames`. Klicka på **OK** så öppnas mappen direkt.

![](https://screensaver01.zap-hosting.com/index.php/s/pbXDwJWfEPtbAY3/preview)
:::

Här hittar du mappar som innehåller dina lokala savegames samlade på ett ställe.

![](https://screensaver01.zap-hosting.com/index.php/s/knB2RkXYGNR7J5M/preview)

### Komma åt Savegame via FTP

Att säkerhetskopiera ditt savegame från servern är enkelt. När du är ansluten till din spelserver via FTP-klienten, navigera till följande mapp:
```
../satisfactory/save-backups
```

Här hittar du en mapp med en rad slumpmässiga tecken som är ditt savegame. Högerklicka på mappen och välj **Download** för att spara den lokalt på din dator.

![](https://screensaver01.zap-hosting.com/index.php/s/feHc74QHrzPwo24/preview)

### Automatisk Säkerhetskopiering

Vi erbjuder även en funktion för att automatiskt säkerhetskopiera ditt savegame (och konfigurationsfil) direkt via vårt webbgränssnitt. Gå till din spelservers webbgränssnitt och öppna **Verktyg->Backups**. Här kan du ställa in olika alternativ för schemalagda automatiska backups för din server. Vi ger dig 10 GB gratis backup-lagring där dina backups sparas. För mer info om backups, kolla in vår dedikerade guide [Backups](gameserver-backups.md).

## Ladda upp Savegame

Precis som med säkerhetskopiering är det enkelt att ladda upp ditt savegame. Se till att du är ansluten till din spelserver via FTP-klienten. Navigera sedan till följande mapp:
```
../satisfactory/save-backups
```

![](https://screensaver01.zap-hosting.com/index.php/s/8WsKYjYzNk54A65/preview)

Dra och släpp helt enkelt dina savegames i den här mappen via FTP-klienten så laddas de upp till din server.

:::tip
Det kan vara smart att kopiera namnet på savegame-mappen du laddat upp, eftersom du behöver det för att aktivera savegamet i nästa steg.
:::

## Aktivera Savegame

Att använda ditt savegame är superenkelt. Du kan antingen hantera det via den inbyggda Satisfactory Server Manager i spelet eller gå till din servers dashboard och använda sektionen **Savegame Manager**.

## Avslutning

Nu har du framgångsrikt lagt till ett savegame på din spelserver. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂


<InlineVoucher />