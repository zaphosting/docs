---
id: vserver_windows_vrising.md
title: vServer: V-Rising auf windows installieren
description: Informationen wie du einen V-Rising Server auf deinen Windows vServer und Dedicated Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: V-Rising
---

# Installation eines V-Rising Servers

> :information_source: Diese Anleitung gilt auch für einen Dedicated Server von ZAP-Hosting mit Windowsserver 2016/2019. Wie Windows auf einem Dedicated Server installiert werden kann, erklären wir [hier](https://zap-hosting.com/guides/docs/de/dedicated_windows/).

## Basis Informationen
Es wird ein Server, basierend auf Windowsserver 2016/2019 mit mindestens 4x 2,4 GHz CPU (AMD/Intel) sowie mindestens 4GB RAM (DDR3/4) und 6GB freien Speicher (SSD oder besser, bevorzugt) benötigt. Der Server muss auf der 64 Bit Architektur laufen.  

## Step 1 Ordner erstellen für V-Rising

Als erstes musst du dich mit dem Server verbinden via [RDP](https://zap-hosting.com/guides/docs/de/vserver_windows_userdp/). 
Nachdem du verbunden bist, musst du eienn neuen Ordner erstellen, in welchem die V-Rising Files im Anschluss installiert werden.
In diesem Beispiel erstellen wir einen neuen Ordner auf dem Desktop.
Dafür einen Rechtsklick auf dem Desktop machen und "Neu -> Ordner" auswählen.

![image](https://user-images.githubusercontent.com/61839701/169501564-26497f2b-658f-43c9-b9b8-213c059bae1b.png)

Du kannst den Ordner nennen  wie du möchtest.
In unserem Beispiel nennen wir den Ordner "VRising"

## Step 2 Download Steamcmd to your Windows server
Öffne den Browser und öffne den folgenden [link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)
Dadurch wird steamCMD für Windows auf deinem Server heruntergeladen. 

![image](https://user-images.githubusercontent.com/61839701/169502302-e7914931-d11b-4ffb-856c-2d14aef993e4.png)

Die Datei wird heruntergeladen und sollte sich dann im Download Ordner befinden.

![image](https://user-images.githubusercontent.com/61839701/169502419-07b532b6-c27e-46f5-b61e-9e73940df789.png)

Aus Gründen der Übersicht kopieren wir die steamcmd.zip Datei nun in den vorhin erstellten VRising Ordner auf unserem Desktop.
Dafür muss die Datei angeklickt werden. Danach muss die Tastenkombination "STRG+C" gedrückt werden, damit die Datei kopiert wird.
Öffne nun den VRising Ordner auf deinem Desktop und Drücke "STRG+V".
Die Datei befindet sich nun im VRising Ordner.

![image](https://user-images.githubusercontent.com/61839701/169503028-300c9585-f1d8-42bf-ae89-b2e42ffccfe2.png)

Mache nun einen Rechtskick auf die steamcmd.zip Datei und wähle "Entpacken" aus.
Bestätige den Vorgang in der kommenden Meldung indem du auf den Entpacken / Extract Button klickst.

![image](https://user-images.githubusercontent.com/61839701/169503185-c5eca884-9bf1-4b84-a916-35ee0c93505e.png)

![image](https://user-images.githubusercontent.com/61839701/169503433-3f9558f2-600a-4be0-8ce7-24eca7195ba1.png)

Soweit das erledigt ist, mache einen Doppelklick auf die Steamcmd Datei.
Ein neues Fenster öffnet sich dann, in welchem die steamcmd Dateien installiert werden.

![image](https://user-images.githubusercontent.com/61839701/169504858-c0ac6cfd-5af1-465c-b1dd-38fadb0a28ce.png)

## Step 3 Download der V-Rising Dateien

Soweit die Steamcmd Dateien  installiert sind, siehst du folgendes in dem steamcmd Fenster.

![image](https://user-images.githubusercontent.com/61839701/169505495-c376c430-3ed0-4593-8363-08c4fad4e2ba.png)

Wir geben nun den Pfad an, in welchem die Dateien heruntergeladen werden sollen.
Das wird mit dem Command "force_install_dir" gemacht..
Der komplette Befehl in unserem Beispiel lautet:
`` force_install_dir "C:\Users\Administrator\Desktop\VRising"``

Damit werden die Dateien dann in den vorhin erstellten VRising Ordner heruntergeladen.

![image](https://user-images.githubusercontent.com/61839701/169508798-73689618-6d62-471d-a2a3-77da3baeeb24.png)

Im Anschluss loggen wir uns als anonymous User an.
Dafür muss "login anonymous" eingegeben werden.

![image](https://user-images.githubusercontent.com/61839701/169506398-1b9d0538-46e0-47b0-9500-86689a16d36f.png)

Soweit das abgeschlossen ist, können wir jetzt endlich die Spieldateien herunterladen.
Das geht mit dem folgenden Befehl:
``app_update 1829350 validate``

Die Dateien werden im Anschluss heruntergeladen, der Vorgang kann einige Minuten in Anspruch nehmen.

![image](https://user-images.githubusercontent.com/61839701/169510012-d622c504-578d-487e-bddb-28508d8fc655.png)

Soweit der Vorgang abgeschlossen ist, siehts du die ganzen Dateien im VRising Ordner.

![image](https://user-images.githubusercontent.com/61839701/169510187-4e635637-f938-4d73-a769-29d349989289.png)

## Step 4 Starten und Konfigurieren vom V-Rising Server

Du kannst die start_Server_example.bat Datei editieren und einige Änderungen daran vornehmen.
Dafür einen Rechtsklick auf die Datei machen und "bearbeiten" auswählen.
Darin kann zum Beispiel der Name vom Server sowie der Pfad für Savegame festgelegt werden.

![image](https://user-images.githubusercontent.com/61839701/169510998-cdb6004b-cc83-4a6e-986c-d7a03779c219.png)

Weitere Änderungen können in den Config Files vorgenommen werden.
Diese findest du im folgenden Verzeichnis:
``RisingServer_Data\StreamingAssets\Settings``

![image](https://user-images.githubusercontent.com/61839701/169511975-4b85ae9a-e80c-4630-8778-f9ee345b09a8.png)

In der ServerHostSettings.json Datei kannst du allgemeine Änderungen vornehmen.
Zum Beispiel das Festlegen der Ports, das Definieren einer Beschreibung oder auch das Speicherverhalten.

Um den Server zu starten kannst du einen Doppeklick auf die start_server_example.bat Datei machen.

![image](https://user-images.githubusercontent.com/61839701/169510714-b00175e8-f5ed-4bd8-b8a4-8a9682d2ad09.png)

Der Start Vorgang wird einige Minuten in Anspruch nehmen.
Soweit die Ports im folgenden Schritt korrekt freigegeben worden sind, kann der Server in der Server Liste aufgefunden werden.

![image](https://user-images.githubusercontent.com/61839701/169515427-c60f5aef-9024-4b9b-bcff-2e36fef91017.png)

## Step 5 Ports freigeben

Der Server soll natürlich öffentlich erreichbar sein um mit Freunden spielen zu können. Dazu müssen die Ports des Servers in der Windows Firewall freigeschaltet werden. Die Ports 9876 und 9877 müssen für das Protokoll TCP UND UDP freigegeben werden.
Wie Ports bei Windows freigeschaltet werden können, [erklären wir in diesem Guide](https://zap-hosting.com/guides/docs/de/vserver_windows_port/). 

Nach der Port Freigabe ist der Server öffentlich erreichbar, sofern er gestartet wurde. 
