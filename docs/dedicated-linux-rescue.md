---
id: dedicated-linux-rescue
title: "Dedicated Server: Rescue your files using the System Rescue"
description: "Discover how to recover data and create backups from a non-booting server using SystemRescue ISO and secure file transfer → Learn more now"
sidebar_label: System Rescue (Backup)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Your server is not booting anymore? You are locked out of your system or want to create a backup before making changes?
By booting your server with the **SystemRescue ISO**, you can still access your drives, restore important files, and create backups locally. This works even if the original operating system is no longer accessible.

To transfer the recovered data securely, you can use **SFTP (Secure File Transfer Protocol)**. This method allows you to copy files from the rescue system to your local computer or to another server over a secure and encrypted connection.





## Preparation

To perform the data backup, you will use the **SystemRescue ISO version 12.01**.
 Start by accessing the interface of your dedicated server and navigate to the **Initial installation** section. 

Select the **SystemRescue 12.01** ISO from the available options. After selecting the correct ISO, click on **Boot from ISO** to initiate the boot process. Once the server has started from the ISO, connect to it via the [iLO interface](dedicated-ilo.md) to proceed.

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)



In the **iLO management interface**, open the **HTML console** to access the remote display of your server. Once the console is active, you will see the boot menu for the **SystemRescue ISO**. From here, select the option to boot using the **default parameters**. 

This ensures that SystemRescue starts with the recommended standard configuration, providing a stable and ready-to-use environment for system maintenance or data backup tasks.

![img](https://screensaver01.zap-hosting.com/index.php/s/gzLJxw9FWZs4AJ7/download)


## Mounting the drive(s)

Before mounting a drive, it’s important to get an overview of the available storage devices and their partitions. You can do this with the following command:

```
fdisk -l
```

This command lists all detected drives along with their partition details. The output includes:

- Connected storage devices (e.g., `/dev/sda`, `/dev/sdb`),
- The size of each drive,
- Partition types,
- Available partitions (e.g., `/dev/sda1`, `/dev/sda2`, …),
- The filesystem type (if detected).

In this example, the drive `/dev/sda` has three partitions: `/dev/sda1`,  `/dev/sda2` and `/dev/sda3`. Make sure to select the correct partition before mounting. The `fdisk -l` output helps you avoid mistakes by clearly showing which drive contains which data. Example:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

Once you have identified the correct partition, the next step is to create a directory that will serve as the mount point. This is the location where the partition will be made accessible. Next, mount the desired partition into this directory. It is recommended to perform the mount operation in **read-only mode** to ensure safe access to the data. 

For creating the mount point and attaching the partition, use the following commands:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Replace `/dev/sdaX` with the correct partition identifier you found using `fdisk -l`. In this example, `/dev/sda2` would be the correct partition for our disk.

## Configuring the firewall

For security reasons, SystemRescue enables its firewall by default. This means all incoming connections are blocked to protect the system from unauthorized access.

However, in this case, you need to allow a connection from your local machine to the SFTP server running on SystemRescue. To do this, you must either configure the firewall to allow SFTP traffic or temporarily disable it.

If you are working in a trusted network environment, the easiest and quickest solution is to stop the firewall service in SystemRescue with the following command:

```
systemctl stop iptables
```



## Setting the root password

The SFTP client must authenticate using a username and a password so it can access the data from the SFTP server. The system root account is used so the client can access files that are visible in SystemRescue. By default, authentication as the root account in SystemRescue is not allowed. A password must be set to allow the client to authenticate. Define a password by using the following command:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Data transfer

You are now ready to back up your data. To do this, simply open any FTP client of your choice and establish a connection to your server. Make sure to select `SFTP` as the transfer protocol. For the hostname, enter your server’s `IP address`, use port `21` and log in with the username `root` and the `password` you have previously set.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

When you connect to a server via **SFTP** for the first time, WinSCP shows this security prompt. The warning appears because the server's **host key** is not yet stored in your local cache.

In this situation, where you know the IP address is correct and you have intentionally started this connection, **it is safe to trust the server**. Simply click **"Yes"** to confirm. This will add the server’s key to your cache so you won’t be asked again for this server in the future.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Now that you’re connected, navigate to the **rescue directory** you created earlier. From there, you will have access to your files and can start downloading them to your local machine. Simply browse through the folders, select the data you want to back up and transfer it securely via SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Conclusion

You have now successfully rescued and backed up your important files.
 This means your data is safe and ready to be restored whenever needed. At this point, you can proceed with further actions, such as reinstalling your server, repairing the system, or migrating your data to a new environment. 

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


