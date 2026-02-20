---
id: dedicated-windows-ark
title: "独立服务器：ARK 生存进化 Windows 独立服务器安装指南"
description: "了解如何在 Windows VPS 上搭建 ARK: Survival Evolved 独立服务器，实现无缝多人游戏体验 → 立即了解"
sidebar_label: ARK 生存进化独立服务器安装
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

有台 Windows VPS，想在上面安装游戏服务器？比如 ARK: Survival Evolved 独立服务器？那你来对地方了！接下来我们会一步步教你如何在服务器上安装这个服务。通过 RDP 连接你的 VPS，开始搭建 ARK: Survival Evolved 独立服务器。如果你还不知道怎么用 RDP 连接服务器，建议先看看我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BF23kJKNsFQyeyX/preview" title="ARK: Survival Evolved 独立服务器 Windows VPS 安装教程" description="觉得看视频更容易理解？我们懂你！快来看看这段视频，帮你轻松搞定安装。不管你是赶时间还是喜欢边看边学，这里都有你想要的！"/>



## 准备工作

搭建 ARK 服务器需要用到 SteamCMD。SteamCMD 是 **Steam 客户端的命令行版本**。这个工具可以帮你快速轻松地下载热门 Steam 游戏的独立服务器程序。你可以在 Valve 官方开发者网站找到 SteamCMD：`https://developer.valvesoftware.com/wiki/SteamCMD`。

下载完成后，你会得到一个 **steamcmd.zip** 文件，先把它解压到一个单独的文件夹里。解压后你应该能看到 **steamcmd.exe**。运行它，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/QnqpbKQiEAFLL2T/preview)

当看到 **Loading Steam API.... OK** 的提示时，说明安装成功，可以开始安装 ARK 服务器了。



## 安装步骤

安装完成后，你应该能在 **Steam 命令行（steamcmd.exe）** 里执行命令。首先需要登录，使用匿名用户登录。执行命令：`login anonymous`

接下来就是安装服务器了，执行命令：`app_update 376030`。App ID **376030** 就是 **ARK: Survival Evolved 独立服务器** 的应用编号。

![](https://screensaver01.zap-hosting.com/index.php/s/RJzpFL4ZPSsAZZd/preview)



:::info
请不要在安装过程中中断操作，以免出错。安装可能需要一点时间，耐心点，绝对值得！ :)
:::



安装完成后，进入安装目录，找到子目录：**../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**。

这里需要创建启动文件，用来运行服务器程序。新建一个文件，命名为：start-ark.bat

:::info
确保你开启了“显示文件扩展名”选项，这样才能正确保存为 .bat 文件。
:::

打开这个文件，写入以下内容并保存：

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



为了让服务器能被外网访问，必须在防火墙里开放/转发服务器使用的端口。打开 Windows 防火墙设置。

![](https://screensaver01.zap-hosting.com/index.php/s/p7iyYxZwfeGaZaW/preview)


在设置里添加入站和出站规则，针对以下协议和端口：

- TCP 入站和出站：27020
- UDP 入站和出站：27015
- UDP 入站和出站：7777-7778



## 配置

基础安装已经完成。你还可以通过修改 **DefaultGameUserSettings.ini** 和 **Gameusersettings.ini** 配置文件来调整服务器名称、密码、管理员密码以及其他多种设置。配置文件路径如下：

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## 开玩

安装完成后，运行你刚才创建的 **start-ark.bat** 文件启动服务器。这样会打开服务器控制台，开始启动流程。如果一切顺利，服务器启动成功后就会出现在服务器列表里。

![](https://screensaver01.zap-hosting.com/index.php/s/cENfRQGxK4NjM3Y/preview)
