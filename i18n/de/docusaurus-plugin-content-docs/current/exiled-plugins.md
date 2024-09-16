---
id: exiled-plugins
title: Plugins auf Server installieren
description: Informationen, wie du Plugins auf deinen Exiled Gameserver von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Plugins installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Plugins installieren

Mit Plugins hast du die Möglichkeit, deinen Server noch individueller anzupassen. Im Folgenden wird erklärt, wo du die beliebtesten Servers-Plugins finden kannst und wie du diese eingerichtet werden. 

### Vorbereitung

Zunächst einmal musst du die Plugins herunterladen, die auf deinem Server installiert werden sollen. Eine große Auswahl an Plugins findest du auf der EXILED-Seite (https://github.com/Exiled-Team). Sobald du das Plugin-Repo ausgewählt hast, erscheint auf der Seite ein Abschnitt "Releases", über den du auf eine Download-Seite gelangst; Anweisungen dazu findest du unten.

### Herunterladen eines Plugins
Plugins können von vielen Quellen für deinen Server heruntergeladen werden. Diese sind jedoch nur als die sichersten Optionen anerkannt. Bitte sei vorsichtig, welche Plugins du auf deinem Gameserver installierst - überprüfe immer die Quelle des Plugins, indem du nach den Entwicklern suchst und was das Plugin tatsächlich tut.

## Option 1 über die SCPSL-Website herunterladen
Unter (https://plugins.scpslgame.com/) findest du eine Liste von Plugins, die für die Verwendung in SCPSL zur Verfügung stehen, mit einem Github Repo Link. Die Option 2 erklärt, was zu tun ist.
(Zum Zeitpunkt des Verfassens dieses Artikels ist die Seite neu und wird gerade überarbeitet, daher wurde Option 2 bereitgestellt)

## Option 2 über Github herunterladen
Um ein Plugin über Github herunterzuladen, musst du zum EXILED Github gehen, wie unten gezeigt, und ein Plugin-Repository auswählen.
![image](https://screensaver01.zap-hosting.com/index.php/s/GJWWsbbNPry2Sgc/preview)

Sobald du das Plugin-Repository gefunden hast, das du herunterladen möchtest, erscheint auf der rechten Seite ein Abschnitt mit den Veröffentlichungen.
![image](https://screensaver01.zap-hosting.com/index.php/s/83GHkFKigg5BR5a/preview)

Sobald du den Abschnitt "Releases" ausgewählt hast, wird eine .dll-Ressource angezeigt, auf die du klicken musst, um den Download zu starten.
![image](https://screensaver01.zap-hosting.com/index.php/s/ycWDs557E6PmZCm/preview)

Und das war's. Du kannst nun dem Installationsteil dieses Dokuments folgen, um zu erfahren, wie du die .dll auf deinem Server installierst.

### Installation

Jetzt, wenn die gewünschten Plugins heruntergeladen wurden, dann kann mit der eigentlichen Installation der Plugins angefangen werden. Die Einrichtung der Plugins erfolgt per FTP. Um Dateien auf deinen Server hochladen zu können, benötigst du einen FTP-Client. Falls du noch nicht weißt, was FTP ist und wie es funktioniert, dann schaue dir am besten die folgende Anleitung an: [Zugriff per FTP](gameserver-ftpaccess.md)

![image](https://screensaver01.zap-hosting.com/index.php/s/EwDMrFxGazMeWkB/preview)

Unter dem ``/gXXXXXX/.config/EXILED/`` Verzeichnis findest du den **Plugins** Ordner. Dort werden deine ausgewählten Plugins dann in das Verzeichnis hochgeladen. Das Ganze kann dann wie folgt aussehen:

![image](https://screensaver01.zap-hosting.com/index.php/s/ybicJCJAMZn5xyW/preview)

Mehr muss nicht gemacht werden. Damit ist die Installation bereits abgeschlossen. Im Anschluss kannst du in der Live-Konsole nachschauen, ob das Plugin erfolgreich kompiliert und geladen wurde. Die Ausgabe sollte dann wie folgt aussehen:

![image](https://screensaver01.zap-hosting.com/index.php/s/P9oW3CWyfaiaWTq/preview)