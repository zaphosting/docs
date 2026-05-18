---
id: enshrouded-configuration
title: "Enshrouded：Enshrouded 服务器配置"
description: "探索如何自定义 Enshrouded 服务器设置，实现最佳游戏体验和服务器管理 → 立即了解更多"
sidebar_label: 服务器配置
services:
  - gameserver-enshrouded
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Enshrouded 在发布时提供了一些可以根据你喜好自定义的配置参数。在本指南中，我们将详细介绍当前所有可用的配置参数，并逐一说明。

<YouTube videoId="wgvfvQdtwN4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/tc7mcyZqk8Wyafa/preview" title="60秒快速搭建 Enshrouded 服务器！" description="喜欢边看边学更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定一切。不管你是赶时间还是喜欢用最酷的方式吸收信息，都超适合！"/>

<InlineVoucher />

## 访问你的配置文件

首先，你需要访问配置文件才能编辑任何参数。编辑这个文件有多种方式。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="通过网页面板" default>

#### 通过网页面板

最友好的方式是直接进入游戏服务器的 **设置** 页面，找到对应的配置项，如下图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

</TabItem>

<TabItem value="configs" label="通过网页面板配置文件">

#### 通过网页面板配置文件

:::note
编辑配置文件前必须先停止服务器，编辑后重启服务器，否则更改将不会生效。
:::

另外，如果你想直接编辑原始配置文件，可以进入游戏服务器网页面板的 **配置文件** 区域，点击蓝色的编辑按钮，如下图：

![](https://screensaver01.zap-hosting.com/index.php/s/jPep5HzYtWnJTxT/preview)

这会在网页上打开一个文本编辑器，方便你直接修改。

</TabItem>

<TabItem value="ftp" label="通过 FTP">


#### 通过 FTP

:::note
编辑配置文件前必须先停止服务器，编辑后重启服务器，否则更改将不会生效。
:::

最后一种访问原始配置文件的方法是通过 FTP。如果你不熟悉 FTP，建议先看看我们的[FTP访问指南](gameserver-ftpaccess.md)。不过这个方法相对慢一些，如果你想直接编辑文件内容，推荐还是用游戏服务器网页面板的 **配置文件** 区域。

</TabItem>
</Tabs>

## 服务器配置选项

以下是游戏提供的当前可用服务器配置选项，主要包括服务器名称、密码以及一些内部设置。

:::tip
我们不建议修改端口、IP 或目录设置，因为这些是游戏服务器自动配置的。修改这些值可能导致服务器无法正常运行！
:::

| 参数名称       | 示例                                   | 说明                                                         |
| -------------- | ------------------------------------- | ------------------------------------------------------------ |
| name           | ZAP-Hosting Docs Test                 | 你的服务器名称                                               |
| password       | iLoveZAP!2024                        | 给服务器设置密码（私密服务器）                              |
| saveDirectory  | ./savegame（默认）                    | 设置存档保存目录                                             |
| logDirectory   | ./logs（默认）                       | 设置日志保存目录                                             |
| ip             | 123.123.123.123                      | 服务器绑定的公网 IP                                          |
| gamePort       | 15636（默认）                       | 服务器运行的公网端口                                         |
| queryPort      | 15637（默认）                       | 用于访问服务器的查询端口                                     |
| slotCount      | 4                                    | 服务器最大玩家数量（最多16人）                               |

完成修改后，记得保存文件并重启服务器。下次启动时，服务器会应用你设置的参数。

<InlineVoucher />