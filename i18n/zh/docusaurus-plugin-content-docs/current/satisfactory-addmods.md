---
id: satisfactory-addmods
title: "Satisfactory：安装 Mods"
description: "了解如何安全管理并安装 Satisfactory 服务器的 Mods，同时保护你的存档 → 立即了解更多"
sidebar_label: 安装 Mods
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::danger
**重要提示**

Mods 目前无法使用！
:::

:::info
**注意**

Mods 并非开发者**官方支持**，但被容忍！

最糟情况下，安装 Mods 可能会破坏存档，导致因更新而暂时无法游玩，甚至彻底毁坏存档！

安装 Mods **前务必**先备份存档，并且建议定期备份以防万一！
:::

<InlineVoucher />

## 在服务器上安装 Modded Satisfactory

要在服务器上安装 Mods，首先必须订购 Modded Satisfactory 服务器：https://zap-hosting.com/en/satisfactory-server-hosting/
如果你已经租用了 Satisfactory 服务器，借助云系统可以随时更换游戏，具体操作请参考[游戏切换](gameserver-gameswitch.md)。

## 安装 Mod 管理器

“SatisfactoryModManager” 工具让 Mods 的管理和安装变得超简单，只需几次点击即可完成。
该工具支持 Windows 和 Linux，下载地址：https://github.com/satisfactorymodding/SatisfactoryModManager/releases

页面上列出了所有版本，通常建议使用最新版本，也就是列表顶部的第一个。
在“Assets”下找到对应操作系统（Windows 或 Linux）的文件，点击即可自动下载，或者根据浏览器设置确认下载。

![](https://screensaver01.zap-hosting.com/index.php/s/e7q5qCBP7D4ZL5g/preview)

下载完成后，运行文件并按照提示安装 Mod 管理器，安装时选择适合你的选项。

## 安装 Mods

客户端（所有玩家！）和服务器上必须安装完全相同的 Mods，才能保证连接正常且不崩溃。
第一步是在客户端编译并安装 Mods，然后再传输到服务器。

:::info
**警告**

并非所有 Mods 都支持多人游戏！

如果 Mod 支持多人游戏，通常会在 Mod 描述中明确说明。

注意：即使标明支持多人游戏，也不保证绝对兼容！
:::

### 客户端

Mods 会保存在不同的配置文件中，这样你可以在测试世界尝试其他 Mods，并能一键切换回常用 Mods。
先选择一个配置文件，或者新建一个，如下图所示。

![](https://screensaver01.zap-hosting.com/index.php/s/EMFsKnrsowZAxJE/preview)

先将筛选器设置为“Compatible”，只显示当前版本兼容的 Mods。

![](https://screensaver01.zap-hosting.com/index.php/s/jg82aG3ketFxesD/preview)

确认 Mod 支持多人游戏后，点击下载图标即可安装 Mods。

![](https://screensaver01.zap-hosting.com/index.php/s/CH2pBzS8iXxEpRz/preview)

### 服务器

客户端安装好所有想要的 Mods 并确认兼容多人游戏后，就可以安装到服务器上了。
为避免传输时出现问题，请务必先停止服务器！

然后通过 FTP 连接到你的服务器，准备上传 Mods。
关于 FTP 连接的详细说明请看[通过 FTP 访问](gameserver-ftpaccess.md)。
连接成功后，打开路径：`/gXXXX/modded-satisfactory/FactoryGame/Mods`

接下来打开你电脑上 Satisfactory 的本地文件夹。
Steam 和 Epic Games 的路径略有不同：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
如果你是通过 Steam 安装的 Satisfactory，可以直接通过 Steam 客户端打开文件夹：

![](https://screensaver01.zap-hosting.com/index.php/s/ryEKHqEQFDBkkME/preview)

</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Epic Games 没有直接打开安装目录的按钮，需要手动打开。
打开资源管理器，定位到你安装 Epic Games 的文件夹。
通常路径是：`C:\Program Files\Epic Games\SatisfactoryEarlyAccess`

</TabItem>
</Tabs>

客户端通过 Mod 管理器安装的 Mods 需要通过 FTP 上传。
依次打开文件夹：`FactoryGame -> Mods`。

按住 CTRL 键点击，选择除 SML 文件夹外的所有文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/jCNjLHiF3JRgB24/preview)

将选中的文件夹拖拽到 FTP 中之前打开的 Mods 文件夹里。

## 启动服务器

上传完 Mods 后，直接通过网页面板启动服务器即可。
服务器现在应该可以正常加入，更多详情请看[连接服务器](satisfactory-connect.md)指南。

<InlineVoucher />