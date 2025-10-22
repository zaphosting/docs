---
id: csgo-gotv
title: "CSGO: Infos zu GOTV"
description: "Entdecke, wie GOTV Live-Game-Streams und Replay-Aufnahmen für ein besseres Zuschauererlebnis in CS:GO und ähnlichen Games ermöglicht → Jetzt mehr erfahren"
sidebar_label: GOTV
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archivierte Anleitung
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, fehlerhaft oder veraltet sind. Es wurde aus folgenden Gründen archiviert:

Grund: CS:GO wird nicht mehr aktiv angeboten und nicht mehr weiterentwickelt. CS2 ist der Nachfolger von CS:GO. Wir empfehlen den Wechsel zu CS2.
::::



## Was ist GOTV?


GOTV bietet die Möglichkeit, Spiele mit einer kleinen Verzögerung live zu übertragen. Das bedeutet, dass auch Außenstehende, die nicht im Spiel involviert sind, verfolgen können, was auf dem Server passiert. Diese Technologie wird auch bei den bekannten Counter-Strike-Turnieren eingesetzt, damit die Zuschauer das Spektakel live verfolgen können. Außerdem können die Übertragungen automatisch gespeichert werden, sodass du sie später nochmal anschauen kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/qcewrMDCF2nzyie/preview)

<InlineVoucher />

## Wie nutzt man GOTV?

Wenn die Funktion auf dem Server aktiviert ist, ist der Zugriff über die IP-Adresse und den dafür zugewiesenen GOTV-Port auf dem Server möglich. Um dich zu verbinden, brauchst du die Konsole im Spiel. Dort kannst du dich dann mit folgendem Befehl verbinden:

```
connect SERVERIP:27020
```


Manuell und automatisch aufgenommene Demos werden im Hauptverzeichnis (gxxxxx / csgo / csgo /) des CS:GO Servers gespeichert. Diese kannst du über den bereitgestellten FTP-Zugang herunterladen. Falls du noch nicht weißt, wie der FTP-Zugang funktioniert, findest du hier eine Anleitung dazu: [Zugriff via FTP](gameserver-ftpaccess.md).


![](https://screensaver01.zap-hosting.com/index.php/s/enbMKLwNaeqdzxm/preview)



Bei der Demo-Wiedergabe im Spiel kannst du die heruntergeladene Demo über **Load** auswählen und mit dem **Play**-Button starten.



## Installation des GOTV Master Servers

Um den GOTV Master Server zu aktivieren, müssen fehlende Befehle in der **server.cfg** ergänzt werden. Das sind folgende Befehle:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



Die oben genannten Befehle sind Pflicht, damit der GOTV Master Server aktiviert und erreichbar ist. Es gibt aber noch weitere Befehle für erweiterte Einstellungen:

|            Befehl            |                         Beschreibung                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Zuschauer können als Kameramann übernehmen        |
| tv_allow_static_shots "0\|1" |    Nutzt fest ausgerichtete Kameras für Aufnahmen    |
|     tv_autorecord "0\|1"     | Nimmt automatisch alle Spiele als GOTV-Demos auf. Alle Spiele werden automatisch aufgenommen, das Format der Demo-Datei ist auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Versucht nach einem Netzwerk-Timeout erneut zu verbinden |
| tv_chattimelimit "Sekunden"  | Beschränkt Zuschauer darauf, nur alle x Sekunden zu schreiben |
|       tv_debug "0\|1"        |             Anzeige von GOTV-Debug-Informationen             |
|   tv_delaymapchange "0\|1"   | Verzögert den Map-Wechsel bis die Übertragung abgeschlossen ist |
|      tv_maxclients "n"       |          Maximale Anzahl an Clients auf dem GOTV-Server           |
|        tv_maxrate "n"        | Max. erlaubte Bandbreite für GOTV-Zuschauer, 0 == unbegrenzt |
|        tv_msg "Text"         |           Sendet eine Nachricht an alle Zuschauer           |
|        tv_name "Name"        | GOTV-Hostname. Definiert den GOTV-Namen, wie er im Serverbrowser und in der Statusleiste erscheint |
|       tv_nochat "0\|1"       |           Aktiviert/Deaktiviert den GOTV-Chat           |
|    tv_password "Passwort"    |       Schützt die GOTV-Übertragung mit einem Passwort        |
|     tv_record "Dateiname"    |             Startet die Aufnahme einer GOTV-Demo             |
|           tv_stop            |                 Stoppt die GOTV-Übertragung                  |
|        tv_stoprecord         |            Stoppt die Aufnahme einer GOTV-Demo              |
|           tv_title           |           Definiert den Namen der GOTV-Übertragung           |

<InlineVoucher />