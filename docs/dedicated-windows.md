---
id: dedicated-windows
title: "Dedicated Server: Installation of Windows Server 2025"
description: "Discover how to successfully install and configure Windows Server 2025 on your dedicated server for optimal performance → Learn more now"
sidebar_label: Windows Server 2025
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The following will explain to you step by step how to install and configure the Windows Server operating system on your dedicated server. Follow these instructions carefully to ensure that you set up the operating system successfully and utilize it optimally.



:::info Windows Server 2025

The setup steps and demonstration in this guide is based on the **Windows Server 2025** operating system. **Older OS versions** may differ in terms of **structure** and **appearance**. However, the procedure is similar.  
:::





## Preparation
For the installation and configuration of an operating system, it is initially important to mount the corresponding ISO of the operating system. There are several possible ways to mount it:

1. Mounting via the initial setup
2. Mounting via iLO (Virtual Media)
3. Mounting via iLO (Remote Console)

If you are not familiar with mounting an ISO file yet, it's best to refer to our [Initial setup](dedicated-setup.md) or [Own ISO](dedicated-iso.md) guide.



## Installation

Once the ISO file has been successfully mounted, the Windows Server installation will start automatically the next time the system is restarted. First, the language and keyboard layout must be specified. The setup option will then be chosen, where **Install Windows Server** must be selected.

![img](https://screensaver01.zap-hosting.com/index.php/s/gW4cr5WDGYEdBzw/download)

As soon as the installation has been initiated, the system prepares the necessary components. This process may take some time. Once this has been completed, the desired Windows Server edition must be selected. The following versions are available:

- Windows Server 2025 Standard Evaluation
- Windows Server 2025 Standard Evaluation (Desktop Experience)
- Windows Server 2025 Datacenter Evaluation
- Windows Server 2025 Datacenter Evaluation (Desktop Experience)

If you require a graphical user interface and the use of RDP, you should select one of the Desktop Experience variants. Further information on the differences between the Standard and Datacenter editions can be found on the official [Microsoft website](https://learn.microsoft.com/en-us/windows-server/get-started/editions-comparison?pivots=windows-server-2025).

:::warning Windows Server editions and licenses
Make sure that you select the server edition for which you have a valid license key. ZAP-Hosting does not provide a Windows Server license for this product. Once the trial period has expired, the license must be purchased separately.
:::

After selecting the desired image, the notices and license conditions must be confirmed and the partition on which the operating system is to be installed must be specified. To do this, create a new partition by clicking on **Create Partition**, then select the newly created disk/partition and confirm with Next. Finally, start the installation by **clicking** on Install.

![img](https://screensaver01.zap-hosting.com/index.php/s/2RQcBKiqoJE9MAg/download)

The installation of the Windows Server operating system will now be carried out. The system will reboot several times during the process. It may take a while for the process to complete. 

Define the login details and you are ready to log in to your installed operating system. Save the login details carefully, as you will always use them to log in in the future. 

![img](https://screensaver01.zap-hosting.com/index.php/s/FiXwH85pT24DYnJ/download)



## Configuration

Once the operating system has been set up, it is necessary to activate RDP access so that external connections are allowed. To do this, go to the remote desktop settings and activate the corresponding option.

![img](https://screensaver01.zap-hosting.com/index.php/s/gCCcTzpn69LpgSr/download)



## Conclusion
Congratulations, you have successfully installed the Windows Server 2025 operating system on your dedicated server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


