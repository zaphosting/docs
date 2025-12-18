---
id: css-rcon
title: "Counter-Strike: Source: RCON"
description: "Entdecke, wie du Counter-Strike: Source Gameserver sicher und effizient aus der Ferne verwaltest und steuerst → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-css
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei Counter-Strike: Source wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist durch ein Passwort geschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwaltst, ohne als Spieler im Spiel verbunden sein zu müssen**. Server-Admins können Counter-Strike: Source bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – super flexibel und praktisch für die Fernverwaltung.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das machst du, indem du die Konfigurationsdatei unter **Configs** im Gameserver Control Panel bearbeitest. In der Datei `server.cfg` müssen folgende Einträge hinzugefügt oder angepasst werden:

```cfg
rcon_password "dein-passwort-hier"
```


## Verbindung via RCON

Um dich per RCON mit dem Counter-Strike: Source Gameserver zu verbinden, nutzt du das Kommandozeilen-Tool **rcon-cli**. Das kannst du dir im offiziellen [GitHub-Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach dem Download und der Installation auf deinem Rechner stellst du die Verbindung mit der IP-Adresse des Servers, dem RCON-Port und dem RCON-Passwort her.

Den zugewiesenen Port findest du in der **Port-Übersicht** ganz unten auf der Einstellungsseite im Gameserver-Panel. Passwort und Port müssen mit den Werten im Panel oder der Konfigurationsdatei übereinstimmen. Mit folgendem Befehl verbindest du dich und führst direkt einen Befehl aus:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORT> befehl
```


## RCON-Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf dem Counter-Strike: Source Server ausführen. Die verfügbaren Befehle hängen von der Game-Engine ab, umfassen aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                    | Beschreibung                                      |
|---------------------------|--------------------------------------------------|
| `rcon_password <passwort>`   | Authentifiziert als RCON-Admin                   |
| `status`               | Zeigt Spieler- und Serverinformationen           |
| `changelevel <map>`   | Wechselt die Map                                  |
| `mp_autoteambalance 0/1` | Aktiviert/deaktiviert automatisches Team-Balancing |
| `mp_timelimit <minuten>` | Setzt das Zeitlimit der Map                      |
| `mp_friendlyfire 0/1`    | Aktiviert/deaktiviert Friendly Fire               |
| `mp_freezetime <sekunden>` | Setzt die Freeze-Zeit zu Rundenstart             |
| `sv_cheats 0/1`         | Aktiviert Cheats (nur für Admins)                 |
| `exec <datei.cfg>`       | Führt eine Konfigurationsdatei aus                |
| `kick <spieler>`         | Kickt einen Spieler vom Server                     |


## Fazit

RCON ist ein zentrales Tool für die Fernverwaltung von Counter-Strike: Source Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet durch Passwortschutz eine sichere Zugangskontrolle. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />