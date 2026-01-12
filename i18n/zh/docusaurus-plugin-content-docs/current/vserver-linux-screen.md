---
id: vserver-linux-screen
title: "VPS：Screen 安装指南"
description: "了解如何使用 Screen 工具高效管理类 Unix 系统上的多终端会话 → 立即学习"
sidebar_label: 安装 Screen
services:
  - vserver
---

## 介绍

Screen 是一款适用于类 Unix 操作系统（如 Linux）的终端复用器。它允许用户在一个窗口或远程连接中管理多个终端会话。本指南将介绍安装步骤，并提供使用指导，帮你快速上手 Screen。

## 准备工作

在服务器上安装任何软件之前，建议先执行对应操作系统的更新命令，确保服务器安全稳定。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt update && sudo apt upgrade
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf update
```

</TabItem>
</Tabs>

## 安装

安装 Screen 工具非常简单，只需根据你的 Linux 发行版运行以下命令：

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt install screen
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum install screen
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper install screen
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf install screen
```

</TabItem>
</Tabs>

## Screen 基础用法

如前所述，Screen 允许用户创建多个会话。启动一个新会话，只需运行以下命令，将 `[name]` 替换为你想要的名称：
```
screen -S [name]
```

:::info
注意：本指南中的命令对大小写敏感，尤其是参数标志部分。
:::

这会打开一个新的 Screen 会话，你可以在其中启动任何脚本或程序，即使关闭远程连接，它们依然会继续运行。

退出 Screen 会话可以使用 `CTRL + A`，然后按 `D`，或者直接在终端输入 `exit` 命令。

:::tip
你可以用 `screen -ls` 或 `screen -list` 命令查看所有活跃的会话/屏幕。
:::

要重新进入之前创建的 Screen 会话，执行命令：
```
screen -r [name]
```
即可立即切换回对应的会话。

## Screen 参数标志

Screen 支持多种 `-` 参数标志，用于配置命令。以下是一些常用的参数说明：

| 标志 | 别名 | 说明 |
| ---- | ----- | ---- |
| -v   | | 显示当前 Screen 版本 |
| -S `[name]` | | 启动一个名为 `[name]` 的新 Screen 会话 |
| -ls | -list | 列出所有正在运行的 Screen 会话 |
| -wipe `[name]` | | 删除指定名称的 Screen 会话（可选参数） |
| -r `[name]` | | 重新连接到名为 `[name]` 的 Screen 会话 |
| -d -r `[name]` | | 从当前 Screen 分离并重新连接到 `[name]` 会话 |

:::tip
运行 `screen -h` 可以查看所有可用参数的完整列表。
:::

## Screen 高级用法

### 窗口操作

熟悉了基本命令后，接下来学习一些快捷键，帮你更高效地在会话中切换。每个 Screen 会话内可以创建多个独立窗口，分别处理不同任务。

:::note 
本节所有快捷键均需先按 `CTRL + A` 触发。
:::

按 `C` 会在当前目录下新建一个空窗口。切换窗口可以用 `N`（下一个）、`P`（上一个），或者按 `"`，用方向键选择想要查看的窗口。

默认所有窗口名称相同（通常是你使用的 shell 名称）。按 `A` 可以重命名当前窗口。

删除窗口则按 `K`。

#### 分屏窗口

要实现两个窗口的分屏显示，可以按 `S`（水平分屏）或 `|`（垂直分屏），用 `Tab` 在分屏间切换。

:::tip
创建分屏后，按 `Tab` 切换到新分屏，再按 `"` 选择之前的窗口在第二个视图中打开。
:::

你可以无限制地分割窗口，但要注意服务器的内存使用会随着多任务操作显著增加。

## 总结

希望这份指南能帮你快速掌握 Linux 下 Screen 工具的使用。如果有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在线为你服务！🙂