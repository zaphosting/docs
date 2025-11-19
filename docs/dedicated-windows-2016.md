---
id: dedicated-windows-2016
title: "Dedicated Server: Installation of Windows Server 2016"
description: "Discover how to install and configure Windows Server on your dedicated server for optimal performance and security → Learn more now"
sidebar_label: Windows Server 2016
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The following will explain to you step by step how to install and configure the Windows Server operating system on your dedicated server. Follow these instructions carefully to ensure that you set up the operating system successfully and utilize it optimally.

:::info Windows Server 2016
The setup steps and demonstration in this guide is based on the Windows Server 2016 (2019 optics - same design) operating system. Older OS versions may differ in terms of structure and appearance. However, the procedure is similar.
:::

:::warning Newer version available / EOL details

The latest Windows Server version from Microsoft is the [2025](dedicated-windows.md) version. We recommend using the latest version for long-term projects. 

Support for older Windows Server versions will be discontinued sooner or later. The following deadlines are scheduled for the 2016 version: 

- Active support: 11.01.2022
- Security support: 12.01.2027

:::



## Preparation
For the installation and configuration of an operating system, it is initially important to mount the corresponding ISO of the operating system. There are several possible ways to mount it:

1. Mounting via the initial setup
2. Mounting via iLO (Virtual Media)
3. Mounting via iLO (Remote Console)

If you are not familiar with mounting an ISO file yet, it's best to refer to our [Initial setup](dedicated-setup.md) or [Own ISO](dedicated-iso.md) guide.



## Installation
To install a Windows Server, you'll need to have an ISO File of your decision, you could choose in our webinterface the desired version of Windows. Alternatively, you could choose an own ISO File, we have a [Own ISO](dedicated-iso.md) guide for that.

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

If this screen appears in the remote console you are using, it means the ISO has loaded successfully, we can now start with the setup.
Choose your desired language and press "next" to continue

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Press "Install now" to start the setup process.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows now requires a product key. Enter it if you have one.

:::note
We're not selling Windows-Licenses, its required to buy a key by your own.
:::

You can purchase Windows product keys from various online shops, verify that you are buying a valid key for your Windows version, since there are different Windows versions.
In Windows Server 2019 there are as example two editions, the normal one and datacenter edition. 
If you're not sure what exactly you need, just press "I don't have a product key" you can always add a key afterwards.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Now select the version you would like to install.
Be sure to pick the right version, its not possible to change this afterwards.
Please mention also to pick a version with "(Desktop Experience)" otherwise your Windows would be shell based.
When you have made your decision, mark the version and continue with "next"

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

We accept the terms and proceed by pressing "next".

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Select 'Custom' if you want to perform a fresh installation of Windows. You could choose "Upgrade" when you'd like to upgrade from 2016 to 2019 for example.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

In the next step, you'll need to create partitions on your dedicated server, usually there should be no partitions created yet. If there are entries mark them and press delete.

You could create multiple smaller partitions or a huge one. If you're creating smaller partitions we would recommend to have atleast 50GB at the main Windows partition.
Click on "New" to create a partition.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

You can just press Apply if you'd like one big partition. The setup takes automatically the biggest possible size.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows itself requires a small system partition, we accept that by pressing "OK"

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

If you're happy with your partitions, please choose the partition on which Windows should be installed and proceed with "Next"
The Windows-Setup does now everything by itself, this can take several minutes.
There is nothing else to do, until the setup is finished.

## Configuration

Once the setup process is complete, Windows will prompt you to set a password.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Set there your desired password.

:::info
We recommend to choose a strong password with special characters.

If you forget the password, there is no way to recover it, so be sure to write it down.
:::

After you've set the password, you are in the lock screen of Windows.
Nachdem das Passwort gesetzt wurde, landen wir im Windows-Lockscreen

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

To log in to Windows, press the key combination `CTRL + ALT + DELETE`. You can do that easily through your remote console.
(You'll find that in the Java console in "Keyboard")
Login with your password now.

In the next step its required to enable Remotedesktop, then you can connect easily to your server.
Open the Windows Explorer and do a right click on "This PC"

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Choose Properties.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Open "Remote Settings"

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Accept the upcoming firewall information with "OK" and press "Apply"

Open now Remotedesktop on your computer and fill in the ip address of your ZAP-Interface
The username is always Administrator and the password is the one you defined earlier.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

You can ignore the certificate warning, you can tick the message "Don't ask me again for connections to this computer"
Complete everything by pressing "Yes"

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

Remote Desktop Connection does now establish a connection to your dedicated server and you can use it.
The network configuration is automatically applied via DHCP, so no further changes are needed.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
If you have further questions or issues, our support will help you out!
:::

## Conclusion
Congratulations, you have successfully installed the Windows Server 2016 operating system on your dedicated server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


