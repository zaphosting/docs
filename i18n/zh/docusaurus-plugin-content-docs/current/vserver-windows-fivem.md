---
id: vserver-windows-fivem
title: "VPS：FiveM 专用服务器搭建指南"
description: "了解如何在 VPS 上安装并配置你的专属 FiveM 服务器，实现无缝多人游戏体验 → 立即了解"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## 介绍

你有 VPS，想用 txAdmin 搭建并运营自己的 FiveM 专用服务器吗？来对地方了！接下来我们会详细讲解安装和配置的所有必要步骤，以及你需要注意的事项。 


## 准备工作

要搭建 FiveM 服务器，必须先完成一些准备工作，这些步骤需要在正式搭建 FiveM 专用服务器之前完成。



### 搭建数据库

如果你想使用或安装需要数据库支持的资源，就必须额外准备一个**数据库服务器**。搭建数据库服务器的方法有很多种。我们在[安装 MySQL](vserver-windows-installmysql.md)教程中，教你如何在你的**VPS**上安装自己的**数据库服务器**。



### 下载 FiveM 服务器软件

下一步是下载 FiveM 服务器软件。打开你喜欢的浏览器，访问 FiveM 的[服务器构建列表](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/)页面，下载最新的 FiveM 服务器版本。

将下载好的文件解压到“下载”目录，然后把 FiveM 服务器文件最好移动到一个单独的文件夹里。本例中，服务器软件放在桌面名为 **FiveM** 的文件夹里。

:::warning 需要解压工具
解压下载的 FiveM 服务器软件需要用到解压工具。本例使用的是 [7Zip 软件](https://7-zip.com/)。
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### 创建 FiveM 服务器授权密钥

每个 FiveM 服务器都需要一个专属的授权密钥，这个密钥通过新的 [Cfx.re 门户](http://portal.cfx.re/)管理。授权密钥与你的 Cfx.re 账号绑定。登录网站，进入 **Server** 分类，点击 **Generate Key** 按钮生成密钥。

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## 配置

现在可以开始安装 FiveM 服务器和 txAdmin 了。打开你的 FiveM 服务器目录，运行 `FXServer.exe` 应用程序。

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


运行服务器程序后，会打开服务器控制台和 txAdmin 界面。在 txAdmin 界面中，你需要将你的 **Cfx.re 账号**与 txAdmin 绑定。  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### txAdmin 设置

在 txAdmin 设置过程中，你的 FiveM 服务器会通过五个步骤完成安装和配置。按照 txAdmin 界面上的指引，先定义一个**服务器名称**，然后选择你想要的**服务器类型**。本例展示的是带预装 QBCore 的 FiveM 服务器安装。

在 **Deployment Type**（部署类型）步骤中选择 **Popular Recipes**，然后选择 **QBCore Framework Template**。确认所选的**数据目录**，启动 **Recipe Deployer** 完成安装。

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

在 Recipe Deployer 过程中，需要填写最后的关键信息，服务器才能启动。把之前创建的 FiveM 授权密钥填入 **License Key** 字段。点击 **Show/Hide Database Options (Advanced)** 展开数据库选项，输入你的数据库服务器登录信息。这里只需填写之前为 **root** 用户设置的密码，其他设置保持默认。确认无误后点击 **Run Recipe** 启动安装流程。

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### 防火墙配置
为了让你的服务器能被公网访问，你需要为专用服务器使用的端口设置端口转发规则。你可以通过 Powershell 命令快速设置，也可以通过 Windows Defender 防火墙界面手动配置。

<Tabs>
<TabItem value="powershell" label="通过 Powershell" default>

打开 Windows 搜索框，搜索 **Powershell**。右键选择 **以管理员身份运行**，确保权限充足，设置才能生效。

:::info
务必以管理员身份运行 Powershell，否则设置可能无法正确应用。
:::

接着复制粘贴以下命令到 Powershell 窗口：
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 FiveM 服务器能被公网访问。

</TabItem>

<TabItem value="windefender" label="通过 Windows Defender">

用 Windows 搜索打开 **Windows 防火墙高级安全设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入所需窗口。

![](https://screensaver01.zap-hosting.com/index.php/s/wSZg6zwTrGAYDmr/preview)

你需要为 FiveM 服务器创建新的规则。分别在入站和出站规则中添加以下协议和端口：
- TCP 入站和出站：30120
- UDP 入站和出站：30120

如果需要更详细的操作指导，请参考我们的[端口转发（防火墙）](vserver-windows-port.md)教程。

</TabItem>
</Tabs>

## 总结

你已经成功在 VPS 上安装并配置了 FiveM 专用服务器。如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂


<InlineVoucher />