---
id: vserver-linux-openmp
title: "VPS: Open.mp Dedikerad Server Linux-Setup"
description: "Lär dig hur du sätter upp open.mp Dedikerad server på din Linux VPS för smidig spelhosting och hantering → Läs mer nu"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Linux VPS och vill installera open.mp Dedikerad server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din Linux-server. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

:::tip
Visste du att du kan installera vårt **ZAP GS/TS3 Interface** direkt på din VPS? Det låter dig sätta upp spelservers med direkt integration till din ZAP-Hosting-panel – på bara några klick! Läs mer om [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Behöver du hjälp med det? Kolla in vår [SSH Initial Access](vserver-linux-ssh.md)-guide.

### Skapa användare

Vi rekommenderar starkt att skapa en separat användare för att köra alla dina dedikerade spelservers på. Att köra som root är inte att rekommendera av flera anledningar. Har du redan en användare klar? Då kan du hoppa vidare till installationsstegen.

Använd följande kommando för att skapa en användare som heter `gameservers` med ett valfritt lösenord.

```
sudo useradd -m gameservers
sudo passwd gameservers # Valfritt lösenord
```

När du har tillgång till servern och en användare redo, fortsätt med installationen.

## Installation

Logga in som `gameservers` och gå till root-katalogen `home/gameservers` för att hålla ordning.
```
sudo -u gameservers -s
cd ~
```

För att hålla det organiserat, skapa en ny mapp för din open.mp-server och gå in i den.
```
mkdir OpenMP-Server && cd OpenMP-Server
```

Nu behöver du ladda ner senaste releasen från [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases). Högerklicka på **linux-x86**-versionen och kopiera länken. Kör sedan detta kommando och byt ut `[link]` mot din kopierade länk.
```
wget [link]
```

Detta laddar ner `.zip`-filen till din nuvarande mapp, alltså `OpenMP-Server`. Packa upp filerna med:
```
tar -xvzf open.mp-linux-x86.tar.gz
```

Filerna finns nu i mappen **Server**, gå in där med `cd Server`. Vill du se innehållet kan du alltid köra `ls`. Servern är nu redo, gå vidare till konfigurationen.

## Konfiguration

Nu är setupen klar för din open.mp-server. Du kan göra fler inställningar via en konfigurationsfil i serverns mapp.

Redigera huvudinställningarna i filen **config.json**:
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

Kolla in vår Open.mp [Server Configuration](openmp-configuration.md)-guide för alla tillgängliga inställningar och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till huvudmappen för spelet och kör shell-filen **omp-server**:
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

Du bör nu se loggar i terminalen, inklusive nätverksloggar, vilket betyder att servern startat korrekt. Om allt funkar som det ska kan du ansluta direkt via IP och port, eller hitta servern i serverlistan. Direktanslut via: `[din_ip_adress]:7777`.

## Avslutning

Grattis! Du har nu installerat och konfigurerat open.mp-servern på din VPS! Nästa steg är att kolla in vår guide för [Setup Linux Service](vserver-linux-create-gameservice.md), där du lär dig sätta upp din dedikerade server som en tjänst. Det ger massa fördelar som automatisk start vid boot, automatiska uppdateringar, enkel hantering och loggåtkomst – och mycket mer!

Har du frågor eller problem? Hör av dig till vår support, vi finns här för dig varje dag!

<InlineVoucher />