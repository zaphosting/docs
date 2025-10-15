---
id: fivem-esx-changerespawnpoint
title: "FiveM: Set respawn point"
description: "Discover how to update ambulance respawn points in ESX to customize gameplay and improve server management → Learn more now"
sidebar_label: Change Respawnpoint 
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archived Guide
This document has been archived. Documents are archived if they are no longer relevant, incorrect or up to date. It has been archived for the following reasons:

**Reason**: The method of realization is for an outdated ESX version. This approach cannot be used for the current ESX version, as the structure has changed. 
::::



:::info
ESX must be installed
:::

<InlineVoucher />

📔 Preparations

To find the coordinates we need a Coords script like this one:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
Install this like this: [Install resources](fivem-installresources.md)
Did we install this script. Then press ingame */coords*
This will give us the coordinates.

📑 Edit Config

Once we have our coordinates we go to the Config TAB

Here we press **CTRL + F** and search for **ambulance**
We will then open this file.
Here we scroll down until we find **Config_RespawnPoint**.

![](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

We will now edit these and replace the coordinates.
After that we just click on Save and that's it.

![](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
After a server restart, the changes will take effect.
:::

<InlineVoucher />
