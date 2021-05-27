---
id: altv_installresources
title: AltV: Resourcen auf dem Server installieren
description: Wie installiere ich Mods und Resourcen auf einen AltV-Server? ZAP-Hosting.com Dokumentationen
sidebar_label: Resourcen Installieren
---

## Mit FTP verbinden

Bevor Resourcen installiert werden können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/PkowAdzot9tjZeY/preview)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/8woxZSd6tzJm7Rj/preview)


## Vorbereitung

Nachdem eine Resource runtergeladen wurde, ist diese normalerweise ZIP-Gepackt, diese muss nun entpackt werden (z. B. mit 7Zip, WinRar oder WinZip)

![](https://screensaver01.zap-hosting.com/index.php/s/WnRZCyzXFmnWwHg/preview)

Nachdem die Resource entpackt wurde, sollte darin nun eine resource.cfg und Script Files/Ordner sein.

![](https://screensaver01.zap-hosting.com/index.php/s/R7eHrpFfATDJGKP/preview)

> Wenn dies nicht der Fall ist, befinden sich diese ggf. in einem Unterordner, meist mit dem gleichen Namen.

## Resourcen hochladen


Um mit WinSCP Resourcen zu installieren, können diese über drag&drop in den "resources" Ordner hochgeladen werden

![](https://screensaver01.zap-hosting.com/index.php/s/EMeMGzfkztpsdBa/preview)

Nachdem diese hochgeladen wurde, muss die server.cfg im gta5-altv-linux Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/SLrK2rKnAmg8Fq4/preview)

Unter den restlichen Starteinträgen für Ressourcen kann nun der Eintrag für unsere resource, in diesem Fall "altv-speedo", hinzugefügt werden:


![](https://screensaver01.zap-hosting.com/index.php/s/Jqo9fX33LxqzS2d/preview)

> Beachte: Es muss nach jeder Zeile in dieser liste, außer bei der letzten, ein Komma stehen.


Danach kann der Server neugestartet werden und die Resource sollte ingame erscheinen!
