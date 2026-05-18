---
id: dedicated-linux-valheim
title: "Valheim Dedicated Server Linux Setup"
description: "Discover how to set up a Valheim Dedicated Server on Linux to host your game efficiently and optimize your server performance → Learn more now"
sidebar_label: Valheim
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Do you have a Linux VPS/Dedicated Server and you want to install the Valheim Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your Linux server through the use of SteamCMD. We will be using Ubuntu in the examples, but the process should be very similar for other distributions.

:::tip
Did you know that you can install our **ZAP GS/TS3 Interface** directly onto your VPS/Dedicated Server, allowing you to setup game server services, with direct integration to your ZAP-Hosting dashboard, in just a few clicks! Learn more about the [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::



## Preparation

To begin with, connect to your VPS/Dedicated Server via SSH. Use our [SSH Initial Access](dedicated-linux-ssh.md) guide if you need help doing this.

You will also have to complete a first-time setup for SteamCMD if this is your first time using this on your Linux server. Please use our [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) guide and ensure SteamCMD is fully setup before proceeding.

## Installation

Begin by logging in to your `steam` user and heading over to the root `home/steam` user directory to keep things organised.
```
sudo -u steam -s
cd ~
```

When logged in, you can start the installation process using the following command to easily start the installation through the use of SteamCMD directly to your `steam` user.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Please be patient as the download completes, it can take some time for games with larger sizes. Once successful, you will see a success message appear confirming this.

## Configuration

By this stage, you have finished the setup for your Valheim server. You can perform further server configuration by directing editing the launch file.

Head over to your root directory and open the `.sh` file. You can edit parameters here.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Starting & Connecting to your server

Now it is time to start your server. Head over to the main game directory and run the **start_server.sh** shell file.
```
/home/steam/Valheim-Server/start_server.sh
```

You should now see logs appear in your command prompt which signals that the start up was successful. Please note that first time start up could take some time as everything is setup. Alternatively, you will be able to connect directly by using the bottom search bar on the server list and searching for: `[your_ip_address]:2456`.

:::info
If you cannot connect and receive `PlayFab` errors in console, you may need to disable crossplay support to resolve this as this is a current issue with the Linux version. To do so, run `nano /home/steam/Valheim-Server/start_server.sh` and remove the `-crossplay` flag.

If you do require crossplay, an alternate solution is to instead install the Windows version and use **Wine** as a compatibility layer. Please use our quick [Wine Compatibility Layer Setup](dedicated-linux-wine.md) guide to set this up. Once ready, you can install the Valheim Windows server version via SteamCMD using:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Once installed, use the following command to launch the Windows version through Wine instead: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Conclusion

Congratulations, you have successfully installed and configured the Valheim server on your VPS/Dedicated Server! As a next step, we recommend looking over our [Setup Linux Service](dedicated-linux-create-gameservice.md) guide, which covers setting up your new dedicated game server as a service. This provides various benefits including automatic server launching on boot, automatic server updates, easy management and access to logs, plus much more!

If you have any further questions or problems, please contact our support team, who are available to help you every day!


