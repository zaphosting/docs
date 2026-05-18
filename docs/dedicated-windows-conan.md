---
id: dedicated-windows-conan
title: "Conan Exiles Dedicated Server Windows Setup"
description: "Discover how to set up a Conan Exiles Dedicated Server on Windows Dedicated Server for smooth gameplay and server management → Learn more now"
sidebar_label: Conan Exiles
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Do you have a Windows VPS/Dedicated Server and you want to install the Conan Exiles Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your server.



## Preparation

To begin with, connect to your VPS/Dedicated Server through Remote Desktop (RDP). Use our [Initial Access (RDP)](vserver-windows-userdp.md) guide if you need help doing this.

:::note Server Launcher Tool
As an alternative to using SteamCMD, the developers of Conan Exiles maintain a useful server launcher utility tool that can be utilised on Windows to make it easier to launch a server.

We recommend reading the [Official Forum Post](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) if you wish to use this instead.
:::

Once you have accessed your server, you will need to setup **SteamCMD** in order to be able to download the necessary dedicated server files. SteamCMD is the **command-line (CLI)** version of the Steam client and is the tool which allows you to easily download a range of Steam workshop and dedicated server files. Download [SteamCMD from the official Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) or directly [here](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Create a new folder somewhere on your server, in this scenario we will name it `steamcmd`. Head over to your Downloads folder, find the **steamcmd.zip** file which you just downloaded and place it into your `steamcmd` folder. Now you will have unzip the file by right-clicking and using Window's unzip functionality directly, or any range of applications such as .7zip or Winrar. This should result with a **steamcmd.exe** file being unzipped.

Simply run **steamcmd.exe** and await until the installation process is fully completed.

![](https://screensaver01.zap-hosting.com/index.php/s/JFaor7BeJ6P3nNo/preview)

As soon as the message **Loading Steam API.... OK** is displayed, the process has been completed successfully and you can being with the installation of the Conan Exiles dedicated server in the following section.

## Installation

After the installation, you should be able to execute commands within the **steamcmd.exe** command prompt that you ran before. You need to login prior to being able to do anything, through the **anonymous** user, by using the command: `login anonymous`

Once logged in, you can now begin downloading the files. 

:::tip
Optional: You can set your preferred install directory by using the command `force_install_dir [path]`, replacing `[path]` with the path that you wish to use for your server. For example: 
```
force_install_dir C:\Conan-Server
```
:::

Now run the command `app_update 443030` which will begin the download. The App ID **443030** is the **Conan Exiles** application.

![](https://screensaver01.zap-hosting.com/index.php/s/RQfzYbWGaiGYCY2/preview)

:::info
Please do not interrupt the process before it is completed to avoid mistakes. It may take a moment, but it's worth being patient! :)
:::

Once successful, head over to the download directory where all of the server files have been downloaded. Here, you can use the **StartServer.bat** to start the server. However, we recommend port forwarding and configuring your server first.

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
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

These commands will automatically create firewall rules which are necessary for your Conan Exiles server to be accessible to the public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use the search function on Windows to open up **Windows Firewall Settings with Advanced Security**. You may have to press **Advanced Settings** to open up the necessary window if you open up the base Windows Firewall page.

![](https://screensaver01.zap-hosting.com/index.php/s/bzo6Ec6jpQzQ3xn/preview)

You must create new rules for your Conan Exiles server. To do this, click on the incoming and outgoing rules as described below and add them for the following protocols and ports:
- TCP incoming and outgoing: 7777, 25575
- UDP incoming and outgoing: 7777, 7778, 27015

Please use our [Port Forwarding (Firewall)](vserver-windows-port.md) guide if you need further assistance doing this.

</TabItem>
</Tabs>

Once you have added these rules, your server will now be accessible which means you will be able to connect to it through your server's IP address. We recommend that you configure your server settings first through the following section before accessing your server.

## Configuration

By this stage, you have finished the setup for your Conan Exiles server. You can perform further server configuration through a configuration file found within the directory of your server.

Firstly, navigate to the following directory:
```
../Conan-Server/Engine/Config/Windows
```

You will be able to find the **WindowsServerEngine.ini** configuration file. Through this file, you can adjust a wide variety of configuration options by adding specific parameters.

As an example, to add a server name, password and admin password you would add the following to the file.
```
[OnlineSubsystem]
ServerName=[your_servername]
ServerPassword=[your_password]

[ServerSettings]
AdminPassword=[your_adminpassword]
```

We recommend browsing [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) for a comprehensive list of available options.

## Starting & Connecting to your server

Now it is time to start your server. Head over to the base directory of your Conan Exiles server and run **StartServer.bat** that you created earlier to begin the start up process. This will open the server's console in a command prompt and begin the startup process. You will now be able to connect directly to your server using the in-game server browser and by inputting your Server IP and Port (default is 7777).

## Conclusion

Congratulations, you have successfully installed and configured the Conan Exiles server on your VPS/Dedicated Server! If you have any further questions or problems, please contact our support team, who are available to help you every day! 


