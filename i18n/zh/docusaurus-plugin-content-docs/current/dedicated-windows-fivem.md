---
id: dedicated-windows-fivem
title: "FiveM 专用服务器设置"
description: "了解如何使用 txAdmin 设置并运行您自己的 FiveM 专用服务器，实现无缝多人游戏体验 → 立即了解更多"
sidebar_label: FiveM
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

您是否拥有专用服务器并想安装和运营自己的 FiveM 专用服务器服务，使用 txAdmin 管理？您来对地方了！接下来，我们将详细说明如何安装和配置 FiveM 服务器，以及需要注意的事项。

:::warning 已选择并安装操作系统
假设您已经为您的 VPS/专用服务器选择并安装了操作系统。如果您尚未完成此步骤，请先按照专用服务器的[初始设置](dedicated-setup.md)指南进行操作。
:::

## 准备工作

要搭建 FiveM 服务器，必须先完成一些准备工作，这些步骤需要在正式安装 FiveM 专用服务器之前完成。

### 设置数据库

如果您想使用或安装需要数据库支持的资源，则需要额外的**数据库服务器**。搭建数据库服务器有多种方式。我们在[安装 MySQL](dedicated-windows-installmysql.md)指南中展示了如何在您的**专用服务器**上安装自己的**数据库服务器**。

### 下载 FiveM 服务器软件

下一步是下载 FiveM 服务器软件。打开您选择的浏览器，访问 FiveM 的[服务器构建列表](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/)页面，下载最新的 FiveM 服务器版本。

将下载的文件解压到下载目录，并将 FiveM 服务器文件移动到一个单独的目录中。此示例中，服务器软件位于桌面名为 **FiveM** 的文件夹内。

:::warning 需要解压工具
解压下载的 FiveM 服务器软件需要使用解压工具。此示例中使用的是 [7Zip 软件](https://7-zip.com/)。
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)

### 创建 FiveM 服务器许可证密钥

每个 FiveM 服务器都需要一个独立的许可证密钥，该密钥通过新的 [Cfx.re 门户](http://portal.cfx.re/)进行管理。许可证密钥与您的 Cfx.re 账户绑定。登录网站，进入 **Server** 分类，点击 **Generate Key** 按钮生成密钥。

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)

## 配置

现在可以开始安装 FiveM 服务器和 txAdmin。打开您的 FiveM 服务器目录，运行 `cfx-server.exe` 应用程序。

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)

运行服务器程序后，服务器控制台和 txAdmin 界面将自动打开。在 txAdmin 界面中，您需要将您的 **Cfx.re 账户** 与 txAdmin 关联。

![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)

### txAdmin 设置

在 txAdmin 设置过程中，您的 FiveM 服务器将通过五个步骤完成安装和配置。按照 txAdmin 界面中的指示操作，首先定义一个 **服务器名称**，然后选择所需的 **服务器类型**。本示例展示了带预装 QBCore 的 FiveM 服务器安装。

在 **Deployment Type** 步骤中选择 **Popular Recipes**，然后选择 **QBCore Framework Template**。确认所需的 **数据目录**，启动 **Recipe Deployer** 完成安装。

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

在 Recipe Deployer 过程中，需要填写最后的必要信息，服务器才能启动。在 **License Key** 字段输入您之前创建的 FiveM 许可证密钥。点击 **Show/Hide Database Options (Advanced)**，填写数据库服务器的登录信息。此处只需输入之前为 **root** 用户设置的密码，其他设置保持默认。确认无误后，点击 **Run Recipe** 启动安装流程。

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)

### 防火墙配置

为了确保您的服务器对外可访问，您必须为 VPS/专用服务器使用的端口设置端口转发规则。您可以通过 Powershell 命令直接操作（更简单），也可以通过 Windows Defender 防火墙界面进行配置。

<Tabs>
<TabItem value="powershell" label="通过 Powershell" default>

打开 Windows 搜索框，搜索 **Powershell**。右键点击并选择 **以管理员身份运行**，确保拥有足够权限，设置才能生效。

:::info
请确保以管理员身份运行 Powershell，否则设置可能无法正确应用。
:::

接着，将以下命令复制粘贴到 Powershell 窗口中：
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保您的 FiveM 服务器对外开放。

</TabItem>

<TabItem value="windefender" label="通过 Windows Defender">

使用 Windows 搜索功能打开 **Windows 防火墙高级安全设置**。如果打开的是基础防火墙页面，可能需要点击 **高级设置** 进入所需窗口。

![](https://screensaver01.zap-hosting.com/index.php/s/woitzXpAAirg9JN/preview)

您需要为 FiveM 服务器创建新的规则。分别为入站和出站规则添加以下协议和端口：
- TCP 入站和出站：30120
- UDP 入站和出站：30120

如果需要更多帮助，请参考我们的[端口转发（防火墙）](vserver-windows-port.md)指南。

</TabItem>
</Tabs>

## 结论

您已成功在您的 VPS/专用服务器上安装并配置了 FiveM 专用服务器服务。若有任何疑问或需要帮助，请随时联系我们的支持团队，我们每天都在线为您服务！🙂