---
id: rust_plugins
title: Rust: Plugins auf Server installieren
description: Informationen, wie du Plugins auf deinen Rust-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Plugins installieren
---



## Plugins installieren

Mit Plugins hast du die Möglichkeit deinen Server noch individueller anzupassen. Im Folgenden wird erklärt wo du die beliebtesten Servers-Plugins finden kannst und wie du diese eingerichtet werden. 

![img](https://screensaver01.zap-hosting.com/index.php/s/X4eRi9rjjPMF9Fg/preview)



### Vorbereitung

Zunächst einmal müssen die Plugins heruntergeladen werden, die auf dem Server installiert werden sollen. Eine große Auswahl an Plugins findest du unter [umod.org (ehemals OXIDE)](https://umod.org/plugins). Beim Download erhältst du dann eine **.cs** Datei. 

![image-20201222180543420](C:\Users\fgalz\AppData\Roaming\Typora\typora-user-images\image-20201222180543420.png)



### Installation

Nun wenn die gewünschten Plugins heruntergeladen wurden, dann kann mit der eigentlichen Installation der Plugins angefangen werden. Die Einrichtung der Plugins erfolgt per FTP. Um Dateien auf deinen Server hochladen zu können benötigst du einen FTP-Client. Falls du noch nicht weißt, was FTP ist und wie es funktioniert, dann schaue dir am besten die folgende Anleitung an: [FTP Dateizugriff](https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess/)

![img](https://screensaver01.zap-hosting.com/index.php/s/3y9xNS7CHi64427/preview)

Unter dem ``/gXXXXXX/rust-oxide/oxide`` Verzeichnis findest du den **Plugins** Ordner. Dort werden deine ausgewählten Plugins dann in das Verzeichnis hochgeladen. Das Ganze kann dann wie folgt aussehen:

![img](https://screensaver01.zap-hosting.com/index.php/s/cBPsqnG7GtKsidH/preview)

Mehr muss nicht gemacht werden. Damit ist die Installation bereits abgeschlossen. Im Anschluss kannst du in der Live-Konsole nachschauen, ob das Plugin erfolgreich kompiliert und geladen wurde. Die Ausgabe sollte dann wie folgt aussehen:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```

