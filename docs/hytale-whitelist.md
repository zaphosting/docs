---
id: hytale-whitelist
title: "Hytale: Whitelist Setup and Management"
description: "Discover how to secure your Hytale server by managing player access with whitelist features and protect your gameplay → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The whitelist is a security and access control feature that allows you to limit who can join your Hytale server. When enabled, only players that are explicitly listed on the whitelist are permitted to connect. This is especially useful for private servers, community servers, development environments, or testing phases where access should be restricted to trusted players only.

:::info Early Access Notice

Hytale released on January 13th, 2026 and is currently available in Early Access. As the game is still in an active development phase, server software, configuration files, modding support, and installation workflows may continue to change over time.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/mMjZWsYdmbnwQkQ/preview)



<InlineVoucher />

## Activate whitelist

The whitelist can be enabled either via the server console or directly in game. Make sure you have the required permissions, such as operator rights, before executing these commands.

To enable the whitelist, run the following command:

```
/whitelist enable
```



Once enabled, any player who is not on the whitelist will be denied access when attempting to join the server. To verify whether the whitelist is currently active, use:

```
/whitelist status
```

This command returns the current state of the whitelist and helps confirm that the configuration has been applied correctly.



## Deactivate whitelist

If you want to allow all players to join the server again, the whitelist can be disabled at any time. Use the following command to deactivate it:

```
/whitelist disable
```

After disabling the whitelist, the server will no longer restrict access based on the whitelist and all players will be able to connect.



## Manage whitelist

The whitelist can be managed dynamically while the server is running. Players can be added or removed at any time without requiring a server restart when using commands.



### Add player to whitelist

To grant a specific player access to the server, add them to the whitelist using:

```
/whitelist add <playername>
```

The specified player will immediately be allowed to join the server, provided the whitelist is enabled.



### Remove player from whitelist

To revoke a player's access, remove them from the whitelist:

```
/whitelist remove <playername>
```

Once removed, the player will no longer be able to join while the whitelist is active.



### List whitelisted players

To view all players that are currently allowed to join the server, run:

```
/whitelist list
```

This command outputs the complete list of whitelisted player names.



### Clear whitelist

If you want to remove all players from the whitelist at once, you can clear it entirely:

```
/whitelist clear
```

This will delete all existing whitelist entries but does not disable the whitelist itself.



## Manage whitelist via file

In addition to commands, the whitelist can also be managed directly through a configuration file. This method is useful for bulk changes or when preparing a whitelist before starting the server. The file responsible for this configuration is called `whitelist.json` and is located in the server directory.

````
{
  "enabled": true,
  "players": [
    "PlayerName1",
    "PlayerName2"
  ]
}
````



## Conclusion

Congratulations, you have successfully set up the whitelist for your Hytale server. Your server is now restricted to approved players only, helping you maintain control, privacy, and a safer multiplayer environment. 

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂
