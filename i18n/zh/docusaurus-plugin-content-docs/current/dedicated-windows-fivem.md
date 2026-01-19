---
id: dedicated-windows-fivem
title: "独立服务器：FiveM 独立服务器设置"
description: "了解如何使用 txAdmin 设置并运行自己的 FiveM 独立服务器，实现无缝多人游戏 → 立即了解更多"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## 介绍

你拥有一台独立服务器，想要安装并运营自己的 FiveM 独立服务器服务，使用 txAdmin 管理吗？那你来对地方了！接下来，我们将详细讲解如何安装和配置 FiveM 独立服务器，以及你需要注意的事项。



:::warning  已选择并安装操作系统
这里假设你已经为你的独立服务器选择并安装了操作系统。如果你还没完成这一步，必须先按照[独立服务器初始设置](dedicated-setup.md)指南完成相关操作。
:::



## 准备工作

要搭建 FiveM 服务器，需要先完成一些准备工作，这些步骤必须在正式安装 FiveM 独立服务器之前完成。



### 设置数据库

如果你想使用或安装需要数据库支持的资源，就需要额外的**数据库服务器**。搭建数据库服务器有多种方式。我们在[安装 MySQL](dedicated-windows-installmysql.md)指南中，展示了如何在你的**独立服务器**上安装自己的**数据库服务器**。



### 下载 FiveM 服务器软件

下一步是下载 FiveM 服务器软件。打开你喜欢的浏览器，访问 FiveM 的[服务器构建列表](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/)页面，下载最新的 FiveM 服务器版本。

将下载的文件解压到“下载”目录，然后最好将 FiveM 服务器文件移动到一个单独的文件夹中。这里示例中，服务器软件放在桌面名为 **FiveM** 的文件夹里。

:::warning 需要解压工具
解压下载的 FiveM 服务器软件需要用到解压工具。这里示例使用的是[7Zip 软件](https://7-zip.com/)。
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### 创建 FiveM 服务器许可密钥

每个 FiveM 服务器都需要一个独立的许可密钥，通过新的 [Cfx.re 门户](http://portal.cfx.re/)管理。许可密钥与你的 Cfx.re 账号绑定。登录网站，进入 **服务器** 分类，点击 **生成密钥** 按钮。

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## 配置

现在可以开始安装 FiveM 服务器和 txAdmin 了。打开你的 FiveM 服务器目录，运行 `FXServer.exe` 应用程序。

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


运行服务器程序后，会打开服务器控制台和 txAdmin 界面。在 txAdmin 界面中，你需要将你的 **Cfx.re 账号** 与 txAdmin 绑定。  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### txAdmin 设置

在 txAdmin 设置过程中，你的 FiveM 服务器会被分五步安装和配置。按照 txAdmin 界面上的指示操作，首先定义一个 **服务器名称**。然后选择你想要的 **服务器类型**。本示例展示的是带预装 QBCore 的 FiveM 服务器安装。

在 **部署类型** 步骤中选择 **热门模板**，然后选择 **QBCore 框架模板**。确认所需的 **数据目录**，启动 **模板部署器** 完成安装。

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

在模板部署器中，需要填写最后的必要信息，服务器才能最终启动。在 **许可密钥** 字段输入你之前创建的 FiveM 许可密钥。然后点击 **显示/隐藏数据库选项（高级）**，输入你的数据库服务器登录信息。这里只需填写之前为 **root** 用户设置的密码，其他设置保持默认。确认无误后，点击 **运行模板** 开始安装。

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### 防火墙配置
为了确保你的服务器对外开放，需要为独立服务器进程使用的端口设置端口转发规则。你可以通过 Powershell 命令（更简单）或者通过 Windows Defender 防火墙界面来完成。

<Tabs>
<TabItem value="powershell" label="通过 Powershell" default>

打开 Windows 搜索框，搜索 **Powershell**。务必右键选择 **以管理员身份运行**，确保权限充足，设置才能生效。

:::info
请确保以管理员身份运行 Powershell，否则设置可能无法正确应用。
:::

接着，将以下命令复制粘贴到 Powershell 窗口：
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 FiveM 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="通过 Windows Defender">

使用 Windows 搜索打开 **高级安全 Windows 防火墙设置**。如果你打开的是基础防火墙页面，可能需要点击 **高级设置** 才能进入所需窗口。

![](https://screensaver01.zap-hosting.com/index.php/s/woitzXpAAirg9JN/preview)

你需要为 FiveM 服务器创建新的规则。分别在入站和出站规则中添加以下协议和端口：
- TCP 入站和出站：30120
- UDP 入站和出站：30120

如果需要更多帮助，请参考我们的[端口转发（防火墙）](vserver-windows-port.md)指南。

</TabItem>
</Tabs>

## 总结

你已经成功在独立服务器上安装并配置了 FiveM 独立服务器服务。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂



