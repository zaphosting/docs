---
id: minecraft-custom-seed
title: "Minecraft: Configure Custom Seed"
description: Information about the configuration of a custom World Seed for your Minecraft server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Configure custom Seed
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A seed in Minecraft is a specific code made up of numbers or letters that determines how your game world is generated. It shapes the terrain, biomes, structures and resources you will discover in your world. Using the same seed with the same game version and settings always creates the same world layout, which makes sharing unique worlds with others easy.

:::info Seed Limitations
Once a world has been created, its seed cannot be changed. Seeds define how a world is generated and only take effect when a new world is created after setting the seed.
:::

<InlineVoucher />

## Configuration

To configure a custom seed, first stop your server to avoid data conflicts. Next, open your `server.properties` configuration file. You can find this configuration file in your server’s dashboard under **Configs**. Look for the line that starts with `level-seed=`. There you can enter your desired seed value. 

First things first, stop your server and head over to your server.properties, the server configuration file. You can find it in the game server administration under Configs.

![img](https://screensaver01.zap-hosting.com/index.php/s/XBKN9r3CAweP9RG/download)

Replace the example `12345` code with your own seed code. This can be any number or text string you like. Once you have set your custom seed, you need to generate a new world for it to take effect. The easiest way to do this is to change the `level-name` in the **Configs** to a new, unused name, for example `world1`. This ensures that Minecraft creates a fresh world folder with your new seed.

If you want to know more about how to recreate an existing world, you can check our [Recreate World](minecraft-worlds.md#recreate-the-world) guide for detailed instructions. 



## Conclusion

With these steps you have successfully set a new seed for your new world. Restart your server, explore your freshly generated world and enjoy your own unique Minecraft adventure. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂
