---
id: arma3-gamemode
title: "Arma 3: Change game mode"
description: Information on how to change the game mode on your Arma 3 server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Change game mode
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Set the game mode

To change the game mode on your Arma 3 server you have to upload the appropriate mission file for the game mode to your server.

We currently offer the following mission files without the need for you to upload them:

- Arma 3 Wasteland

These are already in your **mpmissions** directory.

<InlineVoucher />

## Upload the mission file

For uploading the mission file you have to connect to your server via FTP before: [Gameserver FTP connection](gameserver-ftpaccess.md).
There you upload the corresponding mission file into your **mpmissions** directory which you can find under **/gxxxxxx/arma3/**.
In this example we upload the game mode **King of the Hill** to our server.

![image](https://screensaver01.zap-hosting.com/index.php/s/rDS7DsEfQskZ9Y3/preview)


## Loading the mission file on the server

To load the mission file from the server, go to your Arma 3 server interface and click on the **Configs** tab in the menu on the left:

![image](https://screensaver01.zap-hosting.com/index.php/s/dxDWHiFJy5e4qYq/preview)

There you edit the file **server.cfg** and enter the name of your mission file as shown in the picture: 

![image](https://screensaver01.zap-hosting.com/index.php/s/7JQED8wC9WGBdYB/preview)

![image](https://screensaver01.zap-hosting.com/index.php/s/7jtRK3YRD7wWiij/preview)

After that, click **Save** and you can start your server. The new mission file will be loaded.
