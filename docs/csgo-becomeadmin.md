---
id: csgo-becomeadmin
title: "CS:GO: Become admin"
description: "Discover how to assign and manage administrator permissions for full server control in CS:GO with Sourcemod → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by Sourcemod directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below.  
<InlineVoucher />



## Preparation

To use administrator privileges, a foundation must first be established. By default, CS:GO does not offer comprehensive administration management. However, there are frameworks for this purpose, such as Sourcemod. The framework must be installed for configuration. If you have not installed it yet, feel free to check out our corresponding plugin installation guide for CS:GO.



## Defining Admins

Adding admins can be done via the `admins_simple.ini` or `admins.cfg` configuration file, found under `../csgo/cstrike/addons/sourcemod/configs/`. For simple setups, `admins_simple.ini` is usually sufficient. There you can define admins by SteamID and assign permission flags directly.

```ini title="admins_simple.ini (Example)"
"STEAM_0:1:12345678" "z"
"STEAM_0:1:87654321" "bcdefgjk"
```

In this example, the first admin receives full permissions through the `z` flag, while the second admin only receives selected permissions.

If you want to use more advanced configurations such as groups, immunity, or passwords, you should use `admins.cfg` instead.

```
Admins
{
  "User 1"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:12345678"
    "flags"   "z"
  }

  "User 2"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:87654321"
    "flags"   "bcdefgjk"
  }
}
```

## Defining Admin Groups

Admin groups can also be defined. Thus, an admin's permissions can be managed via their corresponding group. This way, permissions do not need to be individually configured for each admin. The groups are defined in the `admin_groups.cfg` configuration file, found under `../csgo/cstrike/addons/sourcemod/configs/`.

```
Groups
{
  "Full Admin"
  {
    "flags"   "z"
    "immunity" "99"
  }

  "Moderator"
  {
    "flags"   "bcdefgjk"
    "immunity" "10"
  }
}
```

After that, you can assign a group to an admin in the `admins.cfg` file:

```
Admins
{
  "User 1"
  {
    "auth"     "steam"
    "identity" "STEAM_0:1:12345678"
    "group"    "Full Admin"
  }
}
```

## Defining Admin Immunity

An immunity value can be assigned to admins or groups. If an admin with a lower immunity value attempts to target another admin with a higher immunity value, the command will fail. You can define an immunity value by adding the `immunity` key to each admin in `admins.cfg` or directly in `admin_groups.cfg`.

```
Admins
{
  "ZoNiCaL"
  {
    "auth"      "steam"
    "identity"  "STEAM_0:1:12345678"
    "flags"     "z"
    "immunity"  "100"
  }
}
```

A higher immunity value means a higher protection level against administrative actions from other admins with lower immunity.

## Conclusion

Congratulations, you have successfully configured the administrator permissions for your CS:GO server with Sourcemod. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />