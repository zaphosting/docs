---
id: cs2-cstv
title: "CS2: CSTV"
description: Informationen über CSTV zu CS2 Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: CSTV
---

:::caution
CS2 wurde erst vor kurzem veröffentlicht. Das Spiel erhält momentan noch einige Updates und Veränderungen. Dies betrifft ebenfalls die Funktionsweise und Struktur der CS2 Server. Wir bemühen uns die Anleitungen so korrekt und schnell wie möglich aktuell zu halten, falls sich zu diesem Thema etwas geändert hat.
:::



## Einführung 

CSTV bietet die Möglichkeit, Spiele mit etwas Verzögerung live zu übertragen. Somit können auch Außenstehende, die nicht selbst am Spiel beteiligt sind, das Geschehen auf dem Server mitverfolgen. Diese Technologie wird auch bei den bekannten Counter-Strike Turnieren eingesetzt, damit die Zuschauer sich das Spektakel anschauen können. Des Weiteren können die Übertragungen auch automatisch gespeichert werden, sodass auch im Anschluss ein erneutes Anschauen möglich ist. 



## Aktivierung

Die Aktivierung des des CSTV Dienstes erfolgt über die **server.cfg** Konfigurationsdatei. Dort müssen noch die notwendigen Befehle hinzugefügt werden: 

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



## Konfiguration

Die oben genannten Befehle sind zwingend notwendig, damit der CSTV Masterserver aktiviert und erreichbar ist. Allerdings gibt es im folgenden auch noch weitere Befehle zum erweiterten Konfigurieren:

|           Befehl            |                         Beschreibung                         |
| :-------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0/1"  |        Zuschauer können die als Kameramann übernehmen        |
| tv_allow_static_shots "0/1" |    Verwendet Kameras mit fester Ausrichtung für Aufnahmen    |
|     tv_autorecord "0/1"     | Zeichnet automatisch alle Spiele als CSTV-Demos auf. Alle Spiele werden automatisch aufgezeichnet, das Format der Demodatei lautet auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0/1"      | Versucht nach einem Netzwerk-Timeout erneut eine Verbindung herzustellen |
| tv_chattimelimit "sekunden" | Beschränkt die Zuschauer darauf nur alle n Sekunden zu schreiben |
|       tv_debug "0/1"        |             Anzeige von CSTV Debug Informationen             |
|   tv_delaymapchange "0/1"   | Verzögert den Kartenwechsel, bis die Übertragung abgeschlossen ist |
|      tv_maxclients "n"      |          Maximale Clientanzahl auf dem CSTV-Server           |
|       tv_maxrate "n"        | Max. zulässige CSTV-Zuschauer-Bandbreitenrate, 0 == unbegrenzt |
|        tv_msg "text"        |           Schickt eine Nachricht an alle Zuschauer           |
|       tv_name "name"        | CSTV-Hostname. Legt den CSTV-Namen so fest, wie er im Server-Browser und in der Statusleiste erscheint. |
|       tv_nochat "0/1"       |           Aktiviereren/deaktivieren des CSTV-Chats           |
|   tv_password "password"    |       Schützt die CSTV Übertragung mit einem Passwort        |
|    tv_record "filename"     |             Startet die Aufnahme einer CSTV Demo             |
|           tv_stop           |                 Stoppt die CSTV-Übertragung                  |
|        tv_stoprecord        |             Stoppt die Aufnahme einer CSTV Demo              |
|          tv_title           |           Definiert den Namen der CSTV Übertragung           |



## Verbindungsaufbau

Wenn die Funktion beim Server aktiviert ist, dann ist der Zugriff über die IP-Adresse und den dafür zugewiesenen CSTV Port des Servers möglich. Zum Verbinden wird die Konsole im Spiel benötigt. Dort kannst du dich dann mit dem folgenden Befehl verbinden: 

```
connect SERVERIP:27020 (Beispiel Port, schaue unter den Einstellungen nach deinen definierten Port)
```



Manuelle und automatische aufgenommene Demos werden im Hauptverzeichnis (/gxxxxx/cs2/game/csgo) des CS2 Server abgelegt. Diese können über den bereitgestellten FTP-Zugang heruntergeladen werden. Sollte du noch nicht wissen, wie der Zugang via FTP möglich ist, dann findest du hierzu eine entsprechende [Anleitung](gameserver-ftpaccess.md).



![image](https://user-images.githubusercontent.com/26007280/189976867-0ea7da9c-fda3-472b-a79f-ac03919c2cc1.png)



Mit dem Demo-Playback aus dem Spiel kann die heruntergeladene Demo über **Load** ausgewählt und über den **Play** Button gestartet werden. 



