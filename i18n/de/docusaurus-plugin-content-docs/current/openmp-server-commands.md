---
id: openmp-server-commands
title: "Open.mp: Open.mp Serverbefehle"
description: "Entdecke, wie du Open.mp Serverbefehle sicher mit RCON-Zugang verwaltest und die Kontrolle über deinen Server verbesserst → Jetzt mehr erfahren"
sidebar_label: Serverbefehle
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Open.mp Server kommen alle mit einer Reihe nützlicher eingebauter Serverbefehle, die sowohl im Spiel als auch über deine Serverkonsole genutzt werden können. In dieser Anleitung schauen wir uns viele dieser Befehle an, geben Beschreibungen und Beispiele zur Anwendung.

<InlineVoucher />

## Zugriff einrichten (RCON)

Um Serverbefehle im Spiel ausführen zu können, musst du die RCON-Funktion aktivieren. Dazu greifst du auf deine Konfigurationsdatei `config.json` zu und passt die nötigen Parameter an, um die Funktion zu aktivieren und ein Passwort zu setzen. Nutze dafür unsere [Serverkonfiguration](openmp-configuration.md) Anleitung, um deine Serverkonfigurationsdatei zu öffnen.

Wenn du die Datei geöffnet hast, suche die folgenden Parameter; aktiviere die Funktion und setze ein RCON-Passwort.

| Parametername                 | Beispiel                               | Beschreibung                                                                                   |
| ----------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------- | 
| rcon.enable                   | true                                  | Schaltet die RCON-Funktion ein oder aus                                                      |
| rcon.password                 | ZAP-IS-AWESOME                        | Setzt ein Passwort, das für den Zugriff auf RCON von Clients verwendet werden muss           |

:::info
Stelle sicher, dass du ein RCON-Passwort in deiner Konfiguration gesetzt hast. Ansonsten kann jeder auf RCON zugreifen, was extrem unsicher ist.
:::

Nachdem du die Änderungen gemacht hast, speichere die Datei an der richtigen Stelle und starte deinen Server neu. Beim nächsten Start sollte RCON jetzt zugänglich und einsatzbereit sein.

:::tip
Wenn du mehr über RCON erfahren willst, schau dir gerne unsere [RCON](openmp-rcon.md) Anleitung an, die noch tiefer ins Thema geht.
:::

## Verfügbare Befehle

Die folgende Tabelle zeigt eine Auswahl wichtiger Serverbefehle für Open.mp, inklusive Anwendungsbeispielen und Beschreibungen. Diese Befehle kannst du im Spiel, über die Serverkonsole oder via RCON-Programm nutzen. Wenn du alle aktuellen Befehle sehen möchtest, empfehlen wir dir die [open.mp Anleitung zum Server steuern](https://www.open.mp/docs/server/ControllingServer), die alle verfügbaren Serverbefehle auflistet.

:::tip
Wenn du Befehle direkt über die Konsole oder ein RCON-Programm ausführst, brauchst du das `/rcon`-Präfix nicht. Das ist nur nötig, wenn du die Befehle **im Spiel** eingibst.
:::

:::note
Stelle sicher, dass RCON aktiviert ist, sonst funktionieren diese Befehle weder im Spiel noch über ein RCON-Programm.
:::

### Allgemeine Befehle

| Befehlssyntax                | Akzeptierte Werte | Beschreibung                                                        | 
| ---------------------------- | ----------------- | ------------------------------------------------------------------ | 
| /rcon cmdlist                | -                 | Gibt eine Liste aller Serverbefehle zurück                         | 
| /rcon varlist                | -                 | Gibt eine Liste aller aktuellen Servervariablen zurück             | 
| /rcon exit                   | -                 | Fährt den Server herunter                                          | 
| /rcon echo [text]            | String            | Sendet eine Nachricht an die Serverkonsole (wird im Spiel nicht angezeigt) | 
| /rcon say [text]             | String            | Sendet eine Nachricht an alle Spieler im Spiel (erscheint als "Admin: [text]") | 
| /rcon players                | -                 | Zeigt Informationen über alle aktuell verbundenen Spieler an      |
| /rcon reloadlog              | -                 | Lädt die Server-Logdatei neu                                       |

### Moderative Befehle

| Befehlssyntax                | Akzeptierte Werte | Beschreibung                                                        | 
| ---------------------------- | ----------------- | ------------------------------------------------------------------ | 
| /rcon kick [id]              | Integer           | Kickt den angegebenen Spieler vom Server                           | 
| /rcon ban [id]               | Integer           | Bannt den angegebenen Spieler vom Server                           | 
| /rcon banip [ip]             | String            | Bannt eine IP-Adresse vom Server                                   | 
| /rcon unbanip [ip]           | String            | Hebt den Bann einer IP-Adresse auf                                | 
| /rcon reloadbans             | -                 | Lädt die Bannliste neu                                             |

<InlineVoucher />