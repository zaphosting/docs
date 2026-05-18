---
id: over-the-top-wwi-configure-map-settings
title: "Over the Top WWI: Random Map Instellingen Configureren"
description: "Leer hoe je de instellingen voor willekeurige kaartgeneratie op je Over the Top WWI server configureert → Leer nu meer"
sidebar_label: Willekeurige Kaarten
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Met de random map instellingen in **Over the Top WWI** kun je dynamisch kaarten genereren met verschillende terreinen, begroeiing en omgevingskenmerken. Dit verhoogt de replaywaarde enorm en zorgt voor unieke slagvelden bij elke match.

Door deze waarden aan te passen, bepaal je de kaartgrootte, terreincomplexiteit en het aantal objecten zoals bossen, rotsen of gebouwen.

<InlineVoucher />

## Configuratie

De random map instellingen stel je in via het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` configuratiebestand. Zoek hierin de volgende parameters:

```
RandomMapSizee = 450
RandomFields = 8.25
RandomCivBuildings = 0
RandomMilBuildings = 0
RandomForests = 8.5
RandomSingleTrees = 1.1
RandomBush = 5
RandomRocks = 1.1
RandomNoiseSetting = 0
RandomWaterHeight = 12.25
RandomMaxTerrainHeight = 26
RandomFrequency = 5
RandomLacunarity = 3
RandomPersistence = 32
RandomDesert = 0
```

- `RandomMapSizee` bepaalt de totale grootte van de gegenereerde kaart  
- `RandomFields`, `RandomForests`, `RandomBush`, `RandomRocks` regelen hoeveel natuurlijke elementen er op de kaart verschijnen  
- `RandomCivBuildings` en `RandomMilBuildings` bepalen het aantal civiele en militaire gebouwen  
- `RandomSingleTrees` regelt de plaatsing van losse bomen  
- `RandomNoiseSetting`, `RandomFrequency`, `RandomLacunarity` en `RandomPersistence` beïnvloeden de terrein generatie en variatie  
- `RandomWaterHeight` bepaalt het waterniveau  
- `RandomMaxTerrainHeight` regelt de hoogte en het reliëf van het terrein  
- `RandomDesert` bepaalt of woestijnomgevingen kunnen verschijnen  

- `0` → Uitgeschakeld  
- `1` → Ingeschakeld  
- `2` → Willekeurig  

Pas deze waarden aan om verschillende soorten kaarten te maken, van dichte bossen tot open slagvelden of gevarieerde terreinen.

Sla na het aanpassen van het `ServerConfiguration.ini` bestand je wijzigingen op en herstart je server. De nieuwe kaartinstellingen worden toegepast zodra er een willekeurige kaart wordt gegenereerd.

## Conclusie

Gefeliciteerd! Je hebt succesvol de random map instellingen op je **Over the Top WWI server** geconfigureerd. Zo creëer je unieke en dynamische slagvelden die de replaywaarde en game-ervaring verbeteren.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />