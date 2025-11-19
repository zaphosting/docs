---
id: dedicated-raid
title: "Dedicated Server: RAID Configuration"
description: "Discover how RAID configurations enhance data performance and redundancy for dedicated servers with SSDs → Learn more now"
sidebar_label: Configure RAID
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RAID (Redundant Array of Independent Disks) is a technology that combines multiple hard disks into a single logical drive to achieve data redundancy and/or increased performance. There are different RAID levels that offer different combinations of data distribution and fault tolerance



## Available RAID types
Our dedicated servers currently offer 2 SSD bays, meaning that there are two possible configurations for RAID. The first is RAID0 which is used to combine volumes into one large volume, and RAID1 which is used to mirror volumes and keep data redundant. We will go in-depth for both in the following sections.

:::info
RAID0 provides slightly faster read and write speeds, due to two drives being present.
:::

### RAID0
In this RAID configuration, all existing volumes are combined into one large volume, for example, from 2 SSDs, each with 1 TB. A 2TB partition would be created which could then be used completely.

There is no data redundancy, so in case of a technical malfunction, data loss is often inevitable because the data is written in different sectors.

If you store sensitive data on your system, RAID0 should not be used or at least regular system backups should be performed.

:::info
If your dedicated server has only 1 SSD this is automatically a RAID0.
:::

### RAID1
This configuration is very different from RAID0, here there is a redundancy of your data, which means that everything you store on your server is duplicated.
It is therefore mirrored on both SSDs and would be available at a failure rate of 50%, so your data is safe with 1 SSD.

In case of a technical malfunction, only the affected SSD would have to be replaced and your server would rebuild the RAID, which means to mirror the data again.
Especially for more sensitive data this configuration is highly recommended, but it is not an alternative to avoid backups.

:::info
Regular backups of all important data are essential!
:::

## The Configuration Assistant

When your server is booting, the RAID configuration tool is required to be started. This can be done by pressing `F8` at the necessary boot step.

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

Press F8 at this point to open the RAID configuration tool

***

![](https://screensaver01.zap-hosting.com/index.php/s/L4Lw8oGjxbDR96N/preview)

After a few seconds, this configuration overview will show up.

***

There are now several menu options:

* Create Logical Drive
Is creating a new volume.

* View Logical Drive
This shows the current RAID configuration.

***
RAID0

![](https://screensaver01.zap-hosting.com/index.php/s/6mtbrFXNPeqHnYi/preview)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/749Kxjq6Mkzdc69/preview)
***

* Delete Logical Drive
You can delete the current RAID configuration, to create a new one for example.

* Select Boot Volume
You could boot from another storage medium, which is not necessary in our case here.

* Manage License Keys
Nothing needs to be adjusted or changed here, the licensing is already pre-configured.

* Cache Settings
The cache option can be adjusted to increase the read/write rates of the SSD a bit.
Basically, the last data blocks are cached during every write process for safety reasons for example in case of a voltage loss.
This causes a minimal performance disadvantage.

### Creating a new RAID

First of all we check that there is no volume anymore, open `Delete Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/EbPtmgFyZ3oN6jb/preview)

We press `F8` to delete the existing RAID.

***

![](https://screensaver01.zap-hosting.com/index.php/s/qmtAciacCLKJ9QG/preview)

By pressing `F3` we confirm the deletion.

***

After the RAID was successfully deleted we need to open `Create Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/SjP6ZkcWXCKc4kT/preview)


Here you can see all your SSDs and have a choice of RAID configurations.
Of course, not all of these RAIDs can be implemented in the current constellation.

In our example, we choose RAID0 or RAID1.

:::info
You can switch between the menus by pressing `TAB`
:::

When you're done choosing your RAID configuration, you can confirm them by pressing `Enter`.

:::info
You can close the configuration assistant by pressing `ESC`
:::

### Select Boot Volume

If you have touched your RAID, it is necessary to select boot volume.
This can easily be done in **Select Boot Volume**, choose there the logical drive which you have created, otherwise your server will stuck in a bootloop.

**Select Boot Volume**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2GDEYfjnkmaKF9F/preview)
***
**Direct Attached Storage**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2468ZCGkr2ninxM/preview)
***
**Logical Drive 01**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tN6pRiJbZexbzmg/preview)
***
**Press `F8` to save as bootvolume**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tqGFzGZGgeo4JjZ/preview)

In the end you have the possibility by pressing `F8` to directly reboot your system or to return into the main menu by pressing `Enter`.
Mention that the boot volume must be set **anytime** when you have touched your RAID configuration.



## Conclusion

Congratulations, you have successfully configured the RAID on your dedicated server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂



