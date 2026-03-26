---
id: dayz-becomeadmin
title: "DayZ: Admin werden"
description: "Entdecke, wie du volle Serverkontrolle bekommst, indem du Admin-Rechte vergibst und Spieloptionen effektiv verwaltest → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Admin-Rechte zu vergeben ermöglicht dir, deinen Server einfach und umfassend mit voller Kontrolle zu managen. Als Admin hast du die Möglichkeit, alle verfügbaren Optionen und Funktionen des Spiels direkt im Spiel anzuwenden. Im Folgenden erfährst du alle notwendigen Schritte, die du gehen musst, um deinem Server Admin-Rechte zuzuweisen.  
<InlineVoucher />

## Konfiguration

Die Konfiguration der Admin-Rechte erfolgt über die Server-Konfigurationsdatei. Du kannst auf die Konfigurationsdateien deines Servers im Gameserver-Management unter **Configs** zugreifen. Dort findest du eine Übersicht der verfügbaren Konfigurationsdateien. Öffne die **server.DZ.cfg** durch Klick auf den blauen Button.

![](https://screensaver01.zap-hosting.com/index.php/s/n6FSdPnYxxWp4Po/preview)

In der Konfigurationsdatei solltest du den Eintrag **passwordAdmin** finden. Hier musst du das gewünschte Passwort für den Zugriff festlegen. Gib dein Wunschpasswort ein und klicke unten auf den **Speichern**-Button.

![](https://screensaver01.zap-hosting.com/index.php/s/H3ndjqRYBPXRgRK/preview)

Damit die Änderung wirksam wird, muss der Server neu gestartet werden. Verbinde dich danach mit deinem Server und öffne den Ingame-Chat. Führe folgenden Befehl aus, um dich als Admin einzuloggen:

```
#login password
```



## Häufig genutzte Befehle

Hier findest du eine Liste einiger verfügbarer Befehle, die du mit deinen Administratorrechten nutzen kannst: 

| BEFEHL                                     | BESCHREIBUNG                                                  |
| :------------------------------------------ | :----------------------------------------------------------- |
| #login adminpassword                        | Logge dich als Admin des Servers ein.                         |
| #logout                                     | Admin-Logout.                                                |
| #mission filename Difficulty                | Wähle eine Mission mit bekanntem Namen und setze die Schwierigkeit – der Schwierigkeitsparameter ist optional und wenn nicht gesetzt, bleibt die aktuelle Schwierigkeit erhalten. |
| #missions                                   | Wähle eine Mission aus.                                       |
| ##restart                                   | Starte eine Mission neu.                                      |
| #reassign                                   | Starte komplett neu und weise Rollen neu zu.                 |
| #shutdown                                   | Fährt den Server herunter.                                   |
| #restartserver                              | Startet den Server neu.                                       |
| #shutdownserveraftermission                 | Server wird nach Ende der Mission heruntergefahren.          |
| #restartserveraftermission                  | Server wird nach Ende der Mission neu gestartet.              |
| #init                                       | Lädt die Server-Konfigurationsdatei neu, die mit -config Optionen geladen wurde. |
| #exec ban Name#exec ban ID#exec ban #Player | Erlaubt dir, einen Spieler zu bannen.                         |
| #kick Name#kick ID#kick #Player             | Erlaubt dir, einen Spieler vom Server zu kicken.             |
| #monitor (Intervall in Sekunden)             | Zeigt dir Performance-Infos des Servers. Wenn das Intervall 0 ist, stoppt die Überwachung. |
| #monitords (Intervall in Sekunden)           | Zeigt Performance-Infos auf der Server-Konsole. Wenn das Intervall 0 ist, stoppt die Überwachung. |
| #debug off                                  | Deaktiviert das Debugging.                                   |
| #debug (Intervall in Sekunden)               | Standardintervall ist 10, wenn kein anderes Intervall gewählt wird. |
| #debug (Befehl) (Parameter)                  | Es gibt einige verfügbare Befehle: JIPQueueuserQueuecheckFiletotalSentuserSentuserInfo. Du kannst jeden Befehl deaktivieren, indem du den Parameter off anhängst, z.B. #totalSent off. Die Ausgabe variiert je nach Befehl. Manche geben in die Logdatei aus, andere auf den Bildschirm, etc. Bitte beachte, dass du einen Debugger brauchst, der OutputDebugString auf dem Client-Rechner abfangen kann. |
| #debug (Befehl)                             | Admin-Logout.                                                |
| #logout                                     | Es gibt zwei verfügbare Befehle: console - sendet, was in der Server-Konsole steht, an den Sender. von - gibt Ausgaben in die in server.cfg definierte Logdatei aus, z.B. könnte die logfile „server_console.log“ heißen. Du bekommst eine Bestätigung dieser Befehle in den Chat-Kanälen. |


## Abschluss

Glückwunsch, du hast die Admin-Rechte erfolgreich konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />