---
id: over-the-top-wwi-configure-build-and-resources
title: "Over the Top WWI: Baupunkte und Ressourcen konfigurieren"
description: "Lerne, wie du Baupunkte, Kanonen und Ressourcenlimits auf deinem Over the Top WWI Gameserver einstellst → Jetzt mehr erfahren"
sidebar_label: Baupunkte & Ressourcen
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Baupunkte und Ressourceneinstellungen in **Over the Top WWI** steuern, wie viele Gebäude, Verteidigungen und Ausrüstungen Spieler während eines Matches platzieren können. Diese Werte beeinflussen direkt das Gameplay-Balancing, besonders in Modi, in denen Bauen und Befestigungen eine zentrale Rolle spielen.

Durch das Anpassen dieser Einstellungen kannst du ein defensiveres Gameplay mit umfangreichen Befestigungen schaffen oder Ressourcen begrenzen, um schnellere und aggressivere Matches zu ermöglichen.

<InlineVoucher />

## Konfiguration

Baue- und Ressourceneinstellungen werden in der Server-Konfigurationsdatei festgelegt. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. In dieser Datei findest du folgende Parameter:

```
AttackerBuildPoints = 5000
DefenderBuildPoints = 5000
AttackerCannonPoints = 250
DefenderCannonPoints = 250
SapperBPRegenAmount = 50
SapperCannonPRegenAmount = 5
SapperPropBPRegenTime = 15
CannonPropPRegenTime = 15
```

- `AttackerBuildPoints` und `DefenderBuildPoints` legen fest, wie viele Baupunkte jedes Team zur Verfügung hat

- `AttackerCannonPoints` und `DefenderCannonPoints` steuern, wie viele Kanonen oder Artillerieeinheiten eingesetzt werden können

- `SapperBPRegenAmount` definiert, wie viele Baupunkte über Zeit regeneriert werden

- `SapperCannonPRegenAmount` bestimmt, wie schnell Kanonenpunkte regenerieren

- `SapperPropBPRegenTime` und `CannonPropPRegenTime` geben die Zeit in Sekunden zwischen den Regenerationsschritten an

Passe diese Werte an, um zu steuern, wie viele Gebäude und Verteidigungen Spieler errichten können und wie schnell Ressourcen während des Spiels wieder aufgefüllt werden.

Nachdem du die `ServerConfiguration.ini` geändert hast, speichere die Datei und starte deinen Gameserver neu. Die aktualisierten Ressourceneinstellungen werden dann automatisch übernommen.

## Fazit

Glückwunsch! Du hast erfolgreich Baupunkte und Ressourceneinstellungen auf deinem **Over the Top WWI Gameserver** konfiguriert. So kannst du Befestigungen steuern, das Gameplay balancieren und das gesamte Schlacht-Erlebnis formen.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />