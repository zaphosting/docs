---
id: fivem_installresources
title: FiveM: Resourcen, Mods und Scripts auf Server installieren
description: Informationen, wie du Ressourcen, Mods und Scripts auf deinen FiveM-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Resourcen Installieren
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/V7us5V6KLho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Mit FTP verbinden

Bevor Resourcen installiert werden können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden


## Vorbereitung

Nachdem eine Resource runtergeladen wurde, ist diese normalerweise ZIP-Gepackt, diese muss nun entpackt werden (z. B. mit 7Zip, WinRar oder WinZip)


Nachdem die Resource entpackt wurde, sollte darin nun eine __resource.lua oder fxmanifest.lua und Script Files/Ordner sein.


> Wenn dies nicht der Fall ist, befinden sich diese ggf. in einem Unterordner, meist mit dem gleichen Namen.

## Resourcen hochladen


Um mit WinSCP Resourcen zu installieren, können diese über drag&drop in den "resources" Ordner hochgeladen werden

Nachdem diese hochgeladen wurde, muss die server.cfg im server-data Ordner geöffnet werden

Unter den restlichen Starteinträgen für Ressourcen kann nun der Eintrag für unsere resource, in diesem Fall "eup-ui", hinzugefügt werden:


```
start eup-ui
```

> Beachte: Es muss der Name des Ordners eingetragen werden.


Danach kann der Server neugestartet werden und die Resource sollte ingame erscheinen!
