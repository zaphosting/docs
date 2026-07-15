---
id: palworld-hunger-and-stamina
title: "Palworld: Hunger und Ausdauer"
description: "Erfahre, wie du die Hunger- und Ausdauerraten für Spieler und Pals in Palworld durch Bearbeiten der Serverkonfiguration anpasst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Hunger und Ausdauer
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In Palworld kannst du steuern, wie schnell Hunger und Ausdauer bei Spielern und Pals abnehmen. In dieser Anleitung lernst du, wie du die richtige Serverkonfigurationsdatei im ZAP-Hosting Webinterface bearbeitest und individuelle Abnahmeraten sicher anwendest.

## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver in der ZAP-Hosting Gameserver-Verwaltung hast.

:::info Zugriff auf die Konfiguration erforderlich
Du benötigst Zugriff auf das Server-Administrationspanel und den Bereich `Configs`, um die Palworld-Konfigurationsdateien manuell zu bearbeiten.
:::

## Öffne die Palworld-Konfigurationsdatei

Um das Verhalten von Hunger und Ausdauer zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

In der ZAP-Hosting Gameserver-Verwaltung:

1. Öffne deinen Palworld-Server.
2. Gehe zum Bereich `Configs`.
3. Öffne die Datei `PalWorldSettings.ini`.



:::note Datei für Gameplay-Multiplikatoren
Die Einstellungen für Hunger und Ausdauer werden in `PalWorldSettings.ini` gespeichert. Diese Werte sind normalerweise Teil des Hauptoptionsstrings, der vom Dedicated Server verwendet wird.
:::

## Ändere Hunger- und Ausdauerwerte

Suche in `PalWorldSettings.ini` den Abschnitt mit den Gameplay-Einstellungen, der deine Server-Optionswerte enthält. Du musst die folgenden Konfigurationsschlüssel hinzufügen oder anpassen.

:::caution Wichtige Schreibweise in Palworld
Palworld verwendet in diesen Konfigurationseinträgen die Schreibweise `Decreace`. Das ist im Serverkonfigurationsformat so vorgesehen, daher musst du die Schlüssel genau wie unten gezeigt verwenden.
:::

### Verfügbare Konfigurationsschlüssel

| Konfigurationsschlüssel | Beschreibung | Standardwert |
| --- | --- | --- |
| `PlayerStomachDecreaceRate` | Steuert die Abnahmerate des Spielerhungers | `1.0` |
| `PlayerStaminaDecreaceRate` | Steuert die Abnahmerate der Spieler-Ausdauer | `1.0` |
| `PalStomachDecreaceRate` | Steuert die Abnahmerate des Pal-Hungers | `1.0` |
| `PalStaminaDecreaceRate` | Steuert die Abnahmerate der Pal-Ausdauer | `1.0` |

### Wie die Werte funktionieren

Niedrigere Werte verringern, wie schnell Hunger oder Ausdauer verbraucht werden.

| Wert | Effekt |
| --- | --- |
| `1.0` | Standard-Abnahmerate |
| `0.5` | Halbe Abnahmerate |
| `0.0` | Deaktiviert die Abnahme komplett |

:::tip Ausgewogene Einstellungen wählen
Wenn du ein entspannteres Survival-Erlebnis möchtest, ohne die Mechanik komplett zu entfernen, ist `0.5` ein praktischer Startwert für Hunger und Ausdauer.
:::

## Beispielkonfiguration

Füge je nach gewünschtem Gameplay-Erlebnis folgende Werte in `PalWorldSettings.ini` hinzu oder bearbeite sie:

```ini
PlayerStomachDecreaceRate=0.5
PlayerStaminaDecreaceRate=0.5
PalStomachDecreaceRate=0.5
PalStaminaDecreaceRate=0.5
```

Dieses Beispiel reduziert den Hunger- und Ausdauerverbrauch auf die Hälfte der Standardrate für Spieler und Pals.

Wenn du Hunger und Ausdauer komplett deaktivieren möchtest, verwende:

```ini
PlayerStomachDecreaceRate=0.0
PlayerStaminaDecreaceRate=0.0
PalStomachDecreaceRate=0.0
PalStaminaDecreaceRate=0.0
```

:::note Platzierung der Einstellungen
Je nachdem, wie deine `PalWorldSettings.ini` aufgebaut ist, müssen diese Werte möglicherweise innerhalb der bestehenden Optionsliste eingefügt werden, statt als separate Zeilen. Wenn deine Datei bereits einen langen `OptionSettings`-Eintrag enthält, achte darauf, das bestehende Format beizubehalten und nur die relevanten Schlüssel zu ändern oder hinzuzufügen.
:::

## Speichere und starte den Server neu

Nach der Bearbeitung der Datei:

1. Speichere die Änderungen in `PalWorldSettings.ini`.
2. Starte deinen Palworld-Server in der ZAP-Hosting Gameserver-Verwaltung neu.

Ein Neustart ist erforderlich, damit die neuen Hunger- und Ausdauereinstellungen wirksam werden.

:::caution Neustart erforderlich
Ohne Neustart lädt der Gameserver die aktualisierten Konfigurationswerte nicht.
:::

## Überprüfe die Änderungen im Spiel

Sobald der Server wieder online ist, verbinde dich und teste die neuen Einstellungen.

### Was du prüfen solltest

- Ob der Spielerhunger langsamer abnimmt
- Ob die Spieler-Ausdauer bei Bewegung und Aktionen länger hält
- Ob der Pal-Hunger mit der erwarteten Rate sinkt
- Ob der Pal-Ausdauerverbrauch deinen konfigurierten Werten entspricht

Wenn die Werte nicht angewendet werden, öffne `PalWorldSettings.ini` erneut und überprüfe:

- ob die Konfigurationsschlüssel genau wie gezeigt geschrieben sind
- ob die Werte gültige Dezimalzahlen wie `1.0`, `0.5` oder `0.0` sind
- ob die Einstellungen korrekt gespeichert wurden
- ob der Server nach der Bearbeitung vollständig neu gestartet wurde

## Fazit

Glückwunsch, du hast erfolgreich die Hunger- und Ausdauerraten auf deinem Palworld-Server geändert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂