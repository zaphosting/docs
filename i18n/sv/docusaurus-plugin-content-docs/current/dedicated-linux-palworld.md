---
id: dedicated-linux-palworld
title: "Dedikerad Server: Palworld Dedikerad Server Linux-Setup"
description: "Upptäck hur du sätter upp och konfigurerar en Palworld Dedikerad Server på Linux för smidig spelhantering → Lär dig mer nu"
sidebar_label: Palworld
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux Dedikerad Server och vill installera Palworld Dedicated server-tjänsten på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din dedikerade server? Det låter dig sätta upp spelserver-tjänster med direkt integration till din ZAP-Hosting kontrollpanel – på bara några klick! Läs mer om [GS/TS3 Interface här](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din Dedikerade Server via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md)-guide om du behöver hjälp med det.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](dedicated-linux-steamcmd.md)-guide och se till att SteamCMD är helt installerat innan du går vidare.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt snyggt och organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD direkt under `steam`-användaren.
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din Palworld-server klar. Du kan göra fler serverinställningar via en konfigurationsfil som finns i serverns katalog.

Du behöver skapa en kopia av standardkonfigurationsfilen och lägga den i saved-mappen innan du kan redigera den.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

När kopian är skapad kan du redigera de viktigaste inställningarna genom att öppna den nya **PalWorldSettings.ini**-filen.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Kolla in vår Palworld [Server Configuration](palworld-configuration.md)-guide för att se alla tillgängliga alternativ och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till huvudkatalogen för spelet och kör shell-filen **PalServer.sh**.
```
/home/steam/Palworld-Server/PalServer.sh
```

Du kommer nu se loggar i terminalen, inklusive en logg med spelversionen, vilket betyder att servern startade som den skulle. Om allt funkar som det ska kommer din server synas i serverlistan. Alternativt kan du ansluta direkt genom att söka på: `[din_ip_adress]:8211` i sökfältet längst ner i serverlistan.

## Avslutning

Grattis, du har nu installerat och konfigurerat Palworld-servern på din Dedikerade Server! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](dedicated-linux-create-gameservice.md)-guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger flera fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Hör av dig till vårt supportteam, vi finns här för att hjälpa dig varje dag!