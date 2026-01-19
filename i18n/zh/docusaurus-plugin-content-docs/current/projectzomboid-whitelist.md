---
id: projectzomboid-whitelist
title: "Project Zomboid：白名单"
description: "关于如何在 ZAP-Hosting 上为你的 Project Zomboid 服务器启用白名单 → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-projectzomboid
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

白名单是一种访问控制模式，要求你必须先明确创建用户账号，才能允许他们加入。在 Project Zomboid 中，通常通过在服务器配置中关闭开放注册，然后通过控制台命令添加用户来实现。

<InlineVoucher />


## 启用白名单

通过 FTP 连接到你的服务器，打开服务器设置文件。该文件通常位于 `Zomboid/Server/` 目录下，文件名与你的服务器名相同，比如 `servertest.ini` 或 `<ServerName>.ini`。找到 `Open` 设置项，将其设置为 false。

```ini
Open=false
```

保存文件并重启服务器。关闭开放注册后，只有你创建的账号才能加入游戏。

## 管理白名单玩家

在 ZAP-Hosting 游戏服务器管理后台打开实时控制台，为允许加入的玩家创建账号。使用 adduser 命令，后面跟用户名和密码。

```text
/adduser "username" "password"
```

如果要移除某个用户的访问权限，可以用专用命令将其从白名单中删除。

```text
/removeuserfromwhitelist "username"
```

如果之前开启过开放注册，想把当前已连接的账号转换成白名单账号，可以使用将所有当前连接用户添加到白名单的命令。

```text
/addalltowhitelist
```

## 验证白名单功能

启用 `Open=false` 后，未通过 `/adduser` 添加的新用户应该无法加入。用一个白名单账号测试确认是否能正常访问。

如果未列入白名单的用户仍能加入，请确认你编辑的是当前生效的 `<ServerName>.ini` 文件，并且已经重启了服务器。

## 总结

只要按照以上步骤操作，你的白名单就已经生效，可以精准控制谁能加入服务器。如果访问权限仍有问题，建议重启服务器一次，再次检查文件或命令输出，确认修改已生效。

如有更多问题或需要帮助，随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />