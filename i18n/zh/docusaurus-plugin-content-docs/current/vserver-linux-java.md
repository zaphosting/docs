---
id: vserver-linux-java
title: "VPS：Java 安装指南"
description: "学习如何在各种 Linux 系统上安装和配置 Java，顺畅运行你的程序 → 立即了解更多"
sidebar_label: 安装 Java
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Java 是一门全球广泛使用的超热门编程语言，支撑着无数程序和服务。要运行基于 Java 的程序，系统里必须先装好 Java。接下来你将学会如何在我们提供的 Linux 系统上安装 Java。

<InlineVoucher />

## 准备工作

在正式安装 Java 之前，先确保系统是最新的。我们通过 SSH 连接到服务器。如果你还不熟悉 SSH 是啥，或者怎么用，先看看这篇指南：[初次访问（SSH）](vserver-linux-ssh.md)

连接上后，根据你的操作系统，用下面的命令更新系统：

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## 安装步骤

准备工作完成后，就可以开始安装 Java 了。根据不同系统，执行以下命令：

**Debian**

```
sudo apt-get install default-jdk
```

**Ubuntu**

```
sudo apt install default-jdk
```

**CentOS**

```
sudo yum install java-11-openjdk
```

**Fedora**

```
sudo dnf install java-11-openjdk
```

## 版本检测

安装完后，可以用 **java --version** 命令确认安装成功。输出应该类似这样：

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

## 总结

恭喜你，Java 已经成功安装并配置完成！如果还有任何疑问或问题，随时联系我们的支持团队，我们每天都在线帮你搞定！ 

<InlineVoucher />