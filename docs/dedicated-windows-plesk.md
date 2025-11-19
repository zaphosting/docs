---
id: dedicated-windows-plesk
title: "Dedicated Server: Installation of Plesk "
description: "Discover how to efficiently manage websites and servers with Plesk for both beginners and experts → Learn more now"
sidebar_label: Install Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Plesk is a comprehensive web hosting and server management platform that allows users to manage websites, servers, email accounts and more through a user-friendly interface. It is a versatile solution that is suitable for beginners as well as experienced web developers and system administrators. 



## Establish a connection to the server

To install Plesk on the server, you first need to connect to it. How this works is explained in detail in our separate instructions: [Initial Access (RDP)](vserver-windows-userdp.md)

## Plesk Installer 

Next you need the Plesk Installer, which is required for the installation of Plesk. This can be downloaded by clicking on  [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

This installer is now stored in a folder, in our example we use a "Plesk" folder created on our desktop. The path to this file would be important for the next steps.

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### Open Command Prompt

The CMD console must now be opened for the installation.
This would go over the key combination [Windows] + [R] or also if one searches "command" in the windows console. 

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### Plesk Installation

In this CMD console you have to navigate to the directory into which the Plesk installer was uploaded. In our example it was the "Plesk" folder on the "Desktop".

This directory is accessed via CMD with the "*cd*" command.

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

Correctly in this directory, the last step would be the execution of the installer command. This would run Plesk-installer.exe and the latest Plesk version would be installed automatically.

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

Command: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
The installation process can take 30 to 60 minutes, after which Plesk would be installed and ready to use.
:::





## Conclusion

Congratulations, you have successfully installed Plesk. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


