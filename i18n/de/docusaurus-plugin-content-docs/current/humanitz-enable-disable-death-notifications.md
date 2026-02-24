---
id: humanitz-enable-disable-death-notifications
title: "HumanitZ: Todesbenachrichtigungen aktivieren/deaktivieren"
description: "Erfahre, wie du Todesbenachrichtigungen für Spieler auf deinem HumanitZ-Server aktivierst oder deaktivierst → Jetzt mehr erfahren"
sidebar_label: "Todesbenachrichtigungen aktivieren/deaktivieren"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

Todesbenachrichtigungen informieren Spieler, wenn jemand auf dem Server gestorben ist. Das kann praktisch sein, um die Aktivität zu verfolgen, aber manche Server bevorzugen ein immersiveres oder kompetitiveres Erlebnis ohne öffentliche Todesmeldungen.

HumanitZ ermöglicht es dir, die Todesbenachrichtigungen direkt über die Server-Konfigurationsdatei zu aktivieren oder zu deaktivieren.

<InlineVoucher />

## Konfiguration

Die Einstellungen für Todesbenachrichtigungen findest du in der Datei `GameServerSettings.ini`. Du kannst diese Datei im Server-Management-Panel unter **Configs** öffnen.  
Suche in der Konfigurationsdatei nach folgendem Parameter:

```
;If set to true notification about dead players will be disabled. Admins will still be able to see them.
NoDeathFeedback=true
```

- `NoDeathFeedback=true` – Deaktiviert Todesbenachrichtigungen für normale Spieler. Admins sehen sie weiterhin.  
- `NoDeathFeedback=false` – Aktiviert Todesbenachrichtigungen für alle Spieler.

Wenn du möchtest, dass Todesbenachrichtigungen für alle sichtbar sind, setze den Wert auf:

```
NoDeathFeedback=false
```

Speichere nach der Bearbeitung die Datei und starte den Server neu, damit die Änderung wirksam wird.

## Fazit

Glückwunsch! Mit der Änderung des `NoDeathFeedback`-Werts in der `GameServerSettings.ini` hast du die Todesbenachrichtigungen auf deinem HumanitZ-Server erfolgreich konfiguriert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />