---
id: eco-whitelist
title: "ECO: Whitelist"
description: "Information about how to whitelist your ECO server from ZAP-Hosting→ Learn more now"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A whitelist is an access list that limits who can connect to your server. In ECO the whitelist is stored in the `Users.eco` configuration and becomes active automatically once at least one SteamID64 is present.

## Activating the Whitelist

Connect to your server via FTP and locate the file `Users.eco`. Open it and find the `WhiteList` section. Add SteamID64 values inside `$values`.

```json
"WhiteList": {
  "System.String": {
"$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
"$values": [
  "76561198000000000"
]
  }
}
```

Save the file and restart the server to ensure the new access list is applied.

## Managing Whitelisted Players

Adding players can also be done through the Live Console in the ZAP-Hosting gameserver management if you have the required in game permission. Use the whitelist command with the player name.

```text
/whitelist PlayerName
```

Removing players is done by editing `Users.eco`. Delete the SteamID64 from `$values`, save, and restart the server since there is no server command to remove entries.

## Verifying Whitelist Functionality

After the restart, attempt to connect with an account not included in `$values`. Access should be blocked. Then connect with a whitelisted account.

If access is still open, confirm that at least one SteamID64 is present and that the `Users.eco` file you edited matches the active server instance.

## Conclusion

If all sections above were followed correctly, your whitelist is now active and you can control exactly who is allowed to join the server. If access still does not work as expected, restart the server once and recheck the file or command output to confirm the change was applied.

<InlineVoucher />
