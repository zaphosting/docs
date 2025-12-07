---
id: dedicated-linux-avorion
title: "Dedikerad Server: Avorion Dedikerad Server Linux Setup"
description: "Lär dig hur du installerar och konfigurerar Avorion Dedikerad server på din Linux VPS för smidig spelhosting → Läs mer nu"
sidebar_label: Avorion
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Linux VPS och vill installera Avorion Dedikerad server på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelserverservices med direkt integration till din ZAP-Hosting kontrollpanel – på bara några klick! Läs mer om [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md)-guide om du behöver hjälp med det.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](dedicated-linux-steamcmd.md)-guide och se till att SteamCMD är helt klart innan du går vidare.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen för `steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando för att enkelt installera via SteamCMD direkt till din `steam`-användare.
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din Avorion-server klar. Du kan konfigurera serverinställningarna direkt i **startserver.sh**-filen som du kopierade tidigare. Öppna filen med `nano /home/steam/Avorion-Server/startserver.sh` och justera parametrarna för din server.

Du kan också redigera världsspecifika inställningar genom att ändra **server.ini**-filen som finns i varje galax-sparfil. Den sparas i din användares root-mapp (vanligtvis `steam`) och kan hanteras med följande kommandon:
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

Vill du kan du redigera filen. När du är redo, kör den nya **startserver.sh**-filen med kommandot nedan.
```
/home/steam/Avorion-Server/startserver.sh
```

Du bör nu se loggar i terminalen som visar att servern startar upp. Observera att första starten kan ta lite tid eftersom allt ska sättas upp, men när det är klart ser du `Server startup complete.` i konsolen. Nu kan du ansluta direkt till din server via spelets serverbrowser genom att ange din Server IP och Port (standard är 27000).

## Avslutning

Grattis, du har nu installerat och konfigurerat Avorion-servern på din VPS! Nästa steg rekommenderar vi att du kollar in vår guide för [Setup Linux Service](dedicated-linux-create-gameservice.md), där vi visar hur du sätter upp din dedikerade spelserver som en tjänst. Det ger massa fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Hör av dig till vårt supportteam som finns tillgängligt varje dag för att hjälpa dig!