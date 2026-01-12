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
用您喜欢的浏览器打开 ZAP 独立服务器的服务器面板，您会看到关于 iLO 的最重要信息。  
点击“激活 iLO”即可启用 iLO。  
![](https://screensaver01.zap-hosting.com/index.php/s/grj9PxttLKiZg6m/preview)

请注意，iLO 可能需要几秒钟才能完全可用。  
系统启动管理界面并可访问后，您将看到登录信息。  
点击显示的 IP 地址，使用登录凭据登录 iLO。

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

稍等片刻，您就登录到了独立服务器的管理界面。  
这里有很多重要信息：

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### 概览
* **系统健康**
通常应为绿色，服务器每次启动时都会自检硬件，如有问题系统会立即报告。  
状态可能为：绿色（正常）、黄色（降级）和红色（严重）。有时服务器会显示 SSD 降级，通常没问题。  
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
HTML5 直接在浏览器启动，无需第三方软件。  
Java Web Start 使用 Java 打开管理控制台。  
出现的安全警告可以放心忽略。  
详细的远程控制台连接步骤请查看相关说明。

* **活动会话**
显示当前所有连接到 iLO 的用户。

### iLO 事件日志
记录所有通过 iLO 进行的操作，如登录、服务器启动/停止及设置更改。

### 集成管理日志
存储所有硬件相关信息，例如每次服务器启动时执行的 POST（开机自检）结果。  
如果服务器硬件有问题，会在这里显示。

### 虚拟介质
通过“连接 CD/DVD-ROM”子菜单挂载自定义启动介质（ISO）。  
服务器默认启动顺序会优先从已注册的 ISO 启动。  
启动顺序可在“启动顺序”菜单中调整。

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

在“脚本化介质 URL”中输入您想挂载的 ISO 的完整链接，例如：http://mydomain.com/bootimage.iso  
链接必须直接指向 ISO 文件，且以 .iso 结尾。  
点击“插入介质”，然后在“电源管理”中重启服务器。  
服务器将加载您插入的 ISO。

### 电源管理
此菜单项可对您的 ZAP 独立服务器进行启动和关闭操作。

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **优雅关机**  
优雅地关闭服务器，相当于按下笔记本/电脑的电源键一次。  
所有应用程序会正常关闭，服务器按计划关机。  
根据应用不同，可能需要一些时间。

* **强制关机**  
立即关闭服务器，相当于直接拔掉电源线。  
系统会立刻断电，无任何延迟。

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

### HTML5 控制台
只需点击即可进入服务器，无需任何第三方软件，直接在浏览器中启动。  
提供多种实用工具：

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - 服务器电源管理（启动、关闭、重启）  
* 2 - 发送键盘快捷键（例如 CTRL + ALT + DEL）  
* 3 - 挂载 ISO > CD/DVD > 脚本化介质 URL  
* 4 - 系统健康状态  
* 5 - 服务器电源状态（开/关）

如果服务器有图形界面（GUI），您可以像平常一样使用鼠标，键盘输入也会传输。

### Java 控制台
使用 Java 控制台需要安装 Java（可从 java.com 下载）。  
:::info
出现的安全提示可以忽略。
:::

打开文件后会看到如下提示，点击“继续”。  
![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

确认风险，点击“运行”。  

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

Java 控制台即打开。  
:::info
应用程序经常会将键盘布局切换为“EN”。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - 服务器电源管理（启动、关闭、重启）  
* 2 - 挂载 ISO > URL CD/DVD-ROM  
* 3 - 发送键盘组合键（如 CTRL + ALT + DEL）  
* 4 - 系统健康状态  
* 5 - 服务器电源状态（开/关）

如果服务器有图形界面（GUI），您可以像平常一样使用鼠标，键盘输入也会传输。

## 常见问题、技巧与建议

* 服务器卡在 POST（开机自检）阶段，无法启动。  
连接远程控制台，查看卡在哪一步，有无错误提示？  
在电源管理中关闭服务器（强制关机）几秒后，再重新启动（短按启动）。  
如果仍无法启动，请联系支持。

* ISO 无法加载。  
确认 ISO 链接是否正确，最简单的测试是将链接粘贴到浏览器，若开始下载则链接正确。  
确保虚拟介质中链接输入无误，且服务器已重启。检查启动顺序，确认 CD/DVD 驱动器排在首位。

* 服务器启动时间过长。  
企业级硬件启动时间较长，属于正常现象，可能需要 10-15 分钟。

* 无法打开 iLO。  
确认服务器面板中 iLO 已启用，出于安全考虑，管理界面会自动关闭一段时间后。  
您可以关闭 iLO 后再重新启用（激活后请等待至少 5 分钟）。

## 总结

看完这些内容后，管理服务器会轻松很多！如果还有疑问或需要帮助，随时联系每天在线的支持团队，我们随时为你服务！🙂