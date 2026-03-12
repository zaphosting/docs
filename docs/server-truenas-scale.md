---
id: server-truenas-scale
title: "Setup TrueNAS SCALE on a Server - Build Your Personal NAS System"
description: "Learn how to install TrueNAS SCALE on your dedicated server for network-attached storage and file sharing → Step-by-step guide"
sidebar_label: Installing TrueNAS SCALE
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

TrueNAS SCALE is an open-source storage platform that allows you to build a network-attached storage (NAS) system on a server. In this guide, you will install TrueNAS SCALE on a Dedicated Server and configure the initial setup, including storage pools, user accounts, and SMB file sharing.

:::danger VPS Not Suitable
Our VPS products are not suitable since they only contain one virtual disk. You can install TrueNAS SCALE on a VPS, but you cannot create storage pools since the entire disk is used for the OS. 

To set up TrueNAS SCALE, a [dedicated server configuration](https://zap-hosting.com/en/dedicated-server-hosting/) with at least two hard drives is required.
 :::

<InlineVoucher />

## Preparation

Before beginning the installation, ensure you have the following minimum system requirements:

| Hardware   | Minimum     | ZAP-Hosting Recommendation |
| ---------- | ----------- | -------------------------- |
| CPU        | 2 CPU Cores | 8 vCPU Cores               |
| RAM        | 8 GB        | 16 GB                      |
| Disk space | 16 GB OS    | Depending on the use case  |

<InlineServiceLink />

Head over to the official [TrueNAS website](https://www.truenas.com/download-truenas-scale/) and download the latest stable release. You can either upload the ISO to a publicly accessible location (your own web server or cloud storage) or keep it locally on your computer for direct mounting.

:::tip[ISO Hosting]
If you plan to mount via URL in the remote console, ensure your ISO file URL ends with `.iso` and is publicly accessible without authentication.
:::

**Mounting the ISO**

Log into your [ZAP-Hosting Dashboard](https://zap-hosting.com/en/customer/) and navigate to your Dedicated Server in the service list. Once there, open the server management page and click on **Activate iLO** to access the server management interface.

![Activate iLO](https://i.ibb.co/9mL2hxZg/Screenshot-2026-02-19-194713.png)

In the iLO interface, find the **Integrated Remote Console** option. Choose your preferred console type and launch it. A new window will open with direct access to your server's display.

In the remote console, click the **CD icon** at the top and select **CD/DVD**. Choose **Scripted Media URL** if you uploaded the ISO online and enter its direct URL. Otherwise, select **Local .iso File** to browse your computer. Either way, the ISO will mount to the virtual CD/DVD drive.

![Mount ISO via CD/DVD](https://i.ibb.co/hFT51ttW/Screenshot-2026-02-19-195547.png)

:::tip Alternative Methods
For other ISO mounting methods including via the Virtual Media interface, refer to the [Own ISO guide](dedicated-iso.md).
:::

With the ISO mounted, use the **Power** menu in the console to reboot. Select **Reset** and the server will restart, booting from the TrueNAS SCALE ISO.

## Installation

Watch the console as the system boots. The TrueNAS SCALE setup screen appears and the installer loads automatically. Loading the installation environment takes a few minutes.

![TrueNAS Setup Screen](https://i.ibb.co/m5DZqt28/Screenshot-2026-02-19-200458.png)

The installer displays **Choose destination media** along with your available disks. Navigate with the **arrow keys** and select which disk to use for the OS. Pick the smallest disk for the OS installation (this entire disk becomes dedicated to TrueNAS SCALE). Press **Space** to select it, then **Enter**.

![Choose Destination Media](https://i.ibb.co/Tqr04pQQ/Screenshot-2026-02-19-200520.png)

A warning appears indicating the installation will **erase** everything on the selected drive. Navigate to **Yes** with the arrow keys and press **Enter**.

![Confirm Erase Drive](https://i.ibb.co/5hMDY8VV/Screenshot-2026-02-19-200533.png)

Next, the installer asks about authentication setup. **Option 1** sets the password now, while **Option 2** lets you configure it later via the web interface. We'll use **Option 2: Configure using Web UI** for more flexibility. Select it and press **Enter**.

![Web UI Authentication Method](https://i.ibb.co/nqBkZzWX/Screenshot-2026-02-19-200633.png)

The installer asks **"Allow EFI boot?"**. Select **Yes** (recommended) and press **Enter**.

![Boot Mode Configuration](https://i.ibb.co/F49Yh86h/Screenshot-2026-02-19-200648.png)

Installation begins and typically takes 15-20 minutes. Watch the progress on screen as files copy and the system configures itself.

![Installation in Progress](https://i.ibb.co/ch5Wtjxz/Screenshot-2026-02-19-201320.png)

When finished, you'll see **"The TrueNAS installation is successful"**. Press **Enter**.

![Installation Successful](https://i.ibb.co/bM1Z1JKm/Screenshot-2026-02-19-201925.png)

Before rebooting, **unmount the ISO** or you'll boot back into the installer. Click the **DVD icon**, select **CD/DVD**, and click **Eject Media**. Reboot using the Power menu or let it restart automatically.

<InlineServiceLink />

## Configuration

After the installation completes, you must configure which disk the server boots from. TrueNAS SCALE has been installed, but the server needs to be told to boot from the correct disk through the RAID controller ROM configuration.

:::info[Critical Step]
After installation, you must configure the boot volume in the RAID controller ROM to ensure the server boots from the correct disk.
:::

**Setting the Boot Disk in ROM**

Watch the console during boot. When **"Press F8 for ROM Configuration for Arrays Utility"** appears, hit **F8** immediately.

![Press F8 for ROM Configuration](https://i.ibb.co/JRnsXDm1/Screenshot-2026-02-19-211321.png)

The ROM Configuration utility opens. Navigate to **Select Boot Volume** with the arrow keys and press **Enter**.

![ROM Configuration Page](https://i.ibb.co/jPcrBX2X/Screenshot-2026-02-19-211338.png)

Your available disks are listed here. Navigate to the disk where TrueNAS SCALE is installed and press **Enter**.

![Choose Boot Disk](https://i.ibb.co/PGXsspCv/Screenshot-2026-02-19-211357.png)

With the disk selected, press **F8** to save. Confirm if asked, then exit the utility. Your server boots into TrueNAS SCALE.

![Save Boot Volume](https://i.ibb.co/rKb0b09P/Screenshot-2026-02-19-211409.png)

**Accessing the Web Interface**

After the first boot, the TrueNAS SCALE console displays the Web UI access URL: `http://[your_server_ip]`. Write down this IP address as you'll need it to access the web interface.

![TrueNAS Console](https://i.ibb.co/B5JfMtw7/Screenshot-2026-02-19-213256.png)

:::tip Network Auto-Configuration
TrueNAS SCALE typically auto-configures network settings via DHCP. Skip this unless you have multiple IP addresses or require a specific static IP.
:::

For manual network configuration, select **1) Configure Network Interfaces** from the console menu. Pick your primary interface (like `enp0s3` or `eth0`), choose **Configure IPv4**, then **Static**. Enter your IP address, subnet mask, and gateway (find these in your ZAP-Hosting Dashboard).

Open a web browser and navigate to `http://[your_server_ip]` using the IP address from the console.

Since we chose **Configure using Web UI** earlier, this is where you set the password. The login page shows `truenas_admin` as the username. Enter a strong password, confirm it, and click **Submit**.

![Set Admin Password](https://i.ibb.co/qL2GdcTs/Screenshot-2026-02-19-214014.png)

:::danger Security Important
Choose a strong, unique password for your TrueNAS admin account. This account has full system access.
:::

After login, the dashboard appears showing system information, network status, storage pools, services, and alerts. You have successfully configured TrueNAS SCALE and are now ready to set up storage.

![TrueNAS Dashboard](https://i.ibb.co/1fM59n9N/Screenshot-2026-02-19-214155.png)

**Creating Storage Pools**

Click **Storage** in the left sidebar, then click the **Create Pool** button.

![Storage - Create Pool](https://i.ibb.co/HLfzKVch/Screenshot-2026-02-19-214307.png)

First, enter a name for your pool, something like `Disk`, `tank`, or whatever makes sense to you. Click **Next** when ready.

![Add Pool Name](https://i.ibb.co/tPJ92GxY/Screenshot-2026-02-19-214433.png)

In the **Data** section, open the **Layout** dropdown and select the configuration that fits your requirements:

- **Stripe**: Maximum usable capacity but no redundancy
- **Mirror**: Stores identical data across two disks, providing redundancy while reducing usable capacity
- **RAIDZ1**: Provides one disk of redundancy
- **RAIDZ2**: Provides two disks of redundancy
- **RAIDZ3**: Provides three disks of redundancy

![Choose Layout](https://i.ibb.co/MyNbGQgL/Screenshot-2026-02-19-214446.png)

Under **Disk Selection**, all your storage disks are listed. Click the ones you want in the pool and they move to the configuration area showing estimated capacity.

:::info Boot Disk Not Available
The installation disk won't show up here as it's exclusively for the operating system.
:::

![Select Disks](https://i.ibb.co/B2df685q/Screenshot-2026-02-19-214553.png)

Leave optional settings as default and click **Next**. The review page shows your configuration including name, layout, disks, and capacity. Verify the configuration and click **Create Pool** to confirm.

![Review and Create Pool](https://i.ibb.co/Y7QKv2Qm/Screenshot-2026-02-19-214634.png)

**Organizing with Datasets**

With your storage pool created, you can now organize your data using datasets. Datasets are logical subdivisions of your storage pool that help separate different types of data. Click **Datasets** in the sidebar. Your new pool appears there (e.g., "Disk").

![Datasets View](https://i.ibb.co/PvW1nwsN/Screenshot-2026-02-19-215343.png)

Click **Add Dataset**. The pool is automatically set as parent. Give it a name like `documents`, `media`, or `backups`. Leave advanced options as default unless you have specific requirements. Click **Save**.

![Add Dataset](https://i.ibb.co/qMsTJ6d5/Screenshot-2026-02-19-215447.png)

**Creating User Accounts**



Click **Credentials** in the sidebar, then **Add**. Pick a username (like `john` or `fileuser`), add the full name, and set a password. Leave primary group, home directory, and shell as default. Scroll to the end and enable the **SMB** option for Windows access.

Customize permissions based on your security requirements. For basic file sharing, default options with SMB enabled are sufficient. Once done, click **Submit** to complete this step.

:::danger Important for SMB Access
Do **not** use `root` or `truenas_admin` for file sharing. These system accounts won't work with SMB. Create dedicated users instead.
:::

![Create User](https://i.ibb.co/FL5Kdnz7/Screenshot-2026-02-19-221642.png)

**Setting Up SMB Shares**

Click **Shares** in the sidebar. Three options appear: Windows (SMB) for Windows/macOS/Linux, Unix (NFS) for Linux/Unix, and Block (iSCSI) for block storage. We'll set up SMB. Click **Add** in the Windows (SMB) Shares section.

![Shares View](https://i.ibb.co/zWJYL56K/Screenshot-2026-02-19-220022.png)

The **Add SMB** dialog opens. For **Path**, browse to your dataset (like `/mnt/Disk/documents`). For **Name**, enter something like `documents` (users see this name on the network). **Purpose** can stay default for most cases. Add a description if you want. Advanced options exist (ACL settings and other options), but leave guest access disabled for security. Click **Save**.

![Add SMB Share](https://i.ibb.co/7MQbCwx/Screenshot-2026-02-19-220046.png)

After creating the share, a popup says the **SMB service is not running**. Click **Start Service**. Also check **Start Automatically** so it runs on boot. The SMB share is now available on the network.

![Start SMB Service](https://i.ibb.co/MxCMn01p/Screenshot-2026-02-19-220120.png)

For NFS shares with Linux/Unix systems, navigate to **Shares** → **Unix (NFS) Shares** and click **Add**. Select your dataset, configure networks and permissions, enable NFS when asked, and save.

<InlineServiceLink />

## Accessing Your Share

To access your share for example through your Windows PC, openthe **File Explorer**. Press right-click on **This PC** (or **My Computer**) and select **Add a network location**.

![Add Network Location](https://i.ibb.co/wZ5hvBF4/Screenshot-2026-03-02-202700.png)

The **Add Network Location Wizard** will open. Continue with **Next** to proceed.

![Network Location Wizard](https://i.ibb.co/0RyJSvG6/Screenshot-2026-02-19-220227.png)

When asked for the location, use this format: `\\[your_server_ip]\[share_name]`. For example: `\\192.168.1.100\documents`. Replace `[your_server_ip]` with your TrueNAS server's IP address and `[share_name]` with the name you gave to the SMB share. Once you have done that, continue with **Next**. 

![Enter Share Path](https://i.ibb.co/dygyN9r/Screenshot-2026-02-19-220358.png)

Enter the **username** and **password** for the user you created in TrueNAS. Don't use `root` or `truenas_admin` as they won't work for SMB. Check **Remember my credentials** to save them for next time. Click **OK**.

![Enter Credentials](https://i.ibb.co/5X3y47rg/Screenshot-2026-02-19-220410.png)

The TrueNAS share is now accessible. Browse files, create folders, and copy data just like any other network drive. You have successfully connected your Windows PC to the TrueNAS share.

![Connected to TrueNAS Share](https://i.ibb.co/fdHK6Mbb/Screenshot-2026-02-19-221436.png)

:::tip Quick Access
For easier access, use **Map network drive** instead of **Add a network location**. The share appears as a drive letter (like `Z:`) in File Explorer.
:::

:::info Accessing from MacOS or Linux
**macOS**: In Finder, press `Cmd+K` and enter `smb://[your_server_ip]/[share_name]`

**Linux**: Use your file manager's "Connect to Server" option with `smb://[your_server_ip]/[share_name]`, or mount via command line using `mount.cifs`
:::

## Conclusion

Congratulations, you have successfully installed and configured TrueNAS SCALE on your server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂