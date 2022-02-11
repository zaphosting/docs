---
id: minecraftbedrock_behaviorresourcepacks
title: Minecraft Bedrock: Install Behaviour/Resource Packs
description: Information on how to install Behaviour/Resource Packs on your Minecraft Bedrock server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Behavior/Resource Packs Installation
---

Click here to get to our Minecraft servers: [Minecraft server hosting](https://zap-hosting.com/en/minecraft-server-hosting/)

## 🖱 Download the world from the server

First of all you have to shut down the server, download your world from the server and add it to your Minecraft. (If you just want to have a fresh world, ignore the step and go directly to "add addon". For the download you can simply connect to the server via FTP and download the worlds folder which you can find under "worlds". After the download you can just paste the folder here:

```
C:\Users\%username%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

![](https://screensaver01.zap-hosting.com/index.php/s/NzTt3KAAYE75q5c/preview)

## 🎮 Add Addon
Now open the .mcpack file from your addon. The game should open and automatically import the addon.

![](https://screensaver01.zap-hosting.com/index.php/s/sqArcir3gsEmi5c/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/fkZBGKf3obsEkPk/preview)

The world that you downloaded from your server should now be displayed, if you have not downloaded the world simply click on "Create new"

Here you have the option to select your resources & behavior packs

![](https://screensaver01.zap-hosting.com/index.php/s/SzDbFoJQK37okye/preview)

Make sure that you have selected everything you want and then go to "Play". Your addons should now be available in the game. If everything works, just close Minecraft.

## 📀 Upload the world to the server

Now go back to your FTP Application (i.e Filezilla/WinSCP).

Now delete the world that you downloaded before, as we will now replace it.

Now just upload the folder to your server again. It is important that the name has not changed.

One last step is still to come. In the world folder on your PC you now have the folder "behavior_packs" and / or "resource_packs"

![](https://screensaver01.zap-hosting.com/index.php/s/yxCQswKxbGMXCqC/preview)

Upload them to their correct folders on the server.

These are in the same folder as the "worlds" folder.

Then you have to open server.properties and the line

```
texturepack-required=false
```

put

```
texturepack-required=true
```

This ensures that players who join your server download the required resources.

![](https://screensaver01.zap-hosting.com/index.php/s/5DWLKKkPgSJSFsE/preview)

When that's done all you have to do is start the server, join it and then you should be able to use your addon.

![](https://screensaver01.zap-hosting.com/index.php/s/R8FtE4MSB9RognC/preview)
