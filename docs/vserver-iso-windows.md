---
id: vserver-iso-windows
title: "VPS: Installation of Windows X/Windows Server 20XX"
description: "Discover how to customize Windows installations with tailored ISOs for full control over setup and drivers → Learn more now"
sidebar_label: "Install Windows X/WS 20XX"
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introduction
Installing a custom ISO gives you full control over setting up Windows environments such as Windows 10 or Windows Server 2016/2019/2022/2025. Unlike our offered prebuilt standard  OS images, this approach allows you to use an installation medium tailored to your specific needs for example including special drivers, predefined configurations, or additional software packages.

<InlineVoucher />



## Preparation

For the installation and configuration of an operating system, it is initially important to mount the corresponding ISO of the operating system. If you are not familiar with mounting an ISO file yet, it's best to refer to our [Own ISO](vserver-iso.md) guide.



## Installation

At the start of the Windows operating system installation, you will be guided through the initial setup steps. First, select the preferred **language**, then configure the **keyboard layout** and after this choose the **setup method**. For demonstration purposes, the option **Previous Version of Setup** is used here. In the next step, you select the edition, and in this example, **Windows Server 2025 Datacenter Desktop Experience** is chosen, which provides the full graphical user interface.



![img](https://screensaver01.zap-hosting.com/index.php/s/7K227dRoaz5Y4py/download)

At this stage of the installation, you will notice that no partitions are displayed. This is not an error but rather because Windows cannot detect the virtual drives without additional drivers. The essential VirtIO drivers are required for disk recognition and proper handling. These drivers now need to be mounted and installed, after which the drives will appear and you can continue with partitioning and the operating system installation.



### VirtIO Driver(s)

Before installing the operating system, the VirtIO drivers need to be set up. These Windows drivers are optimized for use with KVM-based hypervisors and ensure that Windows virtual machines run with maximum performance and compatibility.

To do this, you must temporarily switch the installation medium to the `virtio-win.iso`. Select the VirtIO ISO file from the available ISOs and click on **Mount**. This makes the drivers accessible during the setup process, so they can be installed before continuing with the operating system installation.



![img](https://screensaver01.zap-hosting.com/index.php/s/wtZFngf9FofiQ88/download)

:::warning DO NOT REBOOT THE SERVER
When **temporarily** switching the ISO to the VirtIO one, only the ISO needs to be selected. Do **<u>not</u>** restart the system, otherwise the previous progress will be lost. 

:::

The required drivers are organized into three dedicated folders named **Balloon**, **NetKVM**, and **vioscsi**. Each of these folders contains a specific type of driver essential for running a Windows virtual machine on a KVM-based hypervisor. 

- **Balloon:** This driver manages memory allocation dynamically, allowing the VM’s assigned RAM to expand or shrink without needing a reboot.  
- **NetKVM:** This driver provides a fully functional and optimized network interface, ensuring stable and high-performance network connectivity for the virtual machine.  
- **Vioscsi:** This driver is a specialized SCSI controller driver that ensures proper detection and fast access to virtual hard drives. It enhances I/O performance and guarantees that Windows correctly recognizes the virtual disks.  

Within each of these folders, there is a subfolder corresponding to the system architecture. During installation, you need to select the subfolder that matches the operating system you intend to install. Make sure to always use the amd64 architecture for this process. <u>Repeat the procedure for all three driver folders as illustrated in the screenshot.</u>

![img](https://screensaver01.zap-hosting.com/index.php/s/fisTox5ziW4Y3tt/download)

Once the VirtIO drivers have been successfully installed, you can proceed with the actual installation of the operating system. As before, the ISO file needs to be switched. This time, select the original installation ISO of the operating system and then reopen the VNC console to continue the installation process.

![img](https://screensaver01.zap-hosting.com/index.php/s/QECit2kf66WQF9R/download)



### Create and select Partition

The next step is to configure the partitioning. First, delete any remaining unknown partitions. Then select the newly available unallocated partition as the target for the operating system installation. 

![img](https://screensaver01.zap-hosting.com/index.php/s/tRijdykS6CxyrbA/download)

After this, click **Next** to continue, and the rest of the installation process will run automatically. At the end, you will be prompted to set the credentials for the Administrator account.

![img](https://screensaver01.zap-hosting.com/index.php/s/bPzrdmbgYeLGrjJ/download)



## Configuration

Once the installation of the operating system is complete, a few final configuration steps are required to ensure the system can be used securely and reliably. These include enabling and managing access through **Remote Desktop (RDP)**, configuring the **firewall rules** to provide both protection and functionality, and setting up the **network configuration** to properly integrate the server into the network.

By completing these adjustments, you ensure that remote access is available, monitoring and status checks work without issues, and the server operates with stable, predictable network parameters within your infrastructure.



### RDP Configuration

To enable Remote Desktop (RDP) on Windows, the procedure is largely the same for Windows 10 (client systems) and Windows Server 2016/2019/2022/2025. Open the **Control Panel** or **Settings**, navigate to **System → Remote Desktop** (on client editions) or **System Properties → Remote** (on server editions), and enable the option **Allow remote connections to this computer**. On server versions, this appears as **Enable Remote Desktop**.

![img](https://screensaver01.zap-hosting.com/index.php/s/kcA3bWFHamWRwL8/download)



### Firewall Configuration

For a server to be fully initialized and for status checks such as ping tests to succeed, the **ICMP protocol** must be allowed through the Windows Firewall. Without this rule, monitoring tools and network tests will not be able to reach the server, resulting in failed health checks.

![img](https://screensaver01.zap-hosting.com/index.php/s/jyLqA5Ly3iXDPJ5/download)

To enable ICMP, open **Windows Firewall with Advanced Security** and navigate to the inbound rules section. Create a new custom rule and set the protocol to "Any" and select **ICMPv4**. Configure the rule to apply to all ports and choose the profiles (Domain, Private, Public) where the rule should be active. In most cases, enabling it for all profiles is recommended. Finally, assign a descriptive name such as *Allow inbound ICMP* and complete the wizard.

From this point forward, the server will accept ICMP requests, allowing commands like `ping` and monitoring systems to reach it and verify its status successfully.



### Network Configuration

To manually configure the network settings in Windows, first open the **Network and Sharing Center** via the Control Panel or the taskbar. Select the relevant network adapter (LAN or Wi-Fi), right-click on it, and open the **Properties**. From the list of items, highlight **Internet Protocol Version 4 (TCP/IPv4)** and click **Properties**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nEGkdE79tDwLszr/download)

In the dialog window, change the setting from Obtain an IP address automatically to Use the following IP address. You can now enter the **IP address**, **subnet mask**, and **default gateway** for your server. Below, switch DNS settings to manual and specify `1.1.1.1`  and `8.8.8.8.` as  your primary and econdary **DNS** servers. Confirm with **OK** to apply the static network configuration.









## Conclusion

Congratulations, you have successfully installed and configured your Windows operating system. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />
