---
id: terraria-whitelist
title: "Terraria: Whitelist"
description: "Information about how to whitelist your Terraria server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A whitelist is an access list that restricts who can join your server. For Terraria hosting, the common whitelist approach is to run a TShock server and enable its whitelist feature, which is managed through a whitelist file and commands.

<InlineVoucher />

## Activating the Whitelist

Connect to your server via FTP and confirm your server is running TShock. Then locate the TShock configuration file `tshock/config.json` and enable the whitelist setting:

```
"EnableWhitelist": true
```

Save the file and restart the server. TShock will now require whitelist approval for incoming connections.

## Managing Whitelisted Players

To add an entry, open the Live Console in the ZAP-Hosting gameserver management and use the whitelist command with the player IP address.

```text
whitelist 203.0.113.25
```

TShock stores the list in `tshock/whitelist.txt`. To remove an entry, connect via FTP, open that file, delete the IP line, save, and restart the server.

```txt
203.0.113.25
198.51.100.10
```

## Verifying Whitelist Functionality

After the restart, attempt to connect from an IP address that is not listed. Access should be blocked. Then connect from a whitelisted IP address.

If players are still able to join without being listed, recheck that `EnableWhitelist` is true in `config.json` and that the server actually started as TShock.

## Conclusion

If all sections above were followed correctly, your whitelist is now active and you can control exactly who is allowed to join the server. If access still does not work as expected, restart the server once and recheck the file or command output to confirm the change was applied.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />
