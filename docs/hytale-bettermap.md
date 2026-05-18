---
id: hytale-bettermap
title: "Hytale: Enhance World Exploration with BetterMap"
description: "Discover how to improve world exploration in Hytale using the BetterMap mod with saved map data, waypoints, zoom and optimized rendering → Learn more now"
sidebar_label: BetterMap
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Exploring large and complex worlds is a core part of the Hytale experience. As worlds grow and players travel further from their spawn point, keeping track of explored areas, points of interest, and routes can quickly become challenging.

![img](https://screensaver01.zap-hosting.com/index.php/s/WGaiERKfa3EFy48/preview)

The **BetterMap** mod enhances world exploration by providing an advanced in-game map with persistent data, customizable zoom levels, waypoints, and performance-optimized rendering. Instead of relying on memory or external tools, players can use BetterMap to navigate the world more efficiently and share map knowledge with others.

<InlineVoucher />



## What BetterMap adds to Hytale

BetterMap extends the default exploration experience by introducing a fully featured mapping system.  Explored areas are automatically saved and remain available between sessions, allowing players to build a reliable overview of the world over time.

The map supports adjustable zoom levels, making it easy to switch between a detailed local view and a broader overview of surrounding regions. This is especially useful when planning long journeys or locating specific biomes and structures.

Waypoints allow players to mark important locations such as bases, villages, dungeons, or resource-rich areas. These markers help with orientation and reduce unnecessary travel time.

BetterMap also supports shared mapping features. On multiplayer servers, map data can be shared between players, enabling teams to collaborate more effectively and build a common understanding of the explored world.



## Installing BetterMap

BetterMap is distributed via CurseForge and installed as a mod. You can install mods either via our Mods Installer or via FTP. You can find more information in our [Install Mods](hytale-mods.md) guide.

After installation, restart the Hytale server. Once loaded, the map interface becomes available in-game and begins recording explored areas automatically.


## Using BetterMap

Once in-game, BetterMap provides both a visual map interface and commands that allow direct control over map behavior and waypoints.

The map interface can be opened using the configured keybind, where explored terrain is displayed in real time. Players can zoom in and out to switch between detailed local views and wider overviews, helping with navigation and planning.

BetterMap also exposes commands that can be executed via the in-game chat. These commands are useful for quickly managing the map and waypoints without opening the full interface.




## Waypoint management

Waypoints are one of the most powerful features of BetterMap and can be managed both through the map interface and via commands. To create a waypoint at your current position, use:

```
/bettermap waypoint add <name>
```
This creates a new waypoint using your current coordinates and the specified name.

![img](https://screensaver01.zap-hosting.com/index.php/s/99KXn7XmSbQSmNy/preview)


To remove an existing waypoint:
```
/bettermap waypoint remove <name>
```

To list all existing waypoints:
```
/bettermap waypoint list
```

Waypoints can be edited to better organize the map. Many servers allow customization such as colors or icons, either via the map interface or command parameters, depending on the mod version.

```
/bettermap waypoint edit <name> color red
```

The waypoint manager makes it easy to enable or disable individual waypoints, rename them, or remove outdated locations as the world evolves.

On multiplayer servers, shared waypoints allow teams to coordinate exploration. Locations discovered by one player can be shared with others, creating a collective map of important areas.

## Conclusion

BetterMap significantly enhances world exploration in Hytale by combining saved map data, zoomable views, waypoints, shared mapping, and efficient rendering.  By using BetterMap, players gain better orientation, improved planning capabilities, and a more enjoyable exploration experience across both singleplayer and multiplayer worlds.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
