---
id: redm-txadmin-setup
title: "RedM：txAdmin 设置指南"
description: "了解如何通过 txAdmin 的全功能网页面板高效管理和监控你的 RedM 服务器 → 立即了解更多"
sidebar_label: txAdmin 设置
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

txAdmin 是一个完全免费的全功能网页面板，用于管理和监控你的 RedM 服务器。它提供了丰富的功能，旨在让管理 RedM 服务器变得轻松简单。设置 txAdmin 完全免费，马上开始使用这个既简洁又实用的 RedM 服务器网页面板吧。

<InlineVoucher />

## 访问

你可以在游戏服务器控制面板的 txAdmin 区域找到访问链接和登录信息。这些信息能帮你轻松进入 txAdmin 界面并开始设置。

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

复制用户名和密码信息，点击链接（IP 地址:端口）进入 txAdmin 界面并登录。txAdmin 界面会在新窗口打开，使用提供的登录信息登录即可。

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## 设置

成功登录后，你就可以开始配置 txAdmin 和你的服务器了。你现在应该能看到 txAdmin 首页（仪表盘）。左上角会有一条提示，告诉你服务器还需要配置。点击 **前往设置页面** 开始设置流程。

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### 欢迎及服务器名称

接下来，定义一个你想用作项目名称的服务器名。这个名字不会显示在服务器列表中，只会在 txAdmin 界面和聊天/Discord 消息中使用。

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### 部署类型

在部署类型中，你需要选择想要如何搭建服务器。你有以下选项：**热门模板**、已有服务器数据、**远程 URL 模板** 和 **自定义模板**。下面会详细介绍每个选项，帮你选择最适合你的方案。

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### 热门模板

热门模板是预先制作好的包，可以立即使用，是最快速启动 RedM 服务器的方式。如果这是你的第一个服务器，强烈推荐选择这个。模板包含了所有必要的配置和资源，帮你快速搭建功能齐全的服务器，让你能专注于自定义和游戏体验，而不是初期设置。只需选择一个符合你需求的模板即可。

![](https://screensaver01.zap-hosting.com/index.php/s/rrw962gMMpn86fW/preview)



### 已有服务器数据

如果你之前已经用 txAdmin 运营过服务器，现在想在我们这里托管，可以选择这个选项。你只需通过 FTP 上传服务器数据，并在设置过程中指定路径。如果你还不熟悉 FTP 的使用，建议先看看我们的[FTP 访问指南](gameserver-ftpaccess.md)。这份指南会帮你顺利传输服务器文件，让你快速在我们平台上启动服务器。

![img](https://screensaver01.zap-hosting.com/index.php/s/jCZ4DffkkAHA6dj/preview)





### 远程 URL 模板

如果你想使用 txAdmin 内未包含的模板，可以通过这个功能指定一个远程 URL 的自定义配方。txAdmin 会从该 URL 下载并在服务器上执行这个配方。这个选项特别适合部署自定义服务器配置或特定设置，满足你精准的需求。

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### 自定义模板

这个选项适合已经有自己配方并想重新加载的用户。它让你快速轻松地应用自定义配置，无需从头开始设置。只需选择已有配方，txAdmin 会帮你完成剩下的步骤，确保服务器按你预期配置。

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### 配方部署器

选定部署类型并完成相应步骤后，点击 **前往配方部署器**。接下来完成最后几个步骤：**审查配方**、**输入参数**、**运行配方** 和 **配置 server.cfg**。

第一步，你可以进一步自定义所选或添加的配方。如果不需要调整，直接进入第二步。在这里，你可以输入自己的[专属授权密钥](redm-licensekey.md)并检查数据库信息。确认无误后，点击 **运行配方**。这个过程可能需要一点时间。最后，你可以根据需要调整服务器配置文件（`server.cfg`）。

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

最后，点击 **保存并启动服务器**。至此，txAdmin 设置完成，你可以连接到你的服务器啦。


## 额外支持

如果需要 txAdmin 相关支持，请通过他们的[官网](https://txadm.in/)联系 txAdmin 团队，或者加入他们的[Discord 社区](https://discord.gg/txAdmin/)。社区和支持团队随时准备帮你解决使用 txAdmin 时遇到的任何问题，确保你拥有最佳的服务器管理体验。

<InlineVoucher />