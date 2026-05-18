---
id: dedicated-windows-2019
title: "独立服务器：Windows Server 2019 安装指南"
description: "了解如何在你的独立服务器上安装和配置 Windows Server，实现最佳性能和安全 → 立即了解"
sidebar_label: Windows Server 2019
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
下面将一步步教你如何在独立服务器上安装和配置 Windows Server 操作系统。请仔细按照这些步骤操作，确保成功安装操作系统并充分发挥其性能。

:::info Windows Server 2019
本指南中的安装步骤和演示基于 Windows Server 2019 操作系统。旧版本的系统在结构和界面上可能有所不同，但整体流程类似。
:::

:::warning 有更新版本 / 终止支持信息

微软最新的 Windows Server 版本是 [2025](dedicated-windows.md) 版。我们建议长期项目使用最新版本。

旧版 Windows Server 的支持将逐步停止。2019 版本的支持截止时间如下：

- 主动支持截止：2024年1月9日
- 安全支持截止：2029年1月9日

:::

## 准备工作
安装和配置操作系统前，首先需要挂载对应的操作系统 ISO 镜像。挂载方式有几种：

1. 通过初始设置挂载
2. 通过 iLO（虚拟媒体）挂载
3. 通过 iLO（远程控制台）挂载

如果你还不熟悉如何挂载 ISO 文件，建议先参考我们的[初始设置](dedicated-setup.md)或[自定义 ISO](dedicated-iso.md)指南。

## 安装
安装 Windows Server 需要准备好 ISO 文件，你可以在我们的网页界面选择想要的 Windows 版本，或者使用自己的 ISO 文件，我们也有[自定义 ISO](dedicated-iso.md)的教程。

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

当你在远程控制台看到这个界面，说明 ISO 已成功加载，可以开始安装了。
选择你想要的语言，点击“下一步”继续。

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

点击“立即安装”开始安装流程。

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows 现在会要求输入产品密钥，如果你有的话请填写。

:::note
我们不销售 Windows 授权密钥，密钥需要你自行购买。
:::

你可以在各种在线商店购买 Windows 产品密钥，购买时请确认密钥适用于你的 Windows 版本，因为不同版本的 Windows 密钥不通用。
例如，Windows Server 2019 有标准版和数据中心版两种。
如果不确定需要哪个版本，可以点击“我没有产品密钥”，之后也可以再添加密钥。

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

选择你想安装的版本。
务必选对版本，安装后无法更改。
注意选择带有“(桌面体验)”的版本，否则你的 Windows 会是基于命令行的界面。
选好后，勾选该版本，点击“下一步”。

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

接受许可条款，点击“下一步”。

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

如果想全新安装 Windows，选择“自定义”。
如果想从 2016 升级到 2019，可以选择“升级”。

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

接下来需要在独立服务器上创建分区，通常不会有分区，如果有，选中它们并点击删除。

你可以创建多个小分区，也可以只建一个大分区。如果建多个小分区，建议主 Windows 分区至少留 50GB。
点击“新建”创建分区。

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

如果想要一个大分区，直接点击“应用”，安装程序会自动使用最大可用空间。

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows 需要一个小的系统分区，点击“确定”接受。

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

确认分区后，选择你想安装 Windows 的分区，点击“下一步”。
Windows 安装程序会自动完成剩下的步骤，可能需要几分钟。
安装过程中无需其他操作。

## 配置

安装完成后，Windows 会提示你设置密码。

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

设置你想要的密码。

:::info
建议设置包含特殊字符的强密码。

如果忘记密码，将无法找回，请务必记好。
:::

设置完密码后，你会进入 Windows 锁屏界面。

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

登录 Windows，按下组合键 `CTRL + ALT + DELETE`，远程控制台里也能轻松操作（Java 控制台里有“键盘”选项）。
输入密码登录。

接下来需要启用远程桌面，这样你就能轻松连接服务器。
打开资源管理器，右键点击“此电脑”。

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

选择“属性”。

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

打开“远程设置”。

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

接受防火墙提示，点击“确定”，然后点击“应用”。

现在在你的电脑上打开远程桌面，输入你 ZAP-Hosting 面板显示的 IP 地址。
用户名固定是 Administrator，密码是你刚才设置的。

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

可以忽略证书警告，勾选“以后不再询问此计算机的连接”，点击“是”。

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

远程桌面现在会连接到你的独立服务器，你就可以开始使用了。
网络配置通过 DHCP 自动完成，无需额外设置。

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
如果有任何问题或疑问，随时联系我们的客服，我们会帮你搞定！
:::

## 总结
恭喜你，已经成功在独立服务器上安装了 Windows Server 2019 操作系统。如有任何问题或需要帮助，欢迎随时联系全天候在线的客服团队！🙂