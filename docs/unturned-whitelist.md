---
id: unturned-whitelist
title: "Unturned: Activate and edit whitelist on server"
description: "Discover how to secure your Unturned server by activating and managing the whitelist for controlled player access → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Activate whitelist

The whitelist in Unturned allows you to protect your server by only allowing selected players who are on the list to connect to the server. Activating the whitelist is done in the game via command. This requires **owner permissions**. If you don't know what this is and how to assign them then check out the following guide: [Become admin](unturned-becomeadmin.md)

If you followed the guide and successfully became an admin, then you can now activate the whitelist on your server. To do this, open the chat/console in game on your server. There you have to execute the following command:

```
/Whitelisted
```



The whitelist should be active now and accordingly only allow players to join the server that are on the list. Adding and removing of players is possible by using the following commands.



## Manage whitelist

**Add player to whitelist:**

```
Permit [SteamID]/[Tag]
```

**Remove player from whitelist:**

```
Unpermit [SteamID]
```

**Show all permitted players:**

```
Permits
```


<InlineVoucher />
