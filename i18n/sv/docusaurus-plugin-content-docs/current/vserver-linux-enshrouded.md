---
id: vserver-linux-enshrouded
title: "VPS: Enshrouded Dedikerad Server Linux-Setup"
description: "Upptäck hur du sätter upp Enshrouded Dedicated-servern på din Linux VPS för smidig spelhosting och hantering → Lär dig mer nu"
sidebar_label: Enshrouded
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera Enshrouded Dedicated-servern på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelservers-tjänster med direkt integration till din ZAP-Hosting-panel – på bara några klick! Läs mer om [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md)-guide om du behöver hjälp med det.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](vserver-linux-steamcmd.md)-guide och se till att SteamCMD är helt konfigurerat innan du går vidare.

:::info Wine-kompatibilitetslager
Enshrouded erbjuder för närvarande ingen native Linux-serverbuild, vilket innebär att du behöver göra en extra förberedelse för att köra Windows-serverbuilden på Linux.

Du måste göra en engångsinstallation av **Wine**-kompatibilitetslagret om det är första gången du använder det på din Linux-server. Följ vår snabba [Wine Compatibility Layer Setup](vserver-linux-wine.md)-guide för att fixa detta innan du fortsätter.
:::

## Installation

Börja med att logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando för att enkelt installera via SteamCMD direkt som `steam`-användare. Med parametern `+@sSteamCmdForcePlatformType windows` tvingar du installation av Windows-binarierna.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu har du slutfört setupen för din Enshrouded-server. Du kan göra ytterligare serverinställningar via en konfigurationsfil som finns i serverns katalog.

Du kan justera alla konfigurationsparametrar genom att öppna och redigera filen **enshrouded_server.json** som ligger i root-katalogen.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

Kolla in vår Enshrouded [Server Configuration](enshrouded-configuration.md)-guide för att se alla tillgängliga serveralternativ och vad de gör.

## Starta & anslut till din server

Nu är det dags att starta servern. Gå till huvudkatalogen för spelet och kör filen **enshrouded_server.exe** med kommandot nedan. Glöm inte att använda **xvfb-run** och **wine** för att köra den via Wine-kompatibilitetslagret.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

Du bör nu se massor av loggar i terminalen. Om du ser loggen `[Session] 'HostOnline' (up)!` betyder det att servern startade utan problem. Du kan ansluta direkt genom att lägga till serverinformationen i fliken **Find Games**: `[din_ip_adress]:15636`.

## Avslutning

Grattis, du har nu installerat och konfigurerat Enshrouded-servern på din VPS! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](vserver-linux-create-gameservice.md)-guide, som visar hur du sätter upp din dedikerade spelserver som en tjänst. Det ger dig fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta vår support, vi finns här för att hjälpa dig varje dag!

<InlineVoucher />