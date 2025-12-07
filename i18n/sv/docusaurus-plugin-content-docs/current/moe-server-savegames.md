---
id: moe-server-savegames
title: "Myth of Empires: Hantera Savegames"
description: "Upptäck hur du säkert hanterar och säkerhetskopierar dina Myth of Empires-spars för smidig spelkontinuitet → Lär dig mer nu"
sidebar_label: Hantera Savegames
services:
  - gameserver-moe
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I den här guiden får du lära dig hur du hanterar dina Myth of Empires-spars på din spelserver, inklusive hur du säkerhetskopierar dina lokala och serverbaserade sparfiler samt laddar upp dem till din server.

<InlineVoucher />

## Förberedelser

För att komma åt dina serverfiler behöver du en FTP-klient som [WinSCP](https://winscp.net/eng/index.php) eller [FileZilla](https://filezilla-project.org/), båda är open-source och gratis att ladda ner.

Du måste ansluta till din server via FTP-klienten med de inloggningsuppgifter som du hittar under **Verktyg->FTP-Browser** i din spelservers webbgränssnitt. Använd gärna vår guide [Access via FTP](gameserver-ftpaccess.md) för mer hjälp med att ansluta till din server.

## Säkerhetskopiera Savegame

### Lokalt Savegame

Lokala sparfiler är de du skapat när du har hostat ett multiplayer-spel lokalt på din dator. MOE sparar dessa i en mapp inom spelets installationskatalog.

Öppna Steam på din dator, högerklicka på **Myth of Empires** och välj **Bläddra i lokala filer** under **Hantera**-menyn.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Navigera till följande sökväg:
```
../WindowsPrivateServer/MOE/Saved/SaveGames/
```

I den här mappen hittar du alla dina befintliga lokala sparfiler.

### Åtkomst till Savegame via FTP

Att säkerhetskopiera ditt spar från servern är enkelt. När du är ansluten till din spelserver via FTP-klienten, gå till följande sökväg:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

Här hittar du mappar som är dina sparfiler. Högerklicka på mappen och välj **Ladda ner** för att spara den lokalt på din dator.

![](https://screensaver01.zap-hosting.com/index.php/s/3yN723tY8eiBb2w/preview)

### Automatisk säkerhetskopiering

Vi erbjuder även en funktion för att automatiskt säkerhetskopiera ditt spar (och konfigurationsfil) direkt via vårt webbgränssnitt. Gå till din spelservers webbgränssnitt och öppna **Verktyg->Backups**. Här kan du ställa in olika alternativ för att schemalägga automatiska säkerhetskopior för din server. Vi ger dig 10 GB gratis backup-lagring där dina säkerhetskopior sparas. För mer info om backups, kolla in vår dedikerade guide [Backups](gameserver-backups.md).

## Ladda upp Savegame

Precis som med säkerhetskopiering är det enkelt att ladda upp ditt spar. Se först till att du är ansluten till din spelserver via FTP-klient. Navigera sedan till:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

![](https://screensaver01.zap-hosting.com/index.php/s/KLD26KTYZYpfoqP/preview)

Dra och släpp helt enkelt dina sparfiler i den här mappen via FTP-klienten så laddas de upp till din server.

## Aktivera Savegame

För att använda ditt spar måste du välja det i serverns konfiguration. Det enklaste sättet är att gå till **Inställningar** i din spelservers webbgränssnitt. Använd vår guide [Server Configuration](moe-configuration.md) för mer info.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

I den här sektionen hittar du parametern **Map Name** under Grundinställningar, och din uppladdade värld ska nu finnas där. Om du inte ser den, se till att starta om servern efter uppladdningen.

Nu har du framgångsrikt lagt till ett spar till din spelserver.

<InlineVoucher />