---
id: over-the-top-wwi-configure-auto-balance
title: "Over the Top WWI: Configure Auto Team Balance"
description: "Learn how to configure automatic team balancing on your Over the Top WWI server → Learn more now"
sidebar_label: Auto Team Balance
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Team balance is essential for fair and enjoyable matches in **Over the Top WWI**. Without proper balancing, one team may gain a significant advantage, leading to uneven gameplay and a poor player experience.

The auto-balance system helps maintain fairness by automatically redistributing players between teams when certain conditions are met.

<InlineVoucher />

## Configuration

Auto team balance is configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
EnableAutobalance = 1
TeamPercentsAutoBalance = 50
AutoBalanceThreshold = 5
MinAutoBalanceCount = 15
LimitTeamSelection = 0
```


- `EnableAutobalance` enables or disables automatic team balancing

- `0` → Disabled
- `1` → Enabled

- `TeamPercentsAutoBalance` defines the desired team distribution. Example: `50` = equal team sizes
- `AutoBalanceThreshold` defines how much imbalance is allowed before balancing is triggered
- `MinAutoBalanceCount` defines the minimum number of players required before auto-balance becomes active
- `LimitTeamSelection` restricts players from choosing teams manually

- `0` → No restriction
- `1–3` → Limits team selection depending on the value


After modifying the `ServerConfiguration.ini`, save the file and restart your server. The auto-balance system will then manage team distribution automatically during matches.

## Conclusion

Congratulations! You have successfully configured automatic team balancing on your **Over the Top WWI server**. This helps ensure fair matches and improves the overall experience for all players.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />