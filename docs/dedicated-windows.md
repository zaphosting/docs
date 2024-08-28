---
id: dedicated-windows
title: "Dedicated Server: Installation of Windows Server"
description: Information on how to install the Windows operating system on your dedicated server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Windows
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import Advertisements from '@site/src/components/Advertisements/Advertisements';

## Introduction
The following will explain to you step by step how to install and configure the Windows Server operating system on your dedicated server. Follow these instructions carefully to ensure that you set up the operating system successfully and utilize it optimally.

<YouTube videoId="yEjQOrcEus0" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/yDKoQrN8H2ZLfB3/preview" title="Setup a Dedicated Server and install Windows easily!" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

:::info
The structure of the guide is based on the use of the Windows Server 2019 operating system. Installations from previous or newer versions may differ slightly in terms of the process. 
:::

<InlineVoucher />

## Preparation
For the installation and configuration of an operating system, it is initially important to mount the corresponding ISO of the operating system. There are several possible ways to mount it:

1. Mounting via the initial setup
2. Mounting via iLO (Virtual Media)
3. Mounting via iLO (Remote Console)

If you are not familiar with mounting an ISO file yet, it's best to refer to our [Initial Setup](dedicated-setup.md) or [Custom ISO](dedicated-iso.md) guide.



## Installation
To install a Windows Server, you'll need to have an ISO File of your decision, you could choose in our webinterface the desired version of Windows. Alternatively, you could choose an own ISO File, we have a [detailed guide](dedicated-iso.md) for that.

![image](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

If this screen appears in the remote console you are using, it means the ISO has loaded successfully, we can now start with the setup.
Choose your desired language and press "next" to continue

![image](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Press "Install now" to start the setup process.

![image](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows now requires a product key. Enter it if you have one.

:::note
We're not selling Windows-Licenses, its required to buy a key by your own.
:::

You can purchase Windows product keys from various online shops, verify that you are buying a valid key for your Windows version, since there are different Windows versions.
In Windows Server 2019 there are as example two editions, the normal one and datacenter edition. 
If you're not sure what exactly you need, just press "I don't have a product key" you can always add a key afterwards.

![image](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Now select the version you would like to install.
Be sure to pick the right version, its not possible to change this afterwards.
Please mention also to pick a version with "(Desktop Experience)" otherwise your Windows would be shell based.
When you have made your decision, mark the version and continue with "next"

![image](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

We accept the terms and proceed by pressing "next".

![image](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Select 'Custom' if you want to perform a fresh installation of Windows. You could choose "Upgrade" when you'd like to upgrade from 2016 to 2019 for example.

![image](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

In the next step, you'll need to create partitions on your dedicated server, usually there should be no partitions created yet. If there are entries mark them and press delete.

You could create multiple smaller partitions or a huge one. If you're creating smaller partitions we would recommend to have atleast 50GB at the main Windows partition.
Click on "New" to create a partition.

![image](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

You can just press Apply if you'd like one big partition. The setup takes automatically the biggest possible size.

![image](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows itself requires a small system partition, we accept that by pressing "OK"

![image](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

If you're happy with your partitions, please choose the partition on which Windows should be installed and proceed with "Next"
The Windows-Setup does now everything by itself, this can take several minutes.
There is nothing else to do, until the setup is finished.

## Configuration

Once the setup process is complete, Windows will prompt you to set a password.

![image](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Set there your desired password.

:::info
We recommend to choose a strong password with special characters.

If you forget the password, there is no way to recover it, so be sure to write it down.
:::

After you've set the password, you are in the lock screen of Windows.
Nachdem das Passwort gesetzt wurde, landen wir im Windows-Lockscreen

![image](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

To log in to Windows, press the key combination `CTRL + ALT + DELETE`. You can do that easily through your remote console.
(You'll find that in the Java console in "Keyboard")
Login with your password now.

In the next step its required to enable Remotedesktop, then you can connect easily to your server.
Open the Windows Explorer and do a right click on "This PC"

![image](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Choose Properties.

![image](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Open "Remote Settings"

![image](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Accept the upcoming firewall information with "OK" and press "Apply"

Open now Remotedesktop on your computer and fill in the ip address of your ZAP-Interface
The username is always Administrator and the password is the one you defined earlier.

![image](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

You can ignore the certificate warning, you can tick the message "Don't ask me again for connections to this computer"
Complete everything by pressing "Yes"

![image](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

Remote Desktop Connection does now establish a connection to your dedicated server and you can use it.
The network configuration is automatically applied via DHCP, so no further changes are needed.

![image](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
If you have further questions or issues, our support will help you out!
:::
