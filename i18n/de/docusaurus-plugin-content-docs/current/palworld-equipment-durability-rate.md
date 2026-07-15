---
id: palworld-equipment-durability-rate
title: "Palworld: Haltbarkeit der Ausrüstung"
description: "Erfahre, wie du die Haltbarkeit der Ausrüstung änderst und die Haltbarkeitsrate auf deinem Palworld-Server anpasst, indem du den richtigen Config-Wert bearbeitest. -> Jetzt mehr erfahren"
sidebar_label: "Haltbarkeit der Ausrüstung"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In Palworld steuert die Haltbarkeitsrate der Ausrüstung, wie schnell deine Werkzeuge, Waffen und Rüstungen während der Nutzung an Haltbarkeit verlieren. In dieser Anleitung lernst du, wie du die Einstellung `EquipmentDurabilityDamageRate` manuell in der Konfiguration deines ZAP-Hosting Palworld-Servers änderst und die Änderung korrekt anwendest.



## Preparation

Bevor du startest, stelle sicher, dass du Zugriff auf die Verwaltung deines Palworld-Gameservers im ZAP-Hosting Webinterface hast. Du benötigst außerdem die Berechtigung, die Server-Konfigurationsdateien unter **Configs** zu bearbeiten.

:::info Manuelle Konfiguration erforderlich
Diese Einstellung muss manuell in der Palworld-Konfigurationsdatei geändert werden. Es gibt keinen separaten Befehl, der im Spiel für diese Änderung ausgeführt werden muss.
:::

## Die Haltbarkeitseinstellung verstehen

Palworld speichert viele Gameplay-Einstellungen in der Konfigurationsdatei `PalWorldSettings.ini`. Relevant für die Haltbarkeit der Ausrüstung ist:

- `EquipmentDurabilityDamageRate`

Dieser Wert wirkt als Multiplikator für den Haltbarkeitsverlust:

| Config-Schlüssel | Beschreibung | Standardwert |
| --- | --- | --- |
| `EquipmentDurabilityDamageRate` | Steuert, wie schnell Ausrüstung Haltbarkeit verliert | `1.000000` |

Niedrigere Werte reduzieren den Haltbarkeitsverlust, wodurch deine Ausrüstung länger hält. Ein Wert von `0.000000` deaktiviert den Haltbarkeitsverlust für Ausrüstung komplett.

:::note Was diese Einstellung beeinflusst
Diese Einstellung ändert die Haltbarkeitsverlust-Rate für Ausrüstung wie Werkzeuge, Waffen und Rüstungen. Sie erhöht nicht den Schaden von Items, die Reparaturgeschwindigkeit oder die Item-Qualität.
:::

## Die Palworld-Konfigurationsdatei öffnen

Um die Einstellung zu ändern, musst du die Hauptkonfigurationsdatei deines Palworld-Servers über die ZAP-Hosting Gameserver-Verwaltung bearbeiten.

### Datei im ZAP-Hosting Interface finden

1. Melde dich auf der ZAP-Hosting Webseite an.
2. Öffne die Verwaltung deines **Palworld** Gameservers.
3. Gehe zu **Configs**.
4. Öffne die Datei `PalWorldSettings.ini`.

In dieser Datei sind Gameplay-Werte wie Haltbarkeit, Ausdauer, Schaden und andere Welteinstellungen gespeichert.

## Die Haltbarkeitsrate der Ausrüstung bearbeiten

Nachdem du `PalWorldSettings.ini` geöffnet hast, suche die Zeile mit `OptionSettings`. Palworld speichert Gameplay-Einstellungen typischerweise als kommaseparierte Einträge in diesem Abschnitt.

### Config-Eintrag hinzufügen oder ändern

Stelle sicher, dass folgender Eintrag in `OptionSettings` vorhanden ist:

```ini
EquipmentDurabilityDamageRate=1.000000
```

Wenn der Schlüssel bereits existiert, ersetze den aktuellen Wert durch deinen gewünschten. Falls er fehlt, füge ihn innerhalb des bestehenden `OptionSettings=(...)` Blocks hinzu.

### Beispielwerte

Je nach gewünschtem Ergebnis kannst du folgende Werte verwenden:

| Wert | Effekt |
| --- | --- |
| `1.000000` | Standard-Haltbarkeitsverlust |
| `0.500000` | Ausrüstung hält etwa doppelt so lange |
| `0.250000` | Ausrüstung hält etwa viermal so lange |
| `0.000000` | Ausrüstung wird unzerstörbar |

### Beispiel-Konfigurationsausschnitt

Der genaue Inhalt deiner `OptionSettings`-Zeile kann je nach Server-Setup variieren, aber die Haltbarkeitseinstellung sollte in derselben kommaseparierten Liste auftauchen, zum Beispiel:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,EquipmentDurabilityDamageRate=0.500000)
```

:::caution Bestehende Formatierung beibehalten
Entferne beim Bearbeiten der Datei keine anderen Werte aus der `OptionSettings`-Zeile. Palworld erwartet, dass diese Einstellungen im korrekten kommaseparierten Format bleiben.
:::

## Änderungen speichern und anwenden

Speichere nach der Bearbeitung der Konfigurationsdatei deine Änderungen im ZAP-Hosting Interface.

### Server neu starten

Um die neue Haltbarkeitseinstellung zu aktivieren, starte deinen Palworld-Server über die Gameserver-Verwaltung neu.

Ohne Neustart lädt der Server die aktualisierte Konfiguration normalerweise nicht.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Ingame-Befehl ausführen | Nein |
| Server neu installieren | Nein |

:::tip Änderungen zuerst mit kleinem Wert testen
Wenn du unsicher bist, welcher Haltbarkeitswert zu deinem Spielstil passt, starte mit `0.500000`. Das gibt eine spürbare Haltbarkeitsverbesserung, ohne die Mechanik komplett zu deaktivieren.
:::

## Fehlerbehebung

Falls das neue Haltbarkeitsverhalten nach dem Neustart nicht greift, prüfe folgende Punkte.

### Config-Schlüssel überprüfen

Stelle sicher, dass der Schlüssel exakt so geschrieben ist:

```ini
EquipmentDurabilityDamageRate
```

Palworld-Konfigurationsschlüssel sind in der Praxis case-sensitive für eine zuverlässige Verwaltung, kopiere den Namen also genau wie gezeigt.

### Platzierung in `OptionSettings` prüfen

Der Wert muss innerhalb des Abschnitts `OptionSettings=(...)` in der `PalWorldSettings.ini` stehen. Wenn du ihn außerhalb platzierst, ignoriert der Server ihn möglicherweise.

### Datei wurde gespeichert?

Nach der Bearbeitung unter **Configs** überprüfe, ob deine Änderungen noch vorhanden sind, wenn du `PalWorldSettings.ini` erneut öffnest. Falls nicht, wurde die Datei möglicherweise nicht erfolgreich gespeichert.

### Neustart bei Bedarf wiederholen

Wenn während der Änderung Spieler online waren oder der Server nicht sauber neu gestartet wurde, führe einen weiteren vollständigen Neustart über das Server-Admin-Panel durch.

## Conclusion

Glückwunsch, du hast die Haltbarkeitsrate der Ausrüstung auf deinem Palworld-Server erfolgreich geändert. Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung! 🙂