---
id: fivem-esx-disableinventory
title: "FiveM: Inventar (F2) deaktivieren"
description: Informationen, wie du das Inventar auf deinem FiveM-Server mit ESX von ZAP-Hosting deaktivieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Inventar (F2) deaktivieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mit FTP verbinden

Bevor wir das Inventar deaktivieren können, muss der [FTP-Zugang](gameserver-ftpaccess.md) eingerichtet werden. Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![image](https://screensaver01.zap-hosting.com/index.php/s/T4noj9BnKDD2R2r/preview)


## Änderungen Vornehmen

Nun öffnen wir den `server-data/resources/[esx]` Pfad, hier finden wir einen es_extended Ordner:

![image](https://screensaver01.zap-hosting.com/index.php/s/giexwAPkHxpZ7RB/preview)

In diesem Ordner öffnen wir nun die `config.lua` Datei.

Nachdem wir diese Datei in einem Texteditor geöffnet haben, suchen wir nach folgendem Code:

```Lua
Config.EnableDefaultInventory   = true
```

Das ersetzen wir nun hiermit:

```Lua
Config.EnableDefaultInventory   = false
```


Nun können wir die Datei abspeichern und den Server neu starten, nachdem wir den Server gejoint sind, kann das Inventar nun nicht mehr geöffnet werden.
