---
id: unturned-firstthirdperson
title: "Unturned：为服务器设置第一/第三人称视角"
description: "了解如何自定义你的 Unturned 服务器玩家视角，切换第一人称、第三人称或两者兼用，提升游戏体验 → 立即了解"
sidebar_label: 第一/第三人称
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 第一 / 第三人称视角

Unturned 支持在服务器上切换玩家视角。你可以选择第一人称或第三人称视角。游戏默认是第一人称视角。不过从 3.9.9.0 版本开始，也可以切换视角。下面我们来教你如何为你的服务器设置这个功能。



## 配置方法

这个设置是在 **Commands.dat** 配置文件里完成的。你可以在 **Web面板的 Configs** 里找到它。根据你想要的视角，需在配置里添加以下命令：

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)



### 第一人称视角（默认）：

这个选项默认就是开启的，即使配置里没加命令也生效。不过为了完整性，你也可以放心添加这条命令。命令格式如下：

```
perspective first
```



### 第三人称视角：

如果你想用第三人称视角，也可以通过命令设置。命令格式如下：

```
perspective third
```



### 两种视角同时使用：

你也可以同时启用两种视角，这样玩家可以自由切换。只需要把命令的参数改成 both 即可，命令格式如下：

```
perspective both
```



下次启动服务器时，选定的视角设置就会生效啦！

<InlineVoucher />