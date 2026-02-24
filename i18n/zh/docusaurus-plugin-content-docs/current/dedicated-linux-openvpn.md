---
id: dedicated-linux-openvpn
title: "在 Linux 服务器上安装 OpenVPN - 搭建你的安全 VPN 基础设施"
description: "了解如何使用 Linux 服务器上的 OpenVPN 保护你的网络连接并访问受限内容 → 立即学习"
sidebar_label: 安装 OpenVPN
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

OpenVPN 是一款强大且多功能的 VPN 软件，能够通过互联网建立安全连接。它是一个开源解决方案，提供强大且可配置的 VPN 技术，用于在你的设备和 VPN 服务器之间建立加密连接。通过使用 OpenVPN，用户可以保护他们的网络连接，保障在线隐私，并且无论身处世界何地，都能访问地理限制内容。在本指南中，我们将探索如何在 Linux 服务器上安装和配置 **OpenVPN** 服务。

## 准备工作

首先必须激活网络驱动 **TUN**。这一步对 root 服务器来说不需要。
你需要在 **/usr/sbin** 文件夹下创建一个名为 **tunscript.sh** 的新文件。

```
nano /usr/sbin/tunscript.sh 
```

然后插入以下内容：
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

按 `CTRL+O` 保存文件，接着按 `Y` 确认，最后按 `Enter`。退出编辑器按 `CTRL+X`。接着执行以下命令：

```
chmod +x /usr/sbin/tunscript.sh
```

完成后，运行 ``crontab -e`` 并选择 **nano 编辑器** [1]。在文件末尾添加以下行：
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

按 `CTRL+O` 保存，`Y` 确认，`Enter`，然后按 `CTRL+X` 退出。重启后你就可以继续操作了。

## 安装

在控制台执行以下命令安装 OpenVPN：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

随后会出现一个对话框，询问你想用 UDP 还是 TCP。我们推荐 UDP，所以输入 `1` 并按 `Enter`。接着会让你输入 OpenVPN 端口，建议使用默认端口。

然后配置 DNS 服务器。我们推荐使用 Google 公共 DNS 或 Cloudflare DNS：
```
8.8.8.8 / 8.8.4.4 - Google 公共 DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

接下来，定义一个客户端名称。你可以随意设置，比如你的设备名。

## 配置

### 添加更多客户端

如果你想创建多个连接，建议创建多个账户。执行以下命令创建新账户：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

选择 `1` 并确认。然后输入客户端名称。

### 删除客户端

运行以下命令删除客户端：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

选择你想删除的客户端编号，按 `Enter`。系统会提示确认删除，确认按 `Y`，再按 `Enter`。
客户端就会被删除。

## 卸载

如果不再需要 OpenVPN，可以这样卸载：
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
按 `3` 并确认。再次确认后，OpenVPN 会被卸载。

## 连接 VPN

想连接 VPN，推荐使用 **[OpenVPN 客户端](https://openvpn.net/community-downloads/)**。在你想连接的设备上下载并安装。

通过 SFTP 连接服务器，下载生成的 .ovpn 文件，下载后建议删除服务器上的该文件。安装客户端后启动程序，右键点击任务栏的 OpenVPN 图标，选择“导入文件”，选中刚才下载的文件并点击“打开”。连接时再次点击图标，选择“连接”。

:::info
如果导入了多个配置文件，需要先选择你想用的客户端，然后点击连接
:::