---
id: dst-create-cave
title: "Don't Starve Together：服务器上创建洞穴"
description: "了解如何为 Don't Starve Together 设置主服务器和从服务器以支持洞穴玩法，提升游戏体验 → 立即了解"
sidebar_label: 创建洞穴
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 洞穴准备工作

想在 Don't Starve Together 里使用洞穴功能，你需要通过我们订购两台服务器。一台作为“主服务器”，负责上层世界；另一台作为“从服务器”，专门用于洞穴。哪个服务器是主服务器，哪个是从服务器，是通过 server.ini 和 cluster.ini 配置文件来决定的。

这两个配置文件都可以在面板的“**Configs**”里查看并编辑。

![](https://screensaver01.zap-hosting.com/index.php/s/mgjpecSGBsyasmc/preview)

只需编辑两个 .ini 文件中的“**[SHARD]**”部分。

## 主服务器

主服务器是上层世界服务器，必须在配置中设置为主服务器。

### server.ini

:::info
**重要提示** “**MASTERIP**”代表主服务器的 IP，比如主服务器 IP 是 123.123.123.123，那么这里就要写成 "bind_ip = 123.123.123.123"。

“**MASTERIP**”不是一个固定值，不能直接写死在 server.ini 的 "bind_ip = " 里。
:::

默认情况下，server.ini 中的“**[SHARD]**”只包含 "is_master = true"，现在需要添加以下命令：

```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

### cluster.ini

默认情况下，cluster.ini 中的“**[SHARD]**”只包含 "is_master = true"，现在需要添加以下命令：

```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

## 从服务器

从服务器是洞穴服务器，配置中必须填写主服务器的数据。

### server.ini

:::info
**重要提示** “**SLAVEIP**”代表从服务器的 IP，比如从服务器 IP 是 123.123.123.123，那么这里就要写成 "bind_ip = 123.123.123.123"。

“**SLAVEIP**”不是一个固定值，不能直接写死在 server.ini 的 "bind_ip = " 里。

“**MASTERIP**”也不是一个固定值，不能直接写死在 server.ini 的 "master_ip = " 里。
:::

默认情况下，server.ini 中的“**[SHARD]**”只包含 "is_master = true"，现在需要添加以下命令：

```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Caves
id=200
```

### cluster.ini

默认情况下，cluster.ini 中的“**[SHARD]**”只包含 "is_master = true"，现在需要添加以下命令：

```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Caves
cluster_key = deinclusterkey
```

### 生成新世界

配置全部正确后，需要为从服务器生成一个新世界。必须新建一个文件，确保洞穴能正确生成。

使用[通过 FTP 访问](gameserver-ftpaccess.md)指南，进入从服务器目录：*/starve/Save/Cluster_1/Master/*  
在该目录下新建一个名为 "*worldgenoverride.lua*" 的文件。  
文件内容如下：

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

然后在服务器上按住 "**TAB**" 键打开服务器状态界面，点击左上角的三个点，选择 "**Regenerate World**" 用覆盖参数重新生成世界。

重载完成后，一切就绪，你的服务器就支持洞穴玩法啦！

<InlineVoucher />