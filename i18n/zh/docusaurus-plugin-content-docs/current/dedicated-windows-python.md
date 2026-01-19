---
id: dedicated-windows-python
title: '独立服务器：Python 安装指南'
description: "学习如何在 Windows 服务器上安装和配置 Python 运行环境，高效运行你的 Python 程序 → 立即了解更多"
sidebar_label: 安装 Python
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南将教你如何在 Windows 上安装 Python 运行环境。以下步骤需通过 RDP 远程桌面执行，如果你还不知道如何通过 RDP 连接服务器，可以参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

## 安装步骤

### 第一步：下载文件
打开你喜欢的浏览器（本指南用的是 Chrome），访问 [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

点击 `Download Python [版本号]` 按钮，等待下载完成。

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### 第二步：安装 Python
双击运行安装程序。安装界面会让你设置一些选项，务必勾选底部的 `Add python.exe to PATH`（将 Python 添加到系统环境变量），这样以后运行 Python 文件会更方便。然后点击 `Install Now` 开始安装。

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### 第三步：完成安装
耐心等待安装完成，这可能需要一点时间。:)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

安装完成后，点击 `Close`，你就可以开始在服务器上使用 Python 了。

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## 运行代码

Python 安装好后，你就可以开始运行你的 Python 程序啦。

### 交互式解释器模式

在命令提示符（CMD）或 PowerShell 中输入 `python` 命令即可启动 Python 交互式解释器。你可以在 `>>>` 提示符后输入任何有效的 Python 代码，按回车即可执行。完成后，输入 `exit()` 或直接关闭窗口即可退出解释器。

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### 运行 .py 文件

要运行 `.py` 文件，只需在命令提示符或 PowerShell 中输入 `python3 [文件名].py`，将 `[文件名]` 替换成你想运行的文件路径即可。

:::tip
大多数网上的 Python 程序都可以用 `python3 main.py` 来启动，因为 `main.py` 是大多数 Python 程序的默认入口文件。
:::

你也可以直接双击打开 `.py` 文件，或者右键选择用 Python 运行。

## 虚拟环境

写 Python 程序时，可能需要安装一些 pip 包。你可以选择全局安装，也可以创建虚拟环境（venv）来隔离项目依赖。

### 创建虚拟环境

先用文件资源管理器进入你想创建虚拟环境的文件夹，然后运行命令：

```bash
python -m venv .
```

这会在当前目录生成虚拟环境所需文件。

### 激活 & 关闭虚拟环境

要在虚拟环境中执行 `pip install` 等命令，先运行：

```bash
.\Scripts\activate
```

激活后，命令行只会在虚拟环境中运行，脚本也只会访问本地安装的包。

完成后，运行：

```bash
deactivate
```

即可退出虚拟环境。

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)

## 总结

恭喜你，Python 已成功安装！如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂