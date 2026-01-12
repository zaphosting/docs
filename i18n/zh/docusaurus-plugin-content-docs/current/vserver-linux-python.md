---
id: vserver-linux-python
title: "VPS：Python 安装指南"
description: "学习如何在各种 Linux 发行版上安装和更新 Python 运行环境，确保你的环境安全且保持最新 → 立即了解"
sidebar_label: 安装 Python
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南将教你如何安装 Python 运行环境和 venv。所有命令都需要通过 SSH 执行，如果你还不知道如何通过 SSH 连接服务器，请参考我们的[初始访问（SSH）](vserver-linux-ssh.md)指南了解详情。

<InlineVoucher />

## 准备工作

在服务器上安装任何东西之前，建议先运行对应操作系统的更新命令，确保服务器安全。

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

大多数 Linux 发行版默认都带有 Python，但版本可能不是最新，或者系统安装时缺少某些包。你可以用 `python3 --version` 检查是否已安装 Python，然后用下面的命令更新或安装运行环境。

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

现在你已经在服务器上安装了 Python，可以开始运行你的 Python 程序啦。

### 交互模式

运行 `python3` 命令会启动 Python 交互式解释器。你可以在 `>>>` 提示符后输入任何有效的 Python 代码，按回车后会立即执行。完成后输入 `exit()` 即可退出解释器。

### 运行 .py 文件

要运行 `.py` 文件，只需用 `python3 [文件名].py` 命令，替换 `[文件名]` 为你想运行的文件路径即可。

:::tip
网上大多数程序都可以用 `python3 main.py` 运行，因为 `main.py` 是大多数 Python 程序的默认入口文件。
:::

## 虚拟环境

写 Python 程序时，可能需要安装 pip 的第三方包。你可以全局安装，也可以创建虚拟环境（venv）来隔离依赖。

### 创建 venv

先用 `cd` 进入你想创建虚拟环境的文件夹，然后运行 `python3 -m venv .`，会在当前目录生成所需文件。

### 激活 & 退出

要在虚拟环境里运行 `pip install` 等命令，先用 `source /bin/activate` 激活它。激活后，终端只会在虚拟环境里运行，脚本也只能访问本地安装的包。

用完后，运行 `deactivate` 命令退出虚拟环境。

## 总结

恭喜你，Python 已成功安装并配置完成！如果还有任何问题或疑问，随时联系我们的支持团队，我们每天都在线帮你解决！

<InlineVoucher />