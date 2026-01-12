---
id: moe-configuration
title: "Myth of Empires：服务器配置"
description: "探索如何自定义你的 Myth of Empires 服务器，实现最佳游戏体验和控制 → 立即了解更多"
sidebar_label: 服务器配置
services:
  - gameserver-moe
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
Myth of Empires 提供了丰富的配置选项，让你可以根据喜好定制服务器。在本指南中，我们将介绍一些当前可用的配置参数，并详细解释每个参数的作用。

<YouTube videoId="a-tZnWIpOSg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/GozxMwycZ43y4sm/preview" title="一分钟快速搭建 Myth Of Empires 服务器！" description="觉得看视频更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定一切。不管你是赶时间还是喜欢用最有趣的方式吸收信息，这里都有你想要的！"/>

<InlineVoucher />

## 访问你的配置文件

首先，你需要访问配置文件才能编辑参数。编辑配置文件有多种方式。

:::tip
我们强烈推荐使用 **Web界面** 方式，因为 MOE 有大量配置选项和配置文件，直接通过 Web界面编辑会更快更方便，省去不少麻烦。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="通过 Web界面" default>

#### 通过 Web界面

最友好的方式是进入你的游戏服务器 Web界面的 **设置** 部分，直接搜索并修改对应的设置，如下图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

你会看到各种分类和设置，可以直接修改数值。

</TabItem>

<TabItem value="configs" label="通过 WI 配置文件">

#### 通过 WI 配置文件

:::note
编辑配置文件前必须先停止服务器，编辑后重启服务器，否则修改不会生效。
:::

如果你想直接编辑原始配置文件，可以在游戏服务器 Web界面的 **配置文件** 部分找到。点击蓝色的编辑按钮即可打开编辑器，如下图：

![](https://screensaver01.zap-hosting.com/index.php/s/ke6TF9RooBGqawW/preview)

这会在网页上直接打开文本编辑器，方便你修改。

</TabItem>

<TabItem value="ftp" label="通过 FTP">

#### 通过 FTP

:::note
编辑配置文件前必须先停止服务器，编辑后重启服务器，否则修改不会生效。
:::

最后一种访问原始文件的方法是通过 FTP。如果你不熟悉 FTP，建议先看看我们的[FTP访问指南](gameserver-ftpaccess.md)。不过这个方法相对麻烦，如果只是想直接修改文件内容，还是推荐用游戏服务器 Web界面的 **设置** 部分。

</TabItem>
</Tabs>

## 服务器配置选项

这里挑选了一些核心且重要的服务器配置选项，通常你会想要调整它们，包括一些内部设置。

:::tip
不建议修改端口、IP 或目录设置，这些是游戏服务器自动配置的，改动可能导致服务器无法正常运行！
:::

| 参数名称       | 示例                                   | 说明                                                        |
| -------------- | ------------------------------------- | ----------------------------------------------------------- |
| name           | ZAP-Hosting Docs Test                 | 你的服务器名称                                              |
| password       | iLoveZAP!2024                        | 给服务器设置密码（私密服务器）                             |
| description    | This is a cool server!                | 给服务器添加描述                                            |
| gamemode       | PVE / PVP                           | 设置服务器的游戏模式                                        |
| mapname        | Central Island                      | 设置服务器地图                                              |
| difficulty     | 1                                   | 世界难度                                                    |

完成修改后，记得保存文件并重启服务器。下次启动时，服务器会应用你设置的参数。

<InlineVoucher />