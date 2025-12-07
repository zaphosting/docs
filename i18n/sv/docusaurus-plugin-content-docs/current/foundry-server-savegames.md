---
id: foundry-server-savegames
title: "Foundry: Hantera Foundry Savegames"
description: "Lär dig hur du säkert säkerhetskopierar och hanterar dina Foundry-spel-saves lokalt och på din server för smidig spelkontinuitet → Läs mer nu"
sidebar_label: Hantera Savegames
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I den här guiden går vi igenom hur du hanterar dina Foundry Savegames på din spelserver, inklusive hur du säkerhetskopierar dina lokala och serverbaserade saves samt laddar upp dem till din server.

<InlineVoucher />

## Förberedelser

För att komma åt dina serverfiler behöver du en FTP-klient som till exempel [WinSCP](https://winscp.net/eng/index.php) eller [FileZilla](https://filezilla-project.org/), båda är open-source och gratis att ladda ner.

Du måste ansluta till din server via FTP-klienten med de inloggningsuppgifter som du hittar under **Verktyg->FTP-Browser** i din spelservers webbgränssnitt. Använd gärna vår guide [Access via FTP](gameserver-ftpaccess.md) för mer hjälp med att ansluta till din server.

## Säkerhetskopiera Savegame

### Lokalt Savegame

Lokala Savegames är de du skapat när du hostar ett multiplayer-spel lokalt på din dator. Dessa hittar du i Windows LocalLow AppData, specifikt i följande sökväg:
```
../AppData/LocalLow/Channel 3 Entertainment/Foundry/save
```

:::tip
Du kan enkelt komma åt den här sökvägen direkt genom att trycka `CTRL` + `R` samtidigt och skriva in följande sökväg i kör-dialogen: `%userprofile%/appdata/locallow/Channel 3 Entertainment/foundry/save`. Tryck på **OK** så öppnas mappen.

![](https://screensaver01.zap-hosting.com/index.php/s/E6rniERFyc5AdS9/preview)
:::

Här hittar du alla dina lokala Savegames.

![](https://screensaver01.zap-hosting.com/index.php/s/LGPj2xZNGeCJpjt/preview)

### Åtkomst till Savegame via FTP

Att säkerhetskopiera ditt Savegame från servern är enkelt. När du är ansluten till din spelserver via FTP-klienten, navigera till följande sökväg:
```
../foundry/saves/save
```

Här hittar du mappar som var och en är ett Savegame. Högerklicka på mappen och välj **Download** för att spara den lokalt på din dator.

![](https://screensaver01.zap-hosting.com/index.php/s/X2f3Fo27GCyFe3m/preview)

### Automatisk Säkerhetskopiering

Vi erbjuder även en funktion för att automatiskt säkerhetskopiera ditt Savegame (och konfigurationsfil) direkt via vårt webbgränssnitt. Gå till din spelservers webbgränssnitt och öppna **Verktyg->Backups**. Här kan du ställa in olika alternativ för schemalagda automatiska backups för din server. Vi ger dig 10 GB gratis backup-lagring där dina backups sparas. För mer info om backups, kolla in vår dedikerade guide [Backups](gameserver-backups.md).

## Ladda upp Savegame

Precis som med säkerhetskopiering är det enkelt att ladda upp ditt Savegame. Se först till att du är ansluten till din spelserver via FTP-klient. Navigera sedan till följande sökväg:
```
../foundry/saves/save
```

![](https://screensaver01.zap-hosting.com/index.php/s/CobaowD4JLPWte7/preview)

Dra och släpp helt enkelt dina Savegames in i den här mappen via FTP-klienten så laddas de upp till servern.

:::tip
Det kan vara smart att kopiera namnet på den Savegame-mapp du laddat upp, eftersom du behöver det för att aktivera den i nästa steg.
:::

## Aktivera Savegame

För att använda ett specifikt Savegame måste du redigera en konfigurationsfil. Det finns flera sätt att göra detta på, men vi går igenom hur du gör det via webbgränssnittet eftersom det är mest användarvänligt. Vill du se andra metoder, kolla in vår guide [Server Configuration](foundry-configuration.md).

Gå till **Inställningar** i din spelservers webbgränssnitt och hitta inställningen **Savename**.

Ändra den till namnet på den Savegame-mapp du laddade upp i föregående steg. När du är klar, spara längst ner med den gröna **Spara**-knappen och starta om din server.

<InlineVoucher />