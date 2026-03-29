---
id: over-the-top-wwi-configure-map-rotation-rules
title: "Over the Top WWI: Configure Map Rotation Rules"
description: "Learn how to configure map rotation behavior on your Over the Top WWI server → Learn more now"
sidebar_label: Map Rotation
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Map rotation rules in **Over the Top WWI** determine how maps are selected and played based on player count. This helps ensure that maps remain balanced and suitable for the number of active players.

By configuring these settings, you can prevent large maps from being played with too few players or small maps from becoming overcrowded.

<InlineVoucher />

## Configuration

Map rotation rules are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameter:


EnableMinMaxPlayersPerMapCheck = False


- `EnableMinMaxPlayersPerMapCheck` enables or disables automatic map selection based on player count

  - `False` → Disabled
  - `True` → Enabled


When enabled, the server will check the current player count and adjust map selection accordingly. This ensures that maps are chosen within a suitable range, helping to maintain balanced gameplay.

The system uses internal thresholds to determine whether a map is appropriate, preventing situations where large maps are underpopulated or small maps become overcrowded.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The updated map rotation behavior will be applied automatically.

## Conclusion

Congratulations! You have successfully configured map rotation rules on your **Over the Top WWI server**. This helps ensure balanced gameplay by matching map size to player count.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />