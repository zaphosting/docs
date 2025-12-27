---
id: account-backup-storage
title: "Backup Storage: Store, Restore and Download Backups"
description: "Discover how to securely store and manage your backups with scalable storage options for easy restoration and access → Learn more now"
sidebar_label: Backup Storage
---

## Introduction

The Backup Storage provides a centralized location for storing backups created from your services. It allows you to securely keep backup files, restore them directly to services, or download them for local storage.

Each account includes 10 GB of free Backup Storage space. If additional capacity is required, the storage can be expanded up to 200 GB for an additional fee.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZBy57k2pbTcteKg/preview)



## Backup storage functionality

Backups are created directly through the web interface of the respective service. Once a backup is generated, it is automatically stored in the Backup Storage. Stored backups can be used in two ways:

- Restored directly to the corresponding service via its backup function
- Downloaded from the Backup Storage for local use



## Accessing backup files

Backup files become available in the Backup Storage immediately after creation. In addition to restoring backups through the service interface, files can also be accessed via an FTP connection.



## Connecting to Backup Storage via FTP

To access the Backup Storage via FTP, install an FTP client such as FileZilla for your operating system and open the application after installation. Once opened, the FileZilla interface will be displayed:

![img](https://screensaver01.zap-hosting.com/index.php/s/4CrofjFEe7TxYCR/preview)

To establish a connection, enter the FTP access data into the fields at the top of FileZilla. The required connection details can be found in the web interface on the Backup Storage page. Open the Backup Storage section and click the icon located at the top of the menu bar.

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

On the Backup Storage page, the FTP access data is displayed in the highlighted section shown below. Enter the following information in FileZilla:

- **Server**: IP address
- **User name**: FTP username
- **Password**: FTP password

The port does not need to be specified if it is set to **21**. Click **Connect** to establish the connection. After a successful connection, the backups created by your services will be visible in the corresponding directories.

Enter the IP address in FileZilla into the field **Server**, the user into the field **User name** and the password into the field **Password**. You don't need to include the port if it is equal to *21*. Now click on **Connect**. 
If the connection is successful, you will find the backups created by your services in the respective folders.

![img](https://screensaver01.zap-hosting.com/index.php/s/9PAFpxWHiJx9LnT/preview)



## Backup messages and logs

The **Messages** section in the sidebar displays a log of backup related actions. It shows which backup events were triggered, for which service or package, and at what time.

![img](https://screensaver01.zap-hosting.com/index.php/s/nFfDMfQBNeE4Jt4/preview)
