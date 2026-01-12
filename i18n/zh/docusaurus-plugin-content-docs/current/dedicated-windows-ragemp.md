---
id: dedicated-windows-ragemp
title: "独立服务器：RageMP Windows 服务器搭建指南"
description: "教你如何在 Windows 独立服务器上搭建 RageMP 服务器，轻松开启 GTA V 多人联机 → 立即了解"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows 独立服务器，想在上面安装 RageMP 服务器吗？来对地方了！这篇指南会一步步教你如何在服务器上安装这个服务。



## 准备工作

首先，通过远程桌面（RDP）连接到你的独立服务器。如果你不太会操作，可以参考我们的[初始访问（RDP）](vserver-windows-userdp.md)教程。

连接上服务器后，先安装 [Microsoft Visual C++ 2017 可再发行组件](https://aka.ms/vs/15/release/VC_redist.x64.exe)，这是 RageMP 运行的必备依赖。确保安装完成后再继续。如果不确定是否已安装，直接运行安装程序，它会告诉你。

依赖装好后，去 [RageMP 官网](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe)下载最新的服务器版本。

:::tip
如果你已经装过 RageMP，可以直接跳到**切换到服务器分支**部分，无需重新安装。
:::

## 安装流程

下载好安装包后，运行 **RAGEMultiplayer_Setup.exe**，按照提示完成安装。安装过程中可以自定义安装路径，建议调整到你喜欢的位置。

安装完成后，打开 Windows 应用列表找到并启动 **RAGE Multiplayer**。

首次启动时，需要你指定 GTA V 的游戏安装目录。这个目录取决于你用哪个启动器安装的游戏，默认一般在 `C:/Program Files` 或 `C:/Program Files (x86)` 下。

接下来，你需要切换分支来下载服务器文件。

### 切换到服务器分支

进入 RageMP 的安装目录，找到 **config.xml** 文件。把里面的 `channel` 参数从 `prerelease` 改成 `prerelease_server`，然后保存。

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

接着运行目录里的 **updater.exe**，它会根据分支设置下载服务器所需文件。你会看到一个新的 **server-files** 文件夹出现在 RageMP 目录下，这就是服务器文件所在。

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

如果想切回客户端版本继续玩游戏，可以把 `channel` 参数改回 `prerelease`，再运行一次 **update.exe**。

:::tip
你可以把服务器文件夹移动到任何你想放的位置，比如桌面，甚至重命名。没必要非得放在 `RAGEMP` 文件夹里。
:::

启动服务器只需运行 `server-files` 目录下的 **ragemp-server.exe**，服务器就会开始启动。不过我们建议先做好端口转发和服务器配置。

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### 端口转发设置

为了让外网玩家能访问你的服务器，必须给服务器用到的端口设置端口转发。你可以用 PowerShell 命令快速搞定，也可以通过 Windows Defender 防火墙界面手动设置。

:::tip
首次启动服务器时会弹出 UAC 提示，接受后会自动帮你设置防火墙规则，之后就可以直接跳到下一步了。如果没弹出或者没接受，请用下面的方法手动设置。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="用 PowerShell" default>

打开 Windows 搜索，输入 **PowerShell**，右键选择 **以管理员身份运行**，确保权限足够。

:::info
一定要用管理员权限运行 PowerShell，否则设置可能不会生效。
:::

复制粘贴以下命令到 PowerShell 窗口：

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 RageMP 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="用 Windows Defender">

用 Windows 搜索打开 **高级安全 Windows 防火墙设置**。如果打开的是基础防火墙界面，点击右侧的 **高级设置** 进入。

![image](https://screensaver01.zap-hosting.com/index.php/s/2ZX7HntKMHFGNzR/preview)

你需要为 RageMP 服务器新建入站和出站规则，端口和协议如下：

- TCP 入站和出站：22005
- UDP 入站和出站：22005

如果需要更详细的操作指导，可以参考我们的[端口转发（防火墙）](vserver-windows-port.md)教程。

</TabItem>
</Tabs>

设置好规则后，你的服务器就能通过公网 IP 被访问了。

建议先完成下面的服务器配置，再正式上线。

## 配置服务器

到这里，RageMP 服务器已经搭建完成。你可以通过配置文件进一步调整服务器参数。

回到服务器根目录，找到并打开 **conf.json** 文件。这里可以修改端口、服务器名称等设置。

举个例子，配置文件里可能包含：

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## 启动并连接服务器

现在可以启动服务器了。进入 `server-files` 文件夹，运行 **ragemp-server.exe**，服务器控制台会弹出，开始启动。

启动后，你就能通过 RageMP 启动器直接连接你的服务器啦。

## 总结

恭喜你，RageMP 服务器已经成功安装并配置完成！如果遇到任何问题，随时联系我们的客服团队，我们每天都在线帮你解决！