---
id: gameserver_backups
title: Backups
sidebar_label: Backups
---

We offer the possibility to create individual backups per click. This allows you to create backups easily and without much effort as well as import them at any time later. We offer this feature for the server files of your game server as well as for the associated databases. All backups are stored on your storage server, which includes 10GB free storage space by default. If you need more, then you can also upgrade to Premium Storage.

Besides creating backups manually, backups can also be created fully automatically. Backups can be created either daily or weekly at a specified time. After restoring a backup, the server will be at the state at the time of backup creation.


## Create backups manually

Um ein Backup manuell zu erstellen muss der grüne **+** Button neben der Backup Liste gedrückt werden. Im Anschluss startet der Backup Vorgang. 

![img](https://screensaver01.zap-hosting.com/index.php/s/cmtWFxAK2Wr4C9s/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/DPCEK9scWrZMmQG/preview)

> The backup creation process can take a few minutes depending on the file size of your server!


## Create backups automatically

At the bottom of the page you will find more options, including the settings for automated backups. The option **Create backups automatically** needs to be enabled in order for this feature to be active. Furthermore the interval must be set. 

![img](https://screensaver01.zap-hosting.com/index.php/s/PgMSKY7X2eTt9w6/preview)

Depending on the game, it's usually also a good idea to back up the database as well, since important data such as scores, permissions and much more is often stored there. 


## Download/delete backups

If you want to download or delete backups you have to connect to the storage server via FTP. Here you can find instructions to use FTP: [FTP access](gameserver_ftpaccess.md)
![img](https://screensaver01.zap-hosting.com/index.php/s/tPNdJ4YKMtwA635/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/AGdpoZXYpqYGjx8/preview)

There, you can view the user credentials of your storage server and the currently used storage space. If you are connected via FTP, you can download or delete the backups there.
