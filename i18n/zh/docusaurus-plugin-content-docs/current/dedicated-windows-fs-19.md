---
id: dedicated-windows-fs-19
title: "独立服务器：Farming Simulator 2019 Windows 独立服务器安装指南"
description: "快速高效地在你的 Windows VPS 或独立服务器上搭建 Farming Simulator 2019 独立服务器 → 立即了解更多"
sidebar_label: Farming Simulator 2019
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows VPS 或独立服务器，想在上面安装 Farming Simulator 2019 独立服务器服务？那你来对地方了！本指南将一步步教你如何在服务器上安装这项服务。

## 准备工作

需要一台基于 Windows Server 2016/2019 的服务器，至少配备 4 核 2.4 GHz CPU（AMD/Intel），2GB 以上内存（DDR3/4），以及 6GB 以上的空闲硬盘空间（推荐 SSD 或更好）。服务器必须是 64 位架构。  
此外，需要拥有正版游戏授权（非 Steam 版本），并且拥有一个公网 IPv4 地址。独立服务器不需要 GPU 或声卡。  
根据服务器上安装的 Mod 或 DLC 数量，可能需要更多资源。

## 第一步 购买数字授权

你需要一份 Farming Simulator 2019 的数字版，不能是 Steam 版本。  
数字版可以在 [Farming Simulator 官网](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital) 购买。  
购买后，你会收到一封来自 Giants 的邮件，里面有下载链接 [链接](https://eshop.giants-software.com/downloads.php)。通过这个链接可以在线下载安装包。  
:::info
重要提示：邮件中包含了游戏激活码（GameKey），下载和后续激活安装都需要用到它。  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## 第二步 直接在 Windows 服务器上下载 Farming Simulator

通过 [初始访问 (RDP)](vserver-windows-userdp.md) 连接到你的 Windows 服务器。连接后打开浏览器，再次访问邮件中的 [下载链接](https://eshop.giants-software.com/downloads.php)。输入你的 GameKey，选择 Windows 8/10 版本下载。

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

文件会被下载到默认的下载目录（不同浏览器可能不同）。

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

双击打开下载的文件，运行 Setup.exe。  
阅读并同意使用条款（TOS），然后选择标准安装或自定义安装，通常标准安装就够了。  
点击安装，Farming Simulator 2019 将开始安装，过程可能需要几分钟。

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

安装完成后，会弹出如下提示，点击“完成”即可。

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

基础安装完成！

## 第三步 激活游戏并配置独立服务器

启动 Farming Simulator。桌面上应该有快捷方式，如果没有，也可以通过 Windows 菜单启动。  
如果出现缺少 GPU 等错误提示，可以忽略或选择“否/取消”关闭。启动游戏只是为了输入激活码。

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

激活码识别成功后，会弹出确认提示。

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

接下来需要设置或查看独立服务器配置文件中的登录名和密码，以便登录独立服务器的网页管理界面。  
配置文件默认路径为：  
`C:\Program Files (x86)\Farming Simulator 2019`，文件名为 `"dedicatedServer.xml"`。  
登录信息可以自由修改。

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## 第四步 启动 Farming Simulator 2019 独立服务器

在与 `"dedicatedServer.xml"` 同一目录下，运行 `"dedicatedServer.exe"` 启动独立服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

然后通过浏览器访问 `https://服务器IP:8080` 打开网页管理界面。

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

用之前设置或读取的 `"dedicatedServer.xml"` 中的登录信息登录。  
网页界面操作简单，几下点击就能根据个人需求完成配置。

## 第五步 在防火墙中开放端口

服务器当然要对外开放，方便和朋友一起玩。  
需要在 Windows 防火墙中开放端口 10823 和 8080，协议为 TCP。  
10823 是游戏服务器端口，8080 是网页管理端口，只有需要远程管理网页界面时才必须开放，平时也可以只通过 RDP 在服务器本地管理。  
如何在 Windows 上开放端口：[端口转发（防火墙）](vserver-windows-port.md)。

端口开放后，只要服务器启动，就可以公开访问啦！