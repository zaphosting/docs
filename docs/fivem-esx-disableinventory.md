---
id: fivem-esx-disableinventory
title: "FiveM: Disable inventory (F2)"
description: Information on how to disable inventory on your FiveM server running ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Deactivate the Inventory (F2)
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connect to FTP

Before we can deactivate the inventory, the [FTP access](gameserver-ftpaccess.md) must be set up.

After this has been set up, you can now connect and open the server folder:

![image](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## Makig the Changes

Now we open the `server-data/resources/[esx]` path, here we find an es_extended folder:

![image](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

In this folder we now open the `config.lua` file.

After we have opened this file in a text editor, we look for the following code:

```Lua
Config.EnableDefaultInventory   = true -- Display the default Inventory ( F2 )
```

Here we replace this with:

```Lua
Config.EnableDefaultInventory   = false
```


Now we can save the file and restart the server, after we have joined the server, the inventory can no longer be opened.
