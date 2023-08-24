---
id: fivem-deletecache
title: Cache leeren
description: Informationen, wie du den Cache deines FiveM Server von ZAP-Hosting leeren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Cache leeren
---

## Simple Method

Deleting cache on your FiveM gameserver is really simple.

Firstly, head over to your gameserver's webinterface. Locate and open the **Settings** section on your gameserver's webinterface.

![image](https://github.com/zaphosting/docs/assets/42719082/bbdfc816-6160-4e2a-b9ee-74feca4663ed)

Next, scroll to the bottom of the page to find multiple buttons under the **Actions** subsection. Here, press the **Delete Cache Files** button in order to clear your gameserver's cache.

![image](https://github.com/zaphosting/docs/assets/42719082/f917d7bf-f436-4e6c-b53d-bd2d2df1e4c0)

:::note
This will immediately restart your server in order to clear the cache files, so make sure you are prepared to do this.
:::

Your server will now restart and clear its cache. When the server is restarted, the server will rewrite the cache. You have successfully cleared the cache for your FiveM gameserver!

## Alternative Method

### Accessing via FTP

Fistly, you need to connect to your server using FTP. If you are not familiar with using FTP, we recommend you to have a look at the [FTP file access](https://zap-hosting.com/guides/docs/gameserver-ftpaccess/) guide.

![image](https://user-images.githubusercontent.com/13604413/159137768-9431a8d8-afa2-47a7-960b-7bcd700c9627.png)

### Locate Cache

In the next step, you have to find the cache folder and delete it.

You should follow this path: `/gXXXXXX/gta5-fivem/server-data/cache` in order to directly access the cache folder.

![image](https://user-images.githubusercontent.com/13604413/159137776-328b84d3-992b-47ef-b8d8-c1abb0beae45.png)

### Clear Cache

Now you have to simply clear/empty the cache. To do this you should click on the **Cache** folder and then on **Files**.

Now you should mark all of the folders that are present in the **Cache** folder and delete them.

![image](https://user-images.githubusercontent.com/13604413/159137786-b7a63449-4d89-4f77-a06c-9edd87bdd85e.png)

Now proceed to restart your FiveM server for this to take effect. When the server is restarted, the server will rewrite the cache. You have successfully cleared the cache for your FiveM gameserver!