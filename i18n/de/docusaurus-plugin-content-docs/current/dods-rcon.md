---
id: dods-rcon
title: "Day of Defeat: Source: RCON"
description: "Entdecke, wie du Day of Defeat: Source Gameserver remote verwaltest für flexible Kontrolle und Überwachung → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-dods
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei Day of Defeat: Source wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist passwortgeschützt und läuft über einen definierten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwalten kannst, ohne als Spieler im Spiel verbunden sein zu müssen**. Serveradmins können Day of Defeat: Source bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – super flexibel und praktisch für die Fernbedienung.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das geht direkt in der Gameserver-Verwaltung. Im Bereich **Einstellungen** findest du die Option **RCON**, die aktiviert werden muss. Setze ein sicheres Passwort und definiere einen gültigen Port.

Den zugewiesenen RCON-Port findest du unten auf der Einstellungsseite in der **Portübersicht**.

Alternativ kannst du RCON auch über die Konfigurationsdatei aktivieren. Öffne dazu unter **Configs** im Gameserver-Management-Panel die Datei `server.cfg` und füge folgende Zeile hinzu oder passe sie an:

```cfg
rcon_password "dein-sicheres-passwort"
```

## Verbindung via RCON

Um dich per RCON mit deinem Day of Defeat: Source Gameserver zu verbinden, nutzt du das Kommandozeilen-Tool **rcon-cli**. Du kannst es im offiziellen [GitHub-Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach Installation auf deinem Rechner stellst du die Verbindung mit der Server-IP, dem RCON-Port und dem Passwort her.

Den Port findest du in der **Portübersicht** unten auf der Einstellungsseite im Gameserver-Panel. Passwort und Port müssen mit den Werten im Panel oder der Konfigurationsdatei übereinstimmen. Mit folgendem Befehl verbindest du dich und führst direkt einen Befehl aus:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORT> befehl
```

## RCON-Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf deinem Day of Defeat: Source Server ausführen. Die verfügbaren Befehle hängen von der Game-Engine ab, beinhalten aber typischerweise Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                      | Beschreibung                                  |
| --------------------------- | --------------------------------------------- |
| `rcon_password <passwort>`  | Authentifiziert für den RCON-Zugang           |
| `status`                    | Zeigt Server- und Spielerinformationen an     |
| `changelevel <mapname>`     | Wechselt zur angegebenen Map                   |
| `mp_timelimit <min>`        | Setzt das Zeitlimit pro Map                    |
| `mp_roundtime <min>`        | Legt die Rundenzeit fest                       |
| `sv_cheats 0/1`             | Aktiviert/deaktiviert Cheat-Befehle (nur Admin) |
| `kick <spielername>`        | Kickt einen Spieler vom Server                 |
| `banid <dauer> <SteamID>`   | Bannt einen Spieler für eine bestimmte Dauer   |
| `exec <datei.cfg>`          | Führt eine Konfigurationsdatei aus             |
| `say <nachricht>`           | Sendet eine Nachricht an alle Spieler          |

## Fazit

RCON ist ein essentielles Tool für die Fernverwaltung von Day of Defeat: Source Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und schützt den Zugang durch Passwort-Authentifizierung. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite – melde dich einfach! 🙂

<InlineVoucher />