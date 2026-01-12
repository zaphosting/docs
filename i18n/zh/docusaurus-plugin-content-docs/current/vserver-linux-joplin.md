---
id: vserver-linux-joplin
title: "VPS：在 Linux 上安装 Joplin"
description: "了解如何使用 Joplin 在设备间组织和同步加密的 Markdown 笔记，实现安全灵活的笔记管理 → 立即了解"
sidebar_label: 安装 Joplin
services:
- vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Joplin 是一款开源的笔记和待办事项应用，支持将基于 Markdown 的笔记整理到可搜索的笔记本中，并在多设备间同步。它提供端到端加密、网页剪辑器和跨平台同步功能。非常适合注重隐私、灵活性和对数据完全掌控的用户！

![img](https://screensaver01.zap-hosting.com/index.php/s/qfo8k2RXWPFqi3g/preview)

想自己托管这个服务？我们会一步步带你完成安装和配置，告诉你所有需要注意的细节。

:::danger 需要带桌面环境的 Linux 版本
此应用只能安装并运行在带有图形界面的 Linux 系统上；本示例以 Ubuntu Desktop 25.04 作为参考。

:::

<InlineVoucher />



## 前置条件

在安装 **Joplin** 之前，请确保你的主机环境满足以下要求，以保证安装顺利且性能最佳。

| 硬件 | 最低配置 | ZAP-Hosting 推荐配置 |
| ---------- | ------------ | -------------------------- |
| CPU | 1 个 vCPU 核心 | 4 个 vCPU 核心 |
| 内存 | 2 GB | 4 GB |
| 磁盘空间 | 250 MB | 250 MB |

软件要求所有必要依赖已安装，并运行在支持的操作系统上。请确认你的服务器满足以下条件后再继续安装：

**依赖项：** `Libfuse2`

**操作系统：** 带桌面支持的 Linux

确保所有依赖已安装且操作系统版本正确，以避免安装 Joplin 时出现兼容性问题。



## 准备工作

在搭建 **Joplin** 之前，需要先准备好系统环境，包括将操作系统更新到最新版本并安装所有必需依赖。这些准备工作能保证环境稳定，避免安装过程中或之后出现问题。


### 更新系统
为了确保系统运行最新的软件和安全补丁，建议先执行系统更新。运行以下命令：

```
sudo apt update && sudo apt upgrade -y
```
这样可以确保系统拥有最新的安全修复和软件版本，方便后续操作。

### 安装依赖
更新完成后，就可以安装依赖了。

#### Libfuse2
Joplin 需要先安装 Libfuse2。执行以下命令安装：

```
sudo apt install -y libfuse2
```




## 安装
确认所有要求都满足且准备工作完成后，就可以开始安装 Joplin 了。执行以下命令：

```
wget -O - https://raw.githubusercontent.com/laurent22/joplin/dev/Joplin_install_and_update.sh | bash
```

Joplin 会通过官方安装脚本自动下载并安装。耐心等待安装完成，之后即可直接启动应用。



![img](https://screensaver01.zap-hosting.com/index.php/s/Af9xjkqz7TSr4sZ/preview)



## 配置

安装完成后，建议先配置基础设置，让应用更贴合你的使用习惯。配置入口在 *设置* 菜单中。

**同步**
Joplin 支持多种同步目标，如 Nextcloud、Dropbox、OneDrive 或 WebDAV。在“同步”中选择你喜欢的服务并输入账号信息，即可实现多设备笔记实时同步。

**加密**
为了保护同步的笔记安全，可以在“加密”设置中启用端到端加密。系统会生成一个密钥，需在所有访问笔记的设备上配置。

**编辑器与外观**
Joplin 使用 Markdown 作为笔记格式。在“编辑器”设置中，你可以选择是否自动显示预览，并调整字体类型和大小。

**插件与扩展**
内置插件管理器支持安装额外功能，比如流程图支持、日历集成或高级标签管理。

**网页剪辑器**
可选启用“Joplin 网页剪辑器”浏览器扩展，直接将网页或选中内容保存为笔记。

配置好这些核心功能后，Joplin 就能满足任务管理、项目文档或个人知识库等多种使用场景。



![img](https://screensaver01.zap-hosting.com/index.php/s/FyjyeF3EcRFe2qf/preview)




## 总结及更多资源

恭喜你！现在已经成功在 VPS 上安装并配置了 Joplin。我们还推荐你看看以下资源，能为你的服务器配置提供更多帮助和指导：

- [Joplinapp.org](https://joplin.org/) - 官方网站
- [Joplinapp.org/help/](https://joplinapp.org/help/) - Joplin 帮助中心

如果你有这里没覆盖的具体问题，随时联系在线客服，我们每天都在线帮你解答！🙂



<InlineVoucher />