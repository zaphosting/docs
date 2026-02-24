---
id: dedicated-linux-avorion
title: "Avorion Dedicated Server Linux Setup"
description: "Learn how to install and configure the Avorion Dedicated server on your Linux server for seamless game hosting → Learn more now"
sidebar_label: Avorion
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Do you have a Linux VPS/Dedicated Server and you want to install the Avorion Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your Linux server through the use of SteamCMD. We will be using Ubuntu in the examples, but the process should be very similar for other distributions.

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
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

Please be patient as the download completes, it can take some time for games with larger sizes. Once successful, you will see a success message appear confirming this.

## Configuration

By this stage, you have finished the setup for your Avorion server. You can configure your server settings directly through the **startserver.sh** file that you copied earlier. Open the file using `nano /home/steam/Avorion-Server/startserver.sh` and configure parameters for your server.

You will be able to edit world-specific parameters and settings by editing the **server.ini** configuration file found in each galaxy save. This will be stored in your user's root folder (which should be `steam`) and can be managed using the following commands.
```
# View Current Saves
ls /home/steam/.avorion/galaxies

# Edit a Save Configuration
nano /home/steam/.avorion/galaxies/avorion_galaxy/server.ini
```

## Starting & Connecting to your server

Now it is time to start your server. Head over to the main game directory, where we recommend creating a copy of the example batch file.
```
cp /home/steam/Avorion-Server/server.sh /home/steam/Avorion-Server/startserver.sh
```

You can choose to edit the file. Once ready, run the new **startserver.sh** batch file using the command below.
```
/home/steam/Avorion-Server/startserver.sh
```

You should now see logs appear in your command prompt which signals that the start up was successful. Please note that first time start up could take some time as everything is setup and once ready, you should see `Server startup complete.` in the console. You will now be able to connect directly to your server using the in-game server browser and by inputting your Server IP and Port (default is 27000).

## Conclusion

Congratulations, you have successfully installed and configured the Avorion server on your VPS/Dedicated Server! As a next step, we recommend looking over our [Setup Linux Service](dedicated-linux-create-gameservice.md) guide, which covers setting up your new dedicated game server as a service. This provides various benefits including automatic server launching on boot, automatic server updates, easy management and access to logs, plus much more!

If you have any further questions or problems, please contact our support team, who are available to help you every day!


