---
id: beammp-addon-map
title: "BeamMP: Install Addon Map"
description: "Discover how to enhance your BeamMP server with custom map addons for improved multiplayer gameplay → Learn more now"
sidebar_label: Install Addon Map
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

BeamNG.Drive has native modding support and a massive community which allows you to expand and enhance the gameplay with your friends. Since BeamMP simply acts as a multiplayer modification, most map addons should be compatible with your BeamMP server. In this guide, we will cover the process of installing and activating a custom map addon on your BeamMP server.

<InlineVoucher />

## Preparation

To install an addon map to your BeamMP server, you need to connect to it via FTP. If you are not familiar with this, we recommend you to have a look at the [Access via FTP](gameserver-ftpaccess.md) guide.

Before proceeding with installation, you will also have to find maps addons that you wish to install to your server. We recommend browsing the [official BeamNG.Drive Forum](https://www.beamng.com/resources/categories/terrains-levels-maps.9/) which contains a huge library of mods and map addons created by the community. 

:::tip
Since BeamMP is a multiplayer modification for BeamNG.Drive, most map addons should be compatible with your BeamMP server. However, it is possible that certain specific maps may not function as expected, so you will have to test each map out.
:::

## Installation

To begin, ensure that you have downloaded an addon map which you aim to add to your server. This should be in a `.zip` file format.

### Selecting Map Name

Before proceeding with further steps, it is important to ensure that the correct map name is being used. The `.zip` file that you have downloaded should typically have the correct name, however this is not always the case which is why you should double check.

To do so, you need to open the downloaded `.zip` file. Inside of the file, locate and open the `levels` directory, which will contain the actual map.

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

You need to copy the specific name of the map addon folder found in this directory. You can do so by pressing right-click, selecting the `Properties` option and copying the highlighted text using `CTRL + C`.

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### Configuring Map

Now that you have determined the map name, you will have to adjust the configuration file and adjust a parameter which contains the active map.

#### Deactivating the config override

First, you need to disable the default map selection in the settings, as it would override your changes.

This can be done easily by navigating to the **Settings** section in your game server's web interface panel.

![](https://screensaver01.zap-hosting.com/index.php/s/SJ5L6APTFzyZKTC/preview)

There you deactivate the "Map" setting.

![](https://screensaver01.zap-hosting.com/index.php/s/kHSybw6rw5jMaE3/preview)

Next you have to save the settings at the bottom of the page.

#### Changing the map in the config

To change the map in the config you first need to navigate to the **Configs** section in your Webinterface.

![](https://screensaver01.zap-hosting.com/index.php/s/sBj4CFQ3yKmMy8d/preview)

Find and open the `ServerConfig.toml` configuration file and search for the line:
`Map = "/levels/gridmap_v2/info.json"`

![](https://screensaver01.zap-hosting.com/index.php/s/JQg3EzkszXDrGFQ/preview)

After that, you replace the value with `Map = "/levels/[your_mapname]/info.json"` using the map name we determined earlier and then save the config.

![](https://screensaver01.zap-hosting.com/index.php/s/oNKN34KTAxrSxYX/preview)

:::info
In rare cases, a map can be formatted differently. If the map doesn't work after following all the steps, it is possible that instead of `Map = "/levels/[your_mapname]/info.json"`, you need to specify this path: `Map = "/levels/[your_mapname]/[your_mapname].mis"`
:::

:::tip
At any time, you can utilise the game's default maps simply by enabling the option in the settings again and choosing one of them:
![](https://screensaver01.zap-hosting.com/index.php/s/8SSceQj373GQ3sw/preview)
:::

### Uploading Map 

As a final step, you will need to upload the `.zip` file you downloaded previously containing the map to your BeamMP game server via FTP. Once again, please use our [Access via FTP](gameserver-ftpaccess.md) guide if you need assistance with this.

Locate the following path in your FTP client.
```
../beammp/Resources/Client
```

Simply drag and drop the map addon `.zip` file into this location to upload the map to your server. With the configuration file edited and the map files uploaded, your map addon should be ready for use.

## Conclusion

After you followed all the steps, proceed to restart your BeamMP server. You have successfully installed an addon map on your BeamMP game server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
