---
id: dayz-whitelist
title: "DayZ: Whitelist"
description: "Information about how to whitelist your DayZ server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A whitelist is an access list that restricts who can join your server. DayZ provides a built in whitelist mode that you can enable and then toggle per player.

<InlineVoucher />


## Activating the Whitelist

Connect to your server via FTP and open the main configuration file `serverDZ.cfg`. Locate the whitelist setting and enable it.

```cfg
enableWhitelist = 1;
```

Next, locate or create the whitelist file that your host exposes, commonly named `whitelist.txt` and placed alongside your server configuration files. Add one SteamID64 per line.

```txt
XXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXX
```

Save all files and restart the server so the whitelist is applied.

## Managing Whitelisted Players

To add a player, append their SteamID64 to `whitelist.txt`, save, and restart the server. To remove a player, delete their line from `whitelist.txt`, save, and restart the server.

Keep the file clean with one ID per line. Comments are not universally supported, so avoid extra text on the same line unless you have confirmed your server accepts it.

## Verifying Whitelist Functionality

After the restart, attempt to connect with an account that is not listed in `whitelist.txt`. Access should be denied. Then connect with a listed account to confirm it succeeds.

If listed players cannot join, verify you used SteamID64 values and that the server is loading the same `whitelist.txt` you edited.

## Conclusion

If all sections above were followed correctly, your whitelist is now active and you can control exactly who is allowed to join the server. If access still does not work as expected, restart the server once and recheck the file or command output to confirm the change was applied.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
