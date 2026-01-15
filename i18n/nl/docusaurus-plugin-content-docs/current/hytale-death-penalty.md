---
id: hytale-death-penalty
title: "Hytale: Death Penalty Aanpassen"
description: "Ontdek hoe de death penalty werkt op jouw Hytale server → Leer er nu meer over"
sidebar_label: Death Penalty Aanpassen
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

Op een Hytale server bepaalt de **death penalty** hoe spelers worden beïnvloed als ze sterven. Deze instelling regelt in welke mate voortgang, items, duurzaamheid of andere gameplay-consequenties worden toegepast na een dood.

:::info Early Access Notice

Hytale is uitgebracht op 13 januari 2026 en is momenteel beschikbaar in Early Access. Omdat het spel nog in actieve ontwikkeling is, kunnen serversoftware, configuratiebestanden, modding-ondersteuning en installatieprocessen in de loop van de tijd blijven veranderen.

:::

<InlineVoucher />


## Beschikbare Death Penalty Instellingen
De death penalty instellingen bepalen hoe het overlijden van spelers invloed heeft op hun inventaris en itemduurzaamheid. Met deze opties kun je instellen of items behouden blijven, gedeeltelijk verloren gaan of volledig vallen, en hoeveel slijtage items oplopen bij de dood.

De volgende configuratie-opties zijn beschikbaar:

**ItemsLossMode**  
Deze instelling bepaalt het algemene gedrag van itemverlies bij de dood van een speler.  
Ondersteunde waarden:

- `None` – Spelers houden hun volledige inventaris na de dood
- `All` – Alle items worden gedropt bij de dood
- `Configured` – Itemverlies wordt bepaald door percentage-gebaseerde instellingen

**ItemsAmountLossPercentage**  
Deze waarde wordt alleen toegepast als `ItemsLossMode` is ingesteld op `Configured`.  
Het bepaalt hoeveel procent van elke itemstack wordt verwijderd bij de dood.  
Bijvoorbeeld, een waarde van `50.0` betekent dat de helft van elke stack verloren gaat.

**ItemsDurabilityLossPercentage**  
Deze instelling regelt hoeveel duurzaamheid items verliezen als een speler sterft.  
De waarde is een percentage van de huidige duurzaamheid van het item en zorgt ervoor dat de dood gevolgen heeft zonder dat items volledig verdwijnen.

Samen bieden deze instellingen fijne controle over hoe streng of mild de death penalty op de server is.  
Een zorgvuldige afstemming zorgt voor een gebalanceerde ervaring die past bij de gewenste moeilijkheidsgraad en speelstijl van de server.



## Death penalty configuratie

De death penalty instellingen vind je in het hoofdconfiguratiebestand `config.json` van je server. Deze waarden worden ingeladen bij het opstarten van de server en gelden voor alle spelers.

In het configuratiebestand maken de death-gerelateerde instellingen deel uit van de gameplayconfiguratie. Om de death penalty toe te voegen of aan te passen, zoek je de volgende regel in `config.json`:

```
"GameplayConfig": "Default",
```

Deze regel definieert het actieve gameplayconfiguratieprofiel. De death penalty configuratie plaats je direct onder deze regel als een nieuw blok. Zodra je het gevonden hebt, voeg je het death-configuratieblok toe om te bepalen hoe respawn en itemverlies worden afgehandeld:

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

Het volgende voorbeeld toont een typische configuratie waarbij itemverlies en duurzaamheidverlies gedeeltelijk worden toegepast bij de dood:

```
{
  "ItemsLossMode": "Configured",
  "ItemsAmountLossPercentage": 50.0,
  "ItemsDurabilityLossPercentage": 25.0
}
```

In deze configuratie gebruikt de server de `Configured` verliesmodus, wat betekent dat itemverlies wordt geregeld via percentages.  
Als een speler sterft, gaat de helft van elke itemstack verloren en verliezen items 25 procent van hun huidige duurzaamheid.

Als er helemaal geen itemverlies mag zijn, kan de verliesmodus op `None` worden gezet, waarbij de percentagewaarden worden genegeerd:

```
{
  "ItemsLossMode": "None"
}
```

Voor een straffere ervaring waarbij alle items bij de dood worden gedropt, kan de configuratie als volgt worden ingesteld:

```
{
  "ItemsLossMode": "All"
}
```

Na het aanpassen van `config.json` moet de server opnieuw worden gestart om de wijzigingen door te voeren.  
We raden aan om het gedrag in-game te controleren na de herstart om zeker te zijn dat de death penalty overeenkomt met de gewenste moeilijkheid.



## Conclusie

Met de death penalty ingesteld heb je nu een duidelijk overzicht van hoe het overlijden van spelers wordt afgehandeld op jouw Hytale server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂



<InlineVoucher />