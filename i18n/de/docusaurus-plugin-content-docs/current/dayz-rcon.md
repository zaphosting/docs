---
id: dayz-rcon
title: "DayZ: RCON"
description: "Entdecke, wie du DayZ Gameserver effizient aus der Ferne verwaltest und steuerst – ganz ohne Ingame-Verbindung → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-dayz
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei DayZ wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist passwortgeschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwaltst, ohne als Spieler im Spiel verbunden sein zu müssen**. Server-Admins können DayZ bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – das bietet maximale Flexibilität und Komfort für die Fernverwaltung.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das geht direkt in der Gameserver-Verwaltung. Unter dem Bereich **Einstellungen** findest du die Option **RCON**, die aktiviert werden muss. Setze ein sicheres Passwort.

Den zugewiesenen RCON-Port findest du ganz unten auf der Einstellungsseite in der **Portübersicht**. 



## Verbindung via RCON

Um dich per RCON mit dem DayZ-Server zu verbinden, nutzt du das Tool **BattleWarden**. Du kannst es auf der [offiziellen Webseite](https://www.battlewarden.net) herunterladen. Nach dem Download und der Installation auf deinem PC musst du ein neues Verbindungsprofil anlegen. Folgende Werte werden benötigt:

- Server-IP-Adresse  
- RCON-Port 
- RCON-Passwort

Ist die Verbindung hergestellt, kannst du RCON-Befehle über die grafische Oberfläche ausführen. Das Tool bietet je nach Spielintegration auch Features wie Spielerlisten, Live-Chat und Befehlsverlauf.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCON-Befehle

Nach der Verbindung via RCON kannst du verschiedene administrative und diagnostische Befehle auf dem DayZ-Server ausführen. Die verfügbaren Befehle hängen vom Spiel-Engine ab, umfassen aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                         | Beschreibung                                          |
|----------------------------------|------------------------------------------------------|
| `#login <password>`             | Meldet dich als RCON-Admin an                         |
| `#logout`                       | Beendet die Admin-Sitzung                             |
| `#kick <playerName>`            | Kickt einen Spieler vom Server                        |
| `#ban <playerName>`             | Bannt einen Spieler dauerhaft                         |
| `#exec ban <playerID>`          | Bannt einen Spieler via Steam64ID (BattlEye)         |
| `#exec unban <playerID>`        | Hebt einen Bann für einen Spieler auf                 |
| `#shutdown`                     | Fährt den Server herunter                             |
| `#monitor <seconds>`            | Zeigt Performance-Daten alle x Sekunden               |
| `#lock`                         | Sperrt den Server für neue Verbindungen               |
| `#unlock`                       | Entsperrt den Server wieder                           |




## Abschluss

RCON ist ein essentielles Tool für die Fernverwaltung von DayZ Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und schützt den Zugang durch Passwort-Authentifizierung. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />