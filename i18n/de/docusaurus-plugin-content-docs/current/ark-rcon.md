---
id: ark-rcon
title: "ARK: Survival Evolved: RCON"
description: "Erfahre, wie du RCON für ARK: Survival Evolved verwendest – ZAP-Hosting Dokumentation"
sidebar_label: RCON
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll zur Fernsteuerung von Gameservern. Es ermöglicht den Zugriff auf die Serverkonsole, ohne dass du direkt auf die Serverumgebung zugreifen musst. Dadurch kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder den Serverstatus abfragen.

In ARK: Survival Evolved wird RCON verwendet, um serverseitige Befehle auszuführen, zum Beispiel zur Verwaltung von Spielern, zur Änderung von Spieleinstellungen oder zum Abrufen von Diagnosedaten. Die Verbindung ist durch ein Passwort geschützt und erfolgt über einen definierten Port, der über kompatible RCON-Clients erreichbar ist.

Ein wesentlicher Vorteil von RCON ist, dass du den Server verwalten kannst, **ohne selbst im Spiel verbunden zu sein**. Administratoren können ARK: Survival Evolved über externe Tools, Kommandozeilen-Interfaces oder Web-Dashboards überwachen und steuern, flexibel und ortsunabhängig.

<InlineVoucher />



## Konfiguration

Bevor RCON verwendet werden kann, muss es aktiviert und konfiguriert werden. Dies erfolgt über die Konfigurationsdatei, die du in der Gameserververwaltung unter **Configs** findest. In der Datei `xy.cfg` müssen folgende Einträge ergänzt oder angepasst werden:

```cfg
[ServerSettings]
RCONEnabled=True
ServerAdminPassword=define-your-password
```

Der zugewiesene RCON-Port ist ebenfalls in der **Portübersicht** unten auf der Einstellungsseite zu finden und muss dort eingetragen sein.



## Verbindung per RCON

Um dich per RCON mit dem ARK: Survival Evolved Server zu verbinden, wird das Tool **ARKon** verwendet. Es ist über diesen [Steam-Thread](https://steamcommunity.com/app/346110/discussions/2/3417684283223117680/) erhältlich. Nach der Installation auf deinem Computer muss ein neuer Servereintrag mit folgenden Informationen erstellt werden:

- IP-Adresse des Servers
- RCON-Port
- RCON-Passwort

Nach dem Speichern des Profils kann der Server aus der Liste ausgewählt und verbunden werden. Sobald die Verbindung steht, lassen sich RCON-Befehle über die grafische Oberfläche ausführen. ARKon bietet zudem spezielle Zusatzfunktionen für ARK: Survival Evolved, wie:

- Echtzeit-Spielerliste und Online-Status
- Überwachung und Interaktion mit dem Ingame-Chat
- Schnellzugriff auf häufige Admin-Befehle
- Protokollierung der RCON-Ausgabe und Befehlshistorie



## RCON-Befehle

Sobald die Verbindung über RCON besteht, können verschiedene administrative und diagnostische Befehle auf dem ARK: Survival Evolved Server ausgeführt werden. Die verfügbaren Befehle hängen von der Game-Engine ab, beinhalten aber typischerweise Aktionen zur Spielersteuerung, Statusabfragen und Serverkontrolle.

| Befehl                           | Beschreibung                                         |
|----------------------------------|-----------------------------------------------------|
| `EnableCheats <Passwort>`        | Aktiviert Admin-Rechte auf dem Server (Adminmodus) |
| `AdminCheat KickPlayer <Steam64ID>` | Kickt einen Spieler                          |
| `AdminCheat BanPlayer <Steam64ID>`  | Bannt einen Spieler                            |
| `AdminCheat UnbanPlayer <SpielerName>` | Hebt Bann auf                             |
| `AdminCheat Broadcast <Nachricht>` | Sendet Nachricht an alle Spieler                  |
| `AdminCheat SaveWorld`           | Speichert die Spielwelt                            |
| `AdminCheat SetTimeOfDay <hh:mm>`| Setzt die Ingame‑Zeit                              |
| `AdminCheat TeleportPlayerIDToMe <SpielerID>` | Teleportiert Spieler zu dir           |
| `cheat Slomo <Faktor>`           | Ändert Spielgeschwindigkeit                        |
| `AdminCheat GiveItemNum <ItemID> <Menge> <Qual> 0` | Spawnt Items für dich                |




## Abschluss

RCON ist ein zentrales Werkzeug für die Fernadministration von ARK: Survival Evolved Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet gleichzeitig Zugriffsschutz durch Passwortauthentifizierung. Eine korrekte und sichere Konfiguration ist entscheidend, um die Stabilität des Servers zu gewährleisten und unbefugten Zugriff zu verhindern.

Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂