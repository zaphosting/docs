---
id: dedicated-linux-rust
title: "Dedikerad Server: Rust Dedikerad Server Linux Setup"
description: "Lär dig hur du sätter upp en Rust Dedikerad Server på Linux för att hosta ditt spel effektivt och optimera serverprestanda → Läs mer nu"
sidebar_label: Rust
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Linux Dedikerad Server och vill installera Rust Dedicated Server-tjänsten på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server med hjälp av SteamCMD. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vår **ZAP GS/TS3 Interface** direkt på din dedikerade server? Det låter dig sätta upp spelserver-tjänster med direkt integration till din ZAP-Hosting kontrollpanel – på bara några klick! Läs mer om [GS/TS3 Interface här](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din Dedikerade Server via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md) guide om du behöver hjälp med detta.

Du måste också göra en första setup för SteamCMD om det är första gången du använder det på din Linux-server. Följ vår [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) guide och se till att SteamCMD är helt installerat innan du går vidare.

## Installation

Logga in som `steam`-användaren och gå till root-katalogen `home/steam` för att hålla allt organiserat.
```
sudo -u steam -s
cd ~
```

När du är inloggad kan du starta installationen med följande kommando som använder SteamCMD direkt för `steam`-användaren.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

## Konfiguration

Nu är setupen för din Rust-server klar. Du kan göra fler inställningar via konfigurationsfiler som finns i serverns katalog.

Gå till root-katalogen och skapa en `.sh`-fil. Det här blir bash-filen som startar servern och där du kan justera olika inställningar.
```
nano /home/steam/Rust-Server/start_server.sh
```

Klistra in följande innehåll i bash-filen. Kommandot nedan innehåller några av de vanligaste och grundläggande parametrarna. Vill du lägga till fler eller lära dig mer om varje parameter rekommenderar vi att du kollar in [officiella Rust-wikin](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver) som listar alla tillgängliga konfigurationsalternativ.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Spara filen med `CTRL+X`, följt av `Y` och `Enter`. För att göra bash-filen körbar utan sudo-rättigheter, kör sedan detta kommando som ger filen exekveringsrättigheter:
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Starta & anslut till din server

Nu är det dags att starta servern. Gå till huvudkatalogen för spelet och kör shell-filen **start_server.sh**.
```
/home/steam/Rust-Server/start_server.sh
```

Du bör nu se loggar i terminalen som visar att servern startar upp. Observera att första starten kan ta lite tid eftersom allt ska sättas upp. Om allt går som det ska kommer din server synas i serverlistan. Alternativt kan du ansluta direkt genom att söka på: `[din_ip_adress]:28015`.

## Avslutning

Grattis, du har nu installerat och konfigurerat Rust-servern på din Dedikerade Server! Nästa steg rekommenderar vi att du kollar in vår guide för [Setup Linux Service](dedicated-linux-create-gameservice.md), som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger flera fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta gärna vår support, vi finns här för att hjälpa dig varje dag!