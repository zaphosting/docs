---
id: ets2-server-modding
title: "ETS2：如何给你的ETS2服务器安装Mods/DLC"
description: "了解如何通过添加Mods和DLC来提升你的Euro Truck Simulator 2体验，享受沉浸式游戏 → 立即了解"
sidebar_label: 安装Mods/DLC
services:
  - gameserver-factorio-ets2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Euro Truck Simulator 2原生支持通过Steam创意工坊进行Mod管理，让你可以为游戏和服务器添加各种Mods，以及购买的游戏DLC。在本指南中，我们将介绍如何先在客户端安装Mods，然后再安装到你的ETS2服务器上。

<InlineVoucher />

## 添加Mods & DLCs

首先，你需要找到并选择想要使用的Mods和DLC。你可以在游戏主菜单中通过**Mod管理器**和**DLC浏览器**选项来完成。

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

你可以通过主菜单中的**Mod管理器**访问Mods，这里可以方便地通过Steam创意工坊查找Mods。

安装好Mods后，确保使用每个Mod旁边的箭头将它们移动到**激活的Mods**列表中。

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

最后，确认更改并进入游戏，选择单人模式。

### DLCs

你可以通过主菜单中的**DLC浏览器**访问你账号中已购买的DLC。

在这个页面，你可以浏览所有你当前拥有并已安装在客户端的DLC。

## 导出服务器包

激活Mods并进入游戏后，你需要将Mods导出为服务器包。为此，你需要打开游戏内的控制台，默认情况下它是关闭的。

要启用控制台，打开以下目录中的`config.cfg`文件：
```
C:/Users/[你的用户名]/Documents/Euro Truck Simulator 2
```

在文件中找到`uset g_developer "0"`这一行，将其改为`uset g_developer "1"`以启用开发者模式。同样，找到`uset g_console "0"`这一行，改为`uset g_console "1"`以启用控制台。

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

重启游戏后，你就可以通过以下按键之一打开控制台，具体取决于你的键盘布局：
```
` 或 ~ 或 \
```

准备好后，在控制台输入以下命令导出服务器包：
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

两个文件将被导出到你的`Documents/Euro Truck Simulator 2`文件夹中，分别是`server_packages.dat`和`server_packages.sii`，它们包含了DLC/Mods的信息，接下来会用到。

## 上传服务器包

导出服务器包后，你需要通过FTP将它们上传到你的ETS2服务器。请参考我们的[FTP访问](gameserver-ftpaccess.md)指南，获取连接服务器的详细帮助。

准备好后，进入服务器上的主根目录**Euro Truck Simulator 2**文件夹。将两个服务器包文件上传到该文件夹，如果文件已存在，直接覆盖即可。

![](https://screensaver01.zap-hosting.com/index.php/s/9xaDPw7sptsN3FH/preview)

:::tip
Mod使用时，客户端和服务器的Mods必须保持同步。也就是说，如果你连接的服务器有你没有的Mods，游戏会提示你下载缺失的Mods。
:::

最后，重启你的服务器，Mods将自动激活并安装。恭喜你，成功给你的ETS2服务器安装了Mods。

<InlineVoucher />