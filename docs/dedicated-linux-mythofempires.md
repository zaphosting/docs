---
id: dedicated-linux-mythofempires
title: "Myth of Empires Dedicated Server Linux Setup"
description: "Discover how to install the Myth of Empires Dedicated Server on Linux and optimize your game hosting setup → Learn more now"
sidebar_label: Myth of Empires
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Do you have a Linux VPS/Dedicated Server and you want to install the Myth of Empires Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your Linux server through the use of SteamCMD. We will be using Ubuntu in the examples, but the process should be very similar for other distributions.

:::tip
Did you know that you can install our **ZAP GS/TS3 Interface** directly onto your VPS/Dedicated Server, allowing you to setup game server services, with direct integration to your ZAP-Hosting dashboard, in just a few clicks! Learn more about the [GS/TS3 Interface here](dedicated-linux-gs-interface.md).
:::



## Preparation

To begin with, connect to your VPS/Dedicated Server via SSH. Use our [SSH Initial Access](dedicated-linux-ssh.md) guide if you need help doing this.

You will also have to complete a first-time setup for SteamCMD if this is your first time using this on your Linux server. Please use our [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) guide and ensure SteamCMD is fully setup before proceeding.

:::info Wine Compatibility Layer
Myth of Empires currently does not offer a native Linux-based server build, which means that there is an extra preparation step necessary to run the Windows server build on Linux.

You have to complete a one-time installation of the **Wine** compatibility layer if this is your first time using this on your Linux server. Please use our quick [Wine Compatibility Layer Setup](dedicated-linux-wine.md) guide to set this up before proceeding.
:::

## Installation

Begin by logging in to your `steam` user and heading over to the root `home/steam` user directory to keep things organised.
```
sudo -u steam -s
cd ~
```

When logged in, you can start the installation process using the following command to easily start the installation through the use of SteamCMD directly to your `steam` user. By using the `+@sSteamCmdForcePlatformType windows` parameter, you forcefully ensure that the Windows binaries are installed.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Please be patient as the download completes, it can take some time for games with larger sizes. Once successful, you will see a success message appear confirming this.

## Configuration

By this stage, you have finished the setup for your Myth of Empires server. You can perform further server configuration through a variety of configuration files found within the directory of your server.

You will be able to adjust all configuration parameters by accessing and editing configuration `.ini` files found within the Saved folder. Use the `ls` command to see what files there are.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

To edit a file, simply run `nano ./[filename].ini` to open the nano editor.

See our Myth of Empires [Server Configuration](moe-configuration.md) guide to view all of the available server options and what they each do.

## Starting & Connecting to your server

Now it is time to start your server. Head over to the main game directory and run the **MOEServer.exe** executable file using the command below. Ensure that you add the **xvfb-run** and **wine** commands to run it through the Wine compatibility layer.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

You should now see logs appear in your command prompt which signals that the start up was successful. Please note that first time start up could take some time as everything is setup. You will be able to connect directly by searching for the server details in the **Custom Server** tab: `[your_ip_address]:15636`.

## Conclusion

Congratulations, you have successfully installed and configured the Myth of Empires server on your VPS/Dedicated Server! As a next step, we recommend looking over our [Setup Linux Service](dedicated-linux-create-gameservice.md) guide, which covers setting up your new dedicated game server as a service. This provides various benefits including automatic server launching on boot, automatic server updates, easy management and access to logs, plus much more!

If you have any further questions or problems, please contact our support team, who are available to help you every day!


