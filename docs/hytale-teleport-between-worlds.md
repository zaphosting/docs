---
id: hytale-teleport-between-worlds
title: "Hytale: Teleport Between Worlds"
description: "Discover how to teleport between Worlds on a Hytale server → Learn more now"
sidebar_label: Teleport Between Worlds
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Teleporting between worlds on a Hytale server allows players to move seamlessly from one world environment to another.  This functionality is commonly used on servers that host multiple worlds, such as hubs, adventure maps, creative areas, or separate gameplay zones.

:::info Early Access Notice

Hytale released on January 13th, 2026 and is currently available in Early Access. As the game is still in an active development phase, server software, configuration files, modding support, and installation workflows may continue to change over time.

:::

<InlineVoucher />


## Teleporting

World teleport commands can be run from the server console or by an operator in the in-game chat.  When executed from the console, the command affects the specified player immediately.  When executed in-game, the player issuing the command must have operator or equivalent permissions.

To teleport a player from their current world to another world, use the following command:

```
/world teleport <playername> <worldname>
```

The `<playername>` parameter defines the name of the player that should be teleported.  The `<worldname>` parameter specifies the name of the destination world.

Teleportation betwen worlds requires the destination world to be available on the server.  If the target world is not currently loaded, the teleport command will not succeed. To make a world available for teleportation, load it using the following command:

```
/world load <worldname>
```


:::tip World name overview

In case you are unsure about the exact name of a world, you can display a list of all available worlds by using the `/world list` command. 
:::


## Conclusion

Teleporting between worlds is a powerful tool for managing multi-world Hytale servers.  By using the appropriate world commands from the console or in-game chat and ensuring that destination worlds are loaded, administrators can provide smooth and flexible navigation between different server environments.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


<InlineVoucher />
