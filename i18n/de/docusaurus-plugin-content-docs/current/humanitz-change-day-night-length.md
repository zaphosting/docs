---
id: humanitz-change-day-night-length
title: "HumanitZ: Tages- und Nachtlänge ändern"
description: "Entdecke, wie du die Tages- und Nachtdauer auf deinem HumanitZ-Gameserver anpasst → Jetzt mehr erfahren"
sidebar_label: "Tages-/Nachtlänge ändern"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

Der Tag-Nacht-Zyklus in HumanitZ beeinflusst direkt das Gameplay, die Sichtbarkeit, die Schwierigkeit beim Überleben und das gesamte Spieltempo. Kürzere Tage sorgen für ein intensiveres Survival-Erlebnis, während längere Tageszeiten den Spielern mehr Zeit zum Erkunden, Bauen und Ressourcen sammeln geben.

<InlineVoucher />



## Konfiguration

Die Tages- und Nachtdauer wird in der Datei `GameServerSettings.ini` gesteuert. Du findest diese Datei im Servermanagement-Panel unter **Configs**. Im Config-File suchst du folgende Parameter:

```
;Tagesdauer in Minuten
DayDur=40
;Nachtdauer in Minuten
NightDur=20
```

Die Werte sind in Minuten angegeben:

- `DayDur` – Steuert, wie lange der Tag dauert  
- `NightDur` – Steuert, wie lange die Nacht dauert  

Um die Zykluslänge zu ändern, passe einfach die Zahlen auf deine gewünschte Dauer an. Beispiel für längere Tage und kürzere Nächte:

```
DayDur=60
NightDur=15
```

Nach dem Bearbeiten der Datei speichere die Änderungen und starte den Server neu, damit die neuen Einstellungen wirksam werden.



## Fazit

Glückwunsch! Durch das Anpassen der Werte `DayDur` und `NightDur` in der `GameServerSettings.ini` hast du erfolgreich den Tag-Nacht-Zyklus auf deinem HumanitZ-Gameserver verändert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />