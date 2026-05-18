---
id: fivem-esx-spawnpoints
title: "FiveM：使用 ESX 管理和自定义出生点"
description: "了解如何在 ESX 框架中自定义和扩展出生点，提升游戏体验 → 立即了解更多"
sidebar_label: 出生点
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

想要更改默认出生点或添加更多出生点？**ESX 框架**中的出生点管理定义在 `es_extended` 里。下面会教你如何自定义这些出生点。

<InlineVoucher />

## 配置

出生点通过 `es_extended` 的 `main.lua` 配置文件进行调整（路径：../es_extended/shared/config/）。你可以通过 FTP 编辑这个文件。如果你还不会用 FTP，建议先看看我们的 [FTP 访问指南](gameserver-ftpaccess.md)。

默认的出生点配置如下：

```
Config.DefaultSpawns = { -- 如果你想要更多出生点并随机选择，取消注释下面的代码或添加更多位置
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
}
```

假设你想添加更多出生点，只需在配置文件里添加一条记录：

```
Config.DefaultSpawns = { -- 如果你想要更多出生点并随机选择，取消注释下面的代码或添加更多位置
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
    --{x = 766.5239, y = -112.0400, z = 30.2922, heading = 1.0} // 新出生点
}
```

:::info 获取坐标
你需要一个合适的工具来获取当前坐标。网上有很多选择，挑一个你觉得顺手的就好。:)
:::

## 总结

按照这个方法，你已经成功修改了现有出生点或添加了新的出生点。如果还有疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />