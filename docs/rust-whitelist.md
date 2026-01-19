---
id: rust-whitelist
title: "Rust: Whitelist"
description: "Information about how to whitelist your Rust server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A whitelist is an access control mechanism that limits who can join your server. Rust dedicated servers do not include a built in whitelist feature, so the common approach used by hosting providers is to install uMod Oxide and a whitelist plugin that blocks connections unless a player is explicitly allowed.

<InlineVoucher />


## Activating the Whitelist

Connect to your server via FTP and install uMod Oxide if it is not already present. After uMod is installed, upload the whitelist plugin file `Whitelist.cs` to the plugins folder, commonly `oxide/plugins/Whitelist.cs`.

Once the plugin is in place, restart the server or reload plugins so it is loaded. The whitelist plugin usually works by requiring a specific permission before a player can connect.

## Managing Whitelisted Players

Open the Live Console in the ZAP-Hosting gameserver management and grant the whitelist permission to a player using their SteamID64.

```text
oxide.grant user 76561198000000000 whitelist.allow
```

To revoke access, remove the permission.

```text
oxide.revoke user 76561198000000000 whitelist.allow
```

To verify what permissions a user has, query their permissions.

```text
oxide.show user 76561198000000000
```

## Verifying Whitelist Functionality

Try to connect with an account that does not have the whitelist permission. The plugin should deny the connection. Then connect with an account you granted `whitelist.allow` to confirm access.

If everyone can still join, confirm the plugin is loaded and that uMod is running. A server restart after uploading the plugin is the most reliable way to ensure it is active.

## Conclusion

If all sections above were followed correctly, your whitelist is now active and you can control exactly who is allowed to join the server. If access still does not work as expected, restart the server once and recheck the file or command output to confirm the change was applied.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
