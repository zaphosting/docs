---
id: dedicated-truenas-scale
title: "Dedicated Server: Installing TrueNAS SCALE"
description: "Learn how to install TrueNAS SCALE on your dedicated server using a custom ISO for storage and NAS solutions → Step-by-step guide"
sidebar_label: Installing TrueNAS SCALE
services:
  - dedicated
---

## Introduction

TrueNAS SCALE is an Open Source software-defined storage (SDS) platform that provides enterprise-grade features including data protection, file sharing, and virtualization capabilities. Built on Debian Linux, it offers both powerful storage management through its web interface and the flexibility of Linux.

This guide focuses on installing TrueNAS SCALE on **Dedicated Servers** where it can fully leverage direct hardware access to storage devices.

:::danger VPS Not Suitable for TrueNAS SCALE
**VPS systems come with only a single disk.** Since TrueNAS SCALE uses the entire boot disk for the operating system, you will **not be able to create any storage pools** on a VPS. This makes TrueNAS SCALE essentially **unusable** on VPS for its intended purpose (storage and NAS functionality). VPS can only be used for testing the installation process itself, not for actual storage operations. **For any practical use, a Dedicated Server with at least 2 disks is required.**
:::

### Use Cases

TrueNAS SCALE on a dedicated server is ideal for:
- Centralized file storage with SMB/NFS sharing
- Media server backend (Plex, Jellyfin)
- Backup and snapshot management
- Virtual machine hosting
- Container-based applications
- iSCSI storage provisioning

## Prerequisites

Before beginning the installation, ensure you have the following:

### Minimum System Requirements

| Component | Requirement |
|-----------|-------------|
| **CPU** | 2 cores minimum (4+ recommended) |
| **RAM** | 8 GB minimum (16 GB+ recommended) |
| **Storage** | **At least 2 disks**: One for the OS (16 GB minimum) and one or more for storage pools |
| **Network** | Active network connection |

:::danger Two Disks Required
TrueNAS SCALE installs on and occupies an entire disk for the boot device. You must have at least two disks: one for the operating system and at least one additional disk to create storage pools. A single-disk system cannot be used for storage functionality.
:::

## Obtaining the TrueNAS SCALE ISO

Before installation, you need to obtain the TrueNAS SCALE ISO file:

1. Visit the official [TrueNAS website](https://www.truenas.com/download-truenas-scale/)
2. Download the latest stable release of TrueNAS SCALE
3. Upload the ISO to a publicly accessible location (your own web server or cloud storage) **OR** keep it locally for direct mounting

:::tip ISO Hosting
If you plan to mount via URL in the remote console, ensure your ISO file URL ends with `.iso` and is publicly accessible without authentication.
:::

## Preparation

For the installation and configuration of TrueNAS SCALE, it is initially important to mount the corresponding ISO file. The following section will guide you through accessing your server's management interface and mounting the ISO.

## Mounting the ISO

### Access the Control Panel

1. Log into your [ZAP-Hosting Dashboard](https://zap-hosting.com/en/customer/)
2. Navigate to your Dedicated Server in the service list
3. Open the server management page
4. Click on **Activate iLO** to access the server management interface

![Activate iLO](https://i.ibb.co/9mL2hxZg/Screenshot-2026-02-19-194713.png)

### Open the Integrated Remote Console

1. Once in the iLO interface, locate **Integrated Remote Console**
2. Choose your preferred console type (HTML5, .NET, or Java Web Start) and click to launch it
3. The console will open in a new window, giving you direct access to your server's display

![Open Integrated Remote Console](https://i.ibb.co/0pThWjFF/Screenshot-2026-02-19-195448.png)

### Mount the ISO via Remote Console

**Mounting the ISO in the Remote Console**

1. In the Integrated Remote Console, click on the **CD icon** at the top toolbar
2. Select **CD/DVD**
3. Choose **Scripted Media URL** and enter the direct URL to your TrueNAS SCALE ISO file
   - Alternatively, select **Local .iso File** to browse and select the ISO from your computer
4. The ISO will be mounted to the virtual CD/DVD drive

![Mount ISO via CD/DVD](https://i.ibb.co/hFT51ttW/Screenshot-2026-02-19-195547.png)

:::tip Alternative Methods
For other ISO mounting methods including via the Virtual Media interface, refer to the [Own ISO guide](dedicated-iso.md).
:::

### Reboot the Server

1. After mounting the ISO, reboot your server using the **Power** menu in the console
2. Select **Reset** to restart the server
3. The server will now boot from the TrueNAS SCALE ISO

## Installing TrueNAS SCALE

### Boot into the Installer

1. Watch the boot process in the Integrated Remote Console
2. The TrueNAS SCALE setup screen will appear
3. The installer will load automatically into the TrueNAS installation menu

![TrueNAS Setup Screen](https://i.ibb.co/m5DZqt28/Screenshot-2026-02-19-200458.png)

The system will load the installation environment. This may take a few minutes.

### Choose Destination Media (Installation Disk)

1. The installer will display **Choose destination media**
2. A list of available disks will be shown with their sizes
3. Use the **arrow keys** to navigate and select the disk you want to use for the OS installation
   - This should typically be your smallest disk if you have multiple disks
   - Remember, this disk will be entirely dedicated to TrueNAS SCALE and not available for data storage
4. Press **Space** to select the disk
5. Press **Enter** to continue

![Choose Destination Media](https://i.ibb.co/Tqr04pQQ/Screenshot-2026-02-19-200520.png)

### Confirm Installation

1. A warning will appear stating that the installation will **erase** all data on the selected drive
2. Use the **arrow keys** to select **Yes**
3. Press **Enter** to confirm

![Confirm Erase Drive](https://i.ibb.co/5hMDY8VV/Screenshot-2026-02-19-200533.png)

### Web UI Authentication Method

The installer will ask you to choose a Web UI authentication method:

**Option 1: Administrative user (truenas_admin)**
- You will set the admin password during installation (next screen)
- Password is configured immediately

**Option 2: Configure using Web UI**
- Password will be set when you first access the web interface
- More flexible for initial setup

For this guide, we'll choose **Option 2: Configure using Web UI**. Use the arrow keys to select and press **Enter**.

![Web UI Authentication Method](https://i.ibb.co/nqBkZzWX/Screenshot-2026-02-19-200633.png)

### Boot Mode Configuration

The installer will ask: **"Allow EFI boot?"**

- Select **Yes** for modern systems (recommended for most dedicated servers)
- Press **Enter** to continue

![Boot Mode Configuration](https://i.ibb.co/F49Yh86h/Screenshot-2026-02-19-200648.png)

### Installation Progress

The installation process will now begin. This typically takes 15-20 minutes depending on hardware.

![Installation in Progress](https://i.ibb.co/ch5Wtjxz/Screenshot-2026-02-19-201320.png)

You can monitor the progress on screen as files are copied and the system is configured.

### Complete Installation

1. Once installation is complete, you'll see **"The TrueNAS installation is successful"** message
2. The system will prompt you to reboot
3. Press **Enter** to acknowledge

![Installation Successful](https://i.ibb.co/bM1Z1JKm/Screenshot-2026-02-19-201925.png)

:::danger Important: Unmount ISO Before Reboot
Before the system reboots, you **must unmount/eject the ISO** from the virtual media to prevent booting back into the installer.

**To unmount the ISO:**
- Click the **DVD icon** at the top of the console
- Select **CD/DVD**
- Click **Eject Media**
:::

4. Now reboot the server using the Power menu or let it reboot automatically

## Configuring Boot Volume

### Setting the Boot Disk in ROM Configuration

:::info Critical Step
After installation, you must configure the boot volume in the RAID controller ROM to ensure the server boots from the correct disk.
:::

### Access ROM Configuration

1. Watch the server boot process in the console
2. When you see the message **"Press F8 for ROM Configuration for Arrays Utility"**, immediately press **F8**

![Press F8 for ROM Configuration](https://i.ibb.co/JRnsXDm1/Screenshot-2026-02-19-211321.png)

### Select Boot Volume

1. You will enter the ROM Configuration utility
2. Use the arrow keys to navigate to option **4) Select Boot Volume**
3. Press **Enter**

![ROM Configuration Page](https://i.ibb.co/jPcrBX2X/Screenshot-2026-02-19-211338.png)

### Choose the Boot Disk

1. A list of available disks will be displayed
2. Use the arrow keys to select the disk where you installed TrueNAS SCALE
3. Press **Enter** to select it

![Choose Boot Disk](https://i.ibb.co/PGXsspCv/Screenshot-2026-02-19-211357.png)

### Save Boot Volume Configuration

1. After selecting your disk, press **F8** to save the boot volume configuration
2. Confirm if prompted
3. Exit the ROM Configuration utility

![Save Boot Volume](https://i.ibb.co/rKb0b09P/Screenshot-2026-02-19-211409.png)

4. The server will now boot into TrueNAS SCALE

## Initial Configuration

### Verify TrueNAS Console

After the first successful boot from the correct disk, the TrueNAS SCALE console will display:
- Web UI access URL
- Console menu options

![TrueNAS Console](https://i.ibb.co/B5JfMtw7/Screenshot-2026-02-19-213256.png)

The console will show the Web UI URL like:
```
http://YOUR-SERVER-IP
```

Make note of this IP address as you'll need it to access the web interface.

### Configure Network (If Needed)

:::tip Network Auto-Configuration
In most cases, TrueNAS SCALE will automatically configure the network using DHCP or detect your server's network settings. You can skip this step unless you have multiple IP addresses or need to configure a specific static IP.
:::

If you need to configure additional IPs or a specific static IP address:

1. From the console menu, select **1) Configure Network Interfaces**
2. Choose your primary network interface (e.g., `enp0s3` or `eth0`)
3. Select **Configure IPv4**
4. Choose **Static** IPv4 configuration
5. Enter your IP address, subnet mask, and gateway
6. Save the configuration

For dedicated servers, you can find your assigned IP address and network details in the ZAP-Hosting Dashboard.

### Access the Web Interface

1. Open a web browser on your computer
2. Navigate to `http://YOUR-SERVER-IP` (use the IP address shown on the console)
3. You may see a security warning about a self-signed certificate - this is normal, click to proceed anyway

### Set Admin Password

Since we chose **"Configure using Web UI"** during installation, you'll be prompted to set the password on first access.

1. The login page will appear with the username field pre-filled as **truenas_admin**
2. You will need to set a password for the **truenas_admin** user
3. Enter a strong, secure password
4. Confirm the password
5. Click **Submit** or **Login**

![Set Admin Password](https://i.ibb.co/qL2GdcTs/Screenshot-2026-02-19-214014.png)

:::danger Security Important
Choose a strong, unique password for your TrueNAS admin account. This account has full system access.
:::

### TrueNAS Dashboard

After successful login, you'll be directed to the TrueNAS SCALE dashboard.

![TrueNAS Dashboard](https://i.ibb.co/1fM59n9N/Screenshot-2026-02-19-214155.png)

The dashboard displays:
- System information and resource usage
- Network status
- Storage pools (currently none)
- Services status
- Recent alerts

You're now ready to configure storage and shares!

## Configuring Storage

### Creating a Storage Pool

With TrueNAS SCALE installed, you can now create storage pools using your additional disks.

:::info Boot Disk Not Available
The disk used for TrueNAS installation will **not** appear in the available disks list for pool creation, as it's dedicated to the operating system.
:::

### Navigate to Storage

1. In the left sidebar menu, click on **Storage**
2. Click the blue **Create Pool** button

![Storage - Create Pool](https://i.ibb.co/HLfzKVch/Screenshot-2026-02-19-214307.png)

### Name Your Pool

1. Enter a name for your pool (e.g., `Disk`, `tank`, or any descriptive name)
2. Click **Next** to continue

![Add Pool Name](https://i.ibb.co/tPJ92GxY/Screenshot-2026-02-19-214433.png)

### Configure Data Layout

1. In the **Data** section, click on **Layout** dropdown
2. Choose a layout based on your needs and available disks:
   - **Stripe**: Maximum capacity, no redundancy (requires 1+ disks)
   - **Mirror**: Data redundancy, 50% usable capacity (requires 2+ disks)
   - **RAIDZ1**: One disk of redundancy (requires 3+ disks)
   - **RAIDZ2**: Two disks of redundancy (requires 4+ disks)
   - **RAIDZ3**: Three disks of redundancy (requires 5+ disks)
   - **dRAID1/2/3**: Distributed RAID variants for large arrays

![Choose Layout](https://i.ibb.co/MyNbGQgL/Screenshot-2026-02-19-214446.png)

### Select Disks

1. In the same interface, under **Available Disks**, you'll see your available storage disks
2. Click on the disk(s) you want to add to the pool
3. The selected disk(s) will move to the pool configuration area
4. Review the estimated capacity shown

![Select Disks](https://i.ibb.co/B2df685q/Screenshot-2026-02-19-214553.png)

### Review and Create

1. Continue with any optional settings (can be left as default)
2. Click **Next** to reach the Review page
3. Review your pool configuration:
   - Pool name
   - Layout type
   - Selected disks
   - Estimated capacity
4. Click **Create Pool** to finalize

![Review and Create Pool](https://i.ibb.co/Y7QKv2Qm/Screenshot-2026-02-19-214634.png)

5. Confirm the creation when prompted

The pool will be created and you'll be returned to the Storage overview.

### Creating Datasets

Datasets are logical subdivisions of your storage pool that help organize your data.

### Access Datasets

1. In the left sidebar, click on **Datasets**
2. You'll see your newly created pool listed (e.g., "Disk")

![Datasets View](https://i.ibb.co/PvW1nwsN/Screenshot-2026-02-19-215343.png)

### Add a Dataset

1. Click the **Add Dataset** button
2. Your pool will be shown as the parent
3. Enter a name for the dataset (e.g., `documents`, `media`, `backups`)

![Add Dataset](https://i.ibb.co/qMsTJ6d5/Screenshot-2026-02-19-215447.png)

4. Configure dataset options (optional):
   - **Compression**: LZ4 compression is enabled by default (recommended)
   - **Quota**: Set storage limits if needed
5. Click **Save**

Your dataset will be created as a child of your pool (e.g., `Disk/documents`).

### Creating Users for Share Access

Before setting up shares, you need to create users who will access them.

:::danger Important for SMB Access
Do **not** use the `root` or `truenas_admin` accounts for file sharing access. These system accounts will not work with SMB shares. You must create dedicated user accounts.
:::

1. In the left sidebar, click on **Credentials**
2. Click the **Add** button to create a new user
3. Configure the user:
   - **Username**: Choose a username (e.g., `john`, `fileuser`)
   - **Full Name**: Enter the user's full name
   - **Password**: Set a strong password
   - **Confirm Password**: Re-enter the password
   - **Primary Group**: Leave as default or create a group
   - **Home Directory**: Can leave as default
   - **Shell**: Leave as default
   - **Samba Authentication**: **Enable this option** to allow SMB/Windows access
4. Set permissions according to your needs
5. Click **Submit** to create the user

![Create User](https://i.ibb.co/FL5Kdnz7/Screenshot-2026-02-19-221642.png)

:::tip Permissions
Customize permissions based on your security requirements. For basic file sharing, default options with SMB Authentication enabled are sufficient.
:::

### Setting Up Shares

Now you can make your storage accessible over the network.

**SMB Share (Windows/macOS/Linux)**

### Navigate to Shares

1. In the left sidebar, click on **Shares**
2. You'll see three options:
   - **Windows (SMB) Shares** - for Windows, macOS, and Linux clients
   - **Unix (NFS) Shares** - for Linux/Unix clients
   - **Block (iSCSI)** - for block-level storage
3. We'll use Windows SMB shares. Click **Add** in the Windows (SMB) Shares section

![Shares View](https://i.ibb.co/zWJYL56K/Screenshot-2026-02-19-220022.png)

### Configure SMB Share

1. In the **Add SMB** dialog:
   - **Path**: Click to browse and select your dataset path (e.g., `/mnt/Disk/documents`)
   - **Name**: Enter a share name (e.g., `documents`) - this is what users will see on the network
   - **Purpose**: Choose based on your use case (default is usually fine)
   - **Description**: Optional description of the share
2. Configure advanced options if needed (optional):
   - **ACL**: Access Control List settings
   - **Guest Access**: Allow anonymous access (not recommended for security)
3. Click **Save**

![Add SMB Share](https://i.ibb.co/7MQbCwx/Screenshot-2026-02-19-220046.png)

### Start the SMB Service

1. After creating the share, a popup will appear indicating the **SMB service is not running**
2. Click **Start Service** or **Enable Service** to start it
3. Optionally, check **Start Automatically** to ensure it starts on boot

![Start SMB Service](https://i.ibb.co/MxCMn01p/Screenshot-2026-02-19-220120.png)

Your SMB share is now active and accessible from the network!

**NFS Share (Linux/Unix)** - Optional

If you need NFS shares for Linux/Unix clients:

1. Navigate to **Shares** → **Unix (NFS) Shares**
2. Click **Add**
3. Select your dataset path
4. Configure networks and permissions
5. Enable the NFS service when prompted
6. Click **Save**

## Accessing Your SMB Share from Windows

Now that your SMB share is configured, you can access it from Windows clients.

### Open Network Location Wizard

1. On your Windows PC, open **File Explorer**
2. Right-click on **This PC** (or **My Computer**)
3. Select **Add a network location**

![Add Network Location](https://i.ibb.co/wZ5hvBF4/Screenshot-2026-03-02-202700.png)

### Begin the Wizard

1. The **Add Network Location Wizard** will open
2. Click **Next** to proceed

![Network Location Wizard](https://i.ibb.co/0RyJSvG6/Screenshot-2026-02-19-220227.png)

### Enter the Share Path

1. When prompted for the location, enter the path in the format:
   ```
   \\SERVER-IP\SHARE-NAME
   ```
   For example:
   ```
   \\192.168.1.100\documents
   ```
2. Replace `SERVER-IP` with your TrueNAS server's IP address
3. Replace `SHARE-NAME` with the name you gave to the SMB share
4. Click **Next**

![Enter Share Path](https://i.ibb.co/dygyN9r/Screenshot-2026-02-19-220358.png)

### Enter Credentials

1. You'll be prompted for username and password
2. Enter the **username** and **password** of the user you created earlier
   - Do **not** use `root` or `truenas_admin` - these will not work
   - Use the dedicated user account you created with Samba Authentication enabled
3. Optionally, check **Remember my credentials** for future access
4. Click **OK**

![Enter Credentials](https://i.ibb.co/5X3y47rg/Screenshot-2026-02-19-220410.png)

### Connected!

You should now be connected to your TrueNAS share! You can:
- Browse files and folders
- Create new files and directories
- Copy files to and from the share
- Access it like any other network drive

![Connected to TrueNAS Share](https://i.ibb.co/fdHK6Mbb/Screenshot-2026-02-19-221436.png)

:::tip Quick Access
You can also map the share as a network drive using **Map network drive** instead of **Add a network location** for even easier access. The drive will appear with a drive letter (e.g., Z:) in File Explorer.
:::

:::info Accessing from MacOS or Linux
**macOS**: In Finder, press `Cmd+K` and enter `smb://SERVER-IP/SHARE-NAME`

**Linux**: Use your file manager's "Connect to Server" option with `smb://SERVER-IP/SHARE-NAME`, or mount via command line using `mount.cifs`
:::


## Conclusion

Congratulations, you have successfully installed and configured TrueNAS SCALE on your dedicated server! You now have a powerful, enterprise-grade storage solution capable of managing your data with advanced features like snapshots, replication, and flexible sharing options. 

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! For TrueNAS-specific questions, the [TrueNAS Community Forums](https://forums.truenas.com/) are also an excellent resource.