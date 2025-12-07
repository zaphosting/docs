---
id: fivem-mods-installreplace
title: "FiveM: Vervangende Carmods installeren op je server"
description: "Ontdek hoe je mods installeert en uploadt naar je FiveM-server voor custom gameplay → Leer het nu"
sidebar_label: Vervang Carmods Installeren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Verbinden met FTP
Eerst verbind je met je server via FTP. Gebruik onze [Toegang via FTP](gameserver-ftpaccess.md) gids hiervoor.

## Voorbereiding

Maak nu een map aan voor je mods in de "resources" map.

:::info
Je mag de map elke naam geven, zolang er geen speciale tekens in zitten. In ons voorbeeld heet de map "assets".
:::

Maak nu een fxmanifest.lua bestand aan in je zojuist gemaakte "assets" map.

De volgende tekst komt in dit bestand:

```
fx_version 'cerulean'
games { 'gta5' }

```

Sla het fxmanifest.lua bestand op en sluit het, we hebben het verder niet meer nodig.

In je assets map maak je nu een "stream" map aan.

![](https://screensaver01.zap-hosting.com/index.php/s/yZgpLTTPtpe2sXZ/preview)

## Mods Uploaden

Open nu deze stream map, hier kun je alle ytd en yft bestanden via drag & drop uploaden:

![](https://screensaver01.zap-hosting.com/index.php/s/mxNAFtBHaAjeQYj/preview)

Als alle mods geüpload zijn, hoef je alleen nog je resource toe te voegen in de server.cfg. Die vind je in de "server-data" map van je FiveM server.

Open het bestand met een teksteditor en voeg onder de "start" regels je resource toe zoals dit:

```
start assets
```

Klaar! Na een server restart is de Carmod actief op je server!

<InlineVoucher />