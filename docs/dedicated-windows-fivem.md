---
id: dedicated-windows-fivem
title: "FiveM Dedicated Server Setup"
description: "Discover how to set up and run your own FiveM Dedicated Server with txAdmin for seamless multiplayer gaming → Learn more now"
sidebar_label: FiveM
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introduction

Do you own a dedicated server and want to install and operate your own FiveM Dedicated Server service with txAdmin? You've come to the right place! In the following, we will explain all the necessary steps on how to install and configure it and what you need to consider. 



:::warning  Operating system selected and installed
It is assumed that you have already selected and installed an operating system for your VPS/Dedicated Server. If you haven't yet completed this step, you must first follow the steps in the [Initial setup](dedicated-setup.md) guide for dedicated servers.
:::



## Preparation

In order to set up a FiveM server, certain preparation steps are necessary which must be implemented before the actual setup of the FiveM Dedicated Server can begin.



### Set up database

If you want to use and install resources that require a database, you need an additional **database server**. There are various ways to set up such a server. In our [Install MySQL](dedicated-windows-installmysql.md) guide, we show you how to install your own **database server** on your **dedicated server**.



### Download FiveM Server Software

The next step is to download the FiveM server software. To do this, navigate to the [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) website of FiveM via one of the installed Internet browsers of your choice and download the latest FiveM server build. 

Unzip the downloaded file in the Downloads directory and move the FiveM server files preferably to a separate directory. In this example, the server software is located in a folder named **FiveM** on the desktop. 

:::warning Unpacking tool required
To unpack the downloaded FiveM Server software, an unpacking tool is required for the packed file. In this example, [7Zip Software](https://7-zip.com/) is used. 
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Create FiveM Server license key

Every FiveM server requires its own license key, which is managed via the new [Cfx.re Portal](http://portal.cfx.re/). The license key is linked to your Cfx.re account. Log in to the website, navigate to the **Server** category and click on the **Generate Key** button.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuration

Now you can start with the installation of the FiveM Server and txAdmin. To start with this step, open your FiveM Server directory again and run the `FXServer.exe` application.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Once the server application has been executed, the server console and txAdmin will open. In the txAdmin interface, you must link your **Cfx.re account** with txAdmin.  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### txAdmin Setup

During the txAdmin setup, your own FiveM server is installed and configured in five steps. Follow the instructions in the txAdmin interface and define a **server name** first. Then select the desired **server type**. This example shows the installation of a FiveM server with pre-installed QBCore.

Select the **Popular Recipes** option in the **Deployment Type** step and then the **QBCore Framework Template**. Confirm the desired **Data Directory** and start the **Recipe Deployer** to complete the installation.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

During the Recipe Deployer, the last necessary information must be added before the server can finally be started. Enter your previously created FiveM license key in the **License Key** field. Then click on **Show/Hide Database Options (Advanced)** and enter the login details of your database server. In this case, only the previously defined password for the **root** user is required. All other settings can remain unchanged. Check your input and then click on **Run Recipe** to start the process.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Firewall configuration
In order to ensure that your server is accessible to the public, you must alter port forwarding rules for the ports that the VPS/Dedicated Server process is using. You can do this either through Powershell commands directly which is easier, or regularly through the Windows Defender Firewall page.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open your Windows search box, and search for **Powershell**. Make sure to right-click and **Run as Administrator** so that permissions are accessible and everything works correctly.

:::info
Ensure you run your Powershell in Administrator mode, otherwise the settings may not apply correctly.
:::

Next, copy and paste the following commands into your Powershell Prompt:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

These commands will automatically create firewall rules which are necessary for your FiveM server to be accessible to the public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use the search function on Windows to open up **Windows Firewall Settings with Advanced Security**. You may have to press **Advanced Settings** to open up the necessary window if you open up the base Windows Firewall page.

![](https://screensaver01.zap-hosting.com/index.php/s/woitzXpAAirg9JN/preview)

You must create new rules for your FiveM server. To do this, click on the incoming and outgoing rules as described below and add them for the following protocols and ports:
- TCP incoming and outgoing: 30120
- UDP incoming and outgoing: 30120

Please use our [Port Forwarding (Firewall)](vserver-windows-port.md) guide if you need further assistance doing this.

</TabItem>
</Tabs>

## Conclusion

You have successfully installed and configured a FiveM Dedicated Server service on your VPS/Dedicated Server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂



