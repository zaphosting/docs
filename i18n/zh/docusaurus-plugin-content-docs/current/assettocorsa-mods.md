---
id: assettocorsa-mods
title: "Assetto Corsa：在服务器上安装MOD"
description: "了解如何设置和自定义你的Assetto Corsa服务器，打造最佳游戏体验 → 立即了解更多"
sidebar_label: 安装MOD
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 连接FTP

在配置服务器之前，必须先设置[FTP访问](gameserver-ftpaccess.md)：

![](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

设置完成后，你就可以连接并打开服务器文件夹了：

![](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## 准备工作

首先打开Assetto Corsa文件夹，可以通过打开Steam，在游戏列表中右键点击“Assetto Corsa”来打开

然后点击“本地文件”，打开本地游戏文件：

![](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

接着打开“server”文件夹，里面有个“acServerManager”文件，打开它



## 设置车辆

切换到“Cars / Entry List”标签页，这里可以添加新车辆：


要激活车辆，左侧的勾选框必须打勾

![](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

中间显示的是可以上场的车辆，这里可以选择想要上场的车辆颜色：

![](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
要选择多辆车，可以勾选多个选项，将不同车辆添加到中间列表。

注意所有车辆槽位都要填满，且不要超过可用槽位数量。

![](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## 上传配置

现在可以点击“Save”按钮保存配置，再用“Export”按钮导出：

![](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

选择一个空文件夹来存放配置数据。

完成后关闭AC Server Manager，打开刚导出的配置文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

将这些配置文件通过拖拽复制到你的游戏服务器的“cfg”文件夹中。

![](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## 上传服务器内容

接下来需要生成服务器内容，让车辆和地图MOD能在服务器上加载。点击下方的“Update Server Content”：

![](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

这个过程可能需要几分钟，所有地图和车辆都会转换成服务器文件。

:::info
完成后可能会弹出“Could not update”提示，这没关系，不影响使用。
:::

打开“Server”文件夹（acServerManager所在位置），里面有个“Content”文件夹，将它拖拽上传到你的Assetto Corsa服务器，覆盖旧的“Content”文件夹：

![](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

上传完成后，车辆MOD就安装激活了，重启服务器即可生效。

<InlineVoucher />