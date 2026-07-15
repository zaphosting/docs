---
id: palworld-upload-existing-save
title: "Palworld: Upload Existing Save"
description: "Learn how to upload an existing Palworld save, upload file data correctly, and configure your server to load the right world folder. -> Learn more now"
sidebar_label: "Upload Existing Save"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stores dedicated server world data in a specific save folder and requires a matching configuration entry to load it correctly. In this guide, you will learn how to upload an existing save to your ZAP-Hosting Palworld server and configure the server so it starts with the correct world data.

:::danger Unsupported Save Sources
You cannot transfer Xbox console or PS5 cloud saves directly to a dedicated Palworld server. Only saves from a PC installation or an existing dedicated server can be migrated with this method.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure you have the following:

| Requirement | Details |
| --- | --- |
| Existing Palworld save | A save folder from a PC installation or another dedicated server |
| Access to your ZAP-Hosting game server | You need access to the web interface, including the file manager and `Configs` section |
| Server stopped | The Palworld server should be stopped before replacing save data |
| Save folder name | You need the exact folder name of your uploaded save, for example `[your_savefolder_id]` |

:::info Config File Access
On ZAP-Hosting, the relevant Palworld configuration files can be accessed through your game server administration under `Configs`. You do not need to edit the file directly through the file manager unless you prefer to verify the path manually.
:::

## Understand the Required Save Structure

Before you upload anything, it is important to understand which folder Palworld actually loads.

The server save location is:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Inside this folder, you should usually see files and folders similar to the following:

```text
Level.sav
LevelMeta.sav
Players/
```

In some older or migrated saves, you may also see:

```text
WorldOption.sav
```

:::caution Remove Deprecated WorldOption.sav
If `WorldOption.sav` is present in the uploaded save folder, delete it before starting the server. This file is known to cause problems with newer Palworld server setups and should not be used for migrated saves unless specifically required by a confirmed current setup.
:::

## Find the Correct Configuration File

To make the server load your uploaded world, you need to edit `GameUserSettings.ini`.

In the ZAP-Hosting game server administration:

1. Open your Palworld server.
2. Go to `Configs`.
3. Open `GameUserSettings.ini`.

Depending on the current server environment, the underlying file path is typically one of the following:

| Possible path | Notes |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Common on Linux-based Palworld server deployments |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | May appear on Windows-based deployments |

:::note Path Differences
Palworld server installations may use either `LinuxServer` or `WindowsServer` in the config path depending on the current platform used by the provider. If you are editing the file through `Configs`, the correct file is already exposed there, so you only need to make sure you are modifying `GameUserSettings.ini`.
:::

## Upload a Save From Another Dedicated Server

If your save already comes from another hosting provider, you can migrate it directly.

### Back Up the Existing Save

On your previous provider, locate and download the existing save folder from:

```text
Pal/Saved/SaveGames/0/
```

Copy the full folder with the random alphanumeric name, for example:

```text
[your_savefolder_id]
```

### Stop the ZAP-Hosting Server

Before you upload the new save, stop your Palworld server in the ZAP-Hosting web interface.

:::caution Prevent Save Conflicts
Do not replace save files while the server is running. This can lead to incomplete uploads, overwritten data, or a corrupted save.
:::

### Replace the Default Save Folder

Open the file manager for your game server and navigate to:

```text
Pal/Saved/SaveGames/0/
```

Delete the default save folder that was created automatically by the server, then upload your existing save folder into the same location.

After the upload, the structure should look like this:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Set the Correct Save Folder in GameUserSettings.ini

Now open `GameUserSettings.ini` through `Configs` and look for the `DedicatedServerName` entry.

Set it to the exact name of your uploaded save folder:

```ini
DedicatedServerName=[your_savefolder_id]
```

| Config entry | Required value |
| --- | --- |
| `DedicatedServerName` | The exact folder name inside `Pal/Saved/SaveGames/0/` |

:::tip Exact Match Required
`DedicatedServerName` must match the uploaded folder name exactly, including all letters and numbers. If the value does not match, the server may start a different world or appear to load without map progress.
:::

### Start the Server

After saving the configuration, start your Palworld server again.

No additional console command is normally required after the upload. A full server restart is sufficient for the new save to be loaded.

## Upload a Save From a Steam Co-op World

If you previously hosted your world locally through Steam co-op, you can also upload that save to your dedicated server.

### Locate the Local Steam Save

On your Windows PC, press `Windows` + `R` and open:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames
```

Inside this location, open the folder named with your SteamID64. Then locate the world folder you want to upload:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_savefolder_id]
```

### Upload the Save to the Server

Once you have identified the correct save folder:

1. Stop your Palworld server.
2. Open the file manager.
3. Navigate to `Pal/Saved/SaveGames/0/`.
4. Delete the default save folder.
5. Upload your existing save folder.
6. Open `GameUserSettings.ini` under `Configs`.
7. Set:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Save the file and start the server again.

:::caution Host Character Limitation
When migrating a local Steam co-op world, the host character is not transferred automatically in the same way as connected player data. In practice, this means the original host may need additional third-party save conversion or character transfer steps if character continuity is required.
:::

## Upload a Save From PC Game Pass

PC Game Pass saves use a different format and are not directly ready for a dedicated Palworld server.

### Locate the Game Pass Save

The local Game Pass save data is typically stored in:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

### Convert the Save First

To use a PC Game Pass save on a dedicated server, you need to convert it to a Steam-compatible format using a third-party conversion tool.

One commonly used option is [Palworld Save Tools](https://github.com/cheahjs/palworld-save-tools).

:::danger Third-Party Tool Disclaimer
Third-party save conversion tools are not developed or maintained by ZAP-Hosting. Their functionality can change over time, and compatibility is not guaranteed. Always create a backup of your original save before using any conversion tool.
:::

After conversion, the exported save is commonly placed in a folder such as:

```text
XGP_converted_saves
```

### Upload the Converted Save

After the save has been converted:

1. Stop your server.
2. Open the file manager.
3. Go to `Pal/Saved/SaveGames/0/`.
4. Delete the default save folder.
5. Upload the converted save folder.
6. Open `GameUserSettings.ini` in `Configs`.
7. Set the correct folder name:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Save the file and start the server.

## Required Configuration Changes

The most important manual step in this process is editing `GameUserSettings.ini` correctly.

### Configuration Entry Overview

| File | Location in ZAP interface | Entry to change | Example value |
| --- | --- | --- | --- |
| `GameUserSettings.ini` | `Configs` | `DedicatedServerName` | `DedicatedServerName=84B5E2264EC387DEDB43179D666031A1` |

### Example Configuration

If your uploaded save folder is named `84B5E2264EC387DEDB43179D666031A1`, the entry should look like this:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

Do not add extra quotes unless they already exist in the file syntax used by your current configuration template.

## Verify the Upload

After the server starts, join the server and check whether your world data has loaded correctly.

You should verify the following:

| Check | Expected result |
| --- | --- |
| World loads | The existing map and structures are present |
| Player data | Previously transferred player data is available where applicable |
| Save folder match | `DedicatedServerName` matches the uploaded folder exactly |
| Deprecated file removed | `WorldOption.sav` is no longer present if it caused issues |

## Troubleshooting

If the upload does not work as expected, check these common causes.

### Server Starts a Fresh World

If the server creates a new world instead of loading your uploaded save, the most common cause is an incorrect `DedicatedServerName` value.

Make sure:

- the uploaded folder is inside `Pal/Saved/SaveGames/0/`
- the folder name is copied exactly
- `DedicatedServerName=[your_savefolder_id]` matches that folder exactly

### Map Data Is Missing

If the server starts but your world progress or map data appears missing, verify the same folder name match again.

This issue is commonly caused by a mismatch between:

- the uploaded save folder name
- the `DedicatedServerName` value in `GameUserSettings.ini`

### Save Upload Looks Correct but Still Fails

If the folder structure looks correct but the save still does not load:

- confirm that the save came from a supported source
- remove `WorldOption.sav` if it exists
- make sure the server was fully stopped before replacing files
- restart the server after saving the config changes

:::tip File Upload Best Practice
If you upload a large save, wait until the transfer has fully completed before starting the server. Starting too early can leave the save incomplete and prevent the world from loading properly.
:::

## Conclusion

Congratulations, you have successfully uploaded an existing Palworld save to your ZAP-Hosting server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!