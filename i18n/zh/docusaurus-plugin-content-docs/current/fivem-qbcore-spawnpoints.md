---
id: fivem-qbcore-spawnpoints
title: "FiveM：使用 QbCore 管理和自定义出生点"
description: "了解如何在 QBCore 框架中自定义和添加出生点，提升游戏体验 → 立即了解更多"
sidebar_label: 出生点
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

想要更改默认出生点或添加额外的出生点？在 **QBCore 框架** 中，出生点的管理是通过 `qb-spawn` 资源来定义的。下面将为你讲解如何自定义这些出生点。

<InlineVoucher />

## 配置

出生点通过 `qb-spawn` 资源中的 `config.lua` 配置文件进行调整。你可以通过 FTP 编辑这个文件。如果你还不熟悉 FTP，建议先看看我们的 [FTP 访问](gameserver-ftpaccess.md) 指南。

出生点的默认配置如下：

```
QB.Spawns = {
    ["legion"] = { -- 表的索引
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- 玩家出生位置
        location = "legion", -- 这是 JavaScript 用来识别你选择的出生点
        label = "Legion Square", -- 玩家在菜单中看到的名称
    },

    ["policedp"] = {
        coords = vector4(428.23, -984.28, 29.76, 3.5),
        location = "policedp",
        label = "Police Department",
    },

    ["paleto"] = {
        coords = vector4(80.35, 6424.12, 31.67, 45.5),
        location = "paleto",
        label = "Paleto Bay",
    },

    ["motel"] = {
        coords = vector4(327.56, -205.08, 53.08, 163.5),
        location = "motel",
        label = "Motels",
    },
```

假设你想添加更多出生点，那么你需要在配置文件中添加另一条记录：

```
["new_spawn_name"] = { -- 必须唯一
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- 玩家出生的坐标
    location = "new_spawn_name", -- 必须唯一
    label = "New spawn name", -- 这个标签会显示在选择菜单中
},
```

:::info 获取坐标
你需要一个合适的资源来获取当前坐标。网上有很多可选资源，你可以挑一个最适合你的用 :)
:::

最终结果会是这样：

```
    QB.Spawns = {
    
        ["legion"] = { -- 表的索引
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- 玩家出生位置
            location = "legion", -- 这是 JavaScript 用来识别你选择的出生点
            label = "Legion Square", -- 玩家在菜单中看到的名称
        },
    
        ["policedp"] = {
            coords = vector4(428.23, -984.28, 29.76, 3.5),
            location = "policedp",
            label = "Police Department",
        },
    
        ["paleto"] = {
            coords = vector4(80.35, 6424.12, 31.67, 45.5),
            location = "paleto",
            label = "Paleto Bay",
        },
    
        ["motel"] = {
            coords = vector4(327.56, -205.08, 53.08, 163.5),
            location = "motel",
            label = "Motels",
        },
        
        ["new_spawn_name"] = { -- 必须唯一
        coords = vector4(1.1, -1.1, 1.1, 180.0), -- 玩家出生的坐标
        location = "new_spawn_name", -- 必须唯一
        label = "New spawn name", -- 这个标签会显示在选择菜单中
         },
    }
```




## 总结

按照这个方法，你已经成功更改了现有出生点或添加了新的出生点。如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />