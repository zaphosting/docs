---
id: humanitz-enable-disable-permadeath
title: "HumanitZ: Permadeath aktivieren/deaktivieren"
description: "Lerne, wie du Permadeath auf deinem HumanitZ Gameserver aktivierst oder deaktivierst → Jetzt mehr erfahren"
sidebar_label: "Permadeath aktivieren/deaktivieren"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

Permadeath erhöht die Schwierigkeit und Spannung im Survival-Gameplay von HumanitZ enorm. Wenn aktiviert, verlieren Spieler ihren Charakter dauerhaft beim Tod und müssen einen neuen erstellen. Diese Einstellung wird häufig auf Hardcore- oder High-Risk-Survival-Gameservern genutzt.

<InlineVoucher />

## Konfiguration

Permadeath wird in der Datei `GameServerSettings.ini` gesteuert. Du findest diese Datei im Servermanagement-Panel unter **Configs**. Im Config-File suchst du folgenden Parameter:

```
;When set to true the player that died will lose their character and have to create a new one
PermaDeath=false
```

- `PermaDeath=true` – Aktiviert Permadeath. Spieler verlieren ihren Charakter dauerhaft beim Tod.  
- `PermaDeath=false` – Deaktiviert Permadeath. Spieler können mit ihrem bestehenden Charakter respawnen.

Wenn du Permadeath aktivieren möchtest, ändere den Wert auf:

```
PermaDeath=true
```

Speichere nach der Änderung die Datei und starte den Gameserver neu, damit die Einstellung wirksam wird.

## Fazit

Glückwunsch! Durch das Anpassen des `PermaDeath`-Werts in der `GameServerSettings.ini` hast du Permadeath auf deinem HumanitZ Gameserver erfolgreich aktiviert oder deaktiviert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />