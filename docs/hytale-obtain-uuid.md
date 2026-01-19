---
id: hytale-obtain-uuid
title: "Hytale: Obtain UUID"
description: "Discover how to find or obtain a player’s UUID for use in server configuration and permissions → Learn more now"
sidebar_label: Obtain UUID
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Each player on a Hytale server is identified internally by a UUID, also known as a Universally Unique Identifier.  This identifier is permanent and does not change, even if the player later changes their username.

UUIDs are required for various administrative tasks such as managing permissions, assigning groups, or referencing players in server commands and configuration files.

:::info Early Access Notice

Hytale released on January 13th, 2026 and is currently available in Early Access. As the game is still in an active development phase, server software, configuration files, modding support, and installation workflows may continue to change over time.

:::

<InlineVoucher />


## Obtain UUID

A player’s UUID can be obtained directly from within the game using the server’s built-in chat command.  This method is especially useful when the player is already online and the UUID is needed immediately.

While logged in with sufficient permissions, open the in-game chat and execute the UUID lookup command for the desired player:

```
/whoami <playername>
```

After executing the command, the server responds directly in chat with the UUID associated with the specified player.  The returned UUID uniquely identifies that player and can be copied for use in permission management, group assignments, whitelist entries, or other server-side operations.



![img](https://screensaver01.zap-hosting.com/index.php/s/E7QrJGn3q79Kzm6/preview)



## Conclusion

Obtaining a player’s UUID is an essential step in advanced server management tasks on a Hytale server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


<InlineVoucher />
