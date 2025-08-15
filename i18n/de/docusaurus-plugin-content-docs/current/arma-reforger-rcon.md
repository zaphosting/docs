---
id: arma-reforger-rcon
title: "Arma Reforger: RCON"
description: "Erfahre, wie du RCON für Arma Reforger verwendest – ZAP-Hosting Dokumentation"
sidebar_label: RCON
services:
  - gameserver-arma-reforger
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll zur Fernsteuerung von Gameservern. Es ermöglicht den Zugriff auf die Serverkonsole, ohne dass du direkt auf die Serverumgebung zugreifen musst. Dadurch kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder den Serverstatus abfragen.

In Arma Reforger wird RCON verwendet, um serverseitige Befehle auszuführen, zum Beispiel zur Verwaltung von Spielern, zur Änderung von Spieleinstellungen oder zum Abrufen von Diagnosedaten. Die Verbindung ist durch ein Passwort geschützt und erfolgt über einen definierten Port, der über kompatible RCON-Clients erreichbar ist.

Ein wesentlicher Vorteil von RCON ist, dass du den Server verwalten kannst, **ohne selbst im Spiel verbunden zu sein**. Administratoren können Arma Reforger über externe Tools, Kommandozeilen-Interfaces oder Web-Dashboards überwachen und steuern, flexibel und ortsunabhängig.

<InlineVoucher />



## Konfiguration

Bevor RCON verwendet werden kann, muss es aktiviert und konfiguriert werden. Dies erfolgt über die Konfigurationsdatei, die du in der Gameserververwaltung unter **Configs** findest. In der Datei `BEServer_x64.cfg` müssen folgende Einträge ergänzt oder angepasst werden:

```cfg
RConPort XXXXX
RConPassword define-your-password
```

Der zugewiesene RCON-Port ist ebenfalls in der **Portübersicht** unten auf der Einstellungsseite zu finden und muss dort eingetragen sein.



## Verbindung per RCON

Um dich per RCON mit dem Arma Reforger Server zu verbinden, wird das Tool **BattleWarden** verwendet. Es kann über die [offizielle Website](https://www.battlewarden.net) heruntergeladen werden. Nach der Installation auf deinem Computer muss ein neues Verbindungsprofil erstellt werden. Folgende Angaben sind erforderlich:

- IP-Adresse des Servers
- RCON-Port
- RCON-Passwort

Sobald die Verbindung steht, können RCON-Befehle über die grafische Oberfläche ausgeführt werden. Das Tool bietet je nach Spiel zusätzliche Funktionen wie Spielerlisten, Live-Chat und Befehlshistorie.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCON-Befehle

Sobald die Verbindung über RCON besteht, können verschiedene administrative und diagnostische Befehle auf dem Arma Reforger Server ausgeführt werden. Die verfügbaren Befehle hängen von der Game-Engine ab, beinhalten aber typischerweise Aktionen zur Spielersteuerung, Statusabfragen und Serverkontrolle.

| Befehl                         | Beschreibung                                       |
|----------------------------------|---------------------------------------------------|
| `#login <Passwort>`             | Als Admin einloggen                               |
| `#logout`                       | Adminstatus verlassen                              |
| `#mission <Missionsname>`      | Neue Mission auf dem Server starten               |
| `#missions`                    | Zeigt verfügbare Missionen zur Auswahl an         |
| `#restart`                     | Startet die aktuelle Mission neu                  |
| `#reassign`                    | Versetzt alle Spieler zurück zur Slotauswahl      |
| `#kick <SpielerID>`            | Kickt einen Spieler                               |
| `#exec ban <SpielerID>`        | Bannt einen Spieler                               |
| `#exec unban <SpielerID>`      | Hebt Bann eines Spielers auf                      |
| `#shutdown`                    | Server herunterfahren                             |




## Abschluss

RCON ist ein zentrales Werkzeug für die Fernadministration von Arma Reforger Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet gleichzeitig Zugriffsschutz durch Passwortauthentifizierung. Eine korrekte und sichere Konfiguration ist entscheidend, um die Stabilität des Servers zu gewährleisten und unbefugten Zugriff zu verhindern.

Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂