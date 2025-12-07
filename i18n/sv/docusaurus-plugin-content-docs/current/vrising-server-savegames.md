---
id: vrising-server-savegames
title: "V Rising: Hantera V Rising Savegames"
description: "Lär dig hur du hanterar och säkerhetskopierar dina V Rising-spel sparfiler för säkra multiplayer-upplevelser → Läs mer nu"
sidebar_label: Hantera Savegames
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I den här guiden går vi igenom hur du hanterar dina V Rising-spel sparfiler på din spelserver, inklusive hur du säkerhetskopierar dina lokala och serverbaserade sparfiler samt laddar upp dem till din server.

<InlineVoucher />

## Förberedelser

För att komma åt dina serverfiler behöver du en FTP-klient som till exempel [WinSCP](https://winscp.net/eng/index.php) eller [FileZilla](https://filezilla-project.org/), båda är open-source och gratis att ladda ner.

Du måste ansluta till din server via en FTP-klient med de inloggningsuppgifter som du hittar under **Verktyg->FTP-Browser** i din spelservers webbgränssnitt. Använd gärna vår guide [Access via FTP](gameserver-ftpaccess.md) för mer hjälp med att ansluta till din server.


## Säkerhetskopiera Savegame

### Lokalt Savegame

Lokala sparfiler är de du skapat när du hostat ett multiplayer-spel lokalt på din dator. Dessa hittar du i din Windows LocalLow AppData, specifikt i följande sökväg:
```
../AppData/LocalLow/Stunlock Studios/VRising
```

:::tip
Du kan enkelt komma åt den här sökvägen direkt genom att trycka `CTRL` + `R` samtidigt och skriva in följande sökväg i kör-dialogen: `%userprofile%/appdata/locallow/Stunlock Studios/VRising`. Tryck bara på **OK** så öppnas mappen.

![](https://screensaver01.zap-hosting.com/index.php/s/dz4ytiTai5jD2ep/preview)
:::

Här hittar du en `Saves` och/eller `CloudSaves`-mapp beroende på om du använt Steam Cloud Saving-funktionen och vilken typ av server du har. Gå in i mapparna för att hitta dina lokala sparfiler.

:::note
Beroende på spelversionen kommer dina sparfiler ligga i antingen en v1- eller v3-mapp.
:::

### Åtkomst till Savegame via FTP

Att säkerhetskopiera ditt sparfil från servern är enkelt. När du är ansluten till din spelserver via FTP-klienten, navigera till följande sökväg:
```
../vrising/save-data/Saves
```

Här bör du se en v1- och en v3-mapp, beroende på spelversion. Inuti varje mapp hittar du dina sparfiler. Högerklicka på mappen och välj **Download** för att spara den lokalt på din dator.

![](https://screensaver01.zap-hosting.com/index.php/s/tZ4HngqLeHTkizz/preview)

### Automatisk Säkerhetskopiering

Vi erbjuder även en funktion för att automatiskt säkerhetskopiera dina sparfiler (och konfigurationsfiler) direkt via vårt webbgränssnitt. Gå till din spelservers webbgränssnitt och öppna **Verktyg->Backups**. Här kan du ställa in olika alternativ för att schemalägga automatiska säkerhetskopior för din server. Vi ger dig 10 GB gratis backup-lagring där dina säkerhetskopior sparas. För mer info om backups, kolla in vår dedikerade [Backups](gameserver-backups.md)-guide.

## Ladda upp Savegame

Precis som med säkerhetskopiering är det enkelt att ladda upp dina sparfiler. Se till att du är ansluten till din spelserver via FTP-klient. Navigera sedan till följande sökväg:
```
../vrising/save-data/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/RXd4aoxrA6QnP46/preview)

Beroende på vilken version dina sparfiler är, dra och släpp helt enkelt dina sparfiler i rätt mapp via FTP-klienten så laddas de upp till servern.

:::tip
Det kan vara smart att kopiera namnet på den sparfilsmapp du laddat upp, eftersom du behöver det för att aktivera sparfilen i nästa steg.
:::

## Aktivera Savegame

För att använda en specifik sparfil måste du redigera en konfigurationsfil. Det finns flera sätt att göra detta, men vi går igenom hur du gör det via webbgränssnittet eftersom det är mest användarvänligt. Vill du se andra metoder, kolla in vår [Server Configuration](vrising-configuration.md)-guide.

Gå till **Inställningar** i din spelservers webbgränssnitt och hitta inställningen **Savename**.

Ändra den till namnet på den sparfilsmapp du laddade upp i föregående steg. När du är klar, spara längst ner med den gröna **Spara**-knappen och starta om din server.

<InlineVoucher />