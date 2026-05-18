---
id: vserver-windows-arksurvivalascended
title: "VPS：ARK Survival Ascended 专用服务器 Windows 安装指南"
description: "了解如何在 Windows VPS 上搭建 ARK: Survival Ascended 专用服务器，实现流畅游戏体验和服务器管理 → 立即了解"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Windows VPS，想在上面安装 ARK: Survival Ascended 专用服务器吗？来对地方了！本指南将一步步教你如何在服务器上安装这项服务。
<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Sa76nDiSmQKx7x2/preview" title="ARK: Survival Ascended 专用服务器 Windows VPS 安装" description="喜欢边看边学？我们懂你！快来看看我们的视频，帮你轻松搞定安装。不管你是赶时间还是喜欢最直观的学习方式，这里都有你想要的！"/>
<InlineVoucher />

## 准备工作

首先，通过远程桌面（RDP）连接到你的 VPS。如果你需要帮助，可以参考我们的[初始访问（RDP）指南](vserver-windows-userdp.md)。

连接服务器后，你需要安装 **SteamCMD**，以便下载所需的专用服务器文件。SteamCMD 是 Steam 客户端的**命令行版本（CLI）**，能帮你轻松下载各种 Steam 工作坊和专用服务器文件。你可以从 [Valve 官方网站下载 SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD)，或者直接点击[这里](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。

在服务器上新建一个文件夹，这里我们命名为 `steamcmd`。然后进入你的下载文件夹，找到刚才下载的 **steamcmd.zip**，把它放进 `steamcmd` 文件夹。接着右键用 Windows 自带的解压功能，或者用 7zip、WinRAR 等软件解压。解压后你会看到一个 **steamcmd.exe** 文件。

双击运行 **steamcmd.exe**，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/Y4tAsGDxZtBKtG4/preview)

当看到 **Loading Steam API.... OK** 字样时，说明安装成功，可以开始下一步安装 ARK: Survival Ascended 专用服务器了。

## 安装

安装完成后，你应该还能看到之前运行的 **steamcmd.exe** 命令行窗口。先登录，输入命令：`login anonymous`，用匿名账号登录。

登录成功后，就可以开始下载服务器文件了。

:::tip
可选：你可以用命令 `force_install_dir [路径]` 设置你想安装服务器的目录，把 `[路径]` 替换成你想用的路径。例如：
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

接着运行命令 `app_update 2430930`，开始下载。App ID **2430930** 就是 **ARK: Survival Ascended 专用服务器** 的应用编号。

![](https://screensaver01.zap-hosting.com/index.php/s/DSMpETJYtkciNHT/preview)

:::info
请勿中断下载过程，耐心等待完成！虽然需要点时间，但绝对值得 :)
:::

### 创建启动文件

下载完成后，进入你安装目录下的子目录：
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

在这里，你需要创建一个启动文件来启动专用服务器。新建一个文件，命名为 `start-ark.bat`。你可以先新建一个文本文件，然后改名为 `.bat` 后缀。

:::info
确保你在文件资源管理器中开启了“显示文件扩展名”，这样才能正确修改文件后缀。
:::

用文本编辑器（比如 Notepad++）打开这个文件，输入以下内容：
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]Port=7777?QueryPort=27015?MaxPlayers=[max_players]?ServerAdminPassword=[admin_password]? -NoBattlEye
exit
```

把 `[server_name]`、`[admin_password]` 和 `[max_players]` 替换成你想要的服务器名称、管理员密码和最大玩家数。

如果你想设置普通玩家加入密码，可以在命令里加上 `?ServerPassword=[join_password]`，变成这样：
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players]?ServerAdminPassword=[admin_password] -NoBattlEye
exit
```

确认变量都设置好，保存文件后关闭。

启动文件运行后，服务器会在本地通过 `127.0.0.1:7777` 可访问。但如果想让外网玩家也能连，还得设置 Windows 防火墙端口转发，下一节教你怎么做。

### 端口转发设置

为了让你的服务器对外开放，需要给专用服务器用到的端口设置防火墙规则。你可以用 Powershell 命令快速设置，也可以通过 Windows Defender 防火墙界面手动添加。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="用 Powershell" default>

打开 Windows 搜索，输入 **Powershell**，右键选择 **以管理员身份运行**，确保权限充足。

:::info
一定要用管理员权限运行 Powershell，否则设置可能不会生效。
:::

复制粘贴以下命令到 Powershell：
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

这些命令会自动创建必要的防火墙规则，确保你的 ARK: Survival Ascended 服务器能被外网访问。

:::info
如果遇到连接问题或服务器启动卡在初始化（tick 循环），建议把 ARK Survival Ascended 应用添加到防火墙例外中。
:::

</TabItem>

<TabItem value="windefender" label="用 Windows Defender">

用 Windows 搜索打开 **Windows 防火墙高级安全设置**。如果打开的是基础防火墙页面，点击右侧的 **高级设置** 进入。

![](https://screensaver01.zap-hosting.com/index.php/s/XbKfCHYXZ9sNL8g/preview)

你需要为 ARK: Survival Ascended 服务器创建新的入站和出站规则，端口和协议如下：
- TCP 入站和出站：27020
- UDP 入站和出站：27015
- UDP 入站和出站：7777-7778

如果需要帮助，可以参考我们的[端口转发（防火墙）指南](vserver-windows-port.md)。

:::info
遇到连接或启动问题时，建议将 ARK Survival Ascended 应用添加到防火墙例外。
:::

</TabItem>
</Tabs>

添加完规则后，你的服务器就能通过公网 IP 访问了。游戏内打开控制台，输入 `open [你的IP]:7777` 即可连接。

建议先通过下面的配置章节调整服务器设置，再正式上线。

## 配置

到这里，你已经完成了 ARK: Survival Ascended 专用服务器的搭建。你可以通过服务器目录下的两个配置文件进一步调整服务器参数。

进入以下目录：
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

你会找到 **DefaultGameUserSettings.ini** 和 **GameUserSettings.ini** 两个配置文件，里面可以修改各种服务器设置和选项。

:::warning[CROSSPLAY 支持]
自 2023 年 11 月 18 日起，服务器管理员需要手动安装证书撤销列表（CRL），可从 `https://dev.epicgames.com/`（或直接从 `http://crl.r2m02.amazontrust.com/r2m02.crl`）下载。下载后，右键点击 r2m02.crl 文件，选择“将所有证书放入以下存储”，选择“受信任的根证书颁发机构”，完成安装。可能需要重启系统。

如果你在 2023 年 11 月 18 日之前安装过 r2m02.cer 证书，但服务器无法显示，需要将该证书从系统中删除。按 Win+R，输入 certmgr.msc，找到“受信任的根证书颁发机构”中的 Amazon RSA 2048 M02 证书并删除。还需用 certlm.msc 做同样操作。最后重启系统。
:::

## 启动并连接服务器

现在可以启动服务器了。但要确保服务器能正常启动，你需要先在 Windows VPS 上安装 [Microsoft Visual C++ 2015 可再发行组件](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022)。

:::info
如果你的 VPS 还没安装 [Microsoft Visual C++ 2015 可再发行组件](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022)，请先安装，否则服务器可能启动失败。
:::

安装完成后，运行之前创建的 **start-ark.bat** 文件。

这会打开一个命令行窗口，启动服务器。如果一切顺利，服务器会出现在服务器列表里。你也可以直接在游戏内控制台输入 `open [你的IP]:7777` 连接。

## 总结

恭喜你，成功在 VPS 上安装并配置了 ARK Survival Ascended 专用服务器！如果有任何问题，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />