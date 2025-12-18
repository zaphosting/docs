---
id: dedicated-linux-nmrih
title: "Dedikerad Server: No More Room In Hell Dedikerad Server Linux-Setup"
description: "Upptäck hur du snabbt sätter upp en No More Room In Hell dedikerad server på din Linux VPS → Läs mer nu"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera No More Room In Hell dedikerad server på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelserverservices med direkt integration till din ZAP-Hosting dashboard – på bara några klick! Läs mer om [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md)-guide om du behöver hjälp med det. Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](dedicated-linux-steamcmd.md)-guide och se till att SteamCMD är helt installerat innan du fortsätter.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD direkt under `steam`-användaren.
```
steamcmd +force_install_dir '/home/steam/nmrih-ds' +login anonymous +app_update 317670 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart får du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din No More Room In Hell-server klar. Du kan göra ytterligare serverinställningar genom att redigera startfilen direkt.

Gå till root-katalogen. Inuti den, navigera till `cfg`-mappen och öppna filen `server.cfg`. Där kan du ändra serverinställningar.
```
nano /home/steam/nmrih-ds/nmrih/cfg/server.cfg
```

## Registrera GSL Token

För att andra spelare ska kunna ansluta till din server måste du skapa och lägga till en Game Server Login Token (GSLT). Den här token autentiserar din server mot Steam. För att skapa en GSLT, gå till http://steamcommunity.com/dev/managegameservers och skapa en token med spel-ID 317670, som är No More Room In Hell.

När du har token, lägg till den i dina serverstartparametrar med `+sv_setsteamaccount <TOKEN>`.

## Starta & anslut till din server

Nu är det dags att starta din server. Gå till huvudkatalogen för spelet och kör följande startkommando:
```
./srcds_run -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Du bör nu se loggar i din terminal som visar att servern startat korrekt. Observera att första starten kan ta lite tid eftersom allt sätts upp. Alternativt kan du ansluta direkt genom att söka på: `[din_ip_adress]:2456` i sökfältet längst ner i serverlistan.

## Avslutning

Grattis, du har nu installerat och konfigurerat No More Room In Hell-servern på din VPS! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](dedicated-linux-create-gameservice.md)-guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger flera fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂