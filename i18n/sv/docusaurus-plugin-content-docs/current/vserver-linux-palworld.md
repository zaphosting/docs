---
id: vserver-linux-palworld
title: "VPS: Palworld Dedikerad Server Linux Setup"
description: "Upptäck hur du snabbt och smidigt sätter upp och kör en Palworld Dedikerad server på din Linux VPS → Läs mer nu"
sidebar_label: Palworld
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera Palworld Dedikerad server på den? Då är du helt rätt! I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelservers-tjänster med direkt integration till din ZAP-Hosting kontrollpanel – på bara några klick! Kolla in mer om [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Behöver du hjälp? Kolla in vår [SSH Initial Access](vserver-linux-ssh.md)-guide.

Om det är första gången du använder SteamCMD på din Linux-server måste du göra en första setup. Följ vår [SteamCMD Linux Setup](vserver-linux-steamcmd.md)-guide och se till att SteamCMD är helt klart innan du går vidare.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt snyggt och organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som kör SteamCMD direkt under `steam`-användaren:
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart får du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din Palworld-server klar. Du kan göra mer avancerad serverkonfiguration via en konfigurationsfil som finns i serverns mapp.

Du behöver först kopiera standardkonfigurationsfilen till sparade-mappen innan du kan redigera den.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

När kopian är gjord kan du öppna och redigera huvudinställningarna i **PalWorldSettings.ini**-filen.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Kolla in vår Palworld [Server Configuration](palworld-configuration.md)-guide för att se alla tillgängliga inställningar och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till huvudmappen för spelet och kör shell-filen **PalServer.sh**.
```
/home/steam/Palworld-Server/PalServer.sh
```

Du kommer nu se loggar i terminalen, inklusive en logg med spelversion – det betyder att servern startade som den skulle. Om allt funkar som det ska syns din server i serverlistan. Du kan också ansluta direkt genom att söka på: `[din_ip_adress]:8211` i sökfältet längst ner i serverlistan.

## Avslutning

Grattis, du har nu installerat och konfigurerat Palworld-servern på din VPS! Nästa steg är att kolla in vår [Setup Linux Service](vserver-linux-create-gameservice.md)-guide, där vi visar hur du sätter upp din dedikerade spelserver som en tjänst. Det ger massa fördelar som automatisk start vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller stöter på problem? Hör av dig till vår support, vi finns här för dig varje dag!

<InlineVoucher />