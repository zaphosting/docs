---
id: fivem-txadmin-setup
title: "FiveM：txAdmin 设置"
description: "了解如何使用 txAdmin 免费且功能齐全的网页面板轻松管理和监控你的 FiveM 服务器 → 立即了解更多"
sidebar_label: txAdmin 设置
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

txAdmin 是一个完全免费的、功能齐全的网页面板，用于管理和监控你的 FiveM 服务器。它提供了丰富的功能，旨在让管理 FiveM 服务器变得超级简单。设置 txAdmin 完全免费，马上开始使用这个既简洁又实用的 FiveM 服务器网页面板吧。

<YouTube videoId="n3RoiExrvN0" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/AeKiyc9Jtat5ygE/preview" title="设置 txAdmin 服务器" description="喜欢边看边学更容易理解？我们懂你！快来看看我们的视频，帮你一步步搞懂。无论你是赶时间还是喜欢用最有趣的方式吸收信息，这里都有你想要的！"/>

<InlineVoucher />

## 访问

你可以在游戏服务器控制面板的 txAdmin 区域找到访问链接和登录信息。这些信息能帮你轻松进入 txAdmin 界面，开始配置。

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

复制用户名和密码信息，点击链接（IP 地址:端口）进入 txAdmin 界面并登录。txAdmin 界面会在新窗口打开，使用提供的登录信息登录即可。

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## 设置

成功登录后，你就可以开始配置 txAdmin 和服务器了。你现在应该能看到 txAdmin 首页（仪表盘）。左上角会有提示，告诉你服务器还需要配置。点击 **前往设置页面** 开始配置流程。

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### 欢迎及服务器名称

接下来，定义一个你想用作项目名称的服务器名。这个名字不会显示在服务器列表里，只会在 txAdmin 界面和聊天/Discord 消息中使用。

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### 部署类型

在部署类型里，你需要选择想要如何设置服务器。你有以下选项：**热门模板**、已有服务器数据、**远程 URL 模板** 和 **自定义模板**。下面会详细介绍每个选项，帮你选出最适合你的。

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### 热门模板

热门模板是预先制作好的包，能立即使用，是最快速启动 FiveM 服务器的方式。如果这是你的第一个服务器，强烈推荐选这个。模板包含所有必要配置和资源，帮你快速搭建功能齐全的服务器，让你能专注于自定义和游戏体验，而不是初期设置。直接选一个适合你的模板就行。

![](https://screensaver01.zap-hosting.com/index.php/s/PSsf22NeebNBRw7/preview)



### 已有服务器数据

如果你之前用 txAdmin 运营过服务器，现在想用我们平台托管，选这个。你只需通过 FTP 上传服务器数据，并在设置时指定路径。如果你还不熟悉 FTP，建议看看我们的[FTP 访问指南](gameserver-ftpaccess.md)。这份指南会帮你顺利传输服务器文件，让你快速在我们平台上启动服务器。

![img](https://screensaver01.zap-hosting.com/index.php/s/KS4raRtHWmmw5iN/preview)





### 远程 URL 模板

如果你想用一个 txAdmin 内置没有的模板，这个功能允许你通过远程 URL 指定自定义配方。服务器会自动下载并执行这个配方。这个选项特别适合部署自定义服务器配置或特定设置，txAdmin 默认选项里没有的。只要提供 URL，txAdmin 会自动帮你下载并应用模板，确保服务器按你需求配置。

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### 自定义模板

这个选项适合已经有自己配方并想重新加载的用户。它让你快速轻松地应用自定义配置，无需从头开始设置。只需选择已有配方，txAdmin 会帮你搞定剩下的，确保服务器配置完全符合你的预期。

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### 配方部署器

选定部署类型并完成相应步骤后，点击 **前往配方部署器**。接下来完成最后几个步骤：**审查配方**、**输入参数**、**运行配方** 和 **配置 server.cfg**。

第一步，你可以进一步自定义选中的配方。如果不需要调整，直接进入第二步。在这里，你可以输入自己的 [专属授权密钥](fivem-licensekey.md) 并检查数据库信息。确认无误后，点击 **运行配方**。这可能需要一点时间。最后，你可以根据需要调整服务器配置文件（`server.cfg`）。

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

最后，点击 **保存并启动服务器**。这样 txAdmin 设置就完成了，你可以连接服务器啦。


## 额外支持

如果需要 txAdmin 相关支持，请通过他们的[官网](https://txadm.in/)联系 txAdmin 团队，或者加入他们的[Discord 社区](https://discord.gg/txAdmin/)。社区和支持团队随时准备帮你解决使用 txAdmin 时遇到的任何问题，确保你能顺畅管理服务器。

<InlineVoucher />