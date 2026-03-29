---
id: over-the-top-wwi-configure-spawn-settings
title: "Over the Top WWI: Spawn-Einstellungen konfigurieren"
description: "Lerne, wie du das Spawn-Verhalten auf deinem Over the Top WWI Gameserver einstellst → Jetzt mehr erfahren"
sidebar_label: Spawn-Einstellungen
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Spawn-Einstellungen in **Over the Top WWI** steuern, wie und wann Spieler wieder ins Gefecht einsteigen. Diese Einstellungen beeinflussen direkt das Tempo, die Fairness und den gesamten Spielfluss.

Indem du Spawn-Timer, Schonzeiten und Respawn-Verhalten anpasst, kannst du schnelleres Gameplay oder taktischere und härtere Kampf-Szenarien schaffen.

<InlineVoucher />

## Konfiguration

Die Spawn-Einstellungen werden in der Server-Konfigurationsdatei festgelegt. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. Dort findest du folgende Parameter:

```
SpawnGracePeriod = 15
AttackerRespawnTime = 8
DefenderRespawnTime = 8
WaveSpawning = 0
WaveLegnth = 300
WaveBuildUpTime = 90
```

- `SpawnGracePeriod` definiert, wie lange Spieler ohne Strafen oder Einschränkungen spawnen können
- `AttackerRespawnTime` legt die Respawn-Verzögerung für das angreifende Team fest
- `DefenderRespawnTime` legt die Respawn-Verzögerung für das verteidigende Team fest

- `WaveSpawning` aktiviert oder deaktiviert das Wellen-Spawn-System

- `WaveLegnth` bestimmt, wie lange eine Spawn-Welle dauert
- `WaveBuildUpTime` steuert, wie lange es dauert, bis eine Welle vollständig aufgebaut ist

Mit diesen Einstellungen kannst du steuern, ob Spieler einzeln oder in koordinierten Wellen spawnen und wie schnell sie zurück ins Gefecht kommen.

Nachdem du die `ServerConfiguration.ini` angepasst hast, speichere die Datei und starte deinen Server neu. Das neue Spawn-Verhalten wird dann automatisch übernommen.

## Fazit

Glückwunsch! Du hast erfolgreich die Spawn-Einstellungen auf deinem **Over the Top WWI Gameserver** konfiguriert. Mit diesen Anpassungen kannst du das Gameplay-Tempo feinjustieren und das Spielerlebnis verbessern.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />