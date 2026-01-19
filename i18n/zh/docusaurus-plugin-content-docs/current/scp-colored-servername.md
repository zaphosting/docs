---
id: scp-colored-servername
title: "SCP秘密实验室：彩色服务器名"
description: "学习如何用彩色文字自定义你的服务器名，让它更醒目更有范儿 → 立即了解"
sidebar_label: 彩色服务器名
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
要让你的服务器显示在公共服务器列表中，必须设置一个 Pastebin ID。我们的指南在这里：[Pastebin ID](scp-pastebin.md)。

更改设置后，服务器必须关闭才能生效。
:::

<InlineVoucher />

打开你的服务器设置，检查“SCP服务器名”是否为空。

![](https://screensaver01.zap-hosting.com/index.php/s/Y9BXkJnBGXy3jWP/preview)

确认没有填写内容后，点击设置下方的“Configs”标签。

现在点击蓝色按钮打开 config_gameplay.txt 配置文件。

![](https://screensaver01.zap-hosting.com/index.php/s/FAm8KQfAonpTWp2/preview)

我们的配置编辑器已打开，你可以通过修改 "server_name" 来更改服务器名。利用 [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) 功能，可以使用多种颜色。

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

举个例子，我想让“Green Text”、“Blue Text”和“Red Text”分别显示对应的颜色。

实现方法是使用 `<color="COLOR">你的文字</color>` 标签，所有可用颜色列表见[这里](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html)。你还可以调整其他属性，比如字体大小。
:::info
记得标签内的颜色名称必须用双引号 " " 括起来，就像上面示例那样。
:::

自定义完成后，保存配置。

:::info
启动服务器后，你的服务器名就会显示彩色啦。
:::

<InlineVoucher />