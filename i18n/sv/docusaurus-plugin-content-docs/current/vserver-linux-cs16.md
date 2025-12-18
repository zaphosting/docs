---
id: vserver-linux-cs16
title: "VPS: Counter-Strike 1.6 Dedikerad Server Linux Setup"
description: "Upptäck hur du snabbt och smidigt sätter upp en Counter-Strike 1.6 dedikerad server på din Linux VPS → Läs mer nu"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera Counter-Strike 1.6 dedikerad server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelserverservices med direkt integration till din ZAP-Hosting dashboard – på bara några klick! Läs mer om [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md)-guide om du behöver hjälp med det. Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](vserver-linux-steamcmd.md)-guide och se till att SteamCMD är helt klart innan du går vidare.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD direkt under `steam`-användaren.
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 90 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu har du slutfört setupen för din Counter-Strike 1.6-server. Du kan göra ytterligare serverinställningar genom att redigera startfilen direkt.

Gå till root-katalogen. Inuti den, navigera till cfg-mappen och öppna filen `server.cfg`. Där kan du ändra serverinställningar.
```
nano /home/steam/cs2-ds/game/csgo/cfg/server.cfg
```

## Registrera GSL Token

För att andra spelare ska kunna ansluta till din server måste du skapa och lägga till en Game Server Login Token (GSLT). Denna token autentiserar din server mot Steam. För att skapa en GSLT, gå till http://steamcommunity.com/dev/managegameservers och skapa en token med spel-ID 90, som är för Counter-Strike 1.6.

När du har token, lägg till den i dina serverstartparametrar med `+sv_setsteamaccount <TOKEN>`.

## Starta & anslut till din server

Nu är det dags att starta din server. Gå till huvudkatalogen för spelet och kör följande startkommando:
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

Du bör nu se loggar i din terminal som visar att servern startat korrekt. Observera att första starten kan ta lite tid eftersom allt sätts upp. Alternativt kan du ansluta direkt genom att söka på: `[din_ip_adress]:2456` i sökfältet längst ner i serverlistan.

## Avslutning

Grattis, du har nu installerat och konfigurerat din Counter-Strike 1.6-server på din VPS! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](vserver-linux-create-gameservice.md)-guide, som visar hur du sätter upp din dedikerade spelserver som en tjänst. Det ger dig massa fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns här för dig varje dag! 🙂

<InlineVoucher />