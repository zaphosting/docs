---
id: satisfactory-connect
title: "Satisfactory：连接服务器"
description: "了解如何有效连接和管理你的 Satisfactory 服务器，畅享无缝游戏体验 → 立即了解更多"
sidebar_label: 连接服务器
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/2tJwRJe9dbfgLBE/preview" title="如何在 ZAP 创建 Satisfactory 服务器并上传你的存档" description="喜欢边看边学更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定一切。不管你是赶时间还是喜欢用最酷的方式吸收信息！"/>

:::info
如果你已经在用 QWERTY 键盘布局，别做这些步骤，直接按 CTRL + SHIFT + L，然后用 ~ 打开控制台就行了
:::

要连接你的 Satisfactory 服务器，必须先打开游戏控制台，有两种方法可以做到。

<InlineVoucher />

## 打开控制台

### 切换键盘布局
你可以轻松几步切换键盘布局。
启动 Satisfactory，进入主菜单。
现在按下 `CTRL + Shift`，你的键盘布局应该切换到 `EN` 了。
你可以切换到桌面，看看任务栏右下角有没有显示 `EN`，确认切换成功。

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

如果切换成功，回到游戏，按下 `CTRL + SHIFT + L`
然后按键盘上的 `^`，控制台就会打开。

### 修改打开控制台的按键
按 `Win键 + R` 或在开始菜单搜索 `运行`
复制以下路径进去：

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

按回车。

用你喜欢的编辑器打开 Input.ini 文件（比如记事本）

:::info
如果文件还没创建，直接新建一个就行。
:::

在文件里添加以下内容：

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

保存并重启游戏——现在你可以用 `F6` 打开控制台了。

## 连接你的 Satisfactory 游戏服务器
从你的服务器面板复制 IP 地址：

![](https://screensaver01.zap-hosting.com/index.php/s/7KJPTHTx4NJ8B3M/preview)

按照之前步骤打开游戏控制台

输入 `open 你的服务器IP地址`

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

按回车。

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

你现在正在加入你的 Satisfactory 服务器！

## HUB
HUB 已经放置在游戏世界里了，如果想换位置，可以按 `F` 摧毁它，然后重新放置。
跟着标记很容易找到 HUB。

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## 自动保存
服务器每 5 分钟自动保存一次进度，你可以在服务器面板的存档管理器里看到。
它会保留最近 6 个存档（共 30 分钟）的进度。

<InlineVoucher />