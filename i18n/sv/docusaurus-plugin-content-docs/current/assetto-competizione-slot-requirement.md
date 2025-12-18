---
id: assetto-competizione-slot-requirement
title: "Assetto Corsa Competizione: Krav för Bilplatser"
description: "Upptäck hur du låser upp fler än 10 platser i Assetto Corsa genom att uppfylla viktiga krav för bättre gameplay → Läs mer nu"
sidebar_label: Krav för Bilplatser
services:
  - gameserver-assetto-competizione
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I Assetto Corsa kan du använda 10 platser utan några extra ändringar. Men för att använda fler än 10 platser måste vissa krav uppfyllas. Dessa krav ställs in under "**Configs**" och där måste filen "**settings.json**" redigeras.

![](https://screensaver01.zap-hosting.com/index.php/s/QbA5ZaeFywt974J/preview)

<InlineVoucher />

## Förberedelse och Platstak

För att använda fler än 10 platser måste värdena **"trackMedalsRequirement": X,** och **"safetyRatingRequirement": X,** justeras.
Hur högt dessa ska sättas kan räknas ut med följande formel. 
Samma formel kan sedan användas för att räkna ut önskade värden för trackMedalRequirement och safetyRatingRequirement.

```
Slots = safetyRating / 4 + trackMedals + 10 
```

### Lista över möjliga kombinationer

Nedan visas en lista med möjliga kombinationer som kan användas för att kunna använda önskat antal platser.
Det finns också mer än en möjlig lösning för att uppnå nödvändiga krav för platser.
Därför visas olika alternativ i listan.

:::info
Observera att för safetyRatingRequirement och trackMedalRequirement har **minimikraven** angetts. Det går såklart också att hosta färre platser med högre värden för safetyRatingRequirement och trackMedalRequirement.
:::

Platser | safetyRatingRequirement | trackMedalRequirement
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