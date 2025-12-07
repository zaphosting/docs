---
id: assetto-competizione-slot-requirement
title: "Assetto Corsa Competizione: Vereiste voor Car Slots"
description: "Ontdek hoe je meer dan 10 slots in Assetto Corsa kunt vrijspelen door aan belangrijke vereisten te voldoen voor een betere game-ervaring → Leer het nu"
sidebar_label: Vereiste voor Car Slots
services:
  - gameserver-assetto-competizione
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

In Assetto Corsa kun je standaard 10 slots gebruiken zonder extra aanpassingen. Wil je echter meer dan 10 slots gebruiken, dan moet je aan bepaalde vereisten voldoen. Deze vereisten vind je onder "**Configs**" en daar moet het bestand "**settings.json**" worden aangepast.

![](https://screensaver01.zap-hosting.com/index.php/s/QbA5ZaeFywt974J/preview)

<InlineVoucher />

## Voorbereiding en Slot Limieten

Om meer dan 10 slots te gebruiken, moeten de waarden **"trackMedalsRequirement": X,** en **"safetyRatingRequirement": X,** worden aangepast.
Hoe hoog deze moeten zijn, kun je berekenen met de volgende formule. 
Met dezelfde formule kun je ook de gewenste waarden voor trackMedalRequirement en safetyRatingRequirement bepalen.

```
Slots = safetyRating / 4 + trackMedals + 10 
```

### Overzicht van mogelijke combinaties

Hieronder vind je een lijst met mogelijke combinaties die je kunt gebruiken om het gewenste aantal slots te kunnen gebruiken.
Er is meer dan één oplossing om aan de vereiste voor slots te voldoen.
Daarom worden de verschillende opties ook in de lijst weergegeven.

:::info
Let op: voor safetyRatingRequirement en trackMedalRequirement zijn de **minimale** vereisten ingevuld. Het is natuurlijk ook mogelijk om minder slots te hosten met hogere waarden voor safetyRatingRequirement en trackMedalRequirement.
:::

Slots | safetyRatingRequirement | trackMedalRequirement
-----|-------|---------
10-16 | 24 | 0
18 | 40 | 0
18 | 24 | 2
20 | 40 | 0
20 | 30 | 3
22 | 50 | 0
22 | 40 | 2
24 | 60 | 0
24 | 50 | 2
26 | 70 | 0
26 | 60 | 1
28 | 80 | 0
28 | 70 | 1
30 | 90 | 0
30 | 80 | 1

<InlineVoucher />