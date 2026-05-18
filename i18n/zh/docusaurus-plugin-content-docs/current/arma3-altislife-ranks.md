---
id: arma3-altislife-ranks
title: "Arma 3：在 Altis Life 服务器中添加等级"
description: "了解如何在 Arma 3 中为玩家分配和管理警察、医护和管理员等等级，提升游戏体验和服务器角色 → 立即了解更多"
sidebar_label: Altis Life 等级
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

在 Arma 3 中，可以给玩家分配不同的等级，包括警察（Cop）、医护（Medic）以及各种管理员等级。  
根据服务器的不同，如果添加了新的阵营或职业，也可能会有其他等级。  
下面你将学习如何在游戏中为警察、医护和管理员分配等级，所有操作都基于数据库中的 **players** 表。

:::info
重要提示：要在数据库中找到玩家的名字，玩家必须至少连接过服务器一次！
:::

<InlineVoucher />

## 打开数据库

首先，你需要进入数据库，路径是左侧菜单中的 **工具** > **数据库**：

![](https://screensaver01.zap-hosting.com/index.php/s/Y8mZZ7JCNqr9zZM/preview)

点击这个蓝色图标登录数据库，左侧也会显示你的数据库登录信息（用户名和密码）：

![](https://screensaver01.zap-hosting.com/index.php/s/3tta9MQ5XcdZk98/preview)

点击按钮后，你会进入 phpMyAdmin，这是你的数据库管理界面。  
在左侧选择你的数据库名称：

![](https://screensaver01.zap-hosting.com/index.php/s/YfTpyoXmArbtBwb/preview)

然后点击 **players** 表：

![](https://screensaver01.zap-hosting.com/index.php/s/A643Ds2LFjFCzba/preview)

找到你想分配等级的玩家名字，点击 **编辑**：

![](https://screensaver01.zap-hosting.com/index.php/s/KrnpZMyeiL8YXAm/preview)

## 分配警察和医护等级

警察等级和医护等级字段就在列表顶部：

![](https://screensaver01.zap-hosting.com/index.php/s/z5KoxwqHf7XMcFd/preview)

你可以通过下拉菜单轻松选择等级，警察等级从 1 到 7，医护等级从 1 到 5。  
等级越高，警察或医护在游戏中的权限越多，比如可用武器和载具也会更多。

![](https://screensaver01.zap-hosting.com/index.php/s/bKr4MHNy5LYnWYr/preview)

## 分配管理员等级（admin level）

管理员等级的设置方法和上面类似，只是字段位置更靠下：

![](https://screensaver01.zap-hosting.com/index.php/s/fc5G93bWkdW7nAj/preview)

同样可以通过下拉菜单选择 5 个不同等级，等级越高，管理员在游戏中的权限越大。

保存修改只需点击右下角的 **执行（GO）** 按钮：

![](https://screensaver01.zap-hosting.com/index.php/s/y85Zwq3J8zM9sFi/preview)

等级保存后，玩家只需重新连接服务器即可生效，无需重启服务器。

<InlineVoucher />