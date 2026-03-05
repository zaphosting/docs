---
id: csgo-becomeadmin
title: "CS:GO：成为管理员"
description: "了解如何分配和管理管理员权限，全面掌控你的CS:GO服务器 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松且全面地管理服务器，拥有完全控制权。作为管理员，你可以直接在游戏内使用游戏提供的所有可用选项和功能。下面将详细介绍为你的服务器分配管理员权限所需的所有步骤。  
<InlineVoucher />

## 准备工作
要使用管理员权限，首先需要搭建基础环境。默认情况下，CS:GO 并不提供完整的管理系统。不过，有专门的框架可以实现，比如 CounterStrikeSharp。你需要先安装该框架进行配置。如果还没安装，可以参考我们的[插件安装指南](csgo-plugins)。

## 定义管理员

添加管理员通过 `admins.json` 配置文件完成，路径在 `../CS:GO/game/csgo/addons/CounterStrikeShap/addons/configs/`。要声明一个新管理员，需要创建一个新条目，包含名字、身份标识（identity）和权限标志（flags）。名字可以随意填写，只作为占位符/标识使用。身份标识必须填写对应Steam账号的SteamID。权限标志根据需求定义。

```js title="admins.json（示例）"
{
  "User 1": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"]
  },
  "User 2": {
    "identity": "STEAM_0:1:1",
    "flags": ["@css/generic"]
  }
}
```

## 定义管理员组
你也可以定义管理员组，通过对应的组来赋予管理员权限。这样就不用为每个管理员单独配置权限。管理员组定义在 `admin_groups.json` 配置文件中，路径同样是 `../CS:GO/game/csgo/addons/CounterStrikeShap/addons/configs/`。

```js title="admin_groups.json"
"#css/simple-admin": {
  "flags": [
    "@css/generic",
    "@css/reservation",
    "@css/ban",
    "@css/slay",
  ]
}
```

## 定义管理员免疫等级
你可以给管理员设置免疫值。如果一个管理员或玩家的免疫值低于另一个管理员或玩家，针对后者的命令将会失败。通过在 `configs/admins.json` 中为每个管理员添加 `immunity` 键来定义免疫值。

```json
{
  "ZoNiCaL": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"],
    "immunity": 100
  }
}
```
:::info
免疫检查并非由 CounterStrikeSharp 自动执行，具体由各个插件负责处理和管理免疫逻辑。
:::

## 总结

恭喜你，管理员权限配置完成！如果有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />