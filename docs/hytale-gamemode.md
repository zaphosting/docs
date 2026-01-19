---
id: hytale-gamemode
title: "Hytale: Game Mode Configuration"
description: "Discover how to secure your Hytale server by managing player access with whitelist features and protect your gameplay → Learn more now"
sidebar_label: Gamemode
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Hytale servers allow you to configure gameplay settings such as the game mode that defines the player experience.  Changing the game mode lets you tailor your server to a specific playstyle or community preference.

:::info Early Access Notice

Hytale released on January 13th, 2026 and is currently available in Early Access. As the game is still in an active development phase, server software, configuration files, modding support, and installation workflows may continue to change over time.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/KsesqALHY3AgKHF/preview)



## Change game mode 

### Live console
The game mode can  be changed while the server is running by using the live console or in game commands, provided the required permissions are available. This method allows administrators to switch the game mode without editing configuration files.

Using the console command updates the active game mode immediately for the server session. Depending on the server setup, the change may persist until the next restart or revert to the value defined in the configuration file.

```
/gamemode <gamemode> <playername>
```

The value of `GameMode` determines which game mode is applied when the server starts. Depending on your desired gameplay experience, this value can be adjusted accordingly.

Commonly used game mode values include:

- `Creative` for unrestricted building and content creation
- `Adventure` for structured gameplay with defined progression and interaction rules

After changing the game mode value, the server must be restarted for the new setting to take effect.



### Configuration file

The game mode can be defined directly in the server configuration file. 
This method is recommended when you want the server to always start with a specific game mode or when preparing a fresh server setup.

The configuration file is accessible through your hosting control panel or file manager. Within this file, a setting controls the active game mode used when the server starts. After modifying this value, the server must be restarted for the change to take effect.

```
"Defaults": {
"World": "default",
"GameMode": "Adventure"
},
```

The value of `GameMode` determines which game mode is applied when the server starts. Depending on your desired gameplay experience, this value can be adjusted accordingly.

Commonly used game mode values include:

- `Creative` for unrestricted building and content creation
- `Adventure` for structured gameplay with defined progression and interaction rules

After changing the game mode value, the server must be restarted for the new setting to take effect.



## Conclusion

By configuring the game mode either through the server configuration file or the live console, you can precisely control the gameplay experience on your Hytale server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂
