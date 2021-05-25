---
id: fivem_change_servericon
title: FiveM: Change server icon for server list
description: Information on how to change the server icon for FiveM servers from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Change Server Icon
---

## Prepare Image

For your server icon to be displayed correctly, it must be a PNG file that is 96x96 pixels in size, other formats are not supported by FiveM.

## Connect Using FTP

Before resources can be installed, the [FTP access](gameserver_ftpaccess.md) must be set up:

![](https://screensaver01.zap-hosting.com/index.php/s/PkowAdzot9tjZeY/preview)

After this has been set up, you can now connect and open the server folder:

![](https://screensaver01.zap-hosting.com/index.php/s/omjKDgFcn64rRMF/preview)


## Insert Image

Navigate to the folder gXXXX/gta-fivem/Server-data/ and upload your server icon file there.

![](https://screensaver01.zap-hosting.com/index.php/s/Ds3gNEtsBM9smgM/preview)

Copy the file name of the icon and open the Server.cfg file, which you can also find in the Server-data folder or via the tab "Configs" in the web interface.

Now you should find the line "load_server_icon zap96x96.png" in the Server.cfg, there you have to replace zap96x96.png with the file name of your logo.

![](https://screensaver01.zap-hosting.com/index.php/s/534HWfqiZRP778P/preview)

Once you have restarted the server, you should be able to see the logo in the server list or via Direct Connect.
