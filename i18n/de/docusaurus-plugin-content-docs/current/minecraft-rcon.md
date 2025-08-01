---
id: minecraft-rcon
title: "Minecraft: RCON"
description: "Erfahre, wie du RCON für Minecraft verwendest – ZAP-Hosting Dokumentation"
sidebar_label: RCON
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll zur Fernsteuerung von Gameservern. Es ermöglicht den Zugriff auf die Serverkonsole, ohne dass du direkt auf die Serverumgebung zugreifen musst. Dadurch kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder den Serverstatus abfragen.

In Minecraft wird RCON verwendet, um serverseitige Befehle auszuführen, zum Beispiel zur Verwaltung von Spielern, zur Änderung von Spieleinstellungen oder zum Abrufen von Diagnosedaten. Die Verbindung ist durch ein Passwort geschützt und erfolgt über einen definierten Port, der über kompatible RCON-Clients erreichbar ist.

Ein wesentlicher Vorteil von RCON ist, dass du den Server verwalten kannst, **ohne selbst im Spiel verbunden zu sein**. Administratoren können Minecraft über externe Tools, Kommandozeilen-Interfaces oder Web-Dashboards überwachen und steuern, flexibel und ortsunabhängig.

<InlineVoucher />



## Konfiguration

Bevor RCON verwendet werden kann, muss es aktiviert und konfiguriert werden. Dies kann direkt in der Gameserververwaltung unter dem Reiter **Einstellungen** erfolgen. Dort findest du eine Option namens **RCON**, die aktiviert werden muss. Zusätzlich solltest du ein sicheres Passwort festlegen und einen gültigen Port definieren. Dies erfolgt über die Konfigurationsdatei, die du in der Gameserververwaltung unter **Configs** findest. In der Datei `server.properties` müssen folgende Einträge ergänzt oder angepasst werden:

```cfg
enable-rcon=true
rcon.port=<XXXXX>
rcon.password=<define-your-password>
```

Der zugewiesene RCON-Port ist ebenfalls in der **Portübersicht** unten auf der Einstellungsseite zu finden und muss dort eingetragen sein.



## Verbindung per RCON

Um dich per RCON mit dem Minecraft Server zu verbinden, wird das Kommandozeilentool **rcon-cli** verwendet. Du kannst es aus dem offiziellen [GitHub-Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach dem Download und der lokalen Installation kann die Verbindung mit der IP-Adresse des Servers, dem RCON-Port und dem RCON-Passwort hergestellt werden.

Den zugewiesenen Port findest du in der **Portübersicht** unten auf der Einstellungsseite in der Gameserververwaltung. Passwort und Port müssen mit den Werten übereinstimmen, die im Panel oder in der Konfigurationsdatei eingetragen sind. Verwende folgenden Befehl, um dich zu verbinden und direkt einen Befehl auszuführen:

```
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON-Befehle

Sobald die Verbindung über RCON besteht, können verschiedene administrative und diagnostische Befehle auf dem Minecraft Server ausgeführt werden. Die verfügbaren Befehle hängen von der Game-Engine ab, beinhalten aber typischerweise Aktionen zur Spielersteuerung, Statusabfragen und Serverkontrolle.

# Deutsch
| Befehl         | Beschreibung                       |
|----------------------|-----------------------------------------------|
| `list`               | Zeigt verbundene Spieler                      |
| `say <Nachricht>`    | Sendet eine Chatnachricht an alle Spieler     |
| `kick <Spieler>`     | Spieler kicken                                |
| `ban <Spieler>`      | Spieler bannen                                |
| `pardon <Spieler>`   | Spieler vom Bann befreien                     |
| `op <Spieler>`       | Spieler Operatorrechte vergeben               |
| `deop <Spieler>`     | Operatorrechte entziehen                      |
| `time set <Wert>`    | Weltzeit ändern (z. B. day, night, number)    |
| `gamemode <Modus> <Spieler>` | Spielmodus festlegen               |
| `weather <clear/rain/thunder>` | Wetter ändern                |
| `stop`               | Server sauber beenden                         |




## Abschluss

RCON ist ein zentrales Werkzeug für die Fernadministration von Minecraft Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet gleichzeitig Zugriffsschutz durch Passwortauthentifizierung. Eine korrekte und sichere Konfiguration ist entscheidend, um die Stabilität des Servers zu gewährleisten und unbefugten Zugriff zu verhindern.

Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂