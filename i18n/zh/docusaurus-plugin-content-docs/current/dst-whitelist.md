---
id: dst-whitelist
title: "饥荒联机版：白名单"
description: "关于如何在 ZAP-Hosting 上为你的饥荒联机版服务器设置白名单 → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

白名单是一种访问列表，用来限制谁能加入你的服务器。在饥荒联机版中，这通过基于 Klei 用户 ID 的允许列表实现。通常的设置是一个 `whitelist.txt` 文件加上 `cluster.ini` 里的 `whitelist_slots`。

<InlineVoucher />


## 激活白名单

通过 FTP 连接到你的服务器，找到你的集群文件夹，通常类似于 `DoNotStarveTogether/Cluster_1/`，或者是包含 `cluster.ini` 的供应商特定路径。打开 `cluster.ini`，在 `[NETWORK]` 部分设置 `whitelist_slots`。

如果想让服务器只允许白名单玩家加入，把 `whitelist_slots` 设置成和 `max_players` 一样。

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

在同一个集群目录下，创建或编辑 `whitelist.txt`。每行添加一个 KU_ 格式的 Klei ID。

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

保存文件并重启服务器。允许列表会在启动时读取。

## 管理白名单玩家

要添加玩家，把他们的 KU_ ID 添加到 `whitelist.txt`，保存后重启。

要移除玩家，从 `whitelist.txt` 删除他们的 KU_ ID，保存后重启。

确保 `whitelist.txt` 里的 ID 数量至少和 `whitelist_slots` 一样多，避免当保留的白名单槽位超过列出的用户数时出现无法加入的问题。

## 验证白名单功能

重启后，尝试用不在 `whitelist.txt` 里的账号加入。如果 `whitelist_slots` 等于 `max_players`，加入应该会失败。然后用一个列在白名单里的 KU_ ID 加入，确认能正常访问。

如果服务器仍允许未列出的玩家加入，确认你编辑的是当前生效的集群文件夹，并且 `[NETWORK]` 部分包含了 `whitelist_slots` 这一行。

## 结论

如果以上步骤都正确执行，你的白名单现在已经激活，可以精准控制谁能加入服务器。如果访问权限仍不正常，重启服务器一次，再检查文件或命令输出确认更改已生效。

<InlineVoucher />