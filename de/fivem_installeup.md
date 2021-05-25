---
id: fivem_installeup
title: FiveM: EUP auf Server installieren
description: Informationen, wie du EUP auf deinen FiveM-Server von ZAP-Hosting.com installieren kannst - ZAP-Hosting.com Dokumenationen
sidebar_label: EUP Installieren
---

> Um den EUP zu installieren wird ein Fivem Element Argentum (oder höher) Schlüssel benötigt [Fivem Patreon](https://www.patreon.com/fivem)

## Mit FTP verbinden

Bevor EUP installiert werden kann, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/omjKDgFcn64rRMF/preview)


## Vorbereitung

Nun laden wir EUP von den [FiveM Foren](https://forum.cfx.re/t/release-eup-for-fivem-server-sided/139848) runter.

Außerdem müssen wir [NativeUI herunterladen](https://github.com/FrazzIe/NativeUILua/archive/master.zip)

nachdem wir die `eup-ui.7z`, `eup-stream.7z` und "NativeUI-master.zip" runtergeladen haben, müssen wir diese entpacken:

![](https://screensaver01.zap-hosting.com/index.php/s/5k99WrAfJAktmfm/preview)

> Beachte: Bei NativeUI muss erst der "NativeUI-master" ordner geöffnet werden, dort befinden sich die richtigen scripts.

Nachdem die Resource entpackt wurde, sollte darin nun eine __resource.lua oder fxmanifest.lua und Script Files/Ordner sein.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/2DHfLodNrsyfAk2/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/pLrT8mcgHHjQfcp/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/DTtctZn4cKzEKpo/preview)

> Wenn dies nicht der Fall ist, befinden sich diese ggf. in einem Unterordner, meist mit dem gleichen Namen.

## Resourcen hochladen


Nun installieren wir die resourcen, in unserem beispiel über WinSCP, wir können diese über drag&drop in den "resources" Ordner hochladen

![](https://screensaver01.zap-hosting.com/index.php/s/sFme5NHHxCjGand/preview)

Nachdem diese hochgeladen wurde, muss die server.cfg im server-data Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/eM8MtkZJCLg3gdz/preview)

Unter den restlichen Starteinträgen für Ressourcen kann nun der Eintrag für unsere resources, in diesem Fall "NativeUI", "eup-stream" und "eup-ui", hinzugefügt werden:

![](https://screensaver01.zap-hosting.com/index.php/s/KEojnnKk9WsXR8M/preview)


Danach kann der Server neugestartet werden und EUP sollte Ingame über das `/eup` Command verfügbar sein!
