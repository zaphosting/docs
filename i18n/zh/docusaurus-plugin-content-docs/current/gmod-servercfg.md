---
id: gmod-servercfg
title: "Garry's Mod：Server.cfg 设置"
description: "配置你的 Garry's Mod 服务器设置，自定义游戏玩法和生成限制，打造最佳体验 → 立即了解更多"
sidebar_label: Garry's Mod Server.cfg 修改
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 配置你的 Garry's Mod server.cfg。

想通过我们的网页面板直接修改 server.cfg，先切到 Configs 标签页。

![](https://screensaver01.zap-hosting.com/index.php/s/TNFHX38G5PNpqac/preview)

接着用内置的配置编辑器打开 server.cfg。

![](https://screensaver01.zap-hosting.com/index.php/s/Pro5QoBBKSQCTdF/preview)

现在你就在我们的配置编辑器里了，这里可以随心修改所有变量。注意别把我们设置标签页里的选项和 server.cfg 里的混着改，特别是 hostname、rcon_password 和 sv_password，这些会互相影响。

可自定义的 Garry's Mod 服务器变量：

生成设置：
```
sbox_maxprops 150		// 设置玩家最多能拥有的道具数量。
sbox_maxragdolls 10		// 设置玩家最多能拥有的尸体布娃娃数量。
sbox_maxballoons 10		// 设置玩家最多能拥有的气球数量。
sbox_maxeffects 10		// 设置玩家最多能拥有的特效数量。（对帧率有影响）
sbox_maxdynamite 10		// 设置玩家最多能拥有的炸药数量。
sbox_maxlamps 10		// 设置玩家最多能拥有的灯具数量。
sbox_maxthrusters 10	// 设置玩家最多能拥有的推进器数量。
sbox_maxwheels 10		// 设置玩家最多能拥有的车轮数量。
sbox_maxnpcs 10			// 设置玩家最多能拥有的 NPC 数量。
sbox_maxhoverballs 10	// 设置玩家最多能拥有的悬浮球数量。
sbox_maxvehicles 10		// 设置玩家最多能拥有的载具数量。
sbox_maxbuttons 10		// 设置玩家最多能拥有的按钮数量。
```

游戏设置：
```
sbox_plpldamage 0 / 1	//0 = 关闭 PVP，1 = 开启 PVP
sbox_godmode	0 / 1	//0 = 关闭，1 = 开启（所有玩家无敌模式）
sbox_noclip		0 / 1	//0 = 关闭穿墙，1 = 开启穿墙
sv_noclipaccelerate 3	//调整穿墙速度。
sv_alltalk 1			//开启后，所有玩家都能听到彼此说话。
```

网络相关设置（不建议修改）
```
sv_minrate 0			//最低连接速度
sv_maxrate 10000		//最高连接速度
sv_minupdaterrate 10	//最低更新频率（Tickrate）
sv_maxupdaterrate 66	//最高更新频率（Tickrate）
net_maxfilesize	64		//最大可通过 FastDL 传输的文件大小。
sv_lan 0				//设置游戏为线上模式。
sv_region 3				//0+1 = 美国，2 = 南非，3 = 欧洲，4 = 亚洲，5 = 澳大利亚，6 = 中东，7 = 非洲，255 = 全球
```

全部设置好后，别忘了保存你的修改。

![](https://screensaver01.zap-hosting.com/index.php/s/zpaddQA5EXfSRM3/preview)

服务器重启后，所有改动都会生效。

<InlineVoucher />