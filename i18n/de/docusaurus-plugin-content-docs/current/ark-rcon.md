---
id: ark-rcon
title: "ARK: Survival Evolved: RCON"
description: "Entdecke, wie du ARK: Survival Evolved Gameserver sicher aus der Ferne verwaltest und steuerst, ohne dich ins Spiel einzuloggen → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es erlaubt den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei ARK: Survival Evolved wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist durch ein Passwort geschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwalten kannst, ohne als Spieler im Spiel verbunden zu sein**. Server-Admins können ARK: Survival Evolved bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – super flexibel und praktisch für die Fernverwaltung.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das machst du, indem du die Konfigurationsdatei im Bereich **Configs** im Gameserver-Management-Panel bearbeitest. In der Datei `GameUserSettings.ini` müssen folgende Einträge hinzugefügt oder angepasst werden:

```cfg
[ServerSettings]
RCONEnabled=True
ServerAdminPassword=dein-passwort-definieren
```
Den zugewiesenen RCON-Port findest du unten auf der Einstellungsseite in der Port-Übersicht, dieser muss dort angegeben werden.



## Verbindung via RCON

Um dich per RCON mit deinem ARK: Survival Evolved Gameserver zu verbinden, nutzt du das Tool **ARKon**. Du kannst es hier im [Steam Thread](https://steamcommunity.com/app/346110/discussions/2/3417684283223117680/) herunterladen. Nach dem Download und der Installation auf deinem PC legst du einen neuen Servereintrag mit diesen Infos an:

- Server-IP-Adresse  
- RCON-Port  
- RCON-Passwort  

Nach dem Speichern des Verbindungsprofils kannst du den Server aus der Liste auswählen und die Verbindung herstellen. Sobald verbunden, kannst du RCON-Befehle über die grafische Oberfläche ausführen. ARKon bietet außerdem coole Features speziell für ARK: Survival Evolved, wie:

- Echtzeit-Spielerliste und Online-Status  
- Ingame-Chat-Überwachung und Interaktion  
- Schnellzugriff-Buttons für gängige Admin-Befehle  
- Protokollierung der RCON-Ausgaben und Befehls-Historie



## RCON-Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf deinem ARK: Survival Evolved Gameserver ausführen. Die verfügbaren Befehle hängen von der Game-Engine ab, beinhalten aber typischerweise Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                            | Beschreibung                                           |
|----------------------------------|--------------------------------------------------------|
| `EnableCheats <password>`         | Aktiviert den Admin-Modus auf dem Server (Admin-Befehle) |
| `AdminCheat KickPlayer <Steam64ID>` | Kickt einen Spieler                                  |
| `AdminCheat BanPlayer <Steam64ID>`  | Bannt einen Spieler                                   |
| `AdminCheat UnbanPlayer <playerName>` | Entbannt einen Spieler                               |
| `AdminCheat Broadcast <message>`   | Sendet eine Broadcast-Nachricht an alle Spieler       |
| `AdminCheat SaveWorld`            | Speichert den aktuellen Weltstatus                     |
| `AdminCheat SetTimeOfDay <hh:mm>` | Setzt die Ingame-Zeit                                  |
| `AdminCheat TeleportPlayerIDToMe <playerID>` | Teleportiert einen Spieler zu dir                  |
| `cheat Slomo <factor>`            | Passt die Spielgeschwindigkeit an                      |
| `AdminCheat GiveItemNum <ItemID> <quantity> <quality> 0` | Spawnt Items in dein Inventar               |




## Fazit

RCON ist ein essentielles Tool für die Fernverwaltung von ARK: Survival Evolved Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und schützt den Zugang durch Passwort-Authentifizierung. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />