---
id: cs16_plugins
title: Counter-Strike 1.6: Plugins auf dem eigenen Server installieren
description: Informationen, wie du Plugins auf deinem CS 1.6-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Plugins installieren

---



## AMXmodX / Metamod installation

Um Plugins auf einem Counter-Strike 1.6 Server zu installieren wird **AMXmodX** und **Metamod** benötigt. Dies sind zwei Half Life Erweiterungen, welche es ermöglichen den Server noch mehr als üblich zu individualisieren. Dazu gehört zum Beispiel die Nutzung von Plugins und eine erweitere Administration deines Servers.

<img src="C:\Users\fgalz\AppData\Roaming\Typora\typora-user-images\image-20201222152046149.png" alt="image-20201222152046149" style="zoom: 80%;" />



### Vorbereitung

Zunächst einmal werden die eigentlichen Erweiterungen benötigt. Die Erweiterungen können auf [amxmodx.org](https://www.amxmodx.org/downloads.php heruntergeladen werden. Hierbei ist es wichtig immer die neusten Versionen (**stable**) zu benutzen, damit diese auch noch voll funktionsfähig bzw. kompatibel sind.

![img](https://screensaver01.zap-hosting.com/index.php/s/AiDZ3HwYsnZQfat/preview)

Es werden die Linux Pakete **AMX Mod X Base, Counter-Strike Addon und Metamod** benötigt. Diese laden wir dort herunter. Im Anschluss solltest du drei gepackte Dateien heruntergeladen haben. Diese entpackst du auf deinem Computer. Dadurch solltest du einen Addons Ordner erhalten, indem sich ein **amxmodx** und **metamod** Ordner befindet: 

![img](https://screensaver01.zap-hosting.com/index.php/s/3k8pZqmxSpqCZT6/preview)



### Installation

Wenn die oben genannten Schritte abgeschlossen sind, dann geht es an die eigentliche Installation. Die Dateien müssen per FTP auf deinen Server hochgeladen werden. Um Dateien auf deinen Server hochladen zu können benötigst du einen FTP-Client. Falls du noch nicht weißt, was FTP ist und wie es funktioniert, dann schaue dir am besten die folgende Anleitung an: [FTP Dateizugriff](https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess/)



Dort angelangt. wird nun der **addons** Ordner in das Hauptverzeichnis des Servers hochgeladen. Die Dateistruktur des Ordners sollte im Anschluss dann wie folgt aussehen:

![img](https://screensaver01.zap-hosting.com/index.php/s/HPNGdqPkd2NYrrG/preview)



Damit ist die Einrichtung von **AMXmodX** und **Metamod** abgeschlossen. Du kannst dich mit deinem Server im Spiel verbinden und in der Konsole mit dem ``amxx version`` Befehl prüfen, ob AMX erfolgreich installiert wurde. Die Ausgabe sollte wie folgt aussehen:

```
AMX Mod X 1.8.2
Authors: ....
Compiled: Feb 14 2013, 00:56:31
URL:http://www.amxmodx.org/
Core mode: JIT
```

Wenn dort lediglich **Befehl wurde nicht erkannt steht**, dann ist bei der Installation etwas schief gelaufen. 



## Plugins installieren

### Vorbereitung

Nachdem die Einrichtung von **AMXmodX** und **Metamod** abgeschlossen ist und diese auch funktioniert kann mit der Installation von Plugins begonnen werden.  Zunächst einmal müssen die Plugins heruntergeladen werden, die auf dem Server installiert werden sollen. Eine große Auswahl an Plugins findest du unter [amxmodx.org](https://www.amxmodx.org/compiler.php). Dort wurden über die Jahre zahlreiche Plugins veröffentlicht und es kommen immer noch regelmäßig weitere dazu. Bei den jeweiligen Plugins wird die **.amxx** Datei benötigt. 



### Installation

Nun wenn die gewünschten Plugins heruntergeladen wurden, dann kann mit der eigentlichen Installation der Plugins begonnen werden. Die Einrichtung der Plugins erfolgt ebenfalls per FTP. Die Plugin-Dateien werde nun in das Plugins Verzeichnis unter ``../addons/amx`` hochgeladen. 

![img](https://screensaver01.zap-hosting.com/index.php/s/n8edxdbEfqrr6EZ/preview)



![img](https://screensaver01.zap-hosting.com/index.php/s/pZMZEwcB5NoGt4o/preview)



Beim nächsten Serverstart sollten die hochgeladenen Plugins dann automatisch geladen werden. 
