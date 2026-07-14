---
id: palworld-change-hp-regeneration
title: "Palworld: HP-Regeneration ändern"
description: "Lerne, wie du die HP-Regeneration in Palworld änderst, indem du die Spieler- und Pal-Regenerationswerte auf deinem Server anpasst – schneller, langsamer oder deaktiviert -> Jetzt mehr erfahren"
sidebar_label: Palworld: HP-Regeneration ändern
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld ermöglicht es dir, die Regenerationseinstellungen für Spieler und Pals über die Hauptserver-Konfiguration zu ändern. In dieser Anleitung lernst du, wie du die richtige Konfigurationsdatei im ZAP-Hosting Webinterface bearbeitest, HP-Regenerationswerte anpasst und die Änderungen korrekt anwendest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, stelle sicher, dass dein Palworld-Server online ist und du über das ZAP-Hosting Panel Zugriff auf die Webadministration hast.

:::info Zugriff auf die Konfiguration erforderlich
Du benötigst Zugriff auf die Verwaltung deines Gameservers und den Bereich `Configs`, um die Palworld-Konfigurationsdateien manuell zu bearbeiten.
:::

## Öffne die Palworld-Konfigurationsdatei

Um die HP-Regeneration zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

Im ZAP-Hosting Gameserver-Panel:

1. Öffne deinen Palworld-Server.
2. Navigiere zu `Configs`.
3. Öffne die Datei `PalWorldSettings.ini`.

Diese Datei enthält die wichtigsten Gameplay-Konfigurationswerte für deinen Server, inklusive der Multiplikatoren für Spieler- und Pal-HP-Regeneration.

:::note Manuelle Konfigurationsänderungen
Je nach aktueller Konfiguration können die Einstellungen in einer langen Parameterzeile innerhalb des Abschnitts `OptionSettings` stehen. Bearbeite die vorhandenen Werte sorgfältig und achte darauf, das Format beizubehalten.
:::

## HP-Regenerationswerte ändern

Die HP-Regeneration wird als numerischer Multiplikator gespeichert. Ein Wert von `1.0` entspricht der Standard-Regenerationsgeschwindigkeit.

### Unterstützte Regenerations-Einstellungen

Verwende folgende Konfigurationsschlüssel in der Datei `PalWorldSettings.ini`:

| Konfig-Schlüssel | Beschreibung | Standardwert |
| --- | --- | --- |
| `PlayerAutoHPRegeneRate` | Natürliche HP-Regeneration des Spielers | `1.0` |
| `PlayerAutoHpRegeneRateInSleep` | HP-Regeneration des Spielers im Schlaf | `1.0` |
| `PalAutoHPRegeneRate` | Natürliche HP-Regeneration des Pals | `1.0` |
| `PalAutoHpRegeneRateInSleep` | HP-Regeneration des Pals im Palbox-Schlaf | `1.0` |

### Wert-Verhalten

Folgende Wertelogik gilt für die Regeneration:

| Wert | Effekt |
| --- | --- |
| `1.0` | Standard-Regenerationsgeschwindigkeit |
| Größer als `1.0` | Schnellere Heilung |
| Kleiner als `1.0` | Langsamere Heilung |
| `0.0` | Regeneration deaktiviert |

:::tip Gute Regenerationswerte wählen
Für ein etwas leichteres Überleben probiere Werte wie `1.5` oder `2.0`. Für eine herausforderndere Erfahrung nutze Werte unter `1.0` oder deaktiviere die Regeneration komplett mit `0.0`.
:::

## Konfigurationseinträge bearbeiten

In den meisten Palworld-Server-Setups befinden sich diese Werte in der Zeile `OptionSettings=(...)` der Datei `PalWorldSettings.ini`.

### Beispiel-Konfiguration

Füge die Einträge hinzu, falls sie fehlen, oder ändere die vorhandenen Werte, wenn sie bereits vorhanden sind:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=1.0,PlayerAutoHpRegeneRateInSleep=1.0,PalAutoHPRegeneRate=1.0,PalAutoHpRegeneRateInSleep=1.0)
```

Wenn du zum Beispiel eine schnellere natürliche Heilung für Spieler und Pals möchtest, könntest du Folgendes verwenden:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=2.0,PlayerAutoHpRegeneRateInSleep=2.0,PalAutoHPRegeneRate=2.0,PalAutoHpRegeneRateInSleep=2.0)
```

Wenn du nur bestimmte Werte ändern möchtest, passe nur diese Einträge an und lasse die übrigen Werte in deiner bestehenden `OptionSettings`-Zeile unverändert.

:::caution Bestehende OptionSettings-Werte erhalten
Lösche keine anderen Einträge aus der `OptionSettings`-Zeile. Dieser Abschnitt enthält meist viele Gameplay-Einstellungen, und das Entfernen kann unbeabsichtigt andere Teile deiner Serverkonfiguration zurücksetzen.
:::

## Änderungen speichern und anwenden

Nachdem du die Datei bearbeitet hast, speichere deine Änderungen im ZAP-Hosting Bereich `Configs`.

Um die neuen Regenerationswerte zu aktivieren, starte deinen Palworld-Server neu.

### Server neu starten

1. Speichere die bearbeitete Datei `PalWorldSettings.ini`.
2. Gehe zurück zur Serververwaltung.
3. Starte den Server neu.

Ein Neustart ist notwendig, da Palworld diese Gameplay-Einstellungen nur beim Serverstart einliest.

:::info Neustart erforderlich
Die Änderungen an der HP-Regeneration wirken nicht sofort während der Laufzeit. Du musst den Server nach dem Speichern der Konfiguration neu starten.
:::

## Neue Regenerationswerte überprüfen

Nach dem Neustart kannst du dich mit deinem Server verbinden und das neue Heilungsverhalten im Spiel testen.

Überprüfe dabei:

- natürliche HP-Regeneration des Spielers
- Heilung des Spielers im Schlaf
- natürliche HP-Regeneration des Pals
- Heilungsverhalten des Pals im Palbox-Schlaf

Wenn die Regeneration nicht wie erwartet funktioniert, öffne `PalWorldSettings.ini` erneut und prüfe:

- ob die Konfigurationsschlüssel exakt richtig geschrieben sind
- ob die Werte gültige Dezimalzahlen wie `1.0` oder `2.0` verwenden
- ob die Einträge weiterhin im Abschnitt `OptionSettings` stehen
- ob der Server nach dem Speichern neu gestartet wurde

## Fazit

Glückwunsch, du hast die HP-Regeneration in Palworld erfolgreich geändert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂