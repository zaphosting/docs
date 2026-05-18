---
id: minecraft-bungeecord-config
title: "Minecraft：BungeeCord 服务器配置设置"
description: "了解如何优化和管理你的 BungeeCord 服务器网络设置，提升性能和玩家体验 → 立即了解更多"
sidebar_label: 服务器属性
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 为什么我需要 BungeeCord 配置？

BungeeCord 是通过代理服务器（BungeeCord 服务器）连接的一组服务器的管理工具。要自定义这些服务器的网络，必须编辑 *config.yml* 文件。在本页中，你将了解每个设置的具体含义，并获得关于对 PaperSpigot 和 Bukkit 等子服务器影响的额外信息。

<InlineVoucher />

## 设置

### forge_support

该值可设为 false 或 true。设置为 true 时，玩家可以使用 Forge 客户端（适用于 Mod 包）进入服务器。设置为 false 时，服务器将拒绝这类连接。

### player_limit

该值表示允许同时连接到服务器的最大玩家数量。与 listeners 中的 *max_players* 不同，这个值是内部的、绝对的玩家总数限制。

### permissions

在此部分，可以为不同组分配特定权限。这些权限**仅限于 BungeeCord 权限**，不包括 Spigot/Bukkit 权限。
语法和缩进（2 个空格）非常重要：
```
permissions:
  GroupName:
  - Permission.One
  - Permission.Two
```

### timeout

该数字表示服务器在关闭并断开所有连接前，允许的最长无响应时间（毫秒）。默认值为 30000，相当于最大响应时间 30 秒。

### log_commands

该值可设为 false 或 true。设置为 true 时，玩家执行 BungeeCord 命令时会在控制台输出消息。设置为 false 时，不显示该消息。

### network_compression_threshold

该设置决定发送给玩家的数据包大小。比默认值 *256* 更小的值（如 128）可以改善远距离用户的连接，但会显著增加 CPU 负载，修改时请谨慎。

### online_mode

该值可设为 false 或 true。设置为 true 时，只有购买正版 Minecraft 的玩家能访问服务器。设置为 false 时，盗版玩家也能访问，因为不会与 Mojang 服务器通信。
**重要提示：** 如果允许盗版玩家进入，建议使用授权插件，否则其他玩家可能冒充你获得管理员权限。

### disabled_commands

这里可以列出整个网络中应禁用且不可执行的命令。此限制适用于网络上的所有玩家。

### servers

此列表显示网络中的所有子服务器。若服务器未列出，则不会被集成到你的服务器系统中。
语法和缩进（2 个空格）非常重要：
```
servers:
  ServerName:
    motd: '&1Just another BungeeCord - Forced Host'
    address: 0.0.0.0:2000
    restricted: false
```
**motd** 是当你通过 *forced_hosts* 功能 ping 子服务器时，在服务器列表中显示的消息：

![](https://screensaver01.zap-hosting.com/index.php/s/E93qgyfkjfW7Mzf/preview)

**address** 填写子服务器对应的 IP 和端口。若 **restricted** 为 true，玩家必须拥有权限 *bungeecord.server.ServerName* 才能进入该子服务器。

### listeners

该变量包含多个与连接 BungeeCord 服务器相关的重要选项。可以创建多个监听器以支持不同的 IP 和端口连接。监听器包含以下配置项：
* query_port - 监听器的端口号。
* motd - 玩家直接在服务器列表中添加 BungeeCord 服务器时显示的消息。
* tab_list - 可选值为 *GLOBAL_PING*、*GLOBAL* 和 *SERVER*。GLOBAL_PING 显示所有玩家及其延迟；GLOBAL 显示所有服务器的玩家但不显示延迟；SERVER 仅显示同一子服务器的玩家。**重要：** 该功能在 1.8 及更早版本无效。
* query_enabled - 可设为 false 或 true。true 时，DNS 过程中会检查 UDP 查询，仅允许此类连接；false 时，允许通过转发连接服务器。
* proxy_protocol - 可设为 false 或 true。true 时启用 HAProxy 协议；false 时禁用。
* forced_hosts - 允许单独的域名直连子服务器。语法：`Your.OwnDomain.net: ServerName`
* ping_passthrough - 可设为 false 或 true。true 时，ping *forced_hosts* 指定的子服务器时显示子服务器的真实 MOTD；false 时显示 *servers* 中配置的 MOTD。
* priorities - 按优先级降序列出玩家应优先连接的服务器。服务器离线或不可用时会跳过。
* bind_local_address - 可设为 false 或 true。true 时，系统会尝试将玩家重定向到监听与 BungeeCord 服务器相同 IP 的服务器；false 时，子服务器可使用不同 IP。仅对跨系统运行的网络有效。
* host - 设置监听的 IP 和端口。若 IP 设为 0.0.0.0，则接受所有转发到该主机的 IP 和域名。
* max_players - 监听器允许的最大玩家数。
* tab_size - 设置标签列表中显示的最大玩家数。
* 该值可设为 false 或 true。true 时，玩家总是连接到默认服务器（*priorities* 中第一个可用服务器）；false 时，玩家连接到上次在线的子服务器。**重要：** 启用后，*forced_hosts* 的连接也会转发到默认服务器。

### ip_forward

该值可设为 false 或 true。true 时，玩家只能通过 BungeeCord 服务器访问网络；false 时，玩家知道子服务器 IP 和端口时也能直接连接。
**重要：** 若 *online_mode* 设为 true，建议同时启用此功能以堵住安全漏洞。

### prevent_proxy_connections

该值可设为 false 或 true。true 时，连接玩家的 IP 会发送给 Mojang 服务器；false 时，服务器阻止 IP 转发给 Mojang。
此设置对游戏体验无实质影响。

### groups

在此列表中，你可以为单个玩家分配一个或多个组，从而赋予他们 *permissions* 中定义的 BungeeCord 权限。
语法和缩进（2 个空格）非常重要：
```
groups:
  PlayerName:
  - GroupName
```

### connection_throttle

该值定义玩家再次尝试连接服务器前必须等待的时间（毫秒）。默认值为 4000，即最长等待 4 秒。

### stats

这里会插入一个随机生成的代码。建议不要修改，以帮助优化 BungeeCord 并修复漏洞。分析数据会匿名加密发送给开发者。

### connection_throttle_limit

该值决定玩家在必须等待 *connection_throttle* 指定时间前，允许的最大连接尝试次数。

<InlineVoucher />