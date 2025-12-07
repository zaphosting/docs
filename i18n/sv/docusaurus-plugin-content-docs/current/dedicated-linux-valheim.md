---
id: dedicated-linux-valheim
title: "Dedikerad Server: Valheim Dedikerad Server Linux Setup"
description: "Lär dig hur du sätter upp en Valheim Dedikerad Server på Linux för att hosta ditt spel effektivt och optimera din serverprestanda → Läs mer nu"
sidebar_label: Valheim
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux Dedikerad Server och vill installera Valheim Dedikerad server-tjänst på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din dedikerade server? Det låter dig sätta upp spelserver-tjänster med direkt integration till din ZAP-Hosting dashboard – på bara några klick! Läs mer om [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din Dedikerade Server via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md) guide om du behöver hjälp med det.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) guide och se till att SteamCMD är helt uppsatt innan du går vidare.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD för att installera direkt till din `steam`-användare.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din Valheim-server klar. Du kan göra mer serverkonfiguration genom att redigera startfilen direkt.

Gå till root-katalogen och öppna `.sh`-filen. Här kan du ändra parametrar.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Starta & anslut till din server

Dags att starta servern! Gå till huvudspelets katalog och kör shell-filen **start_server.sh**.
```
/home/steam/Valheim-Server/start_server.sh
```

Du bör nu se loggar i terminalen som visar att servern startade korrekt. Observera att första starten kan ta lite tid eftersom allt ska sättas upp. Alternativt kan du ansluta direkt genom att söka på: `[din_ip_adress]:2456` i sökfältet längst ner i serverlistan.

:::info
Om du inte kan ansluta och får `PlayFab`-fel i konsolen kan du behöva stänga av crossplay-stödet för att lösa det, eftersom det är ett känt problem med Linux-versionen. Gör så här: kör `nano /home/steam/Valheim-Server/start_server.sh` och ta bort flaggan `-crossplay`.

Om du behöver crossplay kan du istället installera Windows-versionen och använda **Wine** som kompatibilitetslager. Följ vår snabba [Wine Compatibility Layer Setup](dedicated-linux-wine.md) guide för att fixa det. När det är klart kan du installera Valheim Windows-servern via SteamCMD med:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

När installationen är klar, starta Windows-versionen via Wine med kommandot: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Avslutning

Grattis, du har nu installerat och konfigurerat Valheim-servern på din Dedikerade Server! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](dedicated-linux-create-gameservice.md) guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger massa fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta vår support, vi finns här för dig varje dag!