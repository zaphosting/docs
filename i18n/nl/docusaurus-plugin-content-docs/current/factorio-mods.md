---
id: factorio-mods
title: "Factorio: Mods/DLC’s installeren op je Factorio-server"
description: "Ontdek hoe je je Factorio-ervaring verbetert door DLC’s te activeren en mods toe te voegen voor een gepersonaliseerde game → Leer het nu"
sidebar_label: Mods/DLC’s installeren
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/factorio-mods.json';

## Introductie

Factorio heeft native modding-ondersteuning, waardoor je makkelijk allerlei mods kunt toevoegen aan je game en server, naast de aangekochte DLC’s. In deze gids leggen we uit hoe je DLC’s activeert en mods installeert op je client en Factorio-server.

<InlineVoucher />

## Voorbereiding

Je kunt de [officiële Factorio mods](https://mods.factorio.com/) website bezoeken om mods te ontdekken. Op deze site vind je een enorme bibliotheek met gratis mods gemaakt door de community, verdeeld over allerlei categorieën.

:::tip
Check altijd of de mods die je downloadt compatible zijn met de versie van jouw Factorio-server.
:::

## DLC’s activeren

Met de Factorio 2.0 update kwam de allereerste DLC: Space Age. Hiervoor is er een nieuwe optie toegevoegd in het webinterface paneel waarmee je de DLC aan of uit kunt zetten.

<YouTube videoId="i9CuAsCxUsk" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BRa5saY3L76xe5F/preview" title="Factorio Space Age DLC activeren" description="Snap je het beter als je het in actie ziet? Wij fixen het! Check onze video die alles helder uitlegt. Of je nu haast hebt of liever op je eigen tempo info tot je neemt, dit helpt je verder!"/>

Ga naar het webinterface paneel van je product en open de **Instellingen** sectie. Scroll naar beneden en zoek de optie **Space Age DLC**, deze staat standaard aan.

![](https://screensaver01.zap-hosting.com/index.php/s/T5G5GrEzwoxM3Xk/preview)

Zet de optie aan of uit en klik op de groene **Opslaan** knop onderaan de pagina. Je hebt nu succesvol een Factorio DLC geactiveerd.

## Mods toevoegen & uploaden

Heb je je favoriete mods gedownload? Dan moet je ze via FTP uploaden naar je Factorio-server. Gebruik onze [FTP Toegang](gameserver-ftpaccess.md) handleiding als je hulp nodig hebt met verbinden.

:::note
De server moet uitstaan voordat je mods toevoegt of wijzigt, anders kunnen je aanpassingen verloren gaan.
:::

Ga vervolgens naar deze map en upload je mods, die in `.zip` formaat moeten zijn:

```
../factorio/saves/mods
```

![](https://screensaver01.zap-hosting.com/index.php/s/APFEnmg29jBCFKn/preview)

:::tip
Mods moeten gesynchroniseerd zijn tussen client en server. Factorio regelt dit makkelijk: zodra je voor het eerst na het aanpassen van mods op de server joinet, vraagt je game automatisch om de mods te synchroniseren.
:::

Start daarna je server opnieuw op om de mods automatisch te activeren en installeren. Loop je tegen fouten aan, zoals dat de server automatisch stopt? Check dan de **Informatie->Event Log** sectie in je webinterface voor foutmeldingen. Vaak komt dit door een versie mismatch.

## Populaire Mods

Nog op zoek naar de perfecte mods voor je server? Bekijk onze zorgvuldig samengestelde lijst met de populairste en meest aanbevolen mods om je gameplay te boosten en je server die finishing touch te geven. Laat je inspireren en vind precies wat bij jouw project past.

<SearchableItemList items={items} />

## Conclusie

Gefeliciteerd, je hebt succesvol mods geïnstalleerd op je Factorio-server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />