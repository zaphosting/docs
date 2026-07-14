---
id: palworld-upload-existing-save
title: "Palworld: Upload Existing Save"
description: "Learn how to upload an existing Palworld save, migrate a server world, and update the required configuration file correctly on your ZAP-Hosting game server. -> Learn more now"
sidebar_label: Palworld: Upload Existing Save
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stores dedicated server world data in a specific save folder and links that folder through the server configuration. In this guide, you will learn how to upload an existing save to your ZAP-Hosting Palworld server and update the required setting so the server loads the correct world.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure you have the existing Palworld save folder available on your local device.

:::danger Unsupported Save Sources
Xbox console and PS5 cloud saves cannot be transferred directly to a Palworld dedicated server. You can only migrate saves from a PC installation or from another existing dedicated server.
:::

:::info Required Access
You need access to your ZAP-Hosting game server web interface, including the file manager and the `Configs` section.
:::

If you first need help accessing your server files, use the relevant file management guide in the ZAP-Hosting documentation if available for your product.

## Understand the Required Save Structure

Before you upload anything, you should confirm that your save has the correct structure.

On a Palworld dedicated server, the active world save is stored in:

```text
Pal/Saved/SaveGames/0/[your_save_folder_id]/
```

The folder name `[your_save_folder_id]` is usually a long string of letters and numbers, for example:

```text
84B5E2264EC387DEDB43179D666031A1
```

A valid save folder normally contains files and folders similar to the following:

| Item | Purpose |
| --- | --- |
| `Level.sav` | Main world save data |
| `LevelMeta.sav` | World metadata |
| `Players/` | Player save data |
| `WorldOption.sav` | Legacy world option file that may need to be removed |

:::caution Remove Deprecated WorldOption.sav
If your uploaded save folder contains `WorldOption.sav`, delete it before starting the server. This file is known to cause issues on current dedicated server setups and should not be used for migrated saves unless specifically required by a newer official Palworld change.
:::

## Find the Configuration File in the ZAP Interface

After the save folder is uploaded, you must point the server to that folder by editing the Palworld configuration.

In the ZAP-Hosting game server administration, open the `Configs` section and locate:

```text
GameUserSettings.ini
```

Depending on the current server environment, this file is typically stored in one of the following paths:

| Possible path | Notes |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Common path on Linux-based Palworld servers |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Older or alternative path on Windows-based setups |

:::note LinuxServer vs WindowsServer Path
Palworld dedicated servers are commonly deployed with the `LinuxServer` config path. If you do not see `WindowsServer`, check `LinuxServer` instead. In the ZAP interface, the easiest method is to open `Configs` and select `GameUserSettings.ini` directly.
:::

## Upload the Existing Save

The upload process depends on where your save currently comes from, but the target location on the ZAP server is the same.

### Stop the Server First

Before replacing the default world, stop your Palworld server in the ZAP-Hosting web interface.

:::caution Prevent Save Corruption
Do not upload or replace world files while the server is running. Stopping the server first helps prevent incomplete writes and corrupted save data.
:::

### Remove the Default Save Folder

Open the file manager and navigate to:

```text
Pal/Saved/SaveGames/0/
```

Inside this directory, you will usually find a default generated save folder. Delete that default folder before uploading your own save.

### Upload Your Existing Save Folder

Upload your existing save folder into:

```text
Pal/Saved/SaveGames/0/
```

After the upload, the structure should look like this:

```text
Pal/
└── Saved/
    └── SaveGames/
        └── 0/
            └── [your_save_folder_id]/
                ├── Level.sav
                ├── LevelMeta.sav
                ├── Players/
                └── WorldOption.sav
```

If `WorldOption.sav` exists, delete it after the upload.

:::tip Copy the Folder Name Exactly
You will need the exact uploaded folder name for the next step. Copy `[your_save_folder_id]` exactly as shown in the file manager, including all letters and numbers.
:::

## Edit GameUserSettings.ini

After the save upload is complete, you must update the server configuration so Palworld loads the correct world.

Open `GameUserSettings.ini` from the `Configs` section and look for the `DedicatedServerName` entry.

Set it to the exact uploaded save folder name:

```ini
DedicatedServerName=[your_save_folder_id]
```

Example:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

### Required Configuration Entry

Use the following reference when editing the file:

| Config file | Key | Required value |
| --- | --- | --- |
| `GameUserSettings.ini` | `DedicatedServerName` | Exact name of the uploaded save folder |

### What This Setting Does

`DedicatedServerName` tells the Palworld dedicated server which folder inside `Pal/Saved/SaveGames/0/` should be loaded as the active world.

If this value does not match the uploaded folder name exactly, the server may create a new world or load incorrectly.

:::danger Exact Match Required
If you see missing map progress, an empty world, or a newly generated save after startup, the most common cause is that `DedicatedServerName` does not exactly match the uploaded folder name.
:::

## Source-Specific Save Locations

If you are not sure where to get your original save from, use the correct source path below.

### From Another Dedicated Server Provider

On your previous provider, back up the save folder from:

```text
Pal/Saved/SaveGames/0/
```

Copy the entire world folder with its original name, then upload that folder to your ZAP-Hosting server as described above.

### From a Steam Co-op Save

For local Steam saves on Windows, open the following path:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_save_folder_id]
```

The folder `[your_steamid64]` is your Steam 64-bit ID, and `[your_save_folder_id]` is the world folder you want to migrate.

:::caution Host Character Limitation
When migrating a local Steam co-op world to a dedicated server, the original host character is not transferred automatically in the same way as connected player data. Additional third-party save conversion or character transfer tools may be required if you need to preserve the host character.
:::

### From PC Game Pass

For PC Game Pass installations, the local save data is typically stored under:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

Game Pass saves are not stored in the same format as Steam or dedicated server saves. In practice, you usually need a third-party conversion tool to convert the save into a Steam-compatible or dedicated-server-compatible format before uploading it.

:::info Game Pass Conversion Requirement
A direct upload of raw PC Game Pass save data is generally not sufficient. You need to convert the save first, then upload the converted world folder to `Pal/Saved/SaveGames/0/` and set `DedicatedServerName` accordingly.
:::

## Start the Server

Once the save folder has been uploaded and `GameUserSettings.ini` has been updated, start your server again from the ZAP-Hosting web interface.

No additional console commands are normally required for this migration process.

After startup, join the server and verify that:

- the correct world loads
- buildings and map progress are present
- player data is available as expected

## Troubleshooting

If the uploaded save does not load correctly, check the following points.

### The Server Created a New World

Verify that the following value in `GameUserSettings.ini` matches the uploaded folder name exactly:

```ini
DedicatedServerName=[your_save_folder_id]
```

Also confirm that the uploaded save is located directly in:

```text
Pal/Saved/SaveGames/0/[your_save_folder_id]/
```

### The Map or World Progress Is Missing

This usually means one of the following:

| Possible cause | Solution |
| --- | --- |
| Wrong `DedicatedServerName` value | Re-enter the exact uploaded folder name |
| Save folder uploaded into the wrong directory | Move it to `Pal/Saved/SaveGames/0/` |
| Incomplete upload | Re-upload the full folder and verify all files are present |

### WorldOption.sav Causes Problems

If your save contains `WorldOption.sav`, delete it and start the server again.

This file is associated with older save handling behavior and may interfere with migrated dedicated server worlds.

## Conclusion

Congratulations, you have successfully uploaded an existing Palworld save to your ZAP-Hosting server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!