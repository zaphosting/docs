---
id: fivem_esx_disableinventory
title: FiveM ESX Server: Inventar (F2) deaktivieren
descriptionen: Informationen, wie du das Inventar auf deinem FiveM-Server mit ESX von ZAP-Hosting deaktivieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Inventar (F2) Deaktivieren
---

## Mit FTP verbinden

Bevor wir das Inventar Deaktivieren können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden.

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![image](https://user-images.githubusercontent.com/13604413/159166925-5cadf617-bda1-4a9c-9536-5d24fecb88e1.png)


## Änderungen Vornehmen

Nun öffnen wir den `server-data/resources/[esx]` Pfad, hier finden wie einen es_extended Ordner:

![image](https://user-images.githubusercontent.com/13604413/159166929-13142744-b36f-4d41-a55e-400d9088c673.png)

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
