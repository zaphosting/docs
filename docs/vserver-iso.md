---
id: vserver-iso
title: "VPS: Mount an ISO File"
description: Information on how to mount an ISO file on your VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Mount ISO file
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introduction
Want even more freedom when choosing your system? In addition to our OS templates, you can of course mount your own ISOs It's super easy with our VPS products. This way you get exactly the operating system on your server that you really want!

<InlineVoucher />



## Available ISO files

In addition to our preconfigured standard OS templates, we also offer the option to mount additional ISO files. This provides even more flexibility when setting up and managing your server environment. Our VPS products currently support the following ISO files: 

<SearchableItemList items={items} />

:::info Missing an ISO file?
Is there a specific ISO you would like to use that isn’t available? Just reach out to our support team – we’ll be happy to check if we can add it for you.
:::





## Mounting ISO file
To mount an ISO, go to your VPS management panel and open **Settings → ISOs**. Select the ISO file you want, adjust the boot order, and then restart your server. 

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

After the reboot, you can connect to your server using the VNC client and start installing and configuring the operating system.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Online Status or Remote Connections after ISO Mount

After mounting an ISO, your server is not yet set up. As a result, no **online status** will be displayed in the panel, and **RDP** or **SSH connections** will not be available. These will only become accessible once the operating system has been successfully installed and configured.

:::




## Conclusion
Congratulations, you have successfully selected and mounted your ISO file. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />
