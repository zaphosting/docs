---
id: cs2-becomeadmin
title: "CS2: Admin werden"
description: Information darüber, wie du bei deinem CS2 Server von ZAP-Hosting Admin wirst - ZAP-Hosting.com documentation
sidebar_label: Admin werden
---



## Einführung

Die Nutzung von Administratorberechtigungen ermöglicht es dir den Server auch im Spiel zu verwalten. Somit hast du die Möglichkeit Befehle über die Konsole auszuführen. 



## Voraussetzungen
Um Administratorberechtigungen zu verwenden muss zunächst die Grundlage geschaffen werden. Standardmäßig bietet CS2 keine umfangreiche Administratorverwaltung an. Allerdings gibt es für so etwas Frameworks, wie zum Beispiel CounterStrikeSharp. Das Framework muss für die Konfiguration bereits installiert sein. Solltest du dies noch nicht installiert haben, so schaue dir gerne unsere [Plugins installieren](cs2-plugins) Anleitung an. 



## Admins definieren

Das  Hinzufügen eines Admins erfolgt über die `admins.json` Konfigurationsdatei, die unter `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/` zu finden ist. Um einen neuen Admin zu deklarieren, musst du einen neuen Eintrag anlegen. Dieser muss einen Namen, Identifier (Identifikator) und Flags (Berechtigungen) beinhalten. Den Namen kannst du beliebig vergeben, da dieser nur als Platzhalter/Erkennungsmerkmal verwendet Beim Identifier "identity" muss die SteamID vom Steam Account angeben werden. Zusätzlich müssen noch die Flags nach Bedarf definiert werden.

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


## Admin Gruppen definieren
Es können ebenfalls Admin Gruppen definiert werden. Somit können die Berechtigungen eines Admins über die zugehörige Gruppe definiert werden. Dadurch müssen die Berechtigungen nicht bei jedem einzelnen Admin individuell konfiguriert werden. Die Gruppen werden in der admin_groups.json Konfigurationsdatei definiert, die unter `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/` zu finden ist.
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



## Admin Immunität definieren

Admins kann ein Immunitätswert zugewiesen werden. Wenn ein Admin oder Spieler mit einem niedrigeren Immunitätswert einen anderen Admin oder Spieler mit einem höheren Immunitätswert angreift, wird der Befehl fehlschlagen. Du kannst einen Immunitätswert definieren, indem du den Immunitätsschlüssel zu jedem Admin in configs/admins.json hinzufügst.

```
{
  "ZoNiCaL": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"],
    "immunity": 100
  }
}
```
:::info
Die Immunitätsprüfung wird von CounterStrikeSharp nicht automatisch durchgeführt. Es liegt an den einzelnen Plugins, die Immunitätsprüfung zu handhaben/verwalten. 
:::