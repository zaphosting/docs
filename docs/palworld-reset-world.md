---
id: palworld-reset-world
title: "Palworld: Reset World"
description: "Learn how to reset your Palworld game server world by removing the current save data and starting a new Palworld world map on the same server. -> Learn more now"
sidebar_label: Palworld: Reset World
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stores your active world in the server save data rather than in a configurable world setting. In this guide, you will learn how to reset your Palworld game server world on ZAP-Hosting by deleting the existing save folder so the server generates a new world on the next start.

:::danger Permanent Data Deletion
Resetting your Palworld world permanently deletes the current world, including player progress, structures, Pals, and other saved data stored in that world.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure you have access to your Palworld game server administration and that the server is currently offline before deleting any save files.

:::tip Create a Backup First
If you may need the current world again later, create a backup before continuing. If available for your product, you can use your server backup features or manually download the save folder before deleting it.
:::

## Understand How Palworld World Resets Work

A Palworld world reset does not normally require changing a gameplay value inside a configuration file. Instead, the active world is stored in the server's save directory.

Based on current publicly available Palworld dedicated server structure, the world save is typically located in the following path:

```text
Pal/Saved/SaveGames/0/
```

Inside this directory, you will usually find a folder with a long random hexadecimal name, for example:

```text
84B5E2264EC387DEDB43179D666031A1
```

That folder contains the current world save. When you delete it and start the server again, Palworld creates a new world automatically.

:::note No Config Value Required
For a standard world reset, no additional configuration entry, console command, or startup parameter is normally required. The reset is performed by removing the existing save data.
:::

## Stop the Server

Before deleting the world files, stop your Palworld server from the ZAP-Hosting game server administration.

Deleting save data while the server is running can cause file corruption or incomplete removal of world data.

:::caution Server Must Be Offline
Make sure the server is fully stopped before continuing. If the server is still running, it may recreate or lock files while you are editing them.
:::

## Open the Save Directory

In your ZAP-Hosting Palworld server administration, open the file management area and navigate to the following path:

```text
Pal/Saved/SaveGames/0/
```

Depending on your product layout, you may access this through the file manager or a similar file access section in the web interface.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Path Reference

| Item | Value |
| --- | --- |
| Base save path | `Pal/Saved/SaveGames/0/` |
| World folder name | Random hexadecimal folder |
| Example folder | `84B5E2264EC387DEDB43179D666031A1` |
| Action required | Delete the world folder |

## Delete the Current World Save

Inside `Pal/Saved/SaveGames/0/`, locate the folder with the random hexadecimal name. Delete that folder completely.

### What You Need to Remove

| Folder type | Required action |
| --- | --- |
| Current world save folder inside `Pal/Saved/SaveGames/0/` | Delete it |
| `PalworldSettings.ini` or other config files | Do not edit for this reset unless you also want to change server settings |

If there is only one hexadecimal folder in `Pal/Saved/SaveGames/0/`, that is typically the active world save. If there are multiple folders and you are unsure which one is in use, do not guess. In that case, check your current server files carefully or contact support before deleting anything.

:::info Configs Section Clarification
Although many Palworld settings can be managed through the **Configs** area, a world reset itself is not usually completed by editing a configuration file. The required action is deleting the world save folder from the server files.
:::

## Start the Server Again

After the save folder has been deleted, start your Palworld server again.

On startup, the server should automatically generate a new world because no previous world save is available in the expected save location.

### Additional Commands or Changes

| Task | Required |
| --- | --- |
| Edit a configuration file | No |
| Run an in-game command | No |
| Run a console command | No |
| Restart or start the server after deletion | Yes |

:::tip First Startup May Take Longer
The first startup after deleting the world save may take slightly longer than usual because Palworld needs to generate a new world.
:::

## Verify the Reset

Once the server is online again, connect to it and confirm that a fresh world has been created.

You can usually verify this by checking for the following:

- a new spawn state
- no previous player-built structures
- no previous progression
- a newly generated save folder in `Pal/Saved/SaveGames/0/`

If the old world still appears, stop the server again and confirm that the correct hexadecimal save folder was deleted.

## Conclusion

Congratulations, you have successfully reset your Palworld world and started a new save on your existing server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!