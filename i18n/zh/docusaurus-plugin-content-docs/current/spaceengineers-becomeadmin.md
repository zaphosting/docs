---
id: spaceengineers-becomeadmin
title: "Space Engineers：成为服务器管理员"
description: "了解如何分配管理员权限，实现对服务器的全面控制和无缝的游戏内管理 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松且全面地管理服务器。作为管理员，你可以直接在游戏内使用游戏提供的所有选项和功能。下面将详细介绍如何为你的服务器分配管理员权限的所有步骤。  
<InlineVoucher />

要在游戏内良好管理自己的游戏服务器，拥有管理员权限非常重要。

### 通过网站获取 SteamID64

首先，在 Steam 中打开目标个人资料，然后在页面任意位置右键点击。  
接着复制该个人资料的 Steam URL。

![](https://screensaver01.zap-hosting.com/index.php/s/pNMMAqQDRPSoo38/preview)

完成后，你可以将该 URL 粘贴到以下网站：

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/dBezeZQEoP3KYq5/preview)

### 将 SteamID 写入配置文件

接下来，登录你的管理面板并进入服务器管理界面。  
点击 **Configs** 标签页。

![](https://screensaver01.zap-hosting.com/index.php/s/NQffqKfjszY23HK/preview)

然后打开 **SpaceEngineers-Dedicated.cfg** 文件。

![](https://screensaver01.zap-hosting.com/index.php/s/yx2efZLYmW32BZH/preview)

打开后，按下 **Ctrl + F** 搜索 *admin*。

![](https://screensaver01.zap-hosting.com/index.php/s/eBgLRwe5Y3itnyt/preview)

现在写入以下内容：
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
最终应该像这样：

![](https://screensaver01.zap-hosting.com/index.php/s/r7tj3EF6trSiz5x/preview)

最后，**保存**配置文件，就完成啦！

## 总结

恭喜你，管理员权限配置成功！如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />