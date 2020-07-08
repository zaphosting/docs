---
id: account_backup_storage
title: Backup Storage
sidebar_label: Backup Storage
---

## 💾 What is backup storage?
Backup Storage offers our customers a possibility to create backups via their services. Every customer has a free space of 10GB on his backup storage, which he can use fully. However, for a small surcharge an extension of the storage up to 200GB can be booked.

## 🔗 How do I access my backup files?
Backup files are placed on the backup storage as soon as a backup is created via the web interface. The files can then either be restored to the respective service using the backup function of that service or downloaded from the backup storage via FTP connection.

### Connect to the backup storage via FTP
To connect to the Backup Storage via FTP, download and install the program [FileZilla](http://www.filezilla.de/download.htm) for your operating system. When the installation is complete, please open the program.
You should now see the FileZilla interface:
![FileZilla Interface](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/mPNPStKTGRf9WgY?x=1879&y=589&a=true&file=filezilla_He5PmWIhKh.png&scalingup=0)


To connect to your backup storage, enter the connection data in the text fields above.
You can find the data for this when you go to the page of your backup storage in the web interface. 
Click on this icon at the top of the menu bar:

![Backup Storage](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/6iBtMeKqoZNdwZL?x=1879&y=589&a=true&file=opera_rPyFkxK0XV.png&scalingup=0)


On the Backup Storage page you will then find your access data for the FTP connection in the box marked in the picture:

![FTP Backup Storage Access](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/nsipay5QQL9fqxb?x=1879&y=589&a=true&file=opera_edccM67vF2.png&scalingup=0)

Enter the IP address in FileZilla into the field **Server**, the user into the field **User name** and the password into the field **Password**. You don't need to include the port if it is equal to *21*. Now click on **Connect**. 
If the connection is successful, you will find the backups created by your services in the respective folders.

![FileZilla Connection Successful](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/RnHGDZD2ACH6e5G?x=1879&y=589&a=true&file=filezilla_PbrOBKwKHg.png&scalingup=0)


The backups are in packed form as **\*.tar.gz** files in the respective folders and can be unpacked with programs like WinRAR or 7-Zip.

## ℹ Messages
In the sidebar in the sub-item *Messages* the log is displayed, which shows under which trigger/reason which action was executed during the backups for which package and when.

![Backup Messages](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/LEiR87xeSJpa6nf?x=1879&y=589&a=true&file=opera_GpvbPoCSex.png&scalingup=0)
