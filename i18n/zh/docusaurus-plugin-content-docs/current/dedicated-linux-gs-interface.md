---
id: dedicated-linux-gs-interface
title: "独立服务器：游戏服务器/TS3界面"
description: "了解如何轻松在Linux VPS或独立服务器上搭建游戏服务器、语音服务器和音乐机器人 → 立即了解更多"
sidebar_label: GS/TS3 界面
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

如果游戏服务器产品不符合你的口味或期望，或者你需要以其他方式使用你的服务，使用VPS或独立服务器通常是更好的选择。不过，你经常会遇到这样的问题：并非所有服务都是自动化或预装的。像游戏服务器、Teamspeak 3服务器和音乐机器人这类服务需要你自己动手搭建。

为了解决这个问题，我们为基于Linux的VPS或独立服务器开发了一个实用的解决方案——所谓的游戏服务器/Teamspeak 3服务器界面（GS/TS3界面）！



## 使用场景

借助用户友好的GS/TS3界面，你可以只需几次点击，就在你的Linux VPS或独立服务器上安装Teamspeak 3或其他精选游戏服务器服务。安装过程无需任何先验知识。所有必需的软件包、服务器文件及实际安装过程均全自动完成，帮你节省大量时间和精力。

:::warning
GS/TS3界面功能支持以下操作系统：

- Debian：10、11、12
- Ubuntu：20.04、22.04

(*) 我们正在努力尽快支持更多及更新的操作系统和版本。
:::



## 支持的服务与游戏

GS/TS3界面支持游戏服务器、语音服务器和音乐机器人的搭建。我们大部分游戏服务器产品中提供的游戏，也都可以通过GS/TS3界面选项安装。这适用于所有我们在Linux环境下积极运营的游戏。遗憾的是，所有只能在Windows操作系统上运行的游戏无法通过此界面安装。那种情况下，只能手动安装，前提是游戏支持Linux服务器版本。

| 服务         | 支持情况 |
| ----------- | -------- |
| 游戏服务器   | ✔️       |
| 语音服务器  | ✔️       |
| 音乐机器人（Sinusbot） | ✔️       |



## 安装与配置

要安装GS/TS3界面，你需要进入产品服务器管理中的导航面板 **设置**，然后点击子菜单 **游戏服务器 / TS3**。

首次打开GS/TS3界面时，会自动跳转到用户友好的安装向导。要设置界面并将其与服务器关联，你必须选择一个支持的操作系统，并填写root用户的登录信息。

![](https://screensaver01.zap-hosting.com/index.php/s/dLeLDKdmdiZ74CP/download)



服务器和网站成功关联后，即可创建GS/TS3界面。



![](https://screensaver01.zap-hosting.com/index.php/s/FK9mP3BgzrPmH7S/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/JL7jyTKbCEx8FBZ/preview)

:::info
**注意**：请勿在界面完全安装完成前继续操作。你可以通过进度条消失且每个必需软件包状态由“缺失”变为“已安装”来判断安装是否成功。
:::



### 创建游戏服务器

前提是GS/TS3界面创建和安装已成功完成，你现在可以开始搭建服务。游戏服务器的安装通过 **游戏服务器** 分类下的 **安装游戏服务器** 按钮完成。

![](https://screensaver01.zap-hosting.com/index.php/s/QinM7KtFwcAp5pE/preview)



下一步，你可以选择想要的游戏服务器IP地址（如果你的服务器有多个IP）。你还可以单独设置端口、槽位数量和内存加速。

![](https://screensaver01.zap-hosting.com/index.php/s/cqWwZbXT77okeDa/preview)

确保所有信息正确且符合你的需求。设置完成后，点击“立即安装游戏服务器”开始安装。游戏服务器将根据你的配置搭建完成，你很快就能开始使用。你可以在列表中查看并访问新建的游戏服务器。



![](https://screensaver01.zap-hosting.com/index.php/s/9WkJnxzkaEHmri7/preview)



你现在进入了游戏服务器的管理界面。在这里，你可以在 **设置** 导航面板的 **游戏** 选项中选择并安装你想要的游戏。

![](https://screensaver01.zap-hosting.com/index.php/s/6pxEbWttos6HAYt/preview)

这里列出了所有可安装的游戏。在本例中，将安装Minecraft: Paperspigot游戏服务器（包）。选择你想要的游戏，点击绿色按钮开始安装。

![](https://screensaver01.zap-hosting.com/index.php/s/gazW2itexCJd7cY/preview)

系统会显示所有必要条件的概览。如果条件都满足，你可以点击 **接受并安装** 按钮确认。

![](https://screensaver01.zap-hosting.com/index.php/s/jeQC7dp6zpe3ny4/preview)

游戏搭建可能需要一些时间，进度会在状态栏显示。完成后，你就可以启动游戏服务器并在游戏中连接了！



### 创建语音服务器

安装**语音服务器（Teamspeak 3服务器）**的流程与游戏服务器类似。你需要再次点击“游戏服务器 / TS3”。在该部分，你会看到 **安装语音服务器** 选项，点击即可启动Teamspeak 3服务器的安装流程。

![](https://screensaver01.zap-hosting.com/index.php/s/mi8p3NTfwBBExsD/preview)

下一步，你可以设置Teamspeak 3服务器的IP地址、端口和可用槽位数等参数。填写完毕后，点击 **立即安装语音服务器** 完成安装。

![](https://screensaver01.zap-hosting.com/index.php/s/ajfzxsJfCFdfBac/preview)

确保所有信息正确且符合你的需求。设置完成后，点击 **立即安装Teamspeak 3/5服务器** 启动安装。你可以在 **语音服务器概览** 中查看并点击已安装的Teamspeak 3服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/YaEYorRG7TJGpmB/preview)

:::info
**注意**：这里指的是将要安装Teamspeak 3服务器的实例。
:::

你现在进入了已安装Teamspeak 3服务器实例的界面。点击 **启动** 按钮即可启动该实例。

![](https://screensaver01.zap-hosting.com/index.php/s/SmqHB24ozJimBY9/preview)


接着点击菜单项 **虚拟服务器**。这里会清晰列出该实例上所有已安装的Teamspeak 3服务器。要打开某个Teamspeak 3服务器的界面，只需点击“眼睛”图标。

![](https://screensaver01.zap-hosting.com/index.php/s/E3ZqxC9rPjWwC5F/preview)

在Teamspeak 3服务器界面，你会找到所有必要的信息和设置选项，方便你个性化管理服务器。例如，在“授权密钥”标签页，你可以创建一个令牌，赋予自己服务器管理员权限，从而完全掌控用户管理和服务器访问。

在“设置”菜单项下，你还有更多自定义服务器的选项。比如，你可以修改服务器名称，设置访问密码，或者存储一条用户进入服务器时看到的欢迎信息。

:::caution 关于Teamspeak许可证
默认情况下，Teamspeak 3服务器没有安装许可证。这意味着你只能使用最多32个槽位的Teamspeak 3服务器。如果你想激活更多槽位或额外功能，可以从Teamspeak购买相应许可证。
:::





## 总结
恭喜你，已成功安装并配置我们的GS/TS3界面！如果你有任何其他问题或遇到困难，欢迎随时联系我们的支持团队，我们每天都在线为你服务！