---
id: dedicated_raid
title: RAID Configuration
description: Information, about RAID configuration options for your Dedicated Server from ZAP-Hosting - ZAP-Hosting.com Documentation
sidebar_label: RAID Configuration
---

:::info
We're offering up to 2 SSDs in our dedicated server products, so you could use RAID0 or RAID1
:::

## Which types of raid are there?
Basically, there are different raid types. Since our dedicated servers are only offering 2 ssd bays, there is only a configuration of RAID0 or RAID1 possible.
Other raid types would require to have more ssds.

:::info
RAID0 has slightly faster read and write rates
:::

### RAID0
In this RAID configuration, all existing volumes are combined into one large volume, for example, from 2 ssds, each with 1 TB,
a 2TB partition would be created which could then be used completely.
There is no data redundancy, so in case of a technical malfunction, data loss is often inevitable because the data is written in different sectors.
If you store sensitive data on your system, RAID0 should not be used or at least regular system backups should be performed.

:::info
If your dedicated server has only 1 ssd this is automatically a RAID0.
:::

### RAID1
This configuration is very different from RAID0, here there is a redundancy of your data, which means that everything you store on your server is duplicated.
It is therefore mirrored on both ssds and would be available at a failure rate of 50%, so your data is safe with 1 ssd.
In case of a technical malfunction, only the affected ssd would have to be replaced and your server would rebuild the RAID, which means to mirror the data again.
Especially for more sensitive data this configuration is highly recommended, but it is not an alternative to avoid backups.

:::info
Regular backups of all important data are essential!
:::

## The Configuration Assistant

When your server is booting, the raid configuration tool, is required to be started this can be done by pressing `F8` at the necessary boot step.

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

Press `F8` on this point to open the raid configuration tool

***

![image](https://user-images.githubusercontent.com/13604413/159174280-cc8ed679-8e8e-4aca-a274-e4d30f1cdc46.png)

After a few seconds, this configuration overview will show up.

***

There are now several menu options:

* Create Logical Drive
Is creating a new volume.

* View Logical Drive
This shows the current RAID configuration.

***
RAID0

![image](https://user-images.githubusercontent.com/13604413/159174281-0fe86927-7543-40cf-af2e-3918b0501fb5.png)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/749Kxjq6Mkzdc69/preview)
***

* Delete Logical Drive
You can delete the current RAID configuration, to create a new one as example.

* Select Boot Volume
You could boot from another storage medium, which is not necessary in our case here.

* Manage License Keys
Nothing needs to be adjusted or changed here, the licensing is already pre-configured.

* Cache Settings
The cache option can be adjusted to increase the read/write rates of the SSD a bit.
Basically, the last data blocks are cached during every write process for safety reasons as example in case of a voltage loss.
This causes a minimal performance disadvantage.

### Creating a new RAID

First of all we check that there is no volume anymore, open `Delete Logical Drive`

![image](https://user-images.githubusercontent.com/13604413/159174286-c6802e19-befd-46dc-a856-65e9fc6265e5.png)

We press `F8` to delete the existing RAID.

***

![image](https://user-images.githubusercontent.com/13604413/159174291-2fc9d81f-cc48-4ecb-9043-2ec29b61d322.png)

By pressing `F3` we confirm the deletion.

***

After the RAID was successfully deleted we need to open `Create Logical Drive`

![image](https://user-images.githubusercontent.com/13604413/159174294-c7c8de68-61ba-4cdd-8afa-ede25b850322.png)


Here you can see all your ssds and have a choice of RAID configurations.
Of course, not all of these RAIDs can be implemented in the current constellation.

In our example we choose RAID0 or RAID1.

:::info
You can switch between the menus by pressing `TAB`
:::

When you're done choosing your RAID configuration, you can confirm them by pressing `Enter`.

:::info
You can close the configuration assistant by pressing `ESC`
:::

### Select Boot Volume

If you have touched your RAID, it is necessary to select boot volume.
This can easily be done in **Select Voot Volume**, choose there the logical drive which you have created, otherwise your server will stuck in a bootloop.

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

In the end you have the possibility by pressing `F8` to directly reboto your system or to return into the main menu by pressing `Enter`.
Mention that the boot volume must be set **anytime** when you have touched your raid configuration.
