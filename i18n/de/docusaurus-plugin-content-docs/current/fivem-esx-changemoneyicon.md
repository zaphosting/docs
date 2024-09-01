---
id: fivem-esx-changemoneyicon
title: "FiveM: Geldicon Ändern"
description: Informationen, wie du das Geldicon auf deinem FiveM Server mit ESX von ZAP-Hosting ändern kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Geldicon ändern
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mit FTP verbinden

Zuerst muss der [FTP-Zugang](gameserver-ftpaccess.md) eingerichtet werden.

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden.

![image](https://screensaver01.zap-hosting.com/index.php/s/kWm34ZRyYrs3dt6/preview)

Hier öffnen wir im `server-data` Ordner die server.cfg Datei

## Config Editieren

Nun fügen wir über der `start essentialmode` Zeile Folgendes ein:

```Lua
set es_moneyIcon "$"
```

Hier können wir jetzt das $ mit unserem eigenen Icon ersetzen.

![image](https://screensaver01.zap-hosting.com/index.php/s/M6SpD2wiMTWoXCG/preview)


Nach einem Serverneustart wird das Geldicon im Spiel sichtbar sein.
