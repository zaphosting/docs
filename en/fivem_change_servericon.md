---
id: fivem_change_servericon
title: FiveM: Change server icon for server list
description: Information on how to change the server icon for FiveM servers from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Change Server Icon
---

## Prepare Image

For your server icon to be displayed correctly, it must be a PNG file that is 96x96 pixels in size, other formats are not supported by FiveM.

## Connect Using FTP

Before resources can be installed, the [FTP access](gameserver_ftpaccess.md) must be set up

## Insert Image

Navigate to the folder gXXXX/gta-fivem/server-data/ and upload your server icon file there.

![image](https://user-images.githubusercontent.com/13604413/159137598-e4bd90d5-047e-4b16-8020-b9fc7c68f007.png)


Copy the file name of the icon and open the Server.cfg file, which you can also find in the Server-data folder or via the tab "Configs" in the web interface.

Now you should find the line "load_server_icon zap96x96.png" in the server.cfg, there you have to replace zap96x96.png with the file name of your logo.

![image](https://user-images.githubusercontent.com/13604413/159137604-c8383001-abef-4cc9-ae10-e270c7aa33b3.png)


Once you have restarted the server, you should be able to see the logo in the server list or via Direct Connect.
