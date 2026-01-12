---
id: satisfactory-commands
title: "Satisfactory：控制台命令"
description: "了解如何通过必备控制台命令和快捷键技巧优化你的Satisfactory游戏体验 → 立即了解更多"
sidebar_label: 控制台命令
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Satisfactory 提供了丰富的实用命令，方便玩家调整客户端设置。在本页中，我们总结了玩家们常用且实用的热门命令。

<InlineVoucher />

## 如何打开控制台
在 Satisfactory 中使用控制台非常简单，只需按下 `` ` `` 键（反引号，位于 TAB 键上方）即可切换控制台的显示状态。每次切换时，控制台会在关闭、小窗口显示和全屏展开三种状态间切换。

:::info
如果反引号键对你不起作用，请参考下面的小节设置并启用新的快捷键。
:::

### 无法打开控制台？
有时候由于地区键盘布局不同，默认的反引号键可能无法激活控制台，这时你需要设置一个新的快捷键。操作前请先关闭正在运行的 Satisfactory。

按下 `Windows键 + R`，或者在开始菜单搜索“运行”，然后复制以下路径粘贴进去：

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor
:::

用文本编辑器（比如记事本）打开 `Input.ini` 文件。

![Screenshot 2023-02-22 011634](https://screensaver01.zap-hosting.com/index.php/s/re9wfZLbCosj5K5/preview)

接着复制并粘贴下面这行代码到文件末尾：

`[/script/engine.inputsettings] ConsoleKey=F6`

![Screenshot 2023-02-22 011758](https://screensaver01.zap-hosting.com/index.php/s/Qta7zsNA9ofo3dp/preview)

保存后重启游戏，现在你就可以用 `F6` 键打开控制台啦。

## 控制台命令

下表列出了命令本身、可接受的参数（如果有）以及简短说明，方便你快速理解。

想看全部命令列表，可以在控制台输入 `?`，会弹出一个悬浮菜单，显示所有命令。用键盘的上下箭头即可浏览列表。

下面是使用 `?` 查看所有命令的示例。

![Screenshot 2023-02-22 015435](https://screensaver01.zap-hosting.com/index.php/s/gS7bSwCFNngz8yx/preview)

:::info
本页提到的所有命令均适用于原版 Satisfactory。
:::

| 命令语法                  | 可接受参数 | 说明 | 
| ----------------------- | ---------- | --------- | 
| ?      | -          | 显示完整命令列表         | 
| Stat FPS      | -          | 切换游戏内置的FPS帧数显示         | 
| Stat UNIT      | -          | 显示帧时间、游戏数据、绘制时间及其他统计信息         | 
| t.MaxFPS "maxfps"      | 整数（例如120）          | 设置游戏最大帧率         | 
| r.ScreenPercentage "value"      | 整数（默认100）          | 调整屏幕分辨率缩放（仅影响世界渲染，不影响UI）         | 
| r.ViewDistanceScale "value"      | 整数（默认1）          | 调整物体渲染距离，比如岩石或树木         | 
| Suicide      | -          | 自杀，杀死自己的角色         | 
| FOV "value"      | 整数（例如90）          | 设置游戏视野（FOV）         | 
| r.Atmosphere "1 or 0"      | true (1)/false (0)          | 开关游戏大气层效果        | 
| r.Fog "1 or 0"      | true (1)/false (0)          | 开关游戏雾效         | 
| Gamma "value"      | 整数（默认50）          | 设置游戏亮度         | 

想了解更多高级命令，推荐访问 [Satisfactory 维基](https://satisfactory.fandom.com/wiki/Console)，这里有更全面的技术命令介绍。

<InlineVoucher />