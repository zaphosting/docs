---
id: fivem-qbcore-spawnpoints
title: "FiveM: Spawnpoints mit QbCore verwalten und anpassen"
description: "Entdecke, wie du Spawnpunkte im QBCore Framework anpassen und hinzufügen kannst für ein besseres Spielerlebnis → Jetzt mehr erfahren"
sidebar_label: Spawnpoints
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du willst die Standard-Spawnpoints ändern oder neue hinzufügen? Die Verwaltung der Spawnpoints im **QBCore Framework** läuft über die `qb-spawn` Resource. Im Folgenden erfährst du, wie du diese anpassen kannst.

<InlineVoucher />

## Konfiguration

Die Spawnpunkte werden über die `config.lua` Konfigurationsdatei der `qb-spawn` Resource eingestellt. Diese Datei kannst du per FTP bearbeiten. Falls du noch nicht weißt, wie FTP funktioniert, empfehlen wir dir einen Blick in unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung.

Die Standard-Konfiguration der Spawnpunkte sieht so aus:

```
QB.Spawns = {
    ["legion"] = { -- Index für die Tabelle
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- Wo der Spieler spawnt
        location = "legion", -- So weiß das Javascript, welchen Spawn du gewählt hast
        label = "Legion Square", -- Was der Spieler im Menü sieht
    },

    ["policedp"] = {
        coords = vector4(428.23, -984.28, 29.76, 3.5),
        location = "policedp",
        label = "Police Department",
    },

    ["paleto"] = {
        coords = vector4(80.35, 6424.12, 31.67, 45.5),
        location = "paleto",
        label = "Paleto Bay",
    },

    ["motel"] = {
        coords = vector4(327.56, -205.08, 53.08, 163.5),
        location = "motel",
        label = "Motels",
    },
```

Angenommen, du möchtest weitere Spawnpunkte hinzufügen, dann musst du einfach einen weiteren Eintrag in der Konfigurationsdatei ergänzen:

```
["new_spawn_name"] = { -- Muss einzigartig sein
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- Koordinaten, an denen der Spieler spawnt
    location = "new_spawn_name", -- Muss einzigartig sein
    label = "New spawn name", -- Das Label, das im Auswahlmenü angezeigt wird
},
```

:::info Koordinaten bestimmen
Du brauchst eine passende Resource, um die aktuellen Koordinaten zu ermitteln. Im Internet findest du mehrere Tools, such dir einfach das aus, das dir am besten passt. :)
:::

Das Endergebnis sieht dann so aus:

```
    QB.Spawns = {
    
        ["legion"] = { -- Index für die Tabelle
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- Wo der Spieler spawnt
            location = "legion", -- So weiß das Javascript, welchen Spawn du gewählt hast
            label = "Legion Square", -- Was der Spieler im Menü sieht
        },
    
        ["policedp"] = {
            coords = vector4(428.23, -984.28, 29.76, 3.5),
            location = "policedp",
            label = "Police Department",
        },
    
        ["paleto"] = {
            coords = vector4(80.35, 6424.12, 31.67, 45.5),
            location = "paleto",
            label = "Paleto Bay",
        },
    
        ["motel"] = {
            coords = vector4(327.56, -205.08, 53.08, 163.5),
            location = "motel",
            label = "Motels",
        },
        
        ["new_spawn_name"] = { -- Muss einzigartig sein
        coords = vector4(1.1, -1.1, 1.1, 180.0), -- Koordinaten, an denen der Spieler spawnt
        location = "new_spawn_name", -- Muss einzigartig sein
        label = "New spawn name", -- Das Label, das im Auswahlmenü angezeigt wird
         },
    }
```




## Fazit

Du hast erfolgreich bestehende Spawnpoints geändert oder neue hinzugefügt, indem du dieser Methode gefolgt bist. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />