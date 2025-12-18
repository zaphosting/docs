---
id: fivem-esx-changemoneyicon
title: "FiveM: Change money icon"
description: "Discover how to customize your server's money icon for a personalized in-game experience → Learn more now"
sidebar_label: Change Money Icon
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archived Guide
This document has been archived. Documents are archived if they are no longer relevant, incorrect or up to date. It has been archived for the following reasons:

**Reason**: The method of realization is for an outdated ESX version. This approach cannot be used for the current ESX version, as the structure has changed. 
::::



<InlineVoucher />

## Connect with FTP

First the [Access via FTP](gameserver-ftpaccess.md) must be set up.


After this has been set up, you can now connect and open the server folder.

![](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


Here we open the `server.cfg` file in the `server-data` folder.

## Edit Config

Now we add the following above the `start essentialmode` line:

```Lua
set es_moneyIcon "$"
```

Here we can now replace the $ with our own icon.

![](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


After Saving the File and Restarting the server, the Money Icon will be changed ingame.

<InlineVoucher />
