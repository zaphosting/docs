---
id: fivem-esx-spawnpoints
title: "FiveM: Verwalten und Anpassen von Spawnpoints mit ESX"
description: Verwalten und Anpassen von Spawnpoints mit ESX bei deinem FiveM Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Spawnpoints
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Möchtest du die Standard-Spawnpoints ändern oder zusätzliche hinzufügen? Die Verwaltung der Spawnpoints im **QBCore-Framework** wird über `es_extended` definiert. Im Folgenden wird erklärt, wie du diese anpassen kannst. 

<InlineVoucher />

## Konfiguration

Die Spawnpunkte werden über die Konfigurationsdatei `main.lua` aus der `es_extended` (../es_extended/shared/config/) eingestellt. Diese Datei kann per FTP bearbeitet werden. Wenn du noch nicht weißt, wie man FTP benutzt, empfehlen wir dir einen Blick in die [FTP access](gameserver-ftpaccess.md) Anleitung zu werfen. 

Die Standardkonfiguration der Spawnpunkte sieht wie folgt aus: 

```
Config.DefaultSpawns = { -- If you want to have more spawn positions and select them randomly uncomment commented code or add more locations
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
}
```

Angenommen, du möchtest weitere Spawnpoints hinzufügen, dann müsstest du einen weiteren Eintrag in die Konfigurationsdatei hinzufügen: 

```
Config.DefaultSpawns = { -- If you want to have more spawn positions and select them randomly uncomment commented code or add more locations
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
    --{x = 766.5239, y = -112.0400, z = 30.2922, heading = 1.0} // NEW SPAWN 
}
```

:::info Koordinaten bestimmen
Um die aktuellen Koordinaten zu erhalten, wird eine passende Ressource benötigt. Im Internet findest du mehrere zur Auswahl und kannst entscheiden, welche dir am besten passt :)
:::




## Abschluss

Mit dieser Methode hast du erfolgreich bestehende Spawnpoints geändert oder neue hinzugefügt. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
