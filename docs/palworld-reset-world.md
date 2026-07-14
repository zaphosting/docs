---
id: palworld-reset-world
title: "Palworld: Reset World"
description: "Learn how to reset your Palworld server world and start a new Palworld game by removing the existing save data safely. -> Learn more now"
sidebar_label: Palworld: Reset World
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stores your active server world inside its save data rather than in a configurable world setting. In this guide, you will learn how to reset your Palworld world on your ZAP-Hosting game server by deleting the current save folder so a new world is generated on the next start.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you reset your world, make sure you have access to your Palworld game server in the ZAP-Hosting web interface and that you understand this process permanently removes the current world and player progress.

:::danger Permanent Data Loss
Resetting your Palworld world deletes the current world save, including structures, player progress, guild progress, and world state stored in that save. You should create a backup before continuing if you may need the current world again.
:::

:::info No Config File Is Used For This Task
Although many Palworld settings can be managed through the **Configs** area, resetting the world is not done by changing a configuration value. The current world is stored in the server save directory, so you need to remove the existing save folder manually.
:::

## Understand How Palworld World Reset Works

A Palworld server creates and loads its world from the save data located in the server files. If you delete the active world save folder and then start the server again, the server generates a completely new world.

The relevant save location is:

```text
Pal/Saved/SaveGames/0/
```

Inside this directory, you will usually find a folder with a long random hexadecimal name, for example:

```text
84B5E2264EC387DEDB43179D666031A1
```

That folder contains the current world data.

### What You Need To Change

For this task, you do **not** need to edit a config entry, command, or server parameter. Instead, you need to delete the active save folder inside `Pal/Saved/SaveGames/0/`.

| Item | Required action |
| --- | --- |
| Config file | None |
| Configs section in the panel | Not used for the reset itself |
| Save path | `Pal/Saved/SaveGames/0/` |
| Value to change | None |
| Required command | None |
| Restart required | Yes, start the server again after deletion |

## Stop The Server

Before deleting any save data, stop your Palworld server from the ZAP-Hosting game server administration.

:::caution Stop The Server First
Do not delete the save folder while the server is running. If the server is still active, files may still be in use and the save can become inconsistent or corrupted.
:::

Wait until the server is fully offline before continuing.

## Open The Save Directory

After the server has stopped, open the file management area of your Palworld server in the ZAP-Hosting web interface and navigate to:

```text
Pal/Saved/SaveGames/0/
```

This is the directory where Palworld stores the active world for the server.

:::note Configs Versus Save Files
The **Configs** area is used for configuration files such as gameplay settings, but the world itself is stored separately as save data. If you are specifically trying to start a new world, you must work in the file manager area where the save folder is stored.
:::

## Delete The Current World Save

Inside `Pal/Saved/SaveGames/0/`, locate the folder with the long random hexadecimal name. Delete that folder to remove the current world.

### Example Folder Name

The folder name can look similar to this:

```text
84B5E2264EC387DEDB43179D666031A1
```

The exact name on your server will likely be different.

### What This Deletes

Deleting this folder removes the saved world state, including:

- player progression
- buildings and placed objects
- guild data
- map exploration tied to that save
- the current Palworld server world

:::tip Create A Backup First
If you want the option to restore the old world later, download or copy the save folder before deleting it. This gives you a fallback if you reset the world by mistake.
:::

## Start The Server Again

Once the save folder has been deleted, start your Palworld server again from the ZAP-Hosting web interface.

When the server starts and no existing world save is found in `Pal/Saved/SaveGames/0/`, Palworld automatically creates a new world.

### Additional Commands Or Changes

No additional console command or configuration change is required after deleting the save folder.

| Task | Required |
| --- | --- |
| Edit config file | No |
| Run console command | No |
| Restart server | Yes |
| Generate new world manually | No, this happens automatically on startup |

## Verify The New World

After the server has finished starting, connect to your Palworld server and confirm that a fresh world has been created.

You can usually verify this by checking for:

- a new spawn state
- no previous buildings or bases
- no previous player world progress
- a newly created save folder in `Pal/Saved/SaveGames/0/`

If the old world still appears, check whether the correct save folder was deleted and ensure the server was fully stopped before removal.

## Conclusion

Congratulations, you have successfully reset your Palworld world and started a new world on your server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!