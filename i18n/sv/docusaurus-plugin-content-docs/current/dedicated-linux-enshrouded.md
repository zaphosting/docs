---
id: dedicated-linux-enshrouded
title: "Dedikerad Server: Enshrouded Dedikerad Server Linux-Setup"
description: "Upptäck hur du installerar och kör Enshrouded Dedikerad Server på Linux för smidig spelhosting och hantering → Lär dig mer nu"
sidebar_label: Enshrouded
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux Dedikerad Server och vill installera Enshrouded Dedikerad Server-tjänsten på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din dedikerade server? Det låter dig sätta upp spelserver-tjänster med direkt integration till din ZAP-Hosting dashboard – allt på bara några klick! Läs mer om [GS/TS3 Interface här](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din Dedikerade Server via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md)-guide om du behöver hjälp med detta.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](dedicated-linux-steamcmd.md)-guide och se till att SteamCMD är helt installerat innan du går vidare.

:::info Wine-kompatibilitetslager
Enshrouded erbjuder för närvarande ingen native Linux-serverbuild, vilket innebär att du behöver göra en extra förberedelse för att köra Windows-serverbuilden på Linux.

Du måste göra en engångsinstallation av **Wine** kompatibilitetslager om det är första gången du använder det på din Linux-server. Följ vår snabba [Wine Compatibility Layer Setup](dedicated-linux-wine.md)-guide för att fixa detta innan du fortsätter.
:::

## Installation

Börja med att logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD direkt som `steam`-användare. Parametern `+@sSteamCmdForcePlatformType windows` tvingar installation av Windows-binärerna.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen klar för din Enshrouded-server. Du kan göra vidare serverkonfiguration via en konfigurationsfil i serverns katalog.

Du kan justera alla inställningar genom att öppna och redigera **enshrouded_server.json**-filen i root-katalogen.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

Kolla in vår Enshrouded [Server Configuration](enshrouded-configuration.md)-guide för att se alla tillgängliga serveralternativ och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till huvudkatalogen för spelet och kör exekverbara filen **enshrouded_server.exe** med kommandot nedan. Glöm inte att använda **xvfb-run** och **wine** för att köra den via Wine-kompatibilitetslagret.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

Du kommer nu se massor av loggar i terminalen. Om du ser loggen `[Session] 'HostOnline' (up)!` betyder det att servern startade utan problem. Du kan ansluta direkt genom att lägga till serverinformationen i fliken **Find Games**: `[din_ip_adress]:15636`.

## Avslutning

Grattis, du har nu installerat och konfigurerat Enshrouded-servern på din Dedikerade Server! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](dedicated-linux-create-gameservice.md)-guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger dig fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta vår support, vi finns här för att hjälpa dig varje dag!