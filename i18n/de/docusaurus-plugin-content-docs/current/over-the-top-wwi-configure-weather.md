---
id: over-the-top-wwi-configure-weather
title: "Over the Top WWI: Wetter konfigurieren"
description: "Lerne, wie du die Wettereinstellungen auf deinem Over the Top WWI Gameserver anpasst → Jetzt mehr erfahren"
sidebar_label: Wetter
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Wettereinstellungen in **Over the Top WWI** haben direkten Einfluss auf das Gameplay, die Sichtweite und die Atmosphäre. Durch das Anpassen dieser Werte kannst du klare Bedingungen für ausgeglichene Kämpfe schaffen oder herausfordernde Umgebungen wie Nebel, Regen oder Stürme einführen.

Mit individuellen Wetterkonfigurationen kannst du das Gesamterlebnis gestalten und Matches dynamischer oder immersiver machen.

<InlineVoucher />

## Konfiguration

Die Wettereinstellungen werden in der Server-Konfigurationsdatei festgelegt. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. In dieser Datei findest du folgende Parameter:

```
EnableRandomWeather = 1
CurrentWeather = 0
CloudCoverage = 20
TimeToChangeWeather = 180
TimeToChangeClouds = 180
```

- `EnableRandomWeather` aktiviert oder deaktiviert dynamische Wetterwechsel

- `0` → Aus
- `1` → An

- `CurrentWeather` definiert den aktuellen Wettertyp

- `0` → Klar
- `1` → Regen
- `2` → Nebel
- `3` → Schnee
- Addiere `+3` für intensivere Versionen

- `CloudCoverage` steuert, wie stark der Himmel mit Wolken bedeckt ist

- Niedrigere Werte bedeuten klareren Himmel
- Höhere Werte erhöhen die Wolkendichte

- `TimeToChangeWeather` legt fest, wie oft das Wetter in Sekunden wechselt

- `TimeToChangeClouds` bestimmt, wie häufig sich die Wolkenbedingungen ändern

Weitere Umgebungs-Einstellungen:

```
WindStrength = 2
WindDirection = 0
ChanceOfLightningOccuring = 100
LightningTimer = 6
CanLightningKill = 1
```

- `WindStrength` steuert, wie stark der Wind das Gameplay beeinflusst
- `WindDirection` definiert die Windrichtung
- `ChanceOfLightningOccuring` legt fest, wie wahrscheinlich Blitze auftreten
- `LightningTimer` bestimmt, wie oft Blitze erscheinen
- `CanLightningKill` entscheidet, ob Blitze Spieler schädigen können

Nachdem du die `ServerConfiguration.ini` angepasst hast, speichere die Datei und starte deinen Gameserver neu. Die neuen Wettereinstellungen werden automatisch übernommen.

## Fazit

Glückwunsch! Du hast erfolgreich die Wettereinstellungen auf deinem **Over the Top WWI Gameserver** konfiguriert. Durch das Anpassen dieser Werte kannst du dynamische Umgebungen schaffen und das Spielerlebnis für deine Community verbessern.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />