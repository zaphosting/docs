---
id: beammp-addon-map
title: "BeamMP: Install Addon Map"
description: Information on how to install an addon map for your BeamMP server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Addon Map
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Sometimes the default maps a game offer are not exiting enough or get boring after a while. That is the reason some people create customized maps and publish them for others! Do you want to change the map on your server to a custom one from the internet? Then this is the right place for you! 

BeamMP is a multiplayer modification for the single player game BeamNG.drive. Therefore the maps for the base game are also compatible with BeamMP!
Since BeamNG.drive has a large community, there are also a lot of maps out there! The most popular source for them is the [BeamNG Forum](https://www.beamng.com/resources/categories/terrains-levels-maps.9/).

<InlineVoucher />

## Preperation

To install an addon map to your BeamMP server, you need to connect to it via FTP. You will need an FTP client to upload files to your server. If you are not familiar with using FTP, we recommend you to have a look at the [Access via FTP guide](https://zap-hosting.com/guides/docs/gameserver-ftpaccess).

## Installation

### Determining map name

The first step to import the map into your server and also apply it correctly to your configuration file, is to find the correct map name.
The ZIP archive you download is often already named correctly, but sometimes that is not the case, which is the reason you need to make sure to get the correct map name.

To do so, you need to open the downloaded map archive. You need to open the `levels` directory which is inside:

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

Then you need to copy the name of the directory found in the levels folder. You can do so by using `RIGHT CLICK`, clicking on `Properties` and copying the highlighted text using `CTRL + C`:

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### Setting up the config

Now that you have determined the map name, it is time to set up our new map as standard in the configuration file.

First, you need to navigate to the **Configs** section in your Webinterface.

![](https://screensaver01.zap-hosting.com/index.php/s/sBj4CFQ3yKmMy8d/preview)

Then you open the `ServerConfig.toml` and search for the value `Map = "/levels/gridmap_v2/info.json"`.

![](https://screensaver01.zap-hosting.com/index.php/s/JQg3EzkszXDrGFQ/preview)

After that, you replace the value with `Map = "/levels/[your_mapname]/info.json"` using the map name we determined earlier and then save the config:

![](https://screensaver01.zap-hosting.com/index.php/s/oNKN34KTAxrSxYX/preview)

:::info
In rare cases, a map can be formatted differently. If the map doesn't work after following all the steps, it is possible that instead of `Map = "/levels/[your_mapname]/info.json"`, you need to specify this path: `Map = "/levels/[your_mapname]/[your_mapname].mis"`
:::

### Uploading the map to the server

For the final step, you just need to upload the ZIP Archive containing the map via FTP to your server.
You need to put it in the following path:

```
/gXXXXXX/beammp/Resources/Client
```

:::tip
If you want to switch to one of the game's default maps, here is a list:
```
"/levels/gridmap/info.json"
"/levels/automation_test_track/info.json"
"/levels/east_coast_usa/info.json"
"/levels/hirochi_raceway/info.json"
"/levels/italy/info.json"
"/levels/jungle_rock_island/info.json"
"/levels/industrial/info.json"
"/levels/small_island/info.json"
"/levels/smallgrid/info.json"
"/levels/utah/info.json"
"/levels/west_coast_usa/info.json"
"/levels/driver_training/info.json"
"/levels/derby/info.json"
```
:::

## Conclusion

After you followed all the steps, proceed to restart your BeamMP server. You have successfully installed an addon map on your BeamMP game server!



