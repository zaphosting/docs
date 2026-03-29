---
id: over-the-top-wwi-configure-damage-settings
title: "Over the Top WWI: Configure Damage Settings"
description: "Learn how to adjust damage and combat behavior on your Over the Top WWI server → Learn more now"
sidebar_label: Damage Settings
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Damage settings in **Over the Top WWI** determine how lethal combat is and how weapons behave during gameplay. Adjusting these values allows you to create a more realistic experience or a more casual and forgiving environment.

By modifying damage multipliers and combat mechanics, you can significantly influence how fast players are eliminated and how engagements play out.

<InlineVoucher />

## Configuration

Damage settings are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
ShootingDamageMulti = 100
MeleeDamageMulti = 300
ShootingVelocityMulti = 100
DragEffector = 30
WindEffector = 15
RandomEffectorr = 10
```


- `ShootingDamageMulti` controls the damage dealt by ranged weapons

- `MeleeDamageMulti` defines the damage of melee attacks

- `ShootingVelocityMulti` affects projectile speed and can influence accuracy and hit registration

- `DragEffector` influences how quickly bullets lose speed over distance

- `WindEffector` determines how strongly wind affects bullet trajectory

- `RandomEffectorr` adds randomness to bullet behavior, affecting accuracy

Adjusting these values allows you to create more realistic ballistic behavior or simplify combat mechanics depending on your server style.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The new damage and combat settings will be applied automatically.

## Conclusion

Congratulations! You have successfully configured damage settings on your **Over the Top WWI server**. By adjusting these parameters, you can fine-tune combat behavior and create a gameplay experience that fits your community.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />