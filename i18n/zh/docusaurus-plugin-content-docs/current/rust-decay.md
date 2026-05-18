---
id: rust-decay
title: "Rust：修改腐蚀速率"
description: "了解如何调整 Rust 服务器的腐蚀速率并保存配置，实现更好的游戏控制 → 立即了解"
sidebar_label: 腐蚀
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

通过 RCON，你可以直接运行命令让自己成为管理员。首先需要[通过 RCON 连接](rust-connectrcon.md)。

:::info
服务器必须完全启动，才能通过 RCON 连接。
:::

连接成功后，请进入控制台（Console）部分，在这里你可以执行命令。我们示例中使用的是 **RustAdmin**。

你可以按以下方式修改腐蚀速率：

`decay.scale 1.0` 是正常腐蚀速率<br/>
`decay.scale 0.5` 将腐蚀速率降低 50%<br/>
`decay.scale 0` 完全关闭腐蚀<br/>

比如你想完全关闭腐蚀，只需执行命令

```decay.scale 0``` 输入命令后按回车。

你可以在控制台标签页确认命令是否成功发送。

![](https://screensaver01.zap-hosting.com/index.php/s/J4HPW5Dee93BDJP/preview)

要保存更改，需要发送命令

```server.writecfg``` 并按回车确认。

![](https://screensaver01.zap-hosting.com/index.php/s/kEbCodqYTf8tqKp/preview)

如果控制台显示 `Config Saved`，说明服务器已成功应用你的修改。


<InlineVoucher />