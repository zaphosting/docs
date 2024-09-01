---
id: rust-plugins
title: "Rust: Installation von Plugins"
description: Informationen, wie du Plugins auf deinen Rust-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Plugins installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Plugins installieren

Mit Plugins hast du die Möglichkeit, deinen Server noch individueller anzupassen. Im Folgenden wird erklärt, wo du die beliebtesten Servers-Plugins finden kannst und wie du diese eingerichtet werden. 

<InlineVoucher />

### Vorbereitung

Zunächst einmal müssen die Plugins heruntergeladen werden, die auf dem Server installiert werden sollen. Eine große Auswahl an Plugins findest du unter [umod.org (ehemals OXIDE)](https://umod.org/plugins). Beim Download erhältst du dann eine **.cs** Datei. 

![image](https://screensaver01.zap-hosting.com/index.php/s/7ZoxqBEMiMYMbqP/preview)



### Installation

Nun, wenn die gewünschten Plugins heruntergeladen wurden, dann kann mit der eigentlichen Installation der Plugins angefangen werden. Die Einrichtung der Plugins erfolgt per FTP. Um Dateien auf deinen Server hochladen zu können, benötigst du einen FTP-Client. Falls du noch nicht weißt, was FTP ist und wie es funktioniert, dann schaue dir am besten die folgende Anleitung an: [FTP Dateizugriff](gameserver-ftpaccess.md)

![image](https://screensaver01.zap-hosting.com/index.php/s/BJ5m72WYox4wRdC/preview)

Unter dem ``/gXXXXXX/rust-oxide/oxide`` Verzeichnis findest du den **Plugins** Ordner. Dort werden deine ausgewählten Plugins dann in das Verzeichnis hochgeladen. Das Ganze kann dann wie folgt aussehen:

![image](https://screensaver01.zap-hosting.com/index.php/s/9XfHDR7WN7cfCRF/preview)

Mehr muss nicht gemacht werden. Damit ist die Installation bereits abgeschlossen. Im Anschluss kannst du in der Live-Konsole nachschauen, ob das Plugin erfolgreich kompiliert und geladen wurde. Die Ausgabe sollte dann wie folgt aussehen:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```

