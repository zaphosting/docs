---
id: assetto_competizione_slot_requirement
title: Assetto Corsa Competizione: Car Slot Voraussetzungen
description: Informationen, wie du deine Car Slots erhöhst und korrekt nutzen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Car Slot Voraussetzungen
---

## Allgemeine Informationen

Bei Assetto Corsa lassen sich 10 Slots ohne weitere Änderung korrekt nutzen. 
Allerdings müssen für die Nutzung von mehr als 10 Slots bestimmte Voraussetzungen erfüllt sein.
Diese Voraussetzungen werden unter "**Configs**" eingestellt. Dort wird die "**settings.json**" bearbeitet

![](https://screensaver01.zap-hosting.com/index.php/s/mabZax4a4qZfcoD/preview)

## Voraussetzungen und Slot Limits

Um mehr als 10 Slots nutzen zu können, müssen die Werte **"trackMedalsRequirement": X,** und **"safetyRatingRequirement": X,** angepasst werden.
Wie hoch diese eingestellt werden müssen, lässt sich durch folgende Formel berechnen. 
Die gleiche Formel kann dann auf die gewünschten Werte trackMedalRequirement und safetyRatingRequirement umgestellt werden.

```
Slots = safetyRating / 4 + trackMedals + 10 
```

### Liste möglicher Kombinationen

Im nachfolgenden wird eine Liste mit möglichen Kombinationen angezeigt um die gewünschte Slotanzahl nutzen zu können.
Hierbei gibt es auch mehr als eine mögliche Lösung, um die nötige Slot Voraussetzung zu erreichen.
Aus diesem Grund wurden in der Liste auch die verschiedenen Möglichkeiten dargestellt.

> Beachte, dass hierbei für safetyRatingRequirement und trackMedalRequirement die **mindest** Anforderungen eingetragen wurden. Es ist natürlich auch möglich mit größeren Werten bei safetyRatingRequirement und trackMedalRequirement weniger Slots zu hosten.

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
