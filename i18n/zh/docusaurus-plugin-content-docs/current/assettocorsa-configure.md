---
id: assettocorsa-configure
title: "Assetto Corsa：配置你的服务器"
description: "了解如何通过自定义地图和赛车配置你的 Assetto Corsa 服务器，获得最佳游戏体验 → 立即了解更多"
sidebar_label: 配置服务器
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 连接到 FTP

在配置服务器之前，必须先设置[通过 FTP 访问](gameserver-ftpaccess.md)：

![](https://screensaver01.zap-hosting.com/index.php/s/GdzeM4wyAGtGk8e/preview)

设置完成后，你就可以连接并打开服务器文件夹了：

![](https://screensaver01.zap-hosting.com/index.php/s/dkSSLWF5QGGf4yR/preview)


## 准备工作

首先打开 Assetto Corsa 文件夹，可以通过打开 Steam，在游戏列表中右键点击“Assetto Corsa”来打开

接着点击“本地文件”，打开本地游戏文件：

![](https://screensaver01.zap-hosting.com/index.php/s/XKBgdiNbZ5AXtia/preview)

然后打开“server”文件夹，里面有一个“acServerManager”文件，打开它

## 设置地图

现在进入“AC Server Manager”界面，这里可以创建和管理服务器配置，先新建一个配置

![](https://screensaver01.zap-hosting.com/index.php/s/Z37toTgBHDmf54n/preview)

现在可以配置服务器了，我们这次只想编辑赛道和赛车，打开“Tracks”标签页

这里可以点击你喜欢的地图，上方可以调整赛道上的赛车数量。

![](https://screensaver01.zap-hosting.com/index.php/s/Hr9AMt9SHyas4CN/preview)

:::info
确保你设置的赛车数量不要超过服务器的车位数，否则服务器无法启动
:::

## 设置赛车

切换到“Cars / Entry List”标签页，这里可以添加新赛车：


要激活赛车，左侧的勾选框必须打勾

![](https://screensaver01.zap-hosting.com/index.php/s/4w643p56GLXK9cP/preview)

中间显示的是可以上场的赛车，这里可以选择想要上场的赛车颜色：

![](https://screensaver01.zap-hosting.com/index.php/s/T5SfpsdAPxfMwnY/preview)

:::info
要选择多辆赛车，可以勾选多个，添加不同赛车到中间列表。

注意确保所有赛车槽位都被填满，且不要超过可用车位数。

![](https://screensaver01.zap-hosting.com/index.php/s/FTeJX3BJipBRFQP/preview)
:::

## 上传配置

现在可以点击“保存”按钮保存配置，再用“导出”按钮导出：

![](https://screensaver01.zap-hosting.com/index.php/s/b7co7wfcegmwPYd/preview)

选择一个空文件夹来存放配置数据。

导出完成后可以关闭 AC Server Manager，打开刚才导出的配置文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/4Nysjo24BAAGbqe/preview)

通过拖拽把这些配置文件复制到你的游戏服务器的“cfg”文件夹里。

![](https://screensaver01.zap-hosting.com/index.php/s/YKHtnDMSqBgssDc/preview)

现在可以用新配置启动服务器了。

<InlineVoucher />