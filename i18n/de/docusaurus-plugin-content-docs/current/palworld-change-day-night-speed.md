---
id: palworld-change-day-night-speed
title: "Palworld: Tag-Nacht-Geschwindigkeit ändern"
description: "Lerne, wie du die Tag- und Nachtgeschwindigkeit in Palworld änderst, indem du die Tagzyklus-Einstellungen auf deinem Server anpasst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Tag-Nacht-Geschwindigkeit ändern
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld ermöglicht es dir, die Geschwindigkeit des Tag- und Nachtzyklus auf deinem Server anzupassen. In dieser Anleitung lernst du, wie du die Tag- und Nachtgeschwindigkeit änderst, indem du die richtige Konfigurationsdatei in der ZAP-Hosting Gameserver-Verwaltung bearbeitest und die Änderungen korrekt anwendest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver über die ZAP-Hosting Weboberfläche hast und die Berechtigung besitzt, Server-Konfigurationsdateien zu bearbeiten.

:::info Manuelle Konfiguration erforderlich
Diese Einrichtung erfolgt manuell über die Server-Konfigurationsdateien. Du musst die Palworld-Einstellungen direkt bearbeiten und kannst keine automatisierten Ingame-Befehle verwenden.
:::

## Finde die Konfigurationsdatei

Um die Tag- und Nachtgeschwindigkeit zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

In der ZAP-Hosting Gameserver-Verwaltung findest du diese Datei im Bereich **Configs**. Öffne deinen Palworld-Server im Webinterface und navigiere zum Bereich für die Konfigurationsdateien.

Die relevante Datei heißt:

```ini
PalWorldSettings.ini
```

:::note Speicherort der Konfigurationsdatei
Je nach Gameserver-Template und Panel-Layout wird die Datei im Bereich **Configs** der ZAP-Hosting Verwaltung bereitgestellt. Falls dir der vollständige interne Pfad angezeigt wird, handelt es sich in der Regel um die Palworld-Servereinstellungsdatei für die Gameplay-Konfiguration.
:::

## Bearbeite die Tag- und Nachtgeschwindigkeit

In der Datei `PalWorldSettings.ini` findest du die Gameplay-Konfigurationseinträge für die Tag- und Nachtgeschwindigkeit.

Du musst folgende Werte anpassen:

| Konfig-Schlüssel | Standardwert | Beschreibung |
| --- | --- | --- |
| `DayTimeSpeedRate` | `1.000000` | Steuert, wie schnell der Tag vergeht |
| `NightTimeSpeedRate` | `1.000000` | Steuert, wie schnell die Nacht vergeht |

Höhere Werte lassen die Zeit schneller vergehen, niedrigere Werte verlangsamen den Zeitablauf.

### Beispielkonfiguration

Wenn du möchtest, dass Tag und Nacht schneller vergehen, kannst du höhere Werte so einstellen:

```ini
DayTimeSpeedRate=2.000000
NightTimeSpeedRate=2.000000
```

Wenn du einen längeren Tag, aber eine schnellere Nacht möchtest, kannst du unterschiedliche Werte verwenden, zum Beispiel:

```ini
DayTimeSpeedRate=0.500000
NightTimeSpeedRate=2.000000
```

### Wo die Werte eingetragen werden

Palworld speichert viele Gameplay-Einstellungen im Abschnitt `OptionSettings` der Datei `PalWorldSettings.ini`. Du solltest die vorhandenen Einträge für `DayTimeSpeedRate` und `NightTimeSpeedRate` dort bearbeiten und keine doppelten Schlüssel an anderer Stelle hinzufügen.

Ein typischer Abschnitt sieht etwa so aus:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

Nach der Bearbeitung könnte er so aussehen:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=2.000000,NightTimeSpeedRate=1.500000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

:::caution Bestehende Einträge sorgfältig bearbeiten
Achte darauf, nur den Wert hinter `DayTimeSpeedRate=` und `NightTimeSpeedRate=` zu ändern. Entferne keine Kommata, Klammern oder andere bestehende Einstellungen in der `OptionSettings`-Zeile, da eine falsche Formatierung verhindern kann, dass der Server die Konfiguration korrekt lädt.
:::

## Änderungen speichern und anwenden

Nachdem du die Werte in `PalWorldSettings.ini` angepasst hast, speichere die Datei im ZAP-Hosting Konfigurationseditor.

Starte anschließend deinen Palworld-Server neu, damit die neuen Tagzyklus-Einstellungen geladen werden.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzliche Konsolenbefehle ausführen | Nein |

:::tip Neustart erforderlich
Konfigurationsänderungen an den Palworld-Welteinstellungen werden erst nach einem Serverneustart zuverlässig angewendet. Starte den Server also immer neu, nachdem du die Tag- oder Nachtgeschwindigkeit geändert hast.
:::

## Überprüfe den neuen Tagzyklus

Nach dem Neustart verbinde dich mit deinem Server und beobachte den Ingame-Zeitverlauf.

Du solltest jetzt feststellen, dass:

- der **Tag** schneller oder langsamer vergeht, je nach `DayTimeSpeedRate`
- die **Nacht** schneller oder langsamer vergeht, je nach `NightTimeSpeedRate`

Wenn sich die Geschwindigkeit nicht ändert, öffne `PalWorldSettings.ini` erneut und prüfe, ob:

- die Werte korrekt gespeichert wurden
- die Formatierung der `OptionSettings`-Zeile noch gültig ist
- der Server nach der Änderung neu gestartet wurde

## Konfigurationsübersicht

Nutze die folgende Tabelle als schnelle Referenz, wenn du später die Tag-Einstellungen erneut ändern möchtest.

| Einstellung | Beispiel | Ergebnis |
| --- | --- | --- |
| `DayTimeSpeedRate=0.500000` | Langsamer Tag | Tag dauert länger |
| `DayTimeSpeedRate=2.000000` | Schneller Tag | Tag vergeht schneller |
| `NightTimeSpeedRate=0.500000` | Langsame Nacht | Nacht dauert länger |
| `NightTimeSpeedRate=2.000000` | Schnelle Nacht | Nacht vergeht schneller |

:::note Ausgewogene Einstellungen
Für ein natürlicheres Gameplay-Erlebnis solltest du extrem hohe Werte vermeiden. Sehr schnelle Tag- und Nachtwechsel können das Farmen, Erkunden und die Basisverwaltung erschweren.
:::

## Fazit

Glückwunsch, du hast erfolgreich die Tag- und Nachtgeschwindigkeit auf deinem Palworld-Server geändert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂