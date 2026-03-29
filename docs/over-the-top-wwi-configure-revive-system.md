---
id: over-the-top-wwi-configure-revive-system
title: "Over the Top WWI: Configure Revive System"
description: "Learn how to configure revive mechanics on your Over the Top WWI server → Learn more now"
sidebar_label: Revive System
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The revive system in **Over the Top WWI** determines how players can be brought back into the fight after being downed. Adjusting these settings allows you to control how forgiving or punishing combat is.

A faster or more reliable revive system can make gameplay more accessible, while stricter settings increase realism and consequences for mistakes.

<InlineVoucher />

## Configuration

The revive system is configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
ReviveTimer = 60
ReviveChance = 100
ReviveMaxDamage = 80
```


- `ReviveTimer` defines how long it takes to revive a player
- `ReviveChance` determines the success chance of a revive
- `ReviveMaxDamage` defines the maximum damage a player can have and still be revived

Adjust these values to control how often revives are successful and how long the process takes.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The new revive settings will be applied automatically.

## Conclusion

Congratulations! You have successfully configured the revive system on your **Over the Top WWI server**. This allows you to fine-tune combat difficulty and improve the overall gameplay experience.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />