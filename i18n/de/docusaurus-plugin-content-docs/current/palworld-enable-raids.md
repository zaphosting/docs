---
id: palworld-enable-raids
title: "Palworld: Raids aktivieren"
description: "Erfahre, wie du Raids auf deinem Palworld Gameserver aktivierst oder deaktivierst, indem du die richtige Konfigurationseinstellung für Angriffe von Eindringlingen anpasst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Raids aktivieren
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld Raids sind Angriffe von Eindringlingen, die Spielerbasen auf deinem Server ins Visier nehmen können. In dieser Anleitung lernst du, wie du Raids aktivierst oder deaktivierst, indem du die richtige Konfigurationsdatei in der ZAP-Hosting Gameserver-Verwaltung manuell bearbeitest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver über die ZAP-Hosting Weboberfläche hast und die Berechtigung besitzt, Server-Konfigurationsdateien zu bearbeiten.

:::info Manuelle Konfiguration erforderlich
Diese Einrichtung erfolgt durch manuelles Bearbeiten der Palworld Server-Konfiguration unter **Configs** in deiner Gameserver-Verwaltung. Nach dem Speichern der Änderungen musst du den Server neu starten, damit die neue Einstellung wirksam wird.
:::

## Finde die richtige Konfigurationsdatei

Um Raids zu aktivieren oder zu deaktivieren, musst du die Datei `PalWorldSettings.ini` bearbeiten.

In der ZAP-Hosting Gameserver-Verwaltung:

1. Öffne deinen **Palworld** Gameserver.
2. Navigiere zu **Configs**.
3. Öffne die Datei mit dem Namen `PalWorldSettings.ini`.

Diese Datei enthält die wichtigsten Gameplay-Konfigurationswerte für deinen Palworld Server, inklusive der Einstellung, die steuert, ob Raids aktiviert sind.

## Raid-Einstellung bearbeiten

Suche in der Datei `PalWorldSettings.ini` den Abschnitt `OptionSettings`. Der relevante Konfigurationsschlüssel lautet:

```ini
bEnableInvaderEnemy=True
```

Diese Einstellung steuert, ob Angriffe von Eindringlingen auf dem Server aktiv sind.

### Raids aktivieren

Wenn du Raids aktivieren möchtest, setze den Wert auf `True`:

```ini
bEnableInvaderEnemy=True
```

Mit diesem Wert können während des Spiels periodisch feindliche Angriffe auf Spielerbasen stattfinden.

### Raids deaktivieren

Wenn du Raids deaktivieren möchtest, setze den Wert auf `False`:

```ini
bEnableInvaderEnemy=False
```

Dadurch werden Angriffe von Eindringlingen komplett deaktiviert, was ein ruhigeres Bauen ermöglicht und die Serverlast leicht reduzieren kann.

## Konfigurationsübersicht

Nutze die folgende Tabelle als schnelle Referenz für die Raid-Einstellung:

| Konfigurationsdatei | Konfigurationsschlüssel | Wert | Wirkung |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `True` | Aktiviert Raids und Angriffe von Eindringlingen |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `False` | Deaktiviert alle Raids und Angriffe von Eindringlingen |

:::note Standardverhalten
Das Standardverhalten des Palworld Servers ist in der Regel `bEnableInvaderEnemy=True`, also sind Raids standardmäßig aktiviert, sofern du die Einstellung nicht manuell änderst.
:::

## Änderungen speichern und anwenden

Nachdem du den Wert in `PalWorldSettings.ini` bearbeitet hast, speichere die Datei im ZAP-Hosting **Configs** Bereich.

Danach musst du deinen Palworld Server neu starten, damit die aktualisierte Konfiguration geladen wird.

### Server neu starten

Nutze die Neustart-Funktion in deiner ZAP-Hosting Gameserver-Verwaltung, nachdem du die Datei gespeichert hast.

:::caution Neustart erforderlich
Wenn du den Server nicht neu startest, wird die geänderte Raid-Einstellung möglicherweise nicht übernommen. Das reine Bearbeiten der Datei reicht nicht aus.
:::

## Einstellung überprüfen

Nach dem Neustart sollte deine neue Raid-Konfiguration aktiv sein.

- Wenn `bEnableInvaderEnemy=True`, sind Raids aktiviert.
- Wenn `bEnableInvaderEnemy=False`, sind Raids deaktiviert.

Falls die Einstellung nicht zu wirken scheint, öffne `PalWorldSettings.ini` erneut und überprüfe, ob der Wert korrekt und ohne Formatierungsfehler gespeichert wurde.

:::tip Ruhiges Basenbauen
Das Deaktivieren von Raids kann sinnvoll sein, wenn du dich auf Erkundung, Basenbau oder entspanntes Koop-Gameplay ohne periodische Feindangriffe konzentrieren möchtest.
:::

## Fazit

Glückwunsch, du hast erfolgreich Raids auf deinem Palworld Gameserver aktiviert oder deaktiviert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂