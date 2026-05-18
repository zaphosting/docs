---
id: mta-becomeadmin
title: "Multi Theft Auto：如何成为 MTA 服务器管理员"
description: "了解如何赋予管理员权限，实现对服务器的全面控制和高效游戏管理 → 立即了解"
sidebar_label: 成为管理员
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
赋予管理员权限让你可以轻松全面地管理服务器。作为管理员，你可以直接在游戏内使用游戏提供的所有功能和选项。下面将详细介绍如何为你的服务器分配管理员权限的所有步骤。  
<InlineVoucher />

### 准备工作

首先需要创建一个用户账号，后续会赋予该账号管理员权限。你需要在 Live 控制台执行以下命令：

```
addaccount [options] <PASSWORD>
```

Live 控制台位于游戏服务器面板的界面中，服务器运行时可以打开。界面大致长这样：

![](https://screensaver01.zap-hosting.com/index.php/s/KHcBA5p5ZC4pJ4R/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/tKLHyoSandPpfx2/preview)




### 配置

账号创建完成后，需要将该账号添加到 **acl.xml** 配置中的管理员组。为此，我们通过 FTP 连接服务器并打开该文件。文件路径为 **gXXXX/gtamta/mods/deathmatch/**。如果你还不清楚什么是 FTP 客户端以及如何使用，可以参考这篇指南：[FTP 文件访问](gameserver-ftpaccess.md)

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
</group>
```

你需要添加一个用户对象，将该用户分配到管理员组：

```
<object name="user.BENUTZERNAME"></object>
```

这里的用户名替换成你自己的用户名。最终效果应该是这样：

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
    <object name="user.Benutzername"></object>
</group>
```



### 以管理员身份登录

完成 **acl.xml** 配置后，启动游戏/服务器并连接你的服务器。然后你可以用以下命令登录：

```
login USERNAME PASSWORD
```

## 总结

恭喜你，管理员权限配置成功！如果有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂


<InlineVoucher />