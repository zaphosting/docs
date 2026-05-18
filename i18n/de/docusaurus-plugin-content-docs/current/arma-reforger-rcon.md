---
id: arma-reforger-rcon
title: "Arma Reforger: RCON"
description: "Entdecke, wie du Arma Reforger Gameserver sicher aus der Ferne verwaltest und kontrollierst für flexible Administration und Überwachung → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-arma-reforger
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

In Arma Reforger wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist passwortgeschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwaltest, ohne als Spieler im Spiel verbunden sein zu müssen**. Server-Admins können Arma Reforger bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – super flexibel und praktisch für den Remote-Betrieb.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das machst du, indem du die Konfigurationsdatei unter **Configs** im Gameserver Control Panel bearbeitest. In der Datei `BEServer_x64.cfg` müssen folgende Einträge hinzugefügt oder angepasst werden:

```cfg
RConPort XXXXX
RConPassword define-your-password
```
Den zugewiesenen RCON-Port findest du unten auf der Einstellungsseite in der Port-Übersicht und musst ihn dort eintragen.



## Verbindung via RCON

Um dich per RCON mit dem Arma Reforger Server zu verbinden, nutzt du das Tool **BattleWarden**. Das kannst du auf der [offiziellen Webseite](https://www.battlewarden.net) herunterladen. Nach dem Download und der Installation auf deinem PC legst du ein neues Verbindungsprofil an. Folgende Werte brauchst du:

- Server IP-Adresse  
- RCON Port 
- RCON Passwort

Ist die Verbindung hergestellt, kannst du RCON-Befehle über die grafische Oberfläche ausführen. Das Tool bietet je nach Spielintegration auch Features wie Spielerlisten, Live-Chat und Befehlsverlauf.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCON Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf dem Arma Reforger Server ausführen. Die verfügbaren Befehle hängen von der Engine ab, umfassen aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                         | Beschreibung                                        |
|----------------------------------|----------------------------------------------------|
| `#login <password>`             | Als Server-Admin einloggen                          |
| `#logout`                       | Admin-Status beenden                                |
| `#mission <missionName>`       | Startet eine neue Mission auf dem Server           |
| `#missions`                    | Listet verfügbare Missionen zum Auswählen auf      |
| `#restart`                     | Startet die aktuelle Mission neu                    |
| `#reassign`                    | Versetzt alle Spieler zurück zur Rollenvergabe     |
| `#kick <playerID>`             | Kickt einen Spieler                                 |
| `#exec ban <playerID>`         | Bannt einen Spieler                                 |
| `#exec unban <playerID>`       | Entbannt einen Spieler                              |
| `#shutdown`                    | Fährt den Server herunter                           |



## Abschluss

RCON ist ein zentrales Tool für die Remote-Administration von Arma Reforger Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet durch Passwortschutz eine sichere Zugangskontrolle. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder Support brauchst du nur unser Team zu kontaktieren – wir sind täglich für dich da! 🙂

<InlineVoucher />