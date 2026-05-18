---
id: spaceengineers-whitelist
title: "Space Engineers: Whitelist"
description: Information about how to whitelist your Space Engineers server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A whitelist is an access list that restricts who can join your server. Space Engineers commonly uses a Steam Group based whitelist, where only members of a specific Steam group can connect.

<InlineVoucher />

## Activating the Whitelist

Create a Steam group for your server and add the players you want to allow. Then connect to your server via FTP and open `SpaceEngineers-Dedicated.cfg`.

Ensure the server is configured for private mode and set the group ID at the end of the configuration.

```xml
<ServerType>PRIVATE</ServerType>
<GroupID>XXXXXXXXXXXXXXXXXX</GroupID>
```

Replace the group ID with your own Steam group ID. Save the file and restart the server.

## Managing Whitelisted Players

To add someone to the whitelist, invite them to the Steam group and make sure they have joined it. They will be able to connect once they are a group member.

To remove someone, remove them from the Steam group. After they are no longer a member, they will no longer be able to connect. If you ever want to switch the whitelist to a different group, change the `<GroupID>` value and restart the server.

## Verifying Whitelist Functionality

After the restart, try connecting with a Steam account that is not in the Steam group. The server should reject the connection. Then try with a group member account.

If access is still open, confirm that the server is running in private mode and that the `<GroupID>` entry is present in the active `SpaceEngineers-Dedicated.cfg`.

## Conclusion

If all sections above were followed correctly, your whitelist is now active and you can control exactly who is allowed to join the server. If access still does not work as expected, restart the server once and recheck the file or command output to confirm the change was applied.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
