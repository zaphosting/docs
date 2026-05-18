---
id: dedicated-windows-fs-25
title: "Farming Simulator 2025 Dedicated Server Windows Setup"
description: "Discover how to set up a Farming Simulator 2025 dedicated server on Windows to host multiplayer games smoothly → Learn more now"
sidebar_label: Farming Simulator 2025
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Do you have a Windows VPS/Dedicated Server and you want to install the Farming Simulator Dedicated Server 2025 service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your server.



## Preparation

In order to host a Farming Simulator 2025 dedicated server, you must have a Windows server ready alongside a valid game license to run the VPS/Dedicated Server.

Before proceeding with the installation, connect to your Windows Server through Remote Desktop (RDP). Use our [Initial Access (RDP)](vserver-windows-userdp.md) guide if you need help doing this.

### Game License

In order to host the VPS/Dedicated Server on your Windows server, you must own a digital copy of Farming Simulator 2025 directly from the [Farming Simulator](https://www.farming-simulator.com/buy-now.php) website.

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

You cannot use the same license key as the one you are playing the game on, therefore you will need to purchase a **second** copy of the game just for your VPS/Dedicated Server.

:::info Steam Game License
It is possible to use a Steam game license to host your VPS/Dedicated Server, however this can be very inconvenient as it would mean that you are forced to run the Steam client at all times in the background. This will also mean that you cannot play any other game on any other system using the same Steam account due to the limitations of Steam. Therefore, we highly recommend you purchase a standalone key directly on the website instead to avoid this hassle.

However, if you do plan to use a **Steam** license, you should instead install the files through Steam as usual and skip to the **Dedicated Server Setup** section of the guide.
:::

Once you have purchased a digital version from the website, you will receive a product code via the email address that you provided during checkout. You will need this license key in the following section to access the game download and also to validate your VPS/Dedicated Server during setup.

## Installation

### Installing Files

Now that your license key and Windows server is ready, head over to the [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) page on your Windows server and input the license key that you previously received via email.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Upon success, you will gain access to a page that contains a variety of download methods for the game. Find the main Windows **Farming Simulator 25 (Windows 10/11)** option and select download.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

Your download should now begin and may take some time as the entire game is being downloaded so please be patient.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Once finished, head over to your downloads and locate the **.img** that you have downloaded. Open it by double clicking which should mount the drive to File Explorer.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Now run the **Setup.exe** file and accept the UAC prompt. Follow the setup menu to setup your game, which includes accepting the terms & conditions and adjusting the installation path if you wish.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Once again, please be patient and wait for the entire installation process to complete. Once it is ready, simply exit the setup menu. We recommend right-clicking on the mounted **DVD Drive** in File Explorer and selecting **Eject** to remove it as it is no longer needed. At this stage, the base installation of the game is now complete.

### Activating Game

With the game now installed, you will need to run the game at least once in order to activate the game. Simply run the game from desktop shortcut or via the Windows search bar.

Upon launch, you should see a first-time license key setup prompt. Enter the license key that you received on your email address earlier and confirm. Upon success, your game will be activated and the game will proceed with loading.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

You can now close the game as this is no longer needed and proceed with the following section to setup the VPS/Dedicated Server and web interface that comes with it. If you receive an **Video Driver** error, simply select **no** which will cancel the startup process straight away.

## Dedicated Server Setup

With the game now ready, you will need to adjust some configuration options for your VPS/Dedicated Server. Begin by accessing your game install folder. By default, this should be under `C:\Program Files (x86)\Farming Simulator 2025` but it may be different if you changed the path during installation.

Once here, find and open the **dedicatedServer.xml** file with a text editor.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

We recommend adjusting the `username` and `passphrase` fields found at the very top of the file to your own. This will be the credentials that you use to login to your server's web interface panel. Ensure that you save the file and close once ready.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Accessing Web Interface

With the credentials now configured, you can start the server by running the **dedicatedServer.exe** file found in the same root folder of the game.

:::info Administrative Privileges
Ensure that you launch the VPS/Dedicated Server executable with Administrative Privileges, otherwise you will very likely face issues when attempting to starting the actual game server. You can do this by right-clicking the file and selecting **Run as administrator**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

This will launch a new CMD window which will automatically generate any necessary certificates and install updates and any necessary tools. This may take some time upon first launch so please be patient.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Once it is ready, you will now be able to access your web interface panel by entering `http://[your_serverip]:8080` in a web browser. Use the credentials that you have previously saved to login.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

On this web interface panel, you will be able to perform a wide variety of adjustments to your server which includes changes to settings, managing save games, managing mods and much more.

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
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

These commands will automatically create firewall rules which are necessary for your Farming Simulator 2025 server to be accessible to the public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use the search function on Windows to open up **Windows Firewall Settings with Advanced Security**. You may have to press **Advanced Settings** to open up the necessary window if you open up the base Windows Firewall page.

![](https://screensaver01.zap-hosting.com/index.php/s/P8AZZGBepLXfiDW/preview)

You must create new rules for your FS2025 Server. To do this, click on the incoming and outgoing rules as described below and add them for the following protocols and ports:
- TCP incoming and outgoing: 8080, 10823
- UDP incoming and outgoing: 8080, 10823

Please use our [Port Forwarding (Firewall)](vserver-windows-port.md) if you need further assistance doing this.

</TabItem>
</Tabs>

Once you have added these rules, your server will now be accessible, which means you will be able to access the web interface panel from the internet and connect to the server in-game.

### Starting Server

Once you have adjusted your settings and setup firewall rules, head over to the home page on ther web interface and select the **Start** button to begin the boot process.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Upon success, the server should start booting and you can confirm this through the updated interface and a new CMD prompt which will run the game server itself. If you are facing errors when starting the server, ensure that you are running the interface as an Administrator.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Conclusion

Congratulations, you have successfully installed and configured the Farming Simulator 2025 dedicated server on your VPS/Dedicated Server! If you have any further questions or problems, please contact our support team, who are available to help you every day!


