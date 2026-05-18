---
id: hytale-gamemode
title: "Hytale：游戏模式配置"
description: "了解如何通过白名单功能管理玩家访问，保护你的Hytale服务器和游戏体验 → 立即了解更多"
sidebar_label: 游戏模式
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Hytale服务器允许你配置游戏玩法设置，比如定义玩家体验的游戏模式。更改游戏模式可以让你根据特定的玩法风格或社区偏好定制你的服务器。

:::info 早期体验提示

Hytale于2026年1月13日发布，目前处于早期体验阶段。由于游戏仍在积极开发中，服务器软件、配置文件、模组支持和安装流程可能会持续变化。

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/KsesqALHY3AgKHF/preview)



## 更改游戏模式

### 实时控制台
只要拥有相应权限，服务器运行时可以通过实时控制台或游戏内命令更改游戏模式。这种方式允许管理员无需编辑配置文件即可切换游戏模式。

使用控制台命令会立即更新当前服务器会话的游戏模式。根据服务器设置，变更可能会持续到下一次重启，或者恢复为配置文件中定义的值。

```
/gamemode <gamemode> <playername>
```

`GameMode`的值决定服务器启动时应用的游戏模式。你可以根据想要的游戏体验调整这个值。

常用游戏模式值包括：

- `Creative`：无限制建造和内容创作
- `Adventure`：结构化玩法，带有明确的进度和交互规则

更改游戏模式值后，必须重启服务器才能使新设置生效。



### 配置文件

游戏模式也可以直接在服务器配置文件中定义。  
当你希望服务器每次启动都使用特定游戏模式，或者准备全新服务器时，推荐使用此方法。

配置文件可以通过你的主机控制面板或文件管理器访问。文件中有一项设置控制服务器启动时使用的游戏模式。修改该值后，必须重启服务器才能生效。

```
"Defaults": {
"World": "default",
"GameMode": "Adventure"
},
```

`GameMode`的值决定服务器启动时应用的游戏模式。你可以根据想要的游戏体验调整这个值。

常用游戏模式值包括：

- `Creative`：无限制建造和内容创作
- `Adventure`：结构化玩法，带有明确的进度和交互规则

更改游戏模式值后，必须重启服务器才能使新设置生效。



## 总结

通过服务器配置文件或实时控制台配置游戏模式，你可以精准掌控Hytale服务器上的游戏体验。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂