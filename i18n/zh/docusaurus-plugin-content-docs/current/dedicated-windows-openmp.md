---
id: dedicated-windows-openmp
title: "独立服务器：Open.mp 独立服务器 Windows 安装指南"
description: "了解如何在 Windows 上设置并运行 open.mp 独立服务器，实现无缝多人游戏体验 → 立即了解"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows 独立服务器，想在上面安装 open.mp 独立服务器服务吗？你来对地方了！本指南将一步步教你如何在服务器上安装这个服务。

## 准备工作

首先，通过远程桌面（RDP）连接到你的独立服务器。如果你需要帮助，可以参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

连接服务器后，前往 [open.mp GitHub 仓库](https://github.com/openmultiplayer/open.mp/releases)下载最新版本。请确保选择 **win-x86** 版本。

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## 安装

下载完成后，使用 7zip 或 WinRAR 等工具解压文件。解压后会得到一个 **Server** 文件夹，里面包含了所有必需的服务器文件。

启动服务器，只需运行 **omp-server.exe**，服务器就会开始启动。不过，我们建议先进行端口转发和服务器配置。

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### 端口转发设置

为了让你的服务器对外开放访问，你需要为独立服务器使用的端口设置端口转发规则。你可以通过 PowerShell 命令快速完成，或者通过 Windows Defender 防火墙界面手动设置。

:::tip
首次启动服务器时会弹出 UAC 提示，接受后防火墙规则会自动配置，你就可以跳过下面步骤直接进行下一部分。如果没有弹出提示，请按照以下方法操作。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="通过 PowerShell" default>

打开 Windows 搜索框，搜索 **PowerShell**，右键选择 **以管理员身份运行**，确保权限充足，设置才能生效。

:::info
务必以管理员身份运行 PowerShell，否则设置可能无法正确应用。
:::

复制并粘贴以下命令到 PowerShell 窗口：
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 open.mp 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="通过 Windows Defender">

使用 Windows 搜索打开 **高级安全 Windows 防火墙设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入详细界面。

![image](https://screensaver01.zap-hosting.com/index.php/s/sgWAQFkFnRyiZNE/preview)

你需要为 open.mp 服务器创建新的入站和出站规则，具体如下：
- TCP 入站和出站端口：7777
- UDP 入站和出站端口：7777

如果需要更多帮助，请参考我们的[端口转发（防火墙）](vserver-windows-port.md)指南。

</TabItem>
</Tabs>

添加完规则后，你的服务器就能被访问了，可以通过服务器 IP 地址连接。

建议先通过下面的配置部分调整服务器设置，再正式连接服务器。

## 配置

到这里，你已经完成了 open.mp 服务器的基础安装。你可以通过配置文件进行更多自定义设置。

回到根目录，找到并打开 **config.json** 配置文件。这里可以调整各种服务器参数，比如端口、密码等等。

举个例子，以下是几个配置项：
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

查看我们的[服务器配置](openmp-configuration.md)页面，了解所有可用选项及其作用。

## 启动并连接服务器

现在可以启动服务器了。进入根目录，运行 **omp-server.exe**，服务器控制台会在命令提示符中打开并开始启动。

启动后，你可以通过 open.mp 启动器直接连接服务器。如果想让服务器信息显示在服务器列表中，请确保在配置文件中将 `enable_query` 参数设置为 true（默认即是）。保存后重新运行服务器即可。

## 总结

恭喜你，成功在独立服务器上安装并配置了 open.mp 服务器！如果有任何问题或疑问，随时联系我们的客服团队，我们每天都在线帮你解决！