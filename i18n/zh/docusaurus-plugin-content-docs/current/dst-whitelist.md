---
id: dst-whitelist
title: "饥荒联机版：白名单"
description: "关于如何为你的饥荒联机版服务器设置白名单的详细信息 → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

白名单是一种限制谁能加入你服务器的访问列表。在饥荒联机版中，这通过基于Klei用户ID的允许列表实现。通常的设置是一个 `whitelist.txt` 文件加上 `cluster.ini` 中的 `whitelist_slots`。

<InlineVoucher />


## 启用白名单

通过FTP连接到你的服务器，找到你的集群文件夹，通常类似于 `DoNotStarveTogether/Cluster_1/`，或者是包含 `cluster.ini` 的供应商特定路径。打开 `cluster.ini`，在 `[NETWORK]` 部分设置 `whitelist_slots`。

如果想让服务器只允许白名单玩家加入，把 `whitelist_slots` 设置成和 `max_players` 一样。

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

在同一个集群目录下，创建或编辑 `whitelist.txt`。每行添加一个 Klei ID，格式为 KU_。

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

保存文件并重启服务器。允许列表会在启动时读取。

## 管理白名单玩家

要添加玩家，把他们的 KU_ ID 添加到 `whitelist.txt`，保存后重启。

要移除玩家，从 `whitelist.txt` 删除他们的 KU_ ID，保存后重启。

确保 `whitelist.txt` 中的ID数量至少和 `whitelist_slots` 一样多，避免当预留的白名单槽位超过列表用户数时出现加入问题。

## 验证白名单功能

重启后，尝试用不在 `whitelist.txt` 中的账号加入。如果 `whitelist_slots` 等于 `max_players`，加入应该会失败。然后用列表中的 KU_ ID 加入确认访问权限。

如果服务器仍允许未列出的玩家加入，确认你编辑的是当前生效的集群文件夹，并且 `[NETWORK]` 部分包含了 `whitelist_slots` 这一行。

## 总结

只要以上步骤都正确执行，你的白名单就已经生效，可以精准控制谁能加入服务器。如果访问权限仍不正常，重启服务器一次，再次检查文件或命令输出确认更改已生效。

<InlineVoucher />