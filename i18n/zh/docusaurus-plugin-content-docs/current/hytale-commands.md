---
id: hytale-commands
title: "Hytale：命令列表"
description: "Hytale 服务器可用的控制台和游戏内命令一览 → 立即了解更多"
sidebar_label: 命令列表
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Hytale 服务器提供了丰富的命令，方便管理员管理游戏玩法、玩家、世界和服务器配置。这些命令可以通过实时服务器控制台执行，也可以直接在游戏内执行，前提是拥有相应权限。

![](https://screensaver01.zap-hosting.com/index.php/s/2yJ6G3AWCDfAHMj/download)

本页汇总了常用且官方文档支持的 Hytale 服务器命令。

<InlineVoucher />



## 认证

认证命令用于授权服务器，使其能够接受玩家连接并与 Hytale 在线服务交互。

| 命令                     | 说明                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `/auth login device`     | 启动基于设备的认证流程。服务器会输出一个 URL 和设备码，需使用 Hytale 账号确认。 |
| `/auth login browser`    | 启动基于浏览器的认证流程。需要服务器具备图形界面环境。         |
| `/auth status`           | 显示服务器当前的认证状态。                                    |
| `/auth logout`           | 注销服务器并移除当前的认证会话。                              |



## 玩家与权限

这些命令用于控制管理员权限及对用户和组的细粒度权限分配。

| 命令                                   | 说明                                                     |
| -------------------------------------- | -------------------------------------------------------- |
| `/op add <PlayerName>`                  | 授予指定玩家管理员权限。                                  |
| `/op remove <PlayerName>`               | 撤销指定玩家的管理员权限。                                |
| `/perm user list <uuid>`                | 显示直接分配给该用户的所有权限。                          |
| `/perm user add <uuid> <permission>`   | 直接赋予用户一个或多个权限。                              |
| `/perm user remove <uuid> <permission>`| 移除用户的特定权限。                                      |
| `/perm user group list <uuid>`          | 显示用户所属的所有权限组。                                |
| `/perm user group add <uuid> <group>`   | 将用户添加到指定权限组。                                  |
| `/perm user group remove <uuid> <group>`| 将用户从指定权限组中移除。                                |
| `/perm group list <group>`              | 列出权限组拥有的所有权限。                                |
| `/perm group add <group> <permission>`  | 向权限组添加权限。                                        |
| `/perm group remove <group> <permission>`| 从权限组移除权限。                                        |



## 白名单

白名单命令限制服务器访问，仅允许获批玩家进入。

| 命令                            | 说明                                               |
| ------------------------------- | -------------------------------------------------- |
| `/whitelist add <playername>`   | 将指定玩家添加到白名单。                            |
| `/whitelist remove <playername>`| 从白名单中移除指定玩家。                            |
| `/whitelist list`               | 显示当前所有白名单玩家。                            |
| `/whitelist enable`             | 启用白名单功能。                                    |
| `/whitelist disable`            | 关闭白名单功能。                                    |
| `/whitelist status`             | 显示当前白名单状态。                                |



## 世界管理

世界命令用于创建、加载、卸载和删除世界。

| 命令                          | 说明                                               |
| ----------------------------- | -------------------------------------------------- |
| `/world create <name>`         | 创建一个指定名称的新世界。                          |
| `/world load <name>`           | 加载并激活一个已存在的世界。                        |
| `/world unload <name>`         | 卸载一个世界，但不删除其数据。                      |
| `/world remove <name>`         | 删除一个世界及其所有关联数据。                      |
| `/world setdefault <name>`     | 设置服务器启动时默认加载的世界。                    |



## 游戏玩法与环境

这些命令直接影响游戏规则和世界行为。

| 命令                          | 说明                                               |
| ----------------------------- | -------------------------------------------------- |
| `/list`                       | 显示当前所有在线玩家。                              |
| `/tp <player> <target>`       | 将一名玩家传送到另一名玩家的位置。                  |
| `/tp <player> <x> <y> <z>`    | 将玩家传送到指定坐标。                              |



## 传送与定位

用于管理玩家位置和可见性的命令。

| 命令                          | 说明                                               |
| ----------------------------- | -------------------------------------------------- |
| `/list`                       | 显示当前所有在线玩家。                              |
| `/tp <player> <target>`       | 将一名玩家传送到另一名玩家的位置。                  |
| `/tp <player> <x> <y> <z>`    | 将玩家传送到指定坐标。                              |



## 工具与帮助

工具命令提供帮助信息和服务器状态。

| 命令                          | 说明                                               |
| ----------------------------- | -------------------------------------------------- |
| `/help`                       | 显示可用命令列表。                                  |
| `/help <command>`             | 显示指定命令的详细帮助信息。                        |
| `/status`                     | 显示当前服务器状态和运行信息。                      |



## 总结

Hytale 的命令系统为管理服务器、玩家和游戏行为提供了强大工具。掌握并合理使用这些命令，管理员能高效运营并定制自己的 Hytale 服务器环境。

如有更多问题或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂



<InlineVoucher />