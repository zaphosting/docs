---
id: fivem-installeup
title: "FiveM: EUP (Emergency Uniform Pack) installieren"
description: Informationen zur Installation von EUP auf deinem FiveM Server von ZAP-Hosting.com - ZAP-Hosting.com Dokumentation
sidebar_label: EUP installieren
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

**EUP**, auch bekannt als Emergency Uniform Pack, ermöglicht es dir, Uniformen der Notfalldienste auf einem Charakter im freien Modus zu haben. Im Folgenden wird im Detail erklärt, wie genau du es installieren kannst. 

:::warning Element Club Abonnement erforderlich
Um EUP zu installieren und zu verwenden, ist ein Element Club Abonnement erforderlich. Hol dir dein eigenes Abonnement im [Cfx.re Portal](https://portal.cfx.re/subscriptions/element-club)! 
:::

<InlineVoucher />



## Vorbereitung

Um die Installation von **EUP** zu starten, müssen zunächst ein paar Vorbereitungen getroffen werden. Dazu müssen [EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) und [NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip) heruntergeladen und auf dem eigenen Computer entpackt werden. Nachdem du die Dateien heruntergeladen hast, solltest du die folgenden ZIP-Dateien erhalten haben:

- `eup-ui.7z`
- `eup-stream.7z` 
- `NativeUI-master.zip`

Entpacke diese Dateien nun lokal auf deinem Computer. Es sollten nun eine `__resource.lua` oder `fxmanifest.lua` und `script files/folders` enthalten sein.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
Für NativeUI muss zunächst der Ordner „NativeUI-master“ geöffnet werden, dort findest du die korrekten Skripte. Wenn dies nicht der Fall ist, befinden sich diese möglicherweise in einem Unterordner, in der Regel mit dem gleichen Namen.
:::

## Installation
Nun bist du bereit, die Installation zu starten. Verbinde dich dazu mit deinem Server per [FTP](gameserver-ftpaccess.md) und lade die Dateien hoch. Die Dateien/Ordner müssen in das Verzeichnis `resources` hochgeladen werden. Du findest das Verzeichnis in der folgenden Verzeichnisstruktur: 

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## Konfiguration

Damit die installierten Ressourcen geladen werden können, müssen diese in der Serverkonfigurationsdatei angegeben werden. Logge dich dazu in das txAdmin Interface ein und navigiere zum CFG-Editor. 

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## Abschluss

Du hast EUP erfolgreich auf deinem FiveM Server installiert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
