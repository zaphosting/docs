---
id: redm-deletecache
title: "RedM: Empty Cache"
description: Information on how to clear the cache of your RedM Server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Delete Cache
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Simple Method

Deleting cache on your RedM game server is really simple.

Firstly, head over to your game server's webinterface. Locate and open the **Settings** section on your game server's webinterface.

![image](https://github.com/zaphosting/docs/assets/42719082/bbdfc816-6160-4e2a-b9ee-74feca4663ed)

Next, scroll to the bottom of the page to find multiple buttons under the **Actions** subsection. Here, press the **Delete Cache Files** button in order to clear your game server's cache.

![image](https://github.com/zaphosting/docs/assets/42719082/f917d7bf-f436-4e6c-b53d-bd2d2df1e4c0)

:::note
This will immediately restart your server in order to clear the cache files, so make sure you are prepared to do this.
:::

Your server will now restart and clear its cache. When the server is restarted, the server will rewrite the cache. You have successfully cleared the cache for your RedM game server!

## Alternative Method

### Accessing via FTP

Fistly, you need to connect to your server using FTP. If you are not familiar with using FTP, we recommend you to have a look at the [Access via FTP](gameserver-ftpaccess.md) guide.

![image](https://screensaver01.zap-hosting.com/index.php/s/rNGDnDCX44XKFdt/preview)

### Locate Cache

In the next step, you have to find the cache folder and delete it.

You should follow this path: `/gXXXXXX/redm/server-data/cache` in order to directly access the cache folder.

![image](https://screensaver01.zap-hosting.com/index.php/s/3qXCgSjKAjWHAgt/preview)

### Clear Cache

Now you have to simply clear/empty the cache. To do this you should click on the **Cache** folder and then on **Files**.

Now you should mark all of the folders that are present in the **Cache** folder and delete them.

![image](https://screensaver01.zap-hosting.com/index.php/s/SWYrkGiKFFjytXT/preview)

Now proceed to restart your RedM server for this to take effect. When the server is restarted, the server will rewrite the cache. You have successfully cleared the cache for your RedM game server!