---
id: dedicated-linux-fivem
title: "FiveM Dedicated Server Linux Setup (GS/TS3 Interface)"
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

For our GS/TS3 interface option we already provide our own databases included. However, if you prefer to set up your own database server and database, we recommend that you have a look at the [Install database](dedicated-linux-databases.md) guide. 

:::warning
If you are using your own database, you will need to replace the predefined database information with your own during the txAdmin setup. 
:::



###  Install GS/TS3 interface
With the user-friendly GS/TS3 interface you can install your FiveM Dedicated Server with just a few clicks. No prior knowledge is required for this installation. The setup of all required packages, server files, and the actual installation are fully automated, saving you time and effort.

:::warning
The GS/TS3 interface feature can be used with the following operating systems:

- Debian: 10, 11
- Ubuntu: 20.04

(*) We are already working on making other and newer operating systems and (versions) available in the near future.
:::

If you aren't familiar with the GS/TS3 interface yet, we recommend having a look at our [GS/TS3 Interface](dedicated-linux-gs-interface.md) guide. 

Provided you have installed the GS/TS3 interface, open the newly created game server service. Once there, the game must now be selected. To do this, navigate to the **Games** page. Click on available games, search for txAdmin and click on the install button. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### Create FiveM Server license key

Every FiveM server requires its own license key, which is managed via the new [Cfx.re Portal](http://portal.cfx.re/). The license key is linked to your Cfx.re account. Log in to the website, navigate to the **Server** category and click on the **Generate Key** button.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configration

Now you can start configuring the FiveM server and txAdmin. To do this, open the dashboard of your game server. You will find the link and login details for the txAdmin instance in the txAdmin section. Open it and then log in there. 

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### txAdmin setup

During the txAdmin setup, your own FiveM server is installed and configured in five steps. Follow the instructions in the txAdmin interface and define a **server name** first. Then select the desired **server type**. This example shows the installation of a FiveM server with pre-installed QBCore.

Select the **Popular Recipes** option in the **Deployment Type** step and then the **QBCore Framework Template**. Confirm the desired **Data Directory** and start the **Recipe Deployer** to complete the installation.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Firewall configuration

When installing the FiveM server via the GS/TS3 interface, all necessary port forwarding is set up **automatically** in the firewall. In case of any problems, you can also set up the port forwarding manually via SSH with the following command: 

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Conclusion

You have successfully installed and configured a FiveM Dedicated Server service on your VPS/Dedicated Server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂



