---
id: l4d2-rcon
title: "Left 4 Dead 2: RCON"
description: "Entdecke, wie du Left 4 Dead 2 Gameserver sicher aus der Ferne verwaltest und steuerst, ohne ins Spiel zu müssen → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-l4d2
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei Left 4 Dead 2 wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist passwortgeschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwalten kannst, ohne als Spieler im Spiel verbunden zu sein**. Server-Admins können Left 4 Dead 2 bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – super flexibel und praktisch für die Fernverwaltung.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das machst du, indem du die Konfigurationsdatei unter **Configs** im Gameserver Control Panel bearbeitest. In der Datei `server.cfg` müssen folgende Einträge hinzugefügt oder angepasst werden:

```cfg
rcon_password "dein-passwort-hier"
```


## Verbindung via RCON

Um dich per RCON mit deinem Left 4 Dead 2 Gameserver zu verbinden, nutzt du das Kommandozeilen-Tool **rcon-cli**. Das kannst du dir im offiziellen [GitHub Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach dem Download und der Installation auf deinem Rechner stellst du die Verbindung mit der IP-Adresse des Servers, dem RCON-Port und dem RCON-Passwort her.

Den zugewiesenen Port findest du in der **Portübersicht** ganz unten auf der Einstellungsseite im Gameserver Dashboard. Passwort und Port müssen mit den Werten im Panel oder der Konfigurationsdatei übereinstimmen. Mit folgendem Befehl verbindest du dich und führst direkt einen Befehl aus:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORT> befehl
```


## RCON Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf deinem Left 4 Dead 2 Gameserver ausführen. Die verfügbaren Befehle hängen vom Game-Engine ab, umfassen aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                       | Beschreibung                                |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <passwort>`   | Authentifiziert den RCON-Zugang              |
| `status`                     | Zeigt Server- und Spielerinformationen       |
| `changelevel <mapname>`      | Wechselt zur angegebenen Map                  |
| `mp_timelimit <min>`         | Setzt das Zeitlimit pro Map                   |
| `mp_roundtime <min>`         | Legt die Rundendauer fest                     |
| `sv_cheats 0/1`              | Aktiviert/deaktiviert Cheat-Befehle (nur Admin) |
| `kick <spielername>`         | Kickt einen Spieler vom Server                |
| `banid <dauer> <SteamID>`    | Bannt einen Spieler für eine bestimmte Zeit   |
| `exec <datei.cfg>`           | Führt eine Konfigurationsdatei aus             |
| `say <nachricht>`            | Sendet eine Nachricht an alle Spieler          |


## Fazit

RCON ist ein unverzichtbares Tool für die Fernverwaltung von Left 4 Dead 2 Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet durch Passwortschutz eine sichere Zugangskontrolle. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />