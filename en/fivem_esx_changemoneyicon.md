---
id: fivem_esx_changemoneyicon
title: FiveM ESX Server: Change money icon
description: Information on how to change the money icon on your FiveM server with ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Change Money Icon
---

## Connect with FTP

First the [FTP access](gameserver_ftpaccess.md) must be set up.


After this has been set up, you can now connect and open the server folder.


Here we open the `server.cfg` file in the `server-data` folder.

## Edit Config

Now we add the following above the `start essentialmode` line:

```Lua
set es_moneyIcon "$"
```

Here we can now replace the $ with our own icon.

After Saving the File and Restarting the server, the Money Icon will be changed ingame.
