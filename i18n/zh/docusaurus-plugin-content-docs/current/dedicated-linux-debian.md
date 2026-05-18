---
id: dedicated-linux-debian
title: "独立服务器：Debian 安装指南"
description: "学习如何在你的独立服务器上安装和配置 Debian 操作系统，实现最佳性能和稳定性 → 立即了解更多"
sidebar_label: 安装 Debian
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

接下来我们将一步步教你如何在独立服务器上安装和配置 Debian 操作系统。请仔细按照这些步骤操作，确保系统成功安装并能发挥最佳性能。

:::info

本指南基于 Debian 10 系统编写，其他版本的安装流程可能会有些许差异。

:::



## 准备工作

安装和配置操作系统前，首先需要挂载对应的操作系统 ISO 镜像。挂载方式有多种：

1. 通过初始设置挂载
2. 通过 iLO（虚拟介质）挂载
3. 通过 iLO（远程控制台）挂载

如果你还不熟悉如何挂载 ISO 文件，建议先参考我们的[初始设置](dedicated-setup.md)或[自定义 ISO](dedicated-iso.md)指南。



## 安装过程

当 ISO 成功加载后，服务器将进入安装流程。

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

本示例中，我们将使用“经典”安装方式。

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

选择你希望安装向导显示的语言。请注意，这个语言设置会影响最终安装的系统语言。

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

如果你想要的地区不在第一页，点击“其他”进入下一页。

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

本例中我们选择“欧洲”。

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

根据时区选择，这里选择德国时区。

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

选择美国作为区域设置。

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

这里选择德国键盘布局，即 QWERTZ。如果你是美国用户，默认是 QWERTY。

:::info
服务器正在准备安装所需的组件，这可能需要几分钟。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

服务器会自动通过 DHCP 配置网络接口。选择 `eno1`，这是 ZAP 独立服务器的默认网卡。 ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

主机名可以修改，也可以保持默认。

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

域名也无需更改。

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

设置 root 账户密码，务必记住你设置的密码。

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

确认密码，重复输入。

:::info
安装向导会要求你创建第二个用户账户。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

输入普通用户的名字，随你喜欢填写。

:::info
当然你也可以直接使用 root 账户。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

输入用户名，设置密码并确认。服务器将准备下一步安装。

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

你可以选择手动分区，或者将整个 SSD 作为一个分区使用。如果不想改动分区，选择“引导 - 使用整个磁盘”。

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

选择服务器中安装的 SSD。 ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

通常将所有数据放在一个分区就可以了。 ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

确认分区设置，选择“完成分区并写入磁盘”。

:::info
如果 SSD 上有旧分区，确认覆盖选择“是”。
:::

服务器开始分区并准备安装系统。

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

如果你想添加其他安装介质，比如某些软件包，可以在这里操作。通常你可以通过包管理器（apt）方便地下载安装。

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

我们的独立服务器位于德国，建议选择德国镜像源以获得最佳下载速度。

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

建议使用默认的 Debian 软件仓库。

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

如果你想使用 HTTP 代理，可以在这里填写（非必填）。

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

系统会询问是否发送匿名统计数据，可以选择拒绝或同意。

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

选择你想安装的软件包：

* Debian 桌面环境  
  会在服务器上安装图形界面，但本例只使用命令行界面。

* SSH 服务器  
  必须安装，用于通过 PuTTY 等工具远程连接。

* 标准系统工具  
  提供一系列基础软件包。

用 `TAB` 和方向键切换选项，空格键选择或取消选择。选好后按 `TAB` 到“继续”，回车确认。

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

确认这是服务器上唯一的操作系统，选择“是”。

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

选择默认的 SSD 作为存储位置。

:::info
🎉 你的 Debian 系统安装完成啦！
:::

打开 iLO 的“虚拟介质”，点击“弹出介质”卸载 ISO 文件。

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

卸载成功后，选择继续，服务器将自动重启。

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## 配置

### SSH 登录

服务器重启完成且安装成功后，会提示你登录。

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

当然你肯定想通过 SSH（比如 PuTTY）管理服务器，所以我们需要开启 SSH 登录：

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

用 nano 打开 SSH 配置文件 `nano /etc/ssh/sshd_config`。

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

找到 `#PermitRootLogin no`，改成 `PermitRootLogin yes`。

按 `CTRL + X`，然后按 `Y` 保存退出。

接着输入 `service ssh restart` 重启 SSH 服务。

现在你可以用 PuTTY 连接服务器了，输入你在 ZAP 面板看到的 IP 地址和之前设置的账号密码。

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
有任何问题或疑问，随时联系我们的客服，乐意帮你解决！
:::





## 总结

恭喜你，已经成功在独立服务器上安装了 Debian 操作系统！如果有任何问题或需要帮助，欢迎随时联系每天在线的客服团队，我们随时为你服务！🙂