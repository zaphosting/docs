---
id: projectzomboid-rcon
title: "Project Zomboid: RCON"
description: "Entdecke, wie du Project Zomboid Gameserver sicher aus der Ferne verwaltest und steuerst – ganz ohne Ingame-Zugang → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-projectzomboid
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es erlaubt den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei Project Zomboid wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist durch ein Passwort geschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwalten kannst, ohne als Spieler im Spiel verbunden zu sein**. Server-Admins können Project Zomboid bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – perfekt für flexibles und komfortables Remote-Management.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das machst du, indem du die Konfigurationsdatei unter **Configs** im Gameserver Control Panel bearbeitest. In der Datei `servertest.ini` müssen folgende Einträge hinzugefügt oder angepasst werden:

```cfg
RCONPort=XXXXX
RCONPassword=dein-passwort-hier
```
Den zugewiesenen RCON-Port findest du unten auf der Einstellungsseite in der Port-Übersicht, dieser muss dort auch angegeben werden.



## Verbindung via RCON

Um dich per RCON mit dem Project Zomboid Gameserver zu verbinden, nutzt du das Kommandozeilen-Tool **rcon-cli**. Du kannst es im offiziellen [GitHub Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach dem Download und der Installation auf deinem Rechner kannst du die Verbindung mit der Server-IP, dem RCON-Port und dem RCON-Passwort herstellen.

Den zugewiesenen Port findest du in der **Port-Übersicht** ganz unten auf der Einstellungsseite im Gameserver Dashboard. Passwort und Port müssen mit den Werten im Control Panel oder der Konfigurationsdatei übereinstimmen. Mit folgendem Befehl verbindest du dich und führst direkt einen Befehl aus:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf dem Project Zomboid Gameserver ausführen. Die verfügbaren Befehle hängen von der Game-Engine ab, umfassen aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                          | Beschreibung                             |
| -------------------------------- | --------------------------------------- |
| `/grantadmin <username>`         | Vergibt Adminrechte an einen Spieler    |
| `/removeadmin <username>`        | Entzieht einem Spieler Adminrechte      |
| `/save`                          | Speichert die Welt manuell               |
| `/kickuser <username>`           | Kickt einen Spieler vom Server           |
| `/banuser <username>`            | Bannt einen Spieler                      |
| `/unbanuser <username>`          | Entbannt einen Spieler                   |
| `/adduser <username> <password>` | Erstellt einen neuen Nutzer mit Passwort |
| `/godmod <username>`             | Schaltet Godmode für den angegebenen Nutzer an/aus |
| `/teleport <Name1> <Name2>`      | Teleportiert Name1 zu Name2              |
| `/chopper`                       | Simuliert einen Helikopter-Überflug      |



## Fazit

RCON ist ein zentrales Tool für die Remote-Administration von Project Zomboid Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet durch Passwortschutz eine sichere Zugangskontrolle. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />