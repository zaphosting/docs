---
id: 7d2d-becomeadmin
title: "7 Days to Die：如何成为7 Days to Die的管理员"
description: "了解如何分配和管理管理员权限，实现服务器的全面控制和自定义管理员角色 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松且全面地管理服务器。作为管理员，你可以直接在游戏中使用游戏提供的所有可用选项和功能。下面将详细介绍为你的服务器分配管理员权限所需的所有步骤。  
<InlineVoucher />

## 配置
添加管理员是通过 **serveradmin.xml** 配置文件完成的，你可以在网页面板的配置（Configs）中找到它。

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

你可以通过访问你的Steam个人资料并在页面任意位置右键点击来找到你的SteamID64。然后点击 **复制Steam链接**。

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)

接着打开以下任意网站，将你的个人资料链接粘贴进去：

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

这些网站会提供你的账户的基本信息以及Steam ID。这里我们只需要SteamID64。SteamID64需要写在 ``<admins>...</admins>`` 标签内，格式如下：

```
 <users>
    <user steamID="76561198021925107" name="提示该用户是谁" permission_level="0" />
  </users>
```

:::danger  管理员记录无法识别？ 
确保删除注释符号 `<!--` 和 `-->`，使该行生效。否则该行仍然是注释，不会被应用。只需删除行首和行尾的注释符号即可激活该行。
:::

游戏支持为管理员权限定义不同的权限等级，也就是说可以创建不同权限的管理员组。权限等级由 ``permission_level`` 选项定义，范围是0到1000。根据配置，管理员将拥有对应的权限。完成后，管理员权限即成功分配。 

## 权限

所有管理员命令的权限都可以在 ``permissions`` 标签下定义。这里同样需要调整 ``permission_level``，和添加管理员时一样。示例如下：

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

权限等级是0到1000之间的数值，决定玩家拥有哪些权限。1000是最低权限（无权限），0是最高权限（完全管理员权限）。根据需要调整权限等级即可。

## 总结

恭喜你，管理员权限配置成功！如有任何疑问或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />