---
id: dedicated-linux-python
title: "独服教程：Python 安装指南"
description: "教你如何在各种 Linux 发行版上安装和更新 Python 运行环境，确保你的服务器安全又最新 → 立刻了解"
sidebar_label: 安装 Python
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南教你如何安装 Python 运行时和 venv。所有命令都需要通过 SSH 执行，如果你还不会用 SSH 连接服务器，先看看我们的[初始访问（SSH）](vserver-linux-ssh.md)教程，快速上手。



## 准备工作

在服务器上安装任何东西之前，建议先执行对应系统的更新命令，保证服务器安全稳定。

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

## 安装步骤

大多数 Linux 发行版默认都带 Python，但版本可能不够新，或者系统安装时没带全。你可以用 `python3 --version` 检查是否已装 Python，然后用下面命令更新或安装。

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // 查看版本
  python3 --version

  // 更新 / 安装 Python 运行时
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // 查看版本
  python3 --version

  // 更新 Python 运行时
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // 查看版本
  python3 --version

  // 更新 Python 运行时
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // 查看版本
  python3 --version

  // 更新 Python 运行时
  sudo dnf install python3
```

</TabItem>
</Tabs>

## 运行代码

Python 装好了，接下来就能跑你的 Python 程序啦。

### 交互式模式

输入 `python3` 命令会启动 Python 交互式解释器。你可以在 `>>>` 后面写任何合法的 Python 代码，按回车就执行。写完了用 `exit()` 退出解释器。

### 运行 .py 文件

要运行 `.py` 文件，直接用 `python3 [文件名].py`，把 `[文件名]` 换成你想执行的文件路径。

:::tip
网上大多数程序都能用 `python3 main.py` 运行，因为 `main.py` 是 Python 程序的常见入口文件名。
:::

## 虚拟环境

写 Python 程序时，可能需要用 pip 安装第三方包。你可以全局安装，也可以创建虚拟环境（venv），让包只在特定项目里生效。

### 创建 venv

先用 `cd` 进入你想建虚拟环境的文件夹，执行 `python3 -m venv .`，会在当前目录生成虚拟环境所需文件。

### 激活 & 退出

要在 venv 里用 `pip install` 之类的命令，先激活它：`source /bin/activate`。激活后，终端只在虚拟环境里运行，脚本也只会访问本地安装的包。

用完了，输入 `deactivate` 就能退出虚拟环境，回到系统默认环境。