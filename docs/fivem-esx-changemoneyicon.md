---
id: fivem-esx-changemoneyicon
title: "FiveM: Change money icon"
description: Information on how to change the money icon on your FiveM server with ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Change Money Icon
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connect with FTP

First the [Access via FTP](gameserver-ftpaccess.md) must be set up.


After this has been set up, you can now connect and open the server folder.

![image](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


Here we open the `server.cfg` file in the `server-data` folder.

## Edit Config

Now we add the following above the `start essentialmode` line:

```Lua
set es_moneyIcon "$"
```

Here we can now replace the $ with our own icon.

![image](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


After Saving the File and Restarting the server, the Money Icon will be changed ingame.
