---
id: vserver-windows-fs-22
title: "VPS：Farming Simulator 2022 专用服务器 Windows 安装指南"
description: "了解如何在你的 Windows VPS 上安装 Farming Simulator 2022 专用服务器，实现流畅的多人游戏体验 → 立即了解"
sidebar_label: Farming Simulator 2022
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows VPS，想在上面安装 Farming Simulator 2022 专用服务器吗？那你来对地方了！本指南将一步步教你如何在服务器上安装这项服务。
<InlineVoucher />

## 准备工作
需要一台基于 Windows Server 2016/2019 的服务器，至少配备 4 核 2.4 GHz CPU（AMD/Intel），至少 2GB 内存（DDR3/4），以及 6GB 可用硬盘空间（SSD 或更好，推荐使用）。服务器必须是 64 位架构。  
此外，需要拥有正版游戏授权（非 Steam 版本），并且拥有公网 IPv4 地址。专用服务器不需要 GPU 或声卡。  
根据专用服务器的 Mod、扩展 Mod 或 DLC 数量，可能需要更多资源。

## 第 1 步 购买数字授权

需要购买 Farming Simulator 2022 的数字版，不能是 Steam 版本。  
数字版可在 [Farming Simulator 官网](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital) 购买。  
购买后，你会收到一封来自 Giants 的邮件，邮件中包含下载链接 [链接](https://eshop.giants-software.com/downloads.php)。  
:::info
重要提示：邮件中会包含游戏激活码（GameKey），下载和后续激活安装时都需要用到它。  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/EH9ysn2jHaQXrtf/preview)

## 第 2 步 直接在 Windows 服务器上下载 Farming Simulator

通过 [初始访问 (RDP)](vserver-windows-userdp.md) 连接到你的 Windows 服务器。连接后，打开浏览器，重新访问邮件中的 [下载链接](https://eshop.giants-software.com/downloads.php)。输入你的游戏激活码，选择 Windows 8/10 版本下载。

![](https://screensaver01.zap-hosting.com/index.php/s/JwMzAXbMx64CybQ/preview)

文件会被下载到默认的下载目录（下载目录可能不同）。

![](https://screensaver01.zap-hosting.com/index.php/s/74LiBCfn2w6BwLJ/preview)

双击文件打开，运行 Setup.exe。  
阅读并同意服务条款（TOS），然后选择标准安装或自定义安装，通常选择标准安装即可。  
点击安装，Farming Simulator 2022 将开始安装，过程可能需要几分钟。

![](https://screensaver01.zap-hosting.com/index.php/s/8SrHwEjgirmKTJJ/preview)

安装完成后，会弹出如下提示，点击“完成”即可。

![](https://screensaver01.zap-hosting.com/index.php/s/KYMX8SeMgxWmYdt/preview)

基础安装至此完成。

## 第 3 步 激活游戏并配置专用服务器

现在启动 Farming Simulator。桌面上应该有快捷方式，如果没有，也可以通过 Windows 菜单启动。  
如果出现缺少 GPU 等错误，可以忽略或选择“否/取消”关闭。启动游戏只是为了输入激活码。

![](https://screensaver01.zap-hosting.com/index.php/s/iMTyYAGknFwDA3H/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/spnct8XYniz3Nf5/preview)

接下来需要设置或查看专用服务器配置中的登录名和密码，以便登录专用服务器的网页管理界面。  
配置文件默认路径为：  
`C:\Program Files (x86)\Farming Simulator 2022`，文件名为 `"dedicatedServer.xml"`。  
登录信息可以自由修改。

![](https://screensaver01.zap-hosting.com/index.php/s/kK7nxEtqxgxjLFG/preview)

## 第 4 步 启动 Farming Simulator 2022 专用服务器

运行与 `"dedicatedServer.xml"` 同目录下的 `"dedicatedServer.exe"` 启动专用服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/qagHezKmK2tx2kj/preview)

然后通过浏览器访问 `https://服务器IP:8080` 打开网页管理界面。

![](https://screensaver01.zap-hosting.com/index.php/s/E8b34yHDPDbr9YP/preview)

使用之前在 `"dedicatedServer.xml"` 中设置的登录信息登录。  
网页界面操作简单，几次点击即可根据个人需求完成配置。

## 第 5 步 在防火墙中开放端口

服务器当然要对外开放，方便和朋友一起玩。  
需要在 Windows 防火墙中开放端口 10823 和 8080，协议为 TCP。  
10823 是游戏服务器端口，8080 是网页管理端口，只有需要远程管理网页界面时才必须开放，平时也可以只通过 RDP 在服务器本地管理。  
Windows 开放端口教程：[端口转发（防火墙）](vserver-windows-port.md)。

端口开放后，只要服务器启动，就可以公开访问了。

## 总结

恭喜你，已经成功在 VPS 上安装并配置了 Farming Simulator 2022 专用服务器！如果有任何问题或疑问，随时联系我们的支持团队，每天都在线帮你解决！

<InlineVoucher />