---
id: projectzomboid-whitelist
title: "Project Zomboid: Whitelist"
description: "Information about how to whitelist your Project Zomboid server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-projectzomboid
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A whitelist is an access control mode that requires you to explicitly create user accounts before they can join. In Project Zomboid this is commonly achieved by disabling open registration in the server configuration and then adding users through console commands.

<InlineVoucher />


## Activating the Whitelist

Connect to your server via FTP and open your server settings file. This is typically found under `Zomboid/Server/` and is named after your server, for example `servertest.ini` or `<ServerName>.ini`. Locate the `Open` setting and set it to false.

```ini
Open=false
```

Save the file and restart the server. With open registration disabled, only accounts you create will be able to join.

## Managing Whitelisted Players

Open the Live Console in the ZAP-Hosting gameserver management and create accounts for allowed players. Use the adduser command with a username and password.

```text
/adduser "username" "password"
```

To remove access for a user, remove them from the whitelist with the dedicated command.

```text
/removeuserfromwhitelist "username"
```

If you previously allowed open registration and want to convert existing connected accounts into whitelisted entries, use the command that adds all currently connected users to the whitelist.

```text
/addalltowhitelist
```

## Verifying Whitelist Functionality

After `Open=false` is active, a new user who is not added with `/adduser` should be unable to join. Test with a whitelisted account to confirm access.

If unlisted users can still join, confirm you edited the active `<ServerName>.ini` file and restarted the server.

## Conclusion

If all sections above were followed correctly, your whitelist is now active and you can control exactly who is allowed to join the server. If access still does not work as expected, restart the server once and recheck the file or command output to confirm the change was applied.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
