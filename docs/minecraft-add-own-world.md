---
id: minecraft-add-own-world
title: "Minecraft: Adding your own world to the server"
description: "Learn how to upload and configure custom Minecraft worlds on your server for a personalized gaming experience → Learn more now"
sidebar_label: Add your own world
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

You want to use your own world or a world downloaded from the internet on your server? Then this is the right place for you! All you need is your world and an FTP client. If you don't know what a FTP client is and how to use it, then have a look at the following guide: [Access via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/Rmx6c6n2rP5MqBz/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/SbB6iZmdZtMAPaS/preview" title="How to upload custom MAPS on your Minecraft Server" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

Once the connection to the server has been established via FTP, you can start setting up your own world. To do this, you first have to go to the appropriate directory where the current world is located. It is located in the following directory: /gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/85KLwjPYt3yjHZt/preview)

The new world must now be uploaded to the directory. You can either delete and replace the old **world** folder or upload the new world under a different name. In this example we upload the world with a new name:!

![](https://screensaver01.zap-hosting.com/index.php/s/3DYD5ANgNsCNpkE/preview)

Now the newly uploaded world only needs to be configured in the **server.properties** Config. You can find it in the **game server administration** under **Configs**. There you have to adjust the value of the **level-name=** command:

![](https://screensaver01.zap-hosting.com/index.php/s/idoHWafC3g4AbYL/preview)


After restarting the server, the new world should now be applied. Enjoy your new world! 🙂

<InlineVoucher />

<InlineVoucher />
