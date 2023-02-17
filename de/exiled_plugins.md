---
id: exiled_plugins
title: EXILED: Plugins auf Server installieren
description: Informationen, wie du Plugins auf deinen Exiled Gameserver von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Plugins installieren
---

## Plugins installieren

Mit Plugins hast du die Möglichkeit deinen Server noch individueller anzupassen. Im Folgenden wird erklärt wo du die beliebtesten Servers-Plugins finden kannst und wie du diese eingerichtet werden. 

### Vorbereitung

Zunächst einmal müssen Sie die Plugins herunterladen, die auf dem Server installiert werden sollen. Eine große Auswahl an EXILED-Seite (https://github.com/Exiled-Team). Sobald Sie das Plugin-Repo ausgewählt haben, erscheint auf der Seite ein Abschnitt "Releases", über den Sie auf eine Download-Seite gelangen; Anweisungen dazu finden Sie unten.

### Herunterladen eines Plugins
Plugins können von vielen Quellen für Ihren Server heruntergeladen werden. Diese sind jedoch nur als die sichersten Optionen anerkannt. Bitte sei vorsichtig, welche Plugins du auf deinem Gameserver installierst - überprüfe immer die Quelle des Plugins, indem du nach den Entwicklern suchst und was das Plugin tatsächlich tut.

## Option 1 über die SCPSL-Website herunterladen
Unter (https://plugins.scpslgame.com/) finden Sie eine Liste von Plugins, die für die Verwendung in SCPSL zur Verfügung stehen, mit einem Github Repo Link, der Option 2 erklärt, was zu tun ist.
(Zum Zeitpunkt des Verfassens dieses Artikels ist die Seite neu und wird gerade überarbeitet, daher wurde Option 2 bereitgestellt) 

## Option 2 über Github herunterladen
Um ein Plugin über Github herunterzuladen, müssen Sie zum EXILED Github gehen, wie unten gezeigt, und ein Plugin-Repository auswählen.
![image](https://user-images.githubusercontent.com/17176877/219128457-a7a4aa64-5b7c-4778-9602-fa1286150b51.png)

Sobald Sie das Plugin-Repository gefunden haben, das Sie herunterladen möchten, erscheint auf der rechten Seite ein Abschnitt mit den Veröffentlichungen.
![image](https://user-images.githubusercontent.com/17176877/219128727-89f515af-394d-44d6-beb5-3ee6bed1a90b.png)

Sobald Sie den Abschnitt "Releases" ausgewählt haben, wird eine **.dll**-Ressource angezeigt, auf die Sie klicken müssen, um den Download zu starten.
![image](https://user-images.githubusercontent.com/17176877/219129751-2303885c-f09f-4513-ad92-699d6bc49546.png)

Und das war's. Sie können nun dem Installationsteil dieses Dokuments folgen, um zu erfahren, wie Sie die **.dll** auf Ihrem Server installieren.

### Installation

Nun wenn die gewünschten Plugins heruntergeladen wurden, dann kann mit der eigentlichen Installation der Plugins angefangen werden. Die Einrichtung der Plugins erfolgt per FTP. Um Dateien auf deinen Server hochladen zu können benötigst du einen FTP-Client. Falls du noch nicht weißt, was FTP ist und wie es funktioniert, dann schaue dir am besten die folgende Anleitung an: [FTP Dateizugriff](https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess/)

![image](https://user-images.githubusercontent.com/26007280/189888621-6734b077-2cc4-4dab-ad6e-a243d7815267.png)

Unter dem ``/gXXXXXX/.config/EXILED/`` Verzeichnis findest du den **Plugins** Ordner. Dort werden deine ausgewählten Plugins dann in das Verzeichnis hochgeladen. Das Ganze kann dann wie folgt aussehen:

![image](https://user-images.githubusercontent.com/26007280/189888652-4c31e683-4185-4bdf-af69-7b4c73f0c027.png)

Mehr muss nicht gemacht werden. Damit ist die Installation bereits abgeschlossen. Im Anschluss kannst du in der Live-Konsole nachschauen, ob das Plugin erfolgreich kompiliert und geladen wurde. Die Ausgabe sollte dann wie folgt aussehen:

![image](https://user-images.githubusercontent.com/26007280/189888682-4fd26a7d-170a-447f-8b05-99253becf5ad.png)

