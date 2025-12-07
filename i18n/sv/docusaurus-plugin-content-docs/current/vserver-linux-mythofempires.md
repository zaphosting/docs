---
id: vserver-linux-mythofempires
title: "VPS: Myth of Empires Dedikerad Server Linux Setup"
description: "Upptäck hur du installerar och kör Myth of Empires Dedikerad server på din Linux VPS för smidig game hosting → Lär dig mer nu"
sidebar_label: Myth of Empires
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera Myth of Empires Dedikerad server på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelservers-tjänster med direkt integration till din ZAP-Hosting dashboard – allt på bara några klick! Läs mer om [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md) guide om du behöver hjälp med det.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Använd vår [SteamCMD Linux Setup](vserver-linux-steamcmd.md) guide och se till att SteamCMD är helt uppsatt innan du går vidare.

:::info Wine-kompatibilitetslager
Myth of Empires erbjuder för närvarande ingen native Linux-serverbuild, vilket betyder att du behöver en extra förberedelse för att köra Windows-serverbuilden på Linux.

Du måste göra en engångsinstallation av **Wine** kompatibilitetslager om det är första gången du använder det på din Linux-server. Använd vår snabba [Wine Compatibility Layer Setup](vserver-linux-wine.md) guide för att fixa detta innan du fortsätter.
:::

## Installation

Börja med att logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD direkt som `steam`-användare. Parametern `+@sSteamCmdForcePlatformType windows` tvingar installation av Windows-binarierna.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta ett tag för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din Myth of Empires-server klar. Du kan göra vidare serverkonfiguration via olika konfigurationsfiler som finns i serverns katalog.

Du kan justera alla konfigurationsparametrar genom att öppna och redigera `.ini`-filer i Saved-mappen. Använd `ls` för att se vilka filer som finns.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

För att redigera en fil, kör bara `nano ./[filnamn].ini` för att öppna nano-editorn.

Kolla in vår Myth of Empires [Server Configuration](moe-configuration.md) guide för att se alla tillgängliga serveralternativ och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till huvudkatalogen för spelet och kör **MOEServer.exe** med kommandot nedan. Glöm inte att använda **xvfb-run** och **wine** för att köra det via Wine-kompatibilitetslagret.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

Du bör nu se loggar i terminalen som visar att servern startat korrekt. Observera att första starten kan ta lite tid eftersom allt sätts upp. Du kan ansluta direkt genom att söka efter servern under fliken **Custom Server**: `[din_ip_adress]:15636`.

## Avslutning

Grattis, du har nu installerat och konfigurerat Myth of Empires-servern på din VPS! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](vserver-linux-create-gameservice.md) guide, som visar hur du sätter upp din dedikerade spelserver som en tjänst. Det ger massa fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Hör av dig till vår support, vi finns här för att hjälpa dig varje dag!

<InlineVoucher />