---
id: hytale-permissions
title: "Hytale: Managing User and Group Permissions"
description: "Manage user and group permissions on your Hytale server → Learn more now"
sidebar_label: Permissions
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Managing permissions on a Hytale server allows you to control what players can and cannot do.  This includes assigning different levels of access to trusted players, moderators, and administrators.  Setting up permissions correctly is essential for maintaining a balanced and secure server environment where players can enjoy the game without unintended exploits or abuses.

Hytale’s server software supports hierarchical permission levels that determine which commands and actions each player can execute.  These can be managed via the live console or through configuration settings depending on your server setup.

:::info Early Access Notice

Hytale released on January 13th, 2026 and is currently available in Early Access. As the game is still in an active development phase, server software, configuration files, modding support, and installation workflows may continue to change over time.

:::

<InlineVoucher />



## Permission levels overview

Permissions define what actions a player is allowed to take on the server.  At the most basic level, normal players have only standard gameplay permissions, such as moving, interacting with the world, and chatting. Higher permission tiers such as operator or admin status grant access to server commands that affect gameplay, other players, server configuration, and moderation tools.

The permission system consists of two main components:

- **User permissions** which apply directly to a specific player
- **Group permissions** which allow permissions to be bundled and assigned to multiple players at once

Each player is identified internally by a UUID, which is required when managing permissions via commands.



## Managing user permissions

User permissions allow you to grant or revoke specific permissions for a single player.

### View user permissions

To display all permissions assigned directly to a user. This command shows every permission currently applied to the specified user.

```
/perm user list <uuid>
```



### Add permissions to a user

To grant one or more permissions directly to a user. The specified permissions will be added immediately and take effect without requiring a server restart.

```
/perm user add <uuid> <permissions>
```



### Remove permissions from a user

To revoke permissions from a user. This removes only the specified permissions while leaving all other permissions unchanged.

```
/perm user remove <uuid> <permissions>
```



## Managing user group assignments

In addition to direct permissions, users can inherit permissions through groups.

### View user group permissions

This command shows which permission groups the user is currently a member of.

```
/perm user group list <uuid>
```



### Add a user to a group

To assign a user to a permission group. Once added, the user inherits all permissions defined for that group.

```
/perm user group add <uuid> <group>
```



### Remove a user from a group

To remove a user from a permission group. After removal, the user will no longer receive permissions from that group.

```
/perm user group remove <uuid> <group>
```



## Managing group permissions

Groups allow permissions to be managed centrally and reused across multiple users.

### View group permissions

To display all permissions assigned to a group. This command provides an overview of every permission associated with the specified group.

```
/perm group list <group>
```



### Add permissions to a group

To add one or more permissions to a group. All users assigned to this group will immediately inherit the new permissions.

```
/perm group add <group> <permissions>
```



### Remove permissions from a group

This removes only the specified permissions from the group without affecting other permissions. 

```
/perm group remove <group> <permissions>
```



<InlineVoucher />

