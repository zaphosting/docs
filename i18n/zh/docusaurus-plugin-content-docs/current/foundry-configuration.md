---
id: foundry-configuration
title: "Foundry：服务器配置"
description: "了解如何自定义 Foundry 服务器设置，实现最佳游戏体验和服务器管理 → 立即了解"
sidebar_label: 服务器配置
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Foundry 服务器提供了丰富的配置参数，供你根据喜好自由调整。在本指南中，我们将详细介绍当前所有可用的配置参数，并逐一说明它们的作用。

<InlineVoucher />

## 访问你的配置文件

首先，你需要访问配置文件才能编辑参数。编辑配置文件有多种方式。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="通过网页面板" default>

#### 通过网页面板

最友好的方式是直接进入游戏服务器的**设置**页面，找到对应的配置项进行调整，如下图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="通过网页面板配置文件">

#### 通过网页面板配置文件

:::note
编辑配置文件前必须先停止服务器，编辑后重启服务器，否则更改将不会生效。
:::

如果你想直接编辑原始配置文件，可以进入游戏服务器网页面板的**配置文件**部分，点击蓝色的编辑按钮，如下图：

![](https://screensaver01.zap-hosting.com/index.php/s/64bAt9qCqHAdWXH/preview)

这会在网页上打开一个文本编辑器，方便你直接修改内容。

</TabItem>

<TabItem value="ftp" label="通过 FTP">

#### 通过 FTP

:::note
编辑配置文件前必须先停止服务器，编辑后重启服务器，否则更改将不会生效。
:::

最后一种访问原始配置文件的方法是通过 FTP。如果你不熟悉 FTP，建议先查看我们的[FTP 访问指南](gameserver-ftpaccess.md)。不过这个方法相对较慢，如果你想直接编辑文件内容，推荐使用前面提到的网页面板**配置文件**功能。

</TabItem>
</Tabs>

## 服务器配置选项

下面的表格列出了 Foundry 服务器当前支持的重要配置选项。

:::tip
不建议修改端口设置，因为游戏服务器会自动配置端口。擅自更改端口可能导致服务器无法正常运行！
:::

### 重要服务器设置

| 参数名称           | 示例                     | 说明                                                                                 |
| ------------------ | ------------------------ | ------------------------------------------------------------------------------------ |
| server_world_name  | ZAPDocsTest              | 设置世界名称，存档文件将保存在以此名称命名的文件夹中                                |
| server_name        | ZAP-Hosting Docs Test    | 服务器列表中显示的服务器名称                                                        |
| server_password    | iLoveZAP!2024            | 设置加入服务器所需的密码                                                            |
| server_is_public   | true/false               | 是否在服务器浏览器中显示服务器                                                     |
| server_port        | 3724（默认）             | 游戏使用的网络端口                                                                  |
| server_query_port  | 27015（默认）            | 用于服务器列表查询服务器信息的端口                                                  |
| server_max_players | 32                       | 服务器允许的最大同时在线玩家数量                                                    |

### 游戏玩法配置设置

| 参数名称              | 示例         | 说明                                                                                 |
| --------------------- | ------------ | ------------------------------------------------------------------------------------ |
| pause_server_when_empty | true/false  | 是否在无玩家在线时暂停服务器运行                                                    |
| map_seed              | 42938743982  | 设置自定义世界生成种子                                                              |
| autosave_interval     | 300          | 服务器自动保存的时间间隔（秒）                                                      |

完成修改后，记得保存文件并重启服务器。下次启动时，服务器将应用你设置的参数。

<InlineVoucher />