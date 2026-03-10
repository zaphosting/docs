---
id: dedicated-windows-troubleshooting-icmpv4-echo
title: "独服：网络故障排查 - ICMPv4 Echo 消失 – 服务器显示离线"
description: "了解如何在 Windows 防火墙中允许 ICMPv4 Echo 请求，让你的服务器能被监控系统正确检测 → 立即了解"
sidebar_label: ICMPv4 Echo 消失
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

有时候，Windows 服务器虽然正常运行，但在控制面板中却会显示**离线**状态。这通常是因为防火墙设置阻止了**ICMPv4 Echo 请求**。这些请求是大家熟知的 `ping` 命令的基础，监控系统也常用它来判断服务器或 IP 地址是否可达。

如果 Windows 防火墙阻止了 ICMP Echo 请求，监控系统就收不到服务器的响应。结果就是，控制面板会把服务器或分配的 IP 显示为离线，尽管服务器本身运行正常。

![img](https://screensaver01.zap-hosting.com/index.php/s/EBAybY5LRfk89kN/preview)



## 原因

这个问题最常见的原因是**Windows Defender 防火墙**中缺少允许传入 ICMPv4 Echo 请求的规则。没有这条规则，防火墙默认会阻止 ping 请求。

监控系统依赖这些响应来判断服务器是否在线，所以即使服务器服务正常运行，系统也可能显示离线。



## 解决方案

要解决这个问题，需要创建一条允许 ICMPv4 Echo 请求的防火墙规则。首先通过 iLO 面板的 HTML5 控制台建立连接。点击面板中的 **HTML5**，用你的常用登录信息登录。

![img](https://screensaver01.zap-hosting.com/index.php/s/PE87d8gZSB7c9gk/download)

登录后，打开 **Windows Defender 防火墙高级安全** 界面。按下 `Windows + R`，输入以下命令并回车：

```
wf.msc
```
高级防火墙配置窗口会打开。左侧导航栏选择 **入站规则**，因为服务器需要接受传入的 ICMP 请求。右侧点击 **新建规则** 来创建新规则。

创建规则时，选择规则类型为 **自定义**。下一步选择协议类型为 **ICMPv4**。选中协议后，点击 **自定义** 设置，启用 **Echo 请求** 选项，这样服务器才能响应 ping 请求。

继续下一步，选择规则操作为 **允许连接**。在配置文件选择时，通常建议对所有配置文件启用规则，这样无论服务器处于公用、专用还是域网络环境都有效。

最后给规则起个清晰的名字，比如 `允许 ICMPv4 Echo 请求`。完成向导后，新规则会立即生效，允许传入的 ICMP Echo 请求。

![img](https://screensaver01.zap-hosting.com/index.php/s/iciYwqAkYLTMkgC/download)



## 验证

规则创建完成后，可以验证服务器是否响应 ping 请求。在另一台设备上运行：

```
ping <YOUR_SERVER_IP>
```
如果服务器成功响应，监控系统也能重新检测到它。过一会儿，控制面板中的服务器状态应该会从离线变为在线。



## 总结

恭喜你！通过在 Windows 防火墙中创建 ICMPv4 Echo 规则，你成功让你的 Windows 独服能再次响应 ping 请求。

这样监控系统就能正确检测服务器的在线状态，避免它在控制面板中显示离线。

如果还有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂