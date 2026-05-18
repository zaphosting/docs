---
id: over-the-top-wwi-configure-bots
title: "Over the Top WWI: Bots Configureren"
description: "Leer hoe je bot-instellingen configureert op je Over the Top WWI server → Ontdek het nu"
sidebar_label: Bots
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Bots kunnen op een **Over the Top WWI** server gebruikt worden om lege plekken op te vullen, grootschalige gevechten te simuleren en de activiteit hoog te houden, zelfs met weinig spelers. Door de bot-instellingen aan te passen, bepaal je de moeilijkheid, het gedrag en de intensiteit van de matches.

Zo kun je alles creëren, van kleine gecontroleerde schermutselingen tot grote chaotische veldslagen met veel AI-gestuurde eenheden.

<InlineVoucher />

## Configuratie

De bot-instellingen worden geregeld in het serverconfiguratiebestand. Je kunt dit bestand openen en bewerken in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` configuratiebestand. Zoek hierin de volgende parameters:

```
AttackerBots = 45
DefenderBots = 45
AutoAssignBots = 0
BotCallinMulti = 250
SubBotForPlayer = 1
```

- `AttackerBots` bepaalt het aantal bots in het aanvallende team
- `DefenderBots` bepaalt het aantal bots in het verdedigende team
- `AutoAssignBots` verdeelt bots automatisch over de teams
- `0` → Uitgeschakeld
- `1` → Ingeschakeld

- `BotCallinMulti` regelt hoe vaak bots worden gespawned of versterkt
- `SubBotForPlayer` vervangt bots door echte spelers zodra die joinen
- `1` → Ingeschakeld
- `0` → Uitgeschakeld

### Geavanceerde bot-configuratie

Je kunt het gedrag van bots verder aanpassen met extra parameters:

```
BotWeightOff = 8
BotWeightRankers = 40
BotWeightHeavys = 20
BotWeightSnipers = 10
BotWeightStormTroops = 20
BotWeightSappers = 20
BotWeightSpecialists = 10
BotWeightMech = 10
BotWeightZombies = 0
```

Deze waarden bepalen hoe vaak bepaalde eenheidstypes gekozen worden bij het spawnen van bots. Een hogere waarde betekent dat er meer bots van dat type in de matches verschijnen.

### Wave- en schaalinstellingen

```
WaveLegnth = 300
WaveBuildUpTime = 90
AutoAssignBotsScaleMulti = 100
```

- `WaveLegnth` bepaalt hoe lang een bot-wave duurt
- `WaveBuildUpTime` geeft aan hoe lang het duurt voordat een wave volledig is opgebouwd
- `AutoAssignBotsScaleMulti` schaalt het aantal bots afhankelijk van het aantal spelers

Na het aanpassen van het `ServerConfiguration.ini` bestand, sla je het op en herstart je je server. De nieuwe bot-instellingen worden dan tijdens het spelen toegepast.

## Conclusie

Gefeliciteerd! Je hebt succesvol bots geconfigureerd op je **Over the Top WWI server**. Met deze instellingen bepaal je de intensiteit van de matches, verbeter je de speelervaring en houd je je server altijd actief.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />