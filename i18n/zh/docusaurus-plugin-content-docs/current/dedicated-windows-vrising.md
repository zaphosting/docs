---
id: dedicated-windows-vrising
title: "独立服务器：V-Rising Windows 独立服务器设置"
description: "了解如何设置 V Rising Windows 独立服务器，实现最佳游戏性能和服务器管理 → 立即了解更多"
sidebar_label: V-Rising
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/yCRYqJAjTTp4YFf/preview" title="如何设置 V Rising Windows 独立服务器！" description="觉得看着操作更容易理解？我们懂你！快来看看我们的视频，帮你一步步搞定。不管你是赶时间还是喜欢用最酷的方式吸收信息，这里都有你想要的！"/>



## 基础信息：
需要一台基于 Windows Server 2016/2019 的服务器，至少配备 4 核 2.4 GHz CPU（AMD/Intel），4GB 以上内存（DDR3/4），以及至少 6GB 可用硬盘空间（SSD 或更好，推荐使用）。服务器必须运行 64 位架构。

## 第一步：为 V-Rising 创建文件夹

首先，使用 [初始访问（RDP）](vserver-windows-userdp.md) 连接到你的服务器。连接成功后，需要在服务器上创建一个新文件夹，用来安装 V-Rising 的文件。
本例中，我们将在桌面上创建一个新文件夹。
右键点击桌面空白处，选择“新建 -> 文件夹”。

![](https://screensaver01.zap-hosting.com/index.php/s/SzB3TgsSkHRAaAB/preview)

你可以随意命名，示例中我们命名为“VRising”。

## 第二步：下载 SteamCMD 到你的 Windows 服务器

打开浏览器，访问[这个链接](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)，将 SteamCMD Windows 版本下载到服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/oHSse2fToxxTpCt/preview)

文件下载完成后，默认会保存在下载目录（不同系统可能路径不同）。

![](https://screensaver01.zap-hosting.com/index.php/s/35r8Dm49xcdwfq4/preview)

为了方便管理，我们把 steamcmd.zip 文件复制到之前桌面上创建的 VRising 文件夹。
选中文件，按下“CTRL+C”复制。
打开 VRising 文件夹，按“CTRL+V”粘贴。
现在你能在 VRising 文件夹里看到这个文件了。

![](https://screensaver01.zap-hosting.com/index.php/s/kKGt3gy2yDQXSLx/preview)

右键点击 steamcmd.zip 文件，选择“全部解压”，点击弹出的“解压”按钮确认。

![](https://screensaver01.zap-hosting.com/index.php/s/SHsNeRy4RbEenDX/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/y5ef3ncPgYMTzFw/preview)

解压完成后，双击 steamcmd.exe 文件。
这时会打开一个新窗口，开始安装 steamcmd 文件。

![](https://screensaver01.zap-hosting.com/index.php/s/TC2KAbWaCHEeZiF/preview)

## 第三步：下载 V Rising 游戏文件

steamcmd 安装完成后，窗口会显示如下内容。

![](https://screensaver01.zap-hosting.com/index.php/s/GAb4TgCNbpiW2F2/preview)

接下来指定游戏文件的下载路径。
使用命令“force_install_dir”来设置。
本例中完整命令是：
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/DeNFAWGLLnKq7pr/preview)

然后登录匿名用户，输入：
login anonymous

![](https://screensaver01.zap-hosting.com/index.php/s/pq74iCW6E2k8Sid/preview)

登录成功后，开始下载游戏文件，输入命令：
app_update 1829350 validate

文件开始下载，过程可能需要几分钟。

![](https://screensaver01.zap-hosting.com/index.php/s/6XX8wtekd89PJec/preview)

下载完成后，你可以在 VRising 文件夹里看到所有游戏文件。

![](https://screensaver01.zap-hosting.com/index.php/s/y9Gx9ANEpgbpESy/preview)

## 第四步：启动并配置 V Rising 服务器

你可以编辑 start_server_example.bat 文件进行一些自定义设置。
右键点击该文件，选择“编辑”。
可以修改服务器名称和保存进程的路径。

![](https://screensaver01.zap-hosting.com/index.php/s/zpEw92o7eQG9P2a/preview)

更多配置可以在 VRisingServer_Data\StreamingAssets\Settings 目录下的配置文件中完成。

![](https://screensaver01.zap-hosting.com/index.php/s/9TtQm6Yp8g3y5HH/preview)

在 ServerHostSettings.json 文件里可以做一些通用设置，比如端口号、服务器描述、保存间隔，甚至游戏服务器密码。
我把服务器名称改成了“ZAP-Hosting 测试服务器”。

启动服务器时，双击 start_server_example.bat 文件即可。

![](https://screensaver01.zap-hosting.com/index.php/s/gzs85C4HRy9MPTy/preview)

启动过程需要一点时间。
如果端口转发设置正确，服务器会出现在服务器列表中。

![](https://screensaver01.zap-hosting.com/index.php/s/S9mM8KNzsFARmQW/preview)

## 第五步：在防火墙中开放端口

服务器当然要对外开放，方便和朋友一起玩。为此，必须在 Windows 防火墙中开放服务器端口。
端口 9876 和 9877 需要同时开放 TCP 和 UDP 协议。
9876 是游戏服务器端口，9877 是查询端口。
如何在 Windows 上开放端口：[端口转发（防火墙）](vserver-windows-port.md)。

端口开放后，只要服务器启动，就能被外网访问啦。