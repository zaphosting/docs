---
id: dedicated-reset
title: "Dedicated Server: Server Reset (Factory state)"
description: "Discover how to reset your server effectively to restore performance or start fresh with secure data removal → Learn more now"
sidebar_label: Server reset
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Your server is no longer working as it should or would you like to start again from the beginning but don't know how? No worries, you can reset your server by reinstalling it. This guide will explain how to do this and what you have to consider.





## Preparations

Before you reset the data on your server, you should be aware that the existing data will be lost. If you have important data, this would be the right time to first back up your data before starting the reinstallation. Afterwards, you must decide how exactly you would like to reset your system. 



## Resetting the data

There are two different ways to reset the data, depending on your needs and situation. In the following, we explain both options in detail:

- Resetting the data using RAID configuration (Quick method)
- Resetting the data using Wipe ISO (Comprehensive method)

When resetting data using the RAID configuration, existing data is logically erased and replaced with new data, making it a fast and efficient solution for system reinstallation.

In comparison, resetting with Wipe ISO involves multiple deletion cycles, ensuring that all data is permanently and irreversibly removed. This method is best suited for a complete system wipe when a thorough data erasure is necessary.



### Quick method

As with configuring the RAID, the raid configuration must be opened with the `F8` key during the boot process. Open the menu option **Delete Logical Drive** in the raid configuration. This should display the current RAID configuration and the hard disks. Press the `F8` key to delete the existing RAID. This must be confirmed by pressing the `F3` key. 

Then navigate back to the raid configuration and open the menu option **Create Logical Drive**. Now select the hard disks and the desired RAID configuration (Raid 0/1) and create the RAID by confirming it with the `Enter` button.

If you are unfamiliar with how to configure the RAID on your system, we recommend that you also take a look at our general [Configure RAID](dedicated-raid.md) guide. 



### Comprehensive method

The required Wipe ISO must be mounted and executed in order to perform the actual process of resetting the data. ISO Files can be mounted either via the iLO or via the remote console. If you don't know exactly how to do this yet, please have a look at the [Own ISO](http://localhost:3000/guides/docs/dedicated-iso) guide.

Mount the following Wipe ISO File to your server and restart it:


```
http://185.223.30.65/dedicatedisos/wipedisk.iso
```

Once the server has been restarted, the Wipe ISO should be automatically detected and loaded. Connect to your dedicated server using a remote console (HTML5, .NET, Java Web Start) of your choice.

There you will see how the server automatically executes the process and how far the formatting progress is. Your server will overwrite all existing volumes, effectively deleting all data. Depending on the size of the SSD, this process may take from 45 minutes to 2 hours.

![](https://screensaver01.zap-hosting.com/index.php/s/4nfaexaqiK78t6e/preview)



:::danger
This process cannot be undone and is therefore final. There are no additional backups that can be imported in case of need.
We strongly advise against performing this process unless you are absolutely certain you want to delete all your data.
:::



## Conclusion

Congratulations, you have successfully deleted the data on your dedicated server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


