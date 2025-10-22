---
id: minecraft-rcon
title: "Minecraft: RCON"
description: "Entdecke, wie du Minecraft-Gameserver mit RCON flexibel und sicher fernsteuern kannst – für effiziente Serververwaltung → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei Minecraft wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist passwortgeschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwalten kannst, ohne als Spieler im Spiel verbunden zu sein**. Server-Admins können Minecraft so bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – perfekt für flexibles Remote-Management.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das geht direkt in der Gameserver-Verwaltung. Im Bereich **Einstellungen** findest du die Option **RCON**, die aktiviert werden muss. Setze ein sicheres Passwort und definiere einen gültigen Port. Das erfolgt über die Konfigurationsdatei unter **Configs** im Gameserver-Panel. In der Datei `server.properties` müssen folgende Einträge hinzugefügt oder angepasst werden:

```cfg
enable-rcon=true
rcon.port=<XXXXX>
rcon.password=<dein-passwort>
```
Den zugewiesenen RCON-Port findest du unten auf der Einstellungsseite in der Port-Übersicht, dort muss er auch angegeben werden.



## Verbindung via RCON

Um dich per RCON mit dem Minecraft-Server zu verbinden, nutzt du das Kommandozeilen-Tool **rcon-cli**. Du kannst es im offiziellen [GitHub-Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach Installation auf deinem Rechner stellst du die Verbindung mit der Server-IP, dem RCON-Port und dem RCON-Passwort her.

Den zugewiesenen Port findest du in der **Port-Übersicht** unten auf der Einstellungsseite im Gameserver-Panel. Passwort und Port müssen mit den Werten aus dem Panel oder der Konfigurationsdatei übereinstimmen. Mit folgendem Befehl verbindest du dich und führst direkt einen Befehl aus:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORT> befehl
```



## RCON-Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf dem Minecraft-Server ausführen. Die verfügbaren Befehle hängen von der Spiel-Engine ab, umfassen aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl               | Beschreibung                                 |
|------------------------|---------------------------------------------|
| `list`               | Listet verbundene Spieler                    |
| `say <nachricht>`     | Sendet eine Nachricht an alle Spieler        |
| `kick <spieler>`      | Kickt einen Spieler vom Server                |
| `ban <spieler>`       | Bannt einen Spieler                           |
| `pardon <spieler>`    | Entbannt einen Spieler                        |
| `op <spieler>`        | Vergibt Operator-Rechte an einen Spieler      |
| `deop <spieler>`      | Entzieht Operator-Rechte                      |
| `time set <wert>`     | Setzt die Weltzeit (z.B. Tag, Nacht, Zahl)   |
| `gamemode <modus> <spieler>` | Setzt den Spielmodus eines Spielers    |
| `weather <clear/rain/thunder>` | Ändert das Wetter                     |
| `stop`                | Stoppt den Server sauber                      |



## Fazit

RCON ist ein essentielles Tool für die Remote-Verwaltung von Minecraft-Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet durch Passwortschutz eine sichere Zugangskontrolle. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />