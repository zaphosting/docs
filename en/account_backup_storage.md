---
id: account_backup_storage
title: Backup Storage
description: How to set up backup storage for ZAP-Hosting servers - ZAP-Hosting.com Documentation 
sidebar_label: Backup Storage
---

## 💾 What is backup storage?
Backup Storage offers our customers a possibility to create backups via their services. Every customer has a free space of 10GB on his backup storage, which he can use fully. However, for a small surcharge an extension of the storage up to 200GB can be booked.

## 🔗 How do I access my backup files?
Backup files are placed on the backup storage as soon as a backup is created via the web interface. The files can then either be restored to the respective service using the backup function of that service or downloaded from the backup storage via FTP connection.

### Connect to the backup storage via FTP
To connect to the Backup Storage via FTP, download and install the program [FileZilla](http://www.filezilla.de/download.htm) for your operating system. When the installation is complete, please open the program.
You should now see the FileZilla interface:

![](https://screensaver01.zap-hosting.com/index.php/s/e8rNzCFBNSmtibY/preview)

To connect to your backup storage, enter the connection data in the text fields above.
You can find the data for this when you go to the page of your backup storage in the web interface. 
Click on this icon at the top of the menu bar:

![](https://screensaver01.zap-hosting.com/index.php/s/eFE7jHeFdRCd3C3/preview)


On the Backup Storage page you will then find your access data for the FTP connection in the box marked in the picture:

![](https://screensaver01.zap-hosting.com/index.php/s/SsafnzJxa8orgDT/preview)

Enter the IP address in FileZilla into the field **Server**, the user into the field **User name** and the password into the field **Password**. You don't need to include the port if it is equal to *21*. Now click on **Connect**. 
If the connection is successful, you will find the backups created by your services in the respective folders.

![](https://screensaver01.zap-hosting.com/index.php/s/mcALKRTZxzSmF8m/preview)

The backups are in packed form as **\*.tar.gz** files in the respective folders and can be unpacked with programs like WinRAR or 7-Zip.

## 🚩 "Transfer connection interrupted" Error Message

If the error message "Transfer connection interrupted: ECCONABORTED - Connection aborted" appears during the connection or transfer, the transfer mode can be changed from "**Passive**" to "**Active**".
The following steps show how this can be changed in the Filezilla settings.

![](https://screensaver01.zap-hosting.com/index.php/s/3Bjwr2it7RP323X/preview)

Press "**Edit**" in your Filezilla client, then open the "**Settings...**" directly:

![](https://screensaver01.zap-hosting.com/index.php/s/ipKHjQG5YCFP5Jb/preview)

After that the "**Settings**" window opens. There you can click on "**FTP**" to see the settings for the FTP connection.
At "**FTP**" the default transfer mode will be set to "**Passive**", there you can select the radio button "**Active**" and confirm the change with "**OK**".

![](https://screensaver01.zap-hosting.com/index.php/s/Bo7yf5J5Dxipwnk/preview)

As soon as this is done, the FTP connection can be tested again.

## ℹ Messages
In the sidebar in the sub-item *Messages* the log is displayed, which shows under which trigger/reason which action was executed during the backups for which package and when.

![](https://screensaver01.zap-hosting.com/index.php/s/woSrGZs9442XGqw/preview)
