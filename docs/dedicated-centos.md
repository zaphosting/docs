---
id: dedicated-centos
title: "Dedicated Server: Installation of CentOS"
description: "Discover how to successfully install and configure CentOS on your dedicated server for optimal performance and security → Learn more now"
sidebar_label: Install CentOS
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The following will explain to you step by step how to install and configure the CentOS operating system on your dedicated server. Follow these instructions carefully to ensure that you set up the operating system successfully and utilize it optimally.

:::info

The structure of the guide is based on the use of the CentOS 8.3 operating system. Installations from previous or newer versions may differ slightly in terms of the process.

:::



## Preparation

For the installation and configuration of an operating system, it is initially important to mount the corresponding ISO of the operating system. There are several possible ways to mount it:

1. Mounting via the initial setup
2. Mounting via iLO (Virtual Media)
3. Mounting via iLO (Remote Console)

If you are not familiar with mounting an ISO file yet, it's best to refer to our [Initial setup](dedicated-setup.md) or [Own ISO](dedicated-iso.md) guide.



## Installation

When the ISO is successfully loaded, the server is in the setup process.

![](https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview)

* Keyboard
Choose your preferred keyboard layout

* Time & Date 
Choose your timezone

* Root Password
Set a password for your root account. This can be any, but remember to use a strong password and save it on a safe place.

* Installation Destination
Select the SSD where CentOS will be installed

* Network & Hostname
Since there is an incompatibility issue, the network could not be setup yet, we will do this in the end.

Once you've configured all settings to your liking, press 'Begin Installation.

![](https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview)

After the installation is complete, remove the ISO file from your server and click 'Reboot System'.



## Configuration

### Network

Next, we'll configure the network device, which requires updating some files. Please mount this ISO File into your server, through the remote console or the iLO itself.

![](https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

After the ISO File was mounted successfully, we need to mount it into our system, to have access to it.

```mount /dev/sr0 /mnt```

The ISO-file is now mounted at `/mnt`

```rpm -i /mnt/be2net.rpm```

Next, install the update package.

```modprobe be2net```

In this step, we will run the update, this could take a few seconds.
You can now check with `ip a s` if a network device called `eno1` exists, if yes, please reboot your system.

After the system has rebooted, proceed to configure the network device.

```nano /etc/sysconfig/network-scripts/ifcfg-eno1```

Please fill in the following data into the file:

```
DEVICE=eno1
BOOTPROTO=dhcp
ONBOOT=yes
```

You can leave nano by pressing `CTRL+X` and `Y`

Now we need to start our network device with `ifup eno1` 

:::info
Your dedicated server should now have a working internet connection.
:::





## Conclusion

Congratulations, you have successfully installed the CentOS operating system on your dedicated server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


