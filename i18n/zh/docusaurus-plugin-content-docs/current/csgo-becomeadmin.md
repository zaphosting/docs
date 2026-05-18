---
id: csgo-becomeadmin
title: "CS:GO：成为管理员"
description: "了解如何为CS:GO服务器分配和管理管理员权限，实现全面控制 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松且全面地管理服务器。作为管理员，你可以直接在游戏内使用Sourcemod提供的所有功能和选项。下面将详细介绍如何为你的服务器分配管理员权限。  
<InlineVoucher />



## 准备工作

要使用管理员权限，首先需要搭建基础环境。CS:GO默认并不支持全面的管理功能，但有专门的框架可以实现，比如Sourcemod。你需要先安装这个框架才能进行配置。如果还没安装，欢迎查看我们针对CS:GO的插件安装指南。



## 定义管理员

添加管理员可以通过 `admins_simple.ini` 或 `admins.cfg` 配置文件完成，这些文件位于 `../csgo/cstrike/addons/sourcemod/configs/` 路径下。对于简单配置，通常使用 `admins_simple.ini` 就够了。在这里你可以通过SteamID定义管理员，并直接分配权限标志。

```ini title="admins_simple.ini（示例）"
"STEAM_0:1:12345678" "z"
"STEAM_0:1:87654321" "bcdefgjk"
```

示例中，第一个管理员通过 `z` 标志获得全部权限，第二个管理员则只获得部分权限。

如果你想使用更高级的配置，比如分组、免疫等级或密码，建议使用 `admins.cfg`。

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

## 定义管理员组

你也可以定义管理员组，这样就能通过组来管理管理员权限，无需为每个管理员单独配置权限。管理员组定义在 `admin_groups.cfg` 文件中，路径同样是 `../csgo/cstrike/addons/sourcemod/configs/`。

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

之后，你可以在 `admins.cfg` 文件中为管理员分配对应的组：

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

## 定义管理员免疫等级

你可以为管理员或管理员组设置免疫等级。如果一个免疫等级较低的管理员试图对免疫等级更高的管理员执行命令，操作将会失败。免疫等级通过在 `admins.cfg` 或 `admin_groups.cfg` 中添加 `immunity` 键来定义。

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

免疫等级越高，管理员受到其他免疫等级较低管理员操作的保护就越强。

## 总结

恭喜你，已经成功用Sourcemod为你的CS:GO服务器配置了管理员权限。如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />