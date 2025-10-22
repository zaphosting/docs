---
id: palworld-rcon
title: "Palworld: RCON"
description: "Entdecke, wie du Palworld-Server remote verwaltest für flexible Kontrolle und Überwachung ohne ins Spiel zu müssen → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

In Palworld wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist passwortgeschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwalten kannst, ohne als Spieler im Spiel verbunden sein zu müssen**. Server-Admins können Palworld bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – super flexibel und praktisch für die Fernbedienung.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das machst du, indem du die Konfigurationsdatei unter **Configs** im Gameserver-Management-Panel bearbeitest. In der Datei `PalWorldSettings.ini` müssen folgende Einträge hinzugefügt oder angepasst werden:

```cfg
RCONEnabled=True,
RCONPort=XXXXX,
AdminPassword="dein-passwort-hier"
```
Den zugewiesenen RCON-Port findest du unten auf der Einstellungsseite in der Port-Übersicht, dieser muss dort eingetragen werden.



## Verbindung via RCON

Um dich per RCON mit dem Palworld-Server zu verbinden, nutzt du das Kommandozeilen-Tool **rcon-cli**. Du kannst es im offiziellen [GitHub-Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach dem Download und der Installation auf deinem Rechner stellst du die Verbindung mit der Server-IP, dem RCON-Port und dem RCON-Passwort her.

Den zugewiesenen Port findest du in der **Port-Übersicht** ganz unten auf der Einstellungsseite im Gameserver-Panel. Passwort und Port müssen mit den Werten aus dem Panel oder der Konfigurationsdatei übereinstimmen. Mit folgendem Befehl verbindest du dich und führst direkt einen Befehl aus:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON-Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf dem Palworld-Server ausführen. Die verfügbaren Befehle hängen von der Game-Engine ab, beinhalten aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                                   | Beschreibung                                               |
|-----------------------------------------|------------------------------------------------------------|
| `/Shutdown <Sekunden> <Nachricht>`      | Fährt den Server nach Countdown mit Nachricht herunter     |
| `/DoExit`                               | Stoppt den Server sofort                                   |
| `/Broadcast <Nachricht>`                 | Sendet eine Nachricht an alle verbundenen Spieler          |
| `/KickPlayer <SteamID>`                  | Kickt einen Spieler per SteamID                            |
| `/BanPlayer <SteamID>`                   | Bannt einen Spieler dauerhaft                              |
| `/TeleportToPlayer <SteamID>`            | Teleportiert dich zum angegebenen Spieler                   |
| `/TeleportToMe <SteamID>`                | Teleportiert den angegebenen Spieler zu dir                 |
| `/ShowPlayers`                          | Listet alle aktuell verbundenen Spieler auf                |
| `/Info`                                 | Zeigt grundlegende Serverinformationen                     |
| `/Save`                                 | Speichert die Welt manuell                                 |



## Fazit

RCON ist ein zentrales Tool für die Fernverwaltung von Palworld-Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet durch Passwortschutz eine sichere Zugangskontrolle. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei weiteren Fragen oder Support brauchst du nur unser Team zu kontaktieren – wir sind täglich für dich da! 🙂

<InlineVoucher />