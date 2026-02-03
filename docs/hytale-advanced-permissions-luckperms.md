---
id: hytale-advanced-permissions-luckperms
title: "Hytale: Advanced Permissions using LuckPerms"
description: "Discover how to install and configure LuckPerms to manage advanced permissions and ranks on a Hytale server → Learn more now"
sidebar_label: Advanced Permissions
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Managing permissions on a Hytale server becomes increasingly important once you start working with staff roles, custom ranks, or special player perks. While the default in-game permission system is suitable for basic administration, it quickly reaches its limits when you need fine-grained control over commands and features.

**LuckPerms** provides a robust and highly customizable permission system for Hytale servers. It allows you to precisely define which permissions and commands different players or groups can access.

<InlineVoucher />



## Installing LuckPerms

To install LuckPerms mods, download the latest LuckPerms `.jar` file first. 
After downloading, open your server management panel and stop the server to safely upload the mod.

Navigate to the **Files** section of your server and open the `mods` folder.  Upload the LuckPerms `.jar` file into this folder. For a detailed explanation of how to install mods, we recommend taking a look at the [Install Mods](hytale-mods) guide.

Once the file upload is complete, start the server again. After startup, open the server console and verify that LuckPerms is running correctly. If installed successfully, LuckPerms will print startup messages in the console.



## Granting initial permissions 

After installation, LuckPerms needs to be configured before it can be used effectively. To begin managing permissions, you must grant yourself permission to use LuckPerms commands. In the console or in-game chat run the following command:

```
lp user <playername> permission set luckperms.* true
```

This grants the selected player full access to LuckPerms commands.



## Using the LuckPerms web editor

LuckPerms includes a web editor that provides a convenient interface for creating groups and managing permissions. To generate an editor session, enter:

```
lp editor
```

LuckPerms will print a generated editor link in the console.  Open this link in your browser to access the web editor.

```
[LP] Preparing a new editor session, please wait...
[LP] Click the link below to open the editor:
https://luckperms.net/editor/XXXXXXXXXX
```

![img](https://screensaver01.zap-hosting.com/index.php/s/5Cx2sGY4axZ6TBo/preview)

Inside the editor, copy the **command link** that is displayed.  Return to your server console and paste the command link to establish trust and connect the editor session to your server.

```
/lp trusteditor XXXX-XXXX
```

Once the editor is connected, you can configure users, groups, and permissions directly in the web interface. After making changes, click **Apply** to save the configuration.  If LuckPerms provides an apply command, copy it and paste it into the server console to finalize the changes.



## Creating an admin group

Open the editor link in your browser and navigate to the **Groups** section.  Create a new group using the plus icon and set the group name to. You can optionally configure additional details such as display name, weight, parent group, and prefix/suffix.

![img](https://screensaver01.zap-hosting.com/index.php/s/xEWHSBkxKy5q8qr/preview)

After creating the group, select the `admin` group in the editor and add permissions.  To grant full Hytale permissions to the group enter: 

```
hytale.*
```

This permission grants full access to all Hytale permissions. After adding permissions, assign a player to the group. 
In the editor, open the **Users** section, select the desired user, and add the `admin` group under **Parent groups**.

Finally, click **Apply** to save your changes.  If prompted, paste the apply command into the server console.



## Common LuckPerms commands

LuckPerms can be managed either via the web editor or directly through commands. The following commands are commonly used for managing permissions:

| Command                                                      | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `/lp user <playername> parent add <group>`                   | Adds the player to the group permissions.                    |
| `/lp user <playername> parent remove <group>`                | Removes the player from the group permissions.               |
| `/lp user <playername> permission set <permission>`          | Grants the permission to the player.                         |
| `lp user <playername> permission settemp <permission> true <duration>` | Grants a temporary permission to the player with a duration such as `1h` for 1 hour or `1m` for 1 minute. |
| `/lp user <playername> permission unset <permission>`        | Removes the permission from the player.                      |
| `/lp group <group> permission set <permission>`              | Grants the permission to the group.                          |
| `/lp group <group> permission unset <permission>`            | Removes the permission from the group.                       |



## Conclusion

LuckPerms is a powerful solution for advanced permission management on Hytale servers.  By using groups, permissions, and the web editor, you can create a structured role system that scales with your community.

Once configured, LuckPerms makes it easy to maintain staff ranks, player perks, and access control while keeping server administration clean, consistent, and performance-friendly.

 For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />

