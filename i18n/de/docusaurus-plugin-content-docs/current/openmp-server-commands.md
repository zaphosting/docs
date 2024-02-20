---
id: openmp-server-commands
title: Open.mp Server-Befehle
description: Informationen über nützliche Befehle für das Open.mp-Spiel von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Server-Befehle
---

Open.mp-Server verfügen über eine Reihe nützlicher integrierter Serverbefehle, die du im Spiel und über deine Serverkonsole verwenden kannst. In diesem Leitfaden werden wir uns mit vielen dieser Befehle befassen und Beschreibungen und Anwendungsbeispiele für jeden einzelnen geben.

## Zugriff einrichten (RCON)

Um Serverbefehle im Spiel ausführen zu können, musst du die RCON-Funktion aktivieren. Du musst auf deine Konfiguration `config.json` zugreifen und die notwendigen Parameter anpassen, um die Funktion einzuschalten und ein Passwort hinzuzufügen. Bitte benutze unsere [Open.mp-Konfigurationsanleitung](openmp-configuration.md), um auf deine Serverkonfigurationsdatei zuzugreifen.

Sobald du die Datei fertig hast, findest du die folgenden Parameter, um die Funktion einzuschalten und ein RCON-Passwort festzulegen.

| Parameter Name | Beispiel | Beschreibung |
| ------------------------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------- | 
| rcon.enable | true | Schaltet um, ob die RCON-Funktion aktiviert oder deaktiviert werden soll |
| rcon.password | ZAP-IS-AWESOME | Setzt ein Passwort, das verwendet werden muss, um von Clients auf RCON zugreifen zu können |

:::info
Vergewissere dich, dass du bei der Konfigration ein RCON-Passwort eingerichtet hast. Andernfalls kann es zu Problemen kommen und RCON ist für jeden zugänglich, was sehr unsicher ist.
:::

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an der richtigen Stelle und starte deinen Server neu. Wenn dein Server das nächste Mal hochfährt, sollte RCON jetzt zugänglich und bereit sein.

:::tip
Wenn du mehr über RCON erfahren möchtest, kannst du unseren [Open.mp RCON Leitfaden](openmp-rcon.md) benutzen, der weitere Details enthält.
:::

## Verfügbare Befehle

In der folgenden Tabelle findest du eine Reihe wichtiger Serverbefehle für Open.mp sowie Beispiele und Beschreibungen, die du entweder im Spiel, über die Serverkonsole oder über ein RCON-Programm verwenden kannst. Wenn du alle aktuellen Befehle sehen möchtest, empfehlen wir dir die Lektüre des [open.mp's controlling a server guide](https://www.open.mp/docs/server/ControllingServer), in dem alle derzeit verfügbaren Serverbefehle vorgestellt werden.

:::tip
Wenn du Befehle direkt über die Konsole oder über ein RCON-Programm ausführst, musst du das Präfix `/rcon` nicht verwenden. Du musst dies nur tun, wenn du die Befehle **im Spiel** ausführst.
:::

:::note
Vergewissere dich, dass RCON aktiviert ist, sonst funktionieren diese Befehle nicht im Spiel oder über ein RCON-Programm.
:::

### Allgemeine Befehle

| Befehlssyntax | Akzeptierte Werte | Beschreibung | 
| ------------------------------ | ---------------- | -------------------------------------------------------------------- | 
| /rcon cmdlist | - | Liefert eine Liste mit allen Serverbefehlen | 
| /rcon varlist | - | Liefert eine Liste mit allen aktuellen Servervariablen | 
| /rcon exit | - | Schaltet den Server ab | 
| /rcon echo [text] | String | Sendet eine Nachricht an die Serverkonsole (wird nicht im Spiel angezeigt) | 
| /rcon say [text] | String | Sendet eine Nachricht an alle Spieler im Spiel (wird als "Admin: [text]" angezeigt) | 
| /rcon players | - | Liefert Informationen über alle derzeit verbundenen Spieler |
| /rcon reloadlog | - | Lädt die Server-Logdatei neu |

### Moderative Befehle

| Befehlssyntax | Akzeptierte Werte | Beschreibung | 
| ------------------------------ | ---------------- | -------------------------------------------------------------------- | 
| /rcon kick [id] | Integer | Schmeißt den Zielspieler vom Server | 
| /rcon ban [id] | Integer | Verbannt den Zielspieler vom Server | 
| /rcon banip [ip] | String | Verbannt eine IP-Adresse vom Server | 
| /rcon unbanip [ip] | String | Aufhebung der Sperre einer IP-Adresse vom Server | 
| /rcon reloadbans | - | Lädt die Ban-Datei neu |