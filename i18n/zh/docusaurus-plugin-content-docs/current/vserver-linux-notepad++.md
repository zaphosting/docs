---
id: vserver-linux-notepad++
title: "在 Linux 服务器上安装 Notepad++ - 通过 Wine 使用你喜欢的编辑器"
description: "了解如何在 Linux 上设置和优化 Notepad++，实现高效轻量的代码编辑和开发 → 立即了解更多"
sidebar_label: 安装 Notepad++
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Notepad++ 是一款免费且开源的 Windows 文本和源代码编辑器。它支持多种编程和脚本语言的语法高亮、代码折叠和标签式编辑，并且通过插件高度可定制。Notepad++ 以其快速的性能和低资源占用著称，依然是开发者和用户寻找强大且轻量编辑工具的热门选择。

![img](https://screensaver01.zap-hosting.com/index.php/s/jMMDejqDfWDCfrr/preview)

想自己托管这个服务？我们会一步步带你完成安装和配置，并告诉你所有需要注意的事项。

:::danger 需要带桌面环境的 Linux 版本
此应用只能安装并运行在带有图形用户界面的 Linux 系统上；本示例以 Ubuntu Desktop 25.04 作为参考。

:::

<InlineVoucher />

## 前提条件

在安装 **Notepad++** 之前，请确保你的主机环境满足以下要求，以保证安装顺利且性能最佳。

| 硬件 | 最低要求 | ZAP-Hosting 推荐配置 |
| ---------- | ------------ | -------------------------- |
| CPU | 1 个 vCPU 核心 | 4 个 vCPU 核心 |
| 内存 | 2 GB | 4 GB |
| 磁盘空间 | 25 MB | 25 GB |

软件要求所有必要依赖已安装，并运行在支持的操作系统上。请确保你的服务器满足以下条件后再继续安装：

**依赖项：** `Snap`

**操作系统：** 带桌面支持的 Linux

确保所有依赖已安装且操作系统版本正确，以避免安装 Notepad++ 时出现兼容性问题。

## 准备工作

在安装 **Notepad++** 之前，你需要先准备好系统，包括将操作系统更新到最新版本并安装所有必需依赖。这些准备工作能确保环境稳定，避免安装过程中或之后出现问题。

### 更新系统
为了确保系统运行最新的软件和安全补丁，建议先执行系统更新。运行以下命令：

```
sudo apt update && sudo apt upgrade -y
```
这会确保系统拥有最新的安全补丁和软件版本，方便后续操作。

### 安装依赖
更新完成后，就可以安装依赖了。

#### Snap
Notepad++ 需要先安装 Snap。运行以下命令：

```
sudo apt install snapd
```

## 安装

满足所有要求并完成准备后，就可以安装 Notepad++ 了。执行以下命令：

```
sudo snap install notepad-plus-plus
```

Notepad++ 会通过官方安装脚本下载并安装。耐心等待安装完成，之后即可直接启动应用。

![img](https://screensaver01.zap-hosting.com/index.php/s/ca9Z8D37wCSrDbf/preview)

## 配置

Notepad++ 提供了丰富的自定义选项，位于 *设置 > 偏好设置* 中，方便你根据工作流程调整编辑器：

- **常规**：控制启动行为，比如重新打开上次编辑的文件、设置默认语言或定义标签页行为。  
- **编辑器设置**：调整字体类型和大小、制表符宽度、行号显示、自动缩进，或是否显示空格和制表符标记。  
- **配色方案与语法**：使用“样式配置器”切换主题，定制每种支持语言的语法高亮。  
- **文件处理**：配置文件变更自动重载、大文件处理方式或编码偏好（如 UTF-8）。  
- **安全与备份**：启用自动备份或会话恢复，防止数据丢失。  
- **插件**：通过插件管理器安装和管理扩展，添加 FTP 支持或高级格式化等功能。  

这些设置让 Notepad++ 既适合简单文本编辑，也能满足全方位的软件开发需求。

![img](https://screensaver01.zap-hosting.com/index.php/s/X8og5qnFkBTRcmA/preview)

## 总结及更多资源

恭喜你！现在已经成功在你的 VPS/独立服务器上安装并配置了 Notepad++。我们还推荐你查看以下资源，能为你的服务器配置提供更多帮助和指导：

- [notepad-plus-plus.org/](https://notepad-plus-plus.org/) - 官方网站

有具体问题这里没提到？如果需要更多帮助，随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />