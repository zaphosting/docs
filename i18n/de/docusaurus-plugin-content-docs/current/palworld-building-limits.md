---
id: palworld-building-limits
title: "Palworld: Bau-Limits"
description: "Erfahre, wie du die Bau-Limits, Basisbau-Regeln und Bereichsbeschränkungen in Palworld manuell über die Serverkonfiguration änderst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Bau-Limits
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld ermöglicht dir, verschiedene Bau-Limits und Einschränkungen über die Serverkonfiguration zu steuern. In dieser Anleitung lernst du, wie du die richtige Konfigurationsdatei im ZAP-Hosting Gameserver Control Panel manuell bearbeitest, die relevanten Bauwerte änderst und die Änderungen korrekt anwendest.



## Preparation

Bevor du startest, stelle sicher, dass:

- du Zugriff auf deinen Palworld Gameserver in der ZAP-Hosting Gameserver-Verwaltung hast
- dein Server aktuell offline ist oder du bereit bist, ihn nach den Änderungen neu zu starten
- du weißt, dass diese Anleitung allgemeine Bau-Limits und Bereichsbeschränkungen behandelt, nicht guild-spezifische Basis-Limits

:::info Manuelle Konfiguration erforderlich
Diese Einstellungen müssen manuell in der Konfigurationsdatei geändert werden. Die relevante Datei findest du in deiner ZAP-Hosting Gameserver-Verwaltung unter `Configs`.
:::

:::note Guild Basis-Limits
Wenn du die Anzahl der Basen pro Guild ändern möchtest statt der hier beschriebenen allgemeinen Bau-Limits, solltest du die separate Anleitung für Guild Basis-Limits in ZAP-Docs verwenden, falls verfügbar.
:::

## Öffne die Konfigurationsdatei

Um Bau-Limits zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

Im ZAP-Hosting Gameserver Control Panel:

1. Öffne deinen Palworld Server.
2. Navigiere zu `Configs`.
3. Öffne die Datei `PalWorldSettings.ini`.

Diese Datei enthält die Hauptwelt- und Gameplay-Einstellungen für deinen Palworld Server, inklusive mehrerer bau-bezogener Konfigurationswerte.

## Bearbeite die Bau-Limit-Einstellungen

Die relevanten Werte befinden sich im Abschnitt `OptionSettings` in der Datei `PalWorldSettings.ini`.

### Relevante Konfigurationsschlüssel

Verwende folgende Einstellungen, um Bau-Limits und Bereichsbeschränkungen zu steuern:

| Konfig-Schlüssel | Beschreibung | Beispielwert |
| --- | --- | --- |
| `MaxBuildingLimitNum` | Legt die maximale Anzahl an Gebäuden pro Spieler fest. `0` deaktiviert das Limit. | `0` |
| `BaseCampMaxNum` | Legt die maximale Anzahl an Basislagern auf dem gesamten Server fest. | `128` |
| `bBuildAreaLimit` | Steuert, ob Bau-Einschränkungen in der Nähe bestimmter Strukturen aktiviert sind. | `False` |

### Beispielkonfiguration

Je nach aktuellem Inhalt deiner Datei sind diese Werte meist Teil der Zeile `OptionSettings=(...)`.

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=128,bBuildAreaLimit=False)
```

Wenn deine Datei bereits eine längere `OptionSettings`-Zeile enthält, entferne nicht die anderen bestehenden Werte. Du musst nur die relevanten Einträge innerhalb dieses Einstellungsblocks ändern oder hinzufügen.

### Bedeutung der einzelnen Werte

| Einstellung | Wirkung |
| --- | --- |
| `MaxBuildingLimitNum=0` | Entfernt das Bau-Limit pro Spieler |
| `MaxBuildingLimitNum=[deine_zahl]` | Begrenzt jeden Spieler auf die angegebene Anzahl an Gebäuden |
| `BaseCampMaxNum=[deine_zahl]` | Legt die Gesamtanzahl der Basislager serverweit fest |
| `bBuildAreaLimit=True` | Verhindert das Bauen in der Nähe von eingeschränkten Strukturen wie Schnellreisepunkten |
| `bBuildAreaLimit=False` | Deaktiviert diese Bereichsbeschränkung |

:::caution Syntax unverändert lassen
Die Datei `PalWorldSettings.ini` ist sehr empfindlich gegenüber Formatierungen. Ändere nur die Werte, die du anpassen möchtest, und behalte die vorhandenen Kommata, Klammern und die gesamte `OptionSettings=(...)`-Struktur bei.
:::

## Speichere deine Änderungen

Nach der Bearbeitung:

1. Speichere die Datei im Bereich `Configs`.
2. Prüfe die Zeile nochmals auf Formatierungsfehler.

Bei falscher Syntax kann es passieren, dass der Server die geänderten Einstellungen ignoriert oder nicht korrekt anwendet.

### Beispiel für eigene Werte

Hier ein Beispiel, das jeden Spieler auf `5000` Gebäude limitiert, bis zu `20` Basislager auf dem Server erlaubt und die Bereichsbeschränkungen aktiviert lässt:

```ini
OptionSettings=(MaxBuildingLimitNum=5000,BaseCampMaxNum=20,bBuildAreaLimit=True)
```

Ein weiteres Beispiel entfernt das Spieler-Bau-Limit und deaktiviert die Bereichsbeschränkungen:

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=20,bBuildAreaLimit=False)
```

## Starte den Server neu

Nach dem Speichern der Konfiguration musst du deinen Palworld Server neu starten, damit die neuen Einstellungen geladen werden.

Im ZAP-Hosting Gameserver Control Panel:

1. Stoppe den Server, falls er noch läuft.
2. Starte den Server erneut.

Ein kompletter Neustart ist erforderlich, damit Änderungen in `PalWorldSettings.ini` wirksam werden.

:::tip Änderungen zuverlässig anwenden
Wenn du mehrere Konfigurationsänderungen gleichzeitig vornimmst, speichere alle zuerst und führe dann einen einzigen Neustart durch. So vermeidest du unnötige Ausfallzeiten.
:::

## Überprüfe die neuen Limits

Sobald der Server wieder online ist, verbinde dich und teste das neue Bauverhalten.

Du solltest prüfen:

- ob Spieler mehr oder weniger Strukturen als zuvor platzieren können
- ob die Gesamtanzahl der Basislager deinem konfigurierten Wert entspricht
- ob das Bauen in der Nähe eingeschränkter Strukturen gemäß `bBuildAreaLimit` erlaubt oder blockiert wird

Falls die Änderungen nicht greifen, öffne `PalWorldSettings.ini` erneut und überprüfe:

- ob die Werte korrekt gespeichert wurden
- ob die Schlüssel im `OptionSettings`-Block stehen
- ob der Server nach der Bearbeitung vollständig neu gestartet wurde

## Konfigurationsübersicht

| Datei | Ort in ZAP-Hosting | Erforderliche Aktion nach Bearbeitung |
| --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` in deiner Gameserver-Verwaltung | Server neu starten |

| Einstellung | Empfohlene Verwendung |
| --- | --- |
| `MaxBuildingLimitNum` | Steuerung der Bau-Limits pro Spieler |
| `BaseCampMaxNum` | Steuerung der Gesamtanzahl der Basislager auf dem Server |
| `bBuildAreaLimit` | Erlaubt oder beschränkt das Bauen in der Nähe geschützter Kartenstrukturen |

## Conclusion

Glückwunsch, du hast erfolgreich die Bau-Limits auf deinem Palworld Server geändert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂