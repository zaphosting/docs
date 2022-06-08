---
id: csgo_gotv
title: CS GO Server: Informationen zu GOTV
description: Informationen zu GOTV auf Counter-Strike Go-Servern von ZAP-Hosting - ZAP-Hosting.com Dokumentationen
sidebar_label: GOTV
---

## Was ist GOTV?


GOTV bietet die Möglichkeit Spiele mit etwas Verzögerung live zu übertragen. Somit können auch außenstehende die nicht selbst am Spiel beteiligt sind das Geschehen auf dem Server mitverfolgen. Diese Technologie wird auch bei den bekannten Counter-Strike Turnieren eingesetzt, damit die Zuschauer sich das Spektakel anschauen können. Des Weiteren können die Übertragungen auch automatisch gespeichert werden, sodass auch im Anschluss ein erneutes Anschauen möglich ist. 



![](https://screensaver01.zap-hosting.com/index.php/s/zrzMZmJiCPdNHk6/preview)





## Wie benutzt man GOTV?

Wenn die Funktion beim Server aktiviert ist, dann ist der Zugriff über die IP-Adresse und den dafür zugewiesenen GOTV Port des Servers möglich. Zum Verbinden benötigt man die Konsole im Spiel. Dort kannst du dich dann mit dem folgenden Befehl verbinden: 

```
connect SERVERIP:27020
```



Manuelle und automatische aufgenommene Demos werden im Hauptverzeichnis (gxxxxx/csgo/csgo/) des CS:GO Server abgelegt. Diese können über den bereitgestellten FTP-Zugang heruntergeladen werden. Sollte du noch nicht wissen wie der Zugang via FTP möglich ist, dann findest du hierzu eine entsprechende Anleitung: https://docs.zap-hosting.com/docs/de/gameserver_ftpaccess/



![](https://screensaver01.zap-hosting.com/index.php/s/N2bK2wG9syKyBJz/preview)



Mit dem Demo-Playback aus dem Spiel kann die heruntergeladene Demo über **Load** ausgewählt und über den **Play** Button gestartet werden. 



## Installation GOTV Masterserver

Zum Aktivieren des GOTV Masterserver müssen in der **server.cfg** noch fehlende Befehle hinzugefügt werden. Es handelt sich hierbei um folgende Befehle:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



Die oben genannten Befehle sind zwingend notwendig, damit der GOTV Masterserver aktiviert und erreichbar ist. Allerdings gibt es im folgenden auch noch weitere Befehle zum erweiterten Konfigurieren:

|            Befehl            |                         Beschreibung                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0/1"  |        Zuschauer können die als Kameramann übernehmen        |
| tv_allow_static_shots "0/1" |    Verwendet Kameras mit fester Ausrichtung für Aufnahmen    |
|     tv_autorecord "0/1"     | Zeichnet automatisch alle Spiele als GOTV-Demos auf. Alle Spiele werden automatisch aufgezeichnet, das Format der Demodatei lautet auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0/1"      | Versucht nach einem Netzwerk-Timeout erneut eine Verbindung herzustellen |
| tv_chattimelimit "sekunden"  | Beschränkt die Zuschauer darauf nur alle n Sekunden zu schreiben |
|       tv_debug "0/1"        |             Anzeige von GOTV Debug Informationen             |
|   tv_delaymapchange "0/1"   | Verzögert den Kartenwechsel, bis die Übertragung abgeschlossen ist |
|      tv_maxclients "n"       |          Maximale Clientanzahl auf dem GOTV-Server           |
|        tv_maxrate "n"        | Max. zulässige GOTV-Zuschauer-Bandbreitenrate, 0 == unbegrenzt |
|        tv_msg "text"         |           Schickt eine Nachricht an alle Zuschauer           |
|        tv_name "name"        | GOTV-Hostname. Legt den GOTV-Namen so fest, wie er im Server-Browser und in der Statusleiste erscheint. |
|       tv_nochat "0/1"       |           Aktiviereren/deaktivieren des GOTV-Chats           |
|    tv_password "password"    |       Schützt die GOTV Übertragung mit einem Passwort        |
|     tv_record "filename"     |             Startet die Aufnahme einer GOTV Demo             |
|           tv_stop            |                 Stoppt die GOTV-Übertragung                  |
|        tv_stoprecord         |             Stoppt die Aufnahme einer GOTV Demo              |
|           tv_title           |           Definiert den Namen der GOTV Übertragung           |

