---
id: vserver-linux-arksurvivalascended
title: "VPS: ARK Survival Ascended Dedikerad Server Linux-Setup"
description: "Upptäck hur du sätter upp ARK: Survival Ascended dedikerad server på din Linux VPS för smidig spelhantering → Läs mer nu"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera ARK: Survival Ascended dedikerad server på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelserverservices med direkt integration till din ZAP-Hosting dashboard – på bara några klick! Läs mer om [GS/TS3 Interfacet här](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md) guide om du behöver hjälp med det.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](vserver-linux-steamcmd.md) guide och se till att SteamCMD är helt klart innan du går vidare.

:::info Wine-kompatibilitetslager
ARK: Survival Ascended har för närvarande ingen native Linux-serverbuild, vilket betyder att du behöver göra en extra förberedelse för att köra Windows-serverbuilden på Linux.

Du måste göra en engångsinstallation av **Wine** kompatibilitetslager om det är första gången du använder det på din Linux-server. Följ vår snabba [Wine-kompatibilitetslager Setup](vserver-linux-wine.md) guide för att fixa detta innan du fortsätter.
:::

## Installation

Börja med att logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando för att enkelt installera via SteamCMD direkt som `steam`-användare.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu har du slutfört setupen för din ARK: Survival Ascended-server. Du kan göra ytterligare serverkonfiguration via en konfigurationsfil som finns i serverns katalog.

Du kan justera alla inställningar genom att öppna och redigera **GameUserSettings.ini** som ligger i Saved-mappen.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Kolla in vår [ARK: Survival Ascended Server Configuration guide](ark-configuration.md) för att se alla tillgängliga alternativ och vad de gör.

## Starta & anslut till din server

Nu är det dags att starta servern. Gå till huvudkatalogen för spelet och kör exekverbara filen **ArkAscendedServer.exe** med kommandot nedan. Glöm inte att använda **xvfb-run** och **wine** för att köra den via Wine-kompatibilitetslagret.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Tyvärr går det inte att köra Anti-Cheat Battleye-versionen av servern på Linux eftersom Anti-Cheat inte alls är kompatibelt.
:::

Du bör nu se loggar i terminalen som visar att servern startat korrekt. Observera att första starten kan ta lite tid eftersom allt sätts upp. Alternativt kan du ansluta direkt via serverlistans sökfält genom att söka på: `[din_ip_adress]:7777`.

## Avslutning

Grattis, du har nu installerat och konfigurerat ARK: Survival Ascended-servern på din VPS! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](vserver-linux-create-gameservice.md) guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger dig fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta vår support, vi finns här för att hjälpa dig varje dag!

<InlineVoucher />