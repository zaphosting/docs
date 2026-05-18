---
id: vintagestory-whitelist
title: "Vintage Story: Whitelist"
description: "Information about how to whitelist your Vintage Story server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A whitelist is an access list that restricts who can join your server. Vintage Story provides a built in whitelist mode that you can enable and then toggle per player.

<InlineVoucher />


## Activating the Whitelist

Open the in game console and set the whitelist mode in the server config command. Use whitelist mode value 1 to allow only whitelisted players.

```text
/serverconfig whitelistmode 1
```

Restart the server once after enabling the mode to ensure the setting persists and is applied cleanly on startup.

## Managing Whitelisted Players

To allow a player, add them to the whitelist using the player command.

```text
/player PlayerName whitelist on
```

To remove access, toggle whitelist off for that player.

```text
/player PlayerName whitelist off
```

If you need to check the current server setting again, print the current server configuration or run the whitelistmode command without changing other values and confirm it remains set to 1.

## Verifying Whitelist Functionality

Try to connect with a player that has not been whitelisted. The connection should be rejected. Then connect with a player for whom you set `whitelist on`.

If everyone can still join, confirm that `whitelistmode` is set to 1 and that you executed the commands on the correct server.

## Conclusion

If all sections above were followed correctly, your whitelist is now active and you can control exactly who is allowed to join the server. If access still does not work as expected, restart the server once and recheck the file or command output to confirm the change was applied.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
