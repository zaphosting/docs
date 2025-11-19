---
id: dedicated-linux-gs-interface
title: "Dedicated Server: Gameserver/TS3 Interface"
description: "Discover how to easily set up game servers, voice servers, and music bots on Linux VPS or dedicated servers → Learn more now"
sidebar_label: GS/TS3 Interface
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

If game server products don't meet your taste or expectations, or if you need your service in other ways, using a VPS or dedicated server is often a better option. However, you often face the challenge that not all services are automated or pre-installed. Setting up services such as game servers, Teamspeak 3 servers, and music bots must be done independently.

To solve this problem, we have developed a practical solution for our Linux-based VPS or dedicated server. The so-called Gameserver/Teamspeak 3 Server interface (GS/TS3 Interface)!



## Use case

With the user-friendly GS/TS3 interface, you can install Teamspeak 3 or other selected game server services on your Linux-based VPS or dedicated server with just a few clicks. No prior knowledge is required for this installation. The setup of all required packages, server files, and the actual installation are fully automated, saving you time and effort.

:::warning
The GS/TS3 interface feature can be used with the following operating systems:

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) We are already working on making other and newer operating systems and (versions) available in the near future.
:::



## Available services & games

The GS/TS3 interface supports the setup of game servers, voice servers, and music bots. Most of the games we offer for our game server products are also available in the GS/TS3 interface option. This applies to all games that we actively operate under Linux. All games that run on Windows operating systems can unfortunately not be installed. There, only a manual installation is possible, provided that the game supports a Linux server version.

| Services    | Supported |
| ----------- | ---------------- |
| Gameserver  | ✔️                |
| Voiceserver | ✔️                |
| Musicbot (Sinusbot)  | ✔️                |



## Installation and configuration

To install the GS/TS3 interface, you need to navigate to the navigation panel **Settings** in the server administration of your product and click on the sub-item **Gameserver / TS3**. 

The first time you call up the GS/TS3 interface, you will be redirected to the user-friendly setup assistant. To set up the interface and link it with the server, you must select an supported operating system and provide the root user's login details. 

![](https://screensaver01.zap-hosting.com/index.php/s/dLeLDKdmdiZ74CP/download)



Once the server and the website have been successfully linked, the GS/TS3 interface can be created. 



![](https://screensaver01.zap-hosting.com/index.php/s/FK9mP3BgzrPmH7S/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/JL7jyTKbCEx8FBZ/preview)

:::info
**Caution**: Please do not continue the process until the interface is completely installed. You can recognize the successful installation by the fact that the progress bar has disappeared and "Installed" is displayed instead of "Missing" for each required package.
:::



### Create Game server

Provided that the creation and installation of the GS/TS3 interface has been completed successfully, you can now start setting up the services. The installation of a game server is done via the **Install game server** button in the **Game server** category.

![](https://screensaver01.zap-hosting.com/index.php/s/QinM7KtFwcAp5pE/preview)



In the next step, you have the option of selecting the IP address of the desired game server (provided your server has more than one IP). You can also specify the desired port, the number of slots and the RAM boost individually.

![](https://screensaver01.zap-hosting.com/index.php/s/cqWwZbXT77okeDa/preview)

Make sure that all the details are correct and meet your prerequisites. As soon as you have made all the settings, click on "Install game server now" to start the installation process. The game server will then be set up according to your specifications and you will soon be able to get started. You can now view and call up your newly created game server in the list.



![](https://screensaver01.zap-hosting.com/index.php/s/9WkJnxzkaEHmri7/preview)



You are now in the administration of your game server. There you can select and install the desired game for your game server in the **Settings** navigation panel under **Games**.

![](https://screensaver01.zap-hosting.com/index.php/s/6pxEbWttos6HAYt/preview)

Here you will find a list of all the games you can install on your server. In this example, a server with the game (package) Minecraft: Paperspigot will be installed. Select your desired game and click on the green button to start the installation.

![](https://screensaver01.zap-hosting.com/index.php/s/gazW2itexCJd7cY/preview)

An overview with all the necessary conditions will be displayed. If all conditions are met, you can confirm the process with the **Accept and Install** button.

![](https://screensaver01.zap-hosting.com/index.php/s/jeQC7dp6zpe3ny4/preview)

Setting up the game may take some time depending on the game. The progress is shown in the status display. Afterwards, you can start your game server and connect to it in the game!



### Create Voice server

The installation of a **Voiceserver (Teamspeak 3 Server)** is similar to the installation of a game server. You must first click on "Gameserver / TS3" again. In this section you will find the option **Install voice server**, which you can click to start the installation process for the Teamspeak 3 server.

![](https://screensaver01.zap-hosting.com/index.php/s/mi8p3NTfwBBExsD/preview)

In the next step, you have the option of specifying the desired settings for your Teamspeak 3 server, such as the IP address, the port and the number of available slots. Once you have entered all the necessary information, you can complete the installation by clicking on **Install voice server now**.

![](https://screensaver01.zap-hosting.com/index.php/s/ajfzxsJfCFdfBac/preview)

Make sure that all the information is correct and meets your prerequisites. Once you have made all the settings, click on **Install Teamspeak 3/5 Server now** to start the installation process. You can now view and click on the installed Teamspeak 3 server in the **Voiceserver Overview**.

![](https://screensaver01.zap-hosting.com/index.php/s/YaEYorRG7TJGpmB/preview)

:::info
**Caution**: This is the instance on which the Teamspeak 3 server will be installed afterwards.
:::

You are now in the interface of the instance of your installed Teamspeak 3 server. You can now start the instance by clicking on the **Start** button.

![](https://screensaver01.zap-hosting.com/index.php/s/SmqHB24ozJimBY9/preview)


You can now click on the menu item **Virtual Servers**. All installed Teamspeak 3 servers on your instance are clearly listed in this area. To call up the interface of the respective Teamspeak 3 server, simply click on the "eye" symbol.

![](https://screensaver01.zap-hosting.com/index.php/s/E3ZqxC9rPjWwC5F/preview)

In the Teamspeak 3 server interface, you will find all the necessary information and setting options to individually design and manage your server. For example, under the tab "Authorization key" you can create a token that grants you admin rights on your server. This gives you complete control over user administration and access to the server.

Under the menu item "Settings" you have further options to customize your server. Here you can, for example, change the name of your server, set a password to restrict access, or store a personal welcome message that users receive when they enter the server.

:::caution Information about Teamspeak licenses
There is no licence installed on the Teamspeak 3 server by default. This means that you can only use a Teamspeak 3 server with a capacity of 32 slots. However, if you would like to activate more capacity or additional functions for your Teamspeak 3 server, you can purchase a corresponding licence from Teamspeak.
:::





## Conclusion
Congratulations, you have successfully installed and configured our GS/TS3 interface! If you have any further questions or problems, please contact our support team, who are available to help you every day!


