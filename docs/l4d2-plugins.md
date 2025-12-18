---
id: l4d2-plugins
title: "Left 4 Dead 2: Install plugins on your own server"
description: "Discover how to customize your game server with Sourcemod and Metamod to enhance features and management → Learn more now"
sidebar_label: Install Plugins
services:
  - gameserver-l4d2
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/l4d2-plugins.json';


## Introduction

Get to know how to install Sourcemod and Metamod and how to use plugins for your server. Both extensions allow you to customize games like CS:S, CS:GO, DoD:S, or TF2 and significantly expand the available server management options. 

With Sourcemod and Metamod, you can add plugins, enable special features, and tailor your server exactly to your preferences.

<InlineVoucher />



## Sourcemod / Metamod installation

### Preparation

The required extensions can be downloaded from [Sourcemod](https://sourcemod.net/) and [Metamod](https://www.sourcemm.net/downloads.php?branch=stable). Always use the latest **stable** versions to ensure full functionality and compatibility.

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

You need the Linux packages **Sourcemod** and **Metamod**. Download them from the specified source. After downloading, you should have two compressed files. Extract them on your computer to get an addons directory containing the `sourcemod` and `metamod` folders.

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### Installation

Once the above steps are completed, you can proceed with the installation. Upload the files to your server via FTP using an FTP client. If you are unfamiliar with FTP and how it works, refer to the following guide: [Access via FTP](gameserver-ftpaccess.md)

Next, upload the **addons** folder to the main directory of your server. The folder structure should then look like this:

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

The setup of **Sourcemod** and **Metamod** is now complete. You can connect to your server in the game and use the ``sm version`` command in the console to check if Sourcemod and Metamod was successfully installed. The output should look like this:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
```
```             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

If the message **Unknown command** is displayed, then something went wrong during the installation. 



## Plugins installation

### Preparation

Once Sourcemod and Metamod are installed and working properly, you can begin adding plugins. Download the plugins you want to install on your server from [Sourcemod](https://sourcemod.net/), where you’ll find a large and growing collection published over the years. For each plugin, make sure to obtain the corresponding .smx file.

### Installation

Once you have downloaded the desired plugins, you can proceed with their installation. This is done via FTP by uploading the plugin files to the directory:

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## Popular plugins
Still looking for the perfect plugins for your server? Browse through our carefully curated list of the most popular and highly recommended plugins to enhance your gameplay and give your server the finishing touch it deserves. Get inspired and find exactly the additions that fit your project.
<SearchableItemList items={items} />


## Conclusion

Provided you have followed all the steps, you should have successfully installed Sourcemod/Metamod and your desired plugins. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
