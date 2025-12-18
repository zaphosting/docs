---
id: fivem-qbcore-spawnpoints
title: "FiveM: Gestalte und verwalte Spawnpunkte mit QbCore"
description: "Entdecke, wie du Spawnpunkte im QBCore Framework anpasst und hinzufügst für ein besseres Spielerlebnis → Jetzt mehr erfahren"
sidebar_label: Spawnpunkte
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du willst die Standard-Spawnpunkte ändern oder neue hinzufügen? Die Verwaltung der Spawnpunkte im **QBCore Framework** läuft über die `qb-spawn` Resource. Im Folgenden zeigen wir dir, wie du diese anpassen kannst.

<InlineVoucher />

## Konfiguration

Die Spawnpunkte werden über die `config.lua` Konfigurationsdatei der `qb-spawn` Resource eingestellt. Diese Datei kannst du per FTP bearbeiten. Falls du noch nicht mit FTP vertraut bist, empfehlen wir dir einen Blick in unseren [FTP-Zugang](gameserver-ftpaccess.md) Guide.

Die Standard-Konfiguration der Spawnpunkte sieht so aus:

```
QB.Spawns = {
    ["legion"] = { -- Index für die Tabelle
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- Wo der Spieler spawnt
        location = "legion", -- So weiß das Script, welchen Spawn du gewählt hast
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

Angenommen, du willst weitere Spawnpunkte hinzufügen, dann musst du einfach einen weiteren Eintrag in der Konfig ergänzen:

```
["new_spawn_name"] = { -- Muss einzigartig sein
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- Koordinaten, an denen der Spieler spawnt
    location = "new_spawn_name", -- Muss einzigartig sein
    label = "New spawn name", -- Label, das im Auswahlmenü angezeigt wird
},
```

:::info Koordinaten bestimmen
Du brauchst ein passendes Tool, um die aktuellen Koordinaten zu ermitteln. Im Netz findest du einige Ressourcen – such dir einfach das aus, was dir am besten passt. :)
:::

Das Endergebnis sieht dann so aus:

```
    QB.Spawns = {
    
        ["legion"] = { -- Index für die Tabelle
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- Wo der Spieler spawnt
            location = "legion", -- So weiß das Script, welchen Spawn du gewählt hast
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
        label = "New spawn name", -- Label, das im Auswahlmenü angezeigt wird
         },
    }
```




## Fazit

Du hast erfolgreich bestehende Spawnpunkte geändert oder neue hinzugefügt. Falls du noch Fragen hast oder Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />