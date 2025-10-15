---
id: gameserver-backups
title: 'Game server: Create, download and import backups'
description: "Discover how to easily create and restore manual or automatic backups for your game server to protect your data → Learn more now"
sidebar_label: Backups
services:
  - gameserver
  - premium-storage
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
We offer the possibility to create individual backups per click. This allows you to create backups easily and without much effort as well as import them at any time later. We offer this feature for the server files of your game server as well as for the associated databases. All backups are stored on your storage server, which includes 10GB free storage space by default. If you need more, then you can also upgrade to Premium Storage.

Besides creating backups manually, backups can also be created fully automatically. Backups can be created either daily or weekly at a specified time. After restoring a backup, the server will be at the state at the time of backup creation.

<YouTube videoId="yUDAcfyDELc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/CTWHD2Lq4QqFWQw/preview" title="How to create BACKUPS for your Server!" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

<InlineVoucher />

## Create backups manually

Press the green **+** button next to the backup list to create a backup manually. The backup process will start afterwards,  

:::info
The backup creation process can take a few minutes depending on the file size of your server!
:::

## Create backups automatically

At the bottom of the page you will find more options, including the settings for automated backups. The option **Create backups automatically** needs to be enabled in order for this feature to be active. Furthermore the interval must be set. 

![](https://screensaver01.zap-hosting.com/index.php/s/gB9n6JspdNW73bj/preview)

Depending on the game, it's usually also a good idea to back up the database as well, since important data such as scores, permissions and much more is often stored there. 

>⚠️ Having sufficient storage space is essential for creating regular backups. Make sure that you always have enough storage available. 




## Download/delete backups

If you want to download or delete backups you have to connect to the storage server via FTP. Here you can find instructions to use FTP: [Access via FTP](gameserver-ftpaccess.md)
![](https://screensaver01.zap-hosting.com/index.php/s/tfJoBpaELEPKMij/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/q3E8XTX8gRQoasY/preview)

There, you can view the user credentials of your storage server and the currently used storage space. If you are connected via FTP, you can download or delete the backups there.

<InlineVoucher />
