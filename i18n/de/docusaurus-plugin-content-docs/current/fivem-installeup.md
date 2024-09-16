---
id: fivem-installeup
title: "FiveM: EUP auf Server installieren"
description: Informationen, wie du EUP auf deinen FiveM Server von ZAP-Hosting.com installieren kannst - ZAP-Hosting.com Dokumenationen
sidebar_label: EUP installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Um den EUP zu installieren wird ein Fivem Element Argentum (oder höher) Schlüssel benötigt [Fivem Patreon](https://www.patreon.com/fivem)
:::

<InlineVoucher />

## Mit FTP verbinden

Bevor EUP installiert werden kann, muss der [Zugriff per FTP](gameserver-ftpaccess.md) eingerichtet werden.

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![image](https://screensaver01.zap-hosting.com/index.php/s/2ibFBkpSPnJGBZm/preview)

## Vorbereitung

Nun laden wir EUP von den [FiveM Foren](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) runter.

Außerdem müssen wir [NativeUI herunterladen](https://github.com/FrazzIe/NativeUILua/archive/master.zip)

nachdem wir die `eup-ui.7z`, `eup-stream.7z` und "NativeUI-master.zip" heruntergeladen haben, müssen wir diese entpacken:

![image](https://screensaver01.zap-hosting.com/index.php/s/EkfgRk8LR7YwyFf/preview)

:::info
Beachte: Bei NativeUI muss erst der "NativeUI-master" Ordner geöffnet werden, dort befinden sich die richtigen Scripts.
:::

Nachdem die Ressource entpackt wurde, sollte darin jetzt eine __resource.lua oder fxmanifest.lua und Script Files/Ordner sein.

**eup-ui**
![image](https://screensaver01.zap-hosting.com/index.php/s/bTn3HD6NRm99rTi/preview)

**eup-stream**
![image](https://screensaver01.zap-hosting.com/index.php/s/FoP4t9gEwxkZffA/preview)

**NativeUI**
![image](https://screensaver01.zap-hosting.com/index.php/s/LtZmc9bgdSHDC4F/preview)

:::info
Wenn dies nicht der Fall ist, befinden sich diese ggf. in einem Unterordner, meist mit dem gleichen Namen.
:::

## Ressourcen hochladen


Nun installieren wir die Ressourcen, in unserem Beispiel über WinSCP, wir können diese über Drag & Drop in den "resources" Ordner hochladen

![image](https://screensaver01.zap-hosting.com/index.php/s/MMXks7cDQr6fTBJ/preview)

Nachdem diese hochgeladen wurde, muss die server.cfg im server-data Ordner geöffnet werden:

![image](https://screensaver01.zap-hosting.com/index.php/s/retG8rWTEqLTX7x/preview)


Unter den restlichen Starteinträgen für Ressourcen kann nun der Eintrag für unsere Ressources, in diesem Fall "NativeUI", "eup-stream" und "eup-ui", hinzugefügt werden:

![image](https://screensaver01.zap-hosting.com/index.php/s/XzPdz88zQqoDLd8/preview)


Danach kann der Server neu gestartet werden und EUP sollte Ingame über das `/eup` Befehl verfügbar sein!
