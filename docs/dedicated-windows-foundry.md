---
id: dedicated-windows-foundry
title: "Foundry Dedicated Server Windows Setup"
description: "Discover how to set up a Foundry Dedicated Server on your Windows server quickly and efficiently → Learn more now"
sidebar_label: Foundry
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Do you have a Windows VPS/Dedicated Server and you want to install the Foundry Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your server.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="How To Setup Foundry Dedicated Server on Windows VPS/Dedicated Server!" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>



## Preparation

To begin with, connect to your VPS/Dedicated Server through Remote Desktop (RDP). Use our [Initial Access (RDP)](vserver-windows-userdp.md) guide if you need help doing this.

Once you have accessed your server, you will need to setup **SteamCMD** in order to be able to download the necessary dedicated server files. SteamCMD is the **command-line (CLI)** version of the Steam client and is the tool which allows you to easily download a range of Steam workshop and dedicated server files. Download [SteamCMD from the official Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) or directly [here](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Create a new folder somewhere on your server, in this scenario we will name it `steamcmd`. Head over to your Downloads folder, find the **steamcmd.zip** file which you just downloaded and place it into your `steamcmd` folder. Now you will have unzip the file by right-clicking and using Window's unzip functionality directly, or any range of applications such as .7zip or Winrar. This should result with a **steamcmd.exe** file being unzipped.

Simply run **steamcmd.exe** and await until the installation process is fully completed.

![](https://screensaver01.zap-hosting.com/index.php/s/XPJF72x6MmBLCt2/preview)

As soon as the message **Loading Steam API.... OK** is displayed, the process has been completed successfully and you can being with the installation of the Foundry dedicated server in the following section.

## Installation

After the installation, you should be able to execute commands within the **steamcmd.exe** command prompt that you ran before. You need to log in prior to being able to do anything, through the **anonymous** user, by using the command: `login anonymous`

Once logged in, you can now begin downloading the files. 

:::tip
Optional: You can set your preferred install directory by using the command `force_install_dir [path]`, replacing `[path]` with the path that you wish to use for your server. For example: 
```
force_install_dir C:\Foundry-Server
```
:::

Now run the command `app_update 2915550` which will begin the download. The App ID **2915550** is the **Foundry** application.

![](https://screensaver01.zap-hosting.com/index.php/s/JpS7WeHDTmeqeH7/preview)

:::info
Please do not interrupt the process before it is completed to avoid mistakes. It may take a moment, but it's worth being patient! :)
:::

Once successful, head over to the download directory, where all of the server files have been downloaded. Here, you can use the **FoundryDedicatedServerLauncher.exe** to start the server. However, we recommend port forwarding and configuring your server first.

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
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

These commands will automatically create firewall rules which are necessary for your Foundry server to be accessible to the public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use the search function on Windows to open up **Windows Firewall Settings with Advanced Security**. You may have to press **Advanced Settings** to open up the necessary window if you open up the base Windows Firewall page.

![](https://screensaver01.zap-hosting.com/index.php/s/FnTnwd3dQ6bWMky/preview)

You must create new rules for your Foundry server. To do this, click on the incoming and outgoing rules as described below and add them for the following protocols and ports:
- TCP incoming and outgoing: 3724, 27015
- UDP incoming and outgoing: 3724, 27015

Please use our [Port Forwarding (Firewall)](vserver-windows-port.md) if you need further assistance doing this.

</TabItem>
</Tabs>

Once you have added these rules, your server will now be accessible, which means you will be able to connect to it through your server's IP address. You can do this by heading over to Multiplayer from the main menu, entering IP Direct Connect and inputting your IP address and port used, which is 3724 by default and as you have set up.

We recommend that you configure your server settings first through the following section before accessing your server.

## Configuration

By this stage, you have finished the setup for your Foundry server. You can perform further server configuration through a configuration file. Navigate back to your game folder, and create a new **app.cfg** file (if it doesn't exist already) in the root directory. This should be created in the same folder as the **FoundryDedicatedServerLauncher.exe** server launch executable.

Now you can open up the **app.cfg** file with notepad or an editor of your choice, and start adding configuration options for parameters you wish to adjust. You should simply create a new line for each parameter you wish to add with an equals, followed by the value you wish to set it to.

As an example, here are three configuration options that are set:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

See our [Server Configuration](foundry-configuration.md) guide to view all of the available options and what they each do.

## Starting & Connecting to your server

Now it is time to start your server. Head over to the root directory and run **FoundryDedicatedServerLauncher.exe** to begin the start up process. This will open the server's console in a command prompt and begin the startup process.

You will now be able to direct connect to your server via your IP by heading to **Multiplayer->IP Direct Connect** and inputting your server's IP address and 3724 port, which is the default and the one you have port forwarded.

If you wish your server to be available in the server list, please check out our [Server Configuration](foundry-configuration.md) guide and add the appropriate `server_name` and `server_is_public` parameters into your configuration file. Save the file once done and run the server executable again.

You have successfully installed Foundry on your Windows Dedicated Server.


