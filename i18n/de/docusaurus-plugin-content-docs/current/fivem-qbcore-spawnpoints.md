---
id: fivem-qbcore-spawnpoints
title: "FiveM: Verwalten und Anpassen von Spawnpoints mit QbCore"
description: Verwalten und Anpassen von Spawnpoints mit QbCore bei deinem FiveM Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Spawnpoints
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Möchtest du die Standard-Spawnpoints ändern oder zusätzliche hinzufügen? Die Verwaltung von Spawnpoints im **QBCore-Framework** wird über die Ressource `qb-spawn` definiert. Im Folgenden wird erklärt, wie du diese anpassen kannst. 

<InlineVoucher />

## Konfiguration

Die Spawnpunkte werden über die `config.lua` Konfigurationsdatei der `qb-spawn` Ressource eingestellt. Diese Datei kann per FTP bearbeitet werden. Wenn du noch nicht weißt, wie man FTP benutzt, empfehlen wir dir einen Blick in die [FTP access](gameserver-ftpaccess.md) Anleitung zu werfen. 

Die Standardkonfiguration der Spawnpunkte sieht wie folgt aus: 

```
QB.Spawns = {
    ["legion"] = { -- Index for the table
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- Where player spawns
        location = "legion", -- this is how the javascript knows which you picked
        label = "Legion Square", -- What the player sees in the menu
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

Angenommen, du möchtest weitere Spawnpoints hinzufügen, dann müsstest du einen weiteren Eintrag in die Konfigurationsdatei hinzufügen: 

```
["new_spawn_name"] = { -- Needs to be unique
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- Coords player will be spawned
    location = "new_spawn_name", -- Needs to be unique
    label = "New spawn name", -- This is the label which will show up in selection menu.
},
```

:::info Koordinaten bestimmen
Um die aktuellen Koordinaten zu erhalten, wird eine passende Ressource benötigt. Im Internet findest du mehrere zur Auswahl und kannst entscheiden, welche dir am besten passt :)
:::

Das Endergebnis würde dann folgendermaßen aussehen: 
```
    QB.Spawns = {
    
        ["legion"] = { -- Index for the table
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- Where player spawns
            location = "legion", -- this is how the javascript knows which you picked
            label = "Legion Square", -- What the player sees in the menu
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
        
        ["new_spawn_name"] = { -- Needs to be unique
        coords = vector4(1.1, -1.1, 1.1, 180.0), -- Coords player will be spawned
        location = "new_spawn_name", -- Needs to be unique
        label = "New spawn name", -- This is the label which will show up in selection menu.
         },
    }
```




## Abschluss

Mit dieser Methode hast du erfolgreich bestehende Spawnpoints geändert oder neue hinzugefügt. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂


<InlineVoucher />
