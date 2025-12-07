---
id: dedicated-linux-conan
title: "Dedikerad Server: Conan Exiles Dedikerad Server Linux-Setup"
description: "Upptäck hur du sätter upp en Conan Exiles Dedikerad Server på Linux för smidig spelserverhosting och hantering → Lär dig mer nu"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Linux Dedikerad Server och vill installera Conan Exiles dedikerade serverservice på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar denna service på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din dedikerade server? Det låter dig sätta upp spelserverservices med direkt integration till din ZAP-Hosting dashboard – allt på bara några klick! Läs mer om [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din Dedikerade Server via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md)-guide om du behöver hjälp med detta.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](dedicated-linux-steamcmd.md)-guide och se till att SteamCMD är helt installerat innan du går vidare.

:::info Wine-kompatibilitetslager
Conan Exiles erbjuder för närvarande ingen native Linux-serverbuild, vilket innebär att du behöver göra en extra förberedelse för att köra Windows-serverbuilden på Linux.

Du måste göra en engångsinstallation av **Wine** kompatibilitetslager om det är första gången du använder detta på din Linux-server. Följ vår snabba [Wine Compatibility Layer Setup](dedicated-linux-wine.md)-guide för att fixa detta innan du fortsätter.
:::

## Installation

Börja med att logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationsprocessen med följande kommando för att enkelt installera via SteamCMD direkt som `steam`-användare. Genom att använda parametern `+@sSteamCmdForcePlatformType windows` tvingar du installation av Windows-binarierna.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Vid det här laget är din Conan Exiles-server installerad. Du kan göra vidare serverkonfiguration via en konfigurationsfil som finns i serverns katalog.

Du kan justera alla konfigurationsparametrar genom att öppna och redigera filen **WindowsServerEngine.ini** som ligger här:
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Du kan lägga till konfigurationsalternativ genom att skriva in specifika parametrar. Exempelvis, för att sätta servernamn, lösenord och admin-lösenord lägger du till följande i filen:
```
[OnlineSubsystem]
ServerName=[ditt_servernamn]
ServerPassword=[ditt_lösenord]

[ServerSettings]
AdminPassword=[ditt_adminlösenord]
```

Vi rekommenderar att du kollar in [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) för en komplett lista över tillgängliga inställningar.

## Starta & anslut till din server

Nu är det dags att starta servern. Gå till huvudspelets katalog och kör filen **ConanSandboxServer.exe** med kommandot nedan. Glöm inte att använda **xvfb-run** och **wine64** för att köra den via Wine-kompatibilitetslagret.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Du kommer nu se massor av loggar i terminalen som visar att servern startar upp. Du kan ansluta direkt genom att söka efter servern i serverlistan eller via direktanslutning med: `[din_ip_adress]:7777`.

## Avslutning

Grattis, du har nu installerat och konfigurerat Conan Exiles-servern på din dedikerade server! Nästa steg är att kolla in vår [Setup Linux Service](dedicated-linux-create-gameservice.md)-guide, som visar hur du sätter upp din nya dedikerade spelserver som en service. Det ger flera fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Om du har fler frågor eller problem, tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig!