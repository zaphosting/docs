---
id: vrising-rcon
title: "V Rising: RCON"
description: "Entdecke, wie du V Rising Gameserver effizient aus der Ferne verwaltest und steuerst – ganz ohne Ingame-Verbindung → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-vrising
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei V Rising wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist durch ein Passwort geschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Der große Vorteil von RCON ist, dass du den Server **verwaltst, ohne im Spiel als Spieler verbunden sein zu müssen**. Server-Admins können V Rising so bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – super flexibel und praktisch für die Fernverwaltung.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das machst du, indem du die Konfigurationsdatei unter **Configs** im Gameserver-Management-Panel bearbeitest. In der Datei `ServerHostSettings.json` müssen folgende Einträge hinzugefügt oder angepasst werden:

```cfg
  "Rcon": {
    "Enabled": false,
    "Port": XXXXX,
    "Password": "definiere-dein-passwort"
  },
```

Den zugewiesenen RCON-Port findest du unten auf der Einstellungsseite in der Port-Übersicht, dieser muss dort eingetragen werden.



## Verbindung via RCON

Für die Verbindung zum V Rising Gameserver via RCON nutzt du das Kommandozeilen-Tool **rcon-cli**. Das kannst du dir im offiziellen [GitHub-Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach dem Download und der Installation auf deinem Rechner kannst du die Verbindung mit der Server-IP, dem RCON-Port und dem RCON-Passwort herstellen.

Den zugewiesenen Port findest du in der **Port-Übersicht** ganz unten auf der Einstellungsseite im Gameserver-Adminbereich. Passwort und Port müssen mit den Werten im Panel oder der Konfigurationsdatei übereinstimmen. Mit folgendem Befehl verbindest du dich und führst direkt einen Befehl aus:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORT> befehl
```



## RCON-Befehle

Sobald du via RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf dem V Rising Gameserver ausführen. Die verfügbaren Befehle hängen vom Spiel ab, umfassen aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                                     | Beschreibung                                                |
|--------------------------------------------|-------------------------------------------------------------|
| `adminauth`                                | Aktiviert Adminrechte für deinen Charakter (nur ingame)     |
| `admindeauth`                              | Deaktiviert Adminrechte                                     |
| `banuser <SteamID>`                        | Sperrt einen Spieler dauerhaft                              |
| `unbanuser <SteamID>`                      | Hebt eine vorherige Sperre eines Spielers auf               |
| `kick <Spielername>`                       | Kickt einen Spieler sofort vom Server                        |
| `give <ItemName> <Menge>`                  | Gibt Items direkt ins Inventar                               |
| `teleport <X> <Y>`                         | Teleportiert deinen Charakter zu den angegebenen Koordinaten|
| `teleportplayer <Name> <X> <Y>`            | Teleportiert einen anderen Spieler zu bestimmten Koordinaten|
| `changehealth <Wert>`                      | Setzt deine aktuelle Gesundheit auf einen bestimmten Wert  |
| `spawn <EntityName> <Menge>`                | Spawnt NPCs, Kreaturen oder andere Entities                 |



## Fazit

RCON ist ein essentielles Tool zur Fernverwaltung von V Rising Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet durch Passwortschutz eine sichere Zugangskontrolle. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />