---
id: dedicated-windows-ragemp
title: "RageMP Dedicated Server Windows Setup"
description: "Learn how to set up RageMP Dedicated Server on your Windows server to host multiplayer GTA V sessions → Learn more now"
sidebar_label: RageMP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Do you have a Windows VPS/Dedicated Server and you want to install the RageMP Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your server.



## Preparation

To begin with, connect to your VPS/Dedicated Server through Remote Desktop (RDP). Use our [Initial Access (RDP)](vserver-windows-userdp.md) guide if you need help doing this.

Once you have accessed your server, begin by installing [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe) as this is a prerequisite that RageMP requires. Ensure this is installed before proceeding. If you are unsure if you already have it installed, run the installer and it will tell you during the setup.

Once you have the dependency installed, download the latest server release from the [RageMP's Website](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

:::tip
If you already have RageMP installed, you can proceed to the **Switching to Server Branch** sub-section. You don't have to re-install RageMP again.
:::

## Installation

Once the release is downloaded, run the **RAGEMultiplayer_Setup.exe** executable file and proceed with the installation steps. You will be able to adjust the installation path during the setup which we recommend.

Now with RageMP installed, run the **RAGE Multiplayer** app which should now be accessible within your Windows apps.

On first launch, you will be required to set the path to your GTA:V game installation folder. The installation directory depends on the launcher you installed the game from and by default will be located under `C:/Program Files` or `C:/Program Files (x86)`.

You will now have to adjust the branch to download the server files.

### Switching to Server Branch

Navigate to the directory that RageMP was installed into. Locate the **config.xml** file in this folder. Adjust the `channel` parameter from `prerelease` to `prerelease_server` and save the file.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Now run the **updater.exe** executable file which will download the necessary server files based on the branch change. You will notice a new **server-files** folder that appears in your RageMP directory which is what you will require.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

You can now revert the `channel` parameter back to `prerelease` and re-run the **update.exe** file to switch back to the client version so that you can play again.

:::tip
You can move the server files and rename the folder to anything you wish, for example to your desktop. You are not required to run this inside of the `RAGEMP` folder.
:::

To start the server, simply run **ragemp-server.exe** found in the `server-files` directory or your server folder and the server will start booting. However, we recommend port forwarding and configuring your server first.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Port Forwarding your server

In order to ensure that your server is accessible to the public, you must alter port forwarding rules for the ports that the VPS/Dedicated Server process is using. You can do this either through PowerShell commands directly, which is easier, or regularly through the Windows Defender Firewall page.

:::tip
Launching the server for the first time should display a UAC prompt. If you accept this, your firewall rules will be automatically setup, meaning you can proceed with the next section. Otherwise, follow one of the methods below.
:::

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
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

These commands will automatically create firewall rules which are necessary for your RageMP server to be accessible to the public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use the search function on Windows to open up **Windows Firewall Settings with Advanced Security**. You may have to press **Advanced Settings** to open up the necessary window if you open up the base Windows Firewall page.

![image](https://screensaver01.zap-hosting.com/index.php/s/2ZX7HntKMHFGNzR/preview)

You must create new rules for your RageMP server. To do this, click on the incoming and outgoing rules as described below and add them for the following protocols and ports:

- TCP incoming and outgoing: 22005
- UDP incoming and outgoing: 22005

Please use our [Port Forwarding (Firewall)](vserver-windows-port.md) if you need further assistance doing this.

</TabItem>
</Tabs>

Once you have added these rules, your server will now be accessible, which means you will be able to connect to it through your server's IP address.

We recommend that you configure your server settings first through the following section before accessing your server.

## Configuration

By this stage, you have finished the setup for your RageMP server. You can perform further server configuration through a configuration file.

Navigate back to the root folder. Find and open the **conf.json** configuration file. In this file, you can adjust a few server parameters ranging from the port, to server name and more.

As an example, here are a few configuration options that are set:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Starting & Connecting to your server

Now it is time to start your server. Head over to the `server-files` directory or your server folder and run **ragemp-server.exe** to begin the start up process. This will open the server's console in a command prompt and begin the startup process.

You will now be able to direct connect to your server in-game via the RageMP launcher.

## Conclusion

Congratulations, you have successfully installed and configured the RageMP server on your VPS/Dedicated Server! If you have any further questions or problems, please contact our support team, who are available to help you every day!


