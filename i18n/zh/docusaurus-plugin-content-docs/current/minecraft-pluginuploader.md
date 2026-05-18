---
id: minecraft-pluginuploader
title: "Minecraft：使用 ZAP-Hosting 插件上传器管理服务器"
description: "轻松管理你的 Minecraft Spigot 或 Bukkit 服务器插件，提升游戏体验 → 立即了解更多"
sidebar_label: 插件上传器
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 插件上传器

在服务器概览中点击你的 Minecraft 服务器。然后选择位于“设置”子菜单中的“插件”标签。

:::info
确保你当前的游戏类型是 Spigot 或 Bukkit。插件上传器仅在这两种类型下可用。
:::

## 安装/上传插件

你可以通过两种方式在 Minecraft 服务器上安装插件。

- 从我们预设的插件列表中安装（如果有提供）
- 使用拖放功能上传你自己的插件

### 列表中的插件

从“All plugins”列表中选择你想要的插件，点击绿色的“安装”按钮。根据插件大小，安装可能需要一点时间。

![](https://screensaver01.zap-hosting.com/index.php/s/dxrtY8pQwmtfEP9/preview)

### 上传你自己的插件

将你想上传的插件 .jar 文件拖入图片中标记的区域。你也可以同时拖入多个插件进行安装。

![](https://screensaver01.zap-hosting.com/index.php/s/fM2a4AeyspaQzYd/preview)

拖入插件后，上传到服务器需要一点时间。

要启用插件，你需要通过游戏服务器控制台执行 `/rl` 或 `/reload` 命令重载服务器（或者重启整个服务器）。

:::info
极少数情况下，服务器需要重启才能确保插件正常运行。
:::


## 卸载插件

![](https://screensaver01.zap-hosting.com/index.php/s/dKaeJr8M3jzgMBS/preview)

要卸载插件，点击对应条目旁边的红色垃圾桶图标。

## 禁用插件

点击已安装插件后面的绿色锁形按钮。如果按钮颜色从绿色变为橙色，说明插件已被禁用。反之，点击按钮可重新启用插件。禁用后插件文件仍保留在服务器上，但游戏服务器不会加载它。

:::info
禁用插件后，需通过游戏服务器控制台或游戏内执行 `/rl` 或 `/reload` 命令重载服务器，才能生效。
:::

## 常见问题

**我的插件无法通过“拖放”区域上传。**

建议解决方案：

- 你的插件可能超过 5MB，无法通过网页界面上传。建议使用 FTP 客户端上传。
- FTP 权限可能有问题。解决方法是在网页界面点击 FTP 浏览器标签，然后点击“重置 FTP 权限”按钮。之后应该可以正常上传插件。
- 你的插件可能无效，缺少有效的 plugin.yml 文件。此时建议使用 FTP 客户端上传。
- 有时插件列表未刷新，尝试按 F5 或刷新页面。

### 我的插件无法删除。

:::info
遇到这种情况，请联系支持团队。
:::

### 我的插件无法禁用/启用。

建议解决方案：

- 确认插件是否仍在服务器上。点击列表边缘的刷新按钮，重新同步服务器上的插件列表。列表中只会显示实际存在的插件。

### “所有插件”列表中缺少某些插件。

建议解决方案：

- 可能当前游戏服务器版本没有对应的插件版本。你可以点击蓝色按钮“插件缺失？”来请求添加插件。

![](https://screensaver01.zap-hosting.com/index.php/s/DeMjH2s74geaLPq/preview)

### 预设列表中的卸载/安装按钮似乎不起作用。

建议解决方案：

- 刷新页面通常可以解决此问题。

### 显示了服务器上根本不存在的插件。

建议解决方案：

- 你可以点击卸载按钮删除该插件条目。
- 或者尝试点击同步按钮刷新列表。

<InlineVoucher />