---
id: hytale-world-management
title: "Hytale: Worlds Management"
description: "Discover how to secure your Hytale server by managing player access with whitelist features and protect your gameplay → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

World management on a Hytale server involves controlling the persistent game environment in which players explore, build, and interact. A world consists of all terrain data, structures, player progress, and settings that define the shared experience.  Being able to create, rename, reset, or organize worlds is a core part of maintaining a server for both private and public communities.

:::info Early Access Notice

Hytale released on January 13th, 2026 and is currently available in Early Access. As the game is still in an active development phase, server software, configuration files, modding support, and installation workflows may continue to change over time.

:::

## New world creation

Creating a new world gives your server a fresh environment to generate terrain, structures, and gameplay progression from scratch. Using the live console, worlds can be created or switched by issuing the appropriate world-related commands. 
When a new world name is specified, the server will either load an existing world with that name or generate a new one if no matching world data is found.

```
/world create <worldname>
```

This command creates a new world named `<worldname>`.  If no existing world data is present for that name, the server generates a fresh world environment.



## Set a world as default

A specific world can be marked as the default world so that it is automatically loaded when the server starts.  Setting a default world is useful when multiple worlds exist and one of them should always be used as the primary environment.

Using the live console, the default world can be updated without manually editing configuration files.  Once set, the server will prioritize this world on the next restart.

```
/world setdefault <worldname>
```

This command sets the world named `mainworld` as the default world.  After restarting the server, this world will be loaded automatically.



## Remove existing world

In addition to creating and loading worlds, the live console can also be used to remove existing worlds from the server.  This is useful when outdated, unused, or test worlds are no longer needed. Removing a world deletes its associated world data from the server. This action is permanent and cannot be undone unless a backup exists.

```
/world remove <worldname>
```

This command removes the world named `worldname` from the server.  If the world is currently active, it must be unloaded or the server may reject the command depending on the server implementation.



## Conclusion

Managing worlds through the live console provides a fast and flexible way to control the active environment on a Hytale server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂
