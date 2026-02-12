---
id: dedicated-windows-hytale
title: "Hytale Dedicated Server Setup"
description: "Discover how to set up the Hytale Dedicated server on your Windows Dedicated Server for seamless gameplay management → Learn more now"
sidebar_label: Hytale
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Do you have a Dedicated Server and want to host your own Hytale server on it? In this guide, we explain the step by step process of installing and running the Hytale dedicated server on a Windows system.

## Preparation

To run a Hytale server, your system must meet a few basic requirements. The server runs on Java 25 and requires at least 4 GB of RAM. Both x64 and arm64 architectures are supported. Actual resource usage depends on player count, view distance, and world activity, so additional resources may be necessary for larger servers.

Before continuing, ensure that Java 25 is installed on your Windows system. You can verify the installation by opening a command prompt and running:

```
java --version
```

If Java is not yet installed on your system, follow our dedicated Install Java guide for Windows servers. This guide explains how to install and configure Java properly on your environment.



## Installation

Start by creating a dedicated directory for the Hytale server. This keeps all server files organized in one place. For example:

```
C:\Hytale
```

The server requires two main components: the server application itself and the game assets. These files can be obtained by using the Hytale command line downloader, which is intended for server deployments and easier updates.

The CLI downloader provides a structured way to download and update the Hytale server files. After downloading the downloader archive, extract it into a temporary directory. Inside the archive, you will find a QUICKSTART.md file that describes the basic usage of the tool.

Run the downloader from the command line and follow the prompts to download the latest server version. Once the process is complete, copy the downloaded server files and the assets archive into your server directory. After this step, the directory should contain the server JAR file and an assets archive such as Assets.zip.

| **Command**                                   | **Description**                       |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | Download latest release               |
| `./hytale-downloader -print-version`          | Show game version without downloading |
| `./hytale-downloader -version`                | Show hytale-downloader version        |
| `./hytale-downloader -check-update`           | Check for hytale-downloader updates   |
| `./hytale-downloader -download-path game.zip` | Download to specific file             |
| `./hytale-downloader -patchline pre-release`  | Download from pre-release channel     |
| `./hytale-downloader -skip-update-check`      | Skip automatic update check           |



## Configuration

### Starting the server

The server is started by launching the JAR file and specifying the path to the assets archive. Adjust the path if your assets are stored in a different location. The server is started by launching the server JAR file and specifying the path to the assets archive. Open the command prompt in the server directory and run:

```
java -jar HytaleServer.jar --assets C:\Hytale\Assets.zip --bind 0.0.0.0:5520
```

### Authentication

On first startup, the server must be authenticated before players can connect. This is done directly through the server console using a device based login process. Follow the instructions shown in the console to complete authentication.

```
/auth login device
```

The output will look like this:

```
> /auth login device
===================================================================
DEVICE AUTHORIZATION
===================================================================
Visit: https://accounts.hytale.com/device
Enter code: ABCD-1234
Or visit: https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
Waiting for authorization (expires in 900 seconds)...

[User completes authorization in browser]

> Authentication successful! Mode: OAUTH_DEVICE
```

Once authenticated, your server can accept player connections.



### Firewall configuration

By default, the server listens on UDP port 5520 and binds to all available interfaces. You can change the address and port if required. The server communicates over UDP using QUIC. Make sure your firewall allows incoming UDP traffic on the chosen port by either using Iptables or UFW. Run the following command in powershell to apply this firewall rule easily: 

```
New-NetFirewallRule -DisplayName "Hytale Server" -Direction Inbound -Protocol UDP -LocalPort 5520 -Action Allow
```



## Performance notes

View distance is one of the most important factors influencing memory consumption. Higher values increase RAM usage because more world data must remain active at the same time.

For most setups, a maximum view distance of 12 chunks (384 blocks) provides a good balance between server performance and gameplay experience.

For comparison, Minecraft servers use a default view distance of 10 chunks (160 blocks). Hytale’s default of 384 blocks is roughly equivalent to 24 Minecraft chunks, which explains the higher memory requirements. This value should be adjusted based on expected player count and available system resources.



## Conclusion

Congratulations, you now have a functional Hytale server running on your system. From here, you can extend the setup by installing mods, adjusting world settings, and tuning performance parameters to match your player base. Regular monitoring of resource usage is recommended to ensure stable operation as the server grows.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

