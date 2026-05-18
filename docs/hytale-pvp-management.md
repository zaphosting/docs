---
id: hytale-pvp-management
title: "Hytale: PvP Management"
description: "Manage and configure player versus player combat (PVP) on your Hytale server → Learn more now"
sidebar_label: PVP Management
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

PvP management on a Hytale server controls whether players are able to damage or fight each other within a world.  By adjusting PvP settings, server owners can define if combat between players is fully enabled, completely disabled, or restricted to specific situations.

<InlineVoucher />



## Configuration

PvP behavior is defined on a per-world basis and configured through the server’s configuration file:

```
/gXXXXXXX/hytale/universe/worlds/default/config.json
```

This setting determines how the server handles player-to-player damage and whether PvP is allowed within the active world. Changes to PvP settings apply globally to the affected world and require a server restart to take effect.

The following example shows a configuration where PvP is disabled for a world:

```
"WorldConfig": {
  "PvP": false
}
```

With this configuration applied, players are no longer able to damage each other within that world, effectively creating a PvE-focused environment.

To enable PvP and allow player-to-player combat, the configuration can be set as follows:

```
"WorldConfig": {
  "PvP": true
}
```

## Conclusion

Once set up, you have a clear overview of how PvP is managed and can easily adjust the configuration to support cooperative gameplay, competitive environments or a combination of both. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />

