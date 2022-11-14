---
id: arma3_missionfile
title: Eigene Missionsdatei hochladen
sidebar_label: Eigene Missionsdatei hochladen
---


## Hochladen der Missionsdatei

Für das hochladen deiner eigenen Missionsdatei musst du zuvor via FTP auf deinen Server verbinden: [Gameserver FTP Verbindung](gameserver_ftpaccess.md).
Dort lädst du nun die entsprechende Missionsdatei in dein **mpmissions** Verzeichnis welches du unter **/gxxxxxx/arma3/** finden kannst.
In diesem Beispiel laden wir die Missionsdatei **King_of_the_hill.Altis** auf unseren Server.

![image](https://user-images.githubusercontent.com/26007280/189677600-bbe00c3a-0be6-4c2f-9bf5-eeb166b3c4dc.png)


## Laden der Missionsdatei auf dem Server

Damit die Missionsdatei nun vom Server geladen wird begibst du dich in dein ArmA 3 Serverinterface und klickst links im Menü auf den Tab **Configs**:

![image](https://user-images.githubusercontent.com/26007280/189677626-8f5acdde-5f0e-4ea5-8d5d-c02282e72f9e.png)

Dort bearbeitest du nun die Datei **server.cfg** und trägst dort wie auf dem Bild zu sehen den Namen deiner Missionsdatei ein: 

![image](https://user-images.githubusercontent.com/26007280/189677658-39048ff6-1559-4c91-9166-7e745ff553e3.png)

![image](https://user-images.githubusercontent.com/26007280/189677779-ad8ff2e4-c2f3-49ed-9a69-c9f6d0ea50f7.png)

Danach klickst du auf **Speichern** und kannst deinen Server im Anschluss starten. Die neue Missionsdatei wird dann geladen.
