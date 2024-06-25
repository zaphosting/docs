---
id: vserver-windows-fs-22-epic
title: "VPS: Farming Simulator 2022 (Epic Games) Dedicated Server Setup"
description: Information on how to install and set up a Farming Simulator 2022 dedicated server for the Epic Games version on your Windows VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Farming Simulator 2022 (Epic Games)
---

## Introduction
Setting up a server for Farming Simulator 22 Epic Games version differs slightly from the process for a standard server. This guide will walk you through the process, focusing on the unique aspects of the Epic Games version.

## Prerequisites

Before starting, ensure that your setup meets the following requirements:
- **Operating System:** Windows Server 2016/2019 (64-bit)
- **CPU:** At least 4x 2.4 GHz (AMD/Intel)
- **RAM:** At least 4GB (DDR3/4)
- **Disk Space:** At least 50GB free (SSD or better preferred)
- **Epic Games Account:** An Epic Games account with Farming Simulator 22.

:::info
When running the server, you cannot host the server and play on the same Epic Games account. This means you will need a second copy of the game on another account if you wish to play on the server.
:::

## Step 1: Preparing for server install
Begin by connecting to your server via Remote Desktop (RDP). If you need help with this, please refer to our [RDP Initial Access guide](https://zap-hosting.com/guides/docs/vserver-windows-userdp/).

Once connected you will have to install a necessary prerequisite, Microsoft Visual C++ Redistribute, which can be downloaded from [Microsoft's website](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170). After downloading, follow the on-screen instructions to complete the installation.

:::tip
It is possible that you may already have the C++ Redistribute tools downloaded, if this is the case then the installer may return an error. You can safely ignore this and move forward.
:::

![image](https://i.imgur.com/CuJQYBx.png)

Now you have to install the Epic Games launcher, which can be downloaded from [Epic Games' website](https://store.epicgames.com/en-US/download). Once again, follow the on-screen instructions to complete installations.

![image](https://i.imgur.com/q6Pcq3W.png)

After installation, it is very likely that the launcher will have to download a few additional files and updates before launching.

![image](https://i.imgur.com/78rhcdD.png)

Once the launcher has opened, you must sign in with your Epic Games account, one which owns Farming Simulator 2022 in its game library.

## Step 2: Downloading Farming Simulator 2022

In the Epic Games Launcher, click on the **Library** tab and locate Farming Simulator 22. Use the **Install** button and select the location that you wish to download the game to.

![image](https://i.imgur.com/au9CunQ.png)

You will now have to wati for the download and installation to complete. The download speed is dependent on the bandwidth of your server.

## Step 3: Setting up Launch options

Once the game is installed, go back to the **Library** tab in the Epic Games Launcher. Find Farming Simulator 22, click the three dots next to it and select **Manage**.

![image](https://i.imgur.com/90eZz92.png)

Scroll down to the **Launch Options** section and enable it. In the textbox that appears, enter `-server` and close the menu.

![image](https://i.imgur.com/yrQonuo.png)

## Step 4: Running the Server

You can now start Farming Simulator 2022 from your Epic Games launcher or the shortcut on your desktop. The game should now launch via a command prompt (CMD) in dedicated server mode. If this is not the case, ensure that you have setup the launch option correctly.

![image](https://i.imgur.com/Izbfu8q.png)

## Step 5: Enabling the Web Interface (optional)

Farming Simulator 22 dedicated servers come with a web interface that you can enable for your server. This is optional, but you may find it useful to adjust settings and a wide variety of other information therefore we recommend enabling it.

Before proceeding, ensure that you close the server by exiting the command prompt. This is to ensure that changes you make in this step are not overridden.

Navigate to the installation path of your game, typically the path will be `C:\Program Files\Epic Games\FarmingSimulator22` if you installed at the default directory.

![image](https://i.imgur.com/bDNvf88.png)

Find and open the `dedicatedServer.xml` file found in the root directory using a text editor such as Notepad.

Set the username and password for admin by modifying the appropriate fields. 
```xml
  <initial_admin>
    <username>admin</username> //username
    <passphrase>your_password</passphrase> //password
  </initial_admin>
```

![image](https://i.imgur.com/m9rFsle.png)

Ensure that you save the file before closing and run the `dedicatedServer.exe` located in the same root directory.

![image](https://i.imgur.com/4UJoPqv.png)

You should now be able to access the web interface by heading over to `http://[your_serverip]:8080` in your web browser, replacing `[your_serverip]` with the IP address of your server. If you want to access the panel directly on the same server, you can simply access it via `http://127.0.0.1:8080` too.

![image](https://i.imgur.com/NDDmxqq.png)

:::info
Due to the unique setup of the Epic Games version, you may encounter difficulties using the web interface to its full extent. While you can make changes and stop the server using the web interface, you cannot initiate the server through it for example.

If you encounter issues, first stop dedicatedServer.exe, then run Farming Simulator 22 directly to ensure the server is operational. Afterward, run dedicatedserver.exe to activate the web interface. 

It is important that you run the server **first** and the web interface **afterwards**, otherwise Epic Games may detect both as the same file and thus prevent you from being able to launch the main server.
:::

## Step 6: Port Forwarding

In order to ensure that your server is accessible to the public, you must alter port forwarding rules for the ports that the dedicated server process is using. You can do this either through PowerShell commands directly, which is easier, or regularly through the Windows Defender Firewall page.

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
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

These commands will automatically create firewall rules which are necessary for your Farming Simulator 22 server to be accessible to the public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use the search function on Windows to open up **Windows Firewall Settings with Advanced Security**. You may have to press **Advanced Settings** to open up the necessary window if you open up the base Windows Firewall page.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

You must create new rules for your Farming Simulator 22 server. To do this, click on the incoming and outgoing rules as described below and add them for the following protocols and ports:
- TCP incoming and outgoing: 3724, 27015
- UDP incoming and outgoing: 3724, 27015

Please use our [Windows port forwarding guide](vserver-windows-port.md) if you need further assistance doing this.

</TabItem>
</Tabs>

## Step 7: Connecting to the Server
Launch the game and navigate to the multiplayer menu. Look for the server name, which can be found on the web interface and is customizable.

Once you locate the server, click on it to connect. If prompted, enter the password, which will also be visible on the web interface.

You have successfully installed Farming Simulator 22 (Epic Games version) on your Windows VPS.