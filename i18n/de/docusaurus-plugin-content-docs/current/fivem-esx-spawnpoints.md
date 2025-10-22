---
id: fivem-esx-spawnpoints
title: "FiveM: Spawnpoints mit ESX verwalten und anpassen"
description: "Entdecke, wie du Spawnpunkte im ESX-Framework anpassen und erweitern kannst für ein besseres Spielerlebnis → Jetzt mehr erfahren"
sidebar_label: Spawnpoints
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du willst die Standard-Spawnpunkte ändern oder zusätzliche hinzufügen? Die Verwaltung der Spawnpoints im **ESX-Framework** erfolgt über `es_extended`. Im Folgenden erfährst du, wie du diese anpassen kannst.

<InlineVoucher />

## Konfiguration

Die Spawnpunkte werden über die `main.lua` Konfigurationsdatei von `es_extended` (../es_extended/shared/config/) eingestellt. Diese Datei kannst du per FTP bearbeiten. Falls du noch nicht weißt, wie FTP funktioniert, empfehlen wir dir einen Blick in unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung.

Die Standard-Konfiguration der Spawnpunkte sieht so aus:

```
Config.DefaultSpawns = { -- Wenn du mehr Spawnpositionen möchtest und diese zufällig auswählen willst, entferne die Kommentarzeichen oder füge weitere Orte hinzu
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
}
```

Angenommen, du möchtest weitere Spawnpunkte hinzufügen, dann musst du einfach einen weiteren Eintrag in der Konfigurationsdatei ergänzen:

```
Config.DefaultSpawns = { -- Wenn du mehr Spawnpositionen möchtest und diese zufällig auswählen willst, entferne die Kommentarzeichen oder füge weitere Orte hinzu
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
    --{x = 766.5239, y = -112.0400, z = 30.2922, heading = 1.0} // NEUER SPAWN
}
```

:::info Koordinaten bestimmen
Um die aktuellen Koordinaten zu ermitteln, brauchst du eine passende Ressource. Im Internet findest du verschiedene Tools – such dir einfach das aus, das dir am besten gefällt. :)
:::

## Fazit

Mit dieser Methode hast du erfolgreich bestehende Spawnpunkte geändert oder neue hinzugefügt. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />