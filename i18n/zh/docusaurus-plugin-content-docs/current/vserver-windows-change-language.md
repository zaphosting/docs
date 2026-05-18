---
id: vserver-windows-change-language
title: "VPS：管理 Windows 服务器语言"
description: "了解如何自定义你的 Windows 服务器语言设置，实现本地化体验并提升使用便捷性 → 立即了解"
sidebar_label: 添加与管理语言
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Windows 操作系统支持多种语言，本地化程度高，让你轻松使用母语。在本指南中，我们将介绍如何更改 Windows 服务器的语言设置。

:::info
在服务器初始配置时，你可以选择英文或德文版本，系统版本选择时会用 **(EN)** 和 **(DE)** 标签标注。
:::

<InlineVoucher />

## 添加语言包

语言包是 Windows 内置的实用功能，方便你在服务器上管理本地化语言包。

首先通过 RDP 连接到你的 Windows 服务器。如果你需要帮助，请参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

连接后，通过 Windows 搜索栏或按下 Windows 键/图标，在开始菜单搜索栏中搜索 **语言**。

![](https://screensaver01.zap-hosting.com/index.php/s/iwnxdwsYHPy9AMP/preview)

在此页面找到语言部分，点击 **添加语言** 按钮。

![](https://screensaver01.zap-hosting.com/index.php/s/EJxNz66LPBDiE9J/preview)

在菜单中搜索你想安装的语言，选中后点击 **下一步**。在接下来的页面，确保勾选所有选项，如果你想立即启用该语言，别忘了勾选 **设为 Windows 显示语言**。

:::important
要更改整个 Windows 操作系统的语言，确保所选语言支持 **显示语言** 功能。
:::

:::tip
如果你没有看到任何带有 **显示语言** 字段的语言，请通过“设置”中的 **更新与安全** 安装所有待处理的 Windows 更新，这能解决这个[问题](https://learn.microsoft.com/en-us/troubleshoot/windows-server/shell-experience/cannot-configure-language-pack-windows-server-desktop-experience)。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ZENz49zaSmkLNER/preview)

Windows 现在会开始下载所选语言包，请耐心等待，下载可能需要一些时间。

下载完成后，如果你之前没有勾选 **设为 Windows 显示语言**，请返回语言页面，在下拉菜单中选择它。

![](https://screensaver01.zap-hosting.com/index.php/s/Ee3rMKzXTidr9Jk/preview)

最后重启服务器，新语言就会生效。你已成功管理了 Windows 服务器的语言包。

## 重新安装服务器操作系统

如果你在更改语言包时遇到问题，或者服务器还是全新状态，你也可以选择通过可用的操作系统版本重新安装 Windows 服务器，选择英文或德文版本。

:::warning
重新安装操作系统是破坏性操作，**会**清除服务器上的所有数据。请务必先备份重要数据再继续。
:::

你可以在服务器的网页控制面板中进入 **设置** 页面进行操作。

在这里，你可以选择 **Windows (EN)** 或 **Windows (DE)** 版本，并选择重新安装服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/gxw8pKDr8sBBTHQ/preview)

开始重装后请耐心等待，整个过程可能需要较长时间（最长可达 30 分钟）。

<InlineVoucher />