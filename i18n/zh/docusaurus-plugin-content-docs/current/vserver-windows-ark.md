---
id: vserver-windows-ark
title: "VPS：ARK 生存进化专用服务器 Windows 安装指南"
description: "快速轻松地在你的 Windows VPS 上搭建 ARK: Survival Evolved 专用服务器 → 立即了解更多"
sidebar_label: ARK 生存进化专用服务器安装
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## 介绍
有台 Windows VPS，想在上面装游戏服务器？比如 ARK: Survival Evolved 专用服务器？那你来对地方了！接下来我们会一步步教你怎么在你的服务器上安装这个服务。

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Tde2kaHrjgtMd3H/preview" title="ARK: Survival Evolved 专用服务器 Windows VPS 安装" description="觉得看视频更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定安装。不管你是赶时间还是喜欢边看边学，这里都超适合你！"/>

通过 RDP 连接你的 VPS，开始搭建 ARK: Survival Evolved 专用服务器。如果你还不知道怎么用 RDP 连接服务器，建议先看看我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

<InlineVoucher />

## 准备工作

搭建 ARK 服务器需要用到 SteamCMD。SteamCMD 是 **Steam 客户端的命令行版本**，可以用来快速轻松地下载热门 Steam 游戏的专用服务器程序。你可以在 Valve 官方开发者网站找到 SteamCMD：`https://developer.valvesoftware.com/wiki/SteamCMD`。

下载完成后，你会得到一个 **steamcmd.zip** 文件，先解压它。建议新建一个专门的文件夹来解压。解压后你应该能看到 **steamcmd.exe**。运行它，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/67Prbs9CKEo4tfG/preview)

当看到 **Loading Steam API.... OK** 的提示时，说明安装成功，可以开始安装 ARK 服务器了。



## 安装

安装完成后，你应该能在 **Steam 命令行（steamcmd.exe）** 里执行命令。先登录，使用匿名用户登录，执行命令：`login anonymous`

接下来开始安装，执行命令：`app_update 376030`。App ID **376030** 就是 **ARK: Survival Evolved 专用服务器** 的应用 ID。

![](https://screensaver01.zap-hosting.com/index.php/s/37YL4YgiL4EogS6/preview)



:::info
安装过程中请不要中断，避免出错。可能需要一点时间，但耐心点，绝对值得！ :)
:::



进入你安装的目录，找到子目录：**../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**。

这里需要创建启动文件，用来运行服务器程序。新建一个文件，命名为：start-ark.bat

:::info
请确保你开启了显示文件扩展名，这样才能正确保存为 .bat 文件。
:::

打开文件，写入以下内容并保存：

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



为了让服务器能被外网访问，必须在防火墙里开启/转发服务器用到的端口。打开 Windows 防火墙设置。

![](https://screensaver01.zap-hosting.com/index.php/s/WxKJRKAPf9dXwFF/preview)


需要添加入站和出站规则，分别为以下协议和端口：

- TCP 入站和出站：27020
- UDP 入站和出站：27015
- UDP 入站和出站：7777-7778



## 配置

基础安装已经完成。你还可以通过修改 **DefaultGameUserSettings.ini** 和 **Gameusersettings.ini** 配置文件来调整服务器名称、密码、管理员密码等更多选项。配置文件路径如下：

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## 玩起来

安装结束后，运行你之前创建的 **start-ark.bat** 文件启动服务器。这样会打开服务器控制台并开始启动流程。如果一切顺利，服务器启动成功后会出现在服务器列表里。

![](https://screensaver01.zap-hosting.com/index.php/s/SkjP94KCa9YnJXn/preview)


## 总结

恭喜你，成功在 VPS 上安装并配置了 ARK 生存进化服务器！如果还有任何问题或疑问，随时联系我们的支持团队，每天都在线帮你解决！

<InlineVoucher />