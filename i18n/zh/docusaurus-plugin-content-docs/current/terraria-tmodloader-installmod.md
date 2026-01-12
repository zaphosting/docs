---
id: terraria-tmodloader-installmod
title: "Terraria：安装 Mod（tModLoader）"
description: "了解如何轻松安装并激活 Terraria 的 tModLoader Mod，提升你的游戏体验 → 立即了解更多"
sidebar_label: 安装 Mod（tModLoader）
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 通过 tModLoader 安装 Mod

Terraria 的 tModLoader 是一个重要的插件，允许你在 Terraria 服务器上加载 Mod。安装过程非常简单，只需拖放文件并在服务器上做一个小调整，几分钟内就能搞定。


## 在你的电脑上安装 tModLoader

如果你还没安装 tModLoader，可以直接从 Steam 免费下载。只需在 Steam 商店搜索 tModLoader，或者点击以下链接：[Steam 商店中的 tModLoader](https://store.steampowered.com/app/1281930/tModLoader/)

下载并安装完成后，你可以直接从 Steam 启动 tModLoader。

## 在电脑上添加 Mod

进入主菜单后，打开你的 Mod 文件夹，操作步骤是点击 **Mods**，然后点击 **Manage Mods**，接着点击 **Open Mod Folder**：

![](https://screensaver01.zap-hosting.com/index.php/s/KYXqfC3oaFeti3t/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/sPbWCz9KiY6n9dN/preview)

打开的文件夹默认路径是 **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods**，你可以把想要的 Mod 放到这里。
这里以安装 Calamity-Mod 为例。

![](https://screensaver01.zap-hosting.com/index.php/s/bbXjf6JpMKC6jzq/preview)

:::info
Mod 文件必须以 **.tmod** 结尾，否则服务器无法加载！
:::

然后关闭文件夹，游戏里点击 **Back** 返回，再点击 **Mods**：

![](https://screensaver01.zap-hosting.com/index.php/s/95y5k6AfobCJJed/preview)

你会看到刚添加的 Mod，点击 **Disabled** 就能激活它：

![](https://screensaver01.zap-hosting.com/index.php/s/dCbgnKbeWkr2JeY/preview)

点击 **Reload Mods** 让 Mod 生效，然后关闭游戏，准备在服务器上安装 Mod。


## 在服务器上安装 Mod

要在服务器上安装 Mod，你需要通过 FTP 连接到服务器，具体操作请看这里：[通过 FTP 访问](gameserver-ftpaccess.md)

连接后，进入目录：/g******/terraria/mods/，把之前用过的 **.tmod** 文件上传到这里：

![](https://screensaver01.zap-hosting.com/index.php/s/7NtFqes4g9JfQLW/preview)

:::info
如果没有名为 **enabled.json** 的文件，先启动服务器，这个文件就会自动生成。你也可以自己手动创建它。
:::

用 **右键 > 编辑** 打开 **enabled.json**，把你要启用的 Mod 名称写进去，格式如下：

![](https://screensaver01.zap-hosting.com/index.php/s/FECRXyNGsNNwadd/preview)

如果要添加多个 Mod，格式示例如下：

![](https://screensaver01.zap-hosting.com/index.php/s/dtSqazRiH6zBRqD/preview)

:::info
注意每个 Mod 名称后面都要加逗号，最后一个 Mod 名称后面不要加逗号！
:::

关闭 FTP 连接，启动服务器，然后用你从 Steam 下载的 tModLoader 连接服务器。

按 **ESC**，点击 **Settings**，再点 **Mod Configuration**，就能看到服务器加载的 Mod：

<InlineVoucher />