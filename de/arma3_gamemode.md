---
id: arma3_gamemode
title: Spielmodus ändern
sidebar_label: Spielmodus ändern
---


## Festlegen des Spielmodus

Um den Spielmodus auf deinem ArmA 3 Server ändern zu können musst du die für den Spielmodus passende Missionsdatei auf deinen Server hochladen.

Folgende Missionsdateien bieten wir aktuell an ohne dass du diese hochladen musst:

- ArmA 3 Wasteland

Diese liegen bereits in deinem **mpmissions** Verzeichnis.


## Hochladen der Missionsdatei

Für das hochladen der Missionsdatei musst du zuvor via FTP auf deinen Server verbinden: [Gameserver FTP Verbindung](gameserver_ftpaccess.md).
Dort lädst du nun die entsprechende Missionsdatei in dein **mpmissions** Verzeichnis welches du unter **/gxxxxxx/arma3/** finden kannst.
In diesem Beispiel laden wir Den Spielmodus **King of the Hill** auf unseren Server.

![](https://screensaver01.zap-hosting.com/index.php/s/r4bTacdazaXqrAY/preview)


## Laden der Missionsdatei auf dem Server

Damit die Missionsdatei nun vom Server geladen wird begibst du dich in dein ArmA 3 Serverinterface und klickst links im Menü auf den Tab **Configs**:

![](https://screensaver01.zap-hosting.com/index.php/s/W97PQkcMaECXLwE/preview)

Dort bearbeitest du nun die Datei **server.cfg** und trägst dort wie auf dem Bild zu sehen den Namen deiner Missionsdatei ein: 

![](https://screensaver01.zap-hosting.com/index.php/s/KYSirJYFPyz24R3/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/wLHZQ8Gx5ZnDLkw/preview)

Danach klickst du auf **Speichern** und kannst deinen Server im Anschluss starten. Die neue Missionsdatei wird dann geladen.
