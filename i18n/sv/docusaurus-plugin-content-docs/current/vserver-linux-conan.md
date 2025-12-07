---
id: vserver-linux-conan
title: "VPS: Conan Exiles Dedikerad Server Linux Setup"
description: "Upptäck hur du installerar och kör en Conan Exiles Dedikerad server på din Linux VPS med SteamCMD och Wine-kompatibilitet → Lär dig mer nu"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Linux VPS och vill installera Conan Exiles dedikerade server på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelservers-tjänster med direkt integration till din ZAP-Hosting dashboard – på bara några klick! Läs mer om [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md)-guide om du behöver hjälp med det.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](vserver-linux-steamcmd.md)-guide och se till att SteamCMD är helt installerat innan du går vidare.

:::info Wine-kompatibilitetslager
Conan Exiles erbjuder för närvarande ingen native Linux-serverbuild, vilket innebär att du behöver göra en extra förberedelse för att köra Windows-serverbuilden på Linux.

Du måste göra en engångsinstallation av **Wine**-kompatibilitetslagret om det är första gången du använder det på din Linux-server. Följ vår snabba [Wine Compatibility Layer Setup](vserver-linux-wine.md)-guide för att fixa detta innan du fortsätter.
:::

## Installation

Börja med att logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando för att enkelt installera via SteamCMD direkt som `steam`-användare. Parametern `+@sSteamCmdForcePlatformType windows` tvingar installation av Windows-binarierna.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta ett tag för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu har du slutfört setupen för din Conan Exiles-server. Du kan göra vidare serverkonfiguration via en konfigurationsfil som finns i serverns katalog.

Du kan justera alla konfigurationsparametrar genom att öppna och redigera filen **WindowsServerEngine.ini** som finns här:
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Lägg till konfigurationsalternativ genom att skriva in specifika parametrar. Exempelvis, för att sätta servernamn, lösenord och admin-lösenord, lägg till följande i filen:
```
[OnlineSubsystem]
ServerName=[ditt_servernamn]
ServerPassword=[ditt_lösenord]

[ServerSettings]
AdminPassword=[ditt_adminlösenord]
```

Vi rekommenderar att du kollar in [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) för en komplett lista över tillgängliga alternativ.

## Starta & anslut till din server

Nu är det dags att starta servern. Gå till huvudkatalogen för spelet och kör exekverbara filen **ConanSandboxServer.exe** med kommandot nedan. Glöm inte att använda **xvfb-run** och **wine64** för att köra den via Wine-kompatibilitetslagret.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Du kommer nu se massor av loggar i terminalen som visar att servern startar upp. Du kan ansluta direkt genom att söka efter servern i serverlistan eller ansluta direkt via: `[din_ip_adress]:7777`.

## Avslutning

Grattis, du har nu installerat och konfigurerat Conan Exiles-servern på din VPS! Nästa steg är att kolla in vår [Setup Linux Service](vserver-linux-create-gameservice.md)-guide, som visar hur du sätter upp din dedikerade spelserver som en tjänst. Det ger dig fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Hör av dig till vår support, vi finns här för att hjälpa dig varje dag!

<InlineVoucher />