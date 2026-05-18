---
id: dedicated-dashboard
title: "独立服务器：控制面板总览"
description: "了解如何高效管理和优化你的独立服务器，掌握关键功能和管理工具 → 立即了解更多"
sidebar_label: 控制面板
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你对**独立服务器**感兴趣或已经拥有一台，但还缺乏对管理界面和所有必要选项的全面了解？尤其是刚开始时，这可能会有点挑战。不过别担心，下面我们会为你详细介绍服务管理，让你拥有最清晰的全局视角。

看完这篇指南后，你将能轻松高效地管理你的独立服务器，快速找到所有必需的选项和功能。这里为你提供了一个结构化的总览，帮助你一步步熟悉独立服务器的管理，并有针对性地扩展你的知识。这样，你就能确保你的**独立服务器**根据需求得到最佳配置，充分发挥所有可用功能的价值。

## 产品管理

在**产品管理**部分，你会找到管理独立服务器所需的所有页面。下面详细列出了管理独立服务器的各项功能。

### 控制面板

控制面板提供了所有与独立服务器相关的重要信息的集中展示。它显示当前状态、服务器地址、主机名、已安装操作系统、系统负载（包括CPU和内存使用情况）以及网络流量。这个总览有助于你高效监控和管理虚拟服务器环境。

![img](https://screensaver01.zap-hosting.com/index.php/s/QEnaS6N7MqHejtk/preview)

### 事件日志

在这里你可以集中查看所有管理任务和系统事件。事件日志收集了所有相关活动，让你随时知道是谁在什么时候做了哪些更改，影响了哪些内容。

![img](https://screensaver01.zap-hosting.com/index.php/s/akKpTx2XzDKy7qc/preview)

### 统计数据

详细的流量数据让你清楚了解服务器处理了多少进出数据。当前温度和风扇转速的读数帮助你随时保持硬件在安全的工作范围内。

![img](https://screensaver01.zap-hosting.com/index.php/s/B7yLamtJrdALpPb/preview)

### 硬件状态

在这里你可以一站式查看所有关键硬件信息。检查当前安装的固件版本，包括系统ROM、iLO和存储控制器，实时监控CPU、内存、网络接口和连接硬盘的状态。

详细的硬件数据帮助你及早发现潜在问题，确保服务器稳定运行。你还可以查看所有维护工作的清晰日志，随时了解哪些更新或维修在什么时候完成。

![img](https://screensaver01.zap-hosting.com/index.php/s/9CsZGarzsdMP5Ea/preview)

## 设置

在**设置**部分，你会找到配置独立服务器所需的所有页面。下面详细列出了可用的配置选项。

### 初始安装

在你能开始高效使用独立服务器之前，需要完成初始设置。这包括激活iLO管理界面、选择并挂载ISO镜像，以及安装你想要的操作系统。设置向导会一步步引导你完成整个过程，即使没有经验也能轻松上手。详细说明请参考我们的[初始设置](dedicated-setup.md)指南。

![img](https://screensaver01.zap-hosting.com/index.php/s/MnZKXAGGTqs9Xdp/download)

### 设置

调整独立服务器的配置选项。在这里，你可以完全掌控电源模式等设置，帮助你根据具体需求优化服务器。

![img](https://screensaver01.zap-hosting.com/index.php/s/WiHSELJNc5icsyQ/preview)

### DDoS 管理器

查看历史DDoS攻击，更好地评估潜在威胁和攻击模式。开启服务器DDoS攻击通知，确保事件发生时你能快速响应。

根据服务器所在位置及可用的DDoS防护，你还可以实时监控正在进行的攻击。这里包括详细的流量分析，展示合法流量和被防护系统拦截的流量量。这样的透明度帮助你了解防护效果，及早识别潜在风险。

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

### 游戏服务器 / TS3

这个功能让你只需几步就能轻松搭建和管理游戏服务器及语音服务器。网页界面会帮你完成整个安装流程，无需深厚技术背景。

你可以随时创建新的游戏服务器或语音服务器，调整槽位数或资源配置，并通过ZAP的网页控制面板轻松管理。多服务器管理变得快速、灵活又简单。所有操作一站搞定。

:::warning 操作系统兼容性  
此功能仅支持部分Linux操作系统。关于如何设置和使用GS/TS3界面，请参考我们的[GS/TS3界面](dedicated-linux-gs-interface.md)指南。  
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/nd6YF93omGcApC8/preview)

### 编辑反向DNS

调整服务器IP地址的反向DNS条目（PTR记录），指向正确的主机名。正确配置的rDNS确保你的独立服务器名称能正确解析，尤其对运行邮件服务器非常重要。没有有效的rDNS，发出的邮件可能被标记为垃圾邮件或无法可靠送达。

![img](https://screensaver01.zap-hosting.com/index.php/s/LpdMgD6T39tXiNK/preview)

### IP地址

一览服务器分配的所有IP地址。该视图显示IP地址、子网掩码和网关等重要配置细节。你还可以检查IP是否可达，帮助你确认操作系统上的网络设置是否正确。

![img](https://screensaver01.zap-hosting.com/index.php/s/a64XRkWn2EA4Nef/preview)

## 工具

**工具**部分包含管理独立服务器的所有必备工具。下面详细介绍了可用的配置选项，支持你根据具体需求精准定制服务器。

### 流量重置

实时监控你的月度流量使用情况。这里显示你已使用的包含流量量。如果你在月底前达到流量上限，也可以选择付费提前重置流量。

![img](https://screensaver01.zap-hosting.com/index.php/s/5Z38eyRdntF6ict/preview)

### iLO远程管理 / ISO

随时安全远程访问你的服务器硬件。在这里你可以查看iLO登录信息，启用远程管理功能，并通过iLO界面执行重要操作。

![img](https://screensaver01.zap-hosting.com/index.php/s/9SZMtCPDJgNZSZ6/preview)

## 更多链接

更多链接部分提供了与产品使用和管理相关的额外参考资料，可能包括文档、工具或与该服务相关的外部资源。

### 常见问题

**常见问题**部分汇总了客户最常问的问题。这里有实用的答案和详细信息，帮助你快速高效地解决疑问。

### ZAP-Hosting 文档

我们为产品提供了丰富的文档，作为常见问题和疑虑的知识库。你可以找到各种指南和帮助内容，助你更好地使用和管理产品。

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)