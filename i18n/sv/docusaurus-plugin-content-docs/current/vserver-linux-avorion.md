---
id: vserver-linux-avorion
title: "VPS: Avorion Dedicated Server Linux Setup"
description: "Upptäck hur du installerar och konfigurerar en Avorion Dedicated-server på din Linux VPS för smidig spelhosting och hantering → Lär dig mer nu"
sidebar_label: Avorion
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera Avorion Dedicated-servern på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelserverservices med direkt integration till din ZAP-Hosting-panel – på bara några klick! Läs mer om [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår guide för [SSH Initial Access](vserver-linux-ssh.md) om du behöver hjälp med det.

Du måste också göra en första setup av SteamCMD om det är första gången du använder det på din Linux-server. Följ vår guide för [SteamCMD Linux Setup](vserver-linux-steamcmd.md) och se till att SteamCMD är helt klart innan du går vidare.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen för `steam` för att hålla allt snyggt och organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD för att installera direkt till `steam`-användaren.
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart får du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är installationen klar. Du kan konfigurera serverinställningarna direkt i filen **startserver.sh** som du kopierade tidigare. Öppna den med `nano /home/steam/Avorion-Server/startserver.sh` och justera parametrarna för din server.

Du kan också redigera världsspecifika inställningar i konfigurationsfilen **server.ini** som finns i varje galax-sparfil. Den ligger i din användares root-mapp (vanligtvis `steam`) och hanteras med följande kommandon:
```
# Visa nuvarande sparfiler
ls /home/steam/.avorion/galaxies

# Redigera en sparfil
nano /home/steam/.avorion/galaxies/avorion_galaxy/server.ini
```

## Starta & anslut till din server

Dags att starta servern! Gå till huvudkatalogen för spelet och skapa en kopia av exempel-batchfilen.
```
cp /home/steam/Avorion-Server/server.sh /home/steam/Avorion-Server/startserver.sh
```

Vill du kan du redigera filen. När du är redo, kör den nya **startserver.sh** med kommandot nedan.
```
/home/steam/Avorion-Server/startserver.sh
```

Du kommer nu se loggar i terminalen som visar att servern startar. Observera att första starten kan ta lite tid eftersom allt sätts upp. När det är klart ser du `Server startup complete.` i konsolen. Nu kan du ansluta direkt till servern via spelets serverbrowser genom att ange din Server IP och Port (standard är 27000).

## Avslutning

Grattis! Du har nu installerat och konfigurerat din Avorion-server på VPS:en! Nästa steg är att kolla in vår guide för [Setup Linux Service](vserver-linux-create-gameservice.md), där vi visar hur du sätter upp din dedikerade spelserver som en tjänst. Det ger dig fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Hör av dig till vår support, vi finns här för dig varje dag!

<InlineVoucher />