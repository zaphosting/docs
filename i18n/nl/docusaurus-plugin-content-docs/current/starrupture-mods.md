---
id: starrupture-mods
title: "StarRupture: Mods Installeren"
description: "Leer hoe je mods installeert op je StarRupture-server en client om je gameplay te verbeteren → Ontdek het nu"
sidebar_label: Mods Installeren
services:
- gameserver-starrupture
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Mods geven je de mogelijkheid om de gameplay van StarRupture uit te breiden met nieuwe mechanics, content, quality-of-life verbeteringen of gameplay-aanpassingen gemaakt door de community. Veel StarRupture-mods worden verspreid via communityplatforms zoals NexusMods en kunnen zowel op de server als lokaal op de client geïnstalleerd worden.

Mods installeren op je server zorgt ervoor dat de serveromgeving de aangepaste content laadt, terwijl lokaal installeren ervoor zorgt dat je gameclient dezelfde bestanden gebruikt wanneer je verbinding maakt met gemodde servers.

<InlineVoucher />

## Mods installeren op de server

Om mods te installeren op je StarRupture-server, download je eerst het gewenste mod-bestand van een betrouwbare bron zoals **NexusMods**.

![img](https://screensaver01.zap-hosting.com/index.php/s/rM4WR4gW2KLyzxz/preview)

Zorg ervoor dat je server gestopt is voordat je de mod uploadt om conflicten met bestanden tijdens de installatie te voorkomen. Verbind daarna met je server via [FTP](gameserver-ftpaccess.md) met een FTP-client. Navigeer, zodra je verbonden bent, naar de volgende map op je server:

```
/home/container/StarRupture/Content/Paks
```
Upload het gedownloade `.zip` mod-bestand naar deze map. Nadat de upload klaar is, pak je de inhoud van het archief direct uit in de `Paks`-map. Zodra de bestanden zijn uitgepakt, ga je terug naar je serverbeheer en start je de server opnieuw op.

Tijdens het opstarten detecteert en laadt de server automatisch de geïnstalleerde mods.

## Mods installeren op de client

Sommige StarRupture-mods moeten ook lokaal op de client geïnstalleerd worden. De meeste lokaal geïnstalleerde mods blijven actief wanneer je verbinding maakt met servers. Download eerst de gewenste mod van een betrouwbare bron zoals NexusMods.

Open vervolgens je **Steam Bibliotheek**, klik met de rechtermuisknop op **StarRupture**, ga naar **Beheren** en kies **Lokale bestanden doorzoeken**. Zoek in de game-installatiemap het volgende pad:

```
StarRupture/StarRupture/Content/Paks
```

Verplaats het gedownloade `.zip` mod-bestand naar deze map. Pak het archief daarna direct uit in de `Paks`-map. De mod wordt automatisch geladen zodra je de game de volgende keer opstart.

## Conclusie

Gefeliciteerd! Je hebt succesvol mods geïnstalleerd voor StarRupture op zowel de server als de client. Met geïnstalleerde mods kun je de gameplay uitbreiden met nieuwe features, mechanics en verbeteringen gemaakt door de community.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />