---
id: hytale-whitelist
title: "Hytale：白名单设置与管理"
description: "了解如何通过白名单功能管理玩家访问，保护你的 Hytale 服务器 → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
白名单是一项安全和访问控制功能，允许你限制谁能加入你的 Hytale 服务器。启用后，只有明确列在白名单上的玩家才能连接。这对于私人服务器、社区服务器、开发环境或测试阶段特别有用，因为这些场景下访问应仅限于可信玩家。

:::info 早期访问提示

Hytale 于 2026 年 1 月 13 日发布，目前处于早期访问阶段。由于游戏仍在积极开发中，服务器软件、配置文件、模组支持和安装流程可能会持续变化。

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/mMjZWsYdmbnwQkQ/preview)



<InlineVoucher />

## 启用白名单

白名单可以通过服务器控制台或游戏内直接启用。执行这些命令前，请确保你拥有所需权限，比如管理员权限。

启用白名单，运行以下命令：

```
/whitelist enable
```



启用后，任何不在白名单上的玩家尝试加入服务器时都会被拒绝。要确认白名单当前是否启用，使用：

```
/whitelist status
```

该命令会返回白名单的当前状态，帮助你确认配置是否生效。



## 关闭白名单

如果你想允许所有玩家再次加入服务器，可以随时关闭白名单。使用以下命令禁用：

```
/whitelist disable
```

关闭白名单后，服务器将不再基于白名单限制访问，所有玩家都能连接。



## 管理白名单

白名单可以在服务器运行时动态管理。使用命令时，无需重启服务器即可随时添加或移除玩家。



### 添加玩家到白名单

要允许某个玩家访问服务器，使用以下命令将其加入白名单：

```
/whitelist add <playername>
```

只要白名单启用，该玩家即可立即加入服务器。



### 从白名单移除玩家

要撤销某玩家的访问权限，使用以下命令将其从白名单中移除：

```
/whitelist remove <playername>
```

移除后，只要白名单处于激活状态，该玩家将无法加入服务器。



### 查看白名单玩家列表

要查看当前所有允许加入服务器的玩家，运行：

```
/whitelist list
```

该命令会输出完整的白名单玩家名称列表。



### 清空白名单

如果想一次性移除所有白名单玩家，可以清空白名单：

```
/whitelist clear
```

这会删除所有白名单条目，但不会关闭白名单功能本身。



## 通过文件管理白名单

除了命令外，你还可以直接通过配置文件管理白名单。这种方式适合批量修改或在启动服务器前准备白名单。负责该配置的文件名为 `whitelist.json`，位于服务器目录下。

````
{
  "enabled": true,
  "players": [
    "PlayerName1",
    "PlayerName2"
  ]
}
````



## 总结

恭喜你，已成功为你的 Hytale 服务器设置白名单。现在服务器仅限获批玩家加入，帮你更好地掌控、保护隐私，营造更安全的多人游戏环境。

如有更多问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂