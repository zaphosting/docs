---
id: valheim-plugins-bepinex
title: "Valheim: Plugins installeren op je server (BepInEx)"
description: "Ontdek hoe je je Valheim-ervaring kunt verbeteren met BepInEx-plugins en nieuwe moddingmogelijkheden kunt ontgrendelen → Leer er nu meer over"
sidebar_label: Plugins installeren (BepInEx)
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/valheim-plugins.json';

## Introductie
BepInEx is een superpopulair open-source plugin- en moddingframework waarmee je mods kunt toevoegen aan games die normaal gesproken geen officiële modding ondersteunen. In deze gids laten we je zien hoe je plugins via BepInEx op Valheim installeert.

<InlineVoucher />

## BepInEx Gameversie

Om **BepInEx**-compatibele plugins in Valheim te gebruiken, moet je eerst de **Valheim Plus** gameversie op je server installeren. We hebben ook een standalone **Valheim BepInEx** gameversie, maar we raden aan om Valheim Plus te installeren omdat deze alles al bevat. Dit kan je makkelijk doen via onze gameserver game switcher functie, lees er meer over in onze [Game Change](gameserver-gameswitch.md) gids.

:::info
Valheim Plus moet ook lokaal op je PC geïnstalleerd zijn. Hier vind je de download voor Valheim Plus: [Valheim Plus Download](https://www.nexusmods.com/valheim/mods/4).
:::

## Plugins Uploaden

Begin met het zoeken naar mods die compatibel zijn met BepInEx en die je aan je server wilt toevoegen. Meestal staat er op de downloadpagina informatie over de compatibiliteit van de plugin.

:::important
De plugins die je gebruikt moeten **BepInEx**-compatibel zijn, anders werken ze niet!
:::

Als je een mod hebt gevonden, maak dan verbinding met je gameserver via FTP. Lees onze [Toegang via FTP](gameserver-ftpaccess.md) gids om te leren hoe je dit doet.

Met je FTP-client klaar, navigeer je naar de volgende map:
```
../valheim-linux-plus/BepInEx/plugins
```

In deze map plaats je de mods die je hebt gedownload. Dit zijn meestal bestanden met de extensie `.dll`.

:::note
De server moet gestopt zijn voordat je mods toevoegt of aanpast, anders kunnen je wijzigingen verloren gaan.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/d8gTeFiGXTsxHwz/preview)

## Server Starten

Als je de gewenste plugins hebt geüpload, start je je server gewoon weer op.

:::info
Sommige plugins moeten ook client-side op je PC geïnstalleerd worden. Check de info op de website van de plugin om te zien of dit nodig is.
:::

Je hebt nu succesvol nieuwe BepInEx-plugins geïnstalleerd op je Valheim gameserver!

## Populaire Plugins

Ben je nog op zoek naar de perfecte plugins voor je server?

Blader door onze zorgvuldig samengestelde lijst met de populairste en meest aanbevolen plugins om je gameplay te verbeteren en je server die finishing touch te geven die ‘ie verdient. Laat je inspireren en vind precies de toevoegingen die bij jouw project passen.

<SearchableItemList items={items} />

<InlineVoucher />