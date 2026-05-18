---
id: 7d2d-whitelist
title: "7 Days To Die: Whitelist"
description: "Information about how to whitelist your 7 Days To Die server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A whitelist is an access list that limits who can join your server. In 7 Days To Die this is commonly managed in the serveradmin.xml file, which stores whitelisted Steam accounts. Once enabled, only players listed there can connect.

<InlineVoucher />


## Activating the Whitelist

Connect to your server via FTP and locate the file `serveradmin.xml`. On most hosted installations it is in the save directory, commonly under a path similar to `7-days-to-die/Saves/<WorldName>/<SaveName>/serveradmin.xml` or directly in `7-days-to-die/Saves/serveradmin.xml` depending on the provider layout. Open the file and look for the `<whitelist>` section inside `<adminTools>`.

Add at least one SteamID64 to the whitelist. The format below follows the default structure used by the game.

```xml
<whitelist>
  <user steamID="76561198021925107" name="PlayerName" permission_level="1000" />
</whitelist>
```

Save the file and restart the server so the new whitelist is loaded. If your file contains only commented examples, make sure your `<user ... />` line is not inside an XML comment.

## Managing Whitelisted Players

To add another player, repeat the same change in `serveradmin.xml` by adding another `<user ... />` entry within `<whitelist>`. Use the player SteamID64 for `steamID`.

To remove a player, delete the corresponding `<user ... />` line from the `<whitelist>` section, save, and restart the server.

If you prefer commands, open the Live Console in the ZAP-Hosting gameserver management and use the built in whitelist commands to add or remove players. Changes done through commands will still end up reflected in the same whitelist data the server uses on restart.

## Verifying Whitelist Functionality

After the restart, try to connect with an account that is not on the whitelist. The join attempt should be rejected. Then try with a whitelisted account to confirm access works.

If the server still lets non whitelisted players in, recheck that your whitelist entries are not commented out and that you edited the correct `serveradmin.xml` for the active save.

## Conclusion

If all sections above were followed correctly, your whitelist is now active and you can control exactly who is allowed to join the server. If access still does not work as expected, restart the server once and recheck the file or command output to confirm the change was applied.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
