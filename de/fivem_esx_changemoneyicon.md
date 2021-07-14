---
id: fivem_esx_changemoneyicon
title: FiveM ESX Server: Geldicon Ändern
description: Informationen, wie du das Geldicon auf deinem FiveM-Server mit ESX von ZAP-Hosting ändern kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Geldicon Ändern
---

## Mit FTP verbinden

Zuerst muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden.

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden.

Hier öffnen wir im `server-data` Ordner die server.cfg Datei

## Config Editieren

Nun fügen wir über der `start essentialmode` Zeile Folgendes ein:

```Lua
set es_moneyIcon "$"
```

Hier können wir nun das $ mit unserem eigenen Icon ersetzen.


Nach einem Serverneustart wird das Geldicon Ingame Sichtbar sein.
