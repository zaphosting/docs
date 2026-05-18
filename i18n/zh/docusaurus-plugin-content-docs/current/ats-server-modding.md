---
id: ats-server-modding
title: "ATS：在你的 ATS 服务器上安装 Mods/DLC"
description: "了解如何通过 Mods 和 DLCs 来增强你的 American Truck Simulator 体验，适用于客户端和服务器游戏 → 立即了解更多"
sidebar_label: 安装 Mods/DLCs
services:
  - gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

American Truck Simulator 原生支持通过 Steam 创意工坊进行 Mod 制作，允许你为游戏和服务器添加各种 Mods，以及购买的游戏 DLC。在本指南中，我们将介绍如何先在客户端安装 Mods，然后将其应用到你的 ATS 服务器上。

<InlineVoucher />

## 添加 Mods & DLCs

首先，你需要找到并选择想要使用的 Mods 和 DLCs。你可以在游戏内通过主菜单中的 **Mod 管理器** 和 **DLC 浏览器** 选项来完成。

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

你可以通过主菜单的 **Mod 管理器** 访问 Mods，这里可以方便地通过 Steam 创意工坊查找 Mods。

安装好 Mods 后，确保使用每个 Mod 旁边的箭头将它们移动到 **激活 Mods** 列表中。

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

最后，确认更改并进入游戏，选择单人模式。

### DLCs

你可以通过主菜单的 **DLC 浏览器** 访问你账户中已购买的 DLC。

在这个页面，你可以浏览当前拥有并已安装在客户端的所有 DLC。

## 导出服务器包

激活 Mods 并进入游戏后，你需要将 Mods 导出为服务器包。为此，你需要打开游戏内的控制台，默认情况下是关闭的。

要启用控制台，打开以下目录下的 `config.cfg` 文件：
```
C:/Users/[你的用户名]/Documents/American Truck Simulator
```

在文件中找到 `uset g_developer "0"` 这一行，将其改为 `uset g_developer "1"` 来启用开发者模式。同样，找到 `uset g_console "0"` 并改为 `uset g_console "1"` 来启用控制台。

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

重启游戏后，你就可以通过以下按键之一打开控制台，具体取决于键盘布局：
```
` 或 ~ 或 \
```

准备好后，在控制台输入以下命令导出服务器包：
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

两个文件将被导出到你的 `Documents/American Truck Simulator` 文件夹，分别是 `server_packages.dat` 和 `server_packages.sii`，它们包含 DLC/Mods 信息，接下来会用到。

## 上传服务器包

导出服务器包后，你需要通过 FTP 将它们上传到你的 ATS 服务器。请参考我们的 [FTP 访问](gameserver-ftpaccess.md) 指南，获取连接服务器的详细帮助。

准备好后，进入服务器上的主根目录 **American Truck Simulator** 文件夹。将两个服务器包文件上传到该目录，如果文件已存在，直接覆盖即可。

![](https://screensaver01.zap-hosting.com/index.php/s/c5cYWL8eQKTzDg9/preview)

:::tip
Mod 使用时，客户端和服务器的 Mods 必须保持同步。也就是说，如果你连接的服务器有你没有的 Mods，游戏会提示你下载缺失的 Mods。
:::

最后，重启你的服务器，Mods 会自动激活并安装。恭喜你，成功在 ATS 服务器上安装了 Mods。

<InlineVoucher />