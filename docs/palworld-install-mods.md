---
id: palworld-install-mods
title: "Palworld: Install Mods"
description: "Learn how to install Palworld mods, including UE4SS Palworld, Lua mods, and .pak mods, on your dedicated server. -> Learn more now"
sidebar_label: Palworld: Install Mods
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld supports several types of server mods, most commonly `UE4SS`, `.lua`, and `.pak` mods. In this guide, you will learn how to prepare your server, identify the correct mod type, upload the required files, and restart your server so the mods can load correctly.



## Preparation

Before installing any mods, you should make sure that your server and the selected mod are compatible.

:::danger Back Up Your World First
You should always create a backup of your Palworld save data before installing mods. If a mod is incompatible or causes startup issues, you may need to restore your previous world state.
:::

You should verify the following first:

| Requirement | Details |
| --- | --- |
| Server edition | Dedicated Palworld servers use the **Steam** version. Mods intended only for the **Game Pass** version should not be used. |
| Mod compatibility | Confirm that the mod author explicitly states that the mod works on a dedicated server. |
| Mod type | Check whether the mod is a `UE4SS`, `.lua`, or `.pak` mod. |
| Client requirement | Some mods must be installed on both the **server** and all **player clients**. |
| Server version | Check your current server version before installing a mod. |

### Check your server version

To confirm your current Palworld server version, open the server console in your ZAP-Hosting game server administration and run:

```text
info
```

This displays version information that you can compare with the mod's requirements.

:::tip Install One Mod at a Time
You should only install one mod at a time and test it before adding another one. This makes troubleshooting much easier if the server fails to start or a mod does not work correctly.
:::

## Understand which mod type you are installing

Palworld mods are not all installed in the same way. You need to identify the mod type before uploading files.

| Mod type | Typical contents | Common install path | Notes |
| --- | --- | --- | --- |
| `UE4SS` / `.lua` mod | Folder containing scripts such as `main.lua` | `Pal/Binaries/Win64/ue4ss/Mods/` | Usually requires the `UE4SS` framework |
| `.pak` mod | One or more `.pak` files, sometimes with additional files | `Pal/Content/Paks/~mods/` | Some mods may instead use `Pal/Content/Paks/LogicMods/` |
| Client-side mod | Varies | Not always server installable | Must only be used if the mod author confirms server support |

:::caution Follow the Mod Author's Path
The paths in this guide are the most common locations currently used for Palworld mods. However, some mods require a different folder structure. You should always follow the instructions provided by the mod author if they differ.
:::

## Access your server files in the ZAP interface

You will need to use the file management areas in your ZAP-Hosting game server administration.

### Open the Configs section

The relevant configuration files can be accessed in your game server administration under **Configs**. This area is useful for checking and editing available configuration files for your Palworld server.

:::note Configs vs. Mod Files
Palworld mod installation is usually not completed by changing a gameplay setting inside a single config file alone. In most cases, you must upload the actual mod files into the correct server directories, and some mods may additionally require configuration changes inside files available under **Configs**.
:::

### Open the file manager

To upload mod files such as `.pak` archives or `UE4SS` script folders, you also need access to your server files through the file manager in the ZAP interface.

If a mod includes its own configuration file, you should upload it exactly as provided by the mod author and then edit it only if the author documents supported values.

## Install the UE4SS framework if required

`UE4SS` is a modding framework used by many Palworld Lua and script-based mods. You only need this if your selected mod depends on it.

### Confirm that your server uses Windows

`UE4SS` for Palworld is generally used with the Windows server build. If your server is not using a Windows Palworld server environment, `UE4SS`-based mods may not work as expected.

:::info UE4SS Requirement
If your chosen mod is a `UE4SS` or `.lua` mod, you should confirm that the framework is already present before uploading the mod itself.
:::

### Check the UE4SS installation path

If `UE4SS` is installed, the relevant directory is typically:

```text
Pal/Binaries/Win64/ue4ss/
```

The mod folder used by most `UE4SS` and Lua mods is:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

If your ZAP-Hosting product provides a built-in modding or `UE4SS` option in the server administration, you can use that option if available. If such an option is not visible in your interface, do not assume it exists for your product or server type.

## Upload and install Lua or UE4SS mods

Lua and other `UE4SS`-based Palworld mods are usually distributed as folders rather than as a single `.pak` file.

### Extract the mod on your local device

Download the mod archive from the mod author's official release page and extract it on your computer first. You should not upload the `.zip` or `.rar` file unless the author explicitly instructs you to do so.

### Upload the mod folder to the correct path

For most Lua or `UE4SS` mods, upload the extracted mod folder into:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

A typical Lua mod structure looks like this:

```text
Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua
```

Replace `UploadedMod` with the actual folder name supplied by the mod author.

### Example structure

| Item | Example path |
| --- | --- |
| Mod folder | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/` |
| Script file | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua` |

:::caution Do Not Rename Files Arbitrarily
You should not rename the mod folder, script files, or internal directory structure unless the mod author explicitly instructs you to do so. Many `UE4SS` mods depend on the original structure to load correctly.
:::

## Upload and install .pak mods

`.pak` mods are installed differently from Lua or `UE4SS` script mods.

### Upload the `.pak` file

For most Palworld `.pak` mods, upload the file to:

```text
Pal/Content/Paks/~mods/
```

Example:

```text
Pal/Content/Paks/~mods/UploadedMod.pak
```

Some mods may instead instruct you to use:

```text
Pal/Content/Paks/LogicMods/
```

### Verify additional files if included

Some `.pak` mods may include more than one file, such as metadata or companion files. If the mod archive contains multiple required files, upload all of them exactly as described by the mod author.

| Common `.pak` location | Use case |
| --- | --- |
| `Pal/Content/Paks/~mods/` | Most common location for general `.pak` mods |
| `Pal/Content/Paks/LogicMods/` | Used by some mods depending on author instructions |

## Edit mod configuration files if the mod requires it

Some Palworld mods include their own configuration files that must be edited after upload. These settings are not universal, so the exact file name and values depend on the selected mod.

### Where to find the configuration file

If the mod provides a config file, it may appear in one of these locations after upload:

| Mod type | Possible config location |
| --- | --- |
| `UE4SS` / `.lua` mod | Inside the mod folder under `Pal/Binaries/Win64/ue4ss/Mods/[your_mod_name]/` |
| `.pak` mod | Sometimes no editable config is included; check the mod documentation |
| Server config integration | In some cases, additional settings may be edited through **Configs** in your ZAP server administration |

### What to change

You should only change values that are explicitly documented by the mod author. Typical examples may include:

- enabling or disabling mod features
- setting multipliers or limits
- defining admin-only behavior
- changing key names or internal options used by the mod

Because Palworld mods do not use one single standardized config format, there is no universal configuration entry that applies to all mods.

:::info No Universal Palworld Mod Config Entry
There is currently no single Palworld server configuration file or built-in config section that enables all mods globally. In practice, mod installation is usually done by placing the correct files in the correct directories, and then editing any mod-specific config files only if the mod includes them.
:::

## Restart the server and test the mod

After uploading the mod files and making any required configuration changes, you need to restart your Palworld server.

### Restart the server

Use the restart function in your ZAP-Hosting game server administration to fully restart the service.

This step is required because Palworld does not normally load newly uploaded server mods until the server starts again.

### Test functionality

After the restart:

1. Join the server.
2. Test the mod feature in-game.
3. Check the server console for errors if the mod does not work.
4. Remove the newly added mod files if the server fails to start or behaves unexpectedly.

:::tip Troubleshooting Failed Mods
If a mod causes problems, remove only the files from the most recently installed mod first, then restart the server again. This is the fastest way to confirm whether that mod is the cause.
:::

## Quick reference

| Task | Action |
| --- | --- |
| Check server version | Run `info` in the server console |
| UE4SS base path | `Pal/Binaries/Win64/ue4ss/` |
| UE4SS/Lua mod path | `Pal/Binaries/Win64/ue4ss/Mods/` |
| Common Lua script file | `scripts/main.lua` |
| Common `.pak` mod path | `Pal/Content/Paks/~mods/` |
| Alternate `.pak` path | `Pal/Content/Paks/LogicMods/` |
| Config file access | Open **Configs** in the ZAP game server administration |
| Final step | Restart the server |

## Conclusion

Congratulations, you have successfully installed mods on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!