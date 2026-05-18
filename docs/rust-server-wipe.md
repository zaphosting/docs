---
id: rust-server-wipe
title: "Rust: Server Wipe - Keep Your Server Balanced and Clean"
description: "Learn what Rust server wipes are, why they are necessary, and how to perform a wipe on your Rust server → Learn more now"
sidebar_label: Server Wipe
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

In **Rust**, a server wipe resets parts of the game world to create a fresh start for all players. Over time, Rust maps become heavily built up with large bases, accumulated resources, and established player groups. This can affect server balance and performance.

A server wipe removes existing progress and restores a clean environment so players can start again from scratch. Many Rust communities perform wipes regularly to keep gameplay fair and exciting, especially when new updates or maps are released.

Depending on the type of wipe, either the **map**, the **player blueprints** or **both** may be reset.

<InlineVoucher />



## What a Server Wipe Does

A Rust server wipe removes stored world or player progression data. This can include:

- Player-built structures and bases  
- Player inventories and stored items  
- Map exploration data  
- Learned blueprints (depending on the wipe type)

After a wipe, the server behaves like a fresh world where players must gather resources, rebuild bases, and relearn progression.



## Types of Rust Wipes

Rust supports several types of wipes, depending on what you want to reset. The following types of available wipes will be explained in the following. 

### Map wipe

A **map wipe** removes the entire world save file. All bases, structures, and map progress are deleted. When the server restarts, a new map is generated or downloaded. Blueprint progress remains unchanged unless a blueprint wipe is also performed.

### Blueprint wipe

A **blueprint wipe** resets all learned crafting blueprints. Players must research items again before they can craft them. This type of wipe only affects progression and does not reset the map itself.

### Full wipe

A **full wipe** resets both the map and all player blueprints. This creates a completely fresh server environment and is commonly used for seasonal resets or major updates.



## Why Server Wipes Are Important

Server wipes help maintain a healthy Rust server environment. Over time, servers accumulate large numbers of structures, storage containers, and world entities. This can negatively impact server performance and gameplay balance. Regular wipes provide several benefits:

- Restores server performance
- Creates a fresh start for all players
- Prevents dominant clans from controlling the map indefinitely
- Allows servers to run new maps or map seeds

Many Rust communities perform scheduled wipes weekly, bi-weekly, or monthly depending on the server style.



## Performing a Server Wipe

To perform a wipe on your Rust server, access your server files via the [FTP access](gameserver-ftpaccess.md). Next, locate the save files inside the Rust server directory. These files typically include:

```
proceduralmap.*
player.blueprints.*
player.deaths.*
player.identities.*
player.states.*
```
Deleting specific files determines the type of wipe performed.Deleting the `proceduralmap.*` files performs a **map wipe**, removing the existing world. Removing the `player.blueprints.*` files performs a **blueprint wipe**.

![img](https://screensaver01.zap-hosting.com/index.php/s/QdeoFWbaaQz7Yaf/preview)

Removing both will result in a **full wipe**. After deleting the desired files, start the server again. The server will automatically generate a new world and allow players to begin fresh.



## Conclusion

Congratulations! You now know how Rust server wipes work and how to perform them. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />