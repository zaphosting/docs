---
id: palworld-server-savegames
title: "Palworld: Hantera Palworld Savegames"
description: "Upptäck hur du säkert hanterar och säkerhetskopierar dina Palworld-speldata för smidig spelkontinuitet → Läs mer nu"
sidebar_label: Hantera Savegames
services:
  - gameserver-palworld
---

import InlineVoucher from '@site/src/components/InlineVoucher';

I den här guiden går vi igenom hur du hanterar dina Palworld Savegames på din spelserver, inklusive hur du säkerhetskopierar dina lokala och serverbaserade savegames samt laddar upp dem till din server.

## Förberedelser

För att komma åt dina serverfiler behöver du en FTP-klient som till exempel [WinSCP](https://winscp.net/eng/index.php) eller [FileZilla](https://filezilla-project.org/), båda är open-source och gratis att ladda ner.

Du måste ansluta till din server via en FTP-klient med de inloggningsuppgifter som du hittar under **Verktyg->FTP-Browser** i din spelservers webbgränssnitt. Använd gärna vår guide [Access via FTP](gameserver-ftpaccess.md) för mer hjälp med att ansluta till din server.

## Säkerhetskopiera Savegame

### Lokalt Savegame

Lokala savegames är de du skapat när du har hostat ett multiplayer-spel lokalt på din dator. Dessa hittar du i din Windows AppData, specifikt i följande sökväg:
```
../AppData/Local/Pal/Saved/SaveGames
```

:::tip
Du kan enkelt komma åt den här sökvägen direkt genom att trycka `CTRL` + `R` samtidigt och skriva in följande sökväg i kör-dialogrutan: `%localappdata%/Pal/Saved/SaveGames/`. Tryck bara på **OK** så öppnas mappen.

![](https://screensaver01.zap-hosting.com/index.php/s/gWL9gtAZ8JE2ENP/preview)
:::

På den här platsen ser du en mapp som är din SteamID. Öppna den mappen så hittar du alla dina lokala savegames samlade på ett ställe.

![](https://screensaver01.zap-hosting.com/index.php/s/aaeRXfs5cFjA6fN/preview)

### Åtkomst till Savegame via FTP

Att säkerhetskopiera ditt savegame från servern är enkelt. När du har anslutit till din spelserver via FTP-klienten, navigera till följande sökväg:
```
../palworld/Pal/Saved/SaveGames/0
```

Här bör du se en mapp med en rad slumpmässiga tecken som är ditt savegame. Högerklicka på mappen och välj **Download** för att spara den lokalt på din dator.

![](https://screensaver01.zap-hosting.com/index.php/s/pmrmNHS5NAfXpY3/preview)

### Automatisk Säkerhetskopiering

Vi erbjuder även en funktion för att automatiskt säkerhetskopiera ditt savegame (och konfigurationsfil) direkt via vårt webbgränssnitt. Gå till din spelservers webbgränssnitt och öppna **Verktyg->Backups**. Här kan du ställa in olika alternativ för att schemalägga automatiska backups för din server. Vi ger dig 10 GB gratis backup-lagring där dina backups sparas. För mer info om backups, kolla in vår dedikerade guide [Backups](gameserver-backups.md).

## Ladda upp Savegame

Precis som med säkerhetskopiering är det enkelt att ladda upp ditt savegame. Se först till att du är ansluten till din spelserver via FTP-klient. Navigera sedan till följande sökväg:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

Dra och släpp helt enkelt dina savegames i den här mappen via FTP-klienten så laddas de upp till din server.

:::tip
Det kan vara smart att kopiera namnet på den savegame-mapp du laddat upp, eftersom du behöver det för att aktivera den i nästa steg.
:::

## Aktivera Savegame

För att använda ett specifikt savegame måste du redigera en konfigurationsfil. Navigera till följande sökväg och hitta filen **GameUserSettings.ini**:
```
../Pal/Saved/Config/WindowsServer/ # För Windows
../Pal/Saved/Config/LinuxServer/ # För Linux
```

Öppna filen **GameUserSettings.ini** och leta upp parametern `DedicatedServerName`.

Redigera raden och ersätt innehållet med namnet på savegame-mappen som du vill aktivera på din server.

![](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

Spara filen och starta om din server för att ändringen ska träda i kraft. Nu har du framgångsrikt lagt till ett savegame till din spelserver.

## Savegame har försvunnit

I sällsynta fall kan servern skapa ett nytt savegame när den startas istället för att ladda ett befintligt.

Börja med att kolla dina savefiler via FTP-klienten genom att gå till följande sökväg:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

Här bör du fortfarande se det gamla savegame och ett nytt som genererats. För att lösa detta, redigera konfigurationsfilen som beskrivs i avsnittet Aktivera Savegame ovan, med rätt savegame-mappnamn.

Savegamet ska vara aktivt igen när du sparat filen och startat om servern.

:::info
Vi rekommenderar starkt att du aktiverar Automatisk Säkerhetskopiering som nämnts i avsnittet Automatisk Säkerhetskopiering, eftersom Palworld fortfarande är i Early Access och det finns risk att savegames kan försvinna eller korruptas vid uppdateringar.
:::

<InlineVoucher />