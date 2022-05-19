---
id: fivem_vrp_removespeedo
title: FiveM VRP Server: Speedometer entfernen
description: Informationen, wie du den Speedometer bei deinem FiveM-Server mit VRP von ZAP-Hosting entfernen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Speedometer Entfernen
---

> Erzwinge Überschreiben muss zum Editieren der Scripts deaktiviert werden, sonst werden alle änderungen mit der offiziellen version überschrieben.

## Mit FTP verbinden

Zuerst muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

![image](https://user-images.githubusercontent.com/13604413/159137870-82291650-2fbe-4c53-be81-19f8552069c4.png)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden.

Hier öffnen wir folgenden pfad: `gta5-fivem/server-data/resources/CustomScripts/cfg/config.lua`


## Config Editieren

In der config.lua, um das Speedometer zu deaktivieren, können wir folgende Zeile editieren:

`cfg.speedometer = true`

Hier setzen wir einfach "true" auf "false", und speichern die Datei ab.

Nach einem Serverneustart wird das Speedometer Ingame deaktiviert sein.
