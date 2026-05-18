---
id: gmod-rcon
title: "Garry's Mod: RCON"
description: "Entdecke, wie du Garry's Mod Gameserver sicher und effizient aus der Ferne verwaltest, ohne dich ins Spiel einzuloggen → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-gmod
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

In Garry's Mod wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist durch ein Passwort geschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwalten kannst, ohne als Spieler im Spiel verbunden zu sein**. Server-Admins können Garry's Mod bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – perfekt für flexibles und bequemes Remote-Management.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das machst du, indem du die Konfigurationsdatei im Bereich **Configs** im Gameserver Control Panel bearbeitest. In der Datei `server.cfg` müssen folgende Einträge hinzugefügt oder angepasst werden:

```cfg
rcon_password "dein-passwort-hier"
```


## Verbindung via RCON

Um dich per RCON mit deinem Garry's Mod Gameserver zu verbinden, nutzt du das Kommandozeilen-Tool **rcon-cli**. Das kannst du dir im offiziellen [GitHub Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach dem Download und der Installation auf deinem Rechner kannst du die Verbindung mit der IP-Adresse des Servers, dem RCON-Port und dem RCON-Passwort herstellen.

Den zugewiesenen Port findest du in der **Portübersicht** ganz unten auf der Einstellungsseite im Gameserver-Panel. Passwort und Port müssen mit den Werten im Panel oder der Konfigurationsdatei übereinstimmen. Mit folgendem Befehl verbindest du dich und führst direkt einen Befehl aus:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## RCON Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf deinem Garry's Mod Gameserver ausführen. Die verfügbaren Befehle hängen von der Game Engine ab, beinhalten aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                      | Beschreibung                                  |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <password>`   | Authentifiziert für den RCON-Zugang          |
| `status`                     | Zeigt Server- und Spielerinformationen       |
| `changelevel <mapname>`      | Wechselt zur angegebenen Map                  |
| `mp_timelimit <min>`         | Setzt das Zeitlimit pro Map                   |
| `mp_roundtime <min>`         | Legt die Rundenzeit fest                      |
| `sv_cheats 0/1`              | Aktiviert/deaktiviert Cheat-Befehle (nur Admin) |
| `kick <playername>`          | Kickt einen Spieler vom Server                |
| `banid <duration> <SteamID>` | Bannt einen Spieler für eine bestimmte Dauer  |
| `exec <file.cfg>`            | Führt eine Konfigurationsdatei aus            |
| `say <message>`              | Sendet eine Nachricht an alle Spieler         |


## Abschluss

RCON ist ein essentielles Tool für die Remote-Verwaltung von Garry's Mod Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet durch Passwortschutz eine sichere Zugangskontrolle. Eine korrekte und sichere Konfiguration ist entscheidend, um die Stabilität des Servers zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />