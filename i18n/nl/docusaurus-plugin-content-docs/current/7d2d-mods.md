---
id: 7d2d-mods
title: "7 Days to Die: Mods installeren"
description: "Ontdek hoe je je server kunt customizen met populaire mods en de gameplay kunt verbeteren voor een unieke ervaring → Leer het nu"
sidebar_label: Mods installeren
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Met mods kun je je server nog meer personaliseren. Hieronder leggen we uit waar je de populairste servermods kunt vinden en hoe je ze installeert. Met de komst van Alpha 17 Experimental is het concept van modlets geïntroduceerd. Modlets zijn kleinere mods die de vanilla XML-bestanden niet overschrijven, maar geladen worden vanuit de mods-map.

![](https://screensaver01.zap-hosting.com/index.php/s/McQLetfwmEMbo6N/preview)

<InlineVoucher />

## Voorbereiding

Het eerste wat je moet doen is de mods downloaden die je op je server wilt installeren. Je vindt een grote selectie mods op [7daystodiemods.com](https://7daystodiemods.com/). Daar staan meer dan 1000 mods en er worden regelmatig nieuwe toegevoegd. Als je een mod hebt gedownload, zou deze de volgende mappenstructuur moeten bevatten:

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```

## Installatie

Als je de gewenste mods hebt gedownload, kun je beginnen met de daadwerkelijke installatie. De installatie van mods gaat via FTP. Je hebt een FTP-client nodig om bestanden naar je server te uploaden. Als je niet weet wat FTP is en hoe het werkt, check dan deze gids: [Toegang via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)

In de map ``/gXXXXX4/7dtd-linux-exp/`` moet je een map aanmaken met de naam **Mods**. Klik hiervoor met de rechtermuisknop en kies **Create directory**.

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)

Daarna upload je de bestanden van de mod naar de mods-map:

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)

Daarmee is de installatie van de mod al klaar. De volgende keer dat je de server opstart, worden de mods automatisch geladen.

<InlineVoucher />