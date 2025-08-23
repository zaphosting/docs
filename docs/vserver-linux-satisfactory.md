---
id: vserver-linux-satisfactory
title: "VPS: Satisfactory Dedicated Server Linux Setup"
description: Information about setting up an Satisfactory Dedicated Server on a Linux VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Satisfactory
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Do you have a Linux VPS and you want to install the Satisfactory Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your Linux server through the use of SteamCMD. We will be using Ubuntu in the examples, but the process should be very similar for other distributions.

:::tip
Did you know that you can install our **ZAP GS/TS3 Interface** directly onto your VPS, allowing you to setup game server services, with direct integration to your ZAP-Hosting dashboard, in just a few clicks! Learn more about the [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparation

To begin with, connect to your VPS via SSH. Use our [SSH Initial Access](vserver-linux-ssh.md) guide if you need help doing this.

You will also have to complete a first-time setup for SteamCMD if this is your first time using this on your Linux server. Please use our [SteamCMD Linux Setup](vserver-linux-steamcmd.md) guide and ensure SteamCMD is fully setup before proceeding.

## Installation

Begin by logging in to your `steam` user and heading over to the root `home/steam` user directory to keep things organised.
```
sudo -u steam -s
cd ~
```

When logged in, you can start the installation process using the following command to easily start the installation through the use of SteamCMD directly to your `steam` user.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Please be patient as the download completes, it can take some time for games with larger sizes. Once successful, you will see a success message appear confirming this.

## Configuration

By this stage, you have finished the setup for your Satisfactory server. You can perform further server configuration through a configuration files found within the directory of your server.

You will be able to adjust all configuration parameters by accessing and editing the **Engine.ini** and **GameUserSettings.ini** configuration files found within the Saved folder.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Starting & Connecting to your server

Now it is time to start your server. Head over to the main game directory and run the **FactoryServer.sh** shell file.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

You should now see logs appear in your command prompt which signals that the start up was successful. Please note that first time start up could take some time as everything is setup. Alternatively, you will be able to connect directly by using the bottom search bar on the server list and searching for: `[your_ip_address]:15777`.

## Conclusion

Congratulations, you have successfully installed and configured the Satisfactory server on your VPS! As a next step, we recommend looking over our [Setup Linux Service](vserver-linux-create-gameservice.md) guide, which covers setting up your new dedicated game server as a service. This provides various benefits including automatic server launching on boot, automatic server updates, easy management and access to logs, plus much more!

If you have any further questions or problems, please contact our support team, who are available to help you every day!

<InlineVoucher />
