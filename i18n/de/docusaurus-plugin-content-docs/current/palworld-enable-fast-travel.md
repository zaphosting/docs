---
id: palworld-enable-fast-travel
title: "Palworld: Schnelles Reisen aktivieren"
description: "Lerne, wie du schnelles Reisen auf deinem Palworld-Gameserver konfigurierst, inklusive Basis-Only-Schnellreise und manueller Config-Anpassungen. -> Jetzt mehr erfahren"
sidebar_label: "Schnelles Reisen aktivieren"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld ermöglicht dir, über die Hauptserver-Konfiguration zu steuern, wie Spieler schnelles Reisen auf deinem Gameserver nutzen können. In dieser Anleitung lernst du, wie du die richtige Config-Datei im ZAP-Hosting Interface bearbeitest, die Schnellreise-Einstellungen anpasst und die Änderungen korrekt anwendest.



## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld-Gameserver im ZAP-Hosting Webinterface hast und die Berechtigung, die Konfigurationsdateien zu bearbeiten.

:::info Manuelle Konfiguration erforderlich
Diese Einrichtung erfolgt durch manuelles Bearbeiten der Palworld-Serverkonfiguration. Die benötigte Datei findest du in der Gameserver-Verwaltung unter `Configs`.
:::

## Finde die Konfigurationsdatei

Um das Verhalten des schnellen Reisens zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

Im ZAP-Hosting Gameserver-Panel:

1. Öffne deinen Palworld-Gameserver.
2. Navigiere zu `Configs`.
3. Öffne die Datei `PalWorldSettings.ini`.

Diese Datei enthält die gameplay-relevanten Servereinstellungen, darunter auch die Optionen für schnelles Reisen.

:::note Speicherort der Konfiguration
Je nach aktuellem Panel-Layout wird die Datei über den Bereich `Configs` in deiner Serververwaltung verwaltet. Falls der genaue Pfad im Interface nicht angezeigt wird, kannst du die benötigten Werte trotzdem sicher direkt in `PalWorldSettings.ini` bearbeiten.
:::

## Verstehe die Schnellreise-Einstellungen

Palworld bietet zwei relevante Konfigurationsschlüssel für das Verhalten des schnellen Reisens.

| Config-Schlüssel | Werttyp | Standardwert | Funktion |
| --- | --- | --- | --- |
| `bEnableFastTravel` | `True` / `False` | `True` | Aktiviert oder deaktiviert schnelles Reisen komplett |
| `bEnableFastTravelOnlyBaseCamp` | `True` / `False` | `False` | Beschränkt schnelles Reisen auf Reisen zwischen Basen |

Diese Werte sind Teil der Optionszeichenkette in der Datei `PalWorldSettings.ini`.

:::tip Die richtige Einstellung wählen
Wenn du ein immersiveres Reiseerlebnis mit mehr Erkundung möchtest, kannst du schnelles Reisen komplett deaktivieren. Möchtest du Reisen verfügbar halten, aber die Bewegungsfreiheit der Spieler einschränken, ist die Basis-Only-Schnellreise meist die bessere Wahl.
:::

## Bearbeite die Schnellreise-Werte

Öffne `PalWorldSettings.ini` und suche den Abschnitt `OptionSettings=`. In Palworld werden viele Servereinstellungen als kommaseparierte Werte in diesem Eintrag gespeichert.

### Normales schnelles Reisen aktivieren

Um das Standard-Schnellreisen zu erlauben, stelle sicher, dass folgender Wert vorhanden ist:

```ini
bEnableFastTravel=True
```

Wenn Spieler alle normalen Schnellreiseoptionen nutzen sollen, muss außerdem dieser Wert so gesetzt sein:

```ini
bEnableFastTravelOnlyBaseCamp=False
```

### Schnelles Reisen komplett deaktivieren

Um schnelles Reisen komplett auszuschalten, setze:

```ini
bEnableFastTravel=False
```

Dann müssen Spieler manuell durch die Welt reisen.

### Schnelles Reisen nur zwischen Basen erlauben

Wenn du schnelles Reisen nur zwischen Basiscamps erlauben möchtest, verwende diese Kombination:

```ini
bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True
```

Diese Einstellung ist besonders beliebt bei PvP-Servern, da sie begrenztes Reisen erlaubt, ohne den Spielern uneingeschränkte Bewegungsfreiheit zu geben.

:::caution Syntax nicht verändern
Entferne keine anderen bestehenden Werte aus der `OptionSettings=`-Zeile, es sei denn, du möchtest sie bewusst ändern. Palworld speichert viele Einstellungen in einem einzigen kommaseparierten Eintrag, falsche Formatierung kann dazu führen, dass Einstellungen nicht geladen werden.
:::

## Beispielkonfiguration

Hier ein Beispiel, wie der relevante Teil der Konfiguration in `PalWorldSettings.ini` aussehen kann:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True)
```

Ersetze die Schnellreise-Werte in deiner bestehenden Konfiguration entsprechend der gewünschten Einstellung.

:::note Bestehende Serverkonfigurationen
Deine `OptionSettings=`-Zeile enthält in der Regel deutlich mehr Werte als im Beispiel. Du musst nur `bEnableFastTravel` und `bEnableFastTravelOnlyBaseCamp` anpassen und den Rest der Zeile unverändert lassen.
:::

## Empfohlene Konfigurationen

Je nach Servertyp kannst du folgende Kombinationen verwenden:

| Serverstil | `bEnableFastTravel` | `bEnableFastTravelOnlyBaseCamp` | Ergebnis |
| --- | --- | --- | --- |
| Standard Gameplay | `True` | `False` | Vollständiges schnelles Reisen aktiviert |
| Erkundungsfokus | `False` | `False` | Komplett kein schnelles Reisen |
| PvP oder eingeschränktes Reisen | `True` | `True` | Schnelles Reisen nur zwischen Basen |

## Änderungen anwenden

Nachdem du deine Änderungen in `PalWorldSettings.ini` gespeichert hast, musst du den Server neu starten, damit die neuen Einstellungen geladen werden.

### Server neu starten

Nutze die Neustart-Funktion in deiner ZAP-Hosting Gameserver-Verwaltung nach dem Speichern der Datei.

Normalerweise sind keine weiteren Ingame- oder Konsolenbefehle nötig. Die neue Schnellreise-Konfiguration wird beim Serverstart angewendet.

:::info Neustart erforderlich
Änderungen an `PalWorldSettings.ini` werden erst nach einem Neustart des Palworld-Servers zuverlässig übernommen.
:::

## Ergebnis überprüfen

Sobald der Server wieder online ist, verbinde dich und teste das Schnellreise-Verhalten im Spiel.

Du solltest überprüfen, dass:

- das vollständige schnelle Reisen funktioniert, wenn aktiviert
- keine Schnellreiseoptionen verfügbar sind, wenn deaktiviert
- nur Reisen zwischen Basen möglich sind, wenn Basis-Only aktiviert ist

:::tip Fehlerbehebung bei falschem Verhalten
Wenn die Einstellung nicht greift, öffne `PalWorldSettings.ini` erneut und prüfe die Formatierung der `OptionSettings=`-Zeile, besonders auf fehlende Kommata, doppelte Schlüssel oder ungültige `True` / `False` Werte.
:::

## Fazit

Glückwunsch, du hast schnelles Reisen auf deinem Palworld-Gameserver erfolgreich aktiviert oder konfiguriert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂