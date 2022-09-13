---
id: exiled_plugins
title: EXILED: Plugins auf Server installieren
description: Informationen, wie du Plugins auf deinen Exiled Gameserver von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Plugins installieren
---


## 🔧 Plugins installieren

Mit Plugins hast du die Möglichkeit deinen Server noch individueller anzupassen. Im Folgenden wird erklärt wo du die beliebtesten Servers-Plugins finden kannst und wie du diese eingerichtet werden. 



### Vorbereitung

Zunächst einmal müssen die Plugins heruntergeladen werden, die auf dem Server installiert werden sollen. Eine große Auswahl an Plugins findest du unter (https://plugins.exiled.host/). Beim Download erhältst du dann eine **.cs** Datei. 

### Installation

Nun wenn die gewünschten Plugins heruntergeladen wurden, dann kann mit der eigentlichen Installation der Plugins angefangen werden. Die Einrichtung der Plugins erfolgt per FTP. Um Dateien auf deinen Server hochladen zu können benötigst du einen FTP-Client. Falls du noch nicht weißt, was FTP ist und wie es funktioniert, dann schaue dir am besten die folgende Anleitung an: [FTP Dateizugriff](https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess/)

![image](https://user-images.githubusercontent.com/26007280/189888621-6734b077-2cc4-4dab-ad6e-a243d7815267.png)

Unter dem ``/gXXXXXX/.config/EXILED/`` Verzeichnis findest du den **Plugins** Ordner. Dort werden deine ausgewählten Plugins dann in das Verzeichnis hochgeladen. Das Ganze kann dann wie folgt aussehen:

![image](https://user-images.githubusercontent.com/26007280/189888652-4c31e683-4185-4bdf-af69-7b4c73f0c027.png)

Mehr muss nicht gemacht werden. Damit ist die Installation bereits abgeschlossen. Im Anschluss kannst du in der Live-Konsole nachschauen, ob das Plugin erfolgreich kompiliert und geladen wurde. Die Ausgabe sollte dann wie folgt aussehen:

![image](https://user-images.githubusercontent.com/26007280/189888682-4fd26a7d-170a-447f-8b05-99253becf5ad.png)

