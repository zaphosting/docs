---
id: vserver-windows-vrising
title: "vServer: V-Rising Dedicated Server Einrichtung"
description: Informationen, wie du einen V-Rising Server auf deinen Windows vServer von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: V-Rising
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS oder Rootserver und möchtest darauf einen Palworld Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst auf deinem Server installierst.

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/rpPmcoqSpGpKFyN/preview" title="How to setup a V RISING Dedicated Windows Server!" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

<InlineVoucher />

## Vorbereitung
Es wird ein Server, basierend auf Windowsserver 2016/2019, mit mindestens 4x 2,4 GHz CPU (AMD/Intel) sowie mindestens 4 GB RAM (DDR3/4) und 6 GB freien Speicher (SSD oder besser, bevorzugt) benötigt. Der Server muss auf der 64 Bit Architektur laufen.  

## Step 1 Ordner erstellen für V-Rising

Als Erstes musst du dich mit dem Server verbinden via [Erstzugang (RDP)](vserver-windows-userdp.md). 
Nachdem du verbunden bist, musst du einen neuen Ordner erstellen, in welchem die V-Rising Files im Anschluss installiert werden.
In diesem Beispiel erstellen wir einen neuen Ordner auf dem Desktop.
Dafür einen Rechtsklick auf dem Desktop machen und "Neu -> Ordner" auswählen.

![image](https://screensaver01.zap-hosting.com/index.php/s/MK5WxBya7Jbk4DJ/preview)

Du kannst den Ordner nennen, wie du möchtest. In unserem Beispiel nennen wir den Ordner "VRising"

## Step 2 SteamCMD auf deinen Windows Server herunterladen
Öffne den Browser und öffne den folgenden [link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)
Dadurch wird SteamCMD für Windows auf deinem Server heruntergeladen. 

![image](https://screensaver01.zap-hosting.com/index.php/s/QCrqRzaJJw6S3pw/preview)

Die Datei wird heruntergeladen und sollte sich dann im Download Ordner befinden.

![image](https://screensaver01.zap-hosting.com/index.php/s/ETqr7znjCo7YZys/preview)

Aus Gründen der Übersicht kopieren wir die steamcmd.zip Datei nun in den vorhin erstellten VRising Ordner auf unserem Desktop.
Dafür muss die Datei angeklickt werden. Danach muss die Tastenkombination "STRG+C" gedrückt werden, damit die Datei kopiert wird.
Öffne jetzt den VRising Ordner auf deinem Desktop und drücke "STRG+V".
Die Datei befindet sich nun im VRising Ordner.

![image](https://screensaver01.zap-hosting.com/index.php/s/tcpFKPjH4yTq2Pm/preview)

Mache einen Rechtskick auf die steamcmd.zip Datei und wähle "Entpacken" aus.
Bestätige den Vorgang in der kommenden Meldung, indem du auf den Entpacken / Extract Button klickst.

![image](https://screensaver01.zap-hosting.com/index.php/s/dt4ZA7zRTzRk8NL/preview)

![image](https://screensaver01.zap-hosting.com/index.php/s/mg4tEFE86TGbbqN/preview)

Soweit das erledigt ist, mache einen Doppelklick auf die SteamCMD Datei.
Ein neues Fenster öffnet sich dann, in welchem die SteamCMD Dateien installiert werden.

![image](https://screensaver01.zap-hosting.com/index.php/s/sSjMRn8B4BygAmm/preview)

## Step 3 Download der V-Rising Dateien

Soweit die SteamCMD Dateien installiert sind, siehst du folgendes in dem SteamCMD Fenster.

![image](https://screensaver01.zap-hosting.com/index.php/s/9sr5m5k66cSN665/preview)

Wir geben jetzt den Pfad an, in welchem die Dateien heruntergeladen werden sollen. Das wird mit dem Befehl "force_install_dir" gemacht.Der komplette Befehl in unserem Beispiel lautet: 
`` force_install_dir "C:\Users\Administrator\Desktop\VRising"``

Damit werden die Dateien dann in den vorhin erstellten VRising Ordner heruntergeladen.

![image](https://screensaver01.zap-hosting.com/index.php/s/2PHr9Drakoxepoc/preview)

Im Anschluss loggen wir uns als anonymous User an.
Dafür muss "login anonymous" eingegeben werden.

![image](https://screensaver01.zap-hosting.com/index.php/s/ind5wfocPRN63R8/preview)

Soweit das abgeschlossen ist, können wir jetzt endlich die Spieldateien herunterladen.
Das geht mit dem folgenden Befehl:
``app_update 1829350 validate``

Die Dateien werden im Anschluss heruntergeladen, der Vorgang kann einige Minuten in Anspruch nehmen.

![image](https://screensaver01.zap-hosting.com/index.php/s/qADmtArA22EXEc5/preview)

Soweit der Vorgang abgeschlossen ist, siehst du die ganzen Dateien im VRising Ordner.

![image](https://screensaver01.zap-hosting.com/index.php/s/xnTPmajAnGamYcA/preview)

## Step 4 Starten und Konfigurieren vom V-Rising Server

Du kannst die start_Server_example.bat Datei editieren und einige Änderungen daran vornehmen.
Dafür einen Rechtsklick auf die Datei machen und "bearbeiten" auswählen.
Darin kann zum Beispiel der Name vom Server sowie der Pfad für Savegame festgelegt werden.

![image](https://screensaver01.zap-hosting.com/index.php/s/Q6ptsyTWF7Q9WMo/preview)

Weitere Änderungen können in den Config Files vorgenommen werden.
Diese findest du im folgenden Verzeichnis:
``RisingServer_Data\StreamingAssets\Settings``

![image](https://screensaver01.zap-hosting.com/index.php/s/6SjJMJLP6oecT2q/preview)

In der ServerHostSettings.json Datei kannst du allgemeine Änderungen vornehmen.
Zum Beispiel das Festlegen der Ports, das Definieren einer Beschreibung oder auch das Speicherverhalten.

Um den Server zu starten, kannst du einen Doppelklick auf die start_server_example.bat Datei machen.

![image](https://screensaver01.zap-hosting.com/index.php/s/ExoMBS3dxfzS5BQ/preview)

Der Startvorgang wird einige Minuten in Anspruch nehmen.
Soweit die Ports im folgenden Schritt korrekt freigegeben worden sind, kann der Server in der Server Liste aufgefunden werden.

![image](https://screensaver01.zap-hosting.com/index.php/s/swTC3jmJcQEPxYx/preview)

## Step 5 Ports freigeben

Der Server soll natürlich öffentlich erreichbar sein, um mit Freunden spielen zu können. Dazu müssen die Ports des Servers in der Windows Firewall freigeschaltet werden. Die Ports 9876 und 9877 müssen für das Protokoll TCP UND UDP freigegeben werden.
Wie Ports bei Windows freigeschaltet werden können, eklären wir hier:[Portweiterleitung (Firewall)](vserver-windows-port.md). 

Nach der Port Freigabe ist der Server öffentlich erreichbar, sofern er gestartet wurde. 


## Abschluss

Glückwunsch, du hast den V-Rising Server erfolgreich installiert und konfiguriert! Solltest du noch weitere Fragen oder Probleme haben, dann wende dich gerne an unser Support-Team, welches dir jeden Tag zur Verfügung steht!