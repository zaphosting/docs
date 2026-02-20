---
id: vserver-windows-openmp
title: "Open.mp Dedicated Server Windows Setup"
description: "Learn how to set up and configure an open.mp Dedicated server on your Windows server for seamless multiplayer gaming → Learn more now"
sidebar_label: Open.mp
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Do you have a Windows VPS/Dedicated Server and you want to install the open.mp Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your server.

<InlineVoucher />

## Preparation

To begin with, connect to your VPS/Dedicated Server through Remote Desktop (RDP). Use our [Initial Access (RDP)](vserver-windows-userdp.md) guide if you need help doing this.

Once you have accessed your server, download the latest release from the [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases). Ensure that you select the **win-x86** version.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Installation

Once the release is downloaded, unzip the file contents using a tool such as 7zip or WinRAR. This should output a **Server** folder which will contain all of the necessary server files.

To start the server, simply run **omp-server.exe** and the server will start booting. However, we recommend port forwarding and configuring your server first.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Port Forwarding your server

In order to ensure that your server is accessible to the public, you must alter port forwarding rules for the ports that the VPS/Dedicated Server process is using. You can do this either through PowerShell commands directly, which is easier, or regularly through the Windows Defender Firewall page.

:::tip
Launching the server for the first time should display a UAC prompt. If you accept this, your firewall rules will be automatically setup, meaning you can proceed with the next section. Otherwise, follow one of the methods below.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open your Windows search box, and search for **PowerShell**. Make sure to right-click and **Run as Administrator** so that permissions are accessible and everything works correctly.

:::info
Ensure you run your PowerShell in Administrator mode, otherwise the settings may not apply correctly.
:::

Next, copy and paste the following commands into your PowerShell Prompt:
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

These commands will automatically create firewall rules which are necessary for your open.mp server to be accessible to the public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use the search function on Windows to open up **Windows Firewall Settings with Advanced Security**. You may have to press **Advanced Settings** to open up the necessary window if you open up the base Windows Firewall page.

![image](https://screensaver01.zap-hosting.com/index.php/s/W2nGj9tGdXCxdH2/preview)

You must create new rules for your open.mp server. To do this, click on the incoming and outgoing rules as described below and add them for the following protocols and ports:
- TCP incoming and outgoing: 7777
- UDP incoming and outgoing: 7777

Please use our [Port Forwarding (Firewall)](vserver-windows-port.md) if you need further assistance doing this.

</TabItem>
</Tabs>

Once you have added these rules, your server will now be accessible, which means you will be able to connect to it through your server's IP address.

We recommend that you configure your server settings first through the following section before accessing your server.

## Configuration

By this stage, you have finished the setup for your open.mp server. You can perform further server configuration through a configuration file.

Navigate back to the root folder. Find and open the **config.json** configuration file. In this file, you can adjust a wide variety of server parameters ranging from the port, to password and much more.

As an example, here are a few configuration options that are set:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

See our [Server Configuration](openmp-configuration.md) to view all of the available options and what they each do.

## Starting & Connecting to your server

Now it is time to start your server. Head over to the root directory and run **omp-server.exe** to begin the start up process. This will open the server's console in a command prompt and begin the startup process.

You will now be able to direct connect to your server in-game via the open.mp launcher. If you wish to view server information in the server list, please check out our [Server Configuration](openmp-configuration.md) guide and ensure that the `enable_query` parameter to true (should be the default). Save the file once done and run the server executable again.

## Conclusion

Congratulations, you have successfully installed and configured the open.mp server on your VPS/Dedicated Server! If you have any further questions or problems, please contact our support team, who are available to help you every day! 

<InlineVoucher />
