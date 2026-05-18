---
id: fivem-esx-disablehud
title: "FiveM：禁用/启用 HUD"
description: "了解如何更新你的 ESX 服务器配置，实现更好的 HUD 管理和服务器性能提升 → 立即了解更多"
sidebar_label: 禁用 HUD
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning 已归档指南
本文档已归档。文档会在不再适用、内容错误或过时时被归档。归档原因如下：

**原因**：该实现方法针对的是过时的 ESX 版本。当前 ESX 版本结构已更改，无法使用此方法。 
::::



<InlineVoucher />

## 📑 找到并编辑 Config

完成以上操作后，打开 Config 页面，搜索 es_extended。
按下 CTRL + F，输入 es_extended。
这样你就能快速找到它。
我们接下来要修改这些内容。

![](https://screensaver01.zap-hosting.com/index.php/s/FfjdwPMGYgz2k3k/preview)

现在来看一下：Config.EnableHUD。

![](https://screensaver01.zap-hosting.com/index.php/s/F6w582EoXgbPjeC/preview)

将其设置为 false，然后保存文件。

接着打开 Server.cfg。
它也可以在 Config 页面找到。
再次按 STR + F 搜索 es_。
找到 es_ui 这一行，直接整行删除。
然后保存。

完成后，只需重启服务器，就大功告成啦。

<InlineVoucher />