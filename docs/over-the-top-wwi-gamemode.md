---
title: "Over the Top WWI: Change Game Mode"
description: "Learn how to change the game mode on your Over the Top WWI server → Learn more now"
sidebar_label: Change Game Mode
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The game mode on an **Over the Top WWI** server defines how matches are played and what objectives players must complete. Different game modes can significantly change the pacing, strategy, and overall gameplay experience.

By adjusting the game mode, you can tailor your server to focus on large-scale battles, defensive gameplay, or objective-based scenarios depending on your community’s preferences.

<InlineVoucher />

## Configuration

The game mode is configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameter:

```
CurrentGameMode = 2
```


The value determines which game mode is active on your server. Available values:

- `2` → Conquest
- `3` → Siege


The selected value defines the core gameplay rules for each match.

- **Conquest (2)** focuses on capturing and holding objectives across the map, encouraging constant movement and team coordination.
- **Siege (3)** is typically more defensive, where one team attacks while the other defends strategic positions.

Choosing the right mode depends on your preferred gameplay style and player count.


After modifying the value in the `ServerConfiguration.ini`, save the file and restart your server. The new game mode will be applied on the next match or map rotation.

## Conclusion

Congratulations! You have successfully changed the game mode on your **Over the Top WWI server**. By selecting the appropriate mode, you can shape the gameplay experience and better match your community’s preferences.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />