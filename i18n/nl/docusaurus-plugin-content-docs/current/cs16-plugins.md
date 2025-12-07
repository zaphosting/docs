---
id: cs16-plugins
title: "CS 1.6: Installeer plugins op je eigen server"
description: "Ontdek hoe je jouw Counter-Strike 1.6 server kunt verbeteren met AMXmodX en Metamod voor geavanceerde aanpassingen en beheer → Leer het nu"
sidebar_label: Plugins Installeren
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs16-plugins.json';

## Introductie

**AMXmodX** en **Metamod** zijn nodig om plugins te gebruiken op een Counter-Strike 1.6 server. Dit zijn twee Half Life extensies waarmee je je server nog meer kunt customizen dan normaal. Denk bijvoorbeeld aan het gebruik van plugins en uitgebreidere serveradministratie.

<InlineVoucher />

## AMXmodX / Metamod installatie

### Voorbereiding

Allereerst heb je de daadwerkelijke extensies nodig. Deze kun je downloaden van [amxmodx.org](https://amxmodx.org/downloads-new.php). Gebruik altijd de nieuwste versies (**stable**), zodat ze volledig functioneel en compatibel blijven.

![img](https://screensaver01.zap-hosting.com/index.php/s/SxJaFb7Cz79c7ER/preview)

Je hebt de Linux pakketten **AMX Mod X Base, Counter-Strike Addon en Metamod** nodig. Die kun je daar downloaden. Daarna zouden er drie gecomprimeerde bestanden gedownload moeten zijn. Pak deze uit op je computer. Je krijgt dan een **addons** map met daarin een **amxmodx** en **metamod** map:

![](https://screensaver01.zap-hosting.com/index.php/s/LQdb93T39YApA6B/preview)

### Installatie

Als bovenstaande stappen voltooid zijn, is het tijd voor de daadwerkelijke installatie. De bestanden moeten via FTP naar je server geüpload worden. Je hebt een FTP-client nodig om bestanden naar je server te uploaden. Weet je niet wat FTP is of hoe het werkt? Check dan deze gids: [Toegang via FTP](gameserver-ftpaccess.md)

Upload nu de **addons** map naar de hoofdmap van je server. De bestandsstructuur zou er dan zo uit moeten zien:

![](https://screensaver01.zap-hosting.com/index.php/s/A5zqJ9GxL47tCrW/preview)

De setup van **AMXmodX** en **Metamod** is nu klaar. Je kunt in het spel verbinden met je server en in de console het commando ``amxx version`` gebruiken om te checken of AMX succesvol is geïnstalleerd. De output zou er zo uit moeten zien:

```
AMX Mod X 1.8.2
Authors: ....
Compiled: Feb 14 2013, 00:56:31
URL:http://www.amxmodx.org/
Core mode: JIT
```

Als de melding **Unknown command** verschijnt, is er iets misgegaan tijdens de installatie.

## Plugins installeren

### Voorbereiding

Als de setup van **AMXmodX** en **Metamod** compleet en werkend is, kun je beginnen met het installeren van plugins. Download eerst de plugins die je op je server wilt installeren. Een grote selectie plugins vind je op [amxmodx.org](https://www.amxmodx.org/compiler.php). Daar zijn door de jaren heen talloze plugins gepubliceerd en er worden regelmatig nieuwe toegevoegd. Je hebt het **.amxx** bestand nodig van de betreffende plugins.

### Installatie

Als je de gewenste plugins hebt gedownload, kun je beginnen met de daadwerkelijke installatie. Ook dit gaat via FTP. Upload de pluginbestanden naar de plugins map onder ``../addons/amx``.

![](https://screensaver01.zap-hosting.com/index.php/s/FG2ocNpWCRManSd/preview)

De volgende keer dat de server opstart, worden de geüploade plugins automatisch geladen.

## Populaire Plugins

Ben je nog op zoek naar de perfecte plugins voor jouw server?  
Blader door onze zorgvuldig samengestelde lijst met de populairste en meest aanbevolen plugins om je gameplay te verbeteren en je server die finishing touch te geven die ‘ie verdient. Laat je inspireren en vind precies de toevoegingen die bij jouw project passen.

<SearchableItemList items={items} />

## Conclusie

Als je alle stappen hebt gevolgd, heb je AMXmodX / Metamod en je gewenste plugins succesvol geïnstalleerd. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />