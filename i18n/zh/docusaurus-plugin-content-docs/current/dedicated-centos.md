---
id: dedicated-centos
title: "独立服务器：CentOS 安装指南"
description: "了解如何在你的独立服务器上成功安装并配置 CentOS，实现最佳性能与安全 → 立即了解更多"
sidebar_label: 安装 CentOS
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

接下来将一步步教你如何在独立服务器上安装并配置 CentOS 操作系统。请仔细按照这些步骤操作，确保顺利完成系统安装并充分发挥其性能。

:::info

本指南基于 CentOS 8.3 版本编写。不同版本的安装流程可能会有些许差异。

:::



## 准备工作

安装和配置操作系统时，首先需要挂载对应的操作系统 ISO 镜像。常见的挂载方式有：

1. 通过初始设置挂载
2. 通过 iLO（虚拟介质）挂载
3. 通过 iLO（远程控制台）挂载

如果你还不熟悉如何挂载 ISO 文件，建议先参考我们的[初始设置](dedicated-setup.md)或[自定义 ISO](dedicated-iso.md)指南。



## 安装过程

当 ISO 镜像成功加载后，服务器将进入安装流程。

![](https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview)

* 键盘
选择你喜欢的键盘布局

* 时间与日期
选择你的时区

* Root 密码
为 root 账户设置密码。密码可以自定义，但请务必使用强密码并妥善保存。

* 安装目标
选择要安装 CentOS 的 SSD 硬盘

* 网络与主机名
由于兼容性问题，网络暂时无法设置，稍后我们会完成这一步。

确认所有设置无误后，点击“开始安装”。

![](https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview)

安装完成后，请从服务器中卸载 ISO 文件，然后点击“重启系统”。



## 配置

### 网络设置

接下来配置网络设备，需要更新一些文件。请通过远程控制台或 iLO 挂载以下 ISO 文件到服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

ISO 挂载成功后，需要在系统中挂载它以便访问。

```mount /dev/sr0 /mnt```

此时 ISO 文件已挂载到 `/mnt`

```rpm -i /mnt/be2net.rpm```

安装更新包。

```modprobe be2net```

执行更新，这可能需要几秒钟。
你可以用 `ip a s` 命令检查是否存在名为 `eno1` 的网络设备，若存在，请重启系统。

系统重启后，继续配置网络设备。

```nano /etc/sysconfig/network-scripts/ifcfg-eno1```

请将以下内容写入文件：

```
DEVICE=eno1
BOOTPROTO=dhcp
ONBOOT=yes
```

按 `CTRL+X`，然后按 `Y` 退出 nano 编辑器。

现在用 `ifup eno1` 启动网络设备。

:::info
你的独立服务器现在应该已经连接上互联网啦。
:::





## 总结

恭喜你，已成功在独立服务器上安装 CentOS 操作系统。如有任何疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂
