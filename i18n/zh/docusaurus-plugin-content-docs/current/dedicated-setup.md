---
id: dedicated-setup
title: "独服：初始设置"
description: "轻松搞定你的ZAP独服设置，畅享多种操作系统 → 立即了解"
sidebar_label: 初始设置
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
刚入门独服领域，担心自己搞不定设置流程或者遇到麻烦？别慌！这份指南加上我们的设置助手，会带你一步步完成ZAP独服的初始配置，轻松上手无压力。

## 准备工作

### 激活 iLO
初始设置前，先得激活 iLO 管理界面。这个过程可能需要点时间。想了解更多关于 iLO 的信息和后续使用，强烈推荐看看我们的 [iLO](dedicated-ilo.md) 指南。

![EN](https://screensaver01.zap-hosting.com/index.php/s/xmAFAt4CXTt7b7c/preview)

iLO 激活后，状态会显示为 **Active**。默认情况下，iLO 会话激活时间为3小时，时间到后需要重新激活才能继续访问。激活完成后，就可以继续选择 ISO 了。

### 选择 ISO

下一步，选一个 ISO 镜像挂载来进行初始安装。点击下拉菜单，选中一个 ISO 文件，然后点 **Insert** 按钮。

![EN](https://screensaver01.zap-hosting.com/index.php/s/SfMfrWHpjAGeMgo/preview)

我们默认提供了多款主流操作系统的 ISO 镜像，比如 Debian、Ubuntu、FreeBSD、Windows、CentOS、ArchLinux 和 Proxmox。下面表格列出了所有可用系统及版本：

| ISO (操作系统) | 版本                                                     |
| -------------- | -------------------------------------------------------- |
| Debian         | 12, 11, 10.9, 9.13                                       |
| Ubuntu         | 22.04.3, 22.04, 22.02, 18.04                             |
| FreeBSD        | 13.0, 12.2, 11.4                                         |
| Windows        | 2022 (EN/DE), 2019 (EN/DE), 2016 (EN/DE), 2012 (EN/DE)  |
| CentOS         | 7.9, 8.3                                                 |
| ArchLinux      | 2023                                                     |
| Proxmox        | 8.0-2, 7.4-1, 7.1-1, 7.0-1, 6.4-1, 6.3-1                 |

你也可以上传并挂载自己的 ISO 镜像。想知道怎么操作，推荐看看 **[自定义 ISO](dedicated-iso.md)** 指南。

## 安装流程

### 挂载并启动 ISO

选好并插入 ISO 后，系统需要重启一次，才能识别新挂载的 ISO 并从它启动。直接点 **Reboot** 按钮即可。重启可能需要点时间，耐心等一下。

![EN](https://screensaver01.zap-hosting.com/index.php/s/zPQagx6yD5nCM7L/preview)

### 通过 iLO 安装操作系统

现在你已经完成了安装操作系统的基础准备。系统已经挂载了 ISO 并启动了安装程序。接下来打开服务器的 **iLO 管理界面**，点击“集成远程控制台：**HTML 5**”直接进入服务器屏幕。关于如何管理 iLO 控制台，更多细节请参考我们的 [iLO](dedicated-ilo.md) 指南。

操作系统的安装将在 HTML 控制台中进行。我们还为主流系统准备了详细安装教程，想了解后续步骤，快去看看对应的指南吧：

- [安装 Windows](dedicated-windows.md)
- [安装 Debian](dedicated-linux-debian.md)
- [安装 Ubuntu](dedicated-linux-ubuntu.md)
- [安装 FreeBSD](dedicated-freebsd.md)
- [安装 CentOS](dedicated-centos.md)
- [安装 Proxmox](dedicated-proxmox.md)