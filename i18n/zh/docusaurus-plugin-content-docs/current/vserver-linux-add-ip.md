---
id: vserver-linux-add-ip
title: "VPS：配置 IP 地址"
description: "了解如何在 Debian 和 Ubuntu 系统上配置和管理主 IP 及附加 IP 地址，实现网络优化 → 立即了解更多"
sidebar_label: 配置 IP 地址
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

想要配置你的网络设置并指定 IP 地址吗？

<InlineVoucher />

## 配置 IP 地址

本节介绍如何定义和确认主 IP 地址。

<Tabs>
  <TabItem value="debian" label="Debian" default>

Debian 的网络配置通过网络接口文件进行。执行 `sudo nano /etc/network/interfaces` 命令打开网络配置文件。默认情况下，网络配置内容应如下所示：

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

如果文件内容还不存在，请按上述格式填写。将 IP 地址占位符（XXX.XXX.XXX.XXX）替换为你服务器管理面板中显示的服务器 IP。子网掩码使用 `255.255.255.0`（C 类网络），确保网关的最后一段是 1。

按 CTRL+X 保存更改，按回车键确认。接着需要重启网络模块，使新的 IPv4 地址生效，执行以下命令：

```
sudo service networking restart
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
[Match]
Name = eth0

[Network]
Description = Interface eth0 autoconfigured by PVE
Address = 185.223.31.234/24
Gateway = 185.223.31.1
DHCP = no
IPv6AcceptRA = false
```

  </TabItem>
</Tabs>

## 配置附加 IP 地址
<Tabs>
  <TabItem value="debian" label="Debian" default>

```
allow-hotplug eth0:1
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

   占位符

</TabItem>
</Tabs>

## 测试配置
要检查配置的 IP 地址是否正确且可用，可以进行 ping 测试。你可以在自己的电脑上打开命令提示符（cmd.exe），执行以下命令：

```
ping <your_server_ip>
```

执行命令后，如果 IP 地址配置正确，结果应类似如下：

```
Pinging XXX.XXX.XXX.XX with 32 bytes of data:
Reply from XXX.XXX.XXX.XX: bytes=32 time=25ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=23ms TTL=56

Ping statistics for XXX.XXX.XXX.XX:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 22ms, Maximum = 25ms, Average = 23ms
```

## 结语

恭喜你，网络配置已成功完成！如果有任何疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />