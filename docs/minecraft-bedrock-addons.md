---
id: minecraft-bedrock-addons
title: "Minecraft Bedrock: Install Addons"
description: "Discover how to enhance your Minecraft Bedrock server with addons to expand gameplay and customize your world → Learn more now"
sidebar_label: Install Addons
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction
Minecraft Bedrock Edition has native modding support and a massive community, which allows you to expand and enhance the gameplay with your friends. In this guide, we will cover the process of installing and activating an addon on your Minecraft Bedrock server.

<InlineVoucher />

## Preparation

To install an addon map to your Minecraft: Bedrock server, you need to connect to it via FTP. If you are not familiar with this, we recommend you take a look at the [FTP access](gameserver-ftpaccess.md) guide.

Before proceeding with installation, you will also have to find addons that you wish to install on your server. We recommend browsing on [CurseForge](https://www.curseforge.com/minecraft-bedrock) as they offer a huge library of addons and resource packs created by the community. 

## Installation

There are two ways to install an addon in Minecraft Bedrock. You can either install the addons into a new world, which makes the process very easy, or you can install them into an existing world, which is more difficult.


## Using new World (easy)

To create a new world with addons, you first have to simply open the downloaded `.mcaddon` or `.mcpack` file.
This will open Minecraft Bedrock and import the addon into the game.

### Create World 

To create a world and install the addons to it, click on `Play` and then `Create new world`.
You can then choose all the regular world settings you would like:

![](https://screensaver01.zap-hosting.com/index.php/s/jtK2szxRNSSiea5/preview)

### Install Addons

Before clicking on `Create`, you need to navigate to `Resource packs` or `Behavior packs`.
There you click on `Activate`, next to the addon name:

![](https://screensaver01.zap-hosting.com/index.php/s/ARnp4YFq5iZjxYZ/preview)

Some addons have both a resource pack and a behavior pack, so you have to activate both. If you have activated all the desired addons, you can click `Create`.

To export the world and upload it to your server, you can use the [Import own World](minecraft-bedrock-add-world.md) guide.

## Using existing World (difficult)

Installing the addon into an existing world is more difficult, but has the benefit of being able to play with the addon and keep the progress you have made already.

### Installing 7-zip

To install the addon into an existing Minecraft World, you need to install 7-zip so you can open the addon file.
The installation process is very easy, you have to visit the [7-zip download page](https://www.7-zip.org/) to get the newest setup version:

![](https://screensaver01.zap-hosting.com/index.php/s/iRxwB5yTpbTYpbt/preview)

Once downloaded, open the file and click **Install**.

### Extracting the Addon

As soon as you have downloaded your desired addon, you can extract it with 7-zip by right-clicking the `.mcaddon` file, hovering over `7-zip` and clicking `Extract to FOLDERNAME`:

![](https://screensaver01.zap-hosting.com/index.php/s/ZCPPNTLtErtEQWr/preview)

If the addon contains both a resource and behavior pack, then you have to do the same for the contents of the folder, as they are `.mcpack` files as well:

![](https://screensaver01.zap-hosting.com/index.php/s/tpz8iJ4wymBo6ZF/preview)

The difference between resource packs and behavior packs can be seen in the folder name. Resource Pack Folders have `RP` in their name, behavior packs have `BP`.

<Tabs>
  <TabItem value="resource-pack" label="Resource Pack" default>


### Uploading Resource Pack

To upload the resource pack, navigate to this folder on your FTP client:

```
/gXXXXXX/minecraft-bedrock/resource_packs
```

Then you can drag and drop the RP directory into the FTP client:

![](https://screensaver01.zap-hosting.com/index.php/s/5c3X4S9fNaXrJFs/preview)

:::caution
Make sure you upload the correct folder that directly contains the resource pack, not only a subfolder.
The contents of the folder you are uploading should look like that:

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### Enabling Resource Pack

To enable the resource pack, you have to open the `manifest.json` inside the RP folder. Then you have to navigate to the world folder in your FTP client:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Once there, you have to open the `world_resource_packs.json`. 
If you never installed any addons, you have to create this file. Paste the following text into the file:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```

Replace the values of `pack_id` and `version` with the values from the manifest.json you opened earlier:

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
If you want to install more than one pack, you can add multiple values.
It is important to have a comma `,` separating the values, but you must not set one at the bottom:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```
:::

</TabItem>
<TabItem value="behavior-pack" label="Behavior Pack">

### Uploading Behavior Pack

To upload the behavior pack, navigate to this folder on your FTP client:

```
/gXXXXXX/minecraft-bedrock/behavior_packs
```

Then you can drag and drop the BP directory into the FTP client:

![](https://screensaver01.zap-hosting.com/index.php/s/rT5s9ML82d3daeM/preview)

:::caution
Make sure you upload the correct folder that directly contains the behavior pack, not only a subfolder.
The contents of the folder you are uploading should look like that:

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### Enabling Behavior Pack

To enable the resource pack, you have to open the `manifest.json` inside the BP folder. Then you have to navigate to the world folder in your FTP client:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Once there, you have to open the `world_behavior_packs.json`. 
If you never installed any addons, you have to create this file. Paste the following text into the file:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```

Replace the values of `pack_id` and `version` with the values from the manifest.json you opened earlier:

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
If you want to install more than one pack, you can add multiple values.
It is important to have the comma `,` separating the values, but you must not set one at the bottom:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```
:::
</TabItem>
</Tabs>

### Verify the changes

Start your server, connect to it, and verify that the addons have been installed correctly. Test the new features or resources to ensure everything is working as expected. If something doesn’t go as planned, double-check the steps and make sure the files have been uploaded correctly, and search for any errors in the server console.

## Conclusion

Installing addons on your Minecraft Bedrock Server is a great way to expand the gameplay experience and add new content. With this guide, you can easily install addons and customize your server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
