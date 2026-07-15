---
id: palworld-max-guild-players
title: "Palworld: Max. Spieler pro Gilde"
description: "Erfahre, wie du das Limit der Spieler pro Gilde in Palworld änderst, indem du die Einstellung für max. Spieler pro Gilde auf deinem Server anpasst. -> Jetzt mehr erfahren"
sidebar_label: "Max. Spieler pro Gilde"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld ermöglicht dir, zu steuern, wie viele Spieler einer einzelnen Gilde auf deinem Server beitreten können. In dieser Anleitung lernst du, wie du das maximale Spielerlimit pro Gilde manuell änderst, indem du die richtige Konfigurationsdatei in deiner ZAP-Hosting Gameserver-Verwaltung bearbeitest.



## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf die Palworld Gameserver-Verwaltung im ZAP-Hosting Webinterface hast.

:::info Zugriff auf Konfiguration erforderlich
Du benötigst Zugriff auf die Palworld Server-Verwaltung und den Bereich `Configs`, da diese Einstellung manuell in der Server-Konfigurationsdatei geändert werden muss.
:::

## Finde die richtige Konfigurationsdatei

Um das Limit der Gildenspieler zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

In deiner ZAP-Hosting Gameserver-Verwaltung:

1. Öffne deinen **Palworld** Server
2. Gehe zu **Configs**
3. Öffne die Datei mit dem Namen `PalWorldSettings.ini`

Diese Datei enthält die wichtigsten Gameplay-Konfigurationswerte für deinen Palworld Server, inklusive der Gilden-Einstellungen.

## Bearbeite die Einstellung für max. Spieler pro Gilde

In der Datei `PalWorldSettings.ini` suchst du nach der Konfigurationszeile `OptionSettings`. Das Limit der Gildenspieler wird über den Schlüssel `GuildPlayerMaxNum` gesteuert.

### Konfigurationswert

Verwende folgende Einstellung, um die maximale Anzahl an Spielern pro Gilde festzulegen:

```ini
GuildPlayerMaxNum=[dein_wert]
```

Ersetze `[dein_wert]` durch die Anzahl der Spieler, die du pro Gilde erlauben möchtest.

### Standard- und Beispielwerte

| Konfigurationsschlüssel | Beschreibung | Standardwert |
| --- | --- | --- |
| `GuildPlayerMaxNum` | Maximale Anzahl an Spielern pro Gilde | `20` |

Wenn du zum Beispiel bis zu `30` Spieler pro Gilde erlauben möchtest, setze:

```ini
GuildPlayerMaxNum=30
```

:::note Bestehende OptionSettings-Zeile bearbeiten
In Palworld werden Servereinstellungen meist in einer einzigen `OptionSettings=(...)` Zeile gespeichert. Du solltest den bestehenden Wert von `GuildPlayerMaxNum` in dieser Zeile ändern, anstatt einen zweiten Eintrag hinzuzufügen.
:::

### Beispielausschnitt

Deine Konfiguration könnte so aussehen:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(GuildPlayerMaxNum=30)
```

Wenn deine Datei bereits viele Einstellungen in `OptionSettings=(...)` enthält, ändere nur den Teil `GuildPlayerMaxNum` und lasse die anderen Werte unverändert.

:::caution Doppelte Schlüssel vermeiden
Füge `GuildPlayerMaxNum` nicht mehrfach im selben Konfigurationsblock hinzu. Doppelte Schlüssel können unerwartetes Verhalten verursachen oder unklar machen, welcher Wert vom Server verwendet wird.
:::

## Änderungen speichern und anwenden

Nach der Bearbeitung:

1. Speichere die Änderungen in `PalWorldSettings.ini`
2. Starte deinen Palworld Server neu

Ein Neustart ist erforderlich, damit das neue Limit für Gildenspieler vom Server geladen wird.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzlicher Konsolenbefehl | Kein bestätigter Befehl notwendig |

:::tip Neustart erforderlich
Der aktualisierte Wert für max. Spieler pro Gilde wird nicht sofort angewendet, solange der Server läuft. Du musst den Server nach dem Speichern der Konfiguration vollständig neu starten.
:::

## Überprüfe das neue Gildenlimit

Nach dem Neustart sollte das neue Limit für die Gildengröße aktiv sein, wenn Spieler Gilden beitreten oder verwalten.

Falls die Änderung nicht greift, überprüfe Folgendes:

- Hast du die richtige Datei `PalWorldSettings.ini` bearbeitet?
- Ist `GuildPlayerMaxNum` korrekt geschrieben?
- Befindet sich der Wert innerhalb der aktiven `OptionSettings=(...)` Konfiguration?
- Wurde der Server erfolgreich neu gestartet?

:::caution Formatierung der Konfiguration beachten
Palworld-Konfigurationsdateien sind formatierungssensitiv. Wenn du versehentlich Kommas, Klammern oder andere bestehende Werte in `OptionSettings=(...)` entfernst, kann der Server die Einstellung ignorieren oder nicht korrekt laden.
:::

## Fazit

Glückwunsch, du hast erfolgreich das maximale Spielerlimit pro Gilde auf deinem Palworld Server geändert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂