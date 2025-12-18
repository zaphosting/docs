---
id: factorio-rcon
title: "Factorio: RCON"
description: "Entdecke, wie du deinen Factorio Gameserver remote verwaltest und steuerst für effiziente Administration und Gameplay-Anpassungen → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei Factorio wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist durch ein Passwort geschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwaltst, ohne als Spieler im Spiel verbunden sein zu müssen**. Serveradmins können Factorio so bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – perfekt für flexibles Remote-Management.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das geht direkt in der Gameserver-Verwaltung. Im Bereich **Einstellungen** findest du die Option **RCON**, die aktiviert werden muss. Setze außerdem ein sicheres Passwort.

Den zugewiesenen RCON-Port findest du unten auf der Einstellungsseite in der **Portübersicht**. 



## Verbindung via RCON

Um dich per RCON mit deinem Factorio Gameserver zu verbinden, nutzt du das Kommandozeilen-Tool **rcon-cli**. Du kannst es im offiziellen [GitHub-Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach dem Download und der Installation auf deinem Rechner stellst du die Verbindung mit der IP-Adresse des Servers, dem RCON-Port und dem RCON-Passwort her.

Den zugewiesenen Port findest du in der **Portübersicht** unten auf der Einstellungsseite in der Gameserver-Verwaltung. Passwort und Port müssen mit den Werten im Control Panel oder der Konfigurationsdatei übereinstimmen. Mit folgendem Befehl verbindest du dich und führst direkt einen Befehl aus:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON-Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf dem Factorio Gameserver ausführen. Die verfügbaren Befehle hängen von der Spiel-Engine ab, umfassen aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                          | Beschreibung                                            |
|--------------------------------|---------------------------------------------------------|
| `/help`                        | Zeigt alle verfügbaren Befehle an                       |
| `/players`                     | Listet alle verbundenen Spieler auf                     |
| `/kick <player>`               | Wirft einen Spieler vom Server                           |
| `/ban <player>`                | Sperrt einen Spieler dauerhaft                           |
| `/unban <player>`              | Hebt die Sperre eines Spielers auf                       |
| `/admins`                      | Zeigt die Liste der Server-Admins                        |
| `/promote <player>`            | Vergibt Admin-Rechte an einen Spieler                    |
| `/demote <player>`             | Entzieht einem Spieler die Admin-Rechte                  |
| `/save`                        | Speichert den aktuellen Weltzustand                      |
| `/server-save`                 | Löst einen manuellen Server-Save aus                      |



## Fazit

RCON ist ein essentielles Tool für die Remote-Administration von Factorio Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet durch Passwortschutz eine sichere Zugriffskontrolle. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />