---
id: fivem-esx-changemoneyicon
title: "FiveM：更改货币图标"
description: "了解如何自定义服务器的货币图标，打造专属游戏体验 → 立即了解更多"
sidebar_label: 更改货币图标
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archived Guide
本文档已归档。文档归档通常是因为内容不再适用、错误或过时。归档原因如下：

**原因**：该实现方法适用于过时的 ESX 版本。当前 ESX 版本结构已更改，无法使用此方法。 
::::



<InlineVoucher />

## 连接 FTP

首先需要设置好[FTP 访问权限](gameserver-ftpaccess.md)。

设置完成后，就可以连接并打开服务器文件夹了。

![](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


这里我们打开 `server-data` 文件夹中的 `server.cfg` 文件。

## 编辑配置

现在，在 `start essentialmode` 这一行上方添加以下内容：

```Lua
set es_moneyIcon "$"
```

这里可以将 `$` 替换成你想要的货币图标。

![](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


保存文件并重启服务器后，游戏内的货币图标就会被更改。

<InlineVoucher />