---
id: valheim_admin
title: Admin Commands & Cheats
sidebar_label: Admin Commands & Cheats
---

# Als Admin hinzufügen


## Richtiges Spiel Installieren

Zuerst müssen wir Sichergehen, dass das Spiel auf unserem Server `Valheim` ist, `Valheim (old)` funktioniert leider nicht.

Um das Spiel zu wechseln öffnen wir zuerst das Spiele Tab auf unserem Server:
![](https://screensaver01.zap-hosting.com/index.php/s/BbBAmKHto6mrSDx/preview)

Hier Suchen wir unter "Verfügbare Spiele" nun nach Valheim und klicken auf den Download Button:
![](https://screensaver01.zap-hosting.com/index.php/s/DmBdFnT487aPwME/preview)

Nun bekommen wir eine Warnung, diese bestätigen wir einfach:
![](https://screensaver01.zap-hosting.com/index.php/s/bTZYCnDMAHTwMPt/preview)

Danach wird der Server Neuinstalliert, nach der neuinstallation können die Adminrechte verwaltet werden.


## Herausfinden der SteamID
Um sich selbst als Admin hinzuzufügen, muss zunächst die SteamID herausgefunden. Dazu kann der [Steam ID Finder](https://steamid.xyz/) verwendet werden.


Hier gibt man seine Steam-URL ein:
![](https://screensaver01.zap-hosting.com/index.php/s/bybzMbKicjWpfeW/preview)

Dann drücken wir auf `Submit`.

Jetzt sollten wir unser Steam-Profil sehen können, hier kopieren wir unsere "Steam64 ID".


## In den Einstellungen Eintragen

Nun öffnen wir unser Server-Webinterface und öffnen die Einstellungen, hier sehen wir eine "Admins"-Option, wo wir unsere Steam-ID hinzufügen können:

![](PLACEHOLDER)


Nachdem wir unsere Steam-ID hinzugefügt haben, speichern wir die Einstellungen und starten dann den Server neu.

# Zugriff auf die Konsole

Die Konsole in Valheim kann durch Drücken von "F5" während des Spiels aufgerufen werden, dort können Admin-Befehle oder Cheats eingegeben werden


## Admin Befehle

|  Command   |           Arguments          |                  Effect               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   kick     |        Name/PlayerID/IP      |     Kickt den Angegebenen Spieler     |
|   ban      |        Name/PlayerID/IP      |     Bannt den Angegebenen Spieler     |
|   unban    |        PlayerID/IP           |     Entbannt den Angegebenen Spieler  |
|   banned   |           None               |  Zeigt alle Gebannten Spieler an      |
|   save     |           None               |     Erzwingt das Speichern der Welt   |
|   ping     |           None               |           Zeigt deinen Ping An        |


## Cheat Commands

To access Cheat Commands, first you will need to type `imacheater` into the Console, then you can access the following commands:

|  Command   |           Arguments          |                  Effect               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   god     |        None                   |     Schaltet den Godmode ein/aus      |
|   pos      |        None     				|     Zeigt die aktuellen Koordinaten an|
|   goto    |        x,z Coordinates        |     Teleportiert zu den Koordinaten   |
|   killall  |           None               |    Tötet alle Feinde in der Nähe      |
| exploremap |           None               |     Erforscht/offenbart die gesamte Karte|
| resetmap   |           None               |     Verdeckt die gesamte Karte        |
| tame		 |           None               |     Zähmt alle Kreaturen in der Nähe  |
| freefly	 |           None               |     Schaltet auf die freie Kamera um  |
| ffsmooth   |      Smoothness              |     Lässt die Freie Kamera flüssiger sein|
| raiseskill |      Skill, Amount           |Erhöht die Stufe einer bestimmten Fertigkeit|
| resetskill |           Skill              |Setzt die Stufe einer bestimmten Fertigkeit zurück|
| tod		 |         -1 or 0-1            |   	Tageszeit einstellen		    |
| wind		 |    angle, intensity          |     Windwinkel und -intensität einstellen|
| resetwind  |           None               |     Windwinkel/Intensität zurücksetzen|
| event		 |         Event Name           |     Startet ein bestimmtes Event      |
| stopevent  |           None               |     Stoppt das aktive Event           |
| randomevent|           None               |         Startet ein zufälliges Event  |
|resetcharacter|           None             |     Setzt Spielerdaten Zurück         |
| players	 |  	 Player Amount (0=reset)|     Ändert die Schwierigkeit          |
| removedrops |           None              |   Entfernt alle Item-Drops in der nähe|
