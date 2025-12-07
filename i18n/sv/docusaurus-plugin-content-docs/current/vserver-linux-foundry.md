---
id: vserver-linux-foundry
title: "VPS: Foundry Dedicated Server Linux Setup"
description: "Upptäck hur du installerar Foundry Dedicated server på din Linux VPS för smidig spelhosting och hantering → Lär dig mer nu"
sidebar_label: Foundry
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera Foundry Dedicated server-tjänsten på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelserver-tjänster med direkt integration till din ZAP-Hosting-panel – allt på bara några klick! Läs mer om [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md)-guide om du behöver hjälp med det.

Du måste också göra en första setup av SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](vserver-linux-steamcmd.md)-guide och se till att SteamCMD är helt konfigurerat innan du går vidare.

:::info Wine-kompatibilitetslager
Foundry erbjuder för närvarande ingen native Linux-serverbuild, vilket innebär att du behöver göra en extra förberedelse för att köra Windows-serverbuilden på Linux.

Du måste göra en engångsinstallation av **Wine**-kompatibilitetslagret om det är första gången du använder det på din Linux-server. Följ vår snabba [Wine Compatibility Layer Setup](vserver-linux-wine.md)-guide för att fixa detta innan du fortsätter.
:::

## Installation

Börja med att logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt snyggt och organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som kör SteamCMD direkt som `steam`-användare. Parametern `+@sSteamCmdForcePlatformType windows` tvingar installation av Windows-binarierna.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din Foundry-server klar. Du kan göra vidare serverkonfiguration via en konfigurationsfil som finns i serverns katalog.

Du kan justera alla konfigurationsparametrar genom att öppna och redigera **app.cfg**-filen i root-katalogen.
```
nano /home/steam/Foundry-Server/app.cfg
```

Kolla in vår Foundry [Server Configuration](foundry-configuration.md)-guide för att se alla tillgängliga inställningar och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till huvudkatalogen för spelet och kör exekverbara filen **FoundryDedicatedServerLauncher.exe** med kommandot nedan. Glöm inte att använda **xvfb-run** och **wine** för att köra den via Wine-kompatibilitetslagret.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

Du bör nu se loggar i terminalen som visar att servern startat korrekt. Om allt funkar som det ska kommer din server synas i serverlistan. Alternativt kan du ansluta direkt genom att söka på: `[din_ip_adress]:3724` i sökfältet längst ner i serverlistan.

## Avslutning

Grattis, du har nu installerat och konfigurerat Foundry-servern på din VPS! Nästa steg är att kolla in vår [Setup Linux Service](vserver-linux-create-gameservice.md)-guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger massa fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Hör av dig till vår support, vi finns här för att hjälpa dig varje dag!

<InlineVoucher />