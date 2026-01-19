---
id: arma3-serverconfig
title: "Arma 3：编辑服务器配置文件"
description: "了解如何自定义你的 Arma 3 服务器设置，实现最佳游戏体验和性能 → 立即了解更多"
sidebar_label: Server.cfg
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Server.cfg 参数与配置

Arma 3 的 Server.cfg 是任何 Arma 3 服务器运行必备的文件，提供了多种方式让你可以个性化配置你的 Arma 3 服务器。

Server.cfg 可以通过 FTP 直接在预装好的游戏服务器或 VPS 上编辑。  
如果是游戏服务器，在游戏服务器界面左侧菜单中也有“Configs”选项，从那里可以通过几次点击轻松编辑 Server.cfg。

<InlineVoucher />

## 通过 ZAP 编辑器编辑 Server.cfg

要在 ZAP 编辑器中编辑你的 Arma 3 服务器的 server.cfg，先在界面中点击你的服务器，然后在左侧菜单“设置”下选择“Configs”。

![](https://puu.sh/Fo5i6/183ee65ef3.png)

你会看到 Arma 3 可用的配置文件列表，我们这里只编辑 Server.cfg。  
点击蓝色按钮“打开文件”即可进入 ZAP 编辑器。

![](https://puu.sh/Fk7Ez/b0f32d8c61.png)

在这里你可以个性化配置你的 Arma 3 服务器，包括服务器名称和槽位数。调整好后点击“保存”。

![](https://puu.sh/Fk7I1/407a039e38.png)

设置服务器名称时，务必用引号括起来，否则服务器无法识别。每行结尾也必须加分号（;），否则服务器无法读取后续设置。  
唯一例外是“motd[]”选项，每行结尾要用逗号，除了最后一行不加逗号。

## 正确示范：

引号、分号和逗号都设置正确。

![](https://puu.sh/Fk7Mq/e2542b12f7.png)

## 错误示范：

缺少引号、分号和逗号，服务器无法启动。

![](https://puu.sh/Fk7NK/f96a31199d.png)

## 通过 FTP 编辑 Server.cfg

除了用 ZAP 编辑器，也可以直接通过 FTP 编辑 Server.cfg。这里以 **FileZilla** 为例，演示如何通过 FTP 连接游戏服务器及其目录。

想了解如何通过 FTP 连接你的游戏服务器，请看这里：[通过 FTP 访问](gameserver-ftpaccess.md)。

## 建立连接并定位到 server.cfg 路径

:::info
编辑时请确保你的游戏服务器处于停止状态。
:::

连接到游戏服务器后，使用 FileZilla 在右下窗口中导航到 server.cfg 所在目录，路径是：**/g198376/arma3/config**

![](https://puu.sh/Fo5eC/4d222f5a99.png)

:::info
第一个文件夹名（g198376）是你的服务器 ID，如果你有多个游戏服务器，可以通过这个区分文件夹。
:::

![](https://puu.sh/Fo4Tw/06f7a53914.png)

在该目录下你会看到 Arma 3 服务器的 Server.cfg 以及其他配置文件。  
右键点击 server.cfg，选择 **查看/编辑**。

![](https://puu.sh/Fo5fM/f3519a8936.png)

这时会打开一个默认编辑器，你可以像上面描述的那样编辑 Server.cfg。  
编辑完成后按 **CTRL+S** 保存，然后关闭编辑器，服务器就可以重新启动了。

<InlineVoucher />