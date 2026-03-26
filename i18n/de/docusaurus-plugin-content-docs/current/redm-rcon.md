---
id: redm-rcon
title: "RedM: RCON"
description: "Entdecke, wie du RedM Gameserver sicher und effizient aus der Ferne verwaltest, ohne im Spiel zu sein → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht den Zugriff auf die Serverkonsole, ohne direkt mit der Serverumgebung interagieren zu müssen. So kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder Serverstatusinformationen abrufen.

Bei RedM wird RCON genutzt, um serverseitige Befehle auszuführen, wie z.B. Spieler verwalten, Gameplay-Einstellungen ändern oder Diagnoseausgaben abrufen. Die Verbindung ist durch ein Passwort geschützt und läuft über einen festgelegten Port, der über kompatible RCON-Clients zugänglich ist.

Ein großer Vorteil von RCON ist, dass du den Server **verwalten kannst, ohne als Spieler im Spiel verbunden zu sein**. Server-Admins können RedM bequem über externe Tools, Kommandozeilen oder Web-Dashboards überwachen und steuern – perfekt für flexibles und komfortables Remote-Management.

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es aktiviert und konfiguriert werden. Das machst du im **CFG Editor** Bereich der Gameserver-Verwaltung in **txAdmin**. Achte darauf, dass folgende Zeilen in der Konfiguration hinzugefügt oder angepasst werden:

```cfg
ensure rconlog
set rcon_password "dein-sicheres-passwort"
```



## Verbindung via RCON

Um dich per RCON mit deinem RedM Gameserver zu verbinden, nutzt du das Windows-Tool **IceCon**. Das kannst du im [GitHub Repository](https://github.com/icedream/icecon) herunterladen. Nach der Installation auf deinem PC legst du eine neue Verbindung mit diesen Infos an:

- **Server IP-Adresse**  
- **Game Port**
- **RCON Passwort**

Ist die Verbindung erfolgreich, bietet IceCon eine grafische Oberfläche, um RCON-Befehle an den RedM Server zu senden. Du kannst Standard-RCON-Kommandos ausführen und bekommst direkt Feedback in Echtzeit angezeigt.

IceCon hat außerdem coole Features wie:

- Befehlshistorie und Autovervollständigung  
- Server-Log Viewer  
- Eigene Kommando-Buttons  
- Verbindungsprofile für mehrere Server



## RCON Befehle

Nach dem Verbinden per RCON kannst du verschiedene administrative und diagnostische Befehle auf dem RedM Server ausführen. Die verfügbaren Befehle hängen vom Game-Engine ab, umfassen aber meist Aktionen zur Spielerverwaltung, Statusabfragen und Serversteuerung.

| Befehl                    | Beschreibung                                      |
| ------------------------- | ------------------------------------------------ |
| `say <Nachricht>`         | Sendet eine Nachricht an alle Spieler im Chat    |
| `start <resource-name>`   | Startet eine bestimmte Server-Ressource          |
| `stop <resource-name>`    | Stoppt eine bestimmte Server-Ressource           |
| `restart <resource-name>` | Startet eine bestimmte Server-Ressource neu      |
| `ensure <resource-name>`  | Startet Ressource nur, wenn sie noch nicht läuft |
| `refresh`                 | Lädt alle Ressourcen aus dem Ressourcen-Ordner neu |
| `clear`                   | Löscht die Ausgabe der Serverkonsole              |
| `crash`                   | Erzwingt einen Server-Crash (für Debugging)       |
| `quit`                    | Fährt den Server sauber herunter                   |



## Abschluss

RCON ist ein essentielles Tool für die Remote-Verwaltung von RedM Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und schützt den Zugang durch Passwort-Authentifizierung. Eine korrekte und sichere Konfiguration ist entscheidend, um die Serverstabilität zu gewährleisten und unbefugten Zugriff zu verhindern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />