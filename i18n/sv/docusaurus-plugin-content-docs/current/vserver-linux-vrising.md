---
id: vserver-linux-vrising
title: "VPS: V-Rising Dedikerad Server Linux Setup"
description: "Upptäck hur du installerar och kör V-Rising Dedicated server på din Linux VPS effektivt → Läs mer nu"
sidebar_label: V-Rising
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera V-Rising Dedicated server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelservers-tjänster med direkt integration till din ZAP-Hosting dashboard – på bara några klick! Läs mer om [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md)-guide om du behöver hjälp med det.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](vserver-linux-steamcmd.md)-guide och se till att SteamCMD är helt klart innan du går vidare.

:::info Wine-kompatibilitetslager
V-Rising har för närvarande ingen native Linux-serverbuild, vilket betyder att du behöver en extra förberedelse för att köra Windows-serverbuilden på Linux.

Du måste göra en engångsinstallation av **Wine** kompatibilitetslager om det är första gången du använder det på din Linux-server. Följ vår snabba [Wine Compatibility Layer Setup](vserver-linux-wine.md)-guide för att fixa detta innan du fortsätter.
:::

## Installation

Börja med att logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD direkt som `steam`-användare. Parametern `+@sSteamCmdForcePlatformType windows` tvingar installation av Windows-binarierna.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta ett tag för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din V-Rising-server klar. Du kan göra mer serverkonfiguration genom att redigera startfilen direkt.

Du kan justera alla konfigurationsparametrar genom att öppna och redigera filerna **ServerGameSettings.json** och **ServerHostSettings.json** som finns i Settings-mappen.
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

Kolla in vår V-Rising [Server Configuration](vrising-configuration.md)-guide för att se alla tillgängliga serveralternativ och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till huvudkatalogen för spelet och skapa en kopia av exempel-batchfilen.
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

Du kan redigera filen om du vill. När du är redo, kör den nya **start_server.bat**-filen med kommandot nedan. Glöm inte att använda **xvfb-run** och **wine** för att köra den via Wine-kompatibilitetslagret.
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Du bör nu se loggar i terminalen som visar att servern startat. Observera att första starten kan ta lite tid eftersom allt sätts upp. Alternativt kan du ansluta direkt via serverlistans sökfält genom att söka på: `[din_ip_adress]:8211`.

## Avslutning

Grattis, du har nu installerat och konfigurerat V-Rising-servern på din VPS! Nästa steg är att kolla in vår [Setup Linux Service](vserver-linux-create-gameservice.md)-guide, som visar hur du sätter upp din dedikerade spelserver som en tjänst. Det ger dig fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta vår support, vi finns här för dig varje dag!

<InlineVoucher />