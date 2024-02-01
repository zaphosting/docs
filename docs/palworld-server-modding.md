---
id: palworld-server-modding
title: How to mod Palworld Server
description: How to mod your Palworld Gameserver on ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Modding
---


## Introduction
You already have a Palworld game server with us, but want to make it more fun for your friends to play? No problem; modding your Palworld game server is already possible. In a couple of steps, you can make modifications like adding Minecraft, Pokemon capture ball, or modifying the game limits itself.

## Information/Confirmation

At the time of this guide, its not possible to download mods via steam workshop, available mod sites are **[Nexus Mods](https://www.nexusmods.com/palworld/)** or **[Curseforge](https://www.curseforge.com/palworld/)**  - other mod sites are available

**ZAP-Hosting is not responsible for any modifications/damage to your server files/world by using any modifications. You are always advised to make any backups before doing so,** **[backups can be made with the savegame manager guide we have available](https://zap-hosting.com/guides/docs/palworld-server-savegames)**

:::info ZAP-Hosting only currently supports PAK mods (in the form of .PAK files), any mods that use an executible file will not work as for security purposes :::

You will need to confirm if the mod is server sided or client sided by contacting the mod author or checking the mod resource page yourself.
You will need to verify that the mod works on your server version, currently most 1.2.0 mods do work with the current version of Palworld (1.4.0)

:::info For any user connecting to your server they will require the client sided mods downloaded and installed themselves. :::

### Step One: Getting the PAK Files.

By heading to the mod download pages above, you will be able to download a wide range of different mods, of-course only PAK mods are accepted at this time.

Download the mods and unzip any files if there are any.

![img](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)


Make sure the PAK files are not in any Zipped folder otherwise the server will not recognise it when starting.


### Step Two: Upload via FTP

Once you have the PAK files ready to upload you will need to open the FTP page of your gameserver located on your server dashboard.

![img](https://screensaver01.zap-hosting.com/index.php/s/KtFPc8xRFAywHiK/preview)


And select Direct connection.

![img](https://screensaver01.zap-hosting.com/index.php/s/A6CzpG8ZFAZJcWd/preview)


*Your FTP program will open up, and directly connect to the server. If not please input the details manually into your FTP program. We have a guide here on how to do it or if you don't have a FTP Program yet.*
https://zap-hosting.com/guides/docs/gameserver-ftpaccess

Now select any PAK files of the mods you have downloaded and upload it to your server in the directory of:

`/g(your number)/palworld-linux/Pal/Content/Paks/`

![img](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)


And that's it for the server side! Now time to work on the client side.

### Step Three: Install mods via Client side

Now that all our mods are installed on the server we need to ensure we do the same for any client who is wanting to join the server. They will need to repeat this process. There is no current way for a client to automatically retrieve mods and download them upon joining.

Open steam and right click on Palworld, select manage and browse local files
![img](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)


A folder will appear with your Palworld Installation on your PC.
![img](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)


Go ahead and head to the directory `\Palworld\Pal\Content\Paks\` and repeat the process of moving mods into the folder

![img](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)


### Step Four: Launch Palworld & Connect to server

That's it, join your Palworld server and enjoy your modded server.
You will notice any differences if the mods have appeared to work like such.

![img](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)


### Debugging

Something not working after following this guide?

Make sure to restart the server after any changes were made or, if your not seeing any mods appear.
Always consult with the mod author in regards to fixes.

Is a technical problem occurring and you are unsure about its cause? A first possible solution strategy is to check the **Log files**. These files contain a lot of information about the server, such as current events, hints or error messages.

Error messages in particular can help to identify and better understand the cause of a problem. Often, difficulties can be uncovered and resolved by taking a targeted look at the log files.

:::info
The information found there does not help or you do not understand it? Don't worry! In this case, we are also daily available in support. Just create a **[Ticket](https://zap-hosting.com/en/customer/support/)** and explain your problem to us. We will look at it as quickly as possible and help you to solve the problem accordingly! :)
:::

