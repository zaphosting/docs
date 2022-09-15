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

## 🎮 Add Addon
Now open the .mcpack file from your addon. The game should open and automatically import the addon. The world that you downloaded from your server should now be displayed, if you have not downloaded the world simply click on "Create new". Make sure that you have selected everything you want and then go to "Play". Your addons should now be available in the game. If everything works, just close Minecraft.

## 📀 Upload the world to the server

Now go back to your FTP Application (i.e Filezilla/WinSCP). Delete the world that you have downloaded before, as we will replace it. After this, upload the folder to your server again. It's important that the name hasn't been changed and is equal. One last step is still to come. In the world folder on your PC you now have the folder "behavior_packs" and / or "resource_packs"


Upload them to their correct folders on the server. These are in the same folder as the "worlds" folder. Then you have to open server.properties and adjust the line from to this: 

```
texturepack-required=false
```
```
texturepack-required=true
```

This ensures that players who join your server download the required resources. When that's done, all you have to do is tostart the server, join it and then you should be able to use your addon.
