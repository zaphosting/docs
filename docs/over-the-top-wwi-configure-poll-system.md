---
id: over-the-top-wwi-configure-poll-system
title: "Over the Top WWI: Configure Poll System"
description: "Learn how to configure voting and poll settings on your Over the Top WWI server → Learn more now"
sidebar_label: Poll System
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The poll system in **Over the Top WWI** allows players to vote on various actions such as kicking players, changing maps, or modifying gameplay settings. This feature can improve community interaction and reduce the need for constant admin intervention.

By configuring poll settings, you can control which votes are allowed and how they behave during gameplay.

<InlineVoucher />

## Configuration

The poll system is configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
PollPercentThresh = 51
EnableBanPlayerPoll = 0
EnableKickPlayerPoll = 0
EnableChangeMapsPoll = 0
EnableMutePlayerPoll = 0
EnableCustomPoll = 1
ChangeMapImmediately = 1
```


- `PollPercentThresh` defines the percentage of votes required for a poll to pass
- `EnableBanPlayerPoll` allows players to vote to ban others
- `EnableKickPlayerPoll` allows players to vote to kick others
- `EnableChangeMapsPoll` allows players to vote for map changes
- `EnableMutePlayerPoll` allows players to vote to mute others
- `EnableCustomPoll` enables custom voting options
- `ChangeMapImmediately` determines whether a successful map vote is applied instantly

Allowed poll game modes:

```
PollBattle = 1
PollTDM = 1
PollConquest = 1
PollSiege = 1
PollKingoftheHill = 1
PollConvoyAmbush = 1
PollCaptureTheFlag = 1
PollCommanderBattle = 1
```


These settings define which game modes can be selected during polls.

- `1` → Enabled
- `0` → Disabled

You can disable specific modes to limit voting options and maintain a consistent gameplay experience.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The updated poll settings will be applied automatically.

## Conclusion

Congratulations! You have successfully configured the poll system on your **Over the Top WWI server**. This allows players to participate in decision-making and helps automate server management.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />