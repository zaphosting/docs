---
id: dedicated-windows-mythofempires
title: "Myth of Empires Dedicated Server Windows Setup"
description: "Discover how to set up a Myth of Empires dedicated server on your Windows server quickly and efficiently → Learn more now"
sidebar_label: MOE Dedicated Server Setup
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Do you have a Windows VPS/Dedicated Server and want to install a MOE Dedicated server on it? You are in the right place. In this guide we will explain the step by step process of installing this service on your server.

<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/T3jP36eWcQgTmNy/preview" title="How To Setup Myth Of Empires Server on Windows VPS/Dedicated Server!" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>



## Preparation
To begin with, connect to your VPS/Dedicated Server through Remote Desktop (RDP). Use our [Initial Access (RDP)](vserver-windows-userdp.md) guide if you need help doing this.

Once you have accessed your server, you will need to setup **SteamCMD** in order to be able to download the necessary dedicated server files. SteamCMD is the **command-line (CLI)** version of the Steam client and is the tool which allows you to easily download a range of Steam workshop and dedicated server files. Download [SteamCMD from the official Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) or directly [here](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Create a new folder somewhere on your server, in this scenario we will name it `steamcmd`. Head over to your Downloads folder, find the **steamcmd.zip** file which you just downloaded and place it into your `steamcmd` folder. Now you will have unzip the file by right-clicking and using Window's unzip functionality directly, or any range of applications such as .7zip or Winrar. This should result with a **steamcmd.exe** file being unzipped.

Simply run **steamcmd.exe** and await until the installation process is fully completed.

![](https://screensaver01.zap-hosting.com/index.php/s/sjoic6GAg6s8pew/preview)

As soon as the message **Loading Steam API.... OK** is displayed, the process has been completed successfully and you can being with the installation of the MOE dedicated server in the following section.

## Installation

After the installation, you should be able to execute commands within the **steamcmd.exe** command prompt that you ran before. You need to login prior to being able to do anything, through the **anonymous** user, by using the command: `login anonymous`

Once logged in, you can now begin downloading the files. 

:::tip
Optional: You can set your preferred install directory by using the command `force_install_dir [path]`, replacing `[path]` with the path that you wish to use for your server. For example: 
```
force_install_dir C:\MOE-Server
```
:::
 
Now run the command `app_update 1794810` which will begin the download. The App ID **1794810** is the **MOE** application.

![](https://screensaver01.zap-hosting.com/index.php/s/BxbBAPYYAffdGPz/preview)

:::info
Please do not interrupt the process before it is completed to avoid mistakes. It may take a moment, but it's worth being patient! :)
:::

Once successful, head over to the download directory where all of the server files have been downloaded. 

### Accessing the PrivateServerTool

Unlike typical SteamCMD installations, MOE requires you to gather a folder from your local Steam game installation in order to be able to run the server on Windows.

Open up Steam on your system, right-click your **Myth of Empires** game and select **Browse local files** whilst hovering over the **Manage** section.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

In the root folder that opens, find the **PrivateServerTool** folder. This is the folder that you will have to copy to your server. You can do so easily by using `CTRL+C` to copy on your local PC, and `CTRL+V` to paste into your Windows server via RDP. Make sure to paste it into the root directory of your VPS/Dedicated Server.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Next, head over to the following section to port forward and configure your server.

### Port Forwarding your server

In order to ensure that your server is accessible to the public, you must alter port forwarding rules for the ports that the VPS/Dedicated Server process is using. You can do this either through Powershell commands directly which is easier, or regularly through the Windows Defender Firewall page.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open your Windows search box, and search for **Powershell**. Make sure to right-click and **Run as Administrator** so that permissions are accessible and everything works correctly.

:::info
Ensure you run your Powershell in Administrator mode, otherwise the settings may not apply correctly.
:::

Next, copy and paste the following commands into your Powershell Prompt:
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

These commands will automatically create firewall rules which are necessary for your MOE server to be accessible to the public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use the search function on Windows to open up **Windows Firewall Settings with Advanced Security**. You may have to press **Advanced Settings** to open up the necessary window if you open up the base Windows Firewall page.

![](https://screensaver01.zap-hosting.com/index.php/s/WP68dkL2FtDTLj6/preview)

You must create new rules for your MOE server. To do this, click on the incoming and outgoing rules as described below and add them for the following protocols and ports:
- TCP incoming and outgoing: 11888, 12888
- UDP incoming and outgoing: 11888, 12888

Please use our [Port Forwarding (Firewall)](vserver-windows-port.md) guide if you need further assistance doing this.

</TabItem>
</Tabs>

Head over to the following section before accessing your server to create your configuration file and start `.bat` file.

## Configuration

You will now use the server tool located in the folder that you copied earlier from your game files, to create your configuration file and the start `.bat` file which you will use to launch your server.

Navigate to the following directory (the folder you have copied earlier):
```
../MOE/PrivateServerTool
```

In this folder, run the **PrivateServerTool.exe** file. Using this tool, configure the server options to your likings including mods, game settings and much more.

We recommend setting up at least the basic parameters such as **Server Name** before proceeding.

Once ready, simply head over to the **Start Console** tab in the tool, and press **Save Config** button followed by the **Start Server** button. This will generate the `StartPrivateServer.bat` file that you will use to start your server.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

We recommend creating a shortcut to your `StartPrivateServer.bat` file by right-clicking and using **Create a shortcut**, to make it easier to start.

:::note
You may have to edit the path to your game folder within the automatically generated `StartPrivateServer.bat` file. Simply open the file using a tool such as notepad and ensure that the path at the beginning of the file matches the path that the server is found in. 

If the path is incorrect, you can double-click on the top path bar when inside the root of your dedicated MOE server folder to copy the current path, and paste it in where appropriate into the file.
:::

## Starting & Connecting to your server

Now it is time to start your server. Head over to the directory of your Myth of Empires server and run **StartPrivateServer.bat** (or the shortcut if you created one) to begin the start up process. This will open the server's console in a command prompt and begin the startup process. You will now be able to connect directly to your server by heading over to the **Custom Server** tab and searching for your server via the search box.

:::tip
If you are having issues connecting to the server, open your `StartPrivateServer.bat` file using a tool such as notepad and ensure that the two IP parameters match the IP of your Windows server. This should be automatically populated by the tool that was used, but it is great troubleshooting step.
:::

You have successfully installed Myth of Empires on your Windows Dedicated Server.


