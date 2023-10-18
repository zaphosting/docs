---
id: csgo-gotv
title: Server Informationen zu GOTV
description: Informationen zu GOTV auf Counter-Strike Go-Servern von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: GOTV

---



:::caution
**Counter-Strike: Global Offensive** has now been updated to **Counter-Strike 2**. Servers for Counter-Strike 2 can be found [here](https://zap-hosting.com/en/counter-strike-2-server-hosting/). Currently, it is possible to continue playing on Counter-Strike: Global Offensive servers and rent servers for Counter-Strike: GO through the [Steam Beta feature](https://zap-hosting.com/en/blog/2023/09/our-servers-are-still-compatible-with-the-latest-beta-version-of-cs-go-on-steam/).  Das kann sich allerdings jederzeit ändern, falls Valve dies unterbindet. Wir empfehlen zeitnah auf die neue Version umzusteigen. 
:::



## Was ist GOTV?


GOTV bietet die Möglichkeit, Spiele mit etwas Verzögerung live zu übertragen. Somit können auch Außenstehende, die nicht selbst am Spiel beteiligt sind, das Geschehen auf dem Server mitverfolgen. Diese Technologie wird auch bei den bekannten Counter-Strike Turnieren eingesetzt, damit die Zuschauer sich das Spektakel anschauen können. Des Weiteren können die Übertragungen auch automatisch gespeichert werden, sodass auch im Anschluss ein erneutes Anschauen möglich ist. 



![image](https://user-images.githubusercontent.com/26007280/189976843-8cf67797-ec09-42e8-94f7-055430a0224a.png)





## Wie benutzt man GOTV?

Wenn die Funktion beim Server aktiviert ist, dann ist der Zugriff über die IP-Adresse und den dafür zugewiesenen GOTV Port des Servers möglich. Zum Verbinden benötigt man die Konsole im Spiel. Dort kannst du dich dann mit dem folgenden Befehl verbinden: 

```
connect SERVERIP:27020
```



Manuelle und automatische aufgenommene Demos werden im Hauptverzeichnis (gxxxxx/csgo/csgo/) des CS:GO Server abgelegt. Diese können über den bereitgestellten FTP-Zugang heruntergeladen werden. Sollte du noch nicht wissen, wie der Zugang via FTP möglich ist, dann findest du hierzu eine entsprechende Anleitung: https://docs.zap-hosting.com/docs/de/gameserver_ftpaccess/



![image](https://user-images.githubusercontent.com/26007280/189976867-0ea7da9c-fda3-472b-a79f-ac03919c2cc1.png)



Mit dem Demo-Playback aus dem Spiel kann die heruntergeladene Demo über **Load** ausgewählt und über den **Play** Button gestartet werden. 



## Installation GOTV Masterserver

Zum Aktivieren des GOTV Masterserver müssen in der **server.cfg** noch fehlende Befehle hinzugefügt werden. Es handelt sich hierbei um folgende Befehle:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



Die oben genannten Befehle sind zwingend notwendig, damit der GOTV Masterserver aktiviert und erreichbar ist. Allerdings gibt es im folgenden auch noch weitere Befehle zum erweiterten Konfigurieren:

|           Befehl            |                         Beschreibung                         |
| :-------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0/1"  |        Zuschauer können die als Kameramann übernehmen        |
| tv_allow_static_shots "0/1" |    Verwendet Kameras mit fester Ausrichtung für Aufnahmen    |
|     tv_autorecord "0/1"     | Zeichnet automatisch alle Spiele als GOTV-Demos auf. Alle Spiele werden automatisch aufgezeichnet, das Format der Demodatei lautet auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0/1"      | Versucht nach einem Netzwerk-Timeout erneut eine Verbindung herzustellen |
| tv_chattimelimit "sekunden" | Beschränkt die Zuschauer darauf nur alle n Sekunden zu schreiben |
|       tv_debug "0/1"        |             Anzeige von GOTV Debug Informationen             |
|   tv_delaymapchange "0/1"   | Verzögert den Kartenwechsel, bis die Übertragung abgeschlossen ist |
|      tv_maxclients "n"      |          Maximale Clientanzahl auf dem GOTV-Server           |
|       tv_maxrate "n"        | Max. zulässige GOTV-Zuschauer-Bandbreitenrate, 0 == unbegrenzt |
|        tv_msg "text"        |           Schickt eine Nachricht an alle Zuschauer           |
|       tv_name "name"        | GOTV-Hostname. Legt den GOTV-Namen so fest, wie er im Server-Browser und in der Statusleiste erscheint. |
|       tv_nochat "0/1"       |           Aktiviereren/deaktivieren des GOTV-Chats           |
|   tv_password "password"    |       Schützt die GOTV Übertragung mit einem Passwort        |
|    tv_record "filename"     |             Startet die Aufnahme einer GOTV Demo             |
|           tv_stop           |                 Stoppt die GOTV-Übertragung                  |
|        tv_stoprecord        |             Stoppt die Aufnahme einer GOTV Demo              |
|          tv_title           |           Definiert den Namen der GOTV Übertragung           |

