---
id: fivem_esx_changemoneyicon
title: FiveM ESX Server: Geldicon Ändern
description: Informationen, wie du das Geldicon auf deinem FiveM-Server mit ESX von ZAP-Hosting ändern kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Geldicon Ändern
---

## Mit FTP verbinden

Zuerst muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden.

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden.

![image](https://user-images.githubusercontent.com/13604413/159166832-2e63233a-f386-4d87-8481-873bfad56f4c.png)

Hier öffnen wir im `server-data` Ordner die server.cfg Datei

## Config Editieren

Nun fügen wir über der `start essentialmode` Zeile Folgendes ein:

```Lua
set es_moneyIcon "$"
```

Hier können wir nun das $ mit unserem eigenen Icon ersetzen.

![image](https://user-images.githubusercontent.com/13604413/159166838-80e3974b-9a49-4604-9f85-50c1a5775f41.png)


Nach einem Serverneustart wird das Geldicon Ingame Sichtbar sein.
