---
id: dedicated-linux-ip-configuration
title: "独立服务器：IP 配置（Ubuntu/Debian）"
description: "学习如何在运行 Ubuntu 或 Debian 的 Linux 服务器上配置静态 IP 地址 → 立即了解更多"
sidebar_label: 配置 IP 地址
services:
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 介绍

在你的 Linux 独立服务器上配置 IP 地址，可以让你掌控服务器在网络中的通信方式。这包括分配 IP 地址、定义默认网关以及配置网络连接所需的 DNS 服务器。

:::warning 服务器因缺少网络连接而无法访问？
如果由于网络配置错误或缺少互联网连接导致服务器无法访问，SSH 远程连接可能无法使用。请使用 [iLO HTML 控制台](dedicated-ilo.md#the-html5-console) 连接服务器并修复网络配置。
:::

<InlineVoucher />

## 准备工作

在配置静态 IP 地址之前，请确保你已准备好以下信息：

- 你想分配的 IP 地址  
- 子网掩码  
- 默认网关  
- DNS 服务器  

这些信息可以在管理面板中找到。打开你的 **独立服务器管理**，然后进入 **IP 地址** 页面查看。

## 配置

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Ubuntu 系统使用 **Netplan** 来管理网络配置。通过 SSH 连接你的独立服务器，找到 `/etc/netplan/` 目录下的 Netplan 配置文件。打开配置文件：

```bash
nano /etc/netplan/50-cloud-init.yaml
```

修改配置以定义静态 IP 地址：
```
network:
  version: 2
  ethernets:
    eth0:
      match:
        macaddress: "bc:24:11:5f:5c:34"
      addresses:
      - "109.230.238.45/24"
      nameservers:
        addresses:
        - 8.8.8.8
        - 1.1.1.1
      set-name: "eth0"
      routes:
      - to: "default"
        via: "109.230.238.1"
```

根据你的网络配置调整以下数值：

- 109.230.238.45 → 你的静态 IP 地址
- 109.230.238.1 → 你的网关地址
- DNS 地址 → 你偏好的 DNS 服务器

保存文件并应用配置：

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

Debian 通常使用网络接口配置文件而非 Netplan。通过 SSH 连接你的独立服务器，打开网络接口配置文件：

```
nano /etc/network/interfaces
```

添加或修改你的网络接口配置。示例配置：

```bash
auto lo
iface lo inet loopback

# 主网络接口
allow-hotplug ens18
iface ens18 inet static
        address 134.255.219.160/24
        gateway 134.255.219.1
        # dns-* 选项由 resolvconf 包实现（如果已安装）
        dns-nameservers 1.1.1.1
```

根据你的网络配置调整数值：
- address → 你的静态 IP 地址
- netmask → 你的子网掩码
- gateway → 你的默认网关
- dns-nameservers → 你偏好的 DNS 服务器

保存配置文件后，重启网络服务：

```
systemctl restart networking
```

</TabItem> </Tabs>



## 验证

应用配置后，建议确认新 IP 地址是否正确生效。运行以下命令：

```
ip a
```

该命令会显示系统中所有 **网络接口** 及其当前配置。在输出中找到之前配置的接口，通常名为 `eth0`、`ens18` 或类似名称。

在该接口部分，查找 **`inet` 条目**，它代表分配给该接口的 IPv4 地址。输出中应包含你之前配置的静态 IP 地址，例如：

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

如果输出中显示了正确的地址，说明静态 IP 配置已成功应用。如果没有显示新 IP，请再次检查配置文件，确保保存无误，然后重新应用配置。



## 总结

恭喜你！你已经成功在 Linux 服务器上配置了 IP 地址。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />