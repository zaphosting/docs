---
id: vserver-linux-soulmask
title: "VPS: Soulmask Dedikerad Server Linux-Setup"
description: "Upptäck hur du snabbt och smidigt installerar och konfigurerar Soulmask Dedicated-servern på din Linux VPS → Läs mer nu"
sidebar_label: Soulmask
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera Soulmask Dedicated-servern på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Då kan du sätta upp spelservers-tjänster med direkt integration till din ZAP-Hosting-panel – på bara några klick! Läs mer om [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Behöver du hjälp? Kolla in vår [SSH Initial Access](vserver-linux-ssh.md)-guide.

Du måste också göra en första setup av SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](vserver-linux-steamcmd.md)-guide och se till att SteamCMD är helt klart innan du går vidare.

## Installation

Logga in som `steam`-användare och gå till root-katalogen `home/steam` för att hålla ordning.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som kör SteamCMD direkt som `steam`-användare:
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din Soulmask-server klar. Du kan göra fler inställningar via konfigurationsfilerna som finns i serverns katalog.

Alla konfigurationsparametrar kan du ändra i **Engine.ini** som ligger i Saved-mappen.
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## Starta & anslut till din server

Dags att starta servern! Gå till huvudkatalogen för spelet och kör filen **StartServer.sh** med kommandot nedan.
```
/home/steam/Soulmask-Server/StartServer.sh
```

Du kommer nu se loggar i terminalen som visar att servern startar upp. Tänk på att första starten kan ta lite extra tid medan allt konfigureras. Alternativt kan du ansluta direkt genom att söka på: `[din_ip_adress]:18888` i sökfältet längst ner i serverlistan.

## Avslutning

Grattis, du har nu installerat och konfigurerat Soulmask-servern på din VPS! Nästa steg är att kolla in vår guide för [Setup Linux Service](vserver-linux-create-gameservice.md), där du lär dig sätta upp din dedikerade spelserver som en tjänst. Det ger massa fördelar som automatisk start vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du frågor eller stöter på problem? Hör av dig till vår support, vi finns här för dig varje dag!

<InlineVoucher />