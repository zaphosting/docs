---
id: vserver-linux-satisfactory
title: "VPS: Satisfactory Dedikerad Server Linux-Setup"
description: "Upptäck hur du sätter upp en Satisfactory dedikerad server på din Linux VPS för smidig spelhosting och hantering → Lär dig mer nu"
sidebar_label: Satisfactory
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera Satisfactory Dedicated server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelserver-tjänster med direkt integration till din ZAP-Hosting-panel – på bara några klick! Läs mer om [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md)-guide om du behöver hjälp med det.

Du måste också göra en första setup av SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](vserver-linux-steamcmd.md)-guide och se till att SteamCMD är helt klart innan du går vidare.

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

Nu är setupen för din Satisfactory-server klar. Du kan göra ytterligare serverinställningar via konfigurationsfilerna som finns i serverns mapp.

Du kan justera alla inställningar genom att öppna och redigera **Engine.ini** och **GameUserSettings.ini** som ligger i Saved-mappen.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Starta & anslut till din server

Dags att starta servern! Gå till huvudmappen för spelet och kör shell-filen **FactoryServer.sh**.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

Du kommer nu se loggar i terminalen som visar att servern startar upp. Observera att första starten kan ta lite tid eftersom allt ska sättas upp. Alternativt kan du ansluta direkt via serverlistans sökfält genom att skriva: `[din_ip_adress]:15777`.

## Avslutning

Grattis, du har nu installerat och konfigurerat din Satisfactory-server på VPS:en! Nästa steg är att kolla in vår guide för [Setup Linux Service](vserver-linux-create-gameservice.md), där vi visar hur du sätter upp din dedikerade spelserver som en tjänst. Det ger dig fördelar som automatisk start vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Hör av dig till vårt supportteam som finns tillgängligt varje dag för att hjälpa dig!

<InlineVoucher />