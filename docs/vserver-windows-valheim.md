---
id: vserver-windows-valheim
title: "Valheim Dedicated Server Windows Setup"
description: "Discover how to set up a Valheim dedicated server on your server quickly and efficiently → Learn more now"
sidebar_label: Valheim
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Got a VPS/Dedicated Server and want to install game servers on it? For example an Valheim Dedicated Server? Then you are at the right place! In the following we will explain step by step how you can install such a service on your server.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/8yWGtXMPFr8Jyza/preview" title="Valehim Dedicated Server Setup on Windows VPS/Dedicated Server" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>
<InlineVoucher />

## Preparation
For the setup of a Valheim server the SteamCMD is needed. The SteamCMD is the **command line edition of the Steam client**. This tool can be used to quickly and easily download the VPS/Dedicated Server applications of popular Steam games. You will find the SteamCMD on the official Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD. 

Following this, the download takes place. This will contain the **steamcmd.zip** file, which must first be unpacked. It is recommended to create a separate folder, where the file can be unzipped. You should see the **steamcmd.exe** as a result. Execute it and wait until the installation process has been completed.
![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

As soon as the message **Loading Steam API.... OK** is displayed, the process has been completed successfully and you can start with the installation of the Valheim server.



## Installation

After the installation you should be able to execute commands in the **Steam command line (steamcmd.exe)**. There you need to login. This is done with the **anonymous** user. Execute the following command: `login anonymous`

The next step will be the installation. This is done with the `app_update 896660` command. The App ID **896660** stands for the **Valheim Dedicated Server** application.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

:::info
Please do not interrupt the process before it is completed to avoid mistakes. It may take a moment, but it's worth being patient! :)
:::


Navigate to the directory where you have performed the installation and go to the following subdirectory:  **../steamapps/common/Valheim dedicated Server**/

There you have to create the startup file, which is needed to execute the server software. Create a file with the following name: start_headless.bat

:::info
Please make sure that you have the Display file extensions option enabled so that the correct file extension is used.
:::

Open the file, add the following content and save the newly added changes:

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Make a local copy of this script to avoid it being overwritten by steam.
REM NOTE: Minimum password length is 5 characters & Password cant be in the server name.
REM NOTE: You need to make sure che ports 2456-2458 is being forwarded to your server through your local router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

To make the server visible and accessible externally, the server ports used must be enabled/forwarded in the firewall. To do this, open the Windows Firewall settings.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Additional rules must be added in the settings. To do this, click on the incoming and outgoing rules as described below and add them for the following ports: 2456-2458 for the TCP/UDP protocols.




## Configuration

The actual setup is already complete. Further configuration changes can be made in the **start_headless_server.bat**  file. There you have the possibility to change the server name, server password, server admin password and many other options. To do so, navigate to the following directories:

```
../steamapps/common/Valheim dedicated Server/
```



## Play

At the end of the setup, you can now start the server by executing the **start_headless_server.bat** file you created earlier. This should open the server's console and start the server startup process. If everything goes as expected, the server should be visible in the server list after a successful start.


## Conclusion

Congratulations, you have successfully installed and configured the Valheim on your VPS/Dedicated Server! If you have any further questions or problems, please contact our support team, who are available to help you every day! 

<InlineVoucher />
