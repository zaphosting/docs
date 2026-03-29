---
id: over-the-top-wwi-configure-round-settings
title: "Over the Top WWI: Runden-Einstellungen konfigurieren"
description: "Lerne, wie du die Rundendauer und den Spielablauf auf deinem Over the Top WWI Server einstellst → Jetzt mehr erfahren"
sidebar_label: Runden-Einstellungen
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Runden-Einstellungen in **Over the Top WWI** legen fest, wie lange Matches dauern und wie der Spielverlauf abläuft. Durch das Anpassen dieser Werte kannst du das Match-Tempo, die Rundendauer und den gesamten Ablauf der Session steuern.

Das ist besonders wichtig, um schnelle Matches oder längere, strategischere Gefechte auszubalancieren.

<InlineVoucher />

## Konfiguration

Die Runden-Einstellungen werden in der Server-Konfigurationsdatei vorgenommen. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. In dieser Datei findest du folgende Parameter:

```
MaxAmountofRounds = 3
MaxMapTime = 30
FinalRecapTimer2 = 3
PersistentMatch = 0
```

- `MaxAmountofRounds` legt fest, wie viele Runden pro Match gespielt werden
- `MaxMapTime` bestimmt die maximale Spieldauer einer Map in Minuten
- `FinalRecapTimer2` steuert, wie lange die Zusammenfassung am Ende der Runde angezeigt wird

- `PersistentMatch` entscheidet, ob Zeit und Punktestand über die Runden hinweg übernommen werden

  - `0` → Deaktiviert
  - `1` → Aktiviert

Passe diese Werte an, um kürzere Matches mit schnelleren Wechseln oder längere Sessions mit ausgedehntem Gameplay zu erstellen.

Nachdem du die `ServerConfiguration.ini` geändert hast, speichere die Datei und starte deinen Server neu. Die neuen Runden-Einstellungen werden dann automatisch übernommen.

## Fazit

Glückwunsch! Du hast erfolgreich die Runden-Einstellungen auf deinem **Over the Top WWI Gameserver** konfiguriert. So kannst du die Match-Dauer steuern und den Spielablauf auf deinem Server verbessern.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />