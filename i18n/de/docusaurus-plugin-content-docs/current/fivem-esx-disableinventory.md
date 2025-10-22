---
id: fivem-esx-disableinventory
title: "FiveM: Inventar deaktivieren (F2)"
description: "Entdecke, wie du das Standard-Inventar in ESX deaktivierst, um dein Servererlebnis anzupassen → Jetzt mehr erfahren"
sidebar_label: Inventar deaktivieren (F2)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archivierte Anleitung
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, fehlerhaft oder veraltet sind. Es wurde aus folgenden Gründen archiviert:

**Grund**: Die Umsetzungs-Methode bezieht sich auf eine veraltete ESX-Version. Dieser Ansatz funktioniert nicht mit der aktuellen ESX-Version, da sich die Struktur geändert hat. 
::::

<InlineVoucher />

## Mit FTP verbinden

Bevor wir das Inventar deaktivieren können, muss der [Zugang via FTP](gameserver-ftpaccess.md) eingerichtet sein.

Nachdem das erledigt ist, kannst du dich verbinden und den Server-Ordner öffnen:

![](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## Änderungen vornehmen

Jetzt öffnen wir den Pfad `server-data/resources/[esx]`, hier findest du den Ordner es_extended:

![](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

In diesem Ordner öffnen wir die Datei `config.lua`.

Nachdem du die Datei in einem Texteditor geöffnet hast, suchst du nach folgendem Code:

```Lua
Config.EnableDefaultInventory   = true -- Display the default Inventory ( F2 )
```

Diesen ersetzt du durch:

```Lua
Config.EnableDefaultInventory   = false
```


Jetzt kannst du die Datei speichern und den Server neu starten. Sobald du dem Server beitrittst, lässt sich das Inventar nicht mehr öffnen.

<InlineVoucher />