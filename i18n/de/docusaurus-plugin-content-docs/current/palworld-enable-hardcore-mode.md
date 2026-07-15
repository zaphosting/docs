---
id: palworld-enable-hardcore-mode
title: "Palworld: Hardcore-Modus aktivieren"
description: "Lerne, wie du den Hardcore-Modus in Palworld aktivierst, indem du die richtige Server-Konfig bearbeitest, True- oder False-Werte setzt und Permadeath-Optionen sicher anwendest. -> Jetzt mehr erfahren"
sidebar_label: "Hardcore-Modus aktivieren"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der *Hardcore-Modus* in Palworld aktiviert permanente Todesregeln für Spieler und optional auch für Pals. In dieser Anleitung lernst du, wie du den Hardcore-Modus manuell auf deinem ZAP-Hosting Palworld Gameserver aktivierst, indem du die richtige Konfigurationsdatei bearbeitest und anschließend den Server neu startest.



## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Webinterface hast. Du benötigst außerdem die Berechtigung, Server-Konfigurationsdateien über den Bereich **Configs** deiner Gameserver-Verwaltung zu bearbeiten.

:::danger Warnung vor permanentem Datenverlust
Wenn die Hardcore-Einstellungen aktiviert sind, können Charaktere beim Tod dauerhaft verloren gehen. Wenn du auch den Verlust von Pals aktivierst, können deine Pals ebenfalls dauerhaft verloren sein.
:::

:::tip Erstelle zuerst ein Backup
Bevor du Gameplay-Einstellungen wie den Hardcore-Modus änderst, empfiehlt es sich, ein Backup deines Servers oder der Spieldaten zu erstellen, sofern für deinen Service eine Backup-Option verfügbar ist.
:::

## Öffne die Palworld-Konfigurationsdatei

Um den Hardcore-Modus zu aktivieren, musst du die Datei `PalWorldSettings.ini` bearbeiten.

Im ZAP-Hosting Gameserver-Panel:

1. Öffne deinen Palworld Server.
2. Gehe zu **Configs**.
3. Öffne die Datei `PalWorldSettings.ini`.

:::info Richtige Konfigurationsdatei
Die Hardcore-Einstellungen werden in `PalWorldSettings.ini` gespeichert. Wenn du eine andere Datei bearbeitest, werden die Änderungen nicht auf deinen Palworld Gameserver angewendet.
:::

## Bearbeite die Hardcore-Einstellungen

Palworld speichert viele Gameplay-Einstellungen im Konfigurationseintrag `OptionSettings` in der Datei `PalWorldSettings.ini`. Du musst die relevanten Hardcore-Werte dort manuell setzen.

### Erforderliche Konfigurationsschlüssel

Die folgenden Konfigurationsschlüssel steuern das Hardcore-Verhalten:

| Konfig-Schlüssel | Wert | Wirkung |
| --- | --- | --- |
| `bHardcore` | `True` oder `False` | Aktiviert oder deaktiviert permanenten Spielertod |
| `bPalLost` | `True` oder `False` | Aktiviert oder deaktiviert permanenten Pal-Verlust beim Tod |
| `bCharacterRecreateInHardcore` | `True` oder `False` | Erlaubt das Erstellen eines neuen Charakters nach einem Hardcore-Tod |

### Empfohlene Werteübersicht

| Szenario | `bHardcore` | `bPalLost` | `bCharacterRecreateInHardcore` |
| --- | --- | --- | --- |
| Nur permanenter Spielertod | `True` | `False` | `False` oder `True` |
| Voller Hardcore mit Pal-Verlust | `True` | `True` | `False` oder `True` |
| Hardcore-Modus deaktivieren | `False` | `False` | `False` |

:::note True- und False-Werte
Diese Einstellungen verwenden boolesche Werte, das heißt, du musst genau `True` oder `False` eingeben, wie es vom Konfigurationsformat unterstützt wird.
:::

### Beispielkonfiguration

Wenn die Schlüssel bereits in deinem `OptionSettings` vorhanden sind, ändere ihre Werte entsprechend. Falls sie fehlen, füge sie in derselben `OptionSettings`-Zeile hinzu.

Beispiel:

```ini
OptionSettings=(bHardcore=True,bPalLost=True,bCharacterRecreateInHardcore=True)
```

Wenn deine `OptionSettings`-Zeile bereits viele andere Einstellungen enthält, entferne diese nicht. Füge stattdessen nur die Hardcore-bezogenen Einträge innerhalb der vorhandenen Klammern hinzu oder passe sie an.

:::caution Bestehende Einstellungen erhalten
`PalWorldSettings.ini` enthält oft viele aktive Server-Einstellungen in einem `OptionSettings`-Eintrag. Das versehentliche Löschen anderer Werte kann ungewollt Gameplay-Optionen auf deinem Server zurücksetzen.
:::

## Speichere und wende die Änderungen an

Nach der Bearbeitung der Datei:

1. Speichere die Änderungen in `PalWorldSettings.ini`.
2. Starte deinen Palworld Server im ZAP-Hosting Gameserver-Panel neu.

Ein Neustart ist erforderlich, damit der Server die aktualisierte Hardcore-Konfiguration lädt.

## Überprüfe, ob der Hardcore-Modus aktiv ist

Nach dem Neustart verbinde dich mit deinem Server und bestätige, dass die Hardcore-Regeln aktiv sind.

### Was du prüfen solltest

| Einstellung | Erwartetes Verhalten |
| --- | --- |
| `bHardcore=True` | Spieler können nach dem Tod nicht normal weiterspielen |
| `bPalLost=True` | Pals gehen beim Tod dauerhaft verloren |
| `bCharacterRecreateInHardcore=True` | Nach einem Hardcore-Tod kann ein neuer Charakter erstellt werden |

:::info Wichtiges Verhalten
Das genaue Ingame-Ergebnis hängt davon ab, welche der drei Hardcore-Einstellungen du aktiviert hast. Wenn du permanenten Spielertod willst, aber trotzdem möchtest, dass Nutzer mit einem neuen Charakter neu starten können, aktiviere `bCharacterRecreateInHardcore=True`.
:::

## Fehlerbehebung

Falls der Hardcore-Modus nicht wie erwartet funktioniert, prüfe folgende Punkte.

### Datei korrekt bearbeitet?

Stelle sicher, dass du `PalWorldSettings.ini` im Bereich **Configs** deines ZAP-Hosting Palworld Servers bearbeitet hast und nicht eine andere Datei.

### Syntax prüfen

Die Hardcore-Schlüssel müssen innerhalb des Eintrags `OptionSettings=(...)` stehen. Falsche Zeichensetzung, fehlende Kommata oder das Platzieren der Werte außerhalb des richtigen Abschnitts verhindern, dass der Server sie liest.

Beispiel für gültige Syntax:

```ini
OptionSettings=(bHardcore=True,bPalLost=False,bCharacterRecreateInHardcore=True)
```

### Server erneut neu starten

Wenn der Server nach dem Speichern der Datei nicht neu gestartet wurde, werden die neuen Einstellungen nicht geladen. Führe einen vollständigen Neustart durch und teste erneut.

## Fazit

Glückwunsch, du hast den Hardcore-Modus auf deinem Palworld Server erfolgreich aktiviert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂