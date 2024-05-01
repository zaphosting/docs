---
id: fivem-esx-changerespawnpoint
title: "FiveM: Set respawn point"
description: Information on how to set/change the respawnpoint on your FiveM server with ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Change Respawnpoint 
---

:::info
ESX must be installed
:::

📔 Preparations

To find the coordinates we need a Coords script like this one:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
Install this like this: [Anleitung](fivem-installresources.md)
Did we install this script. Then press ingame */coords*
This will give us the coordinates.

📑 Edit Config

Once we have our coordinates we go to the Config TAB

Here we press **CTRL + F** and search for **ambulance**
We will then open this file.
Here we scroll down until we find **Config_RespawnPoint**.

![image](https://user-images.githubusercontent.com/13604413/159166852-965cc0d9-e82e-469a-8680-7c9efa891a73.png)

We will now edit these and replace the coordinates.
After that we just click on Save and that's it.

![image](https://user-images.githubusercontent.com/13604413/159166856-e2d31e0d-6b75-4f1b-8797-1c4891b5b335.png)

:::info
After a server restart, the changes will take effect.
:::
