---
id: dedicated-linux-mythofempires
title: "Dedikerad Server: Myth of Empires Dedikerad Server Linux-Setup"
description: "Upptäck hur du installerar Myth of Empires Dedikerad Server på Linux och optimerar din spelhosting → Lär dig mer nu"
sidebar_label: Myth of Empires
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux Dedikerad Server och vill installera Myth of Empires dedikerade serverservice på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar den här servicen på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din dedikerade server? Det låter dig sätta upp spelserverservices med direkt integration till din ZAP-Hosting dashboard – på bara några klick! Läs mer om [GS/TS3 Interface här](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din Dedikerade Server via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md) guide om du behöver hjälp med detta.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) guide och se till att SteamCMD är helt installerat innan du går vidare.

:::info Wine-kompatibilitetslager
Myth of Empires erbjuder för närvarande ingen native Linux-serverbuild, vilket innebär att du behöver en extra förberedelse för att köra Windows-serverbuilden på Linux.

Du måste göra en engångsinstallation av **Wine** kompatibilitetslager om det är första gången du använder det på din Linux-server. Följ vår snabba [Wine Compatibility Layer Setup](dedicated-linux-wine.md) guide för att fixa detta innan du fortsätter.
:::

## Installation

Börja med att logga in som `steam`-användare och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationsprocessen med följande kommando som använder SteamCMD direkt som `steam`-användare. Parametern `+@sSteamCmdForcePlatformType windows` tvingar installation av Windows-binarierna.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart får du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din Myth of Empires-server klar. Du kan göra vidare serverkonfiguration via olika konfigurationsfiler som finns i serverns katalog.

Du kan justera alla konfigurationsparametrar genom att öppna och redigera `.ini`-filer i mappen Saved. Använd kommandot `ls` för att se vilka filer som finns.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

För att redigera en fil, kör helt enkelt `nano ./[filnamn].ini` för att öppna nano-editorn.

Kolla in vår Myth of Empires [Server Configuration](moe-configuration.md) guide för att se alla tillgängliga serveralternativ och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till huvudkatalogen för spelet och kör exekverbara filen **MOEServer.exe** med kommandot nedan. Glöm inte att använda **xvfb-run** och **wine** för att köra den via Wine-kompatibilitetslagret.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

Du bör nu se loggar i terminalen som visar att servern startat korrekt. Observera att första starten kan ta lite tid eftersom allt ska sättas upp. Du kan ansluta direkt genom att söka efter servern under fliken **Custom Server**: `[din_ip_adress]:15636`.

## Avslutning

Grattis, du har nu installerat och konfigurerat Myth of Empires-servern på din Dedikerade Server! Nästa steg är att kolla in vår [Setup Linux Service](dedicated-linux-create-gameservice.md) guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger dig fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Om du har fler frågor eller problem, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig!