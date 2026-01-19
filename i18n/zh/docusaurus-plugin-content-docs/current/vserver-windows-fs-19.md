---
id: vserver-windows-fs-19
title: "VPS：Farming Simulator 2019 专用服务器 Windows 安装指南"
description: "了解如何在 Windows VPS 上搭建 Farming Simulator 2019 专用服务器，实现流畅的多人游戏体验 → 立即了解"
sidebar_label: Farming Simulator 2019
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows VPS，想在上面安装 Farming Simulator 2019 专用服务器吗？那你来对地方了！本指南将一步步教你如何在服务器上安装这个服务。
<InlineVoucher />

## 准备工作

需要一台基于 Windows Server 2016/2019 的服务器，至少配备 4 核 2.4 GHz CPU（AMD/Intel），2GB 以上内存（DDR3/4），以及 6GB 以上的空闲硬盘空间（推荐 SSD 或更好）。服务器必须是 64 位架构。  
此外，需要拥有正版游戏授权（非 Steam 版本），并且拥有公网 IPv4 地址。专用服务器不需要 GPU 或声卡。  
根据专用服务器的 Mod、扩展内容或 DLC 数量，可能需要更多资源。

## 第一步 购买数字版授权

需要购买 Farming Simulator 2019 的数字版，不能是 Steam 版本。  
数字版可在 [Farming Simulator 官网](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital) 购买。  
购买后，你会收到一封来自 Giants 的邮件，邮件中包含下载链接 [链接](https://eshop.giants-software.com/downloads.php)。  
:::info
重要提示：邮件中会包含游戏激活码（GameKey），下载和后续激活安装时都需要用到。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## 第二步 直接在 Windows 服务器上下载 Farming Simulator

通过 [初始访问 (RDP)](vserver-windows-userdp.md) 连接到你的 Windows 服务器。连接后打开浏览器，访问邮件中的下载链接。输入你的 GameKey，选择 Windows 8/10 版本下载。

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

文件会被下载到默认的下载目录（具体目录可能不同）。

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

双击文件打开，运行 Setup.exe。  
阅读并同意使用条款（TOS），选择标准安装或自定义安装，通常标准安装就够了。  
点击安装，Farming Simulator 2019 会开始安装，过程可能需要几分钟。

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

安装完成后会出现提示，点击“完成”。

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

基础安装完成。

## 第三步 激活游戏并配置专用服务器

启动 Farming Simulator。桌面上应该有快捷方式，如果没有，也可以通过 Windows 菜单启动。  
如果出现缺少 GPU 等错误，可以忽略或选择“否/取消”关闭。启动游戏只是为了输入激活码。

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

激活码识别成功后会出现确认提示。

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

接下来需要设置登录名和密码，或者在专用服务器配置文件中查看/修改，以便登录专用服务器的网页管理界面。  
配置文件默认路径为：  
`C:\Program Files (x86)\Farming Simulator 2019`，文件名为 `"dedicatedServer.xml"`。  
登录信息可以自由设置。

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## 第四步 启动 Farming Simulator 2019 专用服务器

运行与 `"dedicatedServer.xml"` 同目录下的 `"dedicatedServer.exe"`。

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

然后通过浏览器访问 `https://服务器IP:8080` 打开网页管理界面。

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

使用之前设置或读取的 `"dedicatedServer.xml"` 中的登录信息登录。  
网页界面操作简单，几步点击即可根据个人需求完成配置。

## 第五步 在防火墙中开放端口

服务器需要对外开放，方便和朋友一起玩。  
需要在 Windows 防火墙中开放 TCP 协议的 10823 和 8080 端口。  
10823 是游戏服务器端口，8080 是网页管理端口，只有需要远程管理网页界面时才开放，平时也可以只通过 RDP 在服务器本地管理。  
Windows 端口开放教程：[端口转发（防火墙）](vserver-windows-port.md)。

端口开放后，只要服务器启动，就可以公开访问了。

## 总结

恭喜你，成功在 VPS 上安装并配置了 Farming Simulator 2019 专用服务器！如果有任何问题或疑问，随时联系我们的客服团队，每天都在线帮你解决！

<InlineVoucher />