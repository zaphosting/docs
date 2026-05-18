---
id: humanitz-whitelist
title: "HumanitZ: Whitelist Management"
description: "Learn how to manage the whitelist and control server access on your HumanitZ server → Learn more now"
sidebar_label: "Whitelist"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

A whitelist allows you to control exactly who can join your HumanitZ server. When enabled, only players whose Steam IDs are listed in the allowed players file will be able to connect.

<InlineVoucher />



## Configuration

Whitelist functionality is controlled inside the `GameServerSettings.ini` file. You can access this file in your server management panel under **Configs**. To enable whitelist mode, locate and set the following parameter:

```
OnlyAllowedPlayers=1
```

- `OnlyAllowedPlayers=1` – Enables whitelist mode. Only listed players may join.
- `OnlyAllowedPlayers=0` – Disables whitelist mode. All players may join.

After enabling whitelist mode, you must create the whitelist file manually.

Connect to your server via [FTP](gameserver-ftpaccess.md) using your preferred FTP client. Once connected, navigate to the main server directory and create a new file named `F_MVPAccess.txt`. Inside this file, enter one **unique Steam ID per line** for each player you want to allow.

```
76561198000000001
76561198000000002
```

Save the file after adding the Steam IDs.



## Monitoring Player Activity

HumanitZ provides additional files for tracking player connections. `F_ConnectedPlayers.txt`  displays currently connected players and `PlayerConnectedLog.txt` logs all player connections and disconnections, including Steam name and unique Steam ID with timestamps. 

These files are useful for identifying Steam IDs and monitoring server activity. After making any changes to whitelist or ban files, save the files and restart the server to ensure the changes are applied properly.

## Conclusion

Congratulations! By enabling whitelist mode and managing the `F_MVPAccess.txt` and `F_BannedPlayers.txt` files, you have successfully configured access control on your HumanitZ server.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />

