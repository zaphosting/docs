---
id: palworld-structure-damage-rate
title: "Palworld: Struktur-Schadensrate"
description: "Lerne, wie du die Struktur-Schadens- und Verfallsraten in Palworld sicher und korrekt durch Bearbeiten der Serverkonfiguration änderst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Struktur-Schadensrate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld ermöglicht dir, zu steuern, wie viel Schaden Strukturen erleiden und wie schnell sie im Laufe der Zeit verfallen. In dieser Anleitung lernst du, wie du die richtige Konfigurationsdatei in deiner ZAP-Hosting Gameserver-Verwaltung manuell bearbeitest und die neuen Struktur-Schadenseinstellungen anwendest.



## Vorbereitung

Bevor du startest, stelle sicher, dass dein Palworld-Server bereits installiert ist und du Zugriff auf die Webverwaltung hast.

:::info Benötigter Zugriff
Du benötigst Zugriff auf dein ZAP-Hosting Gameserver Control Panel und den Bereich `Configs` für deinen Palworld-Server.
:::

:::note Manuelle Konfiguration
Diese Einrichtung erfolgt durch manuelles Bearbeiten der Palworld-Konfigurationsdatei. Die genauen Einstellungen werden in dieser Anleitung nicht über einen separaten One-Click-Schalter geändert.
:::

## Öffne die richtige Konfigurationsdatei

Um Struktur-Schaden und Verfall zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

In deiner ZAP-Hosting Gameserver-Verwaltung:

1. Öffne deinen **Palworld**-Server.
2. Navigiere zu **Configs**.
3. Öffne die Datei `PalWorldSettings.ini`.

Diese Datei enthält die wichtigsten Gameplay-Konfigurationswerte für deinen Server, inklusive strukturbezogener Multiplikatoren.

## Bearbeite die Struktur-Schadenseinstellungen

Die relevanten Werte sind in den Servereinstellungen innerhalb von `PalWorldSettings.ini` gespeichert.

### Relevante Konfigurationsschlüssel

Verwende folgende Einstellungen, um das Verhalten des Struktur-Schadens zu steuern:

| Konfigurationsschlüssel | Beschreibung | Standardwert |
| --- | --- | --- |
| `BuildObjectDamageRate` | Steuert, wie viel Schaden Strukturen erleiden | `1.0` |
| `BuildObjectDeteriorationDamageRate` | Steuert, wie schnell Strukturen im Laufe der Zeit verfallen | `1.0` |

Ein Wert von `1.0` ist die normale Standardrate. Niedrigere Werte reduzieren den Effekt, höhere Werte erhöhen ihn.

### Beispielkonfiguration

Je nach aktuellem Inhalt deiner Datei sind diese Werte typischerweise Teil der Serveroptionen in `PalWorldSettings.ini`.

```ini
BuildObjectDamageRate=1.0
BuildObjectDeteriorationDamageRate=1.0
```

Wenn deine Konfiguration eine kombinierte Optionszeile verwendet, ändere nur die Werte und lasse die umgebende Syntax unverändert.

Zum Beispiel:

```ini
OptionSettings=(BuildObjectDamageRate=1.0,BuildObjectDeteriorationDamageRate=1.0)
```

:::caution Syntax unverändert lassen
`PalWorldSettings.ini` kann viele Einstellungen in einer einzigen `OptionSettings=(...)`-Zeile enthalten. Falls das bei deinem Server der Fall ist, entferne beim Bearbeiten keine Kommas, Klammern oder andere bestehende Einträge.
:::

## Wähle passende Werte

Du kannst die Multiplikatoren anpassen, je nachdem, wie widerstandsfähig Spieler-Strukturen sein sollen.

### Struktur-Schadensmultiplikator

`BuildObjectDamageRate` ändert, wie viel direkten Schaden eine Struktur erhält.

| Wert | Effekt |
| --- | --- |
| `0.5` | Strukturen erleiden halben Schaden |
| `1.0` | Standard-Struktur-Schaden |
| `2.0` | Strukturen erleiden doppelten Schaden |

### Struktur-Verfallsmultiplikator

`BuildObjectDeteriorationDamageRate` ändert, wie schnell Strukturen im Laufe der Zeit verfallen.

| Wert | Effekt |
| --- | --- |
| `0.1` | Sehr langsamer Verfall |
| `1.0` | Standard-Verfallsgeschwindigkeit |
| `2.0` | Schnellerer Verfall |

:::tip Empfohlenes Mindestverfallstempo
Es wird empfohlen, `BuildObjectDeteriorationDamageRate` bei mindestens `0.1` zu belassen. Sehr niedriger oder deaktivierter Verfall kann dazu führen, dass ungenutzte Strukturen länger bestehen bleiben, was die Aufräumprozesse und Serverleistung langfristig negativ beeinflussen kann.
:::

## Speichere die Datei und starte den Server neu

Nachdem du die Werte in `PalWorldSettings.ini` bearbeitet hast, speichere die Datei im Bereich `Configs`.

Danach musst du den Palworld-Server neu starten, damit die neuen Struktur-Schadenseinstellungen geladen werden.

### Erforderliche Schritte nach der Bearbeitung

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzlicher Konsolenbefehl | Kein bestätigter Befehl erforderlich |

:::info Neustart erforderlich
Änderungen an `BuildObjectDamageRate` und `BuildObjectDeteriorationDamageRate` werden erst nach einem Serverneustart zuverlässig angewendet.
:::

## Überprüfe die Änderungen

Sobald der Server wieder online ist, verbinde dich mit deinem Palworld-Server und teste das neue Verhalten.

Du kannst die Änderungen überprüfen, indem du feststellst, ob:

- Strukturen mehr oder weniger direkten Schaden als zuvor erleiden
- verlassene oder exponierte Strukturen mit der erwarteten Geschwindigkeit verfallen

Falls die Änderungen nicht wirksam sind, öffne `PalWorldSettings.ini` erneut und prüfe, ob:

- die Einstellungsschlüssel exakt `BuildObjectDamageRate` und `BuildObjectDeteriorationDamageRate` heißen
- die Werte an der richtigen Stelle oder in der richtigen `OptionSettings`-Zeile stehen
- der Server nach dem Speichern neu gestartet wurde

## Fazit

Glückwunsch, du hast erfolgreich die Struktur-Schadens- und Verfallsraten auf deinem Palworld-Server geändert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂