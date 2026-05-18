---
id: dedicated-linux-palworld
title: "Palworld Dedicated Server Linux Setup"
description: "Discover how to set up and configure a Palworld Dedicated Server on Linux for seamless gameplay management → Learn more now"
sidebar_label: Palworld
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Do you have a Linux VPS/Dedicated Server and you want to install the Palworld Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your Linux server through the use of SteamCMD. We will be using Ubuntu in the examples, but the process should be very similar for other distributions.

:::tip
Did you know that you can install our **ZAP GS/TS3 Interface** directly onto your VPS/Dedicated Server, allowing you to setup game server services, with direct integration to your ZAP-Hosting dashboard, in just a few clicks! Learn more about the [GS/TS3 Interface here](dedicated-linux-gs-interface.md).
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
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Please be patient as the download completes, it can take some time for games with larger sizes. Once successful, you will see a success message appear confirming this.

## Configuration

By this stage, you have finished the setup for your Palworld server. You can perform further server configuration through a configuration file found within the directory of your server.

You will need to create a copy of the default configuration file and add it to the saved folder before you can edit.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

With the copy created, you can edit the core configuration parameters by opening the new **PalWorldSettings.ini** configuration file.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

See our Palworld [Server Configuration](palworld-configuration.md) guide to view all of the available options and what they each do.

## Starting & Connecting to your server

Now it is time to start your server. Head over to the main game directory and run the **PalServer.sh** shell file.
```
/home/steam/Palworld-Server/PalServer.sh
```

You should now see logs appear in your command prompt, including a game version log, which signals that the start up was successful. If everthing occurs as expected, your server will be visible in the server list. Alternatively, you will be able to connect directly by using the bottom search bar on the server list and searching for: `[your_ip_address]:8211`.

## Conclusion

Congratulations, you have successfully installed and configured the Palworld server on your VPS/Dedicated Server! As a next step, we recommend looking over our [Setup Linux Service](dedicated-linux-create-gameservice.md) guide, which covers setting up your new dedicated game server as a service. This provides various benefits including automatic server launching on boot, automatic server updates, easy management and access to logs, plus much more!

If you have any further questions or problems, please contact our support team, who are available to help you every day!


