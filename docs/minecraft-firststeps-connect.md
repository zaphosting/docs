---
id: minecraft-firststeps-connect
title: "Minecraft: Connect to the server"
description: "Discover how to connect to your Minecraft server smoothly and understand the tools needed for a seamless gaming experience → Learn more now"
sidebar_label: Connect to the server
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Not sure how to connect to your **Minecraft** server or what you need to get started? No worries, we’ve got you covered! We will walk you through everything you need. From the required tools and information to the actual connection process, along with key considerations to ensure a smooth and trouble-free connection experience. Follow our guide and you'll be connected in no time!



## Requirements

Additional software may be required to connect to the game server for this game. For the vanilla version of Minecraft, i.e. without additional mods or modpacks, no additional software is required. If you want to use mods/modpacks, you will also need the matching launcher. You can see which launcher you need for the respective mod or modpack by the name of the game in the dashboard. 

| Minecraft variant                       | Additional software required |
| --------------------------------------- | ---------------------------- |
| Minecraft: Vanilla                      | X                            |
| Minecraft: Paper Spigot                 | X                            |
| Minecraft: Spigot                       | X                            |
| Minecraft: Bukkit                       | X                            |
| Minecraft: Forge                        | ✓                            |
| Minecraft: Fabric                       | ✓                            |
| Minecraft with Mods/Modpacks in general | ✓                            |




#### Mods
If you want to use mods, you will also need the matching mod loader. Depending on whether you want to use mods from Forge or Fabric, you will require one of the two. 

- [Minecraft: Forge](https://files.minecraftforge.net/net/minecraftforge/forge/) - To use Forge mods, it is necessary to download and install Forge.
- [Minecraft: Fabric](https://fabricmc.net/) - To use Fabric mods, it is necessary to download and install Fabric.

Forge and also Fabric Mods must be installed manually both in the game and in the server software so that a connection can be established.

:::danger Don't mix Fabric/Forge mods
Fabric and Forge are not compatible with each other. Forge mods must run on Forge, and Fabric mods must run on Fabric. Mixing can lead to both client and server crashes. 
:::


#### Modpacks
If you want to use one of the modpacks, you will also need the matching launcher. You can see which launcher you need for the respective modpack by the name of the game in the dashboard. 
- [CurseForge](https://www.curseforge.com/) - To use modpacks from the Curse / Twitch Launcher, it is necessary to download it and install the modpack from there. 
- [Feed The Beast](https://www.feed-the-beast.com/) - To use modpacks from the Feed The Beast Launcher, it is necessary to download it and install the modpack from there. 
- [Technic Launcher](https://www.technicpack.net/) - To use modpacks from the Technic Launcher, it is necessary to download it and install the modpack from there. 



## Obtain server details

You will require all the relevant information necessary to connect to your server. The information about your server can be found on the dashboard of your game server's web interface panel. Important information includes the following

- IP address and port

Using the information mentioned above, you should be able to locate your server and ensure that you connect to the correct server.

![img](https://screensaver01.zap-hosting.com/index.php/s/2orebizt2rz5bBz/preview)

## Establish server connection

The connection to a game server can often be established in one or more ways. Available methods are described and explained in detail below.

<Tabs>
    <TabItem value="connect_solution_server_browser_ingame" label="Server Browser (In game)" default>

Start your game via the Minecraft or Mod pack launcher and navigate to the **Multiplayer** menu option. Then click on **Add Server**. There you can enter a name as a placeholder and the IP address/port.

![img](https://screensaver01.zap-hosting.com/index.php/s/4nAK62sXGLySm4D/download)

</TabItem>


</Tabs>



## Potential issues and solutions

The connection to a game server can often be established in one or more ways. Available methods are described and explained in detail below.

#### Not visible

A lack of visibility of the server can occur if the initialization was not completed successfully. This may for example be due to a faulty configuration or corrupted files. Further information can usually be traced in the server console or log files.

#### Connection failed, Connection timed out.
This error message means that a connection with the server could not be established within the scheduled time frame. The causes for this can be various. More information can usually be found in the logs or live console.

#### Mismatched mod channel list
This error message occurs when there is a difference in mods between the client and the server. This can for example occur if individual mods are missing or they are installed for a different version. In this case, the mods should preferably be reinstalled and checked on the client and the server.



#### Missing solution or unhelpful

Still facing issues after troubleshooting? In this case, our support team is available daily to provide assistance. Simply create a **[Ticket](https://zap-hosting.com/en/customer/support/)** on our website and explain your issue to us with as much details as possible. We will have a look at it as quickly as possible and assist you in solving the issue accordingly!



## Conclusion

Congratulations, provided you have successfully followed everything, you should have successfully established a connection to the server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
