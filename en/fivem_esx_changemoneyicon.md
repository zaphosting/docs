---
id: fivem_esx_changemoneyicon
title: FiveM ESX Server: Change money icon
description: Information on how to change the money icon on your FiveM server with ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Change Money Icon
---

## Connect with FTP

First the [FTP access](gameserver_ftpaccess.md) must be set up.


After this has been set up, you can now connect and open the server folder.

![image](https://user-images.githubusercontent.com/13604413/159166832-2e63233a-f386-4d87-8481-873bfad56f4c.png)


Here we open the `server.cfg` file in the `server-data` folder.

## Edit Config

Now we add the following above the `start essentialmode` line:

```Lua
set es_moneyIcon "$"
```

Here we can now replace the $ with our own icon.

![image](https://user-images.githubusercontent.com/13604413/159166838-80e3974b-9a49-4604-9f85-50c1a5775f41.png)


After Saving the File and Restarting the server, the Money Icon will be changed ingame.
