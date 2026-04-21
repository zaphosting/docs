---
id: dedicated-ilo
title: "独立服务器：iLO"
description: "了解如何通过 iLO 完全管理您的企业独立服务器，实现无缝控制与监控 → 立即了解更多"
sidebar_label: iLO
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
我们的企业独立服务器采用 iLO 管理界面，允许您对服务器进行无限制的全面管理。  
它的功能包括服务器启动/停止/重启，通过 Java 或 HTML5 的管理控制台，挂载启动介质（ISO）。  
请谨慎修改设置，错误的更改可能会导致严重问题。

## iLO 访问
使用您喜欢的浏览器打开 ZAP 独立服务器的服务器面板。您将在这里找到关于 iLO 的最重要信息。  
要激活 iLO，只需点击“激活 iLO”。  
![](https://screensaver01.zap-hosting.com/index.php/s/grj9PxttLKiZg6m/preview)

请注意，iLO 可能需要几秒钟才能完全可用。  
当系统启动管理界面并可访问时，您将看到登录信息。  
点击显示的 IP 地址，使用登录凭据登录 iLO。

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

稍等片刻，您就登录到了独立服务器的管理界面。  
这里有很多重要信息：

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### 概览
* **系统健康**
通常应为绿色，服务器每次启动时都会自检硬件，如有问题，系统会立即报告。  
可能的状态有：绿色（正常）、黄色（降级）和红色（严重）。有时服务器会显示 SSD 降级，通常这没问题。  
当然，您也可以联系支持，我们会帮您检查是否需要处理。如果系统状态为红色（“严重”），请立即通知支持。  
解决问题的第一步通常是完全重启服务器。

* **iLO 健康**
显示更多关于 iLO 参数的信息，通常不应有重大变化。  
此标签页无需修改任何内容。

* **服务器电源**
显示服务器状态，例如“ON”表示服务器正在运行。

* **集成远程控制台**
您可以通过这里直观查看服务器并执行命令。  
远程控制台有两种：  
HTML5 直接在浏览器中启动，无需任何第三方软件。  
Java Web Start 顾名思义，使用 Java 打开管理控制台。  
出现的安全警告可以放心忽略。  
如何一步步通过远程控制台连接服务器，详见相关详细教程。

* **活动会话**
显示当前所有连接到 iLO 的用户。

### iLO 事件日志
记录通过 iLO 进行的所有更改，例如登录、服务器启动/停止及设置变更。

### 集成管理日志
存储所有硬件相关信息，例如每次服务器启动时执行的 POST（开机自检）结果。  
如果服务器硬件有问题，会在这里显示。

### 虚拟介质
通过子菜单“连接 CD/DVD-ROM”集成自定义启动介质（ISO）。  
服务器的启动顺序默认设置为优先从已注册的 ISO 启动。  
启动顺序也可在“启动顺序”菜单中调整。

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

在“脚本化介质 URL”中输入您想挂载的 ISO 的完整链接，例如：http://mydomain.com/bootimage.iso  
链接必须直接指向 ISO 文件，且以 .iso 结尾。  
点击“插入介质”，然后在“电源管理”中重启服务器。  
服务器将加载您插入的 ISO。

### 电源管理
在此菜单中，您可以对 ZAP 独立服务器进行启动和关闭等操作。

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **优雅关机**  
优雅地关闭服务器，相当于按下笔记本/电脑的电源键一次。  
所有应用程序会被正确关闭，服务器按计划关机。  
根据应用程序不同，可能需要一些时间。

* **强制关机**  
如果需要立即关闭服务器且不等待，选择此项。相当于直接拔掉电源。  
系统会立即断电，无任何延迟。

* **强制系统重置**  
立即重启服务器。

### 功率计
显示系统的平均功耗，功耗越高，系统负载越大。

### 网络
显示 iLO 的网络配置，请注意这与服务器本身的网络配置无关。

:::info
如果需要设置服务器或网络访问失败，您总可以直接查看服务器屏幕。
:::

## 远程控制台（显示）
iLO 默认提供两种远程控制台：

![](https://screensaver01.zap-hosting.com/index.php/s/cozRqRt9KLTMCkd/preview)

### HTML5 控制台 {#the-html5-console}
只需轻点一下即可连接服务器，无需任何第三方软件，直接在浏览器中启动。  
它提供了许多实用工具：

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - 服务器电源管理设置（启动、停止、重启）  
* 2 - 发送键盘快捷键（例如 CTRL + ALT + DEL）  
* 3 - 挂载 ISO > CD/DVD > 脚本化介质 URL  
* 4 - 系统健康状态  
* 5 - 服务器电源状态（开/关）

如果服务器有图形界面（GUI），您可以像平常一样使用鼠标，键盘输入也会被传输。

### Java 控制台
使用 Java 控制台需要安装 Java。（可从 java.com 下载）  
:::info
出现的任何安全提示都可以忽略。
:::

打开文件后会出现如下提示，点击“继续”确认。  
![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

确认风险后点击“运行”。  

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

Java 控制台随即打开。  
:::info
该应用常将键盘布局切换为“EN”。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - 服务器电源管理设置（启动、停止、重启）  
* 2 - 挂载 ISO > URL CD/DVD-ROM  
* 3 - 发送键盘组合键（如 CTRL + ALT + DEL）  
* 4 - 系统健康状态  
* 5 - 服务器电源状态（开/关）

如果服务器有图形界面（GUI），您可以像平常一样使用鼠标，键盘输入也会被传输。

## 常见问题、技巧与建议

* 服务器卡在 POST（开机自检）阶段，无法启动。  
连接远程控制台，查看服务器卡在哪一步，有无错误提示？  
在电源管理中关闭服务器几秒（强制关机），然后重新启动（短按启动）。  
如果仍无法启动，请联系支持。

* ISO 无法加载。  
检查 ISO 链接是否正确，最简单的测试是将链接粘贴到浏览器，若开始下载则链接正确。  
确保在虚拟介质中正确输入链接，并重启服务器。也检查启动顺序，确认 CD/DVD 驱动器排在首位。

* 服务器启动时间过长。  
企业级硬件启动时间较长，属于正常现象，可能需要 10-15 分钟。

* 无法打开 iLO。  
确认服务器面板中 iLO 已启用，出于安全考虑，管理界面会自动关闭一段时间后。  
您可以禁用后重新启用 iLO。（激活后请至少等待 5 分钟）

## 总结

看完这些内容后，管理您的服务器应该会轻松很多。  
如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为您服务！🙂