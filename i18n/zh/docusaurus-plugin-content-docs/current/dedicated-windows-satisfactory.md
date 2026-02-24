---
id: dedicated-windows-satisfactory
title: "独立服务器：Satisfactory 专用服务器 Windows 安装指南"
description: "教你如何在服务器上搭建 Satisfactory 专用服务器，实现流畅游戏体验和便捷管理 → 立即了解"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
有独立服务器，想在上面安装游戏服务器？比如 Satisfactory 专用服务器？那你来对地方了！接下来我们会一步步教你如何在服务器上安装这项服务。

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="Windows VPS 上的 Satisfactory 专用服务器安装" description="喜欢边看边学更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定安装。不管你是赶时间还是喜欢用最酷的方式吸收信息，都超适合！"/>



## 准备工作

搭建 Satisfactory 服务器需要用到 SteamCMD。SteamCMD 是 **Steam 客户端的命令行版本**。这个工具可以帮你快速轻松地下载热门 Steam 游戏的专用服务器程序。你可以在 Valve 官方开发者网站找到 SteamCMD：`https://developer.valvesoftware.com/wiki/SteamCMD`。

下载完成后，你会得到一个 **steamcmd.zip** 文件，先把它解压到一个单独的文件夹里。解压后你应该能看到 **steamcmd.exe**。运行它，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

当看到提示 **Loading Steam API.... OK**，说明安装成功，可以开始安装 Satisfactory 服务器了。



## 安装步骤

安装完成后，你应该能在 **Steam 命令行（steamcmd.exe）** 里执行命令。先登录，使用匿名用户登录。输入命令：`login anonymous`

接下来开始安装，执行命令：`app_update 1690800`。App ID **1690800** 就是 **Satisfactory 专用服务器** 的应用编号。

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
安装过程中请勿中断，避免出错。可能需要一点时间，但耐心绝对值得！:)
:::



进入你安装的目录，找到子目录：**../steamapps/common/SatisfactoryDedicatedServer**

这里需要创建启动文件，用来运行服务器程序。新建一个文件，命名为：server-start.bat

:::info
确保你开启了“显示文件扩展名”选项，避免文件后缀名错误。
:::

打开这个文件，写入以下内容并保存：

```
Factoryserver.exe -log -unattended
```



然后运行这个文件。首次启动时会弹出窗口提示需要安装某些组件。游戏需要 Visual C++ 运行库，点击“是”并完成安装。

为了让服务器对外可见且可访问，需要在防火墙中开启/转发服务器使用的端口。打开 Windows 防火墙设置。

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


在设置中添加入站和出站规则，针对 UDP 协议和端口 15000 进行放行。



## 配置

基本安装完成。你还可以在 **ServerSettings.ini** 配置文件里做更多设置，比如修改服务器名称、密码等。路径如下：

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## 开玩

安装结束后，运行你之前创建的 **server-start.bat** 文件启动服务器。这样会打开服务器控制台并开始启动流程。如果一切顺利，服务器启动成功后会出现在服务器列表里。