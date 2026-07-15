---
id: palworld-player-damage-and-defense
title: "Palworld: Spieler Schaden und Verteidigung"
description: "Lerne, wie du den Spielerschaden und die Spielerverteidigung in Palworld durch Bearbeiten der Serverkonfiguration und korrektes Anpassen der Schadensmultiplikatoren änderst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Spieler Schaden und Verteidigung
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld ermöglicht es dir, einzustellen, wie viel Schaden ein Spieler verursacht und wie viel Schaden ein Spieler erhält, indem du Serverkonfigurationswerte anpasst. In dieser Anleitung lernst du, wie du die richtige Konfigurationsdatei auf deinem ZAP-Hosting Gameserver bearbeitest, die Schadens- und Verteidigungsmultiplikatoren änderst und die Änderungen korrekt anwendest.



## Vorbereitung

Bevor du beginnst, stelle sicher, dass dein Palworld Server bereits installiert ist und du Zugriff auf die Webverwaltung hast.

Du benötigst:
- einen aktiven Palworld Gameserver bei ZAP-Hosting
- Zugriff auf die Weboberfläche des Gameservers
- Berechtigung, Dateien unter `Configs` zu bearbeiten

:::info Manuelle Konfiguration erforderlich
Diese Einrichtung erfolgt manuell durch Bearbeiten der Palworld-Konfigurationsdatei. Für diese spezifischen Einstellungen ist kein zusätzlicher Ingame-Befehl notwendig.
:::

## Öffne die richtige Konfigurationsdatei

Um den Spielerschaden und die Verteidigung zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

Im ZAP-Hosting Gameserver-Adminbereich:
1. Öffne deinen Palworld Server
2. Gehe zu `Configs`
3. Öffne `PalWorldSettings.ini`

Diese Datei enthält die wichtigsten Gameplay-Multiplikatoren, die vom Dedicated Server verwendet werden, einschließlich der Werte für Spielerschaden und erhaltenen Schaden.

:::note Speicherort der Konfiguration
Der Aufgaben-Kontext bestätigt, dass die relevante Datei über die Gameserver-Verwaltung unter `Configs` verfügbar ist. Falls dein Interface leicht abweicht, suche in der Liste der Konfigurationsdateien deines Servers nach `PalWorldSettings.ini`.
:::

## Bearbeite die Werte für Spielerschaden und Verteidigung

In der Datei `PalWorldSettings.ini` musst du die folgenden Konfigurationseinträge finden.

| Konfig-Schlüssel | Funktion | Standardwert |
| --- | --- | --- |
| `PlayerDamageRateAttack` | Steuert, wie viel Schaden ein Spieler verursacht | `1.000000` |
| `PlayerDamageRateDefense` | Steuert, wie viel Schaden ein Spieler erhält | `1.000000` |

Diese Werte befinden sich normalerweise im Hauptoptionsblock der Datei.

### Beispielkonfiguration

Nutze folgendes Beispiel als Referenz:

```ini
PlayerDamageRateAttack=1.000000
PlayerDamageRateDefense=1.000000
```

Falls diese Werte bereits existieren, ändere nur die Zahlen. Wenn deine Datei eine lange Optionszeile verwendet, bearbeite die vorhandenen Einträge sorgfältig, ohne Kommas, Klammern oder benachbarte Werte zu entfernen.

### Wie die Werte wirken

| Wert | Wirkung |
| --- | --- |
| Höherer `PlayerDamageRateAttack` | Spieler verursachen mehr Schaden |
| Niedrigerer `PlayerDamageRateAttack` | Spieler verursachen weniger Schaden |
| Höherer `PlayerDamageRateDefense` | Spieler erhalten weniger effektiven Schaden, abhängig von der Spielbalance, wird aber meist als Multiplikator für erhaltenen Schaden genutzt |
| Niedrigerer `PlayerDamageRateDefense` | Spieler erhalten mehr Schaden |

:::caution Verteidigungs-Multiplikator verstehen
`PlayerDamageRateDefense` beeinflusst den Multiplikator für den erhaltenen Schaden des Spielers. Ein niedrigerer Wert bedeutet, dass der Spieler mehr Schaden bekommt, während ein höherer Wert die relative Gefahr je nach Serverbalance weniger stark reduziert. Teste deine Einstellungen immer nach der Änderung.
:::

## Wähle passende Multiplikatorwerte

Du kannst die Einstellungen je nach gewünschtem Schwierigkeitsgrad deines Servers anpassen.

### Ausgewogenes Beispiel

Für ein überwiegend standardmäßiges Spielerlebnis, lasse beide Werte auf `1.000000`:

```ini
PlayerDamageRateAttack=1.000000
PlayerDamageRateDefense=1.000000
```

### Einfacheres Kampfbeispiel

Wenn Spieler mehr Schaden verursachen und leichter überleben sollen, kannst du den Angriff erhöhen und die Verteidigung vorsichtig anpassen:

```ini
PlayerDamageRateAttack=1.500000
PlayerDamageRateDefense=1.500000
```

### Schwierigeres Kampfbeispiel

Wenn Spieler weniger Schaden verursachen und mehr einstecken sollen, kannst du die Werte reduzieren:

```ini
PlayerDamageRateAttack=0.800000
PlayerDamageRateDefense=0.800000
```

:::tip Schrittweise anpassen
Ändere Multiplikatoren in kleinen Schritten wie `0.1` oder `0.25`. So findest du leichter eine gute Balance, ohne dass der Kampf zu einfach oder zu hart wirkt.
:::

## Speichere die Datei und starte den Server neu

Nachdem du `PalWorldSettings.ini` bearbeitet hast, speichere die Datei im ZAP-Hosting `Configs` Bereich.

Starte anschließend deinen Palworld Server neu, damit die neuen Schadenseinstellungen geladen werden.

### Erforderliche Schritte nach der Bearbeitung

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Ingame-Befehl ausführen | Nein |
| Konsolenbefehl manuell ausführen | Nein |

:::info Neustart erforderlich
Änderungen an `PlayerDamageRateAttack` und `PlayerDamageRateDefense` werden erst nach einem Serverneustart zuverlässig angewendet.
:::

## Überprüfe die neuen Einstellungen

Nach dem Neustart verbinde dich mit deinem Server und teste den Kampf direkt.

Prüfe:
- ob der Spieler den erwarteten Schaden verursacht
- ob eingehende Angriffe stärker oder schwächer wirken
- ob die Gesamtbalance noch zu deinem gewünschten Gameplay passt

Wenn das Ergebnis nicht deinen Vorstellungen entspricht, gehe zurück zu `PalWorldSettings.ini`, passe die Multiplikatoren erneut an, speichere die Datei und starte den Server wieder neu.

## Fazit

Glückwunsch, du hast erfolgreich die Spielerschaden- und Verteidigungseinstellungen auf deinem Palworld Server geändert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂