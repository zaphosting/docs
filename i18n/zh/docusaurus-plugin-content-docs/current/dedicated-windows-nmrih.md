---
id: dedicated-windows-nmrih
title: "独立服务器：No More Room In Hell 专用服务器 Windows 安装指南"
description: "快速轻松地在你的 VPS 或独立服务器上搭建 No More Room In Hell 专用游戏服务器 → 立即了解更多"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
有 VPS 或独立服务器，想在上面安装游戏服务器？比如 No More Room In Hell 专用服务器？那你来对地方了！接下来我们会一步步教你如何在你的服务器上安装这个服务。

## 准备工作

搭建 No More Room In Hell 服务器需要用到 SteamCMD。SteamCMD 是 **Steam 客户端的命令行版本**。这个工具可以帮你快速轻松地下载热门 Steam 游戏的专用服务器程序。你可以在 Valve 官方开发者网站找到 SteamCMD：`https://developer.valvesoftware.com/wiki/SteamCMD`。

接下来就是下载了。下载包里会包含一个 **steamcmd.zip** 文件，先把它解压到一个单独的文件夹里比较好。解压后你应该能看到 **steamcmd.exe**。运行它，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

当你看到 **Loading Steam API.... OK** 的提示时，说明安装成功，可以开始安装 No More Room In Hell 服务器了。

## 安装

安装完成后，你应该能在 **Steam 命令行（steamcmd.exe）** 里执行命令。先登录，使用匿名用户登录，执行命令：`login anonymous`

下一步就是安装服务器了，执行命令：`app_update 317670`。App ID **317670** 就是 **No More Room In Hell 专用服务器** 的应用ID。

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

下载过程可能会花点时间，尤其是游戏文件较大的时候，请耐心等待。成功后会显示成功提示。

为了让服务器对外可见且可访问，需要在防火墙里开启/转发服务器使用的端口。打开 Windows 防火墙设置。

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

需要添加入站和出站规则，分别为 TCP/UDP 协议的 27015-27020 端口。

## 配置

到这里，你的 No More Room In Hell 服务器基本搭建完成了。你可以通过直接编辑启动文件来做进一步配置。进入你的根目录，找到 cfg 文件夹，打开 `server.cfg` 文件，里面可以修改服务器选项。

```
../steamapps/common/nmrih-ds/nmrih/cfg/server.cfg
```

## 注册 GSL Token

为了让其他玩家能加入你的服务器，你必须生成并添加一个游戏服务器登录令牌（GSLT）。这个令牌用来让你的服务器通过 Steam 认证。生成 GSLT 请访问 http://steamcommunity.com/dev/managegameservers ，用游戏ID 317670（No More Room In Hell）创建令牌。

拿到令牌后，在服务器启动参数里加入 `+sv_setsteamaccount <TOKEN>`。

## 启动 & 连接服务器

现在可以启动服务器了。进入游戏主目录，执行以下启动命令：

```
start srcds.exe -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

你会在命令行看到启动日志，表示启动成功。首次启动可能会稍微慢一点，因为需要初始化。你也可以直接在服务器列表底部的搜索栏输入 `[你的IP地址]:2456` 来连接服务器。

## 总结

恭喜你，已经成功在 VPS 上安装并配置了 No More Room In Hell 服务器！如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂