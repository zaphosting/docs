---
id: minecraft_forge_add_mods
title: Minecraft: Installing mods on your server
description: Information on how to install mods on your Minecraft Forge server from ZAP-Hosting.com - ZAP-Hosting.com documentation
sidebar_label: Mods Installation
---

Click here to get to our Minecraft servers: [Minecraft server hosting](https://zap-hosting.com/en/minecraft-server-hosting/)

## Find Mods

There are many places on the internet to find mods. The largest platform for this is CurseForge: https://www.curseforge.com/minecraft/mc-mods Almost 99% of all mods for Minecraft can be found there and downloaded with just a few clicks.

It should be noted here that some mods only work with certain Forge versions. You should get the information on the mod page and adjust the Forge version if necessary. The version can be adjusted at any time under "Versions" or, if the respective version is not available there, installed under "Settings".

## Connect via FTP

In order to be able to install mods on a Forge server, the connection via FTP is required in order to be able to upload the mods. We have described exactly how the FTP connection can be established in these instructions: [*Click*](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/)

## Upload Mods

The mods must be loaded into the correct folder so that they can be recognized and loaded by the server. The correct directory for this would be:

``/gXXXXXX/minecraft-forge/mods/``

All desired mods can now be uploaded to this directory. Once all mods have been uploaded, the server can be started and the server will load all mods.
