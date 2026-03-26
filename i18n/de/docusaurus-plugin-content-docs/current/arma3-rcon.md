---
id: arma3-rcon
title: "Arma 3: RCON"
description: "Entdecke, wie du Arma 3 Gameserver sicher aus der Ferne verwaltest und steuerst, ohne dich ins Spiel einzuloggen → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-arma3
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

In Arma 3 wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist durch ein Passwort geschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwalten kannst, ohne als Spieler im Spiel verbunden sein zu müssen**. Server-Admins können Arma 3 bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – super flexibel und praktisch für die Fernbedienung.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das geht direkt in der Gameserver-Verwaltung. Im Bereich **Einstellungen** findest du die Option **RCON**, die aktiviert werden muss. Setze hier ein sicheres Passwort.

Den zugewiesenen RCON-Port findest du ganz unten auf der Einstellungsseite in der **Portübersicht**. 



## Verbindung via RCON

Um dich per RCON mit deinem Arma 3 Gameserver zu verbinden, nutzt du das Tool **BattleWarden**. Das kannst du auf der [offiziellen Webseite](https://www.battlewarden.net) herunterladen. Nach dem Download und der Installation auf deinem Rechner legst du ein neues Verbindungsprofil an. Folgende Werte brauchst du:

- Server IP-Adresse  
- RCON-Port 
- RCON-Passwort

Ist die Verbindung hergestellt, kannst du RCON-Befehle über die grafische Oberfläche ausführen. Das Tool bietet je nach Spielintegration auch Features wie Spielerlisten, Live-Chat und Befehlsverlauf.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCON-Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf deinem Arma 3 Gameserver ausführen. Die verfügbaren Befehle hängen vom Spiel-Engine ab, umfassen aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                         | Beschreibung                                        |
|--------------------------------|----------------------------------------------------|
| `#login <password>`             | Als Server-Admin einloggen                          |
| `#logout`                      | Admin-Status beenden                                |
| `#mission <missionName>`       | Startet eine neue Mission auf dem Server           |
| `#missions`                   | Listet verfügbare Missionen zur Auswahl auf        |
| `#restart`                    | Startet die aktuelle Mission neu                    |
| `#reassign`                   | Versetzt alle Spieler zurück in ihre Rollen        |
| `#kick <playerID>`            | Kickt einen Spieler                                 |
| `#exec ban <playerID>`        | Bannt einen Spieler                                 |
| `#exec unban <playerID>`      | Entbannt einen Spieler                              |
| `#shutdown`                   | Fährt den Server herunter                           |



## Abschluss

RCON ist ein zentrales Tool für die Fernverwaltung von Arma 3 Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet durch Passwortschutz eine sichere Zugangskontrolle. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />