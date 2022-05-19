---
id: fivem_esx_disableinventory
title: FiveM ESX Server: Disable inventory (F2)
DESCRIPTIONS: Information on how to disable inventory on your FiveM server running ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Deactivate the Inventory (F2)
---


## Connect to FTP

Before we can deactivate the inventory, the [FTP access](gameserver_ftpaccess.md) must be set up.

After this has been set up, you can now connect and open the server folder:

![image](https://user-images.githubusercontent.com/13604413/159166925-5cadf617-bda1-4a9c-9536-5d24fecb88e1.png)


## Makig the Changes

Now we open the `server-data/resources/[esx]` path, here we find an es_extended folder:

![image](https://user-images.githubusercontent.com/13604413/159166929-13142744-b36f-4d41-a55e-400d9088c673.png)

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
