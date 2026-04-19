---
id: windrose-password-protection
title: "Windrose: Passwortschutz"
description: "Setze ein Passwort auf deinem Windrose Gameserver, um den Zugang zu schützen, und verwalte die Passwortänderung sicher in der Serverkonfiguration -> Jetzt mehr erfahren"
sidebar_label: Passwortschutz
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windrose unterstützt Passwortschutz, mit dem du den Zugang zu deinem Dedicated Server mit einem Join-Passwort einschränken kannst. In dieser Anleitung lernst du, wie du das Passwort auf deinem Windrose Server über das ZAP-Hosting Gameserver-Management aktivierst, änderst oder entfernst.

## Preparation

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Windrose Server im ZAP-Hosting Webinterface hast und die Berechtigung zum Bearbeiten von Serverdateien besitzt.

:::info Erforderlicher Zugriff
Du benötigst Zugriff auf dein Server Dashboard und den Dateimanager, um die Datei `ServerDescription.json` bearbeiten zu können.
:::

## Verständnis des Windrose Passwortschutzes

Ein Passwort zu setzen hilft, unerlaubte Spieler vom Beitritt zu deinem Windrose Gameserver abzuhalten. Spieler können den Server zwar über den Einladungscode erreichen, müssen aber das korrekte Passwort eingeben, bevor sie sich verbinden können.

Das ist nützlich, wenn du:
- den Zugang auf Freunde, Teammitglieder oder eine private Gruppe beschränken möchtest
- einen Testserver vor öffentlichem Zugriff schützen willst
- kontrollieren möchtest, wer beitreten kann, ohne auf separate Passwortmanager oder Account-Passwörter angewiesen zu sein

:::note Passwortverhalten
Windrose verwendet das Passwort, das in der Serverdatei selbst konfiguriert ist. Dieses ist unabhängig von deinem ZAP-Hosting Account-Passwort und hat nichts mit Passwortmanagern, Google-Integration oder Passwortlisten zu tun.
:::

## Passwortschutz aktivieren

Um ein Passwort zu setzen, musst du den Server zuerst stoppen, die Konfigurationsdatei bearbeiten und dann den Server wieder starten.

### Server stoppen

Öffne dein Server Dashboard im ZAP-Hosting Webinterface und stoppe den Server vollständig, bevor du Änderungen vornimmst.

:::caution Server vor Bearbeitung stoppen
Stoppe den Server unbedingt, bevor du `ServerDescription.json` bearbeitest, um Konfigurationskonflikte oder das Überschreiben der Datei während des Serverbetriebs zu vermeiden.
:::

### Konfigurationsdatei öffnen

Öffne im Panel die Seitenleiste und wähle `Dateien`.

Suche dann die Datei `ServerDescription.json` im Stammverzeichnis deiner Serverdateiliste und öffne sie.

### Passwort-Einstellungen bearbeiten

Setze in `ServerDescription.json` den Wert von `IsPasswordProtected` auf `true` und definiere dein gewünschtes Passwort im Feld `Password`.

```json
"IsPasswordProtected": true,
"Password": "DeinPasswortHier"
```

Ersetze `DeinPasswortHier` durch dein sicheres Passwort.

:::tip Starkes Passwort wählen
Verwende ein einzigartiges Passwort, das du nicht als Account-Passwort oder für andere Dienste nutzt. So schützt du deinen Windrose Server vor unerwünschtem Zugriff.
:::

### Speichern und Server neu starten

Klicke nach der Bearbeitung auf `Inhalt speichern`.

Starte anschließend deinen Server im Dashboard neu. Dein Windrose Server verlangt nun das konfigurierte Passwort, wenn Spieler beitreten wollen.

## Konfigurationsübersicht

Die folgende Tabelle erklärt die relevanten Einstellungen in `ServerDescription.json`:

| Schlüssel | Typ | Beispiel | Beschreibung |
| --- | --- | --- | --- |
| `IsPasswordProtected` | Boolean | `true` | Aktiviert oder deaktiviert den Passwortschutz |
| `Password` | String | `"DeinPasswortHier"` | Definiert das Join-Passwort bei aktiviertem Passwortschutz |

## Bestehendes Passwort ändern

Wenn du später das Passwort ändern möchtest, ist der Vorgang derselbe wie bei der Ersteinrichtung.

### Passwortwert aktualisieren

Stoppe den Server, öffne `ServerDescription.json` und ändere den Wert im Feld `Password` auf dein neues Passwort.

Beispiel:

```json
"IsPasswordProtected": true,
"Password": "[dein_neues_passwort]"
```

Der Platzhalter `[dein_neues_passwort]` steht für das neue Passwort, das Spieler beim Beitritt verwenden sollen.

### Wieder speichern und neu starten

Speichere die Datei und starte den Server neu, damit die Passwortänderung wirksam wird.

:::note Passwortprüfung
Wenn Spieler nach der Passwortänderung nicht beitreten können, bitte sie, die Eingabe genau zu prüfen – Groß- und Kleinschreibung ist dabei wichtig.
:::

## Passwortschutz entfernen

Wenn du deinen Windrose Server nicht mehr mit einem Passwort schützen möchtest, kannst du die Funktion in derselben Konfigurationsdatei deaktivieren.

### Einstellung deaktivieren

Stoppe den Server und öffne erneut `ServerDescription.json`.

Setze `IsPasswordProtected` auf `false`. Der Wert im Feld `Password` wird dann ignoriert.

```json
"IsPasswordProtected": false,
"Password": ""
```

### Speichern und Server neu starten

Klicke auf `Inhalt speichern` und starte den Server neu. Spieler können dann ohne Passwort beitreten.

## Fehlerbehebung

Falls der Passwortschutz nicht wie erwartet funktioniert, prüfe folgende Punkte.

| Problem | Mögliche Ursache | Lösung |
| --- | --- | --- |
| Server fragt nicht nach Passwort | `IsPasswordProtected` ist noch auf `false` gesetzt | Auf `true` setzen, Datei speichern und Server neu starten |
| Spieler können mit richtigem Passwort nicht beitreten | Passwort wurde falsch eingegeben | Konfigurierten Wert prüfen und Spieler bitten, die Eingabe sorgfältig zu kontrollieren |
| Änderungen werden nicht übernommen | Server wurde nach Bearbeitung nicht neu gestartet | Server nach dem Speichern von `ServerDescription.json` neu starten |
| Dateianpassungen gehen verloren | Datei wurde bearbeitet, während der Server lief | Server zuerst stoppen, Änderungen erneut vornehmen, speichern und neu starten |

:::danger Keine sensiblen Passwörter öffentlich speichern
Teile dein Serverpasswort nicht öffentlich in Community-Posts, Screenshots oder Dateiexporten. Vermeide auch Passwörter aus alten Passwortlisten oder die Wiederverwendung von Zugangsdaten anderer Dienste.
:::

## Conclusion

Glückwunsch, du hast den Passwortschutz auf deinem Windrose Server erfolgreich eingerichtet. Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung! 🙂