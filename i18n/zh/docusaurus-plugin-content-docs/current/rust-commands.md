---
id: rust-commands
title: "Rust：管理员命令"
description: "发现Rust服务器管理和玩家控制的必备命令，优化游戏体验和管理 → 立即了解更多"
sidebar_label: 管理员命令
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Rust为服务器拥有者和玩家提供了丰富的命令。在本页中，我们总结了最实用且流行的命令，涵盖服务器设置、玩家管理以及玩家控制。

:::info
部分命令需要使用玩家的Steam64 ID。请参考下面的小教程，了解如何获取玩家的Steam ID。
:::

<InlineVoucher />

## 获取你的Steam ID
首先，使用类似[Steam ID Finder](https://steamidfinder.com/)的工具获取你的Steam64 ID。

在这里输入你的Steam链接：

![](https://screensaver01.zap-hosting.com/index.php/s/wscaNkzWSjzAktf/preview)

然后点击 `Find Steam ID`。现在你应该能看到你的Steam个人资料，复制其中的“Steam64ID (Dec)”。

就是这么简单，现在你已经有了Steam64 ID，可以用来执行下面需要Steam64 ID的命令。

## 命令分类

使用下面的标签页切换不同类别。表格包含命令本身、命令接受的参数（如适用）以及描述，方便理解。

:::info
本页提及的所有命令均适用于原版Rust。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ServerSettings" label="服务器设置" default>

| 命令语法                  | 接受的参数 | 描述 | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | 开启后，所有聊天消息将显示给所有玩家         | 
| server.stop      | -          | 停止服务器         | 
| server.save      | -          | 保存服务器         | 
| server.saveinterval "value"      | 整数（默认60）          | 设置服务器自动保存间隔（秒）         | 
| server.secure      | true/false          | 开启后，Easy Anti Cheat (EAC) 会拒绝未注册或被封禁玩家连接         | 
| server.seed "value"     | 整数（例如123456）          | 设置服务器世界的种子值         | 
| server.stability      | true/false          | 开启后，建筑结构稳定性生效         | 
| server.tickrate "rate"      | 整数（默认30）          | 设置服务器的Tick率         | 
| server.writecfg      | -          | 保存之前通过其他服务器命令设置的配置更改         | 
| chat.serverlog      | true/false          | 开启后，聊天内容将始终记录到服务器控制台         | 
| commands.echo "text"      | 字符串（例如 "Hello World!"）          | 在服务器控制台打印指定消息         | 
| global.say "message"      | 字符串（例如 "Welcome!"）          | 向服务器内所有玩家发送消息         | 
| env.time      | 整数（例如16）          | 设置游戏内世界时间（小时）         | 
| server.events      | -          | 开启后启用服务器事件，如空投         | 
| commands.find "command"      | 字符串（例如 "quit"）          | 搜索命令，输入 "." 可列出所有可用命令         | 
| global.quit      | -          | 保存服务器并停止         | 
| global.init      | -          | 加载配置文件         | 

</TabItem>
<TabItem value="PlayerAdmin" label="玩家管理">

| 命令语法                  | 接受的参数 | 描述 | 
| ----------------------- | ---------- | --------- | 
| global.ban "playername" "reason"      | 字符串（例如 "Jacob"），字符串（例如 "调皮捣蛋！"）          | 封禁玩家（可选理由）         | 
| global.banid "steam64"      | 整数          | 通过Steam64 ID封禁玩家         | 
| global.banlistex      | -          | 返回被封禁玩家列表，包含玩家名和封禁理由         | 
| global.banlist      | -          | 在聊天中返回被封禁玩家列表         | 
| global.unban "steam64"      | 整数          | 通过Steam64 ID解封玩家         | 
| global.kickall      | -          | 踢出服务器内所有玩家         | 
| global.kick "steam64 / playername" "reason"      | 整数/字符串（例如 "Jacob"），字符串（例如 "调皮捣蛋！"）         | 通过Steam64 ID或玩家名踢出玩家（可选理由）         | 
| global.ownerid "steam64 / playername"      | 整数/字符串（例如 "Jacob"）          | 通过Steam64 ID或玩家名设置指定玩家为服务器管理员（权限等级2）         | 
| global.removeowner "steam64"      | 整数         | 通过Steam64 ID移除管理员权限         | 
| global.moderatorid "steam64 / playername"      | 整数/字符串（例如 "Jacob"）          | 通过Steam64 ID或玩家名设置指定玩家为服务器版主（权限等级1）         | 
| global.removemoderator "steam64"      | 整数          | 通过Steam64 ID移除版主权限         | 
| global.listid      | -          | 返回通过Steam64 ID封禁的玩家列表          | 

</TabItem>
<TabItem value="Player Controls" label="玩家控制">

| 命令语法                  | 接受的参数 | 描述 | 
| ----------------------- | ---------- | --------- | 
| kill      | -          | 自杀         | 
| global.quit      | -          | 保存并退出游戏         | 
| global.god      | true/false          | 切换上帝模式，玩家不会受到伤害（仅限管理员）          | 
| global.noclip      | true/false          | 切换穿墙模式，玩家可自由飞行（仅限管理员）          | 
| global.debugcamera      | true/false          | 切换调试摄像机模式，玩家进入自由摄像机视角（仅限管理员）          | 
| player.sleep      | -          | 强制玩家进入睡眠状态         | 
| commands.find "command"      | 字符串（例如 "quit"）          | 搜索玩家可用的命令         | 
| chat.say "text"     | 字符串（例如 "Hello World!"）          | 向服务器内所有玩家发送消息         | 
| inventory.give "itemID" "amount"     | 整数（物品ID），整数（例如5）          | 给自己背包添加物品         | 
| inventory.giveto "playername" "itemID" "amount"      | 字符串（例如 "Jacob"），整数（物品ID），整数（例如5）          | 给指定玩家背包添加物品         | 

</TabItem>
</Tabs>

<InlineVoucher />