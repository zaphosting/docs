---
id: fivem_installresources
title: Resourcen Installieren
sidebar_label: Resourcen Installieren
---

## Mit FTP verbinden

Bevor Resourcen installiert werden können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/ekYw27nA4cgiNAk/preview)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/omjKDgFcn64rRMF/preview)


## Vorbereitung

Nachdem eine Resource runtergeladen wurde, ist diese normalerweise ZIP-Gepackt, diese muss nun entpackt werden (z. B. mit 7Zip, WinRar oder WinZip)

![](https://screensaver01.zap-hosting.com/index.php/s/pEmFn5CCmxCGjT6/preview)

Nachdem die Resource entpackt wurde, sollte darin nun eine __resource.lua oder fxmanifest.lua und Script Files/Ordner sein.

![](https://screensaver01.zap-hosting.com/index.php/s/5ktPAckBr6bd8eP/preview)

> Wenn dies nicht der Fall ist, befinden sich diese ggf. in einem Unterordner, meist mit dem gleichen Namen.

## Resourcen hochladen


Um mit WinSCP Resourcen zu installieren, können diese über drag&drop in den "resources" Ordner hochgeladen werden

![](https://screensaver01.zap-hosting.com/index.php/s/WTXHzAgDqcDqQR4/preview)

Nachdem diese hochgeladen wurde, muss die server.cfg im server-data Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/eM8MtkZJCLg3gdz/preview)

Unter den restlichen Starteinträgen für Ressourcen kann nun der Eintrag für unsere resource, in diesem Fall "SexySpeedometer-FiveM-master", hinzugefügt werden:


![](https://screensaver01.zap-hosting.com/index.php/s/bG6MFNZtsebkscm/preview)

> Beachte: Es muss der Name des Ordners eingetragen werden.


Danach kann der Server neugestartet werden und die Resource sollte ingame erscheinen!