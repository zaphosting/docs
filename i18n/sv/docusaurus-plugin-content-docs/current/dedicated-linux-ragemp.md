---
id: dedicated-linux-ragemp
title: "Dedikerad Server: RageMP Dedikerad Server Linux-Setup"
description: "Upptäck hur du sätter upp en RageMP Dedikerad Server på din Linux-server för smidig spelhosting och hantering → Lär dig mer nu"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux Dedikerad Server och vill installera RageMP Dedicated server-tjänsten på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server. Vi använder Ubuntu i exemplen, men processen bör vara väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din Dedikerade Server? Det låter dig sätta upp spelserver-tjänster med direkt integration till din ZAP-Hosting dashboard – allt på bara några klick! Läs mer om [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Förberedelser

Börja med att ansluta till din Dedikerade Server via SSH. Använd vår [SSH Initial Access](dedicated-linux-ssh.md) guide om du behöver hjälp med det.

### Skapa användare

Vi rekommenderar starkt att skapa en separat användare för att köra alla dina dedikerade spelserver-tjänster på. Att köra som root-användare, som med det mesta, är inte rekommenderat av flera anledningar. Har du redan en användare redo kan du gå vidare till installationsstegen.

Använd följande kommando för att skapa en användare som heter `gameservers` med ett valfritt lösenord.

```
sudo useradd -m gameservers
sudo passwd gameservers # Valfritt lösenord
```

När du har tillgång till din server och en användare redo, fortsätt med installationsstegen.

## Installation

Börja med att logga in som `gameservers` och gå till root-katalogen `home/gameservers` för att hålla ordning.
```
sudo -u gameservers -s
cd ~
```

För att hålla det organiserat, skapa en ny mapp för din RageMP-server och gå in i den.
```
mkdir RageMP-Server && cd RageMP-Server
```

Nu behöver du ladda ner den senaste releasen från RageMP:s hemsida. Använd följande kommando för att ladda ner den direkt.
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Detta laddar ner `.zip`-filen till din nuvarande plats, som borde vara i din nya `RageMP-Server`-mapp. Kör sedan följande kommando för att packa upp filerna i mappen.
```
tar -xvzf linux_x64.tar.gz
```

Dina filer ska nu finnas i mappen **ragemp-srv**, gå in där med `cd ragemp-srv`. Använd `ls` för att se innehållet i mappen när som helst. Servern är nu redo, gå vidare till nästa avsnitt för att konfigurera inställningar.

## Konfiguration

Vid det här laget är setupen för din RageMP-server klar. Du kan göra vidare serverkonfiguration via en konfigurationsfil som finns i serverns katalog.

:::tip
Du kan behöva köra servern minst en gång innan konfigurationsfilerna skapas. Det gör du genom att köra shell-filen: `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Avsluta sedan med `CTRL+C` för att stänga servern.
:::

Du kan redigera de grundläggande konfigurationsparametrarna genom att öppna filen **conf.json**.
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Starta & anslut till din server

Nu är det dags att starta din server. Gå till huvudkatalogen för spelet och kör shell-filen **ragemp-server**.
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

Du bör nu se loggar dyka upp i din terminal, inklusive nätverksloggar, vilket betyder att starten lyckades. Om allt går som det ska kommer din server vara tillgänglig via direktanslutning och synlig i serverlistan. Alternativt kan du ansluta direkt via: `[din_ip_adress]:22005`.

## Avslutning

Grattis, du har nu installerat och konfigurerat RageMP-servern på din Dedikerade Server! Nästa steg rekommenderar vi att du kollar in vår guide för [Setup Linux Service](dedicated-linux-create-gameservice.md), som visar hur du sätter upp din nya dedikerade spelserver som en tjänst. Det ger flera fördelar som automatisk serverstart vid boot, automatiska uppdateringar, enkel hantering och tillgång till loggar – och mycket mer!

Har du fler frågor eller problem? Kontakta gärna vår support, de finns här för att hjälpa dig varje dag!