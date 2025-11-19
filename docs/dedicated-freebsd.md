---
id: dedicated-freebsd
title: "Dedicated Server: Installation of FreeBSD"
description: "Discover how to install and configure FreeBSD on your dedicated server for optimal performance and reliability → Learn more now"
sidebar_label: Install FreeBSD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The following will explain to you step by step how to install and configure the FreeBSD operating system on your dedicated server. Follow these instructions carefully to ensure that you set up the operating system successfully and utilize it optimally.

:::info

The structure of the guide is based on the use of the FreeBSD 13.0 operating system. Installations from previous or newer versions may differ slightly in terms of the process.

:::



## Preparation

For the installation and configuration of an operating system, it is initially important to mount the corresponding ISO of the operating system. There are several possible ways to mount it:

1. Mounting via the initial setup
2. Mounting via iLO (Virtual Media)
3. Mounting via iLO (Remote Console)

If you are not familiar with mounting an ISO file yet, it's best to refer to our [Initial setup](dedicated-setup.md) or [Own ISO](dedicated-iso.md) guide.



## Installation
When the ISO is successfully loaded, the server is in the setup process.

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

We start the installation by pressing `Enter`![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

Choose the keymap of your liking and proceed with continue.

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

Choose your desired hostname.

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

You could choose optional system packages which should be installed, after you're done proceed with OK.

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

In this step you could create partitions, in this example we're using a RAID0. More information about RAIDs are explained in [Configure RAID](dedicated-raid.md)

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

You can proceed with `Enter` if there are no changes.

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

Since we've got a RAID0 we choose no redundancy.

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

Mark your volume, with `Space` and process by pressing `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

We verify that all data will be erased

:::info
Your server is now processing the setup, this could take several minutes
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

Please fill in your password and proceed by pressing `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

Choose "No" at IPv4/IPv6 configuration, this must be done in the end.

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

Choose "Yes" and select your timezone and the date/time.

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

You could change the systems that will be automatically started when the server starts

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

If necessary, you can modify the security settings.

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

The setup is now done, choose "Exit" and confirm by pressing `Enter`

:::info
Remove the ISO File in your iLO and choose "Reboot"
:::



## Configuration

### Network

To enable the network device, please login to your system using the password

Open loader.conf with a editor of your choice, as example `ee /boot/loader.conf` and add the following line:

```if_oce_load="YES"```

You can leave the editor by pressing `CTRL+C` and writing exit, after that please reboot your dedicated server

***

After the reboot, we need to modify the rc.conf as example by `ee /etc/rc.conf`, add the following lines:

```
ifconfig_oce0="DHCP"
```

:::caution
The name of the network adapter shown in the example **oce0** may be different. Make sure that you specify the correct network adapter. This can be verified with the ifconfig command. The information is then automatically obtained via the DHCP server. 
:::

This should in example look like:

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

Leave the editor by pressing `CTRL+C` and writing "exit" after that execute the command `/etc/netstart` once

:::info
Your server should have an active internet connection now
:::



## Conclusion

Congratulations, you have successfully installed the FreeBSD operating system on your dedicated server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


