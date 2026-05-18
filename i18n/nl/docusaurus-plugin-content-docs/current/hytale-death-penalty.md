---
id: hytale-death-penalty
title: "Hytale: Death Penalty Aanpassen"
description: "Ontdek hoe de death penalty werkt op jouw Hytale server → Leer er nu meer over"
sidebar_label: Death Penalty Aanpassen
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Intro

Op een Hytale server bepaalt de **death penalty** hoe spelers worden beïnvloed als ze sterven. Deze instelling regelt in hoeverre voortgang, items, duurzaamheid of andere gameplay-consequenties worden toegepast na een dood.

:::info Early Access Notice

Hytale is uitgebracht op 13 januari 2026 en is momenteel in Early Access. Omdat het spel nog volop in ontwikkeling is, kunnen server software, configuratiebestanden, modding support en installatieprocessen in de loop van de tijd veranderen.

:::

<InlineVoucher />


## Beschikbare Death Penalty Instellingen
De death penalty instellingen bepalen hoe het overlijden van spelers invloed heeft op hun inventaris en item duurzaamheid. Met deze opties kun je instellen of items behouden blijven, deels verloren gaan of volledig vallen, en hoeveel slijtage items oplopen bij de dood.

De volgende configuratie-opties zijn beschikbaar:

**ItemsLossMode**  
Deze instelling bepaalt het algemene gedrag van itemverlies bij de dood van een speler.  
Ondersteunde waarden:

- `None` – Spelers houden hun volledige inventaris na de dood
- `All` – Alle items worden gedropt bij de dood
- `Configured` – Itemverlies wordt bepaald door percentage-gebaseerde instellingen

**ItemsAmountLossPercentage**  
Deze waarde wordt alleen toegepast als `ItemsLossMode` op `Configured` staat.  
Het bepaalt hoeveel procent van elke itemstapel verloren gaat bij de dood.  
Bijvoorbeeld, een waarde van `50.0` betekent dat de helft van elke stapel verloren gaat.

**ItemsDurabilityLossPercentage**  
Deze instelling regelt hoeveel duurzaamheid items verliezen als een speler sterft.  
De waarde is een percentage van de huidige duurzaamheid van het item en zorgt ervoor dat de dood gevolgen heeft zonder dat items volledig verdwijnen.

Samen bieden deze instellingen fijne controle over hoe streng of mild de death penalty op jouw server is.  
Een goede afstemming zorgt voor een gebalanceerde ervaring die past bij de gewenste moeilijkheidsgraad en speelstijl.



## Death penalty configuratie

De death penalty instellingen vind je in het hoofd `config.json` bestand van je server. Deze waarden worden ingeladen bij het opstarten van de server en gelden voor alle spelers.

In het configuratiebestand maken de death-gerelateerde instellingen deel uit van de gameplay configuratie. Om de death penalty toe te voegen of aan te passen, zoek je de volgende regel in `config.json`:

```
"GameplayConfig": "Default",
```

Deze regel geeft het actieve gameplay configuratieprofiel aan. De death penalty configuratie plaats je direct onder deze regel als een nieuw blok. Voeg het volgende toe om te bepalen hoe respawn en itemverlies worden afgehandeld:

```
"Death": {
   "RespawnController": {
     "Type": "HomeOrSpawnPoint"
   },
   "ItemsLossMode": "Configured",
   "ItemsAmountLossPercentage": 50.0,
   "ItemsDurabilityLossPercentage": 25.0
 },
```

Hieronder een voorbeeld van een typische configuratie waarbij itemverlies en duurzaamheid deels worden toegepast bij de dood:

```
{
  "ItemsLossMode": "Configured",
  "ItemsAmountLossPercentage": 50.0,
  "ItemsDurabilityLossPercentage": 25.0
}
```

In deze configuratie gebruikt de server de `Configured` verliesmodus, wat betekent dat itemverlies wordt geregeld via percentages.  
Als een speler sterft, gaat de helft van elke itemstapel verloren en verliezen items 25% van hun huidige duurzaamheid.

Wil je helemaal geen itemverlies, zet dan de verliesmodus op `None`. De percentagewaarden worden dan genegeerd:

```
{
  "ItemsLossMode": "None"
}
```

Voor een straffere ervaring waarbij alle items vallen bij de dood, gebruik je:

```
{
  "ItemsLossMode": "All"
}
```

Na het aanpassen van `config.json` moet de server opnieuw worden gestart om de wijzigingen door te voeren.  
We raden aan om na de herstart in-game te checken of de death penalty werkt zoals je wilt.



## Conclusie

Met de death penalty ingesteld heb je nu duidelijk in beeld hoe het sterven van spelers op jouw Hytale server wordt afgehandeld. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂



<InlineVoucher />