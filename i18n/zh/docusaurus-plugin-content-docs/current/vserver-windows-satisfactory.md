---
id: vserver-windows-satisfactory
title: "VPS：Satisfactory 专用服务器 Windows 安装指南"
description: "快速轻松地在你的 VPS 或专用服务器上搭建 Satisfactory 专用服务器 → 立即了解更多"
sidebar_label: Satisfactory
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
有 VPS 或专用服务器，想在上面安装游戏服务器？比如 Satisfactory 专用服务器？那你来对地方了！接下来我们会一步步教你如何在服务器上安装这个服务。

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oHiNw9tMBtgL6nq/preview" title="Windows VPS 上的 Satisfactory 专用服务器安装" description="喜欢边看边学更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定安装。不管你是赶时间还是喜欢用最酷的方式吸收信息！"/>
<InlineVoucher />

## 准备工作

搭建 Satisfactory 服务器需要用到 SteamCMD。SteamCMD 是 **Steam 客户端的命令行版本**。这个工具可以帮你快速轻松地下载热门 Steam 游戏的专用服务器程序。你可以在 Valve 官方开发者网站找到 SteamCMD：https://developer.valvesoftware.com/wiki/SteamCMD。

接下来就是下载了。下载包里会有一个 **steamcmd.zip** 文件，先解压它。建议新建一个专门的文件夹来解压。解压后你会看到 **steamcmd.exe**。运行它，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/NkbSey5q2rWRjtF/preview)

当看到提示 **Loading Steam API.... OK**，说明安装成功，可以开始安装 Satisfactory 服务器了。



## 安装步骤

安装完成后，你应该能在 **Steam 命令行（steamcmd.exe）** 里执行命令。先登录，使用匿名用户登录。执行命令：`login anonymous`

下一步就是安装服务器了，执行命令：`app_update 1690800`。App ID **1690800** 就是 **Satisfactory 专用服务器** 的应用 ID。

![](https://screensaver01.zap-hosting.com/index.php/s/b8ePqS9FdP2rTzP/preview)



:::info
安装过程中请不要中断，避免出错。可能需要一点时间，但耐心点，绝对值得！ :)
:::



进入你安装的目录，找到子目录：**../steamapps/common/SatisfactoryDedicatedServer**

这里需要创建启动文件，用来运行服务器程序。新建一个文件，命名为：server-start.bat

:::info
确保你开启了“显示文件扩展名”选项，避免文件后缀名出错。
:::

打开这个文件，写入以下内容并保存：

```
Factoryserver.exe -log -unattended
```



运行这个文件。首次启动时会弹出窗口提示需要安装某些组件。游戏需要 Visual C++ 运行库，点击“是”并完成安装。

为了让服务器对外可见且可访问，需要在防火墙里开启/转发服务器使用的端口。打开 Windows 防火墙设置。

![](https://screensaver01.zap-hosting.com/index.php/s/x29gQWEreNt3y2W/preview)


在设置里添加入站和出站规则，协议选 UDP，端口号是 15000。



## 配置

基本安装完成了。你还可以在 **ServerSettings.ini** 配置文件里做更多设置，比如修改服务器名称、密码等。路径是：

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## 玩起来

安装完成后，运行你之前创建的 **server-start.bat** 文件启动服务器。这样会打开服务器控制台并开始启动流程。启动成功后，服务器应该会出现在服务器列表里。



## 总结

恭喜你，成功在 VPS 上安装并配置了 Satisfactory 服务器！如果还有任何问题或疑问，随时联系我们的支持团队，我们每天都在线帮你解决！ 

<InlineVoucher />