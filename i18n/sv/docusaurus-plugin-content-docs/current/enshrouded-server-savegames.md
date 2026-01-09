---
id: enshrouded-server-savegames
title: "Enshrouded: Hantera Enshrouded Savegames"
description: "Upptäck hur du hanterar och säkerhetskopierar dina Enshrouded-spelsspar för säkert multiplayer-spel → Lär dig mer nu"
sidebar_label: Hantera Savegames
services:
  - gameserver-enshrouded
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I den här guiden går vi igenom hur du hanterar dina Enshrouded Savegames på din spelserver, inklusive hur du säkerhetskopierar dina lokala och serverbaserade sparfiler samt laddar upp dem till din server.

<InlineVoucher />

## Förberedelser

För att komma åt dina serverfiler behöver du en FTP-klient som till exempel [WinSCP](https://winscp.net/eng/index.php) eller [FileZilla](https://filezilla-project.org/), båda är open-source och gratis att ladda ner.

Du måste ansluta till din server via en FTP-klient med de inloggningsuppgifter som du hittar under **Verktyg->FTP-Browser** i din spelservers webbgränssnitt. Använd gärna vår guide [Access via FTP](gameserver-ftpaccess.md) för mer hjälp med att ansluta till din server.

## Säkerhetskopiera Savegame

### Lokalt Savegame

Lokala Savegames är de du skapat när du hostar ett multiplayer-spel lokalt på din dator. Som standard använder Enshrouded Steam Cloud för att automatiskt säkerhetskopiera ditt Savegame. För att komma åt detta måste du gå in i din Steam userdata-mapp för att hitta spelfilerna. Navigera till följande sökväg:
```
../Steam/userdata/[ditt_steamid]/1203620/remote
```

:::tip
I vanliga installationer ligger Steam-mappen på din OS-enhet, under sökvägen: `C://Program Files x86/Steam`. Tänk på att det kan skilja sig om du installerat Steam på en annan plats.
:::

När du kommer till den här mappen ser du en fil för karaktärer tillsammans med alla dina lokala Savegames samlade på ett ställe.

![](https://screensaver01.zap-hosting.com/index.php/s/dyydLNzQt7ZWRPx/preview)

:::note
Om du **inte** använder Steam Cloud för sparande hittar du din sparmapp i följande katalog: `C://Users/[dittanvändarnamn]/Saved Games/Enshrouded`.
:::

### Åtkomst till Savegame via FTP

Att säkerhetskopiera ditt Savegame från servern är enkelt. När du är ansluten till din spelserver via FTP-klienten, navigera till följande sökväg:
```
../enshrouded/savegame/
```

Här bör du se en fil med slumpmässiga tecken som är ditt Savegame. Högerklicka på filen och välj **Download** för att spara den lokalt på din dator.

![](https://screensaver01.zap-hosting.com/index.php/s/wTcodeKXYq3RBfY/preview)

### Automatisk Säkerhetskopiering

Vi erbjuder även en funktion för att automatiskt säkerhetskopiera ditt Savegame (och konfigurationsfil) direkt via vårt webbgränssnitt. Gå till din spelservers webbgränssnitt och öppna **Verktyg->Backups**. Här kan du ställa in olika alternativ för att schemalägga automatiska backups för din server. Vi ger dig 10 GB gratis backup-lagring där dina backups sparas. För mer info om backups, kolla in vår dedikerade guide [Backups](gameserver-backups.md).

## Ladda upp Savegame

Precis som med säkerhetskopiering är det enkelt att ladda upp ditt Savegame. Se till att du är ansluten till din spelserver via FTP-klient. Navigera sedan till följande sökväg:
```
../enshrouded/savegame/
```

![](https://screensaver01.zap-hosting.com/index.php/s/gJW8wSapi4Bo2gw/preview)

Dra och släpp helt enkelt dina Savegames i den här mappen via FTP-klienten så laddas de upp till din server.

## Aktivera Savegame

Att använda ditt Savegame är superenkelt. Anslut till din server och under spelets setup-skärm kan du välja vilket Savegame du vill använda. Sparfilens namn, nivå och senaste speldatum visas under varje sparfil för att hjälpa dig välja rätt.

Nu har du framgångsrikt lagt till ett Savegame på din spelserver.

<InlineVoucher />