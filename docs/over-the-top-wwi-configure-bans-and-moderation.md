---
id: over-the-top-wwi-configure-bans-and-moderation
title: "Over the Top WWI: Configure Bans and Moderation"
description: "Learn how to configure ban lists and moderation settings on your Over the Top WWI server → Learn more now"
sidebar_label: Bans & Moderation
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Moderation tools in **Over the Top WWI** allow you to control player behavior and maintain a fair and enjoyable environment on your server. By configuring ban lists and moderation settings, you can restrict access, manage penalties, and provide clear instructions for players.

These settings are especially useful for community servers where active moderation is required.

<InlineVoucher />

## Configuration

Ban and moderation settings are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
BanPathstring = Banlist.txt
TempBanPathstring = TempBanlist.txt
CustomUnBanString =
```


- `BanPathstring` defines the file that contains permanently banned players
- `TempBanPathstring` defines the file that contains temporarily banned players

- `CustomUnBanString` allows you to define a custom message that tells players how to request an unban. Example: Discord link or website

### Ban file usage

The ban files are located in your server directory and contain player identifiers.

Each banned player should be listed on a new line inside the file:

```
SteamID1
SteamID2
SteamID3
```


These files are automatically read by the server to block access for listed players. Adjusting these settings allows you to define how bans are handled and how players can appeal them.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The updated moderation settings will be applied automatically.

## Conclusion

Congratulations! You have successfully configured ban and moderation settings on your **Over the Top WWI server**. This allows you to manage player behavior effectively and maintain a controlled server environment.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />