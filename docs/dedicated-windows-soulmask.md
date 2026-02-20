---
id: dedicated-windows-soulmask
title: "Soulmask Dedicated Server Windows Setup"
description: "Discover how to install the Soulmask dedicated server on your Windows server quickly and efficiently → Learn more now"
sidebar_label: Soulmask
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Do you have a Windows VPS/Dedicated Server and you want to install the Soulmask Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your server.



## Preparation

To begin with, connect to your VPS/Dedicated Server through Remote Desktop (RDP). Use our [Initial Access (RDP)](vserver-windows-userdp.md) guide if you need help doing this.

Once you have accessed your server, you will need to setup **SteamCMD** in order to be able to download the necessary dedicated server files. SteamCMD is the **command-line (CLI)** version of the Steam client and is the tool which allows you to easily download a range of Steam workshop and dedicated server files. Download [SteamCMD from the official Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) or directly [here](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Create a new folder somewhere on your server, in this scenario we will name it `steamcmd`. Head over to your Downloads folder, find the **steamcmd.zip** file which you just downloaded and place it into your `steamcmd` folder. Now you will have unzip the file by right-clicking and using Window's unzip functionality directly, or any range of applications such as .7zip or Winrar. This should result with a **steamcmd.exe** file being unzipped.

Simply run **steamcmd.exe** and await until the installation process is fully completed.

![](https://screensaver01.zap-hosting.com/index.php/s/tnMJpp3jEtkB3Zf/preview)

As soon as the message **Loading Steam API.... OK** is displayed, the process has been completed successfully and you can being with the installation of the Soulmask dedicated server in the following section.

## Installation

After the installation, you should be able to execute commands within the **steamcmd.exe** command prompt that you ran before. You need to log in prior to being able to do anything, through the **anonymous** user, by using the command: `login anonymous`

Once logged in, you can now begin downloading the files. 

:::tip
Optional: You can set your preferred install directory by using the command `force_install_dir [path]`, replacing `[path]` with the path that you wish to use for your server. For example: 
```
force_install_dir C:\Soulmask-Server
```
:::

Now run the command `app_update 3017310` which will begin the download. The App ID **3017310** is the **Soulmask** application.

![](https://screensaver01.zap-hosting.com/index.php/s/aw4oE7cWPeXLdTa/preview)

:::info
Please do not interrupt the process before it is completed to avoid mistakes. It may take a moment, but it's worth being patient! :)
:::

Once successful, head over to the download directory, where all of the server files have been downloaded. Here, you can use the **StartServer.bat** to start the server. However, we recommend port forwarding and configuring your server first.

### Port Forwarding your server

In order to ensure that your server is accessible to the public, you must alter port forwarding rules for the ports that the VPS/Dedicated Server process is using. You can do this either through PowerShell commands directly, which is easier, or regularly through the Windows Defender Firewall page.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open your Windows search box, and search for **PowerShell**. Make sure to right-click and **Run as Administrator** so that permissions are accessible and everything works correctly.

:::info
Ensure you run your PowerShell in Administrator mode, otherwise the settings may not apply correctly.
:::

Next, copy and paste the following commands into your PowerShell Prompt:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

These commands will automatically create firewall rules which are necessary for your Soulmask server to be accessible to the public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use the search function on Windows to open up **Windows Firewall Settings with Advanced Security**. You may have to press **Advanced Settings** to open up the necessary window if you open up the base Windows Firewall page.

![](https://screensaver01.zap-hosting.com/index.php/s/3PKQDAa9oF2WFj7/preview)

You must create new rules for your Soulmask server. To do this, click on the incoming and outgoing rules as described below and add them for the following protocols and ports:
- TCP incoming and outgoing: 8777, 27015
- UDP incoming and outgoing: 8777, 27015

Please use our [Port Forwarding (Firewall)](vserver-windows-port.md) guide if you need further assistance doing this.

</TabItem>
</Tabs>

Once you have added these rules, your server will now be accessible, which means you will be able to connect to it through your server's IP address. You can do this by heading over to Multiplayer from the main menu, entering IP Direct Connect and inputting your IP address and port used, which is 3724 by default and as you have set up.

We recommend that you configure your server settings first through the following section before accessing your server.

## Configuration

By this stage, you have finished the setup for your Soulmask server. You can perform further server configuration by adjusting the parameters within your **StartServer.bat** file found in the root directory and through the **GameUserSettings.ini** file found under the `../WS/Saved/Config/WindowsServer` path.

See our [Server Configuration](soulmask-configuration.md) guide to view all of the available parameters and configuration options for your Soulmask server.

## Starting & Connecting to your server

Now it is time to start your server. Head over to the root directory and run **StartServer.bat** to begin the start up process. This will open the server's console in a command prompt and begin the startup process.

:::tip
If your server is failing to start and the command prompt simply disappears, head into the `../WS/Saved/Logs` directory and check the latest log to diagnose what the issue is.

There is a common issue with related to Steam online service failing to start on the Windows dedicated server binaries due to incorrect packaging. If the error is related to Steam, head into your root directory and move the following files into the `../WS/Binaries/Win64` folder: `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll`. Now attempt to start the server again and it should start up in a command prompt successfully.
:::

You will now be able to direct connect to your server via your IP by inputting your server's IP address and 8777 port within the in-game multiplayer menu.

If you wish your server to be available in the server list, please check out our [Server Configuration](soulmask-configuration.md) guide and add the appropriate `-SteamServerName` parameter into your **StartServer.bat** file. Save the file once done and run the batch file again.

You have successfully installed Soulmask on your Windows Dedicated Server.


