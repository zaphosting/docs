---
id: humanitz-change-save-interval
title: "HumanitZ: Speicherintervall ändern"
description: "Lerne, wie du das automatische Speicherintervall deiner HumanitZ-Welt anpasst → Jetzt mehr erfahren"
sidebar_label: "Speicherintervall ändern"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

Das Speicherintervall bestimmt, wie oft dein HumanitZ Gameserver automatisch den Weltzustand speichert. Regelmäßiges Speichern hilft, Datenverlust bei Abstürzen oder unerwarteten Abschaltungen zu vermeiden, während längere Intervalle die Festplattenaktivität leicht reduzieren können.

<InlineVoucher />

## Konfiguration

Das Welt-Speicherintervall wird in der Datei `GameServerSettings.ini` gesteuert. Du findest diese Datei im Control Panel deines Servers unter **Configs**. In der Konfigurationsdatei suchst du folgenden Parameter:

```
;The interval in seconds at which the server saves the world. Set to 0 to disable auto-saving.
SaveIntervalSec=300
```

- `SaveIntervalSec=300` – Der Server speichert die Welt alle 300 Sekunden (5 Minuten).  
- `SaveIntervalSec=0` – Deaktiviert das automatische Speichern der Welt.  

Der Wert wird in **Sekunden** angegeben. Zum Beispiel:

- `600` = 10 Minuten
- `900` = 15 Minuten

Wenn du das Intervall auf 10 Minuten erhöhen möchtest:

```
SaveIntervalSec=600
```

Speichere nach der Bearbeitung die Datei und starte den Server neu, damit die neue Einstellung wirksam wird.

## Fazit

Glückwunsch! Durch das Anpassen des `SaveIntervalSec`-Werts in der `GameServerSettings.ini` hast du erfolgreich das automatische Speicherintervall deiner HumanitZ-Welt geändert.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />