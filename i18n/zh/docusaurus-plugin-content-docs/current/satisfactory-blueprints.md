---
id: satisfactory-blueprints
title: "Satisfactory：管理蓝图（导入/导出）"
description: "了解如何创建、分享和管理自定义蓝图，实现高效的Satisfactory工厂布局 → 立即了解更多"
sidebar_label:  管理蓝图
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Satisfactory 拥有一个自定义蓝图系统，允许玩家创建并与社区成员分享建筑方案。这些蓝图涵盖了从高效工厂布局到精心设计的休息区以及复杂的铁路系统。

你可以通过 Satisfactory Calculator 网站获取大量蓝图。蓝图的导入和导出都非常简单。

<InlineVoucher />

## 管理蓝图

在 Satisfactory 服务器上管理蓝图完全通过 FTP 进行。如果你还不熟悉如何通过 FTP 连接服务器，请先参考我们的[FTP 访问](gameserver-ftpaccess.md)指南，快速上手。

### 导入蓝图
首先，你需要获取想要上传的蓝图文件。这些文件包括一个 `.sbp` 文件，以及可选的 `.sbpcfg` 配置文件。文件可能来自可信的社区资源，或者是从其他游戏实例导出的。

上传前，建议通过服务器管理面板完全关闭服务器，确保上传过程中不会出现文件冲突或内存问题。

接着，使用 FTP 客户端连接服务器。登录后，进入蓝图目录：

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

该目录下必须有一个以当前世界（或会话）名称命名的子文件夹。这个名称对应服务器上保存的 `.sav` 文件名。如果文件夹不存在，需要手动创建，且名称必须与保存文件名完全一致。

准备好正确的子文件夹后，将蓝图文件上传到该文件夹。务必同时上传 `.sbp` 文件和（如果有的话）`.sbpcfg` 文件。上传完成后，重启服务器。服务器重新启动后，上传的蓝图将在游戏内的蓝图设计器界面中可用，方便你正常访问和使用。

### 导出蓝图

从 Satisfactory 服务器导出蓝图，就是将蓝图文件从服务器下载到本地电脑。首先关闭服务器，确保蓝图文件处于稳定且可访问的状态。打开 FTP 客户端并连接服务器，进入目录：

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

找到对应你想导出蓝图的世界/会话的子文件夹。该文件夹内包含每个保存蓝图对应的 `.sbp` 文件和可选的 `.sbpcfg` 文件。

使用 FTP 客户端将所需蓝图文件直接下载到本地电脑。传输完成后，你可以将文件归档、在本地打开，或者导入到其他游戏安装或服务器环境中。如果你打算在其他服务器上复用这些蓝图，导入步骤与上面介绍的完全相同。

## 总结

只要按照文档步骤操作，管理 Satisfactory 服务器上的蓝图非常简单。如果有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />