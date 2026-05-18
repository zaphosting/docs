---
id: vserver-windows-speedtest-cli
title: "在 Windows 服务器上安装 Speedtest CLI - 监控你的网络性能"
description: "了解如何高效管理源码并使用 Speedtest CLI 实现无缝版本控制，助力现代开发 → 立即了解更多"
sidebar_label: 安装 Speedtest CLI
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Speedtest CLI 是一个分布式版本控制系统，专为高效管理源码而设计。它让开发者能够跟踪变更、同时在不同分支上工作，并无缝协作项目。凭借其灵活性和性能，Speedtest CLI 已成为现代软件开发中的版本控制标准工具。

想自己托管这个服务？我们会一步步带你完成安装和配置，同时告诉你所有需要注意的事项。

<InlineVoucher />

## 准备工作

在安装 **Speedtest CLI** 之前，你需要先准备好系统环境。这包括将操作系统更新到最新版本。这样能保证环境稳定，避免安装过程中或之后出现问题。

### 更新系统
为了确保系统运行最新的软件和安全补丁，建议先执行系统更新。这能保证你的系统拥有最新的安全修复和软件版本，方便后续操作。

## 安装

完成必要准备后，就可以开始安装 Speedtest CLI 应用程序了。请点击这里下载 Windows (x64) 版本的 Speedtest CLI：https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

下载完成后，运行安装程序并按照提示完成安装。

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)

## 配置

speedtest-cli 不依赖传统的配置文件，而是通过命令行选项和环境变量进行自定义。这样可以方便你实现一致且自动化的使用：

- `--server <ID>`：通过服务器 ID 选择特定服务器，获得更稳定且可比的测试结果。  
- `--bytes`：以字节每秒显示速度，而非比特。  
- `--simple`：只输出 ping、下载和上传速度，格式简洁。  
- `--json` 或 `--csv`：适合自动化和日志记录，结果以机器可读格式保存。  
- 代理支持：通过设置环境变量如 `http_proxy` 或 `https_proxy`，可在代理环境下运行 speedtest-cli。  

如果你经常用相同参数运行，建议创建 shell 别名或小脚本包装，这样能快速执行 speedtest-cli 并保证输出统一。

## 总结及更多资源

恭喜你！现在已经成功在你的 vServer 上安装并配置了 Speedtest CLI。我们还推荐你查看以下资源，能为你的服务器配置提供更多帮助和指导：

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - 官方网站

有具体问题这里没提到？欢迎随时联系我们的支持团队，我们每天都在线，随时帮你解决问题！🙂

<InlineVoucher />