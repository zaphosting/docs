---
id: vserver-linux-valheim
title: "VPS: Valheim Dedikerad Server Linux Setup"
description: "Lär dig hur du sätter upp en Valheim Dedikerad server på din Linux VPS för smidig gameplay och serverhantering → Läs mer nu"
sidebar_label: Valheim
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera Valheim Dedikerad server på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelserverservices med direkt integration till din ZAP-Hosting dashboard – på bara några klick! Läs mer om [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md) guide om du behöver hjälp med det.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](vserver-linux-steamcmd.md) guide och se till att SteamCMD är helt klart innan du går vidare.

## Installation

Börja med att logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando för att enkelt installera via SteamCMD direkt till din `steam`-användare.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu har du slutfört setupen för din Valheim-server. Du kan göra ytterligare serverkonfiguration genom att redigera startfilen direkt.

Gå till root-katalogen och öppna `.sh`-filen. Här kan du ändra parametrar.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Starta & anslut till din server

Nu är det dags att starta din server. Gå till huvudkatalogen för spelet och kör shell-filen **start_server.sh**.
```
/home/steam/Valheim-Server/start_server.sh
```

Du bör nu se loggar i din terminal som visar att servern startat korrekt. Observera att första starten kan ta lite tid eftersom allt ska sättas upp. Alternativt kan du ansluta direkt genom att söka på: `[din_ip_adress]:2456` i sökfältet längst ner i serverlistan.

:::info
Om du inte kan ansluta och får `PlayFab`-fel i konsolen kan du behöva stänga av crossplay-stödet för att lösa detta, då det är ett känt problem med Linux-versionen. Gör så här: kör `nano /home/steam/Valheim-Server/start_server.sh` och ta bort flaggan `-crossplay`.

Om du behöver crossplay kan du istället installera Windows-versionen och använda **Wine** som kompatibilitetslager. Följ vår snabba [Wine Compatibility Layer Setup](vserver-linux-wine.md) guide för att fixa det. När det är klart kan du installera Valheim Windows-servern via SteamCMD med:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

När installationen är klar, starta Windows-versionen via Wine med kommandot: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Avslutning

Grattis, du har nu installerat och konfigurerat Valheim-servern på din VPS! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](vserver-linux-create-gameservice.md) guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger flera fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta gärna vår support, vi finns här för dig varje dag!

<InlineVoucher />