---
id: avorion-rcon
title: "Avorion: RCON"
description: "Entdecke, wie du Avorion-Gameserver per RCON flexibel und sicher fernsteuerst – ganz ohne ins Spiel zu müssen → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-avorion
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es erlaubt den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei Avorion wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist passwortgeschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwalten kannst, ohne als Spieler im Spiel verbunden zu sein**. Server-Admins können Avorion bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – super flexibel und praktisch für die Fernverwaltung.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das geht direkt in der Gameserver-Verwaltung. Im Bereich **Einstellungen** findest du die Option **RCON**, die aktiviert werden muss. Setze hier ein sicheres Passwort.

Den zugewiesenen RCON-Port findest du ganz unten auf der Einstellungsseite unter **Portübersicht**. 



## Verbindung via RCON

Um dich per RCON mit dem Avorion-Server zu verbinden, nutzt du das Kommandozeilen-Tool **rcon-cli**. Du kannst es im offiziellen [GitHub-Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach dem Download und der Installation auf deinem Rechner stellst du die Verbindung mit der IP-Adresse des Servers, dem RCON-Port und dem RCON-Passwort her.

Den zugewiesenen Port findest du in der **Portübersicht** ganz unten auf der Einstellungsseite in der Gameserver-Verwaltung. Passwort und Port müssen mit den Werten im Control Panel oder der Konfigurationsdatei übereinstimmen. Mit folgendem Befehl verbindest du dich und führst direkt einen Befehl aus:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON-Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf dem Avorion-Server ausführen. Die verfügbaren Befehle hängen von der Spiel-Engine ab, umfassen aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                                     | Beschreibung                                               |
|--------------------------------------------|------------------------------------------------------------|
| `/save`                                     | Speichert die aktuelle Spielwelt                           |
| `/status`                                   | Zeigt Server- und Spielerstatus an                         |
| `/kick <playername>`                        | Wirft einen Spieler vom Server                             |
| `/ban <playername>`                         | Sperrt einen Spieler vom Server                            |
| `/unban <playername>`                       | Hebt eine Spielersperre auf                               |
| `/teleport <x> <y>`                         | Teleportiert den Spieler zu den angegebenen Sektorkoordinaten |
| `/tpto <playername>`                        | Teleportiert dich zu einem anderen Spieler                 |
| `/sethome`                                  | Setzt den aktuellen Sektor als Heimat                      |
| `/home`                                     | Teleportiert dich zu deinem Heimatsektor                   |
| `/give <itemName> <amount>`                 | Gibt dir Items oder Ressourcen                              |




## Fazit

RCON ist ein zentrales Tool für die Fernverwaltung von Avorion-Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet durch Passwortschutz eine sichere Zugangskontrolle. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />