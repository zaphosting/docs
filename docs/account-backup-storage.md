---
id: account-backup-storage
title: Backup Storage
description: How to set up backup storage for ZAP-Hosting servers - ZAP-Hosting.com documentation 
sidebar_label: Backup Storage
---

## What is backup storage?
Backup Storage offers our customers a possibility to create backups via their services. Every customer has a free space of 10GB on his backup storage, which he can use fully. However, for a small surcharge an extension of the storage up to 200GB can be booked.

## How do I access my backup files?
Backup files are placed on the backup storage as soon as a backup is created via the web interface. The files can then either be restored to the respective service using the backup function of that service or downloaded from the backup storage via FTP connection.

### Connect to the backup storage via FTP
To connect to the Backup Storage via FTP, download and install the program [FileZilla](http://www.filezilla.de/download.htm) for your operating system. When the installation is complete, please open the program.
You should now see the FileZilla interface:

![2022-04-08_04-41](https://screensaver01.zap-hosting.com/index.php/s/XHa7gfPBKcGgYj4/preview)

To connect to your backup storage, enter the connection data in the text fields above.
You can find the data for this when you go to the page of your backup storage in the web interface. 
Click on this icon at the top of the menu bar:

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

On the Backup Storage page you will then find your access data for the FTP connection in the box marked in the picture:

![2022-04-08_04-39](https://screensaver01.zap-hosting.com/index.php/s/pziwNeT9jmFC5Ax/preview)

Enter the IP address in FileZilla into the field **Server**, the user into the field **User name** and the password into the field **Password**. You don't need to include the port if it is equal to *21*. Now click on **Connect**. 
If the connection is successful, you will find the backups created by your services in the respective folders.

![2022-04-08_04-41_1](https://screensaver01.zap-hosting.com/index.php/s/K9MZHf8napDMCjT/preview)

![2022-04-08_04-41_2](https://screensaver01.zap-hosting.com/index.php/s/ca7DkJ2T6DpxTFH/preview)

The backups are in packed form as **\*.tar.gz** files in the respective folders and can be unpacked with programs like WinRAR or 7-Zip.

## "Transfer connection interrupted" Error Message

If the error message "Transfer connection interrupted: ECCONABORTED - Connection aborted" appears during the connection or transfer, the transfer mode can be changed from "**Passive**" to "**Active**".
The following steps show how this can be changed in the Filezilla settings.

Press "**Edit**" in your Filezilla client, then open the "**Settings...**" directly:

![2022-04-08_05-16](https://screensaver01.zap-hosting.com/index.php/s/AgrmP6i5aAEr2kr/preview)

After that the "**Settings**" window opens. There you can click on "**FTP**" to see the settings for the FTP connection.
At "**FTP**" the default transfer mode will be set to "**Passive**", there you can select the radio button "**Active**" and confirm the change with "**OK**".

![2022-04-08_05-17](https://screensaver01.zap-hosting.com/index.php/s/REPQieY3Zbm8arM/preview)

As soon as this is done, the FTP connection can be tested again.

## Messages
In the sidebar in the sub-item *Messages* the log is displayed, which shows under which trigger/reason which action was executed during the backups for which package and when.

![2022-04-08_04-42](https://screensaver01.zap-hosting.com/index.php/s/GwtGHoDL7d9r3Ds/preview)
