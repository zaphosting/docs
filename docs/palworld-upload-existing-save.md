---
id: palworld-upload-existing-save
title: "Palworld: Upload Existing Save"
description: "Learn how to upload an existing Palworld save, upload file data to your server, and configure the correct save folder for migration to ZAP-Hosting. -> Learn more now"
sidebar_label: Palworld: Upload Existing Save
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stores dedicated server world data inside a specific save folder and links that folder through the server configuration. In this guide, you will learn how to upload an existing save to your ZAP-Hosting Palworld server, update the required config entry, and start the server with your migrated world.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure you have access to the existing save files and your ZAP-Hosting game server administration.

:::danger Unsupported Console Cloud Saves
Xbox console cloud saves and PS5 cloud saves cannot be transferred directly to a Palworld dedicated server. You can only migrate saves from a PC installation or from another existing dedicated server.
:::

### What you need

You should have the following ready before starting:

| Requirement | Details |
| --- | --- |
| Existing Palworld save | A save folder from another dedicated server, a local Steam co-op world, or a converted PC Game Pass save |
| ZAP-Hosting server access | Access to your Palworld server administration, including `Files` and `Configs` |
| Save folder name | The uploaded save folder ID, for example `[your_save_folder_id]` |
| Local file access | Access to the source save files on your PC or previous provider |

### Supported save sources

| Source | Supported | Notes |
| --- | --- | --- |
| Another dedicated server | Yes | Direct upload is possible |
| Steam co-op save | Yes | The host character is not transferred automatically |
| PC Game Pass save | Yes, with conversion | You must convert the save first |
| Xbox console cloud save | No | Direct transfer is not supported |
| PS5 cloud save | No | Direct transfer is not supported |

:::caution Host Character Limitation
If you are migrating a local Steam co-op world, the world data can be transferred, but the original host character usually cannot be moved directly to a dedicated server without third-party save modification tools. If you need this, verify the procedure carefully before making changes, as third-party tools are outside the scope of this guide.
:::

## Locate your existing save

Before you upload file data to the server, you need to identify the correct save folder on your current system.

### Save from another provider

If your Palworld server is hosted elsewhere, locate this directory on the old server:

```text
Pal/Saved/SaveGames/0/
```

Inside this directory, you should see a folder with a long random-looking name, for example:

```text
84B5E2264EC387DEDB43179D666031A1
```

This folder is your actual world save. Back up this entire folder to your local computer before continuing.

### Save from a Steam co-op world

If your save comes from a local Steam installation, open the following path on your Windows PC:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\
```

Inside this folder, you will find one or more world save folders. Copy the folder for the world you want to migrate.

:::note SteamID64 Folder
`[your_steamid64]` is a numeric folder name created by Steam. Inside it, each Palworld world is stored in its own separate save folder.
:::

### Save from PC Game Pass

If your save comes from the PC Game Pass version, the original save data is typically stored here:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

PC Game Pass saves are not stored in the same format used by dedicated servers. You must first convert the save to a Steam-compatible format by using a compatible Palworld save conversion tool.

After conversion, use the converted output folder, often named:

```text
XGP_converted_saves
```

:::info Game Pass Save Conversion
The exact conversion workflow depends on the tool you use. Because third-party tools can change over time, verify the current instructions from the tool's official source before proceeding.
:::

## Stop the server before uploading

Before replacing the existing save, stop your Palworld server in the ZAP-Hosting web interface.

Stopping the server helps prevent file corruption and ensures that the current save is not rewritten while you upload the new data.

:::caution Prevent Save Conflicts
Do not upload or replace save files while the server is running. Palworld may overwrite files or create inconsistent world data if the save is changed during operation.
:::

## Upload the existing save folder

Once the server is offline, you can upload the existing save to the correct directory.

### Open the save directory

In your ZAP-Hosting game server administration, open the `Files` area and navigate to:

```text
Pal/Saved/SaveGames/0/
```

This is the directory where Palworld stores the active dedicated server save folder.

### Remove the default save folder

If the server has already been started before, there is usually a default save folder inside `Pal/Saved/SaveGames/0/`.

Delete this default folder before uploading your own save folder. This avoids confusion and ensures the server only uses the save you want to migrate.

### Upload your save folder

Upload the entire existing save folder into:

```text
Pal/Saved/SaveGames/0/
```

After the upload, the structure should look similar to this:

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

The folder name `[your_save_folder_id]` is important. You will need this exact value in the configuration file later.

:::tip Copy the Folder Name Exactly
The save folder ID must match the configuration value exactly, including uppercase and lowercase characters if applicable. If the value does not match, the server may start with a blank world or appear to have no map data.
:::

## Remove deprecated world option data

Some migrated saves may contain a `WorldOption.sav` file inside the uploaded save folder:

```text
Pal/Saved/SaveGames/0/[your_save_folder_id]/WorldOption.sav
```

Older community guidance has identified this file as a possible source of issues in some migration cases. If `WorldOption.sav` is present and you experience problems after migration, remove it and test again.

:::caution Remove Only if Needed
`WorldOption.sav` may not cause issues in every case, but it has been reported as problematic in some migrations. If your uploaded save does not load correctly, deleting this file is a common troubleshooting step.
:::

## Edit the Palworld configuration

After the upload, you must tell the server which save folder it should load.

### Open the config file in ZAP-Hosting

In your ZAP-Hosting game server administration, open the `Configs` section and locate the `GameUserSettings.ini` file.

On current Linux-based Palworld server installations, the file path is typically:

```text
Pal/Saved/Config/LinuxServer/GameUserSettings.ini
```

Some older references may mention `WindowsServer` instead of `LinuxServer`. On ZAP-Hosting, you should verify the actual path shown in your server administration and use the file that exists there.

| Config file | Typical path |
| --- | --- |
| `GameUserSettings.ini` | `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` |

### Change the dedicated save folder value

Inside `GameUserSettings.ini`, look for the line containing `DedicatedServerName=`.

Set it to the exact name of your uploaded save folder:

```ini
DedicatedServerName=[your_save_folder_id]
```

For example:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

This value links the server configuration to the uploaded world save.

### What this setting does

The `DedicatedServerName` entry tells Palworld which folder inside `Pal/Saved/SaveGames/0/` should be treated as the active world.

| Config entry | Required value | Purpose |
| --- | --- | --- |
| `DedicatedServerName` | `[your_save_folder_id]` | Selects the uploaded save folder the server should load |

:::info Exact Match Required
If `DedicatedServerName` does not match the uploaded folder name exactly, the server may generate a new world, fail to load the expected map data, or appear to ignore the uploaded save.
:::

## Start the server

Once the save folder has been uploaded and `GameUserSettings.ini` has been updated, start your Palworld server again from the ZAP-Hosting web interface.

No additional console command is normally required for this migration. A full server restart is the required final step so Palworld can read the new save folder and configuration.

## Troubleshooting

If the server does not load the expected world after the upload, check the following points.

### The world is missing or the map is empty

This usually means the configured folder name does not match the uploaded save folder.

Verify the following:

- The uploaded save is located in `Pal/Saved/SaveGames/0/`
- The folder name is exactly `[your_save_folder_id]`
- `DedicatedServerName=[your_save_folder_id]` is set correctly in `GameUserSettings.ini`

### The wrong config path is referenced

If you cannot find the expected config file path, check the `Configs` area in your ZAP-Hosting administration and confirm whether the server uses `LinuxServer` or another visible platform-specific folder.

Do not create a new path manually unless it already exists on your server.

### The save still does not load correctly

If the file structure looks correct but the save still fails to load:

- confirm that the uploaded folder contains valid save files such as `Level.sav` and `LevelMeta.sav`
- remove `WorldOption.sav` if it exists and test again
- make sure the source save came from a supported platform
- restart the server again after every config change

## Conclusion

Congratulations, you have successfully uploaded an existing Palworld save to your ZAP-Hosting server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!