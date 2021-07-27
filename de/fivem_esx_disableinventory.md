---
id: fivem_esx_disableinventory
title: FiveM ESX Server: Inventar (F2) deaktivieren
descriptionen: Informationen, wie du das Inventar auf deinem FiveM-Server mit ESX von ZAP-Hosting deaktivieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Inventar (F2) Deaktivieren
---

## Mit FTP verbinden

Bevor wir das Inventar Deaktivieren können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden.

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/REzpxtQXT4RKfCb/preview)


## Änderungen Vornehmen

Nun öffnen wir den `server-data/resources/[esx]` Pfad, hier finden wie einen es_extended Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/w4y7sPz5NmDD2Jw/preview)

In diesem Ordner öffnen wir nun die `config.lua` Datei.

Nachdem wir diese Datei in einem Texteditor geöffnet haben, suchen wir nach folgendem Code:

```Lua
Config.EnableDefaultInventory   = true
```

Das ersetzen wir nun hiermit:

```Lua
Config.EnableDefaultInventory   = false
```


Nun können wir die Datei Abspeichern und den Server neustarten, nachdem wir den Server gejoint sind, kann das Inventar nun nicht mehr geöffnet werden.
