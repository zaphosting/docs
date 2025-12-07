---
id: fivem-gamebuild
title: "FiveM: DLC Content Inschakelen"
description: "Ontdek hoe je specifieke DLC-versies afdwingt op je FiveM-server om toegang te krijgen tot de nieuwste maps, voertuigen en content → Leer het nu"
sidebar_label: DLC game build inschakelen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Game build afdwingen betekent dat je een specifieke DLC-versie op je server forceert, zodat je kunt spelen met de nieuwste maps, kleding, voertuigen en meer!

<InlineVoucher />

## Beschikbare Gamebuilds

Hier is een overzicht van alle beschikbare DLC’s en hun Build IDs:

| Build ID |        Build Naam         |
| :------: | :-----------------------: |
|   2060   | Los Santos Summer Special |
|   2189   |        Cayo Perico        |
|   2372   |         Tuner DLC         |
|   2545   |       The Contract        |
|   2699   | The Criminal Enterprises  |
|   2802   |   Los Santos Drug Wars    |
|   2944   |  San Andreas Mercenaries  |
|   3095   |       The Chop Shop       |
|   3258   |  Bottom Dollar Bounties   |
|   3407   |    Agents of Sabotage     |
|   3570   |        Money Fronts       |



## Build inschakelen

Om extra DLC-content zoals Cayo Perico, de Tuner DLC of Los Santos Summer Special te gebruiken, moet je dit instellen in de configuratie van je server. Open hiervoor je txAdmin-interface en ga naar de FXServer-instellingen.

![](https://screensaver01.zap-hosting.com/index.php/s/HxmnfPEdcDJgZLX/preview)

Voeg nu simpelweg je gewenste gamebuild toe in het veld **Additional Arguments** via het set-commando, waarbij je `BUILD_ID_CHOICE` vervangt door een ID uit de tabel:

```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```



## Conclusie

Als je je keuze hebt gemaakt, herstart je je FiveM-server. Je server start nu op met de opgegeven DLC build. Je hebt succesvol een gamebuild ingesteld voor je FiveM-gameserver. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />