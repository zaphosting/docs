---
id: vrising-rcon
title: "V Rising: RCON"
description: "Erfahre, wie du RCON für V Rising verwendest – ZAP-Hosting Dokumentation"
sidebar_label: RCON
services:
  - gameserver-vrising
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll zur Fernsteuerung von Gameservern. Es ermöglicht den Zugriff auf die Serverkonsole, ohne dass du direkt auf die Serverumgebung zugreifen musst. Dadurch kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder den Serverstatus abfragen.

In V Rising wird RCON verwendet, um serverseitige Befehle auszuführen, zum Beispiel zur Verwaltung von Spielern, zur Änderung von Spieleinstellungen oder zum Abrufen von Diagnosedaten. Die Verbindung ist durch ein Passwort geschützt und erfolgt über einen definierten Port, der über kompatible RCON-Clients erreichbar ist.

Ein wesentlicher Vorteil von RCON ist, dass du den Server verwalten kannst, **ohne selbst im Spiel verbunden zu sein**. Administratoren können V Rising über externe Tools, Kommandozeilen-Interfaces oder Web-Dashboards überwachen und steuern, flexibel und ortsunabhängig.

<InlineVoucher />



## Konfiguration

Bevor RCON verwendet werden kann, muss es aktiviert und konfiguriert werden. Dies erfolgt über die Konfigurationsdatei, die du in der Gameserververwaltung unter **Configs** findest. In der Datei `ServerHostSettings.json` müssen folgende Einträge ergänzt oder angepasst werden:

```cfg
  "Rcon": {
    "Enabled": false,
    "Port": XXXXX,
    "Password": "define-your-password"
  },
```

Der zugewiesene RCON-Port ist ebenfalls in der **Portübersicht** unten auf der Einstellungsseite zu finden und muss dort eingetragen sein.



## Verbindung per RCON

Um dich per RCON mit dem V Rising Server zu verbinden, wird das Kommandozeilentool **rcon-cli** verwendet. Du kannst es aus dem offiziellen [GitHub-Repository](https://github.com/gorcon/rcon-cli) herunterladen. Nach dem Download und der lokalen Installation kann die Verbindung mit der IP-Adresse des Servers, dem RCON-Port und dem RCON-Passwort hergestellt werden.

Den zugewiesenen Port findest du in der **Portübersicht** unten auf der Einstellungsseite in der Gameserververwaltung. Passwort und Port müssen mit den Werten übereinstimmen, die im Panel oder in der Konfigurationsdatei eingetragen sind. Verwende folgenden Befehl, um dich zu verbinden und direkt einen Befehl auszuführen:

```
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON-Befehle

Sobald die Verbindung über RCON besteht, können verschiedene administrative und diagnostische Befehle auf dem V Rising Server ausgeführt werden. Die verfügbaren Befehle hängen von der Game-Engine ab, beinhalten aber typischerweise Aktionen zur Spielersteuerung, Statusabfragen und Serverkontrolle.

| Befehl                          | Beschreibung                                        |
| ------------------------------- | --------------------------------------------------- |
| `adminauth`                     | Aktiviert Adminrechte für dich (Ingame-Chat-Befehl) |
| `admindeauth`                   | Deaktiviert deine Adminrechte                       |
| `banuser <SteamID>`             | Bannt einen Spieler dauerhaft                       |
| `unbanuser <SteamID>`           | Hebt einen Bann auf                                 |
| `kick <Spielername>`            | Kickt einen Spieler sofort vom Server               |
| `give <ItemName> <Anzahl>`      | Gibt dir Items direkt ins Inventar                  |
| `teleport <X> <Y>`              | Teleportiert deinen Charakter zu Koordinaten        |
| `teleportplayer <Name> <X> <Y>` | Teleportiert einen Spieler an bestimmte Koordinaten |
| `changehealth <Wert>`           | Ändert Lebenspunkte deines Charakters               |
| `spawn <EntityName> <Anzahl>`   | Spawnt eine Kreatur oder Einheit                    |



## Abschluss

RCON ist ein zentrales Werkzeug für die Fernadministration von V Rising Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet gleichzeitig Zugriffsschutz durch Passwortauthentifizierung. Eine korrekte und sichere Konfiguration ist entscheidend, um die Stabilität des Servers zu gewährleisten und unbefugten Zugriff zu verhindern.

Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
