---
id: fivem-installeup
title: "FiveM: EUP (Emergency Uniform Pack) installieren"
description: "Entdecke, wie du das Emergency Uniform Pack für Free Mode Charaktere einrichtest – Element Club Abo erforderlich → Jetzt mehr erfahren"
sidebar_label: EUP installieren
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

**EUP**, auch bekannt als Emergency Uniform Pack, ermöglicht dir, Einsatzdienst-Uniformen auf einem Free Mode Charakter zu tragen. Im Folgenden erfährst du genau, wie du das installieren kannst. 

:::warning Element Club Abo erforderlich
Um EUP zu installieren und zu nutzen, benötigst du ein Element Club Abo. Hol dir dein Abo im [Cfx.re Portal](https://portal.cfx.re/subscriptions/element-club)! 
:::

<InlineVoucher />



## Vorbereitung

Für den Start der Installation von **EUP** müssen ein paar Vorbereitungen getroffen werden. Lade dazu [EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) und [NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip) auf deinen Rechner herunter und entpacke sie. Nach dem Download solltest du folgende ZIP-Dateien erhalten haben:

- `eup-ui.7z`
- `eup-stream.7z` 
- `NativeUI-master.zip`

Entpacke diese Dateien jetzt lokal auf deinem Rechner. Im entpackten Ordner sollten sich eine `__resource.lua` oder `fxmanifest.lua` sowie Skriptdateien/-ordner befinden.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
Beim NativeUI musst du zuerst den Ordner "NativeUI-master" öffnen, dort findest du die korrekten Skripte. Falls nicht, könnten sie in einem Unterordner mit gleichem Namen liegen.
:::

## Installation
Jetzt kannst du mit der Installation starten. Verbinde dich dazu per [FTP](gameserver-ftpaccess.md) mit deinem Server und lade die Dateien hoch. Die Dateien/Ordner müssen in das Verzeichnis `resources` hochgeladen werden. Du findest das Verzeichnis unter folgender Struktur:

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## Konfiguration

Damit die installierten Ressourcen geladen werden, müssen sie in der Server-Konfigurationsdatei eingetragen werden. Melde dich dazu im txAdmin Interface an und öffne den CFG Editor.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## Fazit

Du hast EUP erfolgreich auf deinem FiveM Gameserver installiert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂


<InlineVoucher />