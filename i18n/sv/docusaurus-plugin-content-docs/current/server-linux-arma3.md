---
id: server-linux-arma3
title: "Arma 3 Dedikerad Server Linux Setup"
description: "Upptäck hur du installerar och kör Arma 3 Dedikerad Server på Linux för smidig spelhosting och hantering → Lär dig mer nu"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS/Dedikerad Server och vill installera Arma 3 Dedikerad server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS/Dedikerade Server? Det låter dig sätta upp spelserver-tjänster med direkt integration till din ZAP-Hosting kontrollpanel – på bara några klick! Läs mer om [GS/TS3 Interfacet här](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din VPS/Dedikerade Server via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md) guide om du behöver hjälp med det.

Du måste också göra en första setup av SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) guide och se till att SteamCMD är helt konfigurerat innan du går vidare.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD direkt som `steam`-användare. Parametern `+@sSteamCmdForcePlatformType windows` tvingar installation av Windows-binarierna.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/arma3-server' +login anonymous +app_update 233780 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din Arma 3-server klar. Du kan göra vidare serverkonfiguration via en konfigurationsfil i serverns katalog.

Justera alla inställningar genom att öppna och redigera **server.cfg**-filen i root-katalogen.
```
nano /home/steam/arma3-server/server.cfg
```

## Starta & anslut till din server

Dags att starta servern! Gå till huvudkatalogen för spelet och kör exekverbara filen **arma3server_x64** med kommandot nedan.

```
/home/steam/arma3-server/arma3server_x64
```

Du kommer nu se massor av loggar i terminalen som visar att servern startat korrekt.

Spelare kan ansluta direkt via **Arma 3 serverbrowser** med din server-IP och standardporten **2302**.

## Avslutning

Grattis, du har nu installerat och konfigurerat **Arma 3-servern** på din VPS/Dedikerade Server! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag!

<InlineVoucher />