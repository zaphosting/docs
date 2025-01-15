---
id: fivem-esx-disableinventory
title: "FiveM: Inventar (F2) deaktivieren"
description: Informationen, wie du das Inventar auf deinem FiveM-Server mit ESX von ZAP-Hosting deaktivieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Inventar (F2) deaktivieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archiviert - Grund
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, nicht mehr korrekt oder nicht mehr auf dem neuesten Stand sind. Es wurde aus den folgenden Gründen archiviert:

**Grund**: Die Methode zur Umsetzung ist für eine veraltete ESX-Version. Dieser Ansatz kann nicht für die aktuelle ESX-Version verwendet werden, da sich die Struktur verändert hat. 
::::



<InlineVoucher />

## Mit FTP verbinden

Bevor wir das Inventar deaktivieren können, muss der [Zugriff per FTP](gameserver-ftpaccess.md) eingerichtet werden. Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/T4noj9BnKDD2R2r/preview)


## Änderungen Vornehmen

Nun öffnen wir den `server-data/resources/[esx]` Pfad, hier finden wir einen es_extended Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/giexwAPkHxpZ7RB/preview)

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
