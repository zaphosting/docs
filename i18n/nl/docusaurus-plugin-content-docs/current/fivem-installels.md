---
id: fivem-installels
title: "FiveM: ELS installeren op je server"
description: "Ontdek hoe je ELS-FiveM met carmods installeert en activeert voor een betere gameplay op je server → Leer het nu"
sidebar_label: ELS Installeren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Verbinden met FTP

Om de resource te kunnen installeren, moet de [Toegang via FTP](gameserver-ftpaccess.md) ingesteld zijn.

## Voorbereiding

Download eerst de nieuwste [ELS-FiveM versie](https://github.com/MrDaGree/ELS-FiveM/releases/latest), te vinden onder "Assets".

Als je ELS hebt gedownload, pak je het bestand uit en open je de map "ELS-FiveM".

## Configuratie

Nu gaan we ELS-FiveM configureren door een kopie te maken van `vcf.default.lua` en deze te hernoemen naar `vcf.lua`.

:::info
Let op: Verwijder het originele `vcf.default.lua` bestand niet.
:::

Andere instellingen kun je ook aanpassen in "config.lua", maar we laten deze voor nu op de standaardwaarden staan.

## Resource Uploaden

Je installeert ELS-FiveM door de bestanden via drag & drop te uploaden naar de "resources" map.

Na het uploaden open je de server.cfg in de server-data map:

![](https://screensaver01.zap-hosting.com/index.php/s/6AfsTS6wyy9REFB/preview)

Voeg tussen de andere startregels voor resources nu de regel voor ELS-FiveM toe.

Daarna kun je de server herstarten en is ELS-FiveM in-game beschikbaar!

## Carmods Configuratie

Om nieuwe carmods toe te voegen aan ELS-FiveM heb je eerst de ELS-config nodig, die je vaak vindt in de map van de gedownloade carmod. Meestal heet deze `autoname.xml`, in ons voorbeeld `scpdvic.xml`.

Upload deze via FTP naar de "vcf" map in onze ELS-FiveM map.

Als het bestand is geüpload, open je het bestand 'vcf.lua' in de ELS-FiveM map.

:::info
Zorg dat de vorige regel altijd eindigt met een komma.
:::

Klaar! Je carmod is nu ELS-enabled en werkt na een server restart.

<InlineVoucher />