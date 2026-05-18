---
id: vserver-rescue
title: "VPS：使用 System Rescue 恢复你的文件"
description: "了解如何使用 SystemRescue ISO 从无法启动的服务器中安全恢复数据并创建备份 → 立即了解"
sidebar_label: System Rescue（备份）
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你的服务器无法启动了？被系统锁定了，或者想在做改动前先备份数据？
通过使用 **SystemRescue ISO** 启动服务器，你依然可以访问硬盘，恢复重要文件，并在本地创建备份。即使原操作系统无法访问，这个方法依然有效。

为了安全传输恢复的数据，你可以使用 **SFTP（安全文件传输协议）**。这种方式允许你通过加密连接，将文件从救援系统复制到本地电脑或另一台服务器。

<InlineVoucher />

## 准备工作

备份数据时，我们将使用 **SystemRescue ISO 版本 12.01**。
首先登录你的 VPS 面板，进入 **ISOs** 区域。

从可用选项中选择对应的 ISO。选好后，点击 **调整启动顺序**，然后点击 **重启** 按钮开始启动。

![img](https://screensaver01.zap-hosting.com/index.php/s/pGXka7wkrsBe9XY/preview)

服务器从 ISO 启动后，通过 [VNC 控制台](vserver-vnc.md) 连接服务器继续操作。控制台激活后，你会看到 **SystemRescue** ISO 的启动菜单。选择使用 **默认参数** 启动。

这样可以确保 SystemRescue 以推荐的标准配置启动，提供一个稳定且即用的环境，方便系统维护或数据备份。

![img](https://screensaver01.zap-hosting.com/index.php/s/sw4jLc5AxwtMT5P/preview)

## 挂载硬盘

挂载硬盘前，先查看可用的存储设备和分区。用下面命令：

```
fdisk -l
```

这个命令会列出所有检测到的硬盘及其分区信息。输出内容包括：

- 连接的存储设备（如 `/dev/sda`、`/dev/sdb`），
- 每个硬盘的大小，
- 分区类型，
- 可用分区（如 `/dev/sda1`、`/dev/sda2` 等），
- 文件系统类型（如果检测到的话）。

举例来说，硬盘 `/dev/sda` 有三个分区：`/dev/sda1`、`/dev/sda2` 和 `/dev/sda3`。挂载前务必确认选对分区。`fdisk -l` 的输出能帮你避免选错，清楚显示哪个硬盘里有什么数据。示例：

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

确认正确分区后，下一步是创建一个目录作为挂载点，也就是分区将被访问的位置。然后将分区挂载到这个目录。建议以 **只读模式** 挂载，确保数据安全。

创建挂载点并挂载分区的命令如下：

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

把 `/dev/sdaX` 替换成你用 `fdisk -l` 找到的正确分区编号。比如本例中，正确分区是 `/dev/sda2`。

## 配置网络

网络不会自动配置。要联网，必须手动设置基本网络参数。分配 IP 前，建议先确认网卡名称。大多数情况下网卡名是 **ens18**，但可能会不同。用命令 `ip a` 查看。

确认网卡后，可以手动分配 IP。比如配置局域网内的地址：

```
ip addr add <IP>/24 dev <adapter>
```

把 `<IP>` 换成你想用的地址，`<adapter>` 换成检测到的设备名，通常是 `ens18`。为了确保系统能正确路由，还要添加默认网关：

```
ip route add default via <gateway>
```

把 `<gateway>` 替换成你网络的有效网关地址。完成后，网络配置生效，可以通过 ping 外部主机测试连通性。

## 配置防火墙

出于安全考虑，SystemRescue 默认启用防火墙，所有入站连接都会被阻止，防止未授权访问。

但这次你需要允许本地机器连接 SystemRescue 上运行的 SFTP 服务器。你可以配置防火墙放行 SFTP 流量，或者临时关闭防火墙。

如果你在可信网络环境中，最简单快速的办法是用下面命令停止 SystemRescue 的防火墙服务：

```
systemctl stop iptables
```

## 设置 root 密码

SFTP 客户端需要用用户名和密码认证，才能访问 SFTP 服务器上的数据。这里用的是系统 root 账号，这样客户端才能访问 SystemRescue 中可见的文件。默认情况下，SystemRescue 不允许 root 账号认证。你必须设置密码，才能让客户端登录。用下面命令设置密码：

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```

## 数据传输

现在你可以开始备份数据了。打开你喜欢的 FTP 客户端，连接到服务器。确保选择 `SFTP` 作为传输协议。主机名填服务器的 `IP 地址`，端口用 `21`，用户名是 `root`，密码是你刚才设置的那个。

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

首次通过 **SFTP** 连接服务器时，WinSCP 会弹出安全提示。这个警告是因为服务器的 **主机密钥** 还没存到你本地缓存。

既然你确认 IP 地址没错，且是自己主动发起连接，**可以放心信任服务器**。点击 **“是”** 确认，这样服务器密钥会被加入缓存，今后连接就不会再提示了。

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

连接成功后，进入你之前创建的 **rescue 目录**。这里可以访问你的文件，开始下载到本地。浏览文件夹，选中想备份的数据，通过 SFTP 安全传输。

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## 总结

你已经成功救回并备份了重要文件。
这意味着你的数据安全无虞，随时可以恢复。接下来你可以继续执行其他操作，比如重装服务器、修复系统，或者把数据迁移到新环境。

如果有任何问题或需要帮助，随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />