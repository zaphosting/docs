---
id: redm-gamebuild
title: "RedM: DLC Content inschakelen"
description: "Ontdek hoe je specifieke DLC-versies afdwingt op je RedM-server voor de nieuwste maps, voertuigen en content → Leer het nu"
sidebar_label: DLC game build inschakelen
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Met het afdwingen van een game build kun je een specifieke DLC-versie op je server forceren, zodat je kunt spelen met de nieuwste maps, kleding, voertuigen en meer!

<InlineVoucher />

## Beschikbare Gamebuilds

Hier is een overzicht van alle beschikbare DLC’s en hun Build IDs:

| Build ID |                          Build Naam                          |
| :------: | :----------------------------------------------------------: |
|   1311   | Mid 2020 update, niet compatibel met Red Dead Online-licenties. |
|   1355   | December 2020 update, werkt met nieuwere game-edities zoals RDO. |
|   1436   | Juli 2021 update, bevat nieuwe content van de Blood Money DLC. |
|   1491   |       September 2022 update, beperkte content/wijzigingen.        |

## Build inschakelen

Om extra DLC-content zoals Blood Money te gebruiken, moet je dit instellen in het serverconfiguratiebestand van je server. Open hiervoor je txAdmin-interface en ga naar de CFG Editor. Pas nu eenvoudig je gewenste game build aan via de `sv_enforceGameBuld`-command met één van de builds uit de tabel.

![img](https://screensaver01.zap-hosting.com/index.php/s/YoRFMoHxdSNydoD/preview)

## Conclusie

Zodra je je keuze hebt gemaakt, herstart je je RedM-server. Je server zal nu starten met de opgegeven DLC build. Je hebt succesvol een gamebuild ingesteld voor je RedM game server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />