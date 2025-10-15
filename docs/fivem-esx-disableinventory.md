---
id: fivem-esx-disableinventory
title: "FiveM: Disable inventory (F2)"
description: "Discover how to disable the default inventory in ESX to customize your server experience → Learn more now"
sidebar_label: Deactivate the Inventory (F2)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archived Guide
This document has been archived. Documents are archived if they are no longer relevant, incorrect or up to date. It has been archived for the following reasons:

**Reason**: The method of realization is for an outdated ESX version. This approach cannot be used for the current ESX version, as the structure has changed. 
::::

<InlineVoucher />

## Connect to FTP

Before we can deactivate the inventory, the [Access via FTP](gameserver-ftpaccess.md) must be set up.

After this has been set up, you can now connect and open the server folder:

![](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## Makig the Changes

Now we open the `server-data/resources/[esx]` path, here we find an es_extended folder:

![](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

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

<InlineVoucher />
