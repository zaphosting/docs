---
id: conan-rcon
title: "Conan Exiles: RCON"
description: "Entdecke, wie du Conan Exiles Gameserver sicher und remote ohne Ingame-Verbindung verwaltest → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-conan
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei Conan Exiles wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist durch ein Passwort geschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwaltst, ohne als Spieler im Spiel verbunden sein zu müssen**. Server-Admins können Conan Exiles bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – super flexibel und praktisch für die Fernverwaltung.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das machst du, indem du die Konfigurationsdatei im Bereich **Configs** im Gameserver Control Panel bearbeitest. In der Datei `game.ini` müssen folgende Einträge hinzugefügt oder angepasst werden:

```cfg
[RconPlugin]
RconEnabled=1
RconPassword=dein-passwort-hier
RconPort=XXXXX
```
Den zugewiesenen RCON-Port findest du unten auf der Einstellungsseite in der Port-Übersicht, dieser muss dort eingetragen werden.



## Verbindung via RCON

Um dich per RCON mit deinem Conan Exiles Gameserver zu verbinden, nutzt du das Kommandozeilen-Tool **rcon-cli**. Du kannst es im offiziellen [GitHub Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach dem Download und der Installation auf deinem Rechner stellst du die Verbindung mit der Server-IP, dem RCON-Port und dem RCON-Passwort her.

Den zugewiesenen Port findest du in der **Port-Übersicht** ganz unten auf der Einstellungsseite im Gameserver Dashboard. Passwort und Port müssen mit den Werten im Panel oder der Konfigurationsdatei übereinstimmen. Mit folgendem Befehl verbindest du dich und führst direkt einen Befehl aus:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf deinem Conan Exiles Server ausführen. Die verfügbaren Befehle hängen vom Spiel ab, umfassen aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                      | Beschreibung                      |
| --------------------------- | -------------------------------- |
| `broadcast <message>`       | Sendet eine Nachricht an alle Spieler |
| `kick <playername>`         | Kickt einen Spieler vom Server   |
| `ban <playername>`          | Bannt einen Spieler               |
| `unban <playername>`        | Entbannt einen Spieler            |
| `restartserver`             | Startet den Server neu            |
| `restartserver <seconds>`   | Startet den Server mit Verzögerung |
| `shutdownserver`            | Fährt den Server herunter         |
| `shutdownserver <seconds>`  | Fährt den Server mit Verzögerung herunter |
| `changemap <mapname>`       | Lädt eine andere Map              |
| `setpassword <newpassword>` | Setzt ein neues RCON-Passwort    |

## Abschluss

RCON ist ein essenzielles Tool für die Remote-Administration von Conan Exiles Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und schützt den Zugang durch Passwort-Authentifizierung. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />