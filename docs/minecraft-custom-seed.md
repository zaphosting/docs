---
id: minecraft-custom-seed
title: "Minecraft: Custom world seed"
description: "Discover how to create unique Minecraft worlds by setting custom seeds for new adventures and world generation → Learn more now"
sidebar_label: Custom world seed
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A seed in Minecraft is a specific code made up of numbers or letters that determines how your game world is generated. It shapes the terrain, biomes, structures and resources you will discover in your world. Using the same seed with the same game version and settings always creates the same world layout, which makes sharing unique worlds with others easy.

Keep in mind that you cannot change the seed for an existing world. The seed only affects the generation of a new world. To use a different seed, you always need to create a new world after setting it.

<InlineVoucher />



## Configuration

To configure a custom seed, first stop your server to avoid data conflicts. Next, open your `server.properties` file. You can find this configuration file in your server’s administration panel under **Configs**.

![img](https://screensaver01.zap-hosting.com/index.php/s/XBKN9r3CAweP9RG/download)

Look for the line that starts with `level-seed=`. Here you can enter your desired seed value. For example:

```
level-seed=12345
```

Replace `12345` with your own seed code. This can be any number or text string you like. After you have set your custom seed, you need to generate a new world for it to take effect. 

The easiest way to do this is to change the `level-name` in the **Settings** to a new, unused name, for example `world1`. This ensures that Minecraft creates a fresh world folder with your new seed.

If you want to know more about how to recreate an existing world, you can check our [Recreate World](minecraft-worlds.md) guide for detailed instructions. Finally, start your server again. Minecraft will now generate a new world using your custom seed.

## Conclusion

With these steps you have successfully set a new seed for your new world. Restart your server, explore your freshly generated world and enjoy your own unique Minecraft adventure. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
