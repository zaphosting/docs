---
id: avorion-rcon
title: "Avorion: RCON"
description: "Erfahre, wie du RCON für Avorion verwendest – ZAP-Hosting Dokumentation"
sidebar_label: RCON
services:
  - gameserver-avorion
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll zur Fernsteuerung von Gameservern. Es ermöglicht den Zugriff auf die Serverkonsole, ohne dass du direkt auf die Serverumgebung zugreifen musst. Dadurch kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder den Serverstatus abfragen.

In Avorion wird RCON verwendet, um serverseitige Befehle auszuführen, zum Beispiel zur Verwaltung von Spielern, zur Änderung von Spieleinstellungen oder zum Abrufen von Diagnosedaten. Die Verbindung ist durch ein Passwort geschützt und erfolgt über einen definierten Port, der über kompatible RCON-Clients erreichbar ist.

Ein wesentlicher Vorteil von RCON ist, dass du den Server verwalten kannst, **ohne selbst im Spiel verbunden zu sein**. Administratoren können Avorion über externe Tools, Kommandozeilen-Interfaces oder Web-Dashboards überwachen und steuern, flexibel und ortsunabhängig.

<InlineVoucher />



## Konfiguration

Bevor RCON verwendet werden kann, muss es aktiviert und konfiguriert werden. Dies kann direkt in der Gameserververwaltung unter dem Reiter **Einstellungen** erfolgen. Dort findest du eine Option namens **RCON**, die aktiviert werden muss. Zusätzlich solltest du ein sicheres Passwort festlegen.

Der zugewiesene RCON-Port ist unten auf der Einstellungsseite im Bereich **Portübersicht** zu finden.



## Verbindung per RCON

Um dich per RCON mit dem Avorion Server zu verbinden, wird das Kommandozeilentool **rcon-cli** verwendet. Du kannst es aus dem offiziellen [GitHub-Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach dem Download und der lokalen Installation kann die Verbindung mit der IP-Adresse des Servers, dem RCON-Port und dem RCON-Passwort hergestellt werden.

Den zugewiesenen Port findest du in der **Portübersicht** unten auf der Einstellungsseite in der Gameserververwaltung. Passwort und Port müssen mit den Werten übereinstimmen, die im Panel oder in der Konfigurationsdatei eingetragen sind. Verwende folgenden Befehl, um dich zu verbinden und direkt einen Befehl auszuführen:

```
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON-Befehle

Sobald die Verbindung über RCON besteht, können verschiedene administrative und diagnostische Befehle auf dem Avorion Server ausgeführt werden. Die verfügbaren Befehle hängen von der Game-Engine ab, beinhalten aber typischerweise Aktionen zur Spielersteuerung, Statusabfragen und Serverkontrolle.

| Befehl                                     | Beschreibung                                                |
|--------------------------------------------|-------------------------------------------------------------|
| `/save`                                     | Speichert die aktuelle Spielwelt                            |
| `/status`                                   | Zeigt Server- und Spielerstatus an                          |
| `/kick <Spielername>`                       | Kickt einen Spieler vom Server                              |
| `/ban <Spielername>`                        | Bannt einen Spieler vom Server                              |
| `/unban <Spielername>`                      | Entfernt einen Bann                                          |
| `/teleport <x> <y>`                         | Teleportiert den Spieler zu Koordinaten                     |
| `/tpto <Spielername>`                       | Teleportiert dich zu einem anderen Spieler                  |
| `/sethome`                                  | Setzt aktuellen Ort als Heimat                              |
| `/home`                                     | Teleportiert dich zu deinem Heimatsektor                    |
| `/give <ItemName> <Menge>`                  | Gibt dir Items oder Ressourcen                              |



## Abschluss

RCON ist ein zentrales Werkzeug für die Fernadministration von Avorion Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet gleichzeitig Zugriffsschutz durch Passwortauthentifizierung. Eine korrekte und sichere Konfiguration ist entscheidend, um die Stabilität des Servers zu gewährleisten und unbefugten Zugriff zu verhindern.

Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
