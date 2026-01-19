---
id: dedicated-windows-plesk
title: "独立服务器：Plesk 安装指南"
description: "了解如何高效管理网站和服务器，适合新手和专家的 Plesk 使用教程 → 立即了解"
sidebar_label: 安装 Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Plesk 是一款功能全面的网页托管和服务器管理平台，用户可以通过友好的界面管理网站、服务器、邮箱账户等。它是一款多功能解决方案，既适合新手，也适合有经验的网页开发者和系统管理员。

## 连接服务器

要在服务器上安装 Plesk，首先需要连接到服务器。具体操作请参考我们的详细教程：[初次访问（RDP）](vserver-windows-userdp.md)

## Plesk 安装程序

接下来需要下载 Plesk 安装程序，这是安装 Plesk 必不可少的工具。点击这里下载：[Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

下载后，安装程序会保存在一个文件夹中。我们示例中使用的是桌面新建的“Plesk”文件夹。后续步骤中需要用到这个文件的路径。

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### 打开命令提示符

现在需要打开 CMD 控制台来进行安装。可以通过快捷键 [Windows] + [R]，或者在 Windows 搜索框输入“命令”来打开。

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### 安装 Plesk

在 CMD 窗口中，先切换到存放 Plesk 安装程序的目录。我们示例中是桌面上的“Plesk”文件夹。

使用 `cd` 命令进入该目录。

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

进入正确目录后，最后一步是执行安装命令。运行 `plesk-installer.exe`，系统会自动安装最新版本的 Plesk。

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

命令：`plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
安装过程大约需要 30 到 60 分钟，完成后 Plesk 即可使用。
:::

## 总结

恭喜你，Plesk 已成功安装！如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂