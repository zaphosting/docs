---
id: arma3-missionfile
title: "Arma 3: Upload je eigen missiebestand"
description: "Ontdek hoe je je eigen missiebestanden uploadt en laadt op je Arma 3-server voor een gepersonaliseerde game-ervaring → Leer het nu"
sidebar_label: Upload je eigen missiebestand
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Upload het missiebestand

Om je eigen missiebestand te uploaden, moet je eerst verbinding maken met je server via FTP: [Toegang via FTP](gameserver-ftpaccess.md).  
Daar upload je het missiebestand naar je **mpmissions** map, die je vindt onder **/gxxxxxx/arma3/**.  
In dit voorbeeld uploaden we het missiebestand **King_of_the_hill.Altis** naar onze server.

![](https://screensaver01.zap-hosting.com/index.php/s/jkfK9X48qj2e7Pn/preview)

<InlineVoucher />

## Het missiebestand laden op de server

Om het missiebestand vanaf de server te laden, ga je naar je Arma 3 serverinterface en klik je in het menu aan de linkerkant op het tabblad **Configs**:

![](https://screensaver01.zap-hosting.com/index.php/s/PD98ATq8xHdjy8Q/preview)

Daar bewerk je het bestand **server.cfg** en vul je de naam van je missiebestand in zoals op de afbeelding:

![](https://screensaver01.zap-hosting.com/index.php/s/aG7QESxyTNpATsG/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/6TZ7mc578pcHpbF/preview)

Klik daarna op **Opslaan** en je kunt je server starten. Het nieuwe missiebestand wordt dan geladen.

<InlineVoucher />