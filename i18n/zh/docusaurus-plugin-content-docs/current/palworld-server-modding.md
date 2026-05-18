---
id: palworld-server-modding
title: "Palworld：为 Palworld 安装 Mod"
description: "了解如何安全有效地为 Palworld 服务器和客户端安装 Mod，提升你的游戏体验 → 立即了解更多"
sidebar_label: 安装 Mod
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

自 Palworld 发布以来，越来越多令人兴奋的 Mod 出现在网上，帮助提升游戏体验，让游戏变得更加有趣。在本指南中，我们将探索如何为你的 Palworld 服务器和/或游戏客户端添加游戏修改（Mod）。

<YouTube videoId="x4tfL3Vi5qE" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5LynAssgfXj6qgr/preview" title="如何在你的 Palworld 服务器上安装 Mod！" description="觉得看视频更容易理解？我们懂你！快来看看我们的视频，帮你一步步搞定。不管你是赶时间还是喜欢用最有趣的方式吸收信息，这里都有你想要的！"/>

<InlineVoucher />

### 关键信息

目前，你可以通过第三方 Mod 网站浏览和下载可用的 Mod。我们推荐使用像 [Nexus Mods](https://www.nexusmods.com/palworld/) 或 [Curseforge](https://www.curseforge.com/palworld/) 这样在 Mod 社区中口碑良好的网站。目前无法通过 Steam 创意工坊下载 Mod。

:::note
ZAP-Hosting 对因安装 Mod 导致的服务器文件或世界存档的任何潜在修改/损坏不承担责任。强烈建议你在继续操作前做好备份。想了解更多备份相关内容，请查看我们专门的 [管理存档](palworld-server-savegames.md) 指南，里面有详细说明。
:::

:::info
我们目前仅支持 PAK 格式的 Mod（.PAK 文件）。出于安全考虑，不支持需要可执行文件的 Mod。
:::



### 服务器端与客户端 Mod

选择 Mod 时，首先要确认它是服务器端还是客户端 Mod。最简单的方式是查看 Mod 网站上的描述，或者直接联系 Mod 作者。

服务器端脚本可以直接安装在服务器上，玩家无需任何操作。而客户端 Mod 则要求想要连接服务器的玩家必须在本地游戏文件中自行下载并安装该 Mod。

:::info
请务必确认你想使用的 Mod 与当前 Palworld 游戏版本兼容。
:::



## 第一步：准备 PAK 文件

访问前面介绍中推荐的 Mod 网站，你可以浏览并下载各种不同的 Mod。

:::info
提醒：出于安全考虑，我们目前仅支持 PAK 格式的 Mod（.PAK 文件）。
:::

找到你想用的 Mod，下载到本地设备。如有需要，使用类似 [7zip](https://www.7-zip.org/) 的工具解压，提取出 **.pak** 文件。

![](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)



## 第二步：通过 FTP 上传

准备好 PAK 文件后，登录你的游戏服务器网页后台，进入 **工具->FTP 浏览器**。

你需要一个 FTP 客户端来连接服务器。如果你还没设置 FTP 客户端或需要连接帮助，请参考我们的专门指南 [通过 FTP 访问](gameserver-ftpaccess.md)。

在网页后台，你可以点击 **直接连接** 按钮，这会自动打开你选择的 FTP 程序并登录。

或者，你也可以手动使用 FTP 浏览器页面提供的账号信息，在 FTP 客户端中输入并连接。

![](https://screensaver01.zap-hosting.com/index.php/s/nWYPNMRbnrDbDLF/preview)

接下来，将之前准备好的 Mod PAK 文件上传到以下目录：
```
../g[your_zapid]/palworld-windows/Pal/Content/Paks/ # Windows 版本
../g[your_zapid]/palworld-linux/Pal/Content/Paks/ # Linux 版本
```

![](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)

服务器端就搞定啦！接下来是客户端部分。



## 第三步：客户端安装 Mod

服务器端 Mod 安装完成后，想要加入服务器的玩家也必须在客户端重复这个过程。目前没有自动同步 Mod 的功能，玩家需要手动下载并安装。

打开 Steam，右键点击 Palworld，选择管理，然后浏览本地文件。

![](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)

会打开一个包含你本地 Palworld 游戏安装文件的文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)

进入以下目录：
```
../Palworld/Pal/Content/Paks/
```

将 Mod 的 **.pak** 文件复制到这个文件夹里。每个 Mod 都要重复此操作。

![](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)



## 第四步：启动 Palworld 并连接服务器

现在你可以连接你的 Palworld 服务器，享受一堆新 Mod 带来的乐趣了。如果你需要连接服务器的帮助，可以查看我们的专门指南 [连接服务器](palworld-connect.md)。

进入游戏后，你应该能看到 Mod 带来的变化。

比如，我们测试服务器上用了 Minecraft 方块 Mod：

![](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)

恭喜你，成功为 Palworld 服务器安装了 Mod。如果遇到问题，下面的调试部分可能帮到你。



## 调试

本节提供一些常见问题原因和排查步骤，帮你缩小问题范围。请注意，Mod 仍处于早期阶段，且非官方支持，因此出现 Bug 是正常的。

#### 确认 Mod 版本兼容

确保你安装的 Mod 与当前 Palworld 游戏版本兼容。不兼容可能导致错误或部分功能失效。若 Mod 过时，建议联系作者请求更新。

#### 重启服务器

每次修改后务必重启服务器。如果看不到 Mod 效果，也请重启。遇到错误或 Bug，建议联系 Mod 作者寻求帮助。

#### 查看日志错误

第一步排查建议查看游戏服务器网页后台的 **信息->日志文件**。日志中包含服务器运行信息、事件提示和错误消息。

错误信息尤其有助于定位和理解问题原因。针对日志进行分析，往往能发现并解决问题。

:::info
需要更多帮助？没问题，欢迎加入我们的 [Discord 社区](https://discord.com/invite/zaphosting) 或在我们的 [r/zaphosting Subreddit](https://www.reddit.com/r/zaphosting/) 发帖，社区和我们都会帮你解答。

需要官方支持？请在我们网站提交 [工单](https://zap-hosting.com/en/customer/support/)，提供尽可能详细的信息，我们会尽快回复你！:)
:::


<InlineVoucher />