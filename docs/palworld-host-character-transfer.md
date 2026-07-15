---
id: palworld-host-character-transfer
title: "Palworld: Host Character Transfer"
description: "Learn how to transfer your Palworld host character from a solo or co-op save to a dedicated server using Palworld Save Tools and the correct save files. -> Learn more now"
sidebar_label: Palworld: Host Character Transfer
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld host character transfer allows you to migrate the character of a solo or co-op host into a dedicated server save. In this guide, you will prepare the required save files, use the supported migration tool, and upload the updated character data back to your server.

:::danger Experimental Character Transfer Warning
This procedure is considered experimental and modifies save data manually. Palworld updates can change save structures, which may cause tools or migration steps to stop working correctly.
:::

## Preparation

Before you begin, make sure you have access to your Palworld game server and a local Windows system where you can run the required save migration tool.

### Requirements

You need the following:

| Requirement | Purpose |
| --- | --- |
| Access to your ZAP-Hosting Palworld server | To download and upload the required save files |
| A local backup location | To keep a safe copy of your original save data |
| [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools) | To perform the host character migration |
| A newly created server character | The host character data is migrated onto this dedicated server character |

:::caution Create a Backup First
Before changing any save files, download and store a complete backup of your current server save. If the transfer fails or produces corrupted character data, you will need the original files to restore the server.
:::

### Important Notes About Configuration Files

This transfer is **not** completed by editing a Palworld configuration file under `Configs`. Based on the currently available tool documentation and community guidance, the host character transfer is performed by replacing save data files instead.

The relevant files are located in your server save directory, not in the normal gameplay configuration file such as `PalWorldSettings.ini`.

## Understand Which Files Are Used

Before starting the transfer, you should identify the files involved.

### Save Files Required for the Transfer

The host character migration uses the following save data:

| File or Folder | Location | Purpose |
| --- | --- | --- |
| `Level.sav` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Level.sav` | Contains world-level save data used by the migration tool |
| `Players/` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Players/` | Contains player save files, including the new dedicated server character |
| `00000001.sav` | Inside `Players/` from the uploaded solo or co-op save | Usually represents the original host character in co-op saves |

`[your_savefolder_id]` is the long folder name used by your Palworld world save. This value is different for every save.

### Where to Find the Files in the ZAP Interface

You can access the required save files through your game server administration file manager.

Navigate to:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Inside this folder, you should find at least:

- `Level.sav`
- `LevelMeta.sav`
- `Players/`



## Prepare the Dedicated Server Character

Before you can migrate the host character, the dedicated server must already contain a newly generated player save for your account.

### Create a New Character on the Server

Join your Palworld dedicated server normally and create a new character. Then play until the character reaches at least level `2`.

This step is necessary because the transfer tool needs an existing dedicated server character file as the migration target.

### Force or Wait for a Save

After creating the new character, you need to make sure the server has written the new player data to disk.

You can either:

- wait for the automatic save interval, which is commonly around `4` minutes, or
- run the `save` command in the server console

| Command | Where to run it | Purpose |
| --- | --- | --- |
| `save` | Server console | Forces the server to write the current world and player data to disk |

:::info Save Command Requirement
If you use the `save` command, run it before stopping the server. This helps ensure that the new dedicated server character file exists in the `Players/` folder.
:::

### Stop the Server

Once the save is complete, stop the Palworld server from your server administration.

Do not continue while the server is running, because active save writes may overwrite or conflict with the files you are about to replace.

## Download the Required Save Data

Now that the new character exists on the dedicated server, you can download the files needed for the migration.

### Open the Save Directory

In your ZAP-Hosting file manager, go to:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Download the Files

Download the following items to your local computer:

| Item | Required |
| --- | --- |
| `Level.sav` | Yes |
| `Players/` folder | Yes |

Store both items in the same local working directory so the migration tool can process them correctly.

:::tip Keep Files Together
Place `Level.sav` and the `Players/` folder next to each other in the same local folder. This matches the expected workflow used by Palworld Save Tools.
:::

## Migrate the Host Character

Once you have downloaded the save data, you can perform the actual host character transfer.

### Start Palworld Save Tools

Download and extract [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools), then open `PalworldSaveTools.exe`.

In the application, choose:

```text
Fix Host Save
```



### Select the Correct Files

Inside the migration tool:

1. Select your downloaded `Level.sav`
2. In the left selection field, choose `00000001.sav`
3. In the right selection field, choose the new character you created on the dedicated server
4. Start the migration by selecting `Migrate`

| Tool Field | Value to select |
| --- | --- |
| `Path to Level.sav` | Your downloaded `Level.sav` |
| Left character field | `00000001.sav` |
| Right character field | Your newly created dedicated server character |
| Action | `Migrate` |

### What the Migration Does

The migration process reassigns the original host character data from the solo or co-op save to the dedicated server character entry you created earlier.

This is why you must first join the server and generate a fresh player save before using the tool.

:::caution Verify the Target Character
Make sure you select the correct new server character on the right side. Choosing the wrong target may overwrite another player's save data.
:::

## Upload the Updated Save Files

After the migration completes successfully, you need to upload the modified files back to your server.

### Replace the Existing Save Data

Return to the same server directory in your ZAP-Hosting file manager:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Upload and replace:

- the updated `Level.sav`
- the updated `Players/` folder

If your file manager prompts you to overwrite existing files, confirm the replacement.

### Configuration File Changes

For this specific host character transfer, there is currently no verified requirement to edit a Palworld configuration file such as `PalWorldSettings.ini`.

| Item | Required for host transfer |
| --- | --- |
| Edit `PalWorldSettings.ini` | No |
| Edit files under `Configs` | No verified requirement |
| Replace `Level.sav` | Yes |
| Replace `Players/` | Yes |

:::note No Additional Config Entries Required
Based on the currently available tool documentation and migration instructions, no extra configuration entries or manual `.ini` changes are required for the transfer itself.
:::

## Start the Server and Test the Character

Once the updated files have been uploaded, start your Palworld server again.

### Rejoin the Server

Connect to the server using the same account that created the new dedicated server character. If the migration was successful, you should now load into the transferred host character instead of the temporary new one.

### Check Important Character Data

After joining, verify that the following data appears correctly:

- character level
- inventory
- pals
- base ownership
- progression data

If anything is missing or incorrect, stop the server immediately and restore your backup before trying again.

:::danger Restore Backup if Data Is Incorrect
If your character, inventory, or world ownership data appears broken after the migration, do not continue playing. Restore the original `Level.sav` and `Players/` backup first to avoid saving further unwanted changes.
:::

## Reference Summary

### Required Paths, Files, and Actions

| Type | Value |
| --- | --- |
| Save path | `Pal/Saved/SaveGames/0/[your_savefolder_id]/` |
| Required file | `Level.sav` |
| Required folder | `Players/` |
| Host save file typically selected | `00000001.sav` |
| Server command | `save` |
| Server restart required | Yes |
| Config file edit required | No verified requirement |

## Conclusion

Congratulations, you have successfully transferred your Palworld host character to a dedicated server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!