---
id: dedicated-linux-tf2
title: "Team Fortress 2 Dedicated Server Linux Setup"
description: "Discover how to set up a Team Fortress 2 dedicated server on your Linux server quickly and efficiently → Learn more now"
sidebar_label: "Team Fortress 2"
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Do you have a Linux VPS/Dedicated Server and you want to install the Team Fortress 2 Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your Linux server through the use of SteamCMD. We will be using Ubuntu in the examples, but the process should be very similar for other distributions.

:::tip
Did you know that you can install our **ZAP GS/TS3 Interface** directly onto your VPS/Dedicated Server, allowing you to setup game server services, with direct integration to your ZAP-Hosting dashboard, in just a few clicks! Learn more about the [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::



## Preparation

To begin with, connect to your VPS/Dedicated Server via SSH. Use our [SSH Initial Access](dedicated-linux-ssh.md) guide if you need help doing this. You will also have to complete a first-time setup for SteamCMD if this is your first time using this on your Linux server. Please use our [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) guide and ensure SteamCMD is fully setup before proceeding.

## Installation

Begin by logging in to your `steam` user and heading over to the root `home/steam` user directory to keep things organised.
```
sudo -u steam -s
cd ~
```

When logged in, you can start the installation process using the following command to easily start the installation through the use of SteamCMD directly to your `steam` user.
```
steamcmd +force_install_dir '/home/steam/tf2-ds' +login anonymous +app_update 232250 validate +quit
```

Please be patient as the download completes, it can take some time for games with larger sizes. Once successful, you will see a success message appear confirming this.

## Configuration

By this stage, you have finished the setup for your Team Fortress 2 server. You can perform further server configuration by directing editing the launch file.

Head over to your root directory. Inside this directory navigate to the cfg directory and open the `server.cfg` file. There you can edit server options.
```
nano /home/steam/tf-ds/tf2/tf/cfg/server.cfg
```

## Registering GSL Token

For other players to join your server, you must generate and include a Game Server Login Token (GSLT). This token authenticates your server with Steam. To generate a GSLT, visit http://steamcommunity.com/dev/managegameservers and create a token using the game ID 232250, which corresponds to Team Fortress 2.

Once you have the token, include it in your server launch parameters with `+sv_setsteamaccount <TOKEN>`. 

## Starting & Connecting to your server

Now it is time to start your server. Head over to the main game directory and execute the following launch command:
```
./srcds_run -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

You should now see logs appear in your command prompt which signals that the start up was successful. Please note that first time start up could take some time as everything is setup. Alternatively, you will be able to connect directly by using the bottom search bar on the server list and searching for: `[your_ip_address]:2456`.


## Conclusion

Congratulations, you have successfully installed and configured the Team Fortress 2 server on your VPS/Dedicated Server! As a next step, we recommend looking over our [Setup Linux Service](dedicated-linux-create-gameservice.md) guide, which covers setting up your new dedicated game server as a service. This provides various benefits including automatic server launching on boot, automatic server updates, easy management and access to logs, plus much more!

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


