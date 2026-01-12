---
id: dedicated-windows-valheim
title: "独立服务器：Valheim 独立服务器 Windows 安装指南"
description: "了解如何在你的专属服务器上搭建 Valheim 独立服务器，实现无缝多人游戏体验 → 立即了解"
sidebar_label: Valheim
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
有专属服务器，想在上面安装游戏服务器？比如 Valheim 独立服务器？那你来对地方了！接下来我们会一步步教你如何在你的服务器上安装这个服务。

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/D2doaAqjzdMSo9r/preview" title="Windows VPS 上的 Valheim 独立服务器安装" description="喜欢边看边学更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定安装。不管你是赶时间还是喜欢用最酷的方式吸收信息，这里都有你想要的！"/>



## 准备工作
搭建 Valheim 服务器需要用到 SteamCMD。SteamCMD 是 **Steam 客户端的命令行版本**。这个工具可以帮你快速轻松地下载热门 Steam 游戏的独立服务器程序。你可以在 Valve 官方开发者网站找到 SteamCMD：https://developer.valvesoftware.com/wiki/SteamCMD。

下载完成后，你会得到一个 **steamcmd.zip** 文件，先把它解压到一个单独的文件夹里。解压后你应该能看到 **steamcmd.exe**。运行它，等待安装完成。
![](https://screensaver01.zap-hosting.com/index.php/s/Y5zygHw2DFJa4dZ/preview)

当屏幕显示 **Loading Steam API.... OK**，说明安装成功，可以开始安装 Valheim 服务器了。



## 安装

安装完成后，你应该能在 **Steam 命令行（steamcmd.exe）** 里执行命令。先登录，使用匿名用户登录。执行命令：`login anonymous`

接下来就是安装服务器了，执行命令：`app_update 896660`。App ID **896660** 就是 **Valheim 独立服务器** 的应用编号。

![](https://screensaver01.zap-hosting.com/index.php/s/PxZFZat7cP2C26k/preview)

:::info
安装过程中请不要中断，避免出错。可能需要一点时间，但耐心点，绝对值得！ :)
:::


进入你安装的目录，找到子目录：**../steamapps/common/Valheim dedicated Server/**

这里你需要创建一个启动文件，用来运行服务器程序。新建一个文件，命名为：start_headless.bat

:::info
确保你开启了“显示文件扩展名”选项，这样才能正确保存为 .bat 文件。
:::

打开这个文件，复制以下内容进去并保存：

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Make a local copy of this script to avoid it being overwritten by steam.
REM NOTE: Minimum password length is 5 characters & Password cant be in the server name.
REM NOTE: You need to make sure che ports 2456-2458 is being forwarded to your server through your local router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

为了让服务器能被外网访问，必须在防火墙里开启/转发服务器用到的端口。打开 Windows 防火墙设置。

![](https://screensaver01.zap-hosting.com/index.php/s/MTHjL85zKsLtN9g/preview)

在设置里添加入站和出站规则，端口范围是 2456-2458，协议选 TCP/UDP。




## 配置

基本安装已经完成。你可以在 **start_headless_server.bat** 文件里做更多配置，比如修改服务器名称、密码、管理员密码等。路径如下：

```
../steamapps/common/Valheim dedicated Server/
```



## 开玩

安装完成后，运行你刚才创建的 **start_headless_server.bat** 文件，服务器控制台会打开，服务器启动过程也会开始。如果一切顺利，启动成功后服务器会出现在服务器列表里。