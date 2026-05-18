---
id: gameserver-database-manage-sqlfiles
title: "游戏服务器：导入或导出 SQL 文件"
description: "了解如何通过 phpMyAdmin 高效管理游戏服务器数据库，导入和导出 SQL 文件 → 立即了解更多"
sidebar_label: 导入/导出 SQL 文件
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你的游戏服务器支持的多款游戏都会使用数据库来存储长期数据并保证正常运行。有些游戏、资源或模组会提供一个 `.sql` 文件，用于将相应的表和数据导入到你的数据库中。导出数据库同样非常有用，比如在不同系统间迁移数据，或者手动备份文件。在本指南中，我们将通过 phpMyAdmin 界面，带你了解如何导入和导出 SQL 文件到你的游戏服务器数据库。

<InlineVoucher />

## 准备工作

首先，你需要通过网页界面访问你的游戏服务器 MySQL 数据库。同时，确保你已经准备好需要导入的 `.sql` 文件。

:::tip
某些 SQL 文件可能会强制使用特定的数据库名，这可能会和你自动分配的 ZAP ID 数据库名冲突，导致错误。

你可以用文本编辑器打开该文件，搜索是否包含 `USE xxx` 或 `CREATE DATABASE` 语句。如果有，建议删除这两条语句后再保存文件，然后再导入。

![](https://screensaver01.zap-hosting.com/index.php/s/DRoDqGngrS7qbQW/preview)
:::

接着，进入 **工具 -> 数据库** 页面，点击蓝色链接按钮打开 phpMyAdmin 界面。使用网页界面提供的账号信息登录。

![](https://screensaver01.zap-hosting.com/index.php/s/8ix7q4tHmPnyYSy/preview)

想深入了解 phpMyAdmin，推荐阅读我们的[数据库访问](gameserver-databases-pma.md)指南，里面有更详细的界面介绍。

## 导入 SQL 文件

登录 phpMyAdmin 后，选择主数据库，通常是你的 ZAP ID。在顶部导航栏找到 **导入** 选项。

在该页面，点击 **浏览...** 按钮打开文件浏览窗口，找到你想导入的 SQL 文件并打开。

:::note
SQL 文件最大支持 2MB。如果文件过大，建议使用 SQL 分割工具，比如 [Pinetools SQL-Splitter](https://pinetools.com/split-files)，将文件拆分成更小的部分，然后分别导入。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/TgZZBaSJJmXraZc/preview)

你也可以根据需要调整其他设置。大多数情况下，默认值已经足够，直接往下滚动点击 **导入** 按钮即可。

导入成功后，你会在数据库中看到新表、数据等变化，说明导入已生效。

## 导出 SQL 文件

导出数据库同样是个重要功能，方便你轻松迁移数据库或备份数据。再次选择主数据库（你的 ZAP ID），在顶部导航栏找到 **导出** 选项。

默认选择的是 **快速** 导出方式，会自动导出所有表和数据。如果你想自定义导出哪些表和数据，选择 **自定义**，然后调整相关参数。准备好后，点击 **导出** 按钮，即可将 SQL 文件下载到本地。

![](https://screensaver01.zap-hosting.com/index.php/s/Qa2HakWpYGpfzfA/preview)

## 总结

你已经成功将数据库导出为 SQL 文件，方便以后轻松导入。若有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />