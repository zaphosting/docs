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

![image](https://user-images.githubusercontent.com/26007280/189677073-6a032e47-45c5-4d55-9749-4a7cae334ab2.png)


## Laden der Missionsdatei auf dem Server

Damit die Missionsdatei nun vom Server geladen wird begibst du dich in dein ArmA 3 Serverinterface und klickst links im Menü auf den Tab **Configs**:

![image](https://user-images.githubusercontent.com/26007280/189677126-cb56dc14-7616-4a74-92b3-676192ea2d07.png)

Dort bearbeitest du nun die Datei **server.cfg** und trägst dort wie auf dem Bild zu sehen den Namen deiner Missionsdatei ein: 

![image](https://user-images.githubusercontent.com/26007280/189677159-ecb35caf-552b-46aa-8fb0-a275ef1456a7.png)

![image](https://user-images.githubusercontent.com/26007280/189677281-4c7b3ff7-ef0d-49ae-9efc-8adf9bf17c28.png)

Danach klickst du auf **Speichern** und kannst deinen Server im Anschluss starten. Die neue Missionsdatei wird dann geladen.
