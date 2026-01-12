---
id: vserver-windows-openmp
title: "VPS：Open.mp 专用服务器 Windows 安装指南"
description: "教你如何在 Windows VPS 上安装并配置 open.mp 专用服务器，实现无缝多人游戏体验 → 立即了解"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows VPS，想在上面安装 open.mp 专用服务器吗？那你来对地方了！本指南将一步步教你如何在服务器上安装这项服务。

<InlineVoucher />

## 准备工作

首先，通过远程桌面（RDP）连接到你的 VPS。如果你需要帮助，可以参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

连接到服务器后，前往 [open.mp GitHub 仓库](https://github.com/openmultiplayer/open.mp/releases)下载最新版本。记得选择 **win-x86** 版本哦。

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## 安装步骤

下载完成后，使用 7zip 或 WinRAR 解压文件。解压后会得到一个 **Server** 文件夹，里面包含了所有必需的服务器文件。

启动服务器只需运行 **omp-server.exe**，服务器就会开始启动。不过，我们建议先做好端口转发和服务器配置。

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### 端口转发设置

为了让你的服务器对外开放，你需要为专用服务器使用的端口设置端口转发规则。你可以通过 PowerShell 命令快速完成，或者通过 Windows Defender 防火墙界面手动设置。

:::tip
首次启动服务器时会弹出 UAC 提示，接受后系统会自动帮你设置防火墙规则，这样你就可以直接跳到下一步了。如果没弹出或拒绝了，请按照下面的方法操作。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="通过 PowerShell" default>

打开 Windows 搜索，输入 **PowerShell**，右键选择 **以管理员身份运行**，确保权限充足，设置才能生效。

:::info
一定要以管理员身份运行 PowerShell，否则设置可能不会生效。
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

在 Windows 搜索中打开 **高级安全 Windows 防火墙设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入。

![image](https://screensaver01.zap-hosting.com/index.php/s/W2nGj9tGdXCxdH2/preview)

你需要为 open.mp 服务器创建新的入站和出站规则，端口和协议如下：
- TCP 入站和出站：7777
- UDP 入站和出站：7777

如果需要更详细的操作指导，请参考我们的[端口转发（防火墙）](vserver-windows-port.md)教程。

</TabItem>
</Tabs>

添加完规则后，你的服务器就能被访问了，可以通过服务器 IP 连接。

建议先通过下面的配置步骤调整服务器设置，再开始使用。

## 配置服务器

到这里，你已经完成了 open.mp 服务器的基础安装。接下来可以通过配置文件进一步调整服务器参数。

回到根目录，找到并打开 **config.json** 文件。这里可以设置各种服务器参数，比如端口、密码等。

举个例子，配置文件里可能包含：
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

想了解所有配置选项及其作用，快去看看我们的[服务器配置](openmp-configuration.md)指南。

## 启动并连接服务器

现在，启动服务器吧！进入根目录，运行 **omp-server.exe**，服务器控制台会在命令行窗口打开并开始启动。

启动后，你可以通过 open.mp 启动器直接连接服务器。如果想让服务器信息显示在服务器列表里，记得在配置文件中把 `enable_query` 参数设为 true（默认就是）。保存后重新启动服务器即可。

## 总结

恭喜你，成功在 VPS 上安装并配置了 open.mp 服务器！如果有任何问题，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />