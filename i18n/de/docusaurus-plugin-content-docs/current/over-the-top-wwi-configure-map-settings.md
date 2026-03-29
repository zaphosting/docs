---
id: over-the-top-wwi-configure-map-settings
title: "Over the Top WWI: Zufällige Karten-Einstellungen konfigurieren"
description: "Lerne, wie du die Einstellungen zur zufälligen Kartengenerierung auf deinem Over the Top WWI Gameserver konfigurierst → Jetzt mehr erfahren"
sidebar_label: Zufällige Karten
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Einstellungen für zufällige Karten in **Over the Top WWI** ermöglichen es dir, Karten dynamisch mit unterschiedlichem Terrain, Vegetation und Umweltelementen zu generieren. Das erhöht die Wiederspielbarkeit enorm und sorgt für einzigartige Schlachtfelder bei jedem Match.

Durch das Anpassen dieser Werte kannst du die Kartengröße, die Komplexität des Terrains und die Anzahl von Objekten wie Wäldern, Felsen oder Gebäuden steuern.

<InlineVoucher />

## Konfiguration

Die Einstellungen für zufällige Karten werden in der Server-Konfigurationsdatei vorgenommen. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. In dieser Datei findest du folgende Parameter:

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

- `RandomMapSizee` definiert die Gesamtgröße der generierten Karte  
- `RandomFields`, `RandomForests`, `RandomBush`, `RandomRocks` steuern, wie viele natürliche Elemente auf der Karte erscheinen  
- `RandomCivBuildings` und `RandomMilBuildings` legen die Anzahl ziviler und militärischer Gebäude fest  
- `RandomSingleTrees` kontrolliert die Platzierung einzelner Bäume  
- `RandomNoiseSetting`, `RandomFrequency`, `RandomLacunarity` und `RandomPersistence` beeinflussen die Terrain-Generierung und Variation  
- `RandomWaterHeight` definiert den Wasserspiegel  
- `RandomMaxTerrainHeight` steuert die Höhe und Erhebung des Terrains  
- `RandomDesert` bestimmt, ob Wüstenumgebungen erscheinen können  

- `0` → Deaktiviert  
- `1` → Aktiviert  
- `2` → Zufällig  

Passe diese Werte an, um verschiedene Kartentypen zu erstellen – von dichten Wäldern über offene Schlachtfelder bis hin zu abwechslungsreichen Landschaften.

Nachdem du die `ServerConfiguration.ini` angepasst hast, speichere die Datei und starte deinen Gameserver neu. Die neuen Karteneinstellungen werden angewendet, sobald eine zufällige Karte generiert wird.

## Fazit

Glückwunsch! Du hast erfolgreich die Einstellungen für zufällige Karten auf deinem **Over the Top WWI Gameserver** konfiguriert. So kannst du einzigartige und dynamische Schlachtfelder erschaffen, die die Wiederspielbarkeit und das Spielerlebnis verbessern.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />