---
id: dedicated-linux-speedtest-cli
title: "独服专用：Linux 上安装 Speedtest-Cli"
description: "了解如何设置和使用 Speedtest-Cli，实现多协议的可靠网络测试和自动化 → 立即了解"
sidebar_label: 安装 Speedtest-Cli
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Speedtest-Cli 是一个免费命令行工具，同时也是一个用于通过 URL 传输数据的软件库（libSpeedtest-Cli）。它支持多种协议——包括 HTTP(S)、FTP、SMTP、LDAP、MQTT 等，常用于下载文件、测试 API 以及自动化网络操作。

想自己托管这个服务？我们会带你一步步完成安装和配置，告诉你所有需要注意的细节。

## 准备工作

在安装 **Speedtest-Cli** 之前，你需要先准备好系统，包括将操作系统更新到最新版本。这些准备工作能保证环境稳定，避免安装过程中或之后出现问题。

### 更新系统
为了确保系统运行的是最新的软件和安全补丁，建议先执行系统更新。运行以下命令：

```
sudo apt update && sudo apt upgrade -y
```
这样可以确保你的系统拥有最新的安全修复和软件版本，方便后续操作。

## 安装

准备工作完成后，就可以安装 Speedtest-Cli 了。执行以下命令：

```console
sudo apt install speedtest-cli
```

## 配置

speedtest-cli 不依赖传统的配置文件，而是通过命令行参数和环境变量进行定制。这样可以方便你实现一致且自动化的使用：

- `--server <ID>`：通过服务器 ID 选择特定测试服务器，保证测试结果更稳定且可比。  
- `--bytes`：以字节每秒显示速度，而非比特。  
- `--simple`：只输出 ping、下载和上传速度，格式简洁。  
- `--json` 或 `--csv`：适合自动化和日志记录，结果以机器可读格式保存。  
- 代理支持：通过设置环境变量如 `http_proxy` 或 `https_proxy`，可以在代理后运行 speedtest-cli。

如果你经常用相同参数测试，建议创建 shell 别名或小脚本包装，这样能快速调用并保证输出统一。

## 总结与更多资源

恭喜你！现在你已经成功在独服上安装并配置了 Speedtest-Cli。我们还推荐你看看以下资源，能帮你在服务器配置过程中获得更多帮助：

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - 官方网站

有啥具体问题没覆盖到？随时联系在线客服，我们每天都在线，随时帮你解决问题！🙂