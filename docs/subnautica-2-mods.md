---
id: subnautica-2-mods
title: "Subnautica 2: Install Mods"
description: "Learn how to install Subnautica 2 mods on your gameserver by adding Lua or C++ mods to the correct folder, so your Subnautica server loads them automatically on startup. -> Learn more now"
sidebar_label: "Install Mods"
services:
 - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Mods allow you to customize and enhance your Subnautica 2 server experience by adding new gameplay features, improving mechanics, or introducing fresh content. With mods, you can create a more varied and engaging environment for you and your players. This guide will show you how to install Subnautica 2 mods on your ZAP-Hosting gameserver by uploading supported Lua or C++ mods to the correct folder so they load automatically when the server starts.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, you need access to your Subnautica 2 gameserver files through the ZAP-Hosting web interface or an available file management method.

:::info Required Mod Type
Only Lua or C++ mods that are designed for Subnautica 2 should be used. If a mod is made for another game, such as Subnautica 1 or Subnautica Below Zero, compatibility cannot be assumed.
:::

:::note Mod Download Sources
Subnautica 2 mods can for example be obtained from community platforms such as [Nexus Mods](https://www.nexusmods.com/games/subnautica2). Because third-party mod pages can change at any time, you should always review the mod description and installation notes before uploading files.
:::

## Download Compatible Mods

First, download the mods you want to use on your server. Make sure the mod is specifically intended for **Subnautica 2** and check whether the author provides any extra requirements.

### Check the Mod Contents

After downloading a mod archive, extract it on your local computer and review the included files.

Common things to look for:

- Lua script files
- C++ mod files
- a folder structure provided by the mod author
- a `README`, installation note, or dependency list

:::caution Verify Compatibility
Not all mods for games are server-compatible. Some mods are made only for the client and may not work on a dedicated Subnautica 2 gameserver. If the mod author does not mention server support, you should test carefully before using it in production.
:::

## Access Your Gameserver Files

Next, open your Subnautica 2 gameserver file system and locate the main server directory.

If you are using the ZAP-Hosting web interface, open the file manager for your gameserver and navigate to the root directory of the server installation.

### Locate the Mods Folder

Inside the main gameserver directory, find the `mods` folder.

The installation target is:

```text
[main_gameserver_directory]/mods
```

Replace `[main_gameserver_directory]` with the base directory of your Subnautica 2 server files.

:::info Automatic Mod Loading
The server checks the `mods` folder during launch. If a supported Lua or C++ mod is placed there correctly, it will be picked up automatically on the next server start.
:::

## Upload and Install Mods

Once you have the correct mod files and have opened the `mods` folder, you can upload the mod content.

### Copy the Mod Files

Upload or move the extracted Lua or C++ mod files into the `mods` folder in your main gameserver directory.

Depending on the mod, this may mean:

- uploading a single file directly into `mods`
- uploading a complete mod folder into `mods`
- preserving the folder structure exactly as provided by the mod author

### Keep the Original Structure

If the downloaded archive already contains a mod folder, do not rearrange the internal files unless the author explicitly instructs you to do so.

| Item | What to do |
| --- | --- |
| Single Lua mod file | Upload it to the `mods` folder |
| Single C++ mod file | Upload it to the `mods` folder |
| Folder-based mod | Upload the full folder to the `mods` folder |
| Archive file such as `.zip` | Extract it first, then upload the contents if required |

:::caution Do Not Upload Compressed Archives Unless Explicitly Supported
If you only upload a `.zip` or other archive file without extracting it, the server may not detect the mod. Unless the mod author states otherwise, upload the extracted files or folders.
:::

## Restart the Server

After you have uploaded the mods, restart your Subnautica 2 gameserver.

This is required because the server loads mods during startup. If the server is already running, newly uploaded files will usually not be applied until the next launch.

### Confirm the Mod Load

After the restart, check whether the mod is active in-game or through any logs or output that are available for your server.

Because mod behavior can vary, confirmation may include:

- changed gameplay behavior
- new commands or features
- visible log entries from the mod
- successful server startup without errors

:::tip Install Mods One by One
If you want to use multiple game mods, install and test them one at a time. This makes it much easier to identify which mod causes a problem if the server no longer starts correctly.
:::

## Troubleshooting

If your Subnautica 2 mods do not work, there are several common causes you should check.

### Common Problems

| Problem | Possible cause | Solution |
| --- | --- | --- |
| Mod does not load | Files were uploaded to the wrong directory | Make sure the files are inside the `mods` folder in the main gameserver directory |
| Server starts but mod has no effect | Mod is client-side only or incompatible | Review the mod page and confirm dedicated server support |
| Server fails to start | Broken mod files or version mismatch | Remove the last installed mod and restart the server |
| Mod files are present but ignored | Archive was uploaded instead of extracted files | Extract the download and upload the actual mod files |
| Multiple mods conflict | Two mods modify the same behavior | Test each mod separately and keep only compatible combinations |

### Remove a Problematic Mod

If a newly installed mod causes issues, delete the corresponding file or mod folder from the `mods` directory and restart the server again.

```text
[main_gameserver_directory]/mods
```

:::danger Use Trusted Mod Sources
Only download mods from sources you trust. Third-party files can contain broken, outdated, or malicious content. Review the mod page carefully and avoid unknown downloads that do not provide clear installation or compatibility information.
:::

## Best Practices

To keep your server stable, you should manage mods carefully instead of installing many at once.

### Recommended Workflow

1. Download one compatible Subnautica 2 mod.
2. Extract the files locally.
3. Upload the files or folder to the server `mods` directory.
4. Restart the server.
5. Test functionality.
6. Repeat for the next mod.

### Keep a Local Backup

Before changing your active mod setup, keep a backup of:

- your current mod files
- any related configuration files
- a list of installed mods and their versions

This helps you restore a working setup quickly if a new mod causes issues.

## Conclusion

Congratulations, you have successfully installed mods on your Subnautica 2 gameserver. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂