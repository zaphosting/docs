---
id: palworld-item-weight
title: "Palworld: Itemgewicht"
description: "Lerne, wie du den Itemgewicht-Multiplikator in Palworld änderst, indem du die Itemgewicht-Einstellung in deiner Serverkonfiguration anpasst, um das Tragegewicht besser auszubalancieren. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Itemgewicht
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In Palworld kannst du das Itemgewicht auf deinem Server anpassen, indem du einen Konfigurationswert in der Haupt-Servereinstellungsdatei änderst. In dieser Anleitung erfährst du, wo du die richtige Datei im ZAP-Hosting Webinterface findest, welche `item weight`-Einstellung du bearbeiten musst und wie du die Änderung korrekt anwendest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Bevor du startest, stelle sicher, dass dein Palworld Gameserver online ist und du Zugriff auf die Webadministration hast.

:::info Erforderlicher Zugriff
Du benötigst Zugriff auf dein Palworld Server-Administrationspanel im ZAP-Hosting Webinterface, um Konfigurationsdateien unter **Configs** bearbeiten zu können.
:::

## Öffne die Palworld Konfigurationsdatei

Um den Itemgewicht-Multiplikator zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

Im ZAP-Hosting Gameserver-Administrationsbereich:

1. Öffne deinen Palworld Server.
2. Gehe zu **Configs**.
3. Öffne die Datei `PalWorldSettings.ini`.

Diese Datei enthält die wichtigsten Gameplay-Konfigurationswerte, die dein Palworld Server verwendet.

:::note Zweck der Konfigurationsdatei
`PalWorldSettings.ini` speichert verschiedene Gameplay-Modifikatoren, darunter Werte für Schaden, Ausdauer, Drops und das `item weight`.
:::

## Bearbeite die Itemgewicht-Einstellung

Suche in der Datei `PalWorldSettings.ini` den Abschnitt `OptionSettings` und finde den Eintrag `ItemWeightRate`.

Falls der Eintrag bereits vorhanden ist, ändere seinen Wert. Falls er fehlt, füge ihn in die Parameterliste von `OptionSettings` ein.

### Konfigurationsschlüssel

Verwende folgende Einstellung:

```ini
ItemWeightRate=1.000000
```

### Bedeutung des Werts

`ItemWeightRate` steuert den Gewichtsmultiplikator für Items auf deinem Server.

| Konfigurationsschlüssel | Standardwert | Wirkung |
|---|---:|---|
| `ItemWeightRate` | `1.000000` | Standard-Itemgewicht |
| `ItemWeightRate` kleiner als `1.0` | Beispiel: `0.500000` | Items wiegen weniger, Spieler können mehr tragen |
| `ItemWeightRate` größer als `1.0` | Beispiel: `2.000000` | Items wiegen mehr, Spieler können weniger tragen |

### Beispielwerte

Je nach gewünschtem Gameplay-Balance kannst du einen der folgenden Werte verwenden:

| Gewünschtes Ergebnis | Wert |
|---|---:|
| Standard-Itemgewicht | `1.000000` |
| Halbes Itemgewicht | `0.500000` |
| Sehr leichte Items | `0.250000` |
| Doppeltes Itemgewicht | `2.000000` |

:::tip Passenden Multiplikator wählen
Für ein entspannteres Survival-Erlebnis ist ein niedrigerer `item weight`-Wert wie `0.5` oft ein guter Startpunkt. So wird der Inventardruck reduziert, ohne das Gewicht komplett zu ignorieren.
:::

## Beispielkonfiguration

In Palworld werden diese Gameplay-Werte typischerweise in der Zeile `OptionSettings=(...)` der Datei `PalWorldSettings.ini` gespeichert. Deine Datei kann bereits viele weitere Einstellungen enthalten.

Ein vereinfachtes Beispiel sieht so aus:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ItemWeightRate=0.500000)
```

Auf vielen Servern enthält `OptionSettings` bereits mehrere Werte, getrennt durch Kommata. In diesem Fall solltest du nur den Teil `ItemWeightRate` hinzufügen oder ändern, ohne die anderen Einträge zu löschen.

Beispiel:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,ItemDropRate=1.000000,ItemWeightRate=0.500000)
```

:::caution Bestehende Einstellungen nicht löschen
Lösche keine anderen Werte in der `OptionSettings`-Zeile, es sei denn, du möchtest sie absichtlich zurücksetzen. Das Entfernen von Kommata, Klammern oder Einträgen kann zu Konfigurationsfehlern führen.
:::

## Änderungen speichern und anwenden

Nach der Bearbeitung der Datei:

1. Speichere die Änderungen in `PalWorldSettings.ini`.
2. Starte deinen Palworld Server neu.

Ein Neustart ist notwendig, da der Server diese Gameplay-Konfiguration nur beim Start einliest. Der neue `item weight`-Wert wird erst nach dem Neustart vollständig angewendet.

## Neues Itemgewicht überprüfen

Nach dem Neustart verbinde dich mit deinem Server und teste das Trageverhalten der Items im Spiel.

Du solltest feststellen, dass:

- niedrigere Werte das effektive Gewicht der Items reduzieren
- höhere Werte das effektive Gewicht der Items erhöhen
- die Inventarkapazität sich je nach gewähltem Multiplikator anders anfühlt

Falls die Änderung nicht zu wirken scheint, öffne `PalWorldSettings.ini` erneut und überprüfe:

| Prüfpunkte | Was zu prüfen ist |
|---|---|
| Richtige Datei | Du hast `PalWorldSettings.ini` bearbeitet |
| Richtiger Ort | Die Datei wurde über **Configs** in der Serververwaltung geöffnet |
| Richtiger Schlüssel | `ItemWeightRate` ist vorhanden |
| Richtige Syntax | Der Wert steht in der Zeile `OptionSettings=(...)`, falls deine Datei dieses Format nutzt |
| Neustart durchgeführt | Der Server wurde nach dem Speichern neu gestartet |

## Conclusion

Glückwunsch, du hast erfolgreich die Itemgewicht-Einstellung auf deinem Palworld Server geändert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂