---
id: dayz-becomeadmin
title: "DayZ: Admin werden"
description: Informationen zum Admin werden bei deinem DayZ Gameserver von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />



## Konfiguration

Die Konfiguration der Administratorberechtigungen erfolgt über die Server Konfigurationsdatei. Die Konfigurationsdateien deines Servers kannst du in der Gameserver Verwaltung unter **Configs** aufrufen. Dort angelangt findest du eine übersicht der verfügbaren Konfigurationsdateien. Rufe die **server.DZ.cfg** auf, in dem du auf den blauen Button klickst. 

![](https://screensaver01.zap-hosting.com/index.php/s/Km4M9FFzgtEXqR9/preview)

In der Konfigurationsdatei solltest du nun den Eintrag **passwordAdmin** finden. An dieser Stelle musst du das gewünschte Passwort für den Zugang festlegen. Trage dein Wunschpasswort ein und klicke unten auf den **Speichern** Button. 



![](https://screensaver01.zap-hosting.com/index.php/s/EsFqXznnKFokrAg/preview)



Damit die Änderung übernommen wird, muss der Server einmal neu gestartet werden. Verbinde dich im Anschluss mit deinem Server und öffne den Chat im Spiel. Führe dort den folgenden Befehl aus, damit du dich als Admin einloggst:

```
#login password
```



## Häufig verwendete Befehle

Im folgenden findest du eine Auflistung von einigen verfügbaren Befehlen, die du mit deinen Administratorberechtigungen verwenden kannst: 

| BEFEHL                                      | BESCHREIBUNG                                                 |
| :------------------------------------------ | :----------------------------------------------------------- |
| #login adminpassword                        | Melde dich als Admin des Servers an.                         |
| #logout                                     | Admin-Abmeldung.                                             |
| #mission filename Difficulty                | Wähle die Mission mit bekanntem Namen und stelle die Schwierigkeit ein - der Schwierigkeitsparameter ist optional und, wenn nicht gesetzt, wird die aktuelle Schwierigkeit beibehalten. |
| #missions                                   | Wähle eine Mission aus.                                      |
| ##restart                                   | Starte eine Mission neu.                                     |
| #reassign                                   | Starte von vorne und weise die Rollen neu zu.                |
| #shutdown                                   | Fährt den Server herunter.                                   |
| #restartserver                              | Startet den Server neu.                                      |
| #shutdownserveraftermission                 | Nach dem Ende der Mission wird der Server heruntergefahren.  |
| #restartserveraftermission                  | Nach dem Ende der Mission wird der Server neu gestartet.     |
| #init                                       | Lädt die Server-Konfigurationsdatei neu, die durch -config Optionen geladen wurde. |
| #exec ban Name#exec ban ID#exec ban #Player | Ermöglicht es dir, einen Spieler zu bannen.                  |
| #kick Name#kick ID#kick #Player             | Ermöglicht es dir, einen Spieler vom Server zu kicken.       |
| #monitor (Intervall in Sekunden)            | Zeigt dir Leistungsinformationen des Servers. Wenn das Intervall 0 ist, wird die Überwachung gestoppt. |
| #monitords (Intervall in Sekunden)          | Zeigt Leistungsinformationen auf der Serverkonsole. Wenn das Intervall 0 ist, wird die Überwachung gestoppt. |
| #debug off                                  | Deaktiviert das Debugging.                                   |
| #debug (Intervall in Sekunden)              | Das Standardintervall beträgt 10, wenn kein anderes Intervall gewählt wird. |
| #debug (Befehl) (Parameter)                 | Es gibt einige verfügbare Befehle:JIPQueueuserQueuecheckFiletotalSentuserSentuserInfo Du kannst jeden Befehl deaktivieren, indem du den Parameter off nach jedem Befehl hinzufügst. z.B. #totalSent off. Die Ausgabe variiert je nach Befehl. Einige werden in die Logdatei geschrieben, andere auf dem Bildschirm angezeigt, etc. Bitte beachte, dass du einen Debugger benötigst, der in der Lage ist, OutputDebugString auf der Clientmaschine zu erfassen. |
| #debug (Befehl)                             | Admin-Abmeldung.                                             |
| #logout                                     | Es gibt zwei verfügbare Befehle:console - Sendet, was in der Serverkonsole ist, an den Absender.von - Ausgabe in der in server.cfg definierten Logdatei, z.B. könnte die Logdatei „server_console.log“ heißen. Du wirst eine Bestätigung dieser Befehle in den Chatkanälen sehen. |


## Abschluss

Glückwunsch, du hast erfolgreich die Administratorberechtigungen konfiguriert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂