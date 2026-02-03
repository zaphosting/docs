---
id: hytale-become-invisible
title: "Hytale: Become invisible"
description: "Discover how to become invisible on a Hytale server → Learn more now"
sidebar_label: Become invisible
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Invisibility can be useful on Hytale servers for moderation, testing, or content creation.  It allows administrators to observe players without being noticed, check suspicious activity, or explore areas without interfering with gameplay. Depending on the server configuration and available permissions, invisibility can usually be enabled through in-game commands or the live console.

<InlineVoucher />

## Requirements

To use invisibility features, you must have sufficient permissions on the server.  In most cases, you need operator privileges or permission access to moderation and gameplay commands. If you do not have the required permissions, the command will be denied and invisibility cannot be enabled. To obtain the necessary permissions follow our [Become admin](hytale-becomeadmin.md) guide.

## Becoming invisible

To become invisible, open the in-game chat and enter the invisibility command supported by the server. Execute the following command:

```
/hide <playername>
```

Once the command is executed successfully, your character will no longer be visible to other players in the world.  You can still move, interact, and monitor activity depending on the server rules and visibility implementation.

In addition to the basic hide command, Hytale also provides extended options that allow you to control who can see a player. For example, you can hide a player only from a specific target player, or apply invisibility to everyone on the server.

The following commands are available:
- `/hide <playername>`  Makes the specified player invisible.
- `/hide <playername> --target <playername>`  Makes the specified player invisible only to the target player.
- `/hide all`  Makes all players invisible.



## Disabling invisibility

To return to normal visibility, run the corresponding command again to disable invisibility. After the command is confirmed, other players will be able to see your character again as usual.

```
/hide show <playername>
```

There are also additional commands for removing invisibility in more specific scenarios, such as restoring visibility only for certain target players or removing invisibility from everyone.

The following commands are available:
- `/hide show <playername>`  Removes invisibility from the specified player.
- `/hide show <playername> --target <playername>`  Removes invisibility from the specified player for the target player.
- `/hide showall`  Removes invisibility from all players.





## Conclusion

Becoming invisible on a Hytale server is a useful tool for administrators and moderators who need to monitor gameplay discreetly.  For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />

