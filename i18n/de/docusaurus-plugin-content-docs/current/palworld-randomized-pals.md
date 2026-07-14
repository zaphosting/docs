---
id: palworld-randomized-pals
title: "Palworld: Randomisierte Pals"
description: "Erfahre, wie du randomisierte Pals in Palworld aktivierst, indem du deine Serverkonfiguration bearbeitest, inklusive Randomizer-Typ und Seed-Einstellungen für die Palworld-Spielwelt. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Randomisierte Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld bietet Randomizer-Einstellungen, die beeinflussen, wie Pals in deiner Spielwelt spawnen. In dieser Anleitung lernst du, wie du randomisierte Pals auf deinem ZAP-Hosting Palworld Gameserver manuell aktivierst und konfigurierst, indem du die richtige Konfigurationsdatei bearbeitest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Webinterface hast und die Berechtigung besitzt, Serverkonfigurationsdateien zu bearbeiten.

:::info Zugriff auf Konfiguration erforderlich
Du benötigst Zugriff auf die Webverwaltung deines Servers, um den Bereich `Configs` zu öffnen und die Palworld-Konfigurationsdateien zu bearbeiten.
:::

## Öffne die richtige Konfigurationsdatei

Um randomisierte Pals zu konfigurieren, musst du die Datei `PalWorldSettings.ini` bearbeiten.

Im ZAP-Hosting Gameserver-Adminbereich:

1. Öffne deinen **Palworld** Gameserver.
2. Navigiere zu **Configs**.
3. Öffne die Datei mit dem Namen `PalWorldSettings.ini`.

Diese Datei enthält die wichtigsten Gameplay-Konfigurationswerte für deinen Palworld Gameserver, inklusive der Randomizer-Optionen.

## Randomisierte Pals konfigurieren

Die Randomizer-Einstellungen sind als Schlüssel in der Datei `PalWorldSettings.ini` gespeichert. Du musst den vorhandenen Einstellungsblock finden und die relevanten Werte manuell anpassen.

### Übersicht der Randomizer-Einstellungen

Verwende folgende Konfigurationsschlüssel für randomisierte Pal-Spawns:

| Konfig-Schlüssel | Erlaubte Werte | Standard | Zweck |
| --- | --- | --- | --- |
| `RandomizerType` | `None`, `Region` | `None` | Steuert, ob randomisierte Pal-Spawns deaktiviert oder nach Region randomisiert sind |
| `bIsRandomizerPalLevelRandom` | `True`, `False` | `False` | Aktiviert vollständig zufällige wilde Pal-Level bei `True` |
| `RandomizerSeed` | `[dein_seed_wert]` oder leer | `""` | Definiert den Seed, der bei der Welterstellung verwendet wird |

:::caution Kompatibilität mit Dedicated Servern
Der Wert `All` wurde als inkompatibel mit Palworld Dedicated Servern gemeldet. Verwende nur unterstützte Werte wie `None` oder `Region`.
:::

### Beispielkonfiguration

Füge folgende Werte in deiner `PalWorldSettings.ini` Datei hinzu oder passe sie an:

```ini
RandomizerType=Region
bIsRandomizerPalLevelRandom=True
RandomizerSeed="zaphosting"
```

Ersetze `zaphosting` durch deinen eigenen Seed-Wert, wenn du ein bestimmtes Randomisierungsmuster möchtest. Ein Seed sorgt dafür, dass bei der Welterstellung immer dasselbe Zufallsmuster verwendet wird.

### Bedeutung der einzelnen Einstellungen

#### `RandomizerType`

Diese Einstellung steuert, ob Pal-Spawns randomisiert werden.

- `None` deaktiviert die Randomisierung
- `Region` aktiviert regionale Randomisierung der Pal-Spawns

Wenn du randomisierte Pals in deiner Palworld-Weltkarte möchtest, setze diesen Wert auf `Region`.

#### `bIsRandomizerPalLevelRandom`

Diese Einstellung steuert die Level der wilden Pals.

- `False` behält das normale Levelverhalten bei
- `True` aktiviert vollständig zufällige wilde Pal-Level

Das macht das Palworld-Spiel besonders in der frühen Progression deutlich unvorhersehbarer.

#### `RandomizerSeed`

Diese optionale Einstellung definiert den Seed, der bei der Welterstellung für die Randomisierung verwendet wird.

Beispiel:

```ini
RandomizerSeed="[dein_seed_wert]"
```

Ersetze `[dein_seed_wert]` durch einen beliebigen Text oder eine Zahl, die du als Seed verwenden möchtest.

:::note Seed-Verhalten
Der Randomizer-Seed wird bei der Welterstellung angewendet. Wenn du `RandomizerSeed` später in einer bestehenden Welt änderst, wirkt sich das nicht aus, es sei denn, du setzt die Welt zurück oder startest eine neue.
:::

## Änderungen speichern und anwenden

Nachdem du die Datei bearbeitet hast, speichere deine Änderungen im ZAP-Hosting Bereich `Configs`.

Starte anschließend deinen Palworld Gameserver neu, damit die aktualisierte Konfiguration geladen wird.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzliche Konsolenbefehle ausführen | Nein |
| Welt zurücksetzen für Seed-Änderungen bei bestehendem Save | Ja, falls `RandomizerSeed` geändert wurde |

:::tip Wann du eine neue Welt starten solltest
Wenn du die Randomisierung zum ersten Mal aktivierst, besonders mit einem eigenen `RandomizerSeed`, ist es am besten, eine frische Welt zu verwenden, damit die Einstellungen wie gewünscht greifen.
:::

## Ergebnis überprüfen

Nach dem Neustart verbinde dich mit deinem Server und prüfe, ob sich die Pal-Spawns entsprechend deiner Randomizer-Einstellungen verhalten.

Überprüfe:

- ob die randomisierten regionalen Spawns aktiv sind
- ob wilde Pal-Level randomisiert sind, falls aktiviert
- ob das erwartete Weltverhalten mit deinem konfigurierten Seed in einer neuen Welt übereinstimmt

Wenn die Änderungen nicht wirken, öffne `PalWorldSettings.ini` erneut und kontrolliere:

- ob die Schlüssel korrekt eingetragen sind
- ob die Werte gültige Groß-/Kleinschreibung wie `True` und `False` haben
- ob der Server nach dem Speichern neu gestartet wurde
- ob eine neue Welt erstellt wurde, falls du den Seed geändert hast

## Fehlerbehebung

### Randomisierte Pals erscheinen nicht

Prüfe, ob `RandomizerType=Region` in `PalWorldSettings.ini` steht. Wenn dort noch `None` steht, ist die Randomisierung deaktiviert.

### Seed-Änderungen wirken nicht

Das bedeutet meist, dass die Welt schon vor der neuen Seed-Einstellung generiert wurde. Du musst die Welt zurücksetzen oder eine neue erstellen, damit der Seed angewendet wird.

### Serverprobleme nach Randomizer-Änderungen

Wenn du einen nicht unterstützten Wert wie `All` verwendet hast, setze die Einstellung auf einen unterstützten Wert wie `None` oder `Region` zurück, speichere die Datei und starte den Server neu.

:::danger Vermeide nicht unterstützte Randomizer-Werte
Verwende `RandomizerType=All` auf einem Dedicated Server nicht, es sei denn, die offizielle Palworld Server-Dokumentation bestätigt die Unterstützung. Diese Einstellung ist aktuell als inkompatibel mit Dedicated Servern bekannt.
:::

## Fazit

Glückwunsch, du hast erfolgreich randomisierte Pals auf deinem Palworld Gameserver konfiguriert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂