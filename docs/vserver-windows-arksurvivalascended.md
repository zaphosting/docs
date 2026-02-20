---
id: vserver-windows-arksurvivalascended
title: "ARK Survival Ascended Dedicated Server Windows Setup"
description: "Discover how to set up an ARK: Survival Ascended Dedicated Server on a Windows server for smooth gameplay and server control → Learn more now"
sidebar_label: ARK Survival Ascended
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Do you have a Windows VPS/Dedicated Server and you want to install the ARK: Survival Ascended Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your server.
<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Sa76nDiSmQKx7x2/preview" title="ARK: Survival Ascended Dedicated Server Setup on Windows VPS/Dedicated Server" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>
<InlineVoucher />

## Preparation

To begin with, connect to your VPS/Dedicated Server through Remote Desktop (RDP). Use our [Initial Access (RDP)](vserver-windows-userdp.md) guide if you need help doing this.

Once you have accessed your server, you will need to setup **SteamCMD** in order to be able to download the necessary dedicated server files. SteamCMD is the **command-line (CLI)** version of the Steam client and is the tool which allows you to easily download a range of Steam workshop and dedicated server files. Download [SteamCMD from the official Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) or directly [here](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Create a new folder somewhere on your server, in this scenario we will name it `steamcmd`. Head over to your Downloads folder, find the **steamcmd.zip** file which you just downloaded and place it into your `steamcmd` folder. Now you will have unzip the file by right-clicking and using Window's unzip functionality directly, or any range of applications such as .7zip or Winrar. This should result with a **steamcmd.exe** file being unzipped.

Simply run **steamcmd.exe** and await until the installation process is fully completed.

![](https://screensaver01.zap-hosting.com/index.php/s/Y4tAsGDxZtBKtG4/preview)

As soon as the message **Loading Steam API.... OK** is displayed, the process has been completed successfully and you can being with the installation of the ARK: Survival Ascended dedicated server in the following section.

## Installation

After the installation, you should be able to execute commands within the **steamcmd.exe** command prompt that you ran before. You need to login prior to being able to do anything, through the **anonymous** user, by using the command: `login anonymous`

Once logged in, you can now begin downloading the files.

:::tip
Optional: You can set your preferred install directory by using the command `force_install_dir [path]`, replacing `[path]` with the path that you wish to use for your server. For example: 
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Now run the command `app_update 2430930` which will begin the download. The App ID **2430930** is the **ARK: Survival Ascended Dedicated Server** application.

![](https://screensaver01.zap-hosting.com/index.php/s/DSMpETJYtkciNHT/preview)

:::info
Please do not interrupt the process before it is completed to avoid mistakes. It may take a moment, but it's worth being patient! :)
:::

### Creating Startup File

Once the download has been completed successfully, navigate to the directory where you have performed the installation and go to the following subdirectory:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

In this subdirectory, you will have to create your startup file which is needed in order to launch the VPS/Dedicated Server. Create a file with the name: `start-ark.bat`. You can create a text document first and then rename it to the `.bat` extension afterwards.

:::info
Ensure that you have the "Display file extensions" option enabled in your File Explorer so that the correct file extension is being used.
:::

Open the file using a text editor (such as Notepad++) and add the following contents within it:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]Port=7777?QueryPort=27015?MaxPlayers=[max_players]?ServerAdminPassword=[admin_password]? -NoBattlEye
exit
```

Within this command, you should replace `[server_name]`, `[admin_password]` and `[max_players]` with what you wish.

If you also want to setup a password for regular people to be able to join, you can add `?ServerPassword=[join_password]` to the command in the file above. This would change it to:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players]?ServerAdminPassword=[admin_password] -NoBattlEye
exit
```

Ensure that you have set the variables and that you save the changes before you close the file. 

Your server will now be accessible locally through `127.0.0.1:7777` once you run the startup file and the server becomes online. However, you must still add Windows Firewall port forwarding rules if you want your server to be accessible to the public which will be covered in the following section.

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
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

These commands will automatically create firewall rules which are necessary for your Ark: Survival Ascended server to be accessible to the public.

:::info
If you encounter issues connecting or completing server initialization (ticking loop), it is recommended to add the ARK Survival Ascended application to the firewall as an exception. 
:::

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use the search function on Windows to open up **Windows Firewall Settings with Advanced Security**. You may have to press **Advanced Settings** to open up the necessary window if you open up the base Windows Firewall page.

![](https://screensaver01.zap-hosting.com/index.php/s/XbKfCHYXZ9sNL8g/preview)

You must create new rules for your Ark: Survival Ascended server. To do this, click on the incoming and outgoing rules as described below and add them for the following protocols and ports:
- TCP incoming and outgoing: 27020
- UDP incoming and outgoing: 27015
- UDP incoming and outgoing: 7777-7778

Please use our [Port Forwarding (Firewall)](vserver-windows-port.md) guide if you need further assistance doing this. 

:::info
If you encounter issues connecting or completing server initialization (ticking loop), it is recommended to add the ARK Survival Ascended application to the firewall as an exception. 
:::







</TabItem>
</Tabs>

Once you have added these rules, your server will now be accessible which means you will be able to connect to it through your server's IP address. You can do this by opening your in-game console on Ark: Survival Ascended and running `open [your_ip_address]:7777`.

We recommend that you configure your server settings first through the following section before accessing your server.

## Configuration

By this stage, you have finished the setup for your Ark: Survival Ascended dedicated server. You can perform further server configuration through two configuration files found within the directory of your server.

Firstly, navigate to the following directories:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

You will be able to find both **DefaultGameUserSettings.ini** and **Gameusersettings.ini** configuration files. In these files, you can edit a wide range of variables and options regarding your server.


:::warning[CROSSPLAY SUPPORT]
Since 18 November 2023, server owners need to manually install the certificate revocation list that can be obtained from https://dev.epicgames.com/ (or just directly from http://crl.r2m02.amazontrust.com/r2m02.crl). The downloaded r2m02.crl file must be installed (right-click on the file) by selecting Place all certificates in the following store and selecting Trusted Root Certification Authorities. A system restart may be needed.

If before 18 November 2023 server owners installed the r2m02.cer certificate file and the server isn't showing up, that certificate must be removed from the system to properly allow the servers to be visible again. To remove the revoked certificate run (Windows + R) certmgr.msc and search for Amazon RSA 2048 M02 in Trusted Root Certification Authorities. The same must be done running certlm.msc. Finally, a system restart may be needed
:::





## Starting & Connecting to your server

Now it is time to start your server. However, in order for the server to start successfully, you will have to install [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) to your Windows VPS/Dedicated Server.

:::info
You must install [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) onto your Windows VPS/Dedicated Server before attempting to start the server if you do not have it yet, as it is a dependency. Your server may not start if you do not have this installed.
:::

Once you have this installed on your VPS/Dedicated Server, you can proceed towards starting the server by executing the **start-ark.bat** file you created previously.

This will open the server's console in a command prompt and begin the startup process. If everthing occurs as expected, your server will be visible in the server list. Alternatively, you will be able to connect directly by opening the console in-game and running `open [your_ip_address]:7777`.

## Conclusion

Congratulations, you have successfully installed and configured the ARK-Survival-Ascended server on your VPS/Dedicated Server! If you have any further questions or problems, please contact our support team, who are available to help you every day! 

<InlineVoucher />
