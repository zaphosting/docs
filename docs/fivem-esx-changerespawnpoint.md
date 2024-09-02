---
id: fivem-esx-changerespawnpoint
title: "FiveM: Set respawn point"
description: Information on how to set/change the respawnpoint on your FiveM server with ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Change Respawnpoint 
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
ESX must be installed
:::

<InlineVoucher />

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

![image](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

We will now edit these and replace the coordinates.
After that we just click on Save and that's it.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
After a server restart, the changes will take effect.
:::
