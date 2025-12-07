---
id: arma3-gamemode
title: "Arma 3: Game mode veranderen"
description: "Ontdek hoe je game modes instelt en laadt op je Arma 3 server voor een gepersonaliseerde gameplay ervaring → Leer het nu"
sidebar_label: Game mode veranderen
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Stel de game mode in

Om de game mode op je Arma 3 server te veranderen, moet je het juiste missiebestand voor de game mode uploaden naar je server.

We bieden momenteel de volgende missiebestanden aan zonder dat je ze zelf hoeft te uploaden:

- Arma 3 Wasteland

Deze staan al in je **mpmissions** map.

<InlineVoucher />

## Upload het missiebestand

Om het missiebestand te uploaden, moet je eerst via FTP verbinding maken met je server: [Toegang via FTP](gameserver-ftpaccess.md).  
Daar upload je het bijbehorende missiebestand naar je **mpmissions** map, die je vindt onder **/gxxxxxx/arma3/**.  
In dit voorbeeld uploaden we de game mode **King of the Hill** naar onze server.

![](https://screensaver01.zap-hosting.com/index.php/s/rDS7DsEfQskZ9Y3/preview)


## Laad het missiebestand op de server

Om het missiebestand op de server te laden, ga je naar de interface van je Arma 3 server en klik je in het menu links op het tabblad **Configs**:

![](https://screensaver01.zap-hosting.com/index.php/s/dxDWHiFJy5e4qYq/preview)

Daar pas je het bestand **server.cfg** aan en vul je de naam van je missiebestand in zoals op de afbeelding:

![](https://screensaver01.zap-hosting.com/index.php/s/7JQED8wC9WGBdYB/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/7jtRK3YRD7wWiij/preview)

Klik daarna op **Opslaan** en je kunt je server starten. Het nieuwe missiebestand wordt dan geladen.

<InlineVoucher />