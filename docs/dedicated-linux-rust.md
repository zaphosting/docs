---
id: dedicated-linux-rust
title: "Rust Dedicated Server Linux Setup"
description: "Learn how to set up a Rust Dedicated Server on Linux to host your game efficiently and optimize server performance → Learn more now"
sidebar_label: Rust
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Do you have a Linux VPS/Dedicated Server and you want to install the Rust Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your Linux server through the use of SteamCMD. We will be using Ubuntu in the examples, but the process should be very similar for other distributions.

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
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Please be patient as the download completes, it can take some time for games with larger sizes. Once successful, you will see a success message appear confirming this.

## Configuration

By this stage, you have finished the setup for your Rust server. You can perform further server configuration through a configuration files found within the directory of your server.

Head over to your root directory and create an `.sh` file. This will be the bash file used to start the server and to adjust various configuration parameters.
```
nano /home/steam/Rust-Server/start_server.sh
```

Now add the following contents into the bash file. In the command below, some of the basic and most used parameters have been added. If you wish to add more or wish to learn more about each, we recommend browsing the [official Rust wiki](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver) which provides all of the available configuration options.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Save the file using `CTRL+X`, followed by `Y` and `Enter`. Lastly, to make the bash file runnable without sudo privilages, run the following command which adds the execute permission to the file.
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Starting & Connecting to your server

Now it is time to start your server. Head over to the main game directory and run the **start_server.sh** shell file.
```
/home/steam/Rust-Server/start_server.sh
```

You should now see logs appear in your command prompt which signals that the start up was successful. Please note that first time start up could take some time as everything is setup. If everthing occurs as expected, your server will be visible in the server list. Alternatively, you will be able to connect directly by searching for: `[your_ip_address]:28015`.

## Conclusion

Congratulations, you have successfully installed and configured the Rust server on your VPS/Dedicated Server! As a next step, we recommend looking over our [Setup Linux Service](dedicated-linux-create-gameservice.md) guide, which covers setting up your new dedicated game server as a service. This provides various benefits including automatic server launching on boot, automatic server updates, easy management and access to logs, plus much more!

If you have any further questions or problems, please contact our support team, who are available to help you every day!


