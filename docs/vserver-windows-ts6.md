---
id: vserver-windows-ts6
title: "Setup TeamSpeak 6 Server on a Windows Server - Deploy Your Own Voice Platform"
description: "Discover how to set up and optimize the TeamSpeak 6 Server beta for seamless hosting and performance → Learn more now"
sidebar_label: Install Teamspeak 6 Server
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In summer 2025, TeamSpeak released the **Beta version** of the **TeamSpeak 6 Server**. Now you can experience the next generation of TeamSpeak firsthand! 

Considering about hosting this service yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Prerequisites

Before installing the **Teamspeak 6 Server**, ensure that your hosting environment meets the following requirements to guarantee a smooth installation and optimal performance.

| Hardware   | Minimum      | ZAP-Hosting Recommendation |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Cores | 4 vCPU Cores               |
| RAM        | 1 GB         | 4 GB                       |
| Disk space | 1 GB         | 25 GB                      |



## Preparation

Before setting up the **TeamSpeak 6 Server**, you need to prepare your system. To make sure your system is running with the most recent software and security improvements, you should always perform system updates first. 

This ensures that your system has the latest security patches and software versions before proceeding.




## Installation
Now that all requirements have been met and the necessary preparations have been completed, you can proceed with the installation of the Teamspeak 6 Server application. To install the TeamSpeak 6 Server, first download the latest release file `http://teamspeak-server_win64-v6.0.0-beta6.zip/` from GitHub: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Next, extract the file into a directory of your choice. Open **PowerShell** and navigate to the directory where you extracted the server files. Start the server by running:

```
.\tsserver.exe
```

On the first startup, a window with the license agreement will appear, which you need to accept. After that, the Server Query Admin Account credentials and the privilege key will be displayed. These details are shown only once, so make sure to store them safely.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Once confirmed, the TeamSpeak 6 Server will already be running in the background and ready to use.

##### 

## Configuration

You can also adjust additional settings for the **TeamSpeak 6 Server** using **command-line arguments**. Options are passed directly when starting the server. A full list of available options can be found in the official [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md) documentation. Example:

```
./tsserver --default-voice-port 9987
```



## Establishing connection

Once the TeamSpeak 6 Server is up and running, you can connect using the TeamSpeak 6 Client. Simply use the IP address of your server along with the correct port. Enter these details in the client to connect to your server and start testing.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusion and more Resources

Congratulations! You have now successfully installed and configured Teamspeak 6 Server on your VPS/Dedicated Server. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [Official Website](https://teamspeak.com/en/) - Information and downloads for TeamSpeak 6
- [Community Forum](https://community.teamspeak.com/) - User support and discussions
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Report bugs and track open issues

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂