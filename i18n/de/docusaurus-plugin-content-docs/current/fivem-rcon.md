---
id: fivem-rcon
title: "FiveM: RCON"
description: "Entdecke, wie du FiveM Gameserver mit RCON remote verwaltest für flexible Serversteuerung und Monitoring → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei FiveM wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist passwortgeschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients erreichbar ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwalten kannst, ohne als Spieler im Spiel verbunden zu sein**. Server-Admins können FiveM bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – super flexibel und praktisch für Remote-Management.

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das machst du im **CFG Editor** Bereich der Gameserver-Verwaltung in **txAdmin**. Achte darauf, dass folgende Zeilen in der Konfiguration hinzugefügt oder angepasst werden:

```cfg
ensure rconlog
set rcon_password "dein-sicheres-passwort"
```



## Verbindung via RCON

Um dich per RCON mit deinem GameXY Server zu verbinden, nutzt du das Windows-Tool **IceCon**. Das kannst du im [GitHub Repository](https://github.com/icedream/icecon) herunterladen. Nach der Installation auf deinem PC legst du eine neue Verbindung mit diesen Infos an:

- **Server IP-Adresse**  
- **Game Port**
- **RCON Passwort**

Ist die Verbindung erfolgreich, bietet IceCon eine grafische Oberfläche, um RCON-Befehle an den FiveM Server zu senden. Du kannst Standard-RCON-Kommandos ausführen und bekommst die Rückmeldungen in Echtzeit direkt im Tool angezeigt.

IceCon hat außerdem coole Features wie:

- Befehlshistorie und Autovervollständigung  
- Server-Log Viewer  
- Eigene Kommando-Buttons  
- Verbindungsprofile für mehrere Server



## RCON Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative und diagnostische Befehle auf dem FiveM Server ausführen. Die verfügbaren Befehle hängen vom Game-Engine ab, beinhalten aber meist Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                    | Beschreibung                                      |
| ------------------------- | ------------------------------------------------ |
| `say <message>`           | Sendet eine Nachricht an alle Spieler im Chat    |
| `start <resource-name>`   | Startet eine bestimmte Server-Ressource          |
| `stop <resource-name>`    | Stoppt eine bestimmte Server-Ressource           |
| `restart <resource-name>` | Startet eine bestimmte Server-Ressource neu      |
| `ensure <resource-name>`  | Startet Ressource nur, wenn sie nicht läuft      |
| `refresh`                 | Lädt alle Ressourcen aus dem Ressourcen-Ordner neu |
| `clear`                   | Löscht die Ausgabe der Serverkonsole             |
| `crash`                   | Erzwingt einen Server-Crash (zum Debuggen)       |
| `quit`                    | Fährt den Server sauber herunter                  |



## Fazit

RCON ist ein essentielles Tool für die Remote-Verwaltung von FiveM Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und schützt den Zugang durch Passwort-Authentifizierung. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder Support brauchst du nur unser Team zu kontaktieren – wir sind täglich für dich da! 🙂

<InlineVoucher />