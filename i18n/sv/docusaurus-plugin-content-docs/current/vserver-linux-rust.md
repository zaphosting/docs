---
id: vserver-linux-rust
title: "VPS: Rust Dedikerad Server Linux Setup"
description: "Lär dig hur du sätter upp en Rust Dedikerad server på din Linux VPS med SteamCMD för smidig spelserverhosting → Läs mer nu"
sidebar_label: Rust
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Linux VPS och vill installera Rust Dedikerad server på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelserverservice med direkt integration till din ZAP-Hosting kontrollpanel – på bara några klick! Läs mer om [GS/TS3 Interface här](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md) guide om du behöver hjälp med det.

Du måste också göra en första setup av SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](vserver-linux-steamcmd.md) guide och se till att SteamCMD är helt klart innan du går vidare.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla ordning.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD direkt som `steam`-användare.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu har du slutfört setupen för din Rust-server. Du kan göra fler inställningar via konfigurationsfiler som finns i serverns katalog.

Gå till root-katalogen och skapa en `.sh`-fil. Det här blir bash-filen som startar servern och där du kan justera olika inställningar.
```
nano /home/steam/Rust-Server/start_server.sh
```

Klistra in följande innehåll i bash-filen. I kommandot nedan finns några av de vanligaste och viktigaste parametrarna med. Vill du lägga till fler eller lära dig mer om varje parameter rekommenderar vi att du kollar in [officiella Rust-wikin](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver) som listar alla tillgängliga konfigurationsalternativ.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Spara filen med `CTRL+X`, följt av `Y` och `Enter`. För att göra bash-filen körbar utan sudo, kör sedan detta kommando som ger filen exekveringsrättigheter:
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Starta & anslut till din server

Nu är det dags att starta servern. Gå till huvudkatalogen för spelet och kör shell-filen **start_server.sh**.
```
/home/steam/Rust-Server/start_server.sh
```

Du bör nu se loggar i terminalen som visar att servern startar. Observera att första starten kan ta lite tid eftersom allt ska sättas upp. Om allt går som det ska kommer din server synas i serverlistan. Alternativt kan du ansluta direkt genom att söka på: `[din_ip_adress]:28015`.

## Avslutning

Grattis, du har nu installerat och konfigurerat Rust-servern på din VPS! Nästa steg är att kolla in vår guide för [Setup Linux Service](vserver-linux-create-gameservice.md), där vi visar hur du sätter upp din dedikerade spelserver som en tjänst. Det ger dig fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta vår support, vi finns här för att hjälpa dig varje dag!

<InlineVoucher />