---
id: 7d2d-rcon
title: "7 Days to Die: RCON"
description: "Entdecke, wie du 7 Days to Die Gameserver sicher und remote ohne Ingame-Zugang verwaltest – für effiziente Serveradministration → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-7d2d
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei 7 Days to Die wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist durch ein Passwort geschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwalten kannst, ohne im Spiel als Spieler verbunden zu sein**. Serveradmins können 7 Days to Die bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – super flexibel und praktisch für Remote-Management.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das geht direkt in der Gameserver-Verwaltung. Im Bereich **Einstellungen** findest du die Option **RCON**, die aktiviert werden muss. Setze ein sicheres Passwort und definiere einen gültigen Port.

Den zugewiesenen RCON-Port findest du unten auf der Einstellungsseite in der **Portübersicht**.

Alternativ kannst du RCON auch über die Konfigurationsdatei aktivieren. Diese findest du unter **Configs** im Gameserver-Management-Panel. In der Datei `serverconfig.xml` müssen folgende Einträge hinzugefügt oder angepasst werden:

```cfg
<property name="TelnetPassword" value="dein-sicheres-passwort-hier"/>
```

Der zugewiesene RCON-Port steht ebenfalls unten in der **Portübersicht** und muss dort angegeben werden.

## Verbindung via RCON

Um dich per RCON mit deinem 7 Days to Die Gameserver zu verbinden, nutzt du das Kommandozeilen-Tool **rcon-cli**. Das kannst du dir im offiziellen [GitHub Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach Installation auf deinem Rechner stellst du die Verbindung mit der Server-IP, dem RCON-Port und dem Passwort her.

Den Port findest du in der **Portübersicht** ganz unten auf der Einstellungsseite im Gameserver-Panel. Passwort und Port müssen mit den Werten aus dem Panel oder der Konfigurationsdatei übereinstimmen. Mit folgendem Befehl verbindest du dich und führst direkt einen Befehl aus:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORT> -t telnet befehl
```

## RCON Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf deinem 7 Days to Die Gameserver ausführen. Die verfügbaren Befehle hängen vom Spiel ab, umfassen aber typischerweise Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                  | Beschreibung                                  |
|-------------------------|-----------------------------------------------|
| `dm` oder `debugmenu on` | Aktiviert den Entwicklermodus                 |
| `giveme <ItemName> <count>` | Gibt dir einen Gegenstand                     |
| `buffplayer <ID> <buff>` | Verleiht einem Spieler einen Buff             |
| `tele <x> <y> <z>`      | Teleportiert dich zu den angegebenen Koordinaten |
| `settime <seconds>`      | Setzt die aktuelle Ingame-Zeit                |
| `setgameday <day>`       | Setzt den aktuellen Spieltag                   |
| `spawnentity <ID>`       | Spawnt ein Entity anhand der ID                |
| `kick <player>`          | Kickt einen Spieler vom Server                  |
| `ban <address>`          | Bannt eine IP oder einen Spieler                |
| `saveworld`              | Speichert den Weltzustand manuell               |

## Fazit

RCON ist ein essentielles Tool für die Remote-Administration von 7 Days to Die Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und schützt den Zugang durch Passwort-Authentifizierung. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite – meld dich einfach! 🙂

<InlineVoucher />