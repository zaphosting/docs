---
id: hytale-advanced-permissions-luckperms
title: "Hytale：使用 LuckPerms 实现高级权限管理"
description: "了解如何安装和配置 LuckPerms 来管理 Hytale 服务器上的高级权限和等级 → 立即了解更多"
sidebar_label: 高级权限
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

当你开始管理工作人员角色、自定义等级或特殊玩家特权时，Hytale 服务器上的权限管理变得尤为重要。虽然游戏内置的默认权限系统适合基础管理，但当你需要对命令和功能进行细粒度控制时，它很快就会显得力不从心。

**LuckPerms** 为 Hytale 服务器提供了一个强大且高度可定制的权限系统。它允许你精确地定义不同玩家或组可以访问哪些权限和命令。

<InlineVoucher />



## 安装 LuckPerms

要安装 LuckPerms 插件，首先下载最新的 LuckPerms `.jar` 文件。  
下载完成后，打开你的服务器管理面板并停止服务器，以安全上传插件。

进入服务器的 **文件** 区域，打开 `mods` 文件夹。将 LuckPerms `.jar` 文件上传到该文件夹。关于如何安装插件的详细说明，建议查看我们的 [安装插件](hytale-mods) 指南。

上传完成后，重新启动服务器。启动后，打开服务器控制台，确认 LuckPerms 是否正常运行。如果安装成功，LuckPerms 会在控制台打印启动信息。



## 授予初始权限

安装完成后，LuckPerms 需要配置才能有效使用。要开始管理权限，必须先给自己授予使用 LuckPerms 命令的权限。在控制台或游戏内聊天中运行以下命令：

```
lp user <playername> permission set luckperms.* true
```

这会授予指定玩家对 LuckPerms 命令的全部访问权限。



## 使用 LuckPerms 网页编辑器

LuckPerms 包含一个网页编辑器，提供了一个方便的界面来创建组和管理权限。要生成编辑器会话，输入：

```
lp editor
```

LuckPerms 会在控制台打印一个生成的编辑器链接。打开该链接即可在浏览器中访问网页编辑器。

```
[LP] Preparing a new editor session, please wait...
[LP] Click the link below to open the editor:
https://luckperms.net/editor/XXXXXXXXXX
```

![img](https://screensaver01.zap-hosting.com/index.php/s/5Cx2sGY4axZ6TBo/preview)

在编辑器中，复制显示的 **命令链接**。返回服务器控制台，粘贴该命令链接以建立信任并连接编辑器会话到你的服务器。

```
/lp trusteditor XXXX-XXXX
```

连接成功后，你可以直接在网页界面配置用户、组和权限。修改完成后，点击 **应用** 保存配置。如果 LuckPerms 提供了应用命令，复制并粘贴到服务器控制台以最终确认更改。



## 创建管理员组

在浏览器中打开编辑器链接，导航到 **Groups（组）** 部分。点击加号图标创建新组，设置组名为 `admin`。你还可以选择配置显示名称、权重、父组以及前缀/后缀等详细信息。

![img](https://screensaver01.zap-hosting.com/index.php/s/xEWHSBkxKy5q8qr/preview)

创建组后，选择编辑器中的 `admin` 组并添加权限。要授予该组完整的 Hytale 权限，输入：

```
hytale.*
```

该权限赋予对所有 Hytale 权限的完全访问。添加权限后，将玩家分配到该组。  
在编辑器中打开 **Users（用户）** 部分，选择目标用户，在 **Parent groups（父组）** 下添加 `admin` 组。

最后，点击 **应用** 保存更改。如果有提示，请将应用命令粘贴到服务器控制台。



## 常用 LuckPerms 命令

LuckPerms 可以通过网页编辑器或直接使用命令管理。以下是常用的权限管理命令：

| 命令                                                      | 说明                                                        |
| --------------------------------------------------------- | ----------------------------------------------------------- |
| `/lp user <playername> parent add <group>`                | 将玩家添加到指定组权限中。                                  |
| `/lp user <playername> parent remove <group>`             | 从指定组权限中移除玩家。                                    |
| `/lp user <playername> permission set <permission>`       | 授予玩家指定权限。                                          |
| `lp user <playername> permission settemp <permission> true <duration>` | 授予玩家临时权限，持续时间如 `1h`（1小时）或 `1m`（1分钟）。 |
| `/lp user <playername> permission unset <permission>`     | 移除玩家的指定权限。                                        |
| `/lp group <group> permission set <permission>`           | 授予组指定权限。                                            |
| `/lp group <group> permission unset <permission>`         | 移除组的指定权限。                                          |



## 总结

LuckPerms 是 Hytale 服务器上实现高级权限管理的强大解决方案。通过使用组、权限和网页编辑器，你可以打造一个结构化的角色系统，轻松应对社区的成长。

配置完成后，LuckPerms 让你轻松维护工作人员等级、玩家特权和访问控制，同时保持服务器管理的简洁、一致和高效。

如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />