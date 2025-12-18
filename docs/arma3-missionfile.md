---
id: arma3-missionfile
title: "Arma 3: Upload your own mission file"
description: "Discover how to upload and load custom mission files on your Arma 3 server for a personalized gaming experience → Learn more now"
sidebar_label: Upload your own mission file
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Upload the mission file

For uploading your own mission file you have to connect to your server via FTP before: [Access via FTP](gameserver-ftpaccess.md).
There you have to upload the mission file into your **mpmissions** directory which you can find under **/gxxxxxx/arma3/**.
In this example we upload the mission file **King_of_the_hill.Altis** to our server.

![](https://screensaver01.zap-hosting.com/index.php/s/jkfK9X48qj2e7Pn/preview)

<InlineVoucher />

## Loading the mission file on the server

To load the mission file from the server, go to your Arma 3 server interface and click on the **Configs** tab in the menu on the left:

![](https://screensaver01.zap-hosting.com/index.php/s/PD98ATq8xHdjy8Q/preview)

There you edit the file **server.cfg** and enter the name of your mission file as shown in the picture: 

![](https://screensaver01.zap-hosting.com/index.php/s/aG7QESxyTNpATsG/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/6TZ7mc578pcHpbF/preview)

After that, click **Save** and you can start your server. The new mission file will be loaded.

<InlineVoucher />
