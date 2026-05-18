---
id: starmade-whitelist
title: "StarMade: Whitelist"
description: "Information about how to whitelist your StarMade server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-starmade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A whitelist is an access list that limits who can join your server. StarMade supports a built in whitelist controlled in `server.cfg` and populated through `whitelist.txt`.

<InlineVoucher />

## Activating the Whitelist

Connect to your server via FTP and open `server.cfg`. Enable authentication and the whitelist.

```cfg
USE_STARMADE_AUTHENTICATION=true
REQUIRE_STARMADE_AUTHENTICATION=true
USE_WHITELIST=true
```

Save the file. Then open or create `whitelist.txt` in the same server directory. Add players in the format used by StarMade, one entry per line.

```txt
act:-1:PlayerName
act:-1:AnotherPlayer
```

Restart the server to load the updated whitelist.

## Managing Whitelisted Players

To add a player, append a new line to `whitelist.txt` using the same format, save, and restart. To remove a player, delete their line from `whitelist.txt`, save, and restart.

If names contain special characters, use the exact in game name as it appears on login to avoid mismatches.

## Verifying Whitelist Functionality

After the restart, attempt to connect with an account that is not present in `whitelist.txt`. Access should be denied. Then connect with a listed player name.

If listed players cannot join, confirm that StarMade authentication is enabled and required, otherwise names may not match reliably.

## Conclusion

If all sections above were followed correctly, your whitelist is now active and you can control exactly who is allowed to join the server. If access still does not work as expected, restart the server once and recheck the file or command output to confirm the change was applied.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
