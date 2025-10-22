---
id: assetto-competizione-slot-requirement
title: "Assetto Corsa Competizione: Voraussetzungen für Car Slots"
description: "Entdecke, wie du in Assetto Corsa mehr als 10 Slots freischaltest, indem du wichtige Voraussetzungen erfüllst für ein besseres Gameplay → Jetzt mehr erfahren"
sidebar_label: Voraussetzungen für Car Slots
services:
  - gameserver-assetto-competizione
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In Assetto Corsa können standardmäßig 10 Slots ohne weitere Anpassungen genutzt werden. Um jedoch mehr als 10 Slots zu verwenden, müssen bestimmte Voraussetzungen erfüllt sein. Diese Voraussetzungen werden unter "**Configs**" festgelegt, wo die Datei "**settings.json**" bearbeitet werden muss.

![](https://screensaver01.zap-hosting.com/index.php/s/QbA5ZaeFywt974J/preview)

<InlineVoucher />

## Vorbereitung und Slot-Limits

Um mehr als 10 Slots zu nutzen, müssen die Werte **"trackMedalsRequirement": X,** und **"safetyRatingRequirement": X,** angepasst werden.
Wie hoch diese Werte gesetzt werden müssen, lässt sich mit folgender Formel berechnen. 
Mit derselben Formel kannst du dann die gewünschten Werte für trackMedalRequirement und safetyRatingRequirement ermitteln.

```
Slots = safetyRating / 4 + trackMedals + 10 
```

### Liste möglicher Kombinationen

Im Folgenden findest du eine Liste möglicher Kombinationen, mit denen du die gewünschte Anzahl an Slots freischalten kannst.
Es gibt dabei nicht nur eine Lösung, sondern mehrere Wege, um die nötigen Voraussetzungen für die Slots zu erfüllen.
Deshalb sind in der Liste auch verschiedene Optionen aufgeführt.

:::info
Beachte, dass bei safetyRatingRequirement und trackMedalRequirement die **minimalen** Voraussetzungen angegeben sind. Es ist natürlich auch möglich, weniger Slots mit höheren Werten für safetyRatingRequirement und trackMedalRequirement zu hosten.
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