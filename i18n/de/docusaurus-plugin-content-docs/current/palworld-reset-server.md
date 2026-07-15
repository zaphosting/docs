---
id: palworld-reset-server
title: "Palworld: Server zurücksetzen"
description: "Lerne, wie du deinen Palworld Gameserver im ZAP-Webinterface zurücksetzt, welche Einstellungen dabei gelöscht werden und wie du die Standard-Serverdaten sicher wiederherstellst. -> Jetzt mehr erfahren"
sidebar_label: "Server zurücksetzen"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld speichert deine Welt, den Spielfortschritt und die Servereinstellungen auf dem Gameserver. In dieser Anleitung lernst du, wie du deinen Palworld Gameserver bei ZAP-Hosting komplett zurücksetzt und mit einer frischen Standardinstallation neu startest.

:::danger Warnung vor vollständiger Datenlöschung
Ein vollständiger Reset löscht dauerhaft deine bestehenden Speicherstände, Konfigurationsänderungen und alle anderen Serverdateien der aktuellen Installation. Nutze diese Funktion nur als letzten Ausweg.
:::



## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Webinterface hast und die aktuellen Weltdaten nicht mehr benötigst.

:::info Wichtig: Backup wichtiger Daten anlegen
Wenn du eine Kopie deiner aktuellen Welt oder Konfiguration behalten möchtest, erstelle vorher ein Backup. Nach dem Reset können die gelöschten Daten normalerweise nicht wiederhergestellt werden.
:::

## Was bewirkt ein Palworld Server-Reset?

Ein kompletter Palworld Reset ist nicht einfach nur eine Änderung einer einzelnen Einstellung in der Konfigurationsdatei. Stattdessen wird der gesamte Server neu installiert und die aktuellen Serverdaten werden gelöscht.

Der Reset entfernt typischerweise folgende Daten:

| Datentyp | Wird beim Reset gelöscht |
| --- | --- |
| Welt-Speicherstände | Ja |
| Spielfortschritt der Spieler | Ja |
| Server-Konfigurationsänderungen | Ja |
| Installierte Mods oder eigene Dateien | Ja |
| Standard-Spiel-Dateien | Werden automatisch neu installiert |

Nach dem Reset startet dein Server mit einer frischen Installation und den Standardeinstellungen.

## Prüfe zuerst den Speicherort der Konfiguration

Für normale Palworld-Konfigurationsänderungen kannst du die relevanten Dateien in der Gameserver-Verwaltung unter `Configs` erreichen. Die wichtigsten Palworld-Einstellungen werden meist in folgender Datei gespeichert:

| Datei | Zweck |
| --- | --- |
| `PalWorldSettings.ini` | Haupt-Konfigurationsdatei des Palworld Servers |

Im ZAP-Hosting Interface findest du diese Datei normalerweise in der Palworld Gameserver-Verwaltung unter `Configs`.

:::note Kein manuelles Editieren für Reset nötig
Ein kompletter Server-Reset erfordert kein manuelles Bearbeiten der `PalWorldSettings.ini`. Diese Datei ist nur für normale Einstellungänderungen relevant. Ein vollständiger Reset erfolgt durch Neuinstallation oder Formatierung des Servers, wodurch alle Dateien mit Standardwerten neu erstellt werden.
:::

Wenn du nur Gameplay-Einstellungen ändern möchtest, solltest du die Konfigurationsdatei in `Configs` bearbeiten und keinen kompletten Reset durchführen.

## Server stoppen

Bevor du den Reset startest, musst du den Palworld Server vollständig stoppen.

1. Melde dich im ZAP-Hosting Webinterface an.
2. Öffne deinen Palworld Gameserver.
3. Stoppe den Server über die Server-Verwaltung.
4. Warte, bis der Serverstatus bestätigt, dass der Server offline ist.

:::caution Nicht zurücksetzen, während der Server läuft
Wenn du den Reset startest, während der Server noch aktiv ist, können Dateien nicht sauber gelöscht werden und Speicherstände inkonsistent werden.
:::

## Server neu installieren und zurücksetzen

Ein kompletter Reset bei Palworld erfolgt durch Neuinstallation mit Formatierungs- oder Reset-Optionen im ZAP-Interface.

### Reinstallationsfunktion öffnen

Suche in der Palworld Server-Verwaltung nach der Funktion zum Neuinstallieren oder Zurücksetzen im Bereich Serververwaltung.

Da die Bezeichnungen je nach Panel-Version variieren können, kann die genaue Wortwahl leicht abweichen. Bei ZAP-Hosting findest du diese Funktion meist dort, wo Neuinstallations- oder Formatierungsaktionen angeboten werden.



### Vollständigen Reset starten

Nutze die verfügbare Neuinstallationsoption, die eine vollständige Formatierung oder einen Reset der Serverdaten durchführt.

Bestätige die Aktion, falls das Panel danach fragt.

:::danger Diese Aktion löscht alle Serverdaten
Eine vollständige Neuinstallation oder Formatierung löscht Speicherstände, Konfigurationen und eigene Serverdateien. Fahre nur fort, wenn du dir sicher bist, dass du alles zurücksetzen möchtest.
:::

### Auf Abschluss der Installation warten

Nach der Bestätigung warte, bis der Neuinstallationsprozess abgeschlossen ist. Je nach Panel-Zustand und Servergröße kann das einige Minuten dauern.

Unterbreche den Vorgang nicht, solange der Server neu installiert wird.

## Frischen Palworld Server starten

Sobald die Neuinstallation abgeschlossen ist, starte den Palworld Server erneut über die Serververwaltung.

Nach dem Start:

- wird eine neue Welt gespeichert
- werden die Standard-Servereinstellungen verwendet
- sind vorherige Spieler- und Weltfortschritte nicht mehr vorhanden

Falls nötig, kannst du jetzt wieder in `Configs` deine Palworld-Einstellungen in `PalWorldSettings.ini` anpassen.

## Ergebnis des Resets überprüfen

Nachdem der Server gestartet ist, verbinde dich mit dem Server und überprüfe, ob der Reset erfolgreich war.

Folgendes solltest du kontrollieren:

| Prüfung | Erwartetes Ergebnis |
| --- | --- |
| Weltzustand | Frische neue Welt |
| Spieler-Daten | Kein vorheriger Fortschritt |
| Server-Einstellungen | Standardwerte, sofern nicht erneut geändert |
| Eigene Dateien oder Mods | Entfernt, sofern nicht manuell neu installiert |

Wenn die alte Welt noch erscheint, stoppe den Server und prüfe, ob der Neuinstallationsprozess im ZAP-Panel erfolgreich abgeschlossen wurde. Falls keine vollständige Formatierung durchgeführt wurde, musst du den Vorgang eventuell nochmal sorgfältig wiederholen.

## Servereinstellungen nach dem Reset neu konfigurieren

Nach einem erfolgreichen Reset verwendet dein Palworld Server wieder die Standard-Konfigurationswerte. Wenn du den Server anpassen möchtest, öffne den Bereich `Configs` in deiner Gameserver-Verwaltung und bearbeite die `PalWorldSettings.ini`.

Typische Aufgaben nach dem Reset sind:

- Servernamen ändern
- Passwort setzen
- Schwierigkeit oder Gameplay-Werte anpassen
- Eigene Konfigurationsänderungen erneut anwenden
- Unterstützte Mods oder zusätzliche Dateien bei Bedarf neu installieren

:::tip Einstellungen gezielt wiederherstellen
Wenn eine vorherige Konfiguration Probleme verursacht hat, vermeide es, alle alten Einstellungen sofort zurückzukopieren. Spiele nur die Einstellungen ein, die du wirklich brauchst, um problematische Änderungen leichter zu erkennen.
:::

## Konfigurationsübersicht

Die folgende Tabelle fasst die relevante Datei und das Reset-Verhalten zusammen:

| Punkt | Details |
| --- | --- |
| Haupt-Konfigurationsdatei | `PalWorldSettings.ini` |
| ZAP-Standort für Konfigurationsbearbeitung | `Configs` in der Gameserver-Verwaltung |
| Manuelle Konfigurationsänderung für Reset nötig | Nein |
| Erforderliche Aktion für Reset | Neuinstallation oder Formatierung/Reset des Servers |
| Neustart danach erforderlich | Ja, Server nach Neuinstallation starten |
| Zusätzliche Befehle erforderlich | Keine bestätigt |

:::note Bezeichnungen im Interface können variieren
Die genaue Bezeichnung der Neuinstallations- oder Formatierungsoption kann je nach aktueller ZAP-Webinterface-Version unterschiedlich sein. Wenn du die Reset-Funktion nicht findest, kontaktiere den Support, bevor du alternative Methoden zum Löschen von Dateien ausprobierst.
:::

## Fazit

Glückwunsch, du hast deinen Palworld Gameserver erfolgreich zurückgesetzt. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂