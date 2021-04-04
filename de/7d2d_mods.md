---
id: 7d2d_mods
title: Mods installieren
sidebar_label: Mods installieren

---



## Mods installieren

Mit Mods hast du die Möglichkeit deinen Server noch individueller anzupassen. Im Folgenden wird erklärt wo du die beliebtesten Servers-Mods finden kannst und wie du diese eingerichtet werden. Mit der Einführung von Alpha 17 Experimental wurde das Konzept der Modlets eingeführt. Modlets sind kleinere Mods, die die Vanilla-XML-Dateien nicht überschreiben, sondern aus dem Mods-Ordner geladen werden. 

![img](https://screensaver01.zap-hosting.com/index.php/s/PZrznCSngrDLLS5/preview)



## Vorbereitung

Zunächst einmal müssen die Mods heruntergeladen werden, die auf dem Server installiert werden sollen. Eine große Auswahl an Mods findest du unter [7daystodiemods.com](https://7daystodiemods.com/). Dort findest du mehr als 1000 Mods und es kommen regelmäßig weitere dazu. Wenn du einen Mod heruntergeladen hast, dann sollte er in der Regel folgende Dateistruktur aufweisen:

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```



## Installation

Nun wenn die gewünschten Mods heruntergeladen wurden, dann kann mit der eigentlichen Installation der Mods begonnen werden. Die Einrichtung der Mods erfolgt per FTP. Um Dateien auf deinen Server hochladen zu können benötigst du einen FTP-Client. Falls du noch nicht weißt, was FTP ist und wie es funktioniert, dann schaue dir am besten die folgende Anleitung an: [FTP Dateizugriff](https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess/)

![img](https://screensaver01.zap-hosting.com/index.php/s/kLkYQWnc3iX7kQy/preview)



Unter dem ``/gXXXXX4/7dtd-linux-exp/`` Verzeichnis muss nun ein Ordner mit dem Namen **Mods** angelegt werden. Mache dafür einen Rechtsklick und klicke auf Ordner erstellen. 

![img](https://screensaver01.zap-hosting.com/index.php/s/RHdrMsmcZwEJQgo/preview)



Im Anschluss werden dann die Dateien des Mods in das Mods-Verzeichnis hochgeladen:

![img](https://screensaver01.zap-hosting.com/index.php/s/rQksDePnQCGJ5zX/preview)



Damit ist die Installation des Mods bereits erledigt. Beim nächsten Serverstart sollten die Mods dann automatisch geladen werden. 
