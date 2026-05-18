---
id: openmp-configuration
title: "Open.mp：Open.mp 服务器配置"
description: "了解如何自定义 Open.mp 服务器设置，优化你的游戏体验和服务器性能 → 立即了解更多"
sidebar_label: 服务器配置
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Open.mp 服务器提供了丰富的配置参数，供你根据喜好进行自定义。在本指南中，我们将详细介绍当前所有可用的配置参数，并逐一说明。

<InlineVoucher />

## 访问你的配置文件

首先，你需要访问配置文件才能编辑任何参数。编辑此文件有多种方式。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="通过网页界面" default>

#### 通过网页界面

编辑基础设置最友好的方式是进入你的游戏服务器网页界面的 **设置** 部分，在那里查找相应的设置，如下图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

请注意，并非所有配置选项都能在这里访问。如果你想配置所有内容，可以使用 **WI 配置文件** 标签，直接在网页界面轻松编辑所需文件。

</TabItem>

<TabItem value="configs" label="通过 WI 配置文件">

#### 通过 WI 配置文件

:::note
编辑配置文件前必须先停止服务器，编辑配置后重启服务器，否则更改将不会生效。
:::

如果你想直接编辑文件及所有配置选项，可以进入游戏服务器网页界面的 **配置** 部分，点击蓝色的编辑文件按钮，如下图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/CTKjYX6ryo8JoWn/preview)

这会在网站上打开一个文本编辑器，方便你直接编辑。

</TabItem>

<TabItem value="ftp" label="通过 FTP">

#### 通过 FTP

:::note
编辑配置文件前必须先停止服务器，编辑配置后重启服务器，否则更改将不会生效。
:::

最后一种访问原始文件的方法是通过 FTP。如果你不熟悉 FTP，建议先查看我们的 [通过 FTP 访问](gameserver-ftpaccess.md) 指南。不过，这种方法较慢，如果你想直接编辑文件内容，推荐使用前面提到的游戏服务器网页界面中的 **配置** 部分。

通过 FTP 客户端登录后，进入以下目录，替换 `[zap_id]` 为你的 ZAP ID：
```
..g[zap_id]/gta-openmp/
```

在该路径下找到 `config.json` 文件并打开，这就是你需要编辑的服务器配置文件。

</TabItem>
</Tabs>

## 服务器配置选项

### 服务器详情

这些是调整服务器在公共服务器浏览器中显示信息的配置选项。你需要在配置文件中找到这些选项，可以通过浏览器或编辑器中使用 `CTRL+F` 快速搜索。

| 参数名称                      | 示例                                   | 说明                                                                                 |
| ----------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------ |
| name                          | ZAP-Hosting Docs Test                  | 设置服务器主机名                                                                     |
| language                      | English                              | 服务器浏览器中显示的语言                                                             |
| website                       | zap-hosting.com/                     | 添加一个网站链接，供玩家了解更多服务器信息                                           |
| discord.invite                | discord.gg/zaphosting                | 服务器浏览器中显示的 Discord 服务器邀请链接                                         |
| banners.light                 | zap-hosting.com/lighticon.png        | 设置浅色主题下显示的横幅图片 URL                                                     |
| banners.dark                  | zap-hosting.com/darkicon.png         | 设置深色主题下显示的横幅图片 URL                                                     |
| game.map                      | ZAPtastic Stunt Map                   | 服务器浏览器中显示的地图名称                                                         |
| game.mode                     | Survival                            | 服务器浏览器中显示的游戏模式                                                         |
| announce                     | true                                 | 是否在公共服务器浏览器中显示服务器                                                 |
| enable_query                 | true                                 | 是否允许服务器信息在服务器浏览器中显示                                             |

完成修改后，记得保存文件并重启服务器。下次启动时，服务器将使用你提供的设置。

### 核心服务器设置

这些是调整服务器功能的重要配置选项。你需要在配置文件中找到这些选项，可以通过浏览器或编辑器中使用 `CTRL+F` 快速搜索。

| 参数名称                      | 示例                                   | 说明                                                                                 |
| ----------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------ |
| max_players                   | 50（默认）                           | 设置服务器最大同时在线玩家数量                                                       |
| max_bots                      | 0（默认）                            | 设置服务器最大 NPC 数量，该数量计入 max_players 总数                                |
| password                     | iLoveZAP!2024                       | 设置玩家连接服务器时需要输入的密码                                                   |
| rcon.enable                  | true                                 | 是否启用 RCON 功能                                                                   |
| rcon.password                | ZAP-IS-AWESOME                     | 设置访问 RCON 时需要使用的密码                                                       |
| logging.enable               | true                                 | 是否启用日志记录                                                                     |
| logging.file                 | log.txt                             | 启用日志时使用的日志文件路径及文件名                                                |
| logging.log_chat             | true                                 | 是否在服务器控制台显示玩家聊天内容                                                 |

完成修改后，记得保存文件并重启服务器。下次启动时，服务器将使用你提供的设置。

## 游戏玩法与网络设置

Open.mp 提供了丰富的游戏玩法和网络配置选项，让你能高度自定义服务器。这里我们总结了一些比较重要的选项。你需要在配置文件中找到这些选项，可以通过浏览器或编辑器中使用 `CTRL+F` 快速搜索。

如果你想调整所有设置，建议阅读 [open.mp 的 config.json 指南](https://www.open.mp/docs/server/config.json)，里面详细列出了所有当前可用的配置选项。

:::tip
我们不建议修改端口或 IP 设置，因为这些由游戏服务器自动配置。更改 IP/端口可能导致服务器无法正常运行！
:::

| 参数名称                      | 说明                                                                                   |
| ----------------------------- | -------------------------------------------------------------------------------------- |
| game.use_chat_radius          | 是否启用聊天半径限制                                                                   |
| game.chat_radius              | 设置聊天半径限制                                                                       |
| game.time                    | 设置服务器使用的全局时间                                                               |
| game.use_nametags            | 是否显示玩家头顶的名字标签、血条和护甲条                                             |
| game.use_vehicle_friendly_fire | 是否启用载具队友误伤                                                                   |
| game.vehicle_respawn_time    | 载具重生时间，单位毫秒                                                                 |
| game.weather                 | 服务器使用的全局天气                                                                   |
| network.bind                 | 服务器绑定的 IP 地址（建议不要修改）                                                   |
| network.port                 | 服务器使用的端口（建议不要修改）                                                       |
| network.messages_limit       | 用户每秒可发送的最大消息数                                                             |
| network.player_timeout       | 玩家无数据发送后超时断开的时间，单位毫秒                                              |

完成修改后，记得保存文件并重启服务器。下次启动时，服务器将使用你提供的设置。

<InlineVoucher />