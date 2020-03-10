---
id: source_metamod_installation
title: Installation
sidebar_label: Installation
---

## ❓ What is SM and MM anyway?

Source- and Metamod are two Half Life 2 extensions, which make it possible to individualize a source engine game server (e.g. CS: S CS: GO, DoD: S, TF2, etc.) even more than usual. This includes, for example, the use of plugins and an extended administration of your server.

## 🔧 SM / MM Installation

### ⏬ Download the files

First of all, the actual extensions are needed. It is important to always use the latest versions (**stable**) so that they are still fully functional or compatible. The latest versions can be downloaded from the following websites:

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)

![](https://i.imgur.com/q5y6A3W.png)

> Source engine game servers in ZAP hosting usually run under a Linux operating system. Accordingly, the Linux version of the extensions is required.

### 📦 Unzip the files

When downloading the two extensions, you first receive two packed files (sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar), which have to be unzipped before uploading. You can use either Winrar, 7zip or similar programs for this.

![](https://i.imgur.com/xAyfFCO.png)

From the extracted files you get the folder addons and cfg:

![](https://i.imgur.com/k8gJ5Bq.png)

### ⬆ Upload the files

When the above steps are complete, the actual installation begins. For this we have to connect to the server via FTP so that we can upload the folder of the extensions.

The files must be uploaded to the main directory. The main directory is located under the following folder structure:

| Game | Folder  |
| :-----: |:-------------:| 
| CS: Clobal Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://i.imgur.com/JzVXcGh.png)

The folder structure should then look like this:

![](https://i.imgur.com/502Mexy.png)

## ✅ Check your SM / MM installation

There are two ways to check whether the extensions have been installed correctly:

1. Game console
2. Remote Console (HLSW - RCON)

###  Version query via commands

We can use the following steps to check the version for your server:

1. Connect to the server in game
2. Open the console and enter the following command:

```
sm version
meta version
```

As a result we get the following output:

![](https://i.imgur.com/nkGtZsP.png)

### 📖 Version query via RCON

![](https://i.imgur.com/WqNd8dV.png)

We can use the following steps to check the version for our own server:

1. Enter the IP address at the top under IP / Port
2. Go to Rcon Configuration below
3. Enter your Rcon password under Rcon password
4. Open the console and enter the following command:

```
sm version
meta version
```

As a result we get the following output:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Download HLSW: http://www.hlsw.net/hlsw/download/
