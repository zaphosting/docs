---
id: over-the-top-wwi-configure-auto-balance
title: "Over the Top WWI: Auto Team Balance konfigurieren"
description: "Lerne, wie du das automatische Team-Balancing auf deinem Over the Top WWI Server einstellst → Jetzt mehr erfahren"
sidebar_label: Auto Team Balance
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Team-Balance ist essenziell für faire und spaßige Matches in **Over the Top WWI**. Ohne richtiges Balancing kann ein Team einen deutlichen Vorteil bekommen, was zu ungleichen Spielen und einer schlechten Spielerfahrung führt.

Das Auto-Balance-System sorgt für Fairness, indem es Spieler automatisch zwischen den Teams verteilt, sobald bestimmte Bedingungen erfüllt sind.

<InlineVoucher />

## Konfiguration

Das automatische Team-Balancing wird in der Server-Konfigurationsdatei eingestellt. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. Dort findest du folgende Parameter:

```
EnableAutobalance = 1
TeamPercentsAutoBalance = 50
AutoBalanceThreshold = 5
MinAutoBalanceCount = 15
LimitTeamSelection = 0
```

- `EnableAutobalance` aktiviert oder deaktiviert das automatische Team-Balancing

- `0` → Deaktiviert
- `1` → Aktiviert

- `TeamPercentsAutoBalance` definiert die gewünschte Teamverteilung. Beispiel: `50` = gleiche Teamgrößen
- `AutoBalanceThreshold` legt fest, wie groß das Ungleichgewicht sein darf, bevor das Balancing startet
- `MinAutoBalanceCount` definiert die Mindestanzahl an Spielern, ab der das Auto-Balancing aktiv wird
- `LimitTeamSelection` schränkt die manuelle Teamauswahl der Spieler ein

- `0` → Keine Einschränkung
- `1–3` → Begrenzung der Teamauswahl je nach Wert


Nach dem Ändern der `ServerConfiguration.ini` speichere die Datei und starte deinen Server neu. Das Auto-Balance-System übernimmt dann automatisch die Teamverteilung während der Matches.

## Fazit

Glückwunsch! Du hast das automatische Team-Balancing auf deinem **Over the Top WWI Gameserver** erfolgreich konfiguriert. So sorgst du für faire Matches und verbesserst das Spielerlebnis für alle.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – melde dich gern! 🙂

<InlineVoucher />