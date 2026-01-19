---
id: hytale-disable-world-fall-damage
title: "Hytale: Disable World Fall Damage"
description: "Discover how to disable fall damage on your Hytale server → Learn more now"
sidebar_label: Disable World Fall Damage
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

On a Hytale server, gravity and fall damage are part of the world’s gameplay mechanics. When fall damage is enabled, players take damage from high dropsm when it is disabled, players can fall freely without taking damage. Disabling fall damage can be useful for creative servers, build projects, testing environments, or any scenario where fall damage should not affect the player experience. 

<InlineVoucher />



## Configuration

Fall damage is controlled on a per-world basis using the world’s configuration file.  Each world in the server universe has its own `config.json`, and within this file a setting determines whether fall damage is applied. 

To disable fall damage, open the world’s `config.json` located in the corresponding world folder under `universe/worlds/<world_name>/config.json`. Find the setting that controls fall damage, typically represented as a Boolean flag such as `IsFallDamageEnabled`, and set it to `false`:

```
{
  "IsFallDamageEnabled": false
}
```

When this value is set to `false`, players will no longer take damage from falling. If fall damage should remain enabled, the value should be set to `true`:

```
{
  "IsFallDamageEnabled": true
}
```

After updating the file, save the changes and **restart the server**.
Configuration changes are only applied when the server reloads the world, so a restart is required for the new setting to take effect.



## Conclusion

By configuring the fall damage flag in the world’s configuration file, you have full control over whether players take damage from falls. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />

