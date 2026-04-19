---
id: windrose-manage-worlds
title: "Windrose: Manage Worlds"
description: "Learn how to manage multiple Windrose worlds, switch world saves, and configure your world settings on a dedicated server with the correct world structure. -> Learn more now"
sidebar_label: Manage Worlds
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windrose supports multiple worlds on a single dedicated server, with each world using its own save data and `WorldDescription.json` configuration. In this guide, you will learn how to create new worlds, switch between existing worlds, back them up, and wipe them safely.

## Preparation

Before you begin, make sure you have access to your Windrose gameserver through the ZAP-Hosting web interface and that your server is currently offline before making save or configuration changes.

:::info Required Access
You need access to the ZAP-Hosting gameserver management, including the **File Manager**, **Configs**, and **Backups** areas, to manage your Windrose worlds safely.
:::

:::caution Stop the Server First
You should always stop your server before editing `ServerDescription.json`, modifying `WorldDescription.json`, creating world folders, or deleting save data. This helps prevent corruption and incomplete world writes.
:::

## Understand the Windrose World Structure

Windrose stores all world data inside the save profile directory. The first world is created automatically when you start the server for the first time.

The relevant structure looks like this:

```text
R5/Saved/SaveProfiles/Default
ServerDescription.json
RocksDB
<game_version>
Worlds
World_1_ID
WorldDescription.json
World_2_ID
```

In practice, the world folders are located in:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Each world folder is named after its unique `IslandId`. The server uses this ID internally to identify which world should be loaded.

| File or Folder | Purpose |
| --- | --- |
| `ServerDescription.json` | Defines the active server configuration, including the currently loaded world |
| `RocksDB/[your_game_version]/Worlds/` | Stores all available world save folders |
| `[your_world_id]/WorldDescription.json` | Stores the configuration for a specific world |
| `WorldIslandId` | The value in `ServerDescription.json` that tells the server which world to load |

:::danger Do Not Rename World Folders
You must never manually rename a world folder. Windrose uses the folder name as the internal `IslandId` in the RocksDB database. Renaming a folder can corrupt the world or leave it orphaned and unusable.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Find the Active World

Before switching or creating worlds, it is helpful to identify which world is currently active.

### Check the Server Configuration

Open the **Configs** section in your gameserver management and locate `ServerDescription.json`. If the config is not listed there, use the **File Manager** and open `ServerDescription.json` from the root of the file list.

Look for the following field:

```json
"WorldIslandId": "[your_world_id]"
```

This value defines the world the server will load on startup.

### Check a World ID

To identify a specific saved world, open its `WorldDescription.json` file inside its world folder and look for the `IslandId` value.

Example:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "World_Example_ID",
    "WorldName": "My World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

The `IslandId` in this file must match the folder name exactly.

## Switch Between Worlds

If you already have multiple worlds saved on your server, you can switch between them by changing the active `WorldIslandId`.

### Update the Target World

First, stop your server from the ZAP-Hosting web interface.

Next, open `ServerDescription.json` in the **Configs** area or through the **File Manager** at the root of the server files.

Find this field:

```json
"WorldIslandId": "PASTE_TARGET_WORLD_ID_HERE"
```

Replace the value with the `IslandId` of the world you want to load. You can find that ID by opening the target world's `WorldDescription.json`.

### Save and Restart the Server

Save the file and start your server again. Windrose will now load the selected world.

:::tip Verify the World ID Carefully
If the `WorldIslandId` does not exactly match an existing world folder and its `IslandId`, the server may fail to load the intended world or generate a new one instead.
:::

## Create a New World

If you want to host multiple worlds game sessions on one server, you can create a fresh world manually.

### Create the World Folder

Stop your server first.

Open the **File Manager** and navigate to:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Create a new folder with a unique name. This folder name becomes the new world's `IslandId`.

For example:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/MySecondWorld
```

### Create the World Description File

Inside the new folder, create a file named `WorldDescription.json` and paste the following template:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "YOUR_NEW_WORLD_ID",
    "WorldName": "My Second World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

Replace `YOUR_NEW_WORLD_ID` with your chosen world ID.

:::caution Matching IDs Are Required
The `IslandId` inside `WorldDescription.json` must be identical to the folder name. Even small differences, such as uppercase and lowercase changes or extra spaces, can prevent the world from loading correctly.
:::

### Set the New World as Active

Now open `ServerDescription.json` and update the `WorldIslandId` value so it points to your new world ID.

Example:

```json
"WorldIslandId": "MySecondWorld"
```

Save the file and start the server. Windrose will generate the new world fresh on startup.

## Back Up a World

Before switching worlds, wiping data, or testing new settings, you should create a backup of your world save.

### Use the ZAP-Hosting Backup Feature

Stop your server first.

In the panel sidebar, open **Backups** and create a new backup. This is the safest option if you want to restore the full server state later.

### Download the World Files Manually

If you only want a direct copy of the save data, open the **File Manager** and download the entire `RocksDB/` folder using the zip or download option.

Relevant path:

```text
R5/Saved/SaveProfiles/Default/RocksDB/
```

| Backup Method | Recommended Use |
| --- | --- |
| Panel backup | Best for full server recovery |
| Manual `RocksDB/` download | Best for direct world save archiving |
| Both methods | Best for important worlds or before a wipe |

:::note Backup Recommendation
If you manage several worlds, keeping both a panel backup and a manual copy of `RocksDB/` gives you the most flexibility when restoring a specific world later.
:::

## Wipe a World

If you want to reset a world completely, you can delete its save folder and let the server generate a new one.

### Delete the World Save

Stop your server.

Open the **File Manager** and navigate to:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Delete the folder of the world you want to wipe.

### Regenerate the World

Make sure `ServerDescription.json` still points to that deleted world ID through the `WorldIslandId` field.

When you start the server again, Windrose will detect that the target world folder no longer exists and generate a fresh world for that ID.

:::danger Confirm the Correct Folder Before Deleting
Deleting the wrong world folder permanently removes that world's save data unless you have a backup. Double-check the folder name and `IslandId` before continuing.
:::

## Manage World Settings

Each world has its own `WorldDescription.json`, which means you can maintain separate settings for different worlds on the same server.

### Example World Configuration

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "MySecondWorld",
    "WorldName": "My Second World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

### Important Values

| Key | Description |
| --- | --- |
| `Version` | Configuration version used by the file |
| `IslandId` | Internal world ID, must match the folder name |
| `WorldName` | Display name of the world |
| `WorldPresetType` | Preset type for world generation |
| `WorldSettings` | Additional world-specific settings if supported |

:::info Config Management in the Panel
Windrose configuration files can be managed in your gameserver management under **Configs**. If a file is not available there, use the **File Manager** to edit it directly.
:::

## Best Practices for Managing Multiple Worlds

Managing several worlds on one server is useful for testing, events, or separate player groups. To keep everything organized, follow these recommendations:

- Use clear and unique world IDs such as `[your_pvp_world]` or `[your_build_world]`
- Keep the folder name and `IslandId` exactly identical
- Create a backup before switching or wiping any world
- Avoid changing files while the server is running
- Document which `WorldIslandId` belongs to each world name

This approach helps you avoid confusion, especially if you maintain many worlds over time.

## Conclusion

Congratulations, you have successfully managed Windrose worlds on your server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!