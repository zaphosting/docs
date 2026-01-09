---
id: palworld-server-modding
title: "Palworld: Installing Mods for Palworld"
description: "Discover how to enhance your Palworld gameplay with mods for servers and clients safely and effectively → Learn more now"
sidebar_label: Install Mods
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Since Palworld's release, new exciting mods have begun to appear online to improve the gaming experience and make the game even more fun. In this guide we will explore the process of adding game modifications (mods) to your Palworld server and/or game client.

<YouTube videoId="x4tfL3Vi5qE" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5LynAssgfXj6qgr/preview" title="How To Install Mods On Your Palworld Server!" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

<InlineVoucher />

### Key Information

At present time, you can view and download available mods through 3rd party modding sites. We can recommend using sites such as [Nexus Mods](https://www.nexusmods.com/palworld/) or [Curseforge](https://www.curseforge.com/palworld/) which are reputable within the modding space. You cannot download mods through Steam Workshop at this current time.

:::note
ZAP-Hosting is not liable for any potential modifications/damage to your server files or world by installing mods. We heavily advise you to make backups before continuing. Learn more about backups through our dedicated [Manage Savegames](palworld-server-savegames.md) guide which explores this in further detail.
:::

:::info
We currently only support PAK mods (.PAK files). You will not be able to use any mods which require an executable file for security purposes.
:::



### Server & Client-sided Mods

When choosing mods, you must first determine whether they are server-sided or client-sided. The easiest way to establish this is by searching the website description for the mod, or contacting the mod author directly.

Server-sided scripts can be installed directly on the server and don't require any action from players. On the other hand, client-sided mods will require any user who wishes to connect, to download and install it the mod themselves locally in their game files.

:::info
You must verify that the mod you wish to use is compatible with the current game-build version of Palworld.
:::



## Step 1: Preparing PAK File

By heading to modding sites, such as the ones suggested in the introduction section, you will be able to browse and download a wide selection of different mods.

:::info
Reminder: We currently only support PAK mods (.PAK files) for security purposes.
:::

Proceed to the mod which you wish to use, and download it locally to your device. If necessary, unzip the files using a tool such as [7zip](https://www.7-zip.org/) to extract the **.pak** file.

![](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)



## Step 2: Upload via FTP

Once you have the PAK files ready to upload, head over to the **Tools->FTP-Browser** section of your game server's webinterface. 

You will require an FTP Client to connect to your server. Please use our dedicated [Access via FTP](gameserver-ftpaccess.md) guide for this topic if you do not have an FTP Client setup or require assistance with FTP connection.

Within your webinterface, you can use the **Direct Connection** button. This should open the FTP program of your choice and log you in automatically. 

Alternatively, use the credentials that are provided on the FTP-Browser page to manually input this into your FTP Client and connect.

![](https://screensaver01.zap-hosting.com/index.php/s/nWYPNMRbnrDbDLF/preview)

Next, you will have to upload the PAK files for the mod which you prepared earlier. You must upload these to the following directory:
```
../g[your_zapid]/palworld-windows/Pal/Content/Paks/ # For Windows Version
../g[your_zapid]/palworld-linux/Pal/Content/Paks/ # For Linux Version
```

![](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)

And that's it for the server side! Now time to work on the client side.



## Step 3: Install mods Client-Side

Now that all our mods are installed on the server we need to ensure we do the same for any client who is wanting to join the server. They will need to repeat this process. Currently, there is no way for a client to automatically retrieve mods and download them upon joining.

Begin by opening Steam and right-click on Palworld, select manage and browse local files.

![](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)

A folder will appear with your Palworld game installation on your local device.

![](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)

Now proceed by navigating to the following directory: 
```
../Palworld/Pal/Content/Paks/
```

Move the mods' **.pak** files into this folder. Repeat this for any additional mod that you have added.

![](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)



## Step 4: Launch Palworld & Connect to server

You will now be able to connect to your Palworld Server and enjoy the experience with a bunch of new mods. Use our dedicated [Connect to Server](palworld-connect.md) guide if you require assistance with connecting to your server.

Once you load in, you should be able to view differences that the mods have caused.

For example, we are using Minecraft blocks mod on our test server:

![](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)

You have successfully installed mods to your Palworld server. If you are facing any troubles with modding, please view the debugging section below.



## Debugging

In this debugging section, we provide a few common reasons for issues as well as troubleshooting steps that you can follow to narrow down the problem. Please keep in mind that modding is still in the early-stages and isn't official, therefore bugs are likely to appear.

#### Ensure compatible Mod version

Ensure that the mods you have installed are compatible with the current game-build version of Palworld. If this is not the case, you may receive errors and certain functionalities of mods may not work. You should contact the mod author to request an update if it is outdated.

#### Restart the Server

Make sure to restart the server after any changes were made or if you do not see any mods. We advise you to consult with the mod author in regards to any errors or bugs that you occur when using specific mods.

#### Search Logs for Errors

A first possible strategy for a solution is to check the **Information->Log Files** section on your game server's webinterface. These files will contain a range of logs containing information about the server, such as current events, hints or error messages.

Error messages in particular can help to identify and better understand the cause of a problem. Often, difficulties can be uncovered and resolved by taking a targeted look at the log files.

:::info
Do you require additional help? No problem, feel free to join our [Discord Community](https://discord.com/invite/zaphosting) or create a post on our [r/zaphosting Subreddit](https://www.reddit.com/r/zaphosting/) where we and the Community can assist with your queries.

Do you require official support? Please [create a ticket](https://zap-hosting.com/en/customer/support/) on our website with as much details as possible and we will get back to you as soon as possible! :)
:::


<InlineVoucher />
