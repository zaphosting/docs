---
id: fivem_vrp_removespeedo
title: FiveM VRP Server: Speedometer entfernen
description: Informationen, wie du den Speedometer bei deinem FiveM-Server mit VRP von ZAP-Hosting entfernen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Speedometer Entfernen
---

> Erzwinge Überschreiben muss zum Editieren der Scripts deaktiviert werden, sonst werden alle änderungen mit der offiziellen version überschrieben.

## Mit FTP verbinden

Zuerst muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/spb2ZfNNS9e5Dia/preview)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/QoXf3iSZirN7Ndy/preview)

Hier öffnen wir folgenden pfad: `gta5-fivem/server-data/resources/CustomScripts/cfg/config.lua`


## Config Editieren

In der config.lua, um das Speedometer zu deaktivieren, können wir folgende Zeile editieren:

`cfg.speedometer = true`

Hier setzen wir einfach "true" auf "false", und speichern die Datei ab.

Nach einem Serverneustart wird das Speedometer Ingame deaktiviert sein.
