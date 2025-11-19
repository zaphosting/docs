---
id: dedicated-setup
title: "Dedicated Server: Initial setup"
description: "Discover how to set up your ZAP Dedicated Server with ease and access a variety of operating systems → Learn more now"
sidebar_label: Initial setup
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Are you still new to this area and worried that you might not be able to cope with setting up such a service or that you might encounter difficulties when doing so? No worries! This guide and our setup assistant will take you through all the steps for the initial setup of your ZAP Dedicated Server. 



## Preparation

### Activating iLO
For the initial setup, the iLO administration interface must first be activated. This process may take a moment. For more information and further use of the iLO administration interface, we recommend taking a look at the [iLO](dedicated-ilo.md) guide.

![EN](https://screensaver01.zap-hosting.com/index.php/s/xmAFAt4CXTt7b7c/preview)

As soon as the iLO is activated, the iLO status should be displayed as **Active**. The iLO session is always activated for three hours by default and must be reactivated again afterwards if you wish to access it again. You can now continue with the selection of the ISO. 

### Selecting the ISO

The next step is to select an ISO to be mounted for the initial setup. To do this, click on the drop-down menu, select an ISO file and click on the **Insert** button.  

![EN](https://screensaver01.zap-hosting.com/index.php/s/SfMfrWHpjAGeMgo/preview)

We provide a wide range of ISO files for the most common operating systems such as Debian, Ubuntu, FreeBSD, Windows, CentOS, ArchLinux and Proxmox by default. In the following table you will find an overview of all available operating systems and their versions. 

| ISO (Betriebssystem) | Versionen                                              |
| -------------------- | ------------------------------------------------------ |
| Debian               | 12, 11, 10.9, 9.13                                     |
| Ubuntu               | 22.04.3, 22.04, 22.02, 18.04                           |
| FreeBSD              | 13.0, 12.2, 11.4                                       |
| Windows              | 2022 (EN/DE), 2019 (EN/DE), 2016 (EN/DE), 2012 (EN/DE) |
| CentOS               | 7.9, 8.3                                               |
| ArchLinux            | 2023                                                   |
| Proxmox              | 8.0-2, 7.4-1, 7.1-1, 7.0-1, 6.4-1, 6.3-1               |

It is also possible to add and mount your own individual IOS. For more information on how to mount your own ISO file, we recommend taking a look at the **[Own ISO](dedicated-iso.md)** guide.

## Installation

### Mounting and booting ISO

Once the ISO file has been successfully selected and inserted, the system must now be restarted once so that the system accepts the change and carries out the boot process using the ISO file. To do this, simply click on the **Reboot** button. It may take a moment for the restart to complete. 

![EN](https://screensaver01.zap-hosting.com/index.php/s/zPQagx6yD5nCM7L/preview)

### Using iLO to install the operating system

The basis for installing your desired operating system is now fulfilled. The system has mounted the ISO and initiated the setup accordingly. Now open the **ILO administration interface** of your server and click directly on "Intergraded Remote Console: **HTML 5**" to access the screen of your server. More information on managing the console in the iLO administration interface can be found in our [iLO](dedicated-ilo.md) guide. 

The setup of the operating system is now carried out in the HTML console. We also offer guides for the most common operating systems. For more information on the further steps required, please take a look at the relevant guides:  

- [Install Windows](dedicated-windows.md)
- [Install Debian](dedicated-linux-debian.md)
- [Install Ubuntu](dedicated-linux-ubuntu.md)
- [Install FreeBSD](dedicated-freebsd.md)
- [Install CentOS](dedicated-centos.md)
- [Install Proxmox](dedicated-proxmox.md)


