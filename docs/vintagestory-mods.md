---
id: vintagestory-mods
title: "Vintage Story: Install Mods"
description: "Learn how to install mods on your Vintage Story server to add new features and gameplay mechanics → Learn more now"
sidebar_label: Install Mods
services:
- gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Mods are a central part of the Vintage Story experience and allow server owners to expand the game with new mechanics, items, world generation features, or quality-of-life improvements. Installing mods on your server ensures that all players connected to the server can benefit from the same gameplay enhancements.

Vintage Story provides a large community library of mods ranging from small tweaks to full gameplay overhauls. Many of these mods can be found on the official Vintage Story Mod Database or community forums. 

<InlineVoucher />



## Preparation

Before installing mods on your Vintage Story server, make sure you have completed the following steps:

- Download the desired mod from a trusted source such as the Vintage Story Mod Database
- Ensure the mod version matches your server’s game version
- Stop your server before uploading new files

Most Vintage Story mods are distributed as `.zip` files which should not be extracted before installation.



## Installation

Vintage Story server mods must be uploaded directly to the server filesystem. This is done by connecting to the server via [FTP](gameserver-ftpaccess.md). First, connect to your server using an FTP client and log in using your server’s FTP credentials.

Once connected, navigate to the following directory:

```
/gxxxxxx/VintagestoryData/
```

Inside this directory you need to create two folders if they do not already exist:

```
VintagestoryData
├── Mods
└── ModConfigs
```

- **Mods** – contains all installed server mods  
- **ModConfigs** – stores configuration files created by installed mods

After creating these folders, upload your downloaded mod files into the **Mods** directory. Example structure:

```
VintagestoryData
└── Mods
├── examplemod.zip
├── anothermod.zip
```

Vintage Story automatically loads any mod files placed in this folder when the server starts. 



## Verifying the installation

Once all mod files have been uploaded, return to your server management panel and start the server again. During startup, the server will detect the mods located in the `Mods` folder and load them automatically. If the mod requires configuration, it may generate a new configuration file inside the `ModConfigs` folder after the first launch.

After the server has started successfully, connect to the server and verify that the mod is active. Mods should appear in the server logs during startup. If a mod fails to load, verify the following:

- The mod version matches the server version
- All required dependencies are installed
- The `.zip` file is located inside the correct `Mods` folder



## Conclusion

Congratulations! You have successfully installed mods on your Vintage Story server. Mods allow you to expand gameplay, introduce new mechanics, and customize the experience for your community. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />