---
id: palworld-host-character-transfer
title: "Palworld: Host-Charakter-Transfer"
description: "Lerne, wie du deinen Palworld Host-Charakter von einem Solo- oder Koop-Save auf einen Dedicated Server mit Palworld Save Tools und den richtigen Save-Dateien überträgst. -> Jetzt mehr erfahren"
sidebar_label: "Host-Charakter-Transfer"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der Palworld Host-Charakter-Transfer ermöglicht es dir, den Charakter eines Solo- oder Koop-Hosts in einen Dedicated Server Save zu migrieren. In dieser Anleitung bereitest du die benötigten Save-Dateien vor, nutzt das unterstützte Migrationstool und lädst die aktualisierten Charakterdaten zurück auf deinen Server.

:::danger Experimenteller Charakter-Transfer Hinweis
Dieses Verfahren gilt als experimentell und verändert Save-Daten manuell. Palworld-Updates können die Save-Strukturen ändern, wodurch Tools oder Migrationsschritte möglicherweise nicht mehr korrekt funktionieren.
:::

## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver und ein lokales Windows-System hast, auf dem du das benötigte Save-Migrationstool ausführen kannst.

### Voraussetzungen

Du benötigst Folgendes:

| Voraussetzung | Zweck |
| --- | --- |
| Zugriff auf deinen ZAP-Hosting Palworld Server | Um die benötigten Save-Dateien herunter- und hochzuladen |
| Einen lokalen Backup-Speicherort | Um eine sichere Kopie deiner Original-Save-Daten zu behalten |
| [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools) | Um die Host-Charakter-Migration durchzuführen |
| Einen neu erstellten Server-Charakter | Die Host-Charakter-Daten werden auf diesen Dedicated Server Charakter migriert |

:::caution Backup zuerst erstellen
Bevor du Save-Dateien änderst, lade eine vollständige Sicherung deines aktuellen Server-Saves herunter und speichere sie. Falls die Übertragung fehlschlägt oder beschädigte Charakterdaten entstehen, benötigst du die Originaldateien zur Wiederherstellung.
:::

### Wichtige Hinweise zu Konfigurationsdateien

Dieser Transfer wird **nicht** durch das Bearbeiten einer Palworld-Konfigurationsdatei unter `Configs` durchgeführt. Laut der aktuell verfügbaren Tool-Dokumentation und Community-Anleitungen erfolgt der Host-Charakter-Transfer durch das Ersetzen von Save-Daten-Dateien.

Die relevanten Dateien befinden sich im Save-Verzeichnis deines Servers, nicht in der normalen Gameplay-Konfigurationsdatei wie `PalWorldSettings.ini`.

## Verstehen, welche Dateien verwendet werden

Vor dem Start solltest du die beteiligten Dateien identifizieren.

### Für den Transfer benötigte Save-Dateien

Die Host-Charakter-Migration nutzt folgende Save-Daten:

| Datei oder Ordner | Speicherort | Zweck |
| --- | --- | --- |
| `Level.sav` | `Pal/Saved/SaveGames/0/[dein_saveordner_id]/Level.sav` | Enthält Welt-Level-Save-Daten, die vom Migrationstool verwendet werden |
| `Players/` | `Pal/Saved/SaveGames/0/[dein_saveordner_id]/Players/` | Enthält Spieler-Save-Dateien, inklusive des neuen Dedicated Server Charakters |
| `00000001.sav` | Innerhalb von `Players/` aus dem hochgeladenen Solo- oder Koop-Save | Repräsentiert normalerweise den ursprünglichen Host-Charakter in Koop-Saves |

`[dein_saveordner_id]` ist der lange Ordnername deines Palworld Welt-Saves. Dieser Wert ist für jeden Save unterschiedlich.

### Wo du die Dateien im ZAP-Interface findest

Du kannst die benötigten Save-Dateien über den Dateimanager deiner Gameserver-Verwaltung erreichen.

Navigiere zu:

```text
Pal/Saved/SaveGames/0/[dein_saveordner_id]/
```

In diesem Ordner solltest du mindestens finden:

- `Level.sav`
- `LevelMeta.sav`
- `Players/`



## Bereite den Dedicated Server Charakter vor

Bevor du den Host-Charakter migrieren kannst, muss der Dedicated Server bereits einen neu generierten Spieler-Save für deinen Account enthalten.

### Erstelle einen neuen Charakter auf dem Server

Tritt deinem Palworld Dedicated Server normal bei und erstelle einen neuen Charakter. Spiele dann, bis der Charakter mindestens Level `2` erreicht hat.

Dieser Schritt ist notwendig, weil das Migrationstool eine bestehende Dedicated Server Charakterdatei als Migrationsziel benötigt.

### Speichern erzwingen oder abwarten

Nachdem du den neuen Charakter erstellt hast, musst du sicherstellen, dass der Server die neuen Spieler-Daten auf die Festplatte geschrieben hat.

Du kannst entweder:

- auf das automatische Speicherintervall warten, das üblicherweise etwa `4` Minuten beträgt, oder
- den Befehl `save` in der Server-Konsole ausführen

| Befehl | Wo ausführen | Zweck |
| --- | --- | --- |
| `save` | Server-Konsole | Erzwingt, dass der Server die aktuellen Welt- und Spieler-Daten auf die Festplatte schreibt |

:::info Speichern-Befehl Hinweis
Wenn du den `save`-Befehl nutzt, führe ihn vor dem Stoppen des Servers aus. So stellst du sicher, dass die neue Dedicated Server Charakterdatei im `Players/`-Ordner existiert.
:::

### Server stoppen

Sobald das Speichern abgeschlossen ist, stoppe den Palworld Server über deine Serververwaltung.

Fahre nicht fort, während der Server läuft, da aktive Speicherprozesse die Dateien, die du ersetzen möchtest, überschreiben oder Konflikte verursachen könnten.

## Lade die benötigten Save-Daten herunter

Da der neue Charakter jetzt auf dem Dedicated Server existiert, kannst du die Dateien für die Migration herunterladen.

### Öffne das Save-Verzeichnis

Gehe im ZAP-Hosting Dateimanager zu:

```text
Pal/Saved/SaveGames/0/[dein_saveordner_id]/
```

### Lade die Dateien herunter

Lade folgende Elemente auf deinen lokalen Rechner:

| Element | Erforderlich |
| --- | --- |
| `Level.sav` | Ja |
| `Players/` Ordner | Ja |

Speichere beide Elemente im selben lokalen Arbeitsverzeichnis, damit das Migrationstool sie korrekt verarbeiten kann.

:::tip Dateien zusammenhalten
Lege `Level.sav` und den `Players/`-Ordner nebeneinander in denselben lokalen Ordner. Das entspricht dem erwarteten Workflow von Palworld Save Tools.
:::

## Migriere den Host-Charakter

Sobald du die Save-Daten heruntergeladen hast, kannst du den eigentlichen Host-Charakter-Transfer durchführen.

### Starte Palworld Save Tools

Lade [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools) herunter und entpacke sie, dann öffne `PalworldSaveTools.exe`.

Wähle in der Anwendung:

```text
Fix Host Save
```



### Wähle die richtigen Dateien aus

Im Migrationstool:

1. Wähle deine heruntergeladene `Level.sav`
2. Im linken Auswahlfeld wähle `00000001.sav`
3. Im rechten Auswahlfeld wähle den neuen Charakter, den du auf dem Dedicated Server erstellt hast
4. Starte die Migration mit `Migrate`

| Tool-Feld | Wert zum Auswählen |
| --- | --- |
| `Path to Level.sav` | Deine heruntergeladene `Level.sav` |
| Linkes Charakterfeld | `00000001.sav` |
| Rechtes Charakterfeld | Dein neu erstellter Dedicated Server Charakter |
| Aktion | `Migrate` |

### Was die Migration bewirkt

Der Migrationsprozess weist die ursprünglichen Host-Charakter-Daten aus dem Solo- oder Koop-Save dem Dedicated Server Charakter zu, den du zuvor erstellt hast.

Deshalb musst du zuerst dem Server beitreten und einen frischen Spieler-Save generieren, bevor du das Tool nutzt.

:::caution Zielcharakter überprüfen
Achte darauf, dass du im rechten Feld den korrekten neuen Server-Charakter auswählst. Die falsche Auswahl kann die Save-Daten eines anderen Spielers überschreiben.
:::

## Lade die aktualisierten Save-Dateien hoch

Nachdem die Migration erfolgreich abgeschlossen ist, musst du die geänderten Dateien zurück auf deinen Server hochladen.

### Ersetze die bestehenden Save-Daten

Gehe zurück in dasselbe Serververzeichnis im ZAP-Hosting Dateimanager:

```text
Pal/Saved/SaveGames/0/[dein_saveordner_id]/
```

Lade hoch und ersetze:

- die aktualisierte `Level.sav`
- den aktualisierten `Players/`-Ordner

Wenn dein Dateimanager dich fragt, ob du vorhandene Dateien überschreiben möchtest, bestätige die Ersetzung.

### Änderungen an Konfigurationsdateien

Für diesen speziellen Host-Charakter-Transfer ist aktuell keine bestätigte Notwendigkeit bekannt, eine Palworld-Konfigurationsdatei wie `PalWorldSettings.ini` zu bearbeiten.

| Element | Für Host-Transfer erforderlich |
| --- | --- |
| `PalWorldSettings.ini` bearbeiten | Nein |
| Dateien unter `Configs` bearbeiten | Keine bestätigte Notwendigkeit |
| `Level.sav` ersetzen | Ja |
| `Players/` ersetzen | Ja |

:::note Keine zusätzlichen Konfigurationsänderungen nötig
Basierend auf der aktuell verfügbaren Tool-Dokumentation und Migrationsanleitung sind keine weiteren Konfigurationseinträge oder manuelle `.ini`-Änderungen für den Transfer selbst erforderlich.
:::

## Starte den Server und teste den Charakter

Nachdem du die aktualisierten Dateien hochgeladen hast, starte deinen Palworld Server erneut.

### Erneut dem Server beitreten

Verbinde dich mit demselben Account, mit dem du den neuen Dedicated Server Charakter erstellt hast. Wenn die Migration erfolgreich war, solltest du nun mit dem übertragenen Host-Charakter laden, nicht mit dem temporären neuen.

### Wichtige Charakterdaten prüfen

Nach dem Beitritt überprüfe, ob folgende Daten korrekt angezeigt werden:

- Charakter-Level
- Inventar
- Pals
- Basisbesitz
- Fortschrittsdaten

Wenn etwas fehlt oder falsch ist, stoppe den Server sofort und stelle dein Backup wieder her, bevor du es erneut versuchst.

:::danger Backup wiederherstellen bei fehlerhaften Daten
Wenn dein Charakter, Inventar oder Basisbesitz nach der Migration beschädigt erscheint, spiele nicht weiter. Stelle zuerst die Original-`Level.sav` und `Players/`-Backup-Dateien wieder her, um weitere unerwünschte Änderungen zu vermeiden.
:::

## Zusammenfassung der Referenz

### Benötigte Pfade, Dateien und Aktionen

| Typ | Wert |
| --- | --- |
| Save-Pfad | `Pal/Saved/SaveGames/0/[dein_saveordner_id]/` |
| Benötigte Datei | `Level.sav` |
| Benötigter Ordner | `Players/` |
| Typischerweise ausgewählte Host-Save-Datei | `00000001.sav` |
| Server-Befehl | `save` |
| Server-Neustart erforderlich | Ja |
| Konfigurationsdatei bearbeiten erforderlich | Keine bestätigte Notwendigkeit |

## Fazit

Glückwunsch, du hast deinen Palworld Host-Charakter erfolgreich auf einen Dedicated Server übertragen. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne! 🙂