---
id: barotrauma-becomeadmin
title: "Barotrauma：如何成为自己服务器的管理员"
description: "了解如何分配管理员权限，实现对服务器的全面控制和无缝的游戏内管理 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-barotrauma
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松且全面地管理服务器。作为管理员，你可以直接在游戏内使用游戏提供的所有可用选项和功能。下面将详细介绍为你的服务器分配管理员权限所需的所有步骤。  
<InlineVoucher />

## 配置
添加管理员是通过 **Clientpermissions.xml** 配置文件完成的，你可以在面板的配置（Configs）中找到它。

![](https://screensaver01.zap-hosting.com/index.php/s/oJNTozXz9YW8sjG/preview)


要添加新玩家，必须在配置文件中新增一个客户端条目。语法如下：

```xml
<Client
    name="<玩家名称>"
    steamid="<steamid>"
    permissions="<权限>">
    <command
      name="<命令名称>" />
  </Client>
```



客户端条目包含变量 **Name、SteamID、Permissions 和 Command**，需要根据实际情况修改。名称可以随意设置，只是作为一个方便查看的标识。接着需要填写你的 Steam 账号的 SteamID64。

你可以通过访问你的 Steam 个人资料，然后在页面任意位置右键点击，复制个人资料的 Steam URL。



![](https://screensaver01.zap-hosting.com/index.php/s/C3nfdjemxkjZH5n/preview)



然后，将该 URL 粘贴到以下任意网站：

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/asnbFc4JDifdSHn/preview)



这些网站会显示你的账户信息和 Steam ID。这里需要的是 **Steam ID 64**。将这个 Steam ID 填入客户端条目中的 **SteamID** 字段。示例如下：

```xml
<Client
    name="Name"
    steamid="123456789"
    permissions="<权限>">
    <command
      name="<命令名称>" />
  </Client>
```



此时你已经是管理员了，但还没有具体权限。你可以通过添加权限和命令来赋予具体的管理能力，比如这样：

```xml
...
    permissions="<权限>"> ---> permissions="ServerLog, ConsoleCommands">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Name"
    steamid="123456789"
    permissions="ServerLog, ConsoleCommands">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```



在这个例子中，管理员被赋予了访问服务器日志、控制台、治疗和生成命令的权限。下面是你可以设置的权限一览。



## 权限说明

| 权限              | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| ManageRound       | 可以开始/结束回合。                                           |
| Kick              | 可以踢出其他玩家。                                            |
| Ban               | 可以封禁其他玩家。                                            |
| Unban             | 可以解除其他玩家的封禁。                                      |
| SelectSub         | 可以选择潜艇。                                                |
| SelectMode        | 可以选择游戏模式。                                            |
| ManageCampaign    | 可以选择目的地、任务，并从战役商店购买补给。                 |
| ConsoleCommands   | 可以使用控制台命令——注意你还需要为具体的控制台命令单独授权。 |
| ServerLog         | 可以查看服务器日志。                                          |
| ManageSettings    | 可以更改服务器设置。                                          |
| ManagePermissions | 可以更改其他客户端的权限。                                    |
| KarmaImmunity     | 免疫 Karma 系统的负面影响，不会失去 Karma 值。               |
| All               | 授予所有权限。                                               |



## 总结

恭喜你，管理员权限配置成功！如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />