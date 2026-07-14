---
id: palworld-supply-drop-settings
title: "Palworld: Supply Drop Einstellungen"
description: "Lerne, wie du die Supply Drop Frequenz auf deinem Palworld Gameserver manuell über die Einstellung SupplyDropSpan änderst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Supply Drop Einstellungen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld beinhaltet Supply Drops, die in regelmäßigen Abständen erscheinen und nützliche Ressourcen im Spiel liefern können. In dieser Anleitung lernst du, wie du die Supply Drop Frequenz auf deinem ZAP-Hosting Palworld Gameserver manuell über die richtige Konfigurationsdatei änderst.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Webinterface hast und die Berechtigung, Server-Konfigurationsdateien zu bearbeiten.

:::info Manuelle Konfiguration erforderlich
Diese Einstellung erfolgt manuell über deine Serververwaltung unter **Configs**. Nach der Änderung musst du den Server neu starten, damit Palworld die aktualisierte Konfiguration lädt.
:::

## Finde die richtige Konfigurationsdatei

Um das Intervall der Supply Drops zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

Im ZAP-Hosting Webinterface:

1. Öffne die Verwaltung deines Palworld Gameservers.
2. Navigiere zu **Configs**.
3. Öffne die Datei `PalWorldSettings.ini`.

Diese Datei enthält die wichtigsten Gameplay-Konfigurationswerte für deinen Palworld Server, inklusive der Einstellung für den Supply Drop Timer.

## Supply Drop Einstellung bearbeiten

In der Datei `PalWorldSettings.ini` suchst du den Abschnitt `OptionSettings` und findest dort den Eintrag `SupplyDropSpan`.

Der relevante Konfigurationsschlüssel sieht so aus:

| Einstellung | Beschreibung | Beispiel |
| --- | --- | --- |
| `SupplyDropSpan` | Definiert das Intervall zwischen Supply Drops in Minuten | `180` |

Falls der Eintrag bereits existiert, ändere den Wert auf dein gewünschtes Intervall.

### Beispielwerte

Zur Orientierung kannst du folgende Werte verwenden:

| Wert | Ergebnis |
| --- | --- |
| `30` | Sehr häufige Supply Drops |
| `60` | Supply Drops alle 1 Stunde |
| `180` | Standardwert, alle 3 Stunden |
| `360` | Supply Drops alle 6 Stunden |

### Beispielkonfiguration

Je nach Inhalt deiner Datei erscheint die Einstellung als Teil der größeren `OptionSettings`-Zeile. Zum Beispiel:

```ini
OptionSettings=(SupplyDropSpan=180)
```

Wenn deine Datei bereits viele Einstellungen im gleichen `OptionSettings=(...)` Block enthält, ändere nur den Wert von `SupplyDropSpan` und lasse die anderen Einträge unverändert.

Zum Beispiel:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,SupplyDropSpan=60)
```

:::caution Bestehende Einstellungen erhalten
Entferne beim Bearbeiten von `SupplyDropSpan` keine anderen Werte aus dem `OptionSettings`-Block. Wenn du versehentlich Kommas, Klammern oder andere Einträge löschst, kann deine Palworld-Konfiguration nicht mehr korrekt geladen werden.
:::

## Änderungen speichern und anwenden

Nachdem du den Wert von `SupplyDropSpan` aktualisiert hast:

1. Speichere die Änderungen in der Datei `PalWorldSettings.ini`.
2. Starte deinen Palworld Server über die ZAP-Hosting Serververwaltung neu.

Ein Neustart ist notwendig, da Palworld diese Einstellung nicht live während des laufenden Servers übernimmt.

:::note Kein zusätzlicher Befehl nötig
Normalerweise ist kein weiterer Ingame- oder Konsolenbefehl erforderlich. Der Neustart des Servers ist der notwendige Schritt, um das neue Supply Drop Intervall anzuwenden.
:::

## Neues Supply Drop Intervall überprüfen

Nach dem Neustart verwendet dein Server den neuen Wert für `SupplyDropSpan`. Du kannst die Änderung überprüfen, indem du die Zeit zwischen den Supply Drop Events im Spiel beobachtest.

Falls die Änderung nicht zu wirken scheint, prüfe Folgendes:

| Prüfen | Was zu kontrollieren ist |
| --- | --- |
| Richtige Datei | Du hast `PalWorldSettings.ini` bearbeitet |
| Richtiger Ort | Die Datei wurde über **Configs** in deiner Serververwaltung geöffnet |
| Korrekte Syntax | `SupplyDropSpan` ist korrekt geschrieben und bleibt im `OptionSettings`-Block |
| Server Neustart | Der Server wurde nach dem Speichern vollständig neu gestartet |

:::tip Wähle einen ausgewogenen Wert
Sehr niedrige Werte können dazu führen, dass Supply Drops viel häufiger als im normalen Palworld Gameplay erscheinen. Wenn du häufigere Events möchtest, ohne es zu übertreiben, ist `60` meist ein guter Startwert.
:::

## Conclusion

Glückwunsch, du hast die Supply Drop Frequenz auf deinem Palworld Server erfolgreich geändert. Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung! 🙂