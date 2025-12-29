---
id: vserver-iso
title: "VPS: Mount an ISO File"
description: "Discover how to customize your VPS with your preferred ISO for full control over your server environment → Learn more now"
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





## Uploading a Custom ISO

If the required ISO image is not available in the default list, a custom ISO can be provided using a public source URL. The URL must be accessible via HTTP or HTTPS and must not require authentication or time limited download links.

After entering the URL in the **Add custom ISO** field and clicking **Upload ISO**, the ISO is imported automatically and becomes available for server installation.

![img](https://screensaver01.zap-hosting.com/index.php/s/E93dLjnpnBPFiH7/preview)

A maximum of three custom ISO images can be stored at the same time. Each uploaded ISO is only kept for 72 hours and is deleted automatically afterwards. If the ISO is still required after this period, it must be uploaded again. The customer is responsible for the content, licensing, and security of the provided ISO.









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
