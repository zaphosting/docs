---
id: vserver-linux-create-gameservice
title: "VPS: Setup your Dedicated Game Server as a Linux Service"
description: Information about setting up your dedicated game server as a Linux Service on a Linux VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Setup Linux Service
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Services are an integral part of Linux and refers to a process or application that runs in the background, either being a pre-defined task or an event-based task. This provides various benefits including automatic server launching on boot, automatic server updates, easy management and access to logs, plus much more! In this guide, we will explore the process of creating a service for your dedicated game server.

<InlineVoucher />

## Preparation

To begin with, connect to your VPS or root server via SSH. Use our [SSH Initial Access](vserver-linux-ssh.md) guide if you need help doing this.

You should also follow one of our dedicated game server guides in this section to install and setup a game server on your Linux system. In this guide, we will use the [Palworld dedicated game server](vserver-linux-palworld.md) as an example, but the instructions can be adapted for all of our guides.

## Creating a Service

Begin by creating a new service file for the dedicated game server that you have setup. Replace `[your_game]` with your choice of name. We recommend using the game's name to keep things organised, thus we will use `palworld.service`.
```
sudo nano /etc/systemd/system/[your_game].service
```

## Setting up Service

With the nano editor now open, copy the following core file contents which is a template service file that you can reuse.
```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[your_server_folder]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[your_server_folder]' +login anonymous +app_update [your_game_steamid] +quit
ExecStart=/home/steam/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

Let's break down the file contents to help understand everything.
- `Description`: This can be anything, useful to easily distinguish the purpose of the service.
- `User`: Using our guides, you should have setup a separate `steam` user for use with SteamCMD. If not, this should be set to the user that should run the service.
- `WorkingDirectory`: This is the path to the main directory which contains everything the service requires.
- `ExecStartPre`: In this field, we essentially setup the same SteamCMD installation command as before, which will run every time the server is restarted to ensure it is up-to-date. You should copy this from the respective dedicated game server guide, or replace the values manually with the values of the game.
- `ExecStart`: This field determines the pre-defined task that should run with the service. Once again, you should copy the path from the respective dedicated game server guide, or replace the values manually to navigate to the start file.

:::important Wine Compatibility Layer
For games that require the **Wine** compatibility layer to be able to run, you should include the **xvfb-run** and **wine** commands within the `ExecStart` parameter. As an example for V-Rising:
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Please also ensure that your `ExecStartPre` SteamCMD installation command also includes the `+@sSteamCmdForcePlatformType` parameter if necessary to force a platform version.
:::

With all the input values now adapted to your dedicated game server, you can save the file and quit nano by using `CTRL + X`, followed by `Y` to confirm and lastly `ENTER`.

Using our Palworld example, our file would look like the following:
```
[Unit]
Description=Palworld Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/Palworld-Server
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 +quit
ExecStart=/home/steam/Palworld-Server/PalServer.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## Managing Service

With your service file now created, you will need to enable it. With the `palworld.service` example, `[your_service]` is replaced with just `palworld`.
```
sudo systemctl enable [your_service]
```

:::tip
If at any point you perform changes to your service file, make sure to run `systemctl daemon-reload` afterwards to ensure that the changes take effect.
:::

You can now start the server with the `systemctl start` command. Likewise, you can easily stop and restart the server with similar commands.
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
To view details about the service, you can use the `systemctl status` command. If you require logs for debugging purposes, you can use the `journalctl -u [your_service].service` command to view the latest logs from the service.
:::

Lastly, if you ever wish to stop the service from running on start up, simply disable it.
```
sudo systemctl disable [your_service]
```

## Conclusion

You have now successfully setup a service for your dedicated game server. The server will now automatically start upon server boot.

You have also learnt about the contents of the service file as well as how to manage the service using a variety of commands.