---
id: vserver-linux-ragemp
title: "VPS: RageMP Dedicated Server Linux Setup"
description: "Upptäck hur du sätter upp en RageMP Dedicated-server på din Linux VPS för smidig multiplayer-gaming → Lär dig mer nu"
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera RageMP Dedicated-servern på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din Linux-server. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelservers-tjänster med direkt integration till din ZAP-Hosting-panel – på bara några klick! Läs mer om [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md)-guide om du behöver hjälp med det.

### Skapa användare

Vi rekommenderar starkt att skapa en separat användare för att köra alla dina dedikerade spelservers-tjänster. Att köra som root-användare, som med det mesta, är inte att rekommendera av flera anledningar. Har du redan en användare redo kan du hoppa vidare till installationsstegen.

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

För att hålla allt organiserat, skapa en ny mapp för din RageMP-server och gå in i den.
```
mkdir RageMP-Server && cd RageMP-Server
```

Nu behöver du ladda ner den senaste releasen från RageMP:s hemsida. Använd följande kommando för att ladda ner den direkt.
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Detta laddar ner `.zip`-filen till din nuvarande mapp, som borde vara din nya `RageMP-Server`-mapp. Kör sedan detta kommando för att packa upp filerna i mappen.
```
tar -xvzf linux_x64.tar.gz
```

Filerna ska nu finnas i mappen **ragemp-srv**, gå in i den med `cd ragemp-srv`. Använd `ls` för att se innehållet när som helst. Servern är nu redo, gå vidare till nästa avsnitt för att konfigurera inställningarna.

## Konfiguration

Vid det här laget är setupen för din RageMP-server klar. Du kan göra vidare serverkonfiguration via en konfigurationsfil som finns i serverns katalog.

:::tip
Du kan behöva starta servern minst en gång innan konfigurationsfilerna skapas. Det gör du genom att köra shell-filen: `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Avsluta sedan med `CTRL+C` för att stänga servern.
:::

Du kan redigera de viktigaste konfigurationsparametrarna genom att öppna filen **conf.json**.
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Starta & anslut till din server

Nu är det dags att starta servern. Gå till huvudkatalogen för spelet och kör shell-filen **rage-mp-server**.
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

Du bör nu se loggar i din terminal, inklusive nätverksloggar, vilket betyder att starten lyckades. Om allt går som det ska är din server tillgänglig via direktanslutning och synlig i serverlistan. Alternativt kan du ansluta direkt via: `[din_ip_adress]:22005`.

## Avslutning

Grattis, du har nu installerat och konfigurerat RageMP-servern på din VPS! Nästa steg rekommenderar vi att du kollar in vår [Setup Linux Service](vserver-linux-create-gameservice.md)-guide, som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger flera fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta vår support, vi finns här för dig varje dag!

<InlineVoucher />