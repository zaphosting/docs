---
id: altv_installresources
title: AltV: Resourcen auf dem Server installieren
description: Wie installiere ich Mods und Resourcen auf einen AltV-Server? ZAP-Hosting.com Dokumentationen
sidebar_label: Resourcen Installieren
---

## Mit FTP verbinden

Bevor Resourcen installiert werden können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/bSWG3XSxEH9PHGK/preview)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/DGaqtfaeCw6GAcG/preview)


## Vorbereitung

Nachdem eine Resource runtergeladen wurde, ist diese normalerweise ZIP-Gepackt, diese muss nun entpackt werden (z. B. mit 7Zip, WinRar oder WinZip)

![](https://screensaver01.zap-hosting.com/index.php/s/JzPqe7yHCo6JBPc/preview)

Nachdem die Resource entpackt wurde, sollte darin nun eine resource.cfg und Script Files/Ordner sein.

![](https://screensaver01.zap-hosting.com/index.php/s/CkeDn8JSNKbazcM/preview)

> Wenn dies nicht der Fall ist, befinden sich diese ggf. in einem Unterordner, meist mit dem gleichen Namen.

## Resourcen hochladen


Um mit WinSCP Resourcen zu installieren, können diese über drag&drop in den "resources" Ordner hochgeladen werden

![](https://screensaver01.zap-hosting.com/index.php/s/K5LeN4BoLzLBWW9/preview)

Nachdem diese hochgeladen wurde, muss die server.cfg im gta5-altv-linux Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/pzxDsptqpATMXYC/preview)

Unter den restlichen Starteinträgen für Ressourcen kann nun der Eintrag für unsere resource, in diesem Fall "altv-speedo", hinzugefügt werden:


![](https://screensaver01.zap-hosting.com/index.php/s/kzYqaZsr7Lr4sfA/preview)

> Beachte: Es muss nach jeder Zeile in dieser liste, außer bei der letzten, ein Komma stehen.


Danach kann der Server neugestartet werden und die Resource sollte ingame erscheinen!
