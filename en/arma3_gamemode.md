---
id: arma3_gamemode
title: Change game mode
sidebar_label: Change game mode
---


## Set the game mode

To change the game mode on your ArmA 3 server you have to upload the appropriate mission file for the game mode to your server.

We currently offer the following mission files without the need for you to upload them:

- ArmA 3 Wasteland

These are already in your **mpmissions** directory.


## Upload the mission file

For uploading the mission file you have to connect to your server via FTP before: [Gameserver FTP connection](gameserver_ftpaccess.md).
There you upload the corresponding mission file into your **mpmissions** directory which you can find under **/gxxxxxx/arma3/**.
In this example we upload the game mode **King of the Hill** to our server.

![](https://screensaver01.zap-hosting.com/index.php/s/TsLrK87iLtsePE6/preview)


## Loading the mission file on the server

To load the mission file from the server, go to your ArmA 3 server interface and click on the **Configs** tab in the menu on the left:

![](https://screensaver01.zap-hosting.com/index.php/s/9WqRcjKQ3TLdXmJ/preview)

There you edit the file **server.cfg** and enter the name of your mission file as shown in the picture: 

![](https://screensaver01.zap-hosting.com/index.php/s/TtWgBPMe47dy3kS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/T43D52qD74r3iYm/preview)

After that, click **Save** and you can start your server. The new mission file will be loaded.
