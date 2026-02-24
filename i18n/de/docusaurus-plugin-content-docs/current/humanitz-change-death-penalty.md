---
id: humanitz-change-death-penalty
title: "HumanitZ: Todesstrafe ändern"
description: "Entdecke, wie du die Todesstrafe-Einstellungen auf deinem HumanitZ-Gameserver anpasst → Jetzt mehr erfahren"
sidebar_label: Todesstrafe ändern
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';



## Einführung

Die Todesstrafe in HumanitZ bestimmt, was ein Spieler nach dem Tod verliert. Je nach Spielstil deines Servers bevorzugst du vielleicht ein nachsichtigeres Survival-Erlebnis oder ein härteres System, das Spannung und Risiko erhöht.

<InlineVoucher />



## Konfiguration

Die Todesstrafe wird in der Datei `GameServerSettings.ini` gesteuert. Du findest diese Datei im Servermanagement-Panel unter **Configs**. Im Config-File suchst du folgenden Parameter:

```
;0=Verliert nichts, 1=Verliert Rucksack und Waffe in der Hand, 2=Vorheriges + Taschen und Rucksack, 3=Alles vorherige + Ausrüstung
OnDeath=2
```

Der Wert nach `OnDeath=` bestimmt, wie viel vom Inventar eines Spielers beim Tod verloren geht:

- `0` – Spieler verlieren nichts  
- `1` – Spieler verlieren ihren Rucksack und die aktuell in der Hand gehaltene Waffe  
- `2` – Vorherige Verluste + Taschen und Rucksackinhalt  
- `3` – Alles vorherige + angelegte Ausrüstung  

Um die Strafe anzupassen, änderst du einfach die Zahl auf deinen gewünschten Wert. Nach dem Bearbeiten der Datei speicherst du die Änderungen und startest den Server neu, damit die neue Einstellung aktiv wird.



## Fazit

Glückwunsch! Durch das Ändern des `OnDeath`-Werts in der `GameServerSettings.ini` hast du die Todesstrafe auf deinem HumanitZ-Gameserver erfolgreich konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂



<InlineVoucher />