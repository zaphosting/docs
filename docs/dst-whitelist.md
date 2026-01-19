---
id: dst-whitelist
title: "Don't Starve Together: Whitelist"
description: "Information about how to whitelist your Don't Starve Together server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A whitelist is an access list that limits who can join your server. In Don't Starve Together, this is implemented as an allowlist based on Klei user IDs. The usual setup is a `whitelist.txt` file plus `whitelist_slots` in `cluster.ini`.

<InlineVoucher />


## Activating the Whitelist

Connect to your server via FTP and locate your cluster folder, commonly similar to `DoNotStarveTogether/Cluster_1/` or a provider specific path that contains `cluster.ini`. Open `cluster.ini` and in the `[NETWORK]` section set `whitelist_slots`.

To make the server effectively whitelist only, set `whitelist_slots` equal to your `max_players` value.

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

In the same cluster directory, create or edit `whitelist.txt`. Add one Klei ID per line in the KU_ format.

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

Save the files and restart the server. The allowlist is read on startup.

## Managing Whitelisted Players

To add a player, append their KU_ ID to `whitelist.txt`, save, and restart.

To remove a player, delete their KU_ ID from `whitelist.txt`, save, and restart.

Keep the number of IDs in `whitelist.txt` at least as high as `whitelist_slots` to avoid join issues when reserved allowlist slots exceed the number of listed users.

## Verifying Whitelist Functionality

After the restart, try joining with an account that is not in `whitelist.txt`. If `whitelist_slots` equals `max_players`, the join should fail. Then join with a listed KU_ ID to confirm access.

If the server still allows unlisted players, confirm you edited the active cluster folder and that the `[NETWORK]` section contains the `whitelist_slots` line.

## Conclusion

If all sections above were followed correctly, your whitelist is now active and you can control exactly who is allowed to join the server. If access still does not work as expected, restart the server once and recheck the file or command output to confirm the change was applied.

<InlineVoucher />
