---
id: gameserver-backups
title: 'Game server: Create, download and import backups'
description: Information on how to create, download and restore backups for your game server from ZAP-Hosting -ZAP-Hosting.com 
sidebar_label: Backups
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Introduction
We offer the possibility to create individual backups per click. This allows you to create backups easily and without much effort as well as import them at any time later. We offer this feature for the server files of your game server as well as for the associated databases. All backups are stored on your storage server, which includes 10GB free storage space by default. If you need more, then you can also upgrade to Premium Storage.

Besides creating backups manually, backups can also be created fully automatically. Backups can be created either daily or weekly at a specified time. After restoring a backup, the server will be at the state at the time of backup creation.

<YouTube videoId="yUDAcfyDELc" title="How to create BACKUPS for your Server!" description="Feel like you understand better when you see things in action?  We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>


## Create backups manually

Press the green **+** button next to the backup list to create a backup manually. The backup process will start afterwards,  

:::info
The backup creation process can take a few minutes depending on the file size of your server!
:::



## Create backups automatically

At the bottom of the page you will find more options, including the settings for automated backups. The option **Create backups automatically** needs to be enabled in order for this feature to be active. Furthermore the interval must be set. 

![image](https://user-images.githubusercontent.com/13604413/159171260-f3d1775e-25bc-45a0-b4aa-d6bdc13bfa0f.png)

Depending on the game, it's usually also a good idea to back up the database as well, since important data such as scores, permissions and much more is often stored there. 

>⚠️ Having sufficient storage space is essential for creating regular backups. Make sure that you always have enough storage available. 




## Download/delete backups

If you want to download or delete backups you have to connect to the storage server via FTP. Here you can find instructions to use FTP: [FTP access](gameserver-ftpaccess.md)
![image](https://user-images.githubusercontent.com/13604413/159171263-ef2c31b3-1541-4f41-b7b1-e8a70c96a422.png)

![image](https://user-images.githubusercontent.com/13604413/159171264-187a5aca-1829-41a0-967b-f9125df236c1.png)

There, you can view the user credentials of your storage server and the currently used storage space. If you are connected via FTP, you can download or delete the backups there.
