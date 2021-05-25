---
id: fivem_installtokovoip
title: FiveM: Install TokoVOIP on server
description: Information on how to install TokoVOIP on your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install TokoVOIP
---

> IMPORTANT: A **seperate Teamspeak Server is required for TokoVOIP to work.** You can book a Teamspeak Server from us directly [here](https://zap-hosting.com/en/shop/product/teamspeak3-server/)(clickable)!

## 📶 Connect to FTP

Before TokoVOIP can be installed, you must be connected via [FTP](gameserver_ftpaccess.md).

After you have succesfully connected via FTP, you can connect and open the following server folder.
`/g#####/gta5-fivem/server-data/resources`

## ⬇️ Prerequisites

### Player Install 

Every player must install Teamspeak 3 and the TokoVOIP plugin on their personal computer.

For this tutorial, it's assumed you and your players have already installed the plugin on your local teamspeak client.

You can find the guide for this [here](https://github.com/Itokoyamato/TokoVOIP_TS3#players-setting-up-the-ts3-plugin).

## ▶️ TokoVOIP Server Install

> In this guide for the FTP Application, we are using WinSCP. You are welcome to use the FTP Application of your choice! 

### Installing/Configuring ws-server

Firstly, you will need to download [ws_server](https://github.com/Itokoyamato/TokoVOIP_TS3/releases) from the TokoVOIP Github. 

![](https://screensaver01.zap-hosting.com/index.php/s/zecMzwqWJbXXws7/preview)

You will then simply drag it over to your `resources` folder via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/HT2pDJDxA2GkWjf/preview)

Then open the directory `ws_server` that you have uploaded to the servers FTP.

Right Click, and then Edit the file  `config.js`

![](https://screensaver01.zap-hosting.com/index.php/s/tPgiQBgjTkRKAC2/preview)

In this file, we are only modifying the **TSServer** and the **WSServerPort**.

```
TSServer = Your teamspeak IP Address (DO NOT INCLUDE THE PORT)
WSServerPort = One of the Addional Ports found at bottom of the 'Settings' tab 
```

Replace **TSServer** with your teamspeak servers **IPV4 ADDRESS**

Example:

![](https://screensaver01.zap-hosting.com/index.php/s/kwEWMBGifyLNXfN/preview)

> Note: It HAS to be the IPV4 (as shown in the example). The ######.zap-ts3.com will **NOT** work. 

Replace **WSServerPort** with one of the 3 Additional Ports found directly through the 'Settings' tab.

Example:

![](https://screensaver01.zap-hosting.com/index.php/s/9G74ZL377qPWaMC/preview)

Then save your changes, and ensure they upload successfully back to the server. 

### Installing/Configuring tokovoip_script

You will need to download [tokovoip_script](https://github.com/Itokoyamato/TokoVOIP_TS3/releases) from the TokoVOIP Github. 

![](https://screensaver01.zap-hosting.com/index.php/s/MZAbALc9TAnCYpp/preview)

You will then simply drag it over to your `resources` folder via FTP.
![](https://screensaver01.zap-hosting.com/index.php/s/bprDorAtjj6kwSc/preview)

Then open the directory `tokovoip_script` that you have uploaded to the servers FTP.

Right Click, and then Edit the file  `c_config.lua`

![](https://screensaver01.zap-hosting.com/index.php/s/CYApowwqfR4SymK/preview)

In this file, we will be modifying the following values:
```
wsServer
TSChannel,
TSPassword, 
TSChannelWait
```

For **wsServer** you will put in your FTP-Browser address found on the 'FTP-Browser' page, along with the port of the ws_server that you defined in the ws_server/config.js

In our example, it will look like:

To get the IP:
![](https://screensaver01.zap-hosting.com/index.php/s/zNeoJSZ2CCTAKX3/preview)
To get the port: 
![](https://screensaver01.zap-hosting.com/index.php/s/XspTrR84NkksS3H/preview)

> Note: Customers who have booked a 'Own IPV4 Address' will still need to specify the **FTP-Browser** IP address as shown above. 

For the **TSChannel** and **TSPassword** you will set these to the names of the channel name/password you have defined on your Teamspeak Server. If you have not created this, you will need to create the channel. 

> This will be the channel that your players are moved into for communications once they have fully loaded into your FiveM server. Therefore, a password is recommended so any players that are not on the server cannot join the channel. 

In our example we configure it as:  
![](https://screensaver01.zap-hosting.com/index.php/s/zd4BjWNed9TWzpb/preview)

For the **TSChannelWait** you will put the **exact** waiting channel name your players will enter when loading into the server. You will need to create this channel, and can name it anything you wish. 

> IMPORTANT: You **must** have  **TokoVOIP** somewhere in the name of this channel. 

In our example, we configure it as shown:

![](https://screensaver01.zap-hosting.com/index.php/s/PBzcD6BZ8c2cTpQ/preview)

Then save your changes, and ensure they upload successfully back to the server.

### Configure server.cfg

Once you have configured both files, you will need to then modify your `server.cfg` file.

You can do this either via FTP, or directly through the ZAP 'Configs' tab. 

Once you have opened your server.cfg, you will need to add the following start lines in your server.cfg:

```
start ws_server
start tokovoip_script
```
![](https://screensaver01.zap-hosting.com/index.php/s/mqr2E42jSAYHtMz/preview)

### Test the plugin

Once you have configured both the ws_server and tokovoip_script and have added the start lines to the server.cfg, you have finished the base install of TokoVOIP. 

Then, **join your teamspeak waiting channel** that you have created, **start the server**, and **test it directly.**

![](https://screensaver01.zap-hosting.com/index.php/s/9yiZP2NgyJ7DyMS/preview)

> Note: If it does not work, please review the Problems section at the bottom of the guide. 

## 📃 Extra Configurations

TokoVOIP does support further configurations for things such as Radios, setting which key does what, and much more.

We advise you check all available config files and configure them to your liking.

For specific information relating to the configurations, you should visit their [Github](https://github.com/Itokoyamato/TokoVOIP_TS3)

> **ZAP is unable to assist you with advanced configurations for TokoVOIP.**


## ❓ Problems? 

If you encounter any issue, its best to **review your server console** for **any errors** and ensure you have defined the **correct IP/ports** within your configs.

Customers who have **booked a 'Own IPV4 Address'** will still need to specify the **FTP-Browser** IP address as shown in the guide. 

For bugs/errors from the script itself, its best to report it directly to the TokoVOIP [Github](https://github.com/Itokoyamato/TokoVOIP_TS3).
