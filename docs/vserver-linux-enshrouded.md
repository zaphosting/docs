---
id: vserver-linux-enshrouded
title: "VPS: Enshrouded Dedicated Server Linux Setup"
description: Information about setting up an Enshrouded Dedicated Server on a Linux VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Enshrouded
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Do you have a Linux VPS or root server and you want to install the Enshrouded Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your Linux server through the use of SteamCMD. We will be using Ubuntu in the examples, but the process should be very similar for other distributions.

:::tip
Did you know that you can install our **ZAP GS/TS3 Interface** directly onto your VPS or root server, allowing you to setup game server services, with direct integration to your ZAP-Hosting dashboard, in just a few clicks! Learn more about the [GS/TS3 Interface here](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparation

To begin with, connect to your VPS or root server via SSH. Use our [SSH Initial Access](vserver-linux-ssh.md) guide if you need help doing this.

You will also have to complete a first-time setup for SteamCMD if this is your first time using this on your Linux server. Please use our [SteamCMD Linux Setup](vserver-linux-steamcmd.md) guide and ensure SteamCMD is fully setup before proceeding.

:::info Wine Compatibility Layer
Enshrouded currently does not offer a native Linux-based server build, which means that there is an extra preparation step necessary to run the Windows server build on Linux.

You have to complete a one-time installation of the **Wine** compatibility layer if this is your first time using this on your Linux server. Please use our quick [Wine Compatibility Layer Setup](vserver-linux-wine.md) guide to set this up before proceeding.
:::

## Installation

Begin by logging in to your `steam` user and heading over to the root `home/steam` user directory to keep things organised.
```
sudo -u steam -s
cd ~
```

When logged in, you can start the installation process using the following command to easily start the installation through the use of SteamCMD directly to your `steam` user. By using the `+@sSteamCmdForcePlatformType windows` parameter, you forcefully ensure that the Windows binaries are installed.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Please be patient as the download completes, it can take some time for games with larger sizes. Once successful, you will see a success message appear confirming this.

## Configuration

By this stage, you have finished the setup for your Enshrouded server. You can perform further server configuration through a configuration file found within the directory of your server.

You will be able to adjust all configuration parameters by accessing and editing the **enshrouded_server.json** configuration file found in the root server directory.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

See our [Enshrouded Server Configuration guide](enshrouded-configuration.md) to view all of the available server options and what they each do.

## Starting & Connecting to your server

Now it is time to start your server. Head over to the main game directory and run the **enshrouded_server.exe** executable file using the command below. Ensure that you add the **xvfb-run** and **wine** commands to run it through the Wine compatibility layer.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

You should now see many logs appear in your command prompt. If you see the `[Session] 'HostOnline' (up)!` log message, this signals that the start up was successful. You will be able to connect directly by adding the server details in the **Find Games** tab: `[your_ip_address]:15636`.

## Conclusion

Congratulations, you have successfully installed and configurated the Enshrouded server on your VPS! As a next step, we recommend looking over our [Setup Linux Service](vserver-linux-create-gameservice.md) guide, which covers setting up your new dedicated game server as a service. This provides various benefits including automatic server launching on boot, automatic server updates, easy management and access to logs, plus much more!

If you have any further questions or problems, please contact our support team, who are available to help you every day!