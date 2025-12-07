---
id: dedicated-linux-openmp
title: "Dedikerad Server: Open.mp Dedikerad Server Linux Setup"
description: "Upptäck hur du sätter upp open.mp Dedikerad Server på din Linux-server för smidig spelhosting och hantering → Lär dig mer nu"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux Dedikerad Server och vill installera open.mp Dedikerad server-tjänst på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din Dedikerade Server? Det låter dig sätta upp spelserver-tjänster med direkt integration till din ZAP-Hosting dashboard – på bara några klick! Läs mer om [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din Dedikerade Server via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md) guide om du behöver hjälp med det.

### Skapa användare

Vi rekommenderar starkt att skapa en separat användare för att köra alla dina dedikerade spelserver-tjänster på. Att köra som root-användare, som med det mesta, är inte rekommenderat av flera anledningar. Har du redan en användare redo, hoppa vidare till installationsstegen.

Använd följande kommando för att skapa en användare som heter `gameservers` med ett valfritt lösenord.

```
sudo useradd -m gameservers
sudo passwd gameservers # Valfritt lösenord
```

När du har tillgång till servern och en användare redo, fortsätt med installationsstegen.

## Installation

Börja med att logga in som `gameservers` och gå till root-katalogen `home/gameservers` för att hålla ordning.
```
sudo -u gameservers -s
cd ~
```

För att hålla det organiserat, skapa en ny mapp för din open.mp-server och gå in i den.
```
mkdir OpenMP-Server && cd OpenMP-Server
```

Nu behöver du ladda ner den senaste releasen från [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases). Högerklicka på sidan på **linux-x86** versionen och kopiera länken. Kör sedan följande kommando för att ladda ner senaste Linux-releasen, byt ut `[link]` mot den kopierade länken.
```
wget [link]
```

Detta laddar ner `.zip`-filen till din nuvarande mapp, som borde vara din nya `OpenMP-Server`-mapp. Kör sedan detta kommando för att packa upp filerna.
```
tar -xvzf open.mp-linux-x86.tar.gz
```

Filerna ska nu finnas i **Server**-mappen, gå in där med `cd Server`. Använd `ls` för att se innehållet när som helst. Servern är nu redo, gå vidare till nästa avsnitt för att konfigurera inställningar.

## Konfiguration

Vid det här laget är setupen för din open.mp-server klar. Du kan göra vidare serverkonfiguration via en konfigurationsfil i serverns katalog.

Redigera kärninställningarna genom att öppna **config.json**-filen.
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

Kolla in vår Open.mp [Server Configuration](openmp-configuration.md) guide för att se alla tillgängliga alternativ och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till huvudkatalogen för spelet och kör shell-filen **omp-server**.
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

Du bör nu se loggar i terminalen, inklusive nätverksloggar, vilket betyder att servern startade som den ska. Om allt funkar som det ska är servern tillgänglig via direct connect och syns i serverlistan. Alternativt kan du ansluta direkt via: `[din_ip_adress]:7777`.

## Avslutning

Grattis, du har nu installerat och konfigurerat open.mp-servern på din VPS! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](dedicated-linux-create-gameservice.md) guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger flera fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta vår support, vi finns här för att hjälpa dig varje dag!