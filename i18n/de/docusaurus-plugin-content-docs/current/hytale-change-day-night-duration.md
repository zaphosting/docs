---
id: hytale-change-day-night-duration
title: "Hytale: Tages- und Nachtlänge ändern"
description: "Entdecke, wie du auf einem Hytale Gameserver zwischen Welten teleportierst → Jetzt mehr erfahren"
sidebar_label: Tages- und Nachtlänge ändern
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der Tag-Nacht-Zyklus auf einem Hytale Gameserver bestimmt, wie lange Tages- und Nachtphasen in einer Welt dauern. Durch das Anpassen der Dauer dieser Zyklen können Serverbesitzer das Gameplay-Tempo, die Atmosphäre und den Schwierigkeitsgrad beeinflussen.

Kürzere Nächte schaffen eine entspanntere Umgebung, während längere Nächte die Herausforderung und Spannung erhöhen können. Die Anpassung der Tages- und Nachtlänge ermöglicht es dir, die Welt an den gewünschten Spielstil deines Servers anzupassen.

:::info Early Access Hinweis

Hytale wurde am 13. Januar 2026 veröffentlicht und befindet sich aktuell im Early Access. Da sich das Spiel noch in aktiver Entwicklung befindet, können sich Server-Software, Konfigurationsdateien, Modding-Support und Installationsabläufe weiterhin ändern.

:::

<InlineVoucher />

## Konfiguration

Um die Tages- und Nachtlänge zu ändern, muss die Konfiguration direkt in der `config.json` Datei der Welt angepasst werden, die sich hier befindet:

```
/gXXXXXXX/hytale/universe/worlds/<world_name>/config.json
```

Falls die Konfigurationseinträge für Tages- und Nachtlänge noch nicht existieren, müssen sie manuell hinzugefügt werden. Scrolle durch die Datei, bis du die folgende Zeile findest:

```
"GameplayConfig":
```

Direkt unter dieser Zeile fügst du die Einstellungen für Tages- und Nachtlänge ein:

```
"DaytimeDurationSeconds": 1800,
"NighttimeDurationSeconds": 1000,
```

Diese Werte definieren die Länge von Tag- und Nachtphase in Sekunden. Zum Beispiel sorgt ein Tageswert von `1800` für eine längere Tagesphase, während der Nachtwert von `1000` bestimmt, wie lange die Nacht dauert, bevor der Zyklus neu startet. Nach den Änderungen speichere die `config.json` Datei und starte den Server neu.

## Abschluss

Mit dieser Konfiguration hast du die volle Kontrolle darüber, wie lange Tag und Nacht in jeder Welt auf deinem Hytale Gameserver dauern. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂


<InlineVoucher />