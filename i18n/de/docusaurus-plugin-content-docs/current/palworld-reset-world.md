---
id: palworld-reset-world
title: "Palworld: Welt zurücksetzen"
description: "Lerne, wie du deine Palworld-Gameserver-Welt zurücksetzt, indem du die aktuellen Spieldaten entfernst und auf demselben Server eine neue Palworld-Weltkarte startest. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Welt zurücksetzen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld speichert deine aktive Welt in den Server-Speicherdaten und nicht in einer konfigurierbaren Welteinstellung. In dieser Anleitung lernst du, wie du deine Palworld-Gameserver-Welt bei ZAP-Hosting zurücksetzt, indem du den bestehenden Speicherordner löschst, sodass der Server beim nächsten Start eine neue Welt generiert.

:::danger Permanente Datenlöschung
Das Zurücksetzen deiner Palworld-Welt löscht dauerhaft die aktuelle Welt, inklusive Spielerfortschritt, Strukturen, Pals und anderen gespeicherten Daten in dieser Welt.
:::



## Vorbereitung

Bevor du beginnst, stelle sicher, dass du Zugriff auf die Palworld-Gameserver-Verwaltung hast und der Server aktuell offline ist, bevor du Speicherdateien löschst.

:::tip Erstelle zuerst ein Backup
Falls du die aktuelle Welt später noch einmal brauchst, erstelle vorher ein Backup. Falls für dein Produkt verfügbar, kannst du die Server-Backup-Funktion nutzen oder den Speicherordner manuell herunterladen, bevor du ihn löschst.
:::

## Verstehe, wie Palworld-Welt-Resets funktionieren

Ein Palworld-Welt-Reset erfordert normalerweise keine Änderung eines Gameplay-Werts in einer Konfigurationsdatei. Stattdessen wird die aktive Welt im Speicherverzeichnis des Servers abgelegt.

Basierend auf der aktuell öffentlich verfügbaren Palworld-Dedicated-Server-Struktur befindet sich der Welt-Speicher typischerweise im folgenden Pfad:

```text
Pal/Saved/SaveGames/0/
```

In diesem Verzeichnis findest du üblicherweise einen Ordner mit einem langen, zufälligen hexadezimalen Namen, zum Beispiel:

```text
84B5E2264EC387DEDB43179D666031A1
```

Dieser Ordner enthält den aktuellen Welt-Speicher. Wenn du ihn löschst und den Server neu startest, erstellt Palworld automatisch eine neue Welt.

:::note Kein Konfigurationswert nötig
Für einen Standard-Welt-Reset ist normalerweise kein zusätzlicher Konfigurationseintrag, Konsolenbefehl oder Startparameter erforderlich. Das Zurücksetzen erfolgt durch das Entfernen der bestehenden Speicherdaten.
:::

## Server stoppen

Bevor du die Weltdaten löschst, stoppe deinen Palworld-Server über die ZAP-Hosting-Gameserver-Verwaltung.

Das Löschen von Speicherdaten während der Server läuft, kann zu Dateibeschädigungen oder unvollständiger Entfernung der Weltdaten führen.

:::caution Server muss offline sein
Stelle sicher, dass der Server vollständig gestoppt ist, bevor du weitermachst. Wenn der Server noch läuft, kann er Dateien neu erstellen oder sperren, während du sie bearbeitest.
:::

## Speicherverzeichnis öffnen

Öffne in deiner ZAP-Hosting-Palworld-Server-Verwaltung den Datei-Manager und navigiere zum folgenden Pfad:

```text
Pal/Saved/SaveGames/0/
```

Je nach Produktlayout erreichst du diesen über den Datei-Manager oder einen ähnlichen Dateizugriffsbereich im Webinterface.



### Pfadübersicht

| Element | Wert |
| --- | --- |
| Basis-Speicherpfad | `Pal/Saved/SaveGames/0/` |
| Weltordnername | Zufälliger hexadezimaler Ordner |
| Beispielordner | `84B5E2264EC387DEDB43179D666031A1` |
| Erforderliche Aktion | Lösche den Weltordner |

## Aktuellen Welt-Speicher löschen

Finde im Verzeichnis `Pal/Saved/SaveGames/0/` den Ordner mit dem zufälligen hexadezimalen Namen. Lösche diesen Ordner vollständig.

### Was du löschen musst

| Ordnerart | Erforderliche Aktion |
| --- | --- |
| Aktueller Welt-Speicherordner in `Pal/Saved/SaveGames/0/` | Löschen |
| `PalworldSettings.ini` oder andere Konfigurationsdateien | Für diesen Reset nicht bearbeiten, außer du möchtest auch Servereinstellungen ändern |

Wenn nur ein hexadezimaler Ordner in `Pal/Saved/SaveGames/0/` vorhanden ist, ist das normalerweise der aktive Welt-Speicher. Wenn mehrere Ordner vorhanden sind und du unsicher bist, welcher genutzt wird, rate nicht. Prüfe in dem Fall deine aktuellen Serverdateien sorgfältig oder kontaktiere den Support, bevor du etwas löschst.

:::info Erklärung zur Konfigurationssektion
Obwohl viele Palworld-Einstellungen über den Bereich **Configs** verwaltet werden können, wird ein Welt-Reset normalerweise nicht durch Bearbeiten einer Konfigurationsdatei durchgeführt. Die erforderliche Aktion ist das Löschen des Welt-Speicherordners aus den Serverdateien.
:::

## Server neu starten

Nachdem der Speicherordner gelöscht wurde, starte deinen Palworld-Server erneut.

Beim Start sollte der Server automatisch eine neue Welt generieren, da kein vorheriger Welt-Speicher am erwarteten Speicherort vorhanden ist.

### Zusätzliche Befehle oder Änderungen

| Aufgabe | Erforderlich |
| --- | --- |
| Konfigurationsdatei bearbeiten | Nein |
| Ingame-Befehl ausführen | Nein |
| Konsolenbefehl ausführen | Nein |
| Server nach Löschung neu starten oder starten | Ja |

:::tip Erster Start kann länger dauern
Der erste Start nach dem Löschen des Welt-Speichers kann etwas länger dauern, da Palworld eine neue Welt generieren muss.
:::

## Reset überprüfen

Sobald der Server wieder online ist, verbinde dich und überprüfe, ob eine frische Welt erstellt wurde.

Du erkennst das meist an:

- einem neuen Spawn-Zustand
- keinen vorherigen Spielerbauten
- keinem vorherigen Fortschritt
- einem neu generierten Speicherordner in `Pal/Saved/SaveGames/0/`

Wenn die alte Welt noch erscheint, stoppe den Server erneut und überprüfe, ob der richtige hexadezimale Speicherordner gelöscht wurde.

## Fazit

Glückwunsch, du hast deine Palworld-Welt erfolgreich zurückgesetzt und einen neuen Speicherstand auf deinem bestehenden Server gestartet. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne! 🙂