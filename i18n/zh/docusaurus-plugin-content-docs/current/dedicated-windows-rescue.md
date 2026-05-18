---
id: dedicated-windows-rescue
title: "独立服务器：使用 System Rescue 恢复你的文件"
description: "了解如何使用 SystemRescue ISO 从无法启动的服务器恢复数据并创建备份，以及安全文件传输 → 立即了解更多"
sidebar_label: System Rescue（备份）
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你的服务器无法启动了？被系统锁住了，或者想在做改动前先备份数据？
通过使用 **SystemRescue ISO** 启动服务器，你依然可以访问硬盘，恢复重要文件，并在本地创建备份。即使原操作系统无法访问，这个方法依然有效。

为了安全传输恢复的数据，你可以使用 **SFTP（安全文件传输协议）**。这种方式允许你通过加密连接，将文件从救援系统复制到本地电脑或另一台服务器。

## 准备工作

备份数据时，我们会用到 **SystemRescue ISO 版本 12.01**。
首先登录你的独立服务器管理界面，找到 **初始安装**（Initial installation）部分。

从可用选项中选择 **SystemRescue 12.01** ISO。选好后，点击 **从 ISO 启动**（Boot from ISO）开始启动流程。服务器从 ISO 启动后，通过 [iLO 界面](dedicated-ilo.md) 连接服务器继续操作。

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)

在 **iLO 管理界面**，打开 **HTML 控制台** 访问服务器远程显示。控制台激活后，你会看到 **SystemRescue ISO** 的启动菜单。选择使用 **默认参数** 启动。

这样 SystemRescue 会以推荐的标准配置启动，提供一个稳定且可用的环境，方便系统维护或数据备份。

![img](https://screensaver01.zap-hosting.com/index.php/s/gzLJxw9FWZs4AJ7/download)

## 挂载硬盘

挂载硬盘前，先查看可用的存储设备和分区，执行命令：

```
fdisk -l
```

这个命令会列出所有检测到的硬盘及其分区信息，包括：

- 连接的存储设备（如 `/dev/sda`、`/dev/sdb`），
- 每个硬盘的大小，
- 分区类型，
- 可用分区（如 `/dev/sda1`、`/dev/sda2` 等），
- 文件系统类型（如果检测到）。

举例来说，硬盘 `/dev/sda` 有三个分区：`/dev/sda1`、`/dev/sda2` 和 `/dev/sda3`。挂载前务必确认选对分区。`fdisk -l` 的输出能帮你避免选错硬盘或分区。示例：

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device     Boot   Start       End   Sectors  Size Id Type
/dev/sda1  *       2048    206847    204800  100M  7 HPFS/NTFS/exFAT
/dev/sda2        206848 232935855 232728008  111G  7 HPFS/NTFS/exFAT
/dev/sda3     232935856 234373119   1431264  699M 27 Hidden NTFS WinRE
```

确认分区后，创建一个目录作为挂载点，然后将分区挂载到该目录。建议以 **只读模式** 挂载，确保数据安全。

创建挂载点并挂载分区的命令如下：

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

将 `/dev/sdaX` 替换成你通过 `fdisk -l` 找到的正确分区，比如示例中是 `/dev/sda2`。

:::tip 休眠状态的 Windows 分区

Linux 无法安全打开处于休眠或快速启动状态的 Windows 分区。为防止数据丢失或损坏，务必 **以只读模式挂载** 这些分区。

:::

## 防火墙配置

出于安全考虑，SystemRescue 默认启用防火墙，阻止所有入站连接，防止未授权访问。

但这次你需要允许本地机器连接 SystemRescue 上运行的 SFTP 服务器。你可以配置防火墙放行 SFTP 流量，或者临时关闭防火墙。

如果你在可信网络环境中，最简单快速的做法是用下面命令停止 SystemRescue 的防火墙服务：

```
systemctl stop iptables
```

## 设置 root 密码

SFTP 客户端需要用用户名和密码认证，才能访问 SFTP 服务器上的数据。这里用系统 root 账号访问 SystemRescue 中可见的文件。默认情况下，SystemRescue 不允许 root 账号认证，需要先设置密码。

用下面命令设置 root 密码：

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```

## 数据传输

现在你可以开始备份数据了。打开你喜欢的 FTP 客户端，连接到服务器。确保选择 `SFTP` 作为传输协议。主机名填写服务器的 `IP 地址`，端口用 `21`，用户名是 `root`，密码是你刚才设置的。

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

首次通过 **SFTP** 连接服务器时，WinSCP 会弹出安全提示。因为服务器的 **主机密钥** 还没存到本地缓存。

只要你确认 IP 地址正确且是自己主动连接，**信任该服务器是安全的**。点击 **“是”** 确认，服务器密钥会被加入缓存，后续连接就不会再提示。

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

连接成功后，进入之前创建的 **rescue 目录**。这里可以访问你的文件，开始下载到本地。浏览文件夹，选中要备份的数据，通过 SFTP 安全传输。

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## 总结

你已经成功救回并备份了重要文件。
数据安全有保障，随时可以恢复。接下来你可以继续重装服务器、修复系统，或者把数据迁移到新环境。

有任何问题或需要帮助，随时联系在线客服，我们每天都在线为你服务！🙂