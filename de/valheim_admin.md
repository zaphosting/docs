---
id: valheim_admin
title: Valheim: Server Admin Befehle & Cheats
description: Informationen zu Admin Befehlen und Cheats für deinen Valheim-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentationen
sidebar_label: Admin Commands & Cheats
---

## 🔑 Als Admin hinzufügen

### Herausfinden der SteamID
Um sich selbst als Admin hinzuzufügen, muss zunächst die SteamID herausgefunden. Dazu kann der [Steam ID Finder](https://steamidfinder.com/) verwendet werden.


Hier gibt man seine Steam-URL ein:

![image](https://user-images.githubusercontent.com/13604413/159179966-154bb929-edcc-42aa-965e-cb747bb463f8.png)

Dann drücken wir auf `Find Steam ID`.

Jetzt sollten wir unser Steam-Profil sehen können, hier kopieren wir unsere "Steam64ID (Dec)".


### In den Einstellungen Eintragen

Nun öffnen wir unser Server-Webinterface und öffnen die Einstellungen, hier sehen wir eine "Admins"-Option, wo wir unsere Steam-ID hinzufügen können:

![image](https://user-images.githubusercontent.com/13604413/159179970-41e1601a-b06c-4579-8360-b25bf0ac582f.png)


Nachdem wir unsere Steam-ID hinzugefügt haben, speichern wir die Einstellungen und starten dann den Server neu.

## 🖥️ Zugriff auf die Konsole

Die Konsole in Valheim kann durch Drücken von "F5" während des Spiels aufgerufen werden, dort können Admin-Befehle oder Cheats eingegeben werden


### Admin Befehle

|  Command   |           Arguments          |                  Effect               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   kick     |        Name/PlayerID/IP      |     Kickt den Angegebenen Spieler     |
|   ban      |        Name/PlayerID/IP      |     Bannt den Angegebenen Spieler     |
|   unban    |        PlayerID/IP           |     Entbannt den Angegebenen Spieler  |
|   banned   |           None               |  Zeigt alle Gebannten Spieler an      |
