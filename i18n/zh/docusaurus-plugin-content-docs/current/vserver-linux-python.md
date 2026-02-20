---
id: vserver-linux-python
title: "在 Linux 服务器上安装 Python - 开启开发与自动化"
description: "学习如何在各种 Linux 发行版上安装和更新 Python 运行环境，确保安全且最新 → 立即了解"
sidebar_label: 安装 Python
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南提供了安装 Python 运行环境和 venv 的步骤。这些命令需要通过 SSH 执行，如果你还不知道如何通过 SSH 连接服务器，请参考我们的[初始访问（SSH）](vserver-linux-ssh.md)指南了解更多。

<InlineVoucher />

## 准备工作

在服务器上安装任何东西之前，建议先运行与你操作系统对应的更新命令，以保持服务器安全。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
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

大多数 Linux 发行版预装了 Python，但版本可能不是最新，或者系统安装时缺少某些包。你可以通过运行 `python3 --version` 来检查 Python 是否已安装，然后使用以下命令更新或安装运行环境。

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // 查看版本
  python3 --version

  // 更新 / 安装运行环境
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // 查看版本
  python3 --version

  // 更新运行环境
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // 查看版本
  python3 --version

  // 更新运行环境
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // 查看版本
  python3 --version

  // 更新运行环境
  sudo dnf install python3
```

</TabItem>
</Tabs>

## 运行代码

现在你已经在服务器上安装了 Python，可以开始运行你的 Python 程序了。

### 交互式模式

运行 `python3` 命令会启动 Python 交互式解释器。你可以在 `>>>` 提示符后输入任何有效的 Python 代码，按回车后代码会被执行。完成后，输入 `exit()` 即可退出解释器。

### 运行 .py 文件

要运行 `.py` Python 文件，只需使用命令 `python3 [文件名].py`，将 `[文件名]` 替换为你想运行的目标文件路径。

:::tip
大多数你在网上找到的程序都可以用 `python3 main.py` 来运行，因为 `main.py` 是大多数 Python 程序的默认入口文件。
:::

## 虚拟环境

写 Python 程序时，你可能需要安装 pip 的外部包。这些包可以全局安装，供所有 `.py` 脚本使用，也可以创建虚拟环境（venv）来隔离安装。

### 创建 venv

首先，使用 `cd` 进入你想创建 venv 的文件夹，准备好后运行 `python3 -m venv .`，这会在当前目录安装所需文件。

### 激活与退出

要在 venv 中运行 `pip install` 等命令，需要先激活它，运行 `source /bin/activate`。此时你的终端只会在虚拟环境内运行，脚本也只会访问本地安装的包。

完成后，运行 `deactivate` 命令即可退出虚拟环境。

## 结语

恭喜你，Python 已成功安装并配置完成！如果你有任何疑问或问题，欢迎随时联系我们的支持团队，我们每天都在线为你服务！

<InlineVoucher />