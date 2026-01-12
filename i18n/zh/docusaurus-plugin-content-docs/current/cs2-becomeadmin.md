---
id: cs2-becomeadmin
title: "CS2：成为管理员"
description: "了解如何分配和管理管理员权限，全面掌控你的CS2服务器 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松且全面地管理服务器。作为管理员，你可以直接在游戏内使用游戏提供的所有可用选项和功能。下面将详细介绍为你的服务器分配管理员权限所需的所有步骤。  
<InlineVoucher />

## 准备工作
要使用管理员权限，首先需要搭建基础环境。CS2默认不支持全面的管理功能，但有专门的框架可以实现，比如 CounterStrikeSharp。你需要先安装这个框架才能进行配置。如果还没装，欢迎查看我们的[插件安装指南](cs2-plugins)。

## 定义管理员

添加管理员通过 `admins.json` 配置文件完成，路径在 `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`。要声明一个新管理员，需要创建一个新条目，包含名字、身份标识（identity）和权限标志（flags）。名字可以随意填写，只作为占位符/标识。身份标识必须填写Steam账号的SteamID。权限标志根据需求定义。

```js title="admins.json (示例)"
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
你也可以定义管理员组，通过组来统一管理管理员权限，这样就不用给每个管理员单独配置权限。管理员组定义在 `admin_groups.json` 配置文件中，路径同样是 `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`。

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

## 定义管理员免疫值
管理员可以被赋予免疫值。如果一个管理员或玩家的免疫值低于另一个管理员或玩家，针对后者的命令将会失败。你可以在 `configs/admins.json` 中为每个管理员添加 `immunity` 键来定义免疫值。

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
免疫值检查不是由 CounterStrikeSharp 自动执行的，具体的免疫管理需要由各个插件自行实现。
:::

## 总结

恭喜你，管理员权限配置完成！如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />