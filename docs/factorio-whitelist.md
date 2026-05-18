---
id: factorio-whitelist
title: "Factorio: Whitelist"
description: "Information about how to whitelist your Factorio server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A whitelist is an access list that restricts server access to approved Factorio accounts. On most hosted servers the whitelist is enabled as soon as at least one player is added, and it is stored in a `server-whitelist.json` file.

<InlineVoucher />

## Activating the Whitelist

Open the Live Console in the ZAP-Hosting gameserver management and add the first player to the whitelist. Adding the first name typically activates whitelisting immediately.

```text
/whitelist add PlayerName
```

If your host exposes an explicit enable command, you can also run it before adding users.

```text
/whitelist enable
```

A restart is not usually required for the change to take effect, but restarting once after initial setup ensures the whitelist file is written and loaded on startup.

## Managing Whitelisted Players

To add more players, run the add command again with their Factorio username.

```text
/whitelist add AnotherPlayer
```

To remove a player, use the remove command.

```text
/whitelist remove PlayerName
```

To display the current whitelist, use the get command.

```text
/whitelist get
```

## Verifying Whitelist Functionality

After adding at least one player, try joining with an account that is not listed. The connection should be rejected. Then join with a whitelisted account to confirm it works.

If the server still allows everyone, verify the commands were executed on the correct server and restart once to confirm the whitelist file is loaded on startup.

## Conclusion

If all sections above were followed correctly, your whitelist is now active and you can control exactly who is allowed to join the server. If access still does not work as expected, restart the server once and recheck the file or command output to confirm the change was applied.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
