---
id: fivem-deletecache
title: "FiveM: Empty Cache"
description: "Discover how clearing your FiveM server cache improves performance and resolves errors for a smoother gaming experience → Learn more now"
sidebar_label: Delete Cache
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Clearing the server cache on a FiveM server ensures that temporarily stored files are deleted. This forces the server to download or create all required files again the next time it is started. This helps to remove obsolete or corrupted data, which can solve performance problems, script errors, crashes or problems loading the game world.

<InlineVoucher />

## Simple method

Deleting cache on your FiveM game server is really simple. Firstly, head over to your game server's webinterface. Locate and open the **Settings** section on your game server's webinterface.



![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)



Next, scroll to the bottom of the page to find multiple buttons under the **Actions** subsection. Here, press the **Delete Cache Files** button in order to clear your game server's cache.

![img](https://screensaver01.zap-hosting.com/index.php/s/A2RiTo8gJiTibGR/download)

:::warning 
This will immediately restart your server in order to clear the cache files, so make sure you are prepared to do this.
:::


## Alternative method

Fistly, you need to connect to your server using FTP. If you are not familiar with using FTP, we recommend you to have a look at the [FTP access](gameserver-ftpaccess.md) guide. In the next step, you have to find the cache folder and delete it. Follow this path `/gXXXXXX/fivem/server-data/cache` in order to access the cache folder.

![img](https://screensaver01.zap-hosting.com/index.php/s/dfpssTy8KL7B3cK/download)

Now you have to simply clear/empty the cache. To do this you should click on the **Cache** folder and then on **Files**. Now you should mark all of the folders that are present in the **Cache** folder and delete them.

![img](https://screensaver01.zap-hosting.com/index.php/s/MnHpWiDmBgHa63B/download)

Now proceed to restart your FiveM server for this to take effect. When the server is restarted, the server will rewrite the cache. 



## Conclusion

Provided that you have followed all the steps, you have successfully cleared your server cache. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
