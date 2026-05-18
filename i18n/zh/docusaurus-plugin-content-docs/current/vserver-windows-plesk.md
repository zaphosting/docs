---
id: vserver-windows-plesk
title: "在 Windows 服务器上安装 Plesk - 用强大的控制面板管理网站"
description: "了解如何通过 Plesk 多功能平台高效管理网站和服务器，适合新手和专家 → 立即了解更多"
sidebar_label: 安装 Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Plesk 是一个全面的网页托管和服务器管理平台，允许用户通过友好的界面管理网站、服务器、邮箱账户等。它是一个多功能解决方案，适合新手以及有经验的网页开发者和系统管理员。  
<InlineVoucher />


## 连接服务器

要在服务器上安装 Plesk，首先需要连接到服务器。具体操作请参考我们的独立指南：[初次访问（RDP）](vserver-windows-userdp.md)

## Plesk 安装程序

接下来你需要下载 Plesk 安装程序，这是安装 Plesk 必不可少的。点击这里下载：[Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

安装程序会被保存到一个文件夹里，我们示例中使用的是桌面上新建的“Plesk”文件夹。这个文件的路径对后续步骤很重要。

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### 打开命令提示符

现在需要打开 CMD 控制台来进行安装。  
你可以通过快捷键 [Windows] + [R] 打开运行窗口，或者在 Windows 搜索框中输入“command”找到命令提示符。

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### 安装 Plesk

在 CMD 控制台中，切换到存放 Plesk 安装程序的目录。我们示例中是桌面上的“Plesk”文件夹。

使用 `cd` 命令进入该目录。

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

进入正确目录后，最后一步是执行安装命令。运行 `plesk-installer.exe`，最新版本的 Plesk 会自动安装。

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

命令：`plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
安装过程大约需要 30 到 60 分钟，完成后 Plesk 就安装好并可以使用了。
:::


## 总结

恭喜你，已经成功在你的 VPS/独服上安装并配置了 Plesk！如果有任何问题或疑问，欢迎随时联系我们的支持团队，我们每天都在线帮你解决！ 

<InlineVoucher />