---
id: vserver-windows-valheim
title: "VPS：Valheim 专用服务器 Windows 安装指南"
description: "快速高效地在你的 VPS 或专用服务器上搭建 Valheim 专用服务器 → 立即了解更多"
sidebar_label: Valheim
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
有 VPS 或专用服务器，想在上面安装游戏服务器？比如 Valheim 专用服务器？那你来对地方了！接下来我们会一步步教你如何在服务器上安装这个服务。

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/8yWGtXMPFr8Jyza/preview" title="Windows VPS 上的 Valheim 专用服务器安装" description="觉得看视频更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定安装。不管你是赶时间还是喜欢边看边学，这里都有你想要的！"/>
<InlineVoucher />

## 准备工作
搭建 Valheim 服务器需要用到 SteamCMD。SteamCMD 是 **Steam 客户端的命令行版本**。这个工具可以帮你快速轻松地下载热门 Steam 游戏的专用服务器程序。你可以在 Valve 官方开发者网站找到 SteamCMD：`https://developer.valvesoftware.com/wiki/SteamCMD`。

接下来就是下载了。下载后你会得到一个 **steamcmd.zip** 文件，先解压它。建议新建一个专门的文件夹来解压。解压后你应该能看到 **steamcmd.exe**。运行它，等待安装完成。
![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

当屏幕显示 **Loading Steam API.... OK**，说明安装成功，可以开始安装 Valheim 服务器了。



## 安装

安装完成后，你应该能在 **Steam 命令行（steamcmd.exe）** 里执行命令。首先需要登录，使用匿名用户登录。执行命令：`login anonymous`

下一步就是安装服务器了，执行命令：`app_update 896660`。App ID **896660** 就是 **Valheim 专用服务器** 的应用 ID。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

:::info
请耐心等待安装完成，别中途打断，避免出错。虽然可能需要点时间，但绝对值得！:)
:::

进入你安装的目录，找到子目录：**../steamapps/common/Valheim dedicated Server/**

这里需要创建启动文件，用来运行服务器程序。新建一个文件，命名为：start_headless.bat

:::info
确保你开启了“显示文件扩展名”选项，避免文件后缀名错误。
:::

打开文件，添加以下内容并保存：

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

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

需要添加入站和出站规则，分别为端口 2456-2458，协议为 TCP/UDP。




## 配置

基本安装已经完成。你可以在 **start_headless_server.bat** 文件里做更多配置，比如修改服务器名称、密码、管理员密码等。路径如下：

```
../steamapps/common/Valheim dedicated Server/
```



## 玩起来

安装结束后，运行你刚创建的 **start_headless_server.bat** 文件，就会打开服务器控制台并启动服务器。如果一切顺利，服务器启动后会出现在服务器列表里。


## 总结

恭喜你，已经成功在 VPS 上安装并配置了 Valheim 服务器！如果还有任何问题或疑问，随时联系我们的支持团队，每天都在线帮你解决！ 

<InlineVoucher />