---
id: vserver-linux-gs-interface
title: "VPS：游戏服务器/TS3 界面"
description: "了解如何通过自动化界面，在 Linux VPS 上轻松搭建游戏和语音服务器，无需任何基础 → 立即了解更多"
sidebar_label: GS/TS3 界面
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

如果游戏服务器产品不符合你的口味或期望，或者你需要以其他方式使用服务，VPS 通常是更好的选择。但你经常会遇到一个问题：并非所有服务都自动化或预装。像游戏服务器、Teamspeak 3 服务器和音乐机器人这类服务，都需要你自己动手搭建。

为了解决这个问题，我们为基于 Linux 的 VPS 或独立服务器开发了一个超实用的解决方案——所谓的游戏服务器/Teamspeak 3 服务器界面（GS/TS3 界面）！

<YouTube videoId="V6qyQFPp_Ls" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/frWNEMQqcMxzRcM/preview" title="零基础用 Linux VPS 搭建游戏服务器！" description="看视频更容易理解？我们懂你！快来看看我们的教程视频，帮你快速上手。不管你是赶时间还是喜欢边看边学，这里都有你想要的！"/>

<InlineVoucher />

## 使用场景

通过用户友好的 GS/TS3 界面，你可以在基于 Linux 的 VPS 或独立服务器上，只需几次点击就安装 Teamspeak 3 或其他精选游戏服务器服务。整个安装过程无需任何基础知识。所有必需的软件包、服务器文件和实际安装都完全自动化，帮你省时省力。

:::warning
GS/TS3 界面功能支持以下操作系统：

- Debian：10、11、12
- Ubuntu：20.04、22.04

(*) 我们正在努力尽快支持更多及更新的操作系统和版本。
:::

## 支持的服务 / 游戏

GS/TS3 界面支持游戏服务器、语音服务器和音乐机器人搭建。我们大部分游戏服务器产品中提供的游戏，也都能通过 GS/TS3 界面安装。这适用于所有我们在 Linux 下积极运营的游戏。遗憾的是，所有只能在 Windows 系统运行的游戏无法通过此界面安装，只能手动安装，前提是游戏支持 Linux 服务器版本。

| 服务类型    | 支持情况 |
| ----------- | ---- |
| 游戏服务器  | ✔️    |
| 语音服务器  | ✔️    |
| 音乐机器人（Sinuxbot） | ✔️    |

## 安装与配置

要安装 GS/TS3 界面，请进入你的产品服务器管理中的导航面板 **设置**，点击子菜单 **游戏服务器 / TS3**。

首次打开 GS/TS3 界面时，会进入用户友好的安装向导。要设置界面并将其与你的服务器关联，首先需要创建一个 SSH 密钥。这个密钥用于网站与服务器之间建立安全连接，从而可以通过界面直接搭建、管理和控制游戏服务器、Teamspeak 3 服务器等服务。

进入后，点击 **生成 SSH 密钥** 按钮，然后点击 **添加密钥** 按钮将密钥添加到服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/teZ87eGKRm6iJRa/preview)

点击 **添加密钥** 后，SSH 密钥会存储到你的服务器上，GS/TS3 界面就能添加到你的服务器了。

![](https://screensaver01.zap-hosting.com/index.php/s/QqtCFmC3oxPErD9/preview)

:::info
**提示：** 如果 SSH 密钥没有立即识别，重启服务器并刷新页面通常能解决问题。
:::

安装过程中你可以查看当前进度。请注意，界面及其软件包的安装和配置可能需要一些时间，通常在 5 到 15 分钟之间。

![](https://screensaver01.zap-hosting.com/index.php/s/xkWQBEp74BqQdM6/preview)

:::info
**注意**：请勿在界面完全安装完成前继续操作。安装成功的标志是进度条消失，且每个必需软件包状态由“缺失”变为“已安装”。
:::

### 创建游戏服务器

GS/TS3 界面安装完成后，你就可以开始搭建服务了。游戏服务器的安装通过 **游戏服务器** 分类下的 **安装游戏服务器** 按钮完成。

![](https://screensaver01.zap-hosting.com/index.php/s/4TD3w3dpXrFYNcb/preview)

下一步，你可以选择游戏服务器的 IP 地址（如果你的服务器有多个 IP），还可以自定义端口、槽位数和内存加速。

![](https://screensaver01.zap-hosting.com/index.php/s/icfwifbTrmwZQ6q/preview)

确认所有信息正确且符合你的需求后，点击“立即安装游戏服务器”开始安装。游戏服务器会根据你的配置搭建完成，随后你就能开始使用了。你可以在列表中查看并访问新建的游戏服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/MTRmMwc9GyMFW5A/preview)

现在你进入了游戏服务器的管理界面。在 **设置** 导航栏的 **游戏** 里，可以选择并安装你想要的游戏。

![](https://screensaver01.zap-hosting.com/index.php/s/xqxLAAR6jbdmM3Z/preview)

这里列出了所有可安装的游戏。示例中安装的是 Minecraft: Paperspigot 服务器（游戏包）。选中你想要的游戏，点击绿色按钮开始安装。

![](https://screensaver01.zap-hosting.com/index.php/s/MtrsxLoYxssJLBt/preview)

会显示所有必要条件的概览。如果条件都满足，点击 **接受并安装** 继续。

![](https://screensaver01.zap-hosting.com/index.php/s/GjijXaM3z9EgnYG/preview)

游戏安装时间因游戏而异，进度会显示在状态栏。安装完成后，你就可以启动游戏服务器并在游戏中连接了！

### 创建语音服务器

安装 **语音服务器（Teamspeak 3 服务器）** 的流程与游戏服务器类似。先点击“游戏服务器 / TS3”菜单，在这里找到 **安装语音服务器** 选项，点击即可开始 Teamspeak 3 服务器的安装。

![](https://screensaver01.zap-hosting.com/index.php/s/xct5DPC57wWeABG/preview)

下一步，你可以设置 Teamspeak 3 服务器的 IP 地址、端口和槽位数。填写完毕后，点击 **立即安装语音服务器** 完成安装。

![](https://screensaver01.zap-hosting.com/index.php/s/2XnJrDEDyLwBsHk/preview)

确认信息无误后，点击 **立即安装 Teamspeak 3/5 服务器** 开始安装。安装完成后，你可以在 **语音服务器概览** 中查看并点击已安装的 Teamspeak 3 服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/bgpZJgPjz7Ybpke/preview)

:::info
**注意**：这里指的是将要安装 Teamspeak 3 服务器的实例。
:::

进入已安装的 Teamspeak 3 服务器实例界面后，点击 **启动** 按钮即可启动服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/G96RPrjEdm96CCj/preview)

点击菜单项 **虚拟服务器**，这里会清晰列出该实例下所有安装的 Teamspeak 3 服务器。点击“眼睛”图标即可进入对应服务器的管理界面。

![](https://screensaver01.zap-hosting.com/index.php/s/awJdyTgJPSia5B2/preview)

在 Teamspeak 3 服务器界面，你可以找到所有必要的信息和设置选项，个性化管理你的服务器。例如，在“授权密钥”标签页，你可以创建一个令牌，赋予自己服务器管理员权限，全面掌控用户管理和服务器访问。

在“设置”菜单里，你还能进一步定制服务器，比如修改服务器名称、设置访问密码，或者添加用户进入服务器时看到的欢迎信息。

:::caution 关于 Teamspeak 许可证
默认情况下，Teamspeak 3 服务器没有安装许可证，这意味着你只能使用最多 32 个槽位的服务器。如果你想激活更多槽位或额外功能，可以从 Teamspeak 购买相应许可证。
:::

## 总结

恭喜你，成功安装并配置了我们的 GS/TS3 界面！如果你还有任何问题或遇到困难，随时联系在线客服，我们每天都在这里帮你！

<InlineVoucher />