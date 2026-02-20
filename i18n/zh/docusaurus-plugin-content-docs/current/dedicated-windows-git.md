---
id: dedicated-windows-git
title: "在 Windows 服务器上安装 Git - 为你的项目开启版本控制"
description: "了解如何设置和配置 Git，实现高效的版本控制和无缝协作 → 立即了解更多"
sidebar_label: 安装 Git
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Git 是一个分布式版本控制系统，专为高效的源码管理设计。它让开发者能够追踪变更、同时在不同分支上工作，并实现项目的无缝协作。凭借其灵活性和性能，Git 已成为现代软件开发中版本控制的标准工具。

想自己托管这个服务？我们会一步步带你完成安装和配置，同时告诉你所有需要注意的事项。

## 准备工作

在安装 **Git** 之前，你需要先准备好系统，包括将操作系统更新到最新版本。这些准备工作能确保环境稳定，避免安装过程中或之后出现问题。

### 更新系统
为了确保系统运行的是最新的软件和安全补丁，建议先执行系统更新。这能保证你的系统拥有最新的安全修复和软件版本，方便后续操作。

## 安装

完成必要的准备后，就可以开始安装 Git 了。请点击这里下载适用于 Windows (x64) 的 Git：https://git-scm.com/downloads/win 

下载完成后，运行安装程序并按照提示完成安装。

![img](https://screensaver01.zap-hosting.com/index.php/s/Y3Rme8q9LHSk4fg/download)

安装完成后，打开终端或命令提示符，输入命令 `git --version` 并回车，确认 Git 是否安装成功。

如果安装成功，Git 会显示当前安装的版本号。如果出现错误信息或没有任何输出，通常表示 Git 没有正确安装，或者命令未加入系统路径。

```
git --version
git version 2.51.2
```

![img](https://screensaver01.zap-hosting.com/index.php/s/FDDLGnLkStfb7nY/preview)

## 配置

用下面的命令设置你的 Git 用户名和邮箱，记得替换成你自己的信息。这些信息会关联到你每一次的提交。

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```

## 总结及更多资源

恭喜你！现在你已经成功在你的 vServer 上安装并配置了 Git。我们还推荐你看看以下资源，能为你的服务器配置提供更多帮助和指导：

- [git-scm.com](https://git-scm.com/) - 官方网站
- [git-scm.com/doc](https://git-scm.com/doc) - Git 文档

有具体问题这里没提到？别犹豫，随时联系在线客服，我们每天都在线，随时帮你解决问题！🙂