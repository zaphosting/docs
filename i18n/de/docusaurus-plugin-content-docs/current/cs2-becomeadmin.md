---
id: cs2-becomeadmin
title: "CS2: Admin werden"
description: "Entdecke, wie du Administratorrechte vergibst und verwaltest, um volle Kontrolle über deinen Server im CS2 Gameplay zu haben → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt im Spiel nutzen. Alle Schritte, die du zur Vergabe von Administratorrechten für deinen Server durchführen musst, werden im Folgenden beschrieben.  
<InlineVoucher />

## Vorbereitung
Um Administratorrechte nutzen zu können, muss zunächst eine Grundlage geschaffen werden. Standardmäßig bietet CS2 keine umfassende Admin-Verwaltung. Es gibt jedoch Frameworks dafür, wie zum Beispiel CounterStrikeSharp. Das Framework muss zur Konfiguration installiert werden. Falls du es noch nicht installiert hast, schau gerne in unsere [Plugins installieren](cs2-plugins) Anleitung rein.

## Admins definieren

Das Hinzufügen eines Admins erfolgt über die Konfigurationsdatei `admins.json`, die du unter `../cs2/game/csgo/addons/CounterStrikeSharp/addons/configs/` findest. Um einen neuen Admin zu deklarieren, musst du einen neuen Eintrag erstellen. Dieser muss einen Namen, eine Identität (identity) und Flags (Berechtigungen) enthalten. Den Namen kannst du frei wählen, da er nur als Platzhalter/Bezeichner dient. Für die Identität "identity" muss die SteamID des Steam-Accounts angegeben werden. Zusätzlich müssen die Flags nach Bedarf definiert werden.

```js title="admins.json (Beispiel)"
{
  "User 1": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"]
  },
  "User 2": {
    "identity": "STEAM_0:1:1",
    "flags": ["@css/generic"]
  }
}
```

## Admin-Gruppen definieren
Es können auch Admin-Gruppen definiert werden. So können die Berechtigungen eines Admins über die entsprechende Gruppe festgelegt werden. Dadurch müssen Berechtigungen nicht für jeden Admin einzeln konfiguriert werden. Die Gruppen werden in der Konfigurationsdatei `admin_groups.json` definiert, die du unter `../cs2/game/csgo/addons/CounterStrikeSharp/addons/configs/` findest.

```js title="admin_groups.json"
"#css/simple-admin": {
  "flags": [
    "@css/generic",
    "@css/reservation",
    "@css/ban",
    "@css/slay",
  ]
}
```

## Admin-Immunität definieren
Admins kann ein Immunitätswert zugewiesen werden. Wenn ein Admin oder Spieler mit einem niedrigeren Immunitätswert einen anderen Admin oder Spieler mit einem höheren Immunitätswert angreift, schlägt der Befehl fehl. Du kannst einen Immunitätswert definieren, indem du den Schlüssel immunity zu jedem Admin in `configs/admins.json` hinzufügst.

```json
{
  "ZoNiCaL": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"],
    "immunity": 100
  }
}
```
:::info
Die Immunitätsprüfung wird nicht automatisch von CounterStrikeSharp durchgeführt. Es liegt an den einzelnen Plugins, die Immunitätsprüfung zu handhaben/zu verwalten.
:::

## Abschluss

Glückwunsch, du hast die Administratorrechte erfolgreich konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />