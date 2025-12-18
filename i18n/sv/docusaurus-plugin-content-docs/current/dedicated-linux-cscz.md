---
id: dedicated-linux-cscz
title: "Dedikerad Server: Counter-Strike: Condition Zero Dedikerad Server Linux Setup"
description: "Upptäck hur du sätter upp en Counter-Strike: Condition Zero dedikerad server på Linux VPS för smidig spelhantering → Lär dig mer nu"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera Counter-Strike: Condition Zero dedikerad server på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelservers-tjänster med direkt integration till din ZAP-Hosting dashboard – på bara några klick! Läs mer om [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md) guide om du behöver hjälp med det. Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) guide och se till att SteamCMD är helt installerat innan du går vidare.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD direkt under `steam`-användaren.
```
steamcmd +force_install_dir '/home/steam/cs-ds' +login anonymous +app_update 90 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din Counter-Strike: Condition Zero server klar. Du kan göra ytterligare serverinställningar genom att redigera startfilen direkt.

Gå till root-katalogen. Inuti den, navigera till `cfg`-mappen och öppna filen `server.cfg`. Där kan du ändra serverinställningar.
```
nano /home/steam/cs-ds/cstrike/cfg/server.cfg
```

## Starta & anslut till din server

Dags att starta servern! Gå till huvudkatalogen för spelet och kör följande startkommando:
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

Du bör nu se loggar i terminalen som visar att servern startat korrekt. Observera att första starten kan ta lite tid eftersom allt sätts upp. Alternativt kan du ansluta direkt genom att söka på: `[din_ip_adress]:2456` i sökfältet längst ner i serverlistan.

## Avslutning

Grattis! Du har nu installerat och konfigurerat Counter-Strike: Condition Zero servern på din VPS! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](dedicated-linux-create-gameservice.md) guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger flera fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns här för dig varje dag! 🙂