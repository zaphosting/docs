---
id: minecraft-add-own-world
title: "Minecraft：将你自己的世界添加到服务器"
description: "了解如何上传并配置自定义 Minecraft 世界，让你的服务器游戏体验更个性化 → 立即了解更多"
sidebar_label: 添加你自己的世界
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

想在你的服务器上使用自己创建的世界，或者从网上下载的世界？那你来对地方了！你只需要你的世界文件和一个 FTP 客户端。如果你不知道什么是 FTP 客户端或者怎么用，可以看看这篇指南：[通过 FTP 访问](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/Rmx6c6n2rP5MqBz/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/SbB6iZmdZtMAPaS/preview" title="如何在你的 Minecraft 服务器上传自定义地图" description="觉得看视频更容易理解？我们懂你！快来看看我们的视频，帮你一步步搞定。不管你是赶时间还是喜欢用最酷的方式学习，这里都有你想要的！"/>

通过 FTP 连接到服务器后，就可以开始设置你自己的世界了。首先你得进入当前世界所在的目录，路径是：/gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/85KLwjPYt3yjHZt/preview)

接下来把新世界上传到这个目录。你可以选择删除并替换旧的 **world** 文件夹，或者用不同的名字上传新世界。这里我们示范用新名字上传：

![](https://screensaver01.zap-hosting.com/index.php/s/3DYD5ANgNsCNpkE/preview)

上传完后，还需要在 **server.properties** 配置文件里设置新世界。你可以在 **游戏服务器管理** 的 **配置** 里找到它。把 **level-name=** 的值改成你新上传的世界名字：

![](https://screensaver01.zap-hosting.com/index.php/s/idoHWafC3g4AbYL/preview)

重启服务器后，新世界就生效啦。祝你玩得开心！🙂

<InlineVoucher />

<InlineVoucher />