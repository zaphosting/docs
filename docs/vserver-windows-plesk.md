---
id: vserver-windows-plesk
title: "Setup Plesk on a Windows Server - Manage Websites with a Powerful Control Panel"
description: "Discover how to efficiently manage websites and servers with Plesk’s versatile platform for beginners and experts alike → Learn more now"
sidebar_label: Install Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Plesk is a comprehensive web hosting and server management platform that allows users to manage websites, servers, email accounts and more through a user-friendly interface. It is a versatile solution that is suitable for beginners as well as experienced web developers and system administrators. 
<InlineVoucher />


## Establish a connection to the server

To install Plesk on the server, you first need to connect to it. How this works is explained in detail in our separate guide: [Initial Access (RDP)](vserver-windows-userdp.md)

## Plesk Installer 

Next you need the Plesk Installer, which is required for the installation of Plesk. This can be downloaded by clicking on  [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

This installer is now stored in a folder, in our example we use a "Plesk" folder created on our desktop. The path to this file would be important for the next steps.

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### Open Command Prompt

The CMD console must now be opened for the installation.
This would go over the key combination [Windows] + [R] or also if one searches "command" in the windows console. 

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### Plesk Installation

In this CMD console you have to navigate to the directory into which the Plesk installer was uploaded. In our example it was the "Plesk" folder on the "Desktop".

This directory is accessed via CMD with the "*cd*" command.

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

Correctly in this directory, the last step would be the execution of the installer command. This would run Plesk-installer.exe and the latest Plesk version would be installed automatically.

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

Command: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
The installation process can take 30 to 60 minutes, after which Plesk would be installed and ready to use.
:::


## Conclusion

Congratulations, you have successfully installed and configured the Plesk on your VPS/Dedicated Server! If you have any further questions or problems, please contact our support team, who are available to help you every day! 

<InlineVoucher />
