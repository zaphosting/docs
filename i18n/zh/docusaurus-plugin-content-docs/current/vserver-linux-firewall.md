---
id: vserver-linux-firewall
title: "VPS：Linux 防火墙管理"
description: "学习如何配置防火墙来保护你的服务器并允许必要的外部连接 → 立即了解更多"
sidebar_label: 端口转发（防火墙）
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

很多服务和程序都需要允许外部连接，这就需要设置防火墙。
本指南将教你如何设置防火墙并允许这些连接。

<InlineVoucher />

## 准备工作

要安装防火墙，你需要通过 SSH 连接到你的服务器。如果你还不知道怎么操作，可以参考我们的[初始访问](vserver-linux-ssh.md)指南。
连接后，建议先用 `apt update` 和 `apt upgrade` 更新服务器。

## 使用 UFW（简单）

Linux 有多种防火墙程序，本指南重点介绍两款最流行的：UFW 和 IPTables。
我们先从 UFW 开始，因为它更容易设置和管理。

### 安装 UFW

你可以通过 APT 简单安装 UFW，命令是 `sudo apt install ufw`。
为了避免 SSH 连接断开，暂时不要激活它，先进行配置。

### 配置 UFW

我们建议默认使用以下策略：

`sudo ufw default deny incoming`  
和  
`sudo ufw default allow outgoing`

接下来允许 SSH 连接和你想开放的其他端口：

`sudo ufw allow 22` 允许 SSH

`sudo ufw allow 80` 例如 HTTP

`sudo ufw allow 25565` 例如 Minecraft 服务器

启用 UFW，运行 `sudo ufw enable`。如果需要，可以随时用 `sudo ufw allow PORT` 开放更多端口。

### 添加端口转发

转发端口很简单，使用以下命令：

TCP 端口：

`sudo ufw allow PORT/tcp`，将 PORT 替换成你想转发的端口。

示例：`sudo ufw allow 25565/tcp` 用于 Minecraft 服务器

UDP 端口：

`sudo ufw allow PORT/udp`，将 PORT 替换成你想转发的端口。

示例：`sudo ufw allow 9987/udp` 用于 TeamSpeak 3 服务器

### 查看和删除端口转发规则

查看所有端口规则，运行 `sudo ufw status numbered`。如果想删除规则，使用 `sudo ufw delete NUMBER`，NUMBER 是规则列表中的编号。

## 安装 IPTables（高级）

大多数系统默认已包含 IPTables，但你可以用 `sudo apt install iptables` 确认安装。

### 配置 IPTables

首先设置默认策略和规则：

`sudo iptables -P INPUT DROP` 拒绝所有入站连接

`sudo iptables -P FORWARD DROP` 拒绝所有转发

`sudo iptables -P OUTPUT ACCEPT` 允许所有出站连接

`sudo iptables -A INPUT -i lo -j ACCEPT` 允许环回接口

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` 允许所有已建立和相关连接

接着允许 SSH 和你想开放的其他端口：

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` 允许 SSH

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` 例如 HTTP

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` 例如 Minecraft 服务器

然后让规则持久化，重启后依然生效。安装持久化包：`sudo apt install iptables-persistent`，保存规则：`sudo netfilter-persistent save`，并设置开机自启：`sudo systemctl enable netfilter-persistent`。

### 添加端口转发

转发端口命令如下：

TCP 端口：

`sudo iptables -A INPUT -p tcp --dport PORT -j ACCEPT`，将 PORT 替换成你想转发的端口。

示例：`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` 用于 Minecraft 服务器

UDP 端口：

`sudo iptables -A INPUT -p udp --dport PORT -j ACCEPT`，将 PORT 替换成你想转发的端口。

示例：`sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT` 用于 TeamSpeak 3 服务器

### 查看和删除端口转发规则

查看所有规则，运行：`sudo iptables -L --line-numbers`。删除规则用：`sudo iptables -D INPUT NUMBER`，将 NUMBER 替换成你想删除的规则编号。

## 总结

你已经成功在 Linux 服务器上安装了防火墙，并创建了自己的端口规则。你也可以用这份指南来转发更多端口。
如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />