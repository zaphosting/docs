---
id: source-metamod-installation
title: 在服务器上安装 Source Mod 和 Meta Mod
description: "了解如何通过 Source- 和 Metamod 来增强你的 Source 引擎游戏服务器，实现高级定制和管理 → 立即了解更多"
sidebar_label: 安装
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## SM 和 MM 到底是什么？

Source Mod 和 Meta Mod 是两个 Half Life 2 的扩展，能让你的 Source 引擎游戏服务器（比如 CS: S、CS: GO、DoD: S、TF2 等）比平常更个性化。它们支持插件使用和更强大的服务器管理功能。

<InlineVoucher />

## SM / MM 安装指南

### 下载文件

首先，你需要下载这两个扩展。一定要用最新的稳定版本（**stable**），保证功能完整且兼容。最新版本可以从以下网站下载：

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)
- 
![](https://screensaver01.zap-hosting.com/index.php/s/zb6LsPbnAYJSHap/preview)

:::info
ZAP-Hosting 的 Source 引擎游戏服务器通常运行在 Linux 系统上，所以请下载对应的 Linux 版本扩展。
:::

### 解压文件

下载后你会得到两个压缩包（sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar），需要先解压才能上传。推荐用 Winrar、7zip 或类似软件。

![](https://screensaver01.zap-hosting.com/index.php/s/fw8r376kqKr5rgL/preview)

解压后会得到 addons 和 cfg 两个文件夹：

![](https://screensaver01.zap-hosting.com/index.php/s/oJazFjaDWCjt9oP/preview)

### 上传文件

完成以上步骤后，就可以开始安装了。我们需要通过 FTP 连接服务器，把扩展文件夹上传上去。

文件必须上传到游戏的主目录，主目录路径如下：

| 游戏 | 文件夹  |
| :-----: |:-------------:| 
| CS: Global Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://screensaver01.zap-hosting.com/index.php/s/g384YWYRN8TaPRx/preview)

上传后文件夹结构应该长这样：

![](https://screensaver01.zap-hosting.com/index.php/s/JTwTwzeXQdZrYY7/preview)

## 检查 SM / MM 是否安装成功

有两种方法确认扩展是否安装正确：

1. 游戏内控制台
2. 远程控制台（HLSW - RCON）

### 通过命令查询版本

操作步骤：

1. 进入游戏服务器
2. 打开控制台，输入命令：

```
sm version
meta version
```

你会看到类似这样的输出：

![](https://screensaver01.zap-hosting.com/index.php/s/qdNywS6PLdJkrnP/preview)

### 📖 通过 RCON 查询版本

![](https://screensaver01.zap-hosting.com/index.php/s/jZZ6FFxksJgcCSf/preview)

操作步骤：

1. 在上方 IP / Port 输入服务器 IP 地址
2. 点击下方的 Rcon Configuration
3. 在 Rcon password 输入你的 Rcon 密码
4. 打开控制台，输入命令：

```
sm version
meta version
```

你会看到类似这样的输出：

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

下载 HLSW: http://www.hlsw.net/hlsw/download/

<InlineVoucher />