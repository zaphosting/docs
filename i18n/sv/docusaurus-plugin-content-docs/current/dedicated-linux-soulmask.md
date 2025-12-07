---
id: dedicated-linux-soulmask
title: "Dedikerad Server: Soulmask Dedikerad Server Linux Setup"
description: "Upptäck hur du sätter upp och konfigurerar en Soulmask Dedikerad Server på Linux för smidig spelhosting och hantering → Lär dig mer nu"
sidebar_label: Soulmask
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux Dedikerad Server och vill installera Soulmask Dedicated server-tjänsten på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din dedikerade server? Det låter dig sätta upp spelserver-tjänster med direkt integration till din ZAP-Hosting dashboard – på bara några klick! Läs mer om [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din Dedikerade Server via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md)-guide om du behöver hjälp med det.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](dedicated-linux-steamcmd.md)-guide och se till att SteamCMD är helt uppsatt innan du går vidare.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD direkt under `steam`-användaren.
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Vid det här laget är din Soulmask-server installerad. Du kan göra vidare serverkonfiguration via konfigurationsfiler som finns i serverns katalog.

Du kan justera alla inställningar genom att öppna och redigera **Engine.ini**-filen som ligger i Saved-mappen.
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## Starta & anslut till din server

Nu är det dags att starta servern. Gå till huvudkatalogen för spelet och kör filen **StartServer.sh** med kommandot nedan.
```
/home/steam/Soulmask-Server/StartServer.sh
```

Du bör nu se loggar i terminalen som visar att servern startar upp. Observera att första uppstarten kan ta lite tid eftersom allt ska sättas upp. Alternativt kan du ansluta direkt genom att söka på: `[din_ip_adress]:18888` i sökfältet längst ner i serverlistan.

## Avslutning

Grattis, du har nu installerat och konfigurerat Soulmask-servern på din Dedikerade Server! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](dedicated-linux-create-gameservice.md)-guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger flera fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta vår support, vi finns här för att hjälpa dig varje dag!