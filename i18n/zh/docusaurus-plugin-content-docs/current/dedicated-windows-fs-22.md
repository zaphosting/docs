---
id: dedicated-windows-fs-22
title: "独立服务器：Farming Simulator 2022 Windows 独立服务器设置"
description: "了解如何在你的 Windows VPS 或独立服务器上安装 Farming Simulator 2022 独立服务器 → 立即了解更多"
sidebar_label: Farming Simulator 2022
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows VPS 或独立服务器，想在上面安装 Farming Simulator 2022 独立服务器服务吗？你来对地方了！本指南将一步步教你如何在服务器上安装这个服务。

## 准备工作
需要一台基于 Windows Server 2016/2019 的服务器，至少配备 4 核 2.4 GHz CPU（AMD/Intel），至少 2GB RAM（DDR3/4），以及 6GB 可用磁盘空间（SSD 或更好，推荐）。服务器必须是 64 位架构。  
此外，需要拥有正版游戏授权（非 Steam 版本），以及一个公网 IPv4 地址。独立服务器不需要 GPU 或声卡。  
根据独立服务器的 Mod、扩展 Mod 或 DLC 数量，可能需要更多资源。

## 第一步 购买数字授权

需要购买 Farming Simulator 2022 的数字版，不能是 Steam 版本。  
数字版可以在 [Farming Simulator 官网](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital) 购买。  
购买后，你会收到一封来自 Giants 的邮件，邮件中包含下载链接 [链接](https://eshop.giants-software.com/downloads.php)。通过该链接即可在线下载游戏。  
:::info
重要提示：邮件中会包含游戏激活码（GameKey），下载和后续激活安装时都需要用到它。  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/MXkbf8pNSYJAmGt/preview)

## 第二步 直接在 Windows 服务器上下载 Farming Simulator

通过 [初始访问 (RDP)](vserver-windows-userdp.md) 连接到你的 Windows 服务器。连接后，打开浏览器，再次访问邮件中的 [下载链接](https://eshop.giants-software.com/downloads.php)。输入你的游戏激活码，选择 Windows 8/10 版本下载。

![](https://screensaver01.zap-hosting.com/index.php/s/wDa758WS8aKDBwE/preview)

文件会被下载到默认下载目录（下载目录可能不同）。

![](https://screensaver01.zap-hosting.com/index.php/s/3KZ9wstGSz6JTke/preview)

双击打开文件，运行 Setup.exe。  
阅读并同意使用条款（TOS），然后选择标准安装或自定义安装，通常选择标准安装即可。  
点击安装，Farming Simulator 2022 会开始安装，过程可能需要几分钟。

![](https://screensaver01.zap-hosting.com/index.php/s/A4daMGF35a6aCj4/preview)

安装完成后，会出现如下提示，点击“完成”即可。

![](https://screensaver01.zap-hosting.com/index.php/s/EWcaeSD8HacP8je/preview)

基础安装现在完成了。

## 第三步 游戏激活及独立服务器配置

启动 Farming Simulator。桌面上应该有快捷方式，如果没有，也可以通过 Windows 菜单启动。  
如果出现缺少 GPU 等错误，可以忽略或选择“否/取消”关闭。启动游戏只是为了输入激活码。

![](https://screensaver01.zap-hosting.com/index.php/s/5FcRkkxajWFN6D5/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/FXzNNeaBzAP794w/preview)

接下来需要设置或查看独立服务器配置中的登录名和密码，以便登录独立服务器的网页管理界面。  
配置文件默认路径为：  
`C:\Program Files (x86)\Farming Simulator 2022`，文件名为 `"dedicatedServer.xml"`。  
登录信息可以自由修改。

![](https://screensaver01.zap-hosting.com/index.php/s/LHkeCNSnEtE5Rd8/preview)

## 第四步 启动 Farming Simulator 2022 独立服务器

运行与 `"dedicatedServer.xml"` 同目录下的 `"dedicatedServer.exe"`。

![](https://screensaver01.zap-hosting.com/index.php/s/43ZYGoNiE7npxDz/preview)

然后通过浏览器访问 `https://服务器IP:8080` 打开网页管理界面。

![](https://screensaver01.zap-hosting.com/index.php/s/RbfZFQZkRSX4okr/preview)

使用之前在 `"dedicatedServer.xml"` 中设置的登录信息登录。  
网页界面操作简单，几下点击就能根据个人需求完成配置。

## 第五步 在防火墙中开放端口

服务器当然要对外开放，方便和朋友一起玩。  
需要在 Windows 防火墙中开放端口 10823 和 8080，协议为 TCP。  
10823 是游戏服务器端口，8080 是网页管理端口，只有需要远程管理网页界面时才开放，平时也可以只通过 RDP 在服务器本地管理。  
如何在 Windows 上开放端口：[端口转发（防火墙）](vserver-windows-port.md)。

端口开放后，只要服务器启动，就可以公开访问了。