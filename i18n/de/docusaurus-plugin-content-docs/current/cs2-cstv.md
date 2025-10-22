---
id: cs2-cstv
title: "CS2: CSTV "
description: "Entdecke, wie du Live-Game-Streams mit Verzögerung und automatischer Aufnahme für Zuschauer überträgst und Matches jederzeit erneut erlebst → Jetzt mehr erfahren"
sidebar_label: CSTV
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

CSTV bietet die Möglichkeit, Spiele live mit einer kleinen Verzögerung zu übertragen. Das bedeutet, dass auch Außenstehende, die nicht am Spiel beteiligt sind, verfolgen können, was auf dem Server passiert. Diese Technik wird auch bei den bekannten Counter-Strike-Turnieren eingesetzt, damit die Zuschauer das Spektakel verfolgen können. Außerdem können die Übertragungen automatisch gespeichert werden, sodass du sie später jederzeit erneut anschauen kannst.

<InlineVoucher />

## Aktivierung

Die Aktivierung des CSTV-Services erfolgt über die **server.cfg** Konfigurationsdatei. Die notwendigen Befehle müssen dort hinzugefügt werden:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## Konfiguration

Die oben genannten Befehle sind Pflicht, damit der CSTV-Masterserver aktiviert und erreichbar ist. Es gibt jedoch weitere Befehle für eine erweiterte Konfiguration:

|            Befehl            |                         Beschreibung                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Zuschauer können als Kameramann übernehmen        |
| tv_allow_static_shots "0\|1" |    Nutzt fest ausgerichtete Kameras für Aufnahmen    |
|     tv_autorecord "0\|1"     | Nimmt alle Spiele automatisch als CSTV-Demos auf. Alle Spiele werden automatisch aufgenommen, das Demo-Dateiformat ist auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Versucht nach einem Netzwerk-Timeout erneut zu verbinden |
| tv_chattimelimit "Sekunden"  | Beschränkt Zuschauer darauf, nur alle x Sekunden zu schreiben |
|       tv_debug "0\|1"        |             Anzeige von CSTV-Debug-Informationen             |
|   tv_delaymapchange "0\|1"   | Verzögert den Kartenwechsel, bis die Übertragung abgeschlossen ist |
|      tv_maxclients "n"       |          Maximale Anzahl an Clients auf dem CSTV-Server          |
|        tv_maxrate "n"        | Max. erlaubte Bandbreite für CSTV-Zuschauer, 0 = unbegrenzt |
|        tv_msg "Text"         |           Sendet eine Nachricht an alle Zuschauer           |
|        tv_name "Name"        | CSTV-Hostname. Definiert den CSTV-Namen, wie er im Serverbrowser und in der Statusleiste erscheint |
|       tv_nochat "0\|1"       |           Aktiviert/Deaktiviert den CSTV-Chat           |
|    tv_password "Passwort"    |       Schützt die CSTV-Übertragung mit einem Passwort       |
|     tv_record "Dateiname"    |             Startet die Aufnahme einer CSTV-Demo             |
|           tv_stop            |                 Stoppt die CSTV-Übertragung                 |
|        tv_stoprecord         |            Stoppt die Aufnahme einer CSTV-Demo             |
|           tv_title           |           Definiert den Namen der CSTV-Übertragung           |

## Verbindung herstellen

Wenn die Funktion auf dem Server aktiviert ist, ist der Zugriff über die IP-Adresse und den zugewiesenen CSTV-Port auf dem Server möglich. Um dich zu verbinden, brauchst du die Konsole im Spiel. Dort kannst du dich mit folgendem Befehl verbinden:

```
connect SERVERIP:27020
```

Manuell und automatisch aufgenommene Demos werden im Hauptverzeichnis /gxxxxx/cs2/game/csgo) des CS:GO-Servers gespeichert. Diese können über den bereitgestellten FTP-Zugang heruntergeladen werden. Falls du noch nicht weißt, wie du per FTP zugreifst, findest du hier eine Anleitung: [Zugriff via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

Mit der Demo-Wiedergabe im Spiel kannst du die heruntergeladene Demo über **Load** auswählen und mit dem **Play**-Button starten.

<InlineVoucher />