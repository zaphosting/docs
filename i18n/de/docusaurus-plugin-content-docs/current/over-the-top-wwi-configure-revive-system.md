---
id: over-the-top-wwi-configure-revive-system
title: "Over the Top WWI: Revive-System konfigurieren"
description: "Lerne, wie du die Revive-Mechanik auf deinem Over the Top WWI Gameserver einstellst → Jetzt mehr erfahren"
sidebar_label: Revive-System
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Revive-System in **Over the Top WWI** bestimmt, wie Spieler nach dem Niedergeschlagenwerden wieder ins Spiel zurückgebracht werden können. Mit der Anpassung dieser Einstellungen kannst du steuern, wie nachsichtig oder herausfordernd der Kampf ist.

Ein schnelleres oder zuverlässigeres Revive-System macht das Gameplay zugänglicher, während strengere Einstellungen mehr Realismus und Konsequenzen für Fehler bringen.

<InlineVoucher />

## Konfiguration

Das Revive-System wird in der Server-Konfigurationsdatei eingestellt. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. In dieser Datei findest du folgende Parameter:

```
ReviveTimer = 60
ReviveChance = 100
ReviveMaxDamage = 80
```

- `ReviveTimer` legt fest, wie lange es dauert, einen Spieler zu reviven
- `ReviveChance` bestimmt die Erfolgswahrscheinlichkeit eines Revives
- `ReviveMaxDamage` definiert den maximalen Schaden, den ein Spieler haben darf, um noch revived werden zu können

Passe diese Werte an, um zu steuern, wie oft Revives erfolgreich sind und wie lange der Vorgang dauert.

Nachdem du die `ServerConfiguration.ini` geändert hast, speichere die Datei und starte deinen Gameserver neu. Die neuen Revive-Einstellungen werden automatisch übernommen.

## Fazit

Glückwunsch! Du hast das Revive-System auf deinem **Over the Top WWI Gameserver** erfolgreich konfiguriert. So kannst du die Schwierigkeit im Kampf feinjustieren und das Gameplay-Erlebnis verbessern.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />