---
id: fivem-esx-disableinventory
title: "FiveM：禁用默认背包（F2）"
description: "了解如何禁用 ESX 中的默认背包，打造专属你的服务器体验 → 立即了解"
sidebar_label: 关闭背包功能（F2）
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning 归档指南
本文档已归档。文档归档通常是因为内容不再适用、错误或过时。归档原因如下：

**原因**：该实现方法适用于旧版 ESX。当前 ESX 版本结构已更改，无法使用此方法。 
::::

<InlineVoucher />

## 连接 FTP

在禁用背包功能之前，必须先完成[FTP 访问设置](gameserver-ftpaccess.md)。

设置完成后，连接并打开服务器文件夹：

![](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## 进行修改

接着打开路径 `server-data/resources/[esx]`，这里会看到一个 es_extended 文件夹：

![](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

进入该文件夹，打开 `config.lua` 文件。

用文本编辑器打开后，找到以下代码：

```Lua
Config.EnableDefaultInventory   = true -- 显示默认背包（F2）
```

将其替换为：

```Lua
Config.EnableDefaultInventory   = false
```


保存文件并重启服务器，加入服务器后就无法再打开默认背包了。

<InlineVoucher />