---
id: dedicated-ipmi
title: "独立服务器：通过 IPMI 进行服务器管理"
description: "了解如何通过 IPMI 完全管理您的企业级独立服务器，实现无缝控制与监控 → 立即了解更多"
sidebar_label: IPMI
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
我们的 AMD Ryzen 独立服务器通过 **Supermicro IPMI** 进行管理，这是一款强大且经过验证的带外管理解决方案，专为专业服务器环境设计。与依赖 HPE iLO 的 Intel 平台不同，AMD Ryzen 平台采用 Supermicro 硬件，因此以 IPMI 作为其原生管理接口。

Supermicro IPMI 提供对服务器的全远程控制，独立于操作系统状态。您可以远程开关机、重启服务器、监控硬件健康状况、访问传感器，并使用远程控制台直接操作服务器，就像亲临现场一样。这确保了最大程度的控制、快速响应和可靠的管理，即使在关键情况下也能轻松应对。


## IPMI 访问
使用您喜欢的浏览器打开 ZAP 独立服务器的服务器面板。您将在这里找到关于 IPMI 的最重要信息。
要激活 IPMI，只需点击 **激活 IPMI**。

![img](https://screensaver01.zap-hosting.com/index.php/s/dXjjzc65gCDsDdx/preview)

请注意，IPMI 完全可用可能需要几秒钟时间。
当系统启动管理接口并可访问时，您将看到登录信息。
点击显示的 IP 地址，使用登录凭据登录 IPMI。



## 概览

想了解 IPMI 管理界面是如何构成的以及各个区域的用途吗？本概览介绍了界面的不同页面，并重点说明了监控、硬件洞察和远程管理的组织方式。

它为您提供了一个引导起点，帮助您探索 IPMI 环境，理解各个视图如何协同工作，实现对服务器的全面控制和可视化。

### 仪表盘

提供当前服务器状态和关键管理功能的综合概览。显示系统信息，如硬件型号、BIOS 版本、BMC 固件和运行状态，方便快速参考。

电源部分显示当前电源状态和功耗读数，支持直接控制开机、关机和重启操作，同时提供能耗洞察。

此页面还可直接访问远程控制台，实现完整的远程键盘、视频和鼠标控制，适用于操作系统安装、故障排查和维护，无论服务器运行状态如何。

![img](https://screensaver01.zap-hosting.com/index.php/s/MK8wE2HBmKSkafM/preview)

### 系统

#### 组件信息

显示已安装硬件组件的详细概览及其当前状态。涵盖 CPU、内存模块、电源单元、电源供应、网络 AOC、传感器和散热组件。

每个部分展示硬件的具体信息，如型号、配置和运行状态。状态指示器帮助快速识别健康组件以及警告或故障。

![img](https://screensaver01.zap-hosting.com/index.php/s/SwNfo9DkCsLSZ7n/preview)

#### 健康事件日志

列出管理控制器记录的系统相关事件，提供硬件和健康相关活动的时间顺序历史。条目包括电源事件、启动过程、传感器阈值违规、温度警告、电压异常和硬件错误。

![img](https://screensaver01.zap-hosting.com/index.php/s/GfKiZZRno6AY3Se/preview)

#### 存储监控

提供已连接存储设备及其当前运行状态的概览。信息包括检测到的硬盘、接口类型、容量和由控制器及传感器报告的健康指标。

![img](https://screensaver01.zap-hosting.com/index.php/s/wr5JCqGj7bmqizs/preview)



### 配置

#### 账户服务

显示现有用户账户列表及其分配的角色和权限等级。此页面用于信息查看，方便了解哪些账户有权访问管理界面。

![img](https://screensaver01.zap-hosting.com/index.php/s/zic5k7yftMjBFD7/preview)

#### 通知

显示系统通知和警报处理的当前配置。此部分展示哪些事件类型可触发通知，如硬件故障、温度阈值、电源问题或传感器警告。

![img](https://screensaver01.zap-hosting.com/index.php/s/X46mcTArtEda3ef/preview)

#### 网络

显示管理接口的网络配置，包括分配的 IP 地址、子网掩码、网关、MAC 地址以及 IPMI 网络端口的当前链路状态。

![img](https://screensaver01.zap-hosting.com/index.php/s/jHfKc9fxJXEzNJs/preview)

#### 虚拟媒体

允许通过管理接口使用远程媒体镜像。显示已挂载的虚拟媒体状态，如 ISO 镜像或连接到服务器的远程存储设备。

虚拟媒体可用于启动系统、安装操作系统或执行恢复和维护任务，无需物理访问硬件。

![img](https://screensaver01.zap-hosting.com/index.php/s/bXYMP8xne8CyRLW/preview)

#### BMC 设置

显示主板管理控制器的配置详情。此部分提供固件版本、系统识别数据和控制器一般行为的信息。

![img](https://screensaver01.zap-hosting.com/index.php/s/9FcXmeyfiSQWJwx/preview)

### 远程控制

提供用于直接远程交互服务器的功能访问。包括电源控制选项，如开机、关机、重置和优雅关机。

同时也是远程管理功能的入口，允许无论操作系统状态如何都能与系统交互。

![img](https://screensaver01.zap-hosting.com/index.php/s/JWKfcCkAQSMHxFq/preview)


### 维护

#### 固件管理

展示管理环境的固件级别，包括活动的 BMC 固件及相关组件。可以查看固件版本及其当前状态，确认管理堆栈的一致性。客户无法执行更新或修改操作。

![img](https://screensaver01.zap-hosting.com/index.php/s/DA2HJAK8twGqYYK/preview)



#### 维护事件日志

记录通过管理接口执行的维护相关活动和系统级操作。日志条目包括配置更改、固件相关操作、重置和管理操作。

![img](https://screensaver01.zap-hosting.com/index.php/s/FqC3EdagiiS5zAG/preview)



## 常见问题、技巧与建议

- **服务器无法启动或卡在 POST 阶段：**
   如果服务器无法完成启动过程或卡在 POST 阶段，打开远程控制台查看具体停在哪个阶段。硬件初始化信息或错误输出可能会显示在那里。
   使用电源控制选项执行电源循环，强制关机几秒钟后再开机。如果仍无法启动，请联系支持。

- **远程控制台无法打开或黑屏：**
   确认远程控制台会话未被其他连接占用。关闭已有会话后重试。
   有时刷新浏览器或重新打开控制台能解决加载问题。如果问题持续，确认服务器已开机且可访问。

- **虚拟媒体 ISO 无法识别：**
   确认 ISO 源可访问，文件能直接打开（例如在浏览器中）。
   确认虚拟媒体已正确挂载，挂载后重启服务器。检查启动顺序，确保虚拟光驱优先启动。

- **服务器启动时间较长：**
   企业级硬件启动时间较长属正常。硬件初始化、控制器检测和内存训练可能需要几分钟，尤其是完全断电重启后。

- **IPMI 界面暂时无法访问：**
   配置更改或长时间未操作后，管理界面可能暂时不可用。等待几分钟后重试。
   若仍无法访问，请联系支持确认管理接口状态。



## 结语

看完这些内容后，你的服务器管理肯定会轻松不少。如果还有疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂