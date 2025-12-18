---
id: dedicated-linux-satisfactory
title: "Dedikerad Server: Satisfactory Dedikerad Server Linux Setup"
description: "Kom igång med att installera och konfigurera en Satisfactory Dedikerad Server på din Linux-server för smidig spelhosting → Läs mer nu"
sidebar_label: Satisfactory
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux Dedikerad Server och vill installera Satisfactory Dedicated Server-tjänsten på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din dedikerade server? Det låter dig sätta upp spelserver-tjänster med direkt integration till din ZAP-Hosting kontrollpanel – allt på bara några klick! Läs mer om [GS/TS3 Interface här](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din Dedikerade Server via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md)-guide om du behöver hjälp med det.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](dedicated-linux-steamcmd.md)-guide och se till att SteamCMD är helt installerat innan du går vidare.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD direkt under `steam`-användaren.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din Satisfactory-server klar. Du kan göra ytterligare serverkonfiguration genom att redigera konfigurationsfilerna som finns i serverns katalog.

Du kan justera alla inställningar genom att öppna och redigera **Engine.ini** och **GameUserSettings.ini** som ligger i Saved-mappen.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Starta & anslut till din server

Dags att starta servern! Gå till huvudkatalogen för spelet och kör shell-filen **FactoryServer.sh**.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

Du bör nu se loggar i terminalen som visar att servern startar upp. Observera att första starten kan ta lite tid eftersom allt ska sättas upp. Alternativt kan du ansluta direkt via serverlistans sökfält genom att söka på: `[din_ip_adress]:15777`.

## Avslutning

Grattis, du har nu installerat och konfigurerat Satisfactory-servern på din Dedikerade Server! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](dedicated-linux-create-gameservice.md)-guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger flera fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta vår support, vi finns här för att hjälpa dig varje dag!