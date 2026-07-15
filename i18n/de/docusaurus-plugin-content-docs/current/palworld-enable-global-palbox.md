---
id: palworld-enable-global-palbox
title: "Palworld: Globalen Palbox aktivieren"
description: "Lerne, wie du die globale Palbox-Servereinstellung in Palworld aktivierst, um den globalen Palbox-Import und -Export auf deinem Dedicated Server zu ermöglichen. -> Jetzt mehr erfahren"
sidebar_label: "Globalen Palbox aktivieren"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die *Globale Palbox* in Palworld ermöglicht es Spielern, Pals zwischen Servern zu transferieren, indem sie das globale, cloudbasierte Pal-Speichersystem von Palworld nutzen. In dieser Anleitung lernst du, wie du den globalen Palbox-Import und -Export auf deinem ZAP-Hosting Palworld-Server aktivierst, indem du die richtige Konfigurationsdatei manuell bearbeitest.



## Vorbereitung

Bevor du startest, stelle sicher, dass:

- du Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Webinterface hast
- dein Server aktuell gestoppt ist oder nach den Änderungen neu gestartet werden kann
- du im Gameserver-Adminbereich den Bereich `Configs` öffnen kannst

:::info Zugriff auf die Konfigurationsdatei
Bei ZAP-Hosting Palworld-Servern kannst du die relevanten Einstellungen direkt über die Gameserver-Verwaltung unter `Configs` bearbeiten. Ein externer Dateizugriff ist nicht nötig, wenn der Konfigurationseditor dort verfügbar ist.
:::

## Öffne die Palworld-Konfigurationsdatei

Um die Globale Palbox zu aktivieren, musst du die Datei `PalWorldSettings.ini` bearbeiten.

### Finde die Konfigurationsdatei im ZAP-Interface

1. Melde dich auf der [ZAP-Hosting Webseite](https://zap-hosting.com) an.
2. Öffne die Verwaltung deines Palworld Gameservers.
3. Navigiere zum Bereich `Configs`.
4. Öffne die Datei mit dem Namen `PalWorldSettings.ini`.

Diese Datei enthält die wichtigsten Servereinstellungen von Palworld, inklusive der Optionen für die Globale Palbox.

:::note Manuelle Konfiguration erforderlich
Die Einstellung für die Globale Palbox wird manuell über die Serverkonfigurationsdatei vorgenommen. Falls du keinen separaten Schalter für diese Funktion im Interface findest, ist das direkte Bearbeiten der `PalWorldSettings.ini` der richtige Weg.
:::

## Globale Palbox Import und Export aktivieren

Nachdem du `PalWorldSettings.ini` geöffnet hast, musst du die Serveroptionen finden und die Einträge für die Globale Palbox anpassen.

### Benötigte Konfigurationsschlüssel

Folgende Einstellungen steuern das Verhalten der Globalen Palbox:

| Konfigurationsschlüssel | Wert | Funktion |
| --- | --- | --- |
| `bAllowGlobalPalboxImport` | `True` oder `False` | Erlaubt Spielern den Import von Pals aus der Globalen Palbox |
| `bAllowGlobalPalboxExport` | `True` oder `False` | Erlaubt Spielern den Export von Pals in die Globale Palbox |

Laut aktueller Drittanbieter-Referenz ist `bAllowGlobalPalboxImport` standardmäßig auf `False` gesetzt, während `bAllowGlobalPalboxExport` standardmäßig auf `True` steht. Falls deine Datei diese Werte bereits enthält, musst du sie nur bei Bedarf anpassen.

### Werte setzen

Um den globalen Palbox-Transfer zwischen Servern vollständig zu aktivieren, setze beide Werte auf `True`.

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Falls diese Optionen bereits in der Datei vorhanden sind, ersetze die bestehenden Werte. Falls nicht, füge sie im Servereinstellungsbereich der `PalWorldSettings.ini` hinzu.

:::caution Syntax beibehalten
Palworld-Konfigurationsdateien sind empfindlich gegenüber Formatierungen. Ändere nur die erforderlichen Werte und vermeide es, Kommas, Klammern oder andere bestehende Einträge zu entfernen, falls diese Optionen Teil einer größeren Einstellungszeile sind.
:::

## Änderungen speichern

Nach der Bearbeitung der Datei:

1. Speichere die Änderungen im Editor der `PalWorldSettings.ini`.
2. Vergewissere dich, dass beide Werte für die Globale Palbox korrekt vorhanden sind.

Falls dein Serverpanel nur eine Speichern-Schaltfläche anbietet, nutze diese zuerst, bevor du den Server im nächsten Schritt neu startest.

## Server neu starten

Nach der Änderung der Globalen Palbox-Einstellungen musst du den Palworld-Server neu starten, damit die neue Konfiguration geladen wird.

### Neue Einstellungen anwenden

Starte deinen Server nach dem Speichern der Datei über die Gameserver-Verwaltung neu.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzliche Konsolenbefehle ausführen | Nein |

Nach der Bearbeitung der Konfigurationsdatei sind keine weiteren Befehle nötig. Ein normaler Serverneustart reicht aus, um die neue Palworld-Globale-Palbox-Servereinstellung zu aktivieren.

:::tip Feature im Spiel testen
Nach dem Neustart kannst du dich auf deinem Server einloggen und testen, ob Spieler Pals über die Globale Palbox importieren und exportieren können. So kannst du am einfachsten prüfen, ob die Einstellung erfolgreich angewendet wurde.
:::

## Fehlerbehebung

Falls die Globale Palbox nach dem Neustart nicht funktioniert, prüfe folgende Punkte.

### Werte wurden korrekt gespeichert?

Öffne die `PalWorldSettings.ini` erneut und kontrolliere, ob diese Werte noch vorhanden sind:

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Falls die Werte zurückgesetzt wurden, wurde die Datei möglicherweise nicht korrekt gespeichert.

### Formatierungsprobleme prüfen

Wenn du die Werte in einen bestehenden Einstellungsblock eingefügt hast, stelle sicher, dass die umgebende Syntax noch gültig ist. Falsche Formatierung in der `PalWorldSettings.ini` kann dazu führen, dass Palworld Einstellungen ignoriert oder nicht richtig lädt.

### Server erneut neu starten

Falls du die Datei bearbeitet hast, während der Server lief, führe einen weiteren vollständigen Neustart durch, um sicherzugehen, dass die neue Konfiguration angewendet wird.

:::danger Feature-Verfügbarkeit abhängig von Spielversion
Die Globale Palbox ist ein Feature, das von Palworld selbst bereitgestellt wird. Wenn die Einstellung trotz korrekter Konfiguration nicht funktioniert, kann das Feature von der aktuellen Palworld-Serverversion oder temporären Einschränkungen im Spiel abhängen. Prüfe in dem Fall, ob dein Server vollständig auf dem neuesten Stand ist.
:::

## Fazit

Glückwunsch, du hast den globalen Palbox-Import und -Export auf deinem Palworld-Server erfolgreich aktiviert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂