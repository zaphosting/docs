---
id: humanitz-change-pvp-mode
title: "HumanitZ: PvP-Modus ändern"
description: "Erfahre, wie du PvP auf deinem HumanitZ-Server aktivierst oder deaktivierst → Jetzt mehr erfahren"
sidebar_label: "PvP-Modus ändern"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

Player versus Player (PvP) Kämpfe sind ein zentrales Feature in Survival-Games wie HumanitZ. Das Aktivieren oder Deaktivieren von PvP ändert, wie Spieler im Kampf interagieren können, ob sie sich gegenseitig Schaden zufügen können und ob sie mit spielereigenen Gegenständen wie Fahrzeugen oder Containern interagieren dürfen.

<InlineVoucher />

## Konfiguration

Der PvP-Modus wird in der Datei `GameServerSettings.ini` gesteuert. Du findest diese Datei im Servermanagement-Panel unter **Configs**. Im Config-File suchst du folgenden Parameter:

```
;false/true=Aus/An. Dies beeinflusst auch die Möglichkeit, mit spielereigenen Gegenständen wie Autos und Containern zu interagieren
PVP=true
```

- `PVP=true` – Aktiviert Player versus Player Kampf  
- `PVP=false` – Deaktiviert Player versus Player Kampf

Um den PvP-Modus zu ändern, setzt du den Wert einfach auf `true` (An) oder `false` (Aus), je nachdem, wie PvP auf deinem Server laufen soll.

Beispiel – PvP deaktiviert:

```
PVP=false
```

Speichere nach der Änderung die Datei und starte den Server neu, damit die neue Einstellung wirksam wird.

## Fazit

Glückwunsch! Mit der Änderung des `PVP`-Werts in der `GameServerSettings.ini` hast du den PvP-Modus auf deinem HumanitZ-Server erfolgreich angepasst. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />