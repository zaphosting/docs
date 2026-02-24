---
id: dedicated-linux-screen
title: "在 Linux 服务器上安装 Screen - 管理持久化终端会话"
description: "了解如何使用 Screen 在 Linux 上管理多个终端会话，提高工作效率并保持会话持久性 → 立即了解更多"
sidebar_label: 安装 Screen
services:
  - vserver
  - dedicated
---

## 介绍

Screen 是一个适用于类 Unix 操作系统（如 Linux）的终端复用器。它允许用户在单个窗口或远程连接中管理多个终端会话。在本指南中，我们将介绍安装步骤并提供使用指导，帮助你更熟悉 Screen。

## 准备工作

在服务器上安装任何软件之前，建议先运行与你的操作系统对应的更新命令，以确保服务器安全。

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

如前所述，Screen 允许用户创建多个会话。启动一个会话，只需运行以下命令，将 `[name]` 替换为你想要的名称即可。
```
screen -S [name]
```

:::info
请注意，本指南中的命令对大小写敏感，尤其是参数标志部分。
:::

这会打开一个新的 Screen 会话，你可以在其中启动任何脚本或程序，即使关闭远程连接，它们仍会继续运行。

你可以通过按 `CTRL + A`，然后按 `D` 来退出当前 Screen 会话，或者直接在终端输入 `exit` 命令退出。

:::tip
你可以使用 `screen -ls` 或 `screen -list` 命令查看所有活动的会话/Screen。
:::

要重新进入之前创建的 Screen 会话，可以执行 `screen -r [name]` 命令，立即切换回对应的会话。

## Screen 参数标志

Screen 有很多 `-` 开头的参数标志可用于配置命令。下面表格列出了一些最重要的参数。

| 标志 | 别名 | 说明 |
| ---- | ----- | ---- |
| -v   | | 显示当前 Screen 版本 |
| -S `[name]` | | 启动一个名为 `[name]` 的新 Screen 会话 |
| -ls | -list | 列出所有正在运行的 Screen 会话 |
| -wipe `[name]` | | 删除指定名称的 Screen 会话（可选参数） |
| -r `[name]` | | 重新连接到名为 `[name]` 的 Screen 会话 |
| -d -r `[name]` | | 从当前 Screen 分离并重新连接到 `[name]` 会话 |

:::tip
你可以运行 `screen -h` 查看所有可用参数的完整列表。
:::

## Screen 高级用法

### 窗口操作

熟悉了 Screen 的基础命令后，接下来学习一些快捷键，帮助你更高效地在会话中切换。每个 Screen 会话内可以创建多个独立窗口，分别处理不同任务。

:::note 
本节中的所有快捷键均需先按 `CTRL + A` 激活。
:::

按 `C` 会在当前目录下创建一个新的空窗口。切换窗口可以用 `N`（下一个）、`P`（上一个）或按 `"`，然后用方向键选择想要查看的窗口。

默认情况下，所有窗口名称相同（通常是你使用的 shell 名称）。要修改窗口名称，按 `A` 并输入新名称。

最后，按 `K` 可以关闭当前窗口。

#### 分屏窗口

你可以用 `S`（水平分屏）或 `|`（垂直分屏）创建两个分屏窗口，使用 `Tab` 在它们之间切换。

:::tip
创建分屏后，按 `Tab` 切换到新分屏，再按 `"` 选择之前的窗口在第二个视图中打开。
:::

你可以无限制地分割窗口，但服务器的内存使用会随着多任务操作显著增加，需注意资源消耗。

## 总结

希望本指南帮你快速上手了 Linux 下的 Screen 工具。如果有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂