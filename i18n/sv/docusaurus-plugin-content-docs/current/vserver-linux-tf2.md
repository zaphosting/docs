---
id: vserver-linux-tf2
title: "VPS: Team Fortress 2 Dedikerad Server Linux Setup"
description: "Upptäck hur du snabbt och smidigt sätter upp en Team Fortress 2 dedikerad server på din Linux VPS → Läs mer nu"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera Team Fortress 2 dedikerad server på den? Då är du helt rätt! I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelserverservice med direkt integration till din ZAP-Hosting kontrollpanel – på bara några klick! Läs mer om [GS/TS3 Interfacet](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Behöver du hjälp med det? Kolla in vår [SSH Initial Access](vserver-linux-ssh.md) guide. Om det är första gången du använder SteamCMD på din Linux-server måste du också göra en första setup. Följ vår [SteamCMD Linux Setup](vserver-linux-steamcmd.md) guide och se till att SteamCMD är helt klart innan du går vidare.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt snyggt och organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD för att installera direkt till din `steam`-användare.
```
steamcmd +force_install_dir '/home/steam/tf2-ds' +login anonymous +app_update 232250 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart får du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din Team Fortress 2-server klar. Vill du göra fler inställningar kan du redigera startfilen direkt.

Gå till root-katalogen. Inuti den, navigera till cfg-mappen och öppna filen `server.cfg`. Där kan du ändra serverinställningar.
```
nano /home/steam/tf-ds/tf2/tf/cfg/server.cfg
```

## Registrera GSL Token

För att andra spelare ska kunna ansluta måste du skapa och lägga till en Game Server Login Token (GSLT). Den autentiserar din server mot Steam. Skapa en token på http://steamcommunity.com/dev/managegameservers med spel-ID 232250, som är Team Fortress 2.

När du har token, lägg till den i dina serverstartparametrar med `+sv_setsteamaccount <TOKEN>`.

## Starta & anslut till din server

Dags att starta servern! Gå till huvudkatalogen för spelet och kör följande kommando:
```
./srcds_run -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Du kommer nu se loggar i terminalen som visar att servern startar. Första starten kan ta lite tid eftersom allt ska sättas upp. Alternativt kan du ansluta direkt via serverlistans sökfält genom att skriva: `[din_ip_adress]:2456`.

## Avslutning

Grattis, du har nu installerat och konfigurerat din Team Fortress 2-server på VPS:en! Nästa steg är att kolla in vår [Setup Linux Service](vserver-linux-create-gameservice.md) guide, där vi visar hur du sätter upp din dedikerade spelserver som en tjänst. Det ger dig fördelar som automatisk start vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns här för dig varje dag! 🙂

<InlineVoucher />