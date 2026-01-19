---
id: fivem-esx-changerespawnpoint
title: "FiveM：设置重生点"
description: "了解如何在 ESX 中更新救护车重生点，自定义游戏体验并提升服务器管理 → 立即了解更多"
sidebar_label: 更改重生点
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning 已归档指南
本文档已归档。文档归档的原因通常是内容不再相关、错误或已过时。归档原因如下：

**原因**：实现方法基于过时的 ESX 版本。当前 ESX 版本结构已更改，无法使用此方法。 
::::



:::info
必须先安装 ESX
:::

<InlineVoucher />

📔 准备工作

要获取坐标，我们需要一个类似这样的坐标脚本：
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
安装方法参考：[安装资源](fivem-installresources.md)
安装好脚本后，进入游戏内输入 */coords* 
即可获得当前坐标。

📑 编辑配置

拿到坐标后，打开 Config 标签页

按 **CTRL + F** 搜索 **ambulance**
打开对应文件。
向下滚动找到 **Config_RespawnPoint**。

![](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

现在编辑这些坐标，替换成你想要的。
编辑完成后点击保存即可。

![](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
重启服务器后，修改才会生效。
:::

<InlineVoucher />