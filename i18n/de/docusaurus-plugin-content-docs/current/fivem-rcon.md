---
id: fivem-rcon
title: "FiveM: RCON"
description: "Erfahre, wie du RCON für FiveM verwendest – ZAP-Hosting Dokumentation"
sidebar_label: RCON
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll zur Fernsteuerung von Gameservern. Es ermöglicht den Zugriff auf die Serverkonsole, ohne dass du direkt auf die Serverumgebung zugreifen musst. Dadurch kannst du administrative Befehle ausführen, Konfigurationsparameter anpassen oder den Serverstatus abfragen.

In FiveM wird RCON verwendet, um serverseitige Befehle auszuführen, zum Beispiel zur Verwaltung von Spielern, zur Änderung von Spieleinstellungen oder zum Abrufen von Diagnosedaten. Die Verbindung ist durch ein Passwort geschützt und erfolgt über einen definierten Port, der über kompatible RCON-Clients erreichbar ist.

Ein wesentlicher Vorteil von RCON ist, dass du den Server verwalten kannst, **ohne selbst im Spiel verbunden zu sein**. Administratoren können FiveM über externe Tools, Kommandozeilen-Interfaces oder Web-Dashboards überwachen und steuern, flexibel und ortsunabhängig.

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />



## Konfiguration

Bevor RCON verwendet werden kann, muss es aktiviert und konfiguriert werden. Dies geschieht im Bereich **CFG Editor** der Gameserver-Verwaltung in **txAdmin**. Stelle sicher, dass die folgenden Zeilen in der Konfiguration ergänzt oder angepasst werden:

```cfg
ensure rconlog
set rcon_password "define-your-password"
```



## Verbindung per RCON

Um eine Verbindung zum GameXY-Server per RCON herzustellen, wird das Windows-Tool **IceCon** verwendet. Es ist über das [GitHub-Repository](https://github.com/icedream/icecon) verfügbar. Nach der Installation des Tools auf deinem Computer kannst du eine neue Verbindung mit den folgenden Angaben einrichten:

- **IP-Adresse des Servers**  
- **Game-Port**  
- **RCON-Passwort**

Sobald die Verbindung erfolgreich hergestellt wurde, bietet IceCon eine grafische Oberfläche zur Ausführung von RCON-Befehlen auf dem FiveM-Server. Du kannst gängige RCON-Kommandos senden und die Rückmeldungen in Echtzeit im Tool einsehen.

IceCon bietet zudem folgende Zusatzfunktionen:

- Befehlshistorie und Autovervollständigung  
- Server-Log-Anzeige  
- Benutzerdefinierte Befehlsbuttons  
- Verbindungsprofile zur Verwaltung mehrerer Server



## RCON-Befehle

Sobald die Verbindung über RCON besteht, können verschiedene administrative und diagnostische Befehle auf dem FiveM Server ausgeführt werden. Die verfügbaren Befehle hängen von der Game-Engine ab, beinhalten aber typischerweise Aktionen zur Spielersteuerung, Statusabfragen und Serverkontrolle.

| Command                    | Beschreibung                                          |
| -------------------------- | ----------------------------------------------------- |
| `say <Nachricht>`          | Sendet eine Nachricht an alle Spieler im Chat         |
| `start <Ressourcenname>`   | Startet eine bestimmte Server-Ressource               |
| `stop <Ressourcenname>`    | Stoppt eine bestimmte Server-Ressource                |
| `restart <Ressourcenname>` | Startet eine bestimmte Ressource neu                  |
| `ensure <Ressourcenname>`  | Startet Ressource nur, wenn sie noch nicht läuft      |
| `refresh`                  | Lädt alle Ressourcen im Ressourcenverzeichnis neu ein |
| `clear`                    | Leert die Server-Konsole                              |
| `crash`                    | Erzwingt einen Serverabsturz (nur für Debug-Zwecke)   |
| `quit`                     | Beendet den Server sauber                             |

## Abschluss

RCON ist ein zentrales Werkzeug für die Fernadministration von FiveM Gameservern. Es ermöglicht schnellen und direkten Zugriff auf administrative Funktionen und bietet gleichzeitig Zugriffsschutz durch Passwortauthentifizierung. Eine korrekte und sichere Konfiguration ist entscheidend, um die Stabilität des Servers zu gewährleisten und unbefugten Zugriff zu verhindern.

Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂