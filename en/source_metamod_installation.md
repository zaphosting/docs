---
id: source_metamod_installation
title: Source Games: Install Source Mod and Meta Mod on server
description: Information how to install Source Mod and Meta Mod on your Source Gameserver from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Installation
---

## ❓ What is SM and MM anyway?

Source- and Metamod are two Half Life 2 extensions, which make it possible to individualize a source engine game server (e.g. CS: S CS: GO, DoD: S, TF2, etc.) even more than usual. This includes, for example, the use of plugins and an extended administration of your server.

## 🔧 SM / MM Installation

### ⏬ Download the files

First of all, the actual extensions are needed. It is important to always use the latest versions (**stable**) so that they are still fully functional or compatible. The latest versions can be downloaded from the following websites:

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)
- 
![image](https://user-images.githubusercontent.com/13604413/159178791-f9949d57-45ec-42af-9e5f-5eb9190ae602.png)

> Source engine game servers in ZAP hosting usually run under a Linux operating system. Accordingly, the Linux version of the extensions is required.

### 📦 Unzip the files

When downloading the two extensions, you first receive two packed files (sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar), which have to be unzipped before uploading. You can use either Winrar, 7zip or similar programs for this.

![image](https://user-images.githubusercontent.com/13604413/159178794-4b9bc301-1b64-4b87-b7d1-1ac9500f6a57.png)

From the extracted files you get the folder addons and cfg:

![image](https://user-images.githubusercontent.com/13604413/159178797-76cc4be0-ff07-4a6a-a85a-d31ec71c76eb.png)

### ⬆ Upload the files

When the above steps are complete, the actual installation begins. For this we have to connect to the server via FTP so that we can upload the folder of the extensions.

The files must be uploaded to the main directory. The main directory is located under the following folder structure:

| Game | Folder  |
| :-----: |:-------------:| 
| CS: Clobal Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![image](https://user-images.githubusercontent.com/13604413/159178805-066652c8-c5b9-43c3-9c16-e27d6f90e6e4.png)

The folder structure should then look like this:

![image](https://user-images.githubusercontent.com/13604413/159178810-43bff013-43ab-47ce-9806-38423cc91fb5.png)

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

![image](https://user-images.githubusercontent.com/13604413/159178813-83f8c4a3-03ac-469d-9315-54631c89c4f3.png)

### 📖 Version query via RCON

![image](https://user-images.githubusercontent.com/13604413/159178818-bc81a67e-4068-4198-a03b-0abf0eef3b5d.png)

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
