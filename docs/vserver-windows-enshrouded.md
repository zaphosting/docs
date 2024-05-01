---
id: vserver-windows-enshrouded
title: "Server: Enshrouded Dedicated Server Setup"
description: Information about setting up an Enshrouded Dedicated Server on a VPS/Root server/Dedicated Server - ZAP-Hosting.com documentation
sidebar_label: Enshrouded
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Introduction
Do you have a Windows VPS, root server or dedicated server and you want to install the Enshrouded Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your server.

<YouTube videoId="cxhqHt2DYjQ" title="How To Setup Enshrouded Dedicated Server on Windows VPS!" description="Feel like you understand better when you see things in action?  We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

## Preparation

To begin with, connect to your VPS or rootserver through Remote Desktop (RDP). Use our [RDP Initial Access](vserver-windows-userdp.md) guide if you need help doing this.

Once you have accessed your server, you will need to setup **SteamCMD** in order to be able to download the necessary dedicated server files. SteamCMD is the **command-line (CLI)** version of the Steam client and is the tool which allows you to easily download a range of Steam workshop and dedicated server files. Download [SteamCMD from the official Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) or directly [here](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Create a new folder somewhere on your server, in this scenario we will name it `steamcmd`. Head over to your Downloads folder, find the **steamcmd.zip** file which you just downloaded and place it into your `steamcmd` folder. Now you will have unzip the file by right-clicking and using Window's unzip functionality directly, or any range of applications such as .7zip or Winrar. This should result with a **steamcmd.exe** file being unzipped.

Simply run **steamcmd.exe** and await until the installation process is fully completed.

![image](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

As soon as the message **Loading Steam API.... OK** is displayed, the process has been completed successfully and you can being with the installation of the Enshrouded dedicated server in the following section.

## Installation

After the installation, you should be able to execute commands within the **steamcmd.exe** command prompt that you ran before. You need to login prior to being able to do anything, through the **anonymous** user, by using the command: `login anonymous`

Once logged in, you can now begin downloading the files. 

:::tip
Optional: You can set your preferred install directory by using the command `force_install_dir [path]`, replacing `[path]` with the path that you wish to use for your server. For example: 
```
force_install_dir C:\Enshrouded-Server
```
:::

Now run the command `app_update 2278520` which will begin the download. The App ID **2278520** is the **Enshrouded** application.

![image](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Please do not interrupt the process before it is completed to avoid mistakes. It may take a moment, but it's worth being patient! :)
:::

Once successful, head over to the download directory where all of the server files have been downloaded. Here, you can use the **enshrouded_server.exe** to start the server. However, we recommend port forwarding and configuring your server first.

### Port Forwarding your server

In order to ensure that your server is accessible to the public, you must alter port forwarding rules for the ports that the dedicated server process is using. You can do this either through Powershell commands directly which is easier, or regularly through the Windows Defender Firewall page.

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
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

These commands will automatically create firewall rules which are necessary for your Enshrouded server to be accessible to the public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use the search function on Windows to open up **Windows Firewall Settings with Advanced Security**. You may have to press **Advanced Settings** to open up the necessary window if you open up the base Windows Firewall page.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

You must create new rules for your Enshrouded server. To do this, click on the incoming and outgoing rules as described below and add them for the following protocols and ports:
- TCP incoming and outgoing: 15636-15637
- UDP incoming and outgoing: 15636-15637

Please use our [Windows port forwarding guide](vserver-windows-port.md) if you need further assistance doing this.

</TabItem>
</Tabs>

Once you have added these rules, your server will now be accessible which means you will be able to connect to it through your server's IP address. You can do this by selecting your character in the main menu, heading over to the **Find Games** tab and pressing **Add Server**. Here, input your Server IP alongside the Port (15636 by default) and your server password (if set, otherwise leave empty).

:::tip
Check out our [Enshrouded Server Configuration guide](enshrouded-configuration.md) if you wish to enable a password for your server and adjust settings.
:::

We recommend that you configure your server settings first through the following section before accessing your server.

## Configuration

By this stage, you have finished the setup for your Enshrouded server. You can perform further server configuration through a configuration file found within the directory of your server.

Firstly, navigate to the following directory:
```
..EnshroudedServer/ (root directory)
```

You will be able to find the **enshrouded_server.json** configuration file. Through this file, you can configure a few parameters for your server. See our [Enshrouded Server Configuration guide](enshrouded-configuration.md) to view all of the available server options and what they each do.

## Starting & Connecting to your server

Now it is time to start your server. Head over to the base directory of your Enshrouded server and run **enshrouded_server.exe** to begin the start up process. This will open the server's console in a command prompt and begin the startup process. You will now be able to connect directly to your server by heading over to the **Find Games** tab, pressing **Add Server** and inputting your Server IP and Port (default is 15636).

You have successfully installed Enshrouded on your Windows VPS.