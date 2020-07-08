---
id: fivem_esx_changemoneyicon
title: Change Money Icon
sidebar_label: Change Money Icon
---

## Connect with FTP

First the [FTP access](gameserver_ftpaccess.md) must be set up:

![](https://screensaver01.zap-hosting.com/index.php/s/QAyH2tdjj7cNrwC/preview)

After this has been set up, you can now connect and open the server folder:

![](https://screensaver01.zap-hosting.com/index.php/s/4fdz3BC8QBsBtKA/preview)

Here we open the `server.cfg` file in the `server-data` folder.

## Edit Config

Now we add the following above the `start essentialmode` line:

```Lua
set es_moneyIcon "$"
```

Here we can now replace the $ with our own icon, this should be the final result:

![](https://screensaver01.zap-hosting.com/index.php/s/xEkwonYzkFDoHYw/preview)

After Saving the File and Restarting the server, the Money Icon will be changed ingame.
