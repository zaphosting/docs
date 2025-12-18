---
id: fivem-changeloadingscreen
title: "FiveM: Installation of Custom Loading Screen"
description: "Discover how to customize your FiveM loading screen for a unique player experience and enhance your server visuals → Learn more now"
sidebar_label: Install Custom Loading Screen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Would you like to use your own customized loading screen instead of the default FiveM loading screen? Below we'll explain how to do this and what steps you have to follow!

<InlineVoucher />



## Preparation

In order to install your own loading screen, you first need to find a suitable resource. You can find a large selection of resources on the official [Cfx.re website](https://forum.cfx.re/c/releases/7). Next, download the resource and unzip it on your computer.

![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## Installation

The installation of the loading screen is done via FTP. To do this, connect to your game server via FTP. If you don't know how to use FTP yet, please have a look at our [FTP access](gameserver-ftpaccess.md) guide. 

Once you are connected via FTP, navigate to the resource folder. Depending on the framework you have installed, you will find your resource folder under the following folder structure: `/gXXXXXX/fivem/YOUR_FRAMEWORK/resources`

Upload the folder from your resource that you previously downloaded and unzipped on your computer to this location.

![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



Now that the loading screen resource has been successfully uploaded, it still needs to be added to the server configuration file `server.cfg`. To do this, log in to the txAdmin interface and open the CFG Editor. 

Then add your resource to the config. You can do this with the `start resourcename` command. In this example, it would be `start loadingscreen`. Save your changes and restart the server afterwards. 

![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)







## Conclusion

Provided you have followed all the steps, you should see your new loading screen after the next restart of your server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
