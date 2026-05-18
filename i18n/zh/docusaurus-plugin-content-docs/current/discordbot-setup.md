---
id: discordbot-setup
title: 设置你的 Discord 机器人
description: "了解如何运行和管理用于管理、音乐、抽奖等功能的 Discord 机器人，搭配无缝服务器托管 → 立即了解更多"
sidebar_label: 设置
services:
  - discord-bot
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## 介绍

**Discord 机器人服务器** 让你可以无缝且持续地运行你的 Discord 机器人。这些机器人能执行各种任务，比如自动管理你的 Discord 频道、播放音乐、组织抽奖和投票等等。

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ffjmn3snRrkoeoK/preview" title="如何设置 Discord 机器人服务器并上传机器人文件！" description="觉得看实操视频更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定一切。不管你是赶时间还是喜欢用最有趣的方式学习！"/>

<InlineVoucher />



## 支持的编程语言

Discord 机器人可以用多种语言编写。我们的产品支持以下编程语言编写的 Discord 机器人：

- Java
- Python
- NodeJS

  
  

## 准备工作



### 获取机器人

首先，你需要一个功能完整的 Discord 机器人。你可以自己创建一个，或者从网上下载一个现成的机器人。保存到你的电脑，方便之后上传到你的服务器。

### 上传文件

你的 Discord 机器人文件需要上传到服务器。可以通过 FTP 来完成。如果你不熟悉 FTP，建议查看我们的[通过 FTP 访问](gameserver-ftpaccess.md)指南，里面有详细的操作说明。

![](https://screensaver01.zap-hosting.com/index.php/s/x4WPiNS6xQcWQrp/preview)


打开文件夹后，你只需将机器人文件上传到这个空文件夹里：

![](https://screensaver01.zap-hosting.com/index.php/s/t7DDaF684PZkXjn/preview)



## 配置

要通过控制面板运行你的机器人，需要在 Discord 机器人控制面板的 **设置** 页面进行配置。

![](https://screensaver01.zap-hosting.com/index.php/s/HoPpfJKsTC6ozNy/preview)

这里你需要配置机器人使用的编程语言，以及主文件的名称。示例中使用的是 Python 3，指定了要执行的 Discord 机器人文件名为 `main.py`。

![](https://screensaver01.zap-hosting.com/index.php/s/ixfz2xKYCepS9Ek/preview)



:::danger 依赖项
Discord 机器人通常包含额外的依赖库以实现功能。请确保所有依赖都已安装并正确配置。这些依赖定义在以下文件中：

- Python：依赖写在 `requirements.txt`。
- Node.js：依赖写在 `package.json`。
- Java：依赖写在 `pom.xml`（Maven）或 `build.gradle`（Gradle）。

:::



## 功能测试

保存设置后，可以点击页面顶部的绿色启动按钮来启动机器人。你可以在实时控制台中查看机器人是否成功启动。



## 总结

恭喜你，已成功安装并配置好你的 Discord 机器人。如有任何问题或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂






<InlineVoucher />