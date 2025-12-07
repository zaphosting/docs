---
id: dedicated-linux-arksurvivalascended
title: "Dedikerad Server: ARK Survival Ascended Dedikerad Server Linux Setup"
description: "Upptäck hur du sätter upp en ARK: Survival Ascended dedikerad server på Linux för smidig gameplay och serverhantering → Lär dig mer nu"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux Dedikerad Server och vill installera ARK: Survival Ascended dedikerad server på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar denna tjänst på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din dedikerade server? Det låter dig sätta upp spelserverservice med direkt integration till din ZAP-Hosting dashboard – på bara några klick! Läs mer om [GS/TS3 Interface här](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din Dedikerade Server via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md) guide om du behöver hjälp med detta.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Använd vår [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) guide och se till att SteamCMD är helt installerat innan du går vidare.

:::info Wine-kompatibilitetslager
ARK: Survival Ascended erbjuder för närvarande ingen native Linux-serverbuild, vilket innebär att en extra förberedelse krävs för att köra Windows-serverbuilden på Linux.

Du måste göra en engångsinstallation av **Wine** kompatibilitetslager om det är första gången du använder detta på din Linux-server. Använd vår snabba [Wine Compatibility Layer Setup](dedicated-linux-wine.md) guide för att ställa in detta innan du fortsätter.
:::

## Installation

Börja med att logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationsprocessen med följande kommando för att enkelt installera via SteamCMD direkt som `steam`-användare.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Ha tålamod medan nedladdningen slutförs, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Vid det här laget är din ARK: Survival Ascended-server installerad. Du kan göra ytterligare serverinställningar via en konfigurationsfil som finns i serverns katalog.

Du kan justera alla inställningar genom att öppna och redigera **GameUserSettings.ini** som ligger i Saved-mappen.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Kolla in vår [ARK: Survival Ascended Server Configuration](ark-configuration.md) guide för att se alla tillgängliga alternativ och vad de gör.

## Starta & anslut till din server

Nu är det dags att starta din server. Gå till huvudkatalogen för spelet och kör exekverbara filen **ArkAscendedServer.exe** med kommandot nedan. Glöm inte att använda **xvfb-run** och **wine** för att köra den via Wine-kompatibilitetslagret.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Tyvärr går det inte att köra Anti-Cheat Battleye-versionen av servern på Linux eftersom Anti-Cheat inte alls är kompatibelt.
:::

Du bör nu se loggar i din terminal, vilket betyder att servern startade som den ska. Observera att första starten kan ta lite tid medan allt ställs in. Alternativt kan du ansluta direkt via serverlistans sökfält genom att söka på: `[din_ip_adress]:7777`.

## Avslutning

Grattis, du har nu installerat och konfigurerat ARK: Survival Ascended-servern på din Dedikerade Server! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](dedicated-linux-create-gameservice.md) guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger flera fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta vår support, vi finns här för att hjälpa dig varje dag!