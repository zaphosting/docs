---
id: over-the-top-wwi-configure-spawn-settings
title: "Over the Top WWI: Spawn-instellingen configureren"
description: "Leer hoe je het spawn-gedrag op je Over the Top WWI-server configureert → Leer nu meer"
sidebar_label: Spawn-instellingen
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Spawn-instellingen in **Over the Top WWI** bepalen hoe en wanneer spelers terug het slagveld op komen. Deze instellingen hebben directe invloed op het tempo, de eerlijkheid en de flow van de match.

Door spawn-timers, respijtperiodes en respawn-gedrag aan te passen, kun je snellere gameplay creëren of juist tactische en straffende gevechtsscenario’s.

<InlineVoucher />

## Configuratie

Spawn-instellingen stel je in via het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` bestand. In dit bestand vind je de volgende parameters:

```
SpawnGracePeriod = 15
AttackerRespawnTime = 8
DefenderRespawnTime = 8
WaveSpawning = 0
WaveLegnth = 300
WaveBuildUpTime = 90
```

- `SpawnGracePeriod` bepaalt hoe lang spelers zonder straf of beperkingen kunnen spawnen aan het begin
- `AttackerRespawnTime` stelt de respawn-tijd in voor het aanvallende team
- `DefenderRespawnTime` stelt de respawn-tijd in voor het verdedigende team

- `WaveSpawning` schakelt wave-based spawns aan of uit

- `WaveLegnth` bepaalt hoe lang een spawn-wave duurt
- `WaveBuildUpTime` regelt hoe lang het duurt voordat een wave volledig gevormd is

Door deze waarden aan te passen bepaal je of spelers individueel spawnen of in gecoördineerde waves, en hoe snel ze terug het slagveld op kunnen.

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je je server. De nieuwe spawn-instellingen worden dan automatisch toegepast.

## Conclusie

Gefeliciteerd! Je hebt de spawn-instellingen op je **Over the Top WWI-server** succesvol geconfigureerd. Met deze aanpassingen kun je het gameplay-tempo finetunen en de algehele spelerervaring verbeteren.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />