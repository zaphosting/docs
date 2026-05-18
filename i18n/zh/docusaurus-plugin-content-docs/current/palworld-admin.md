---
id: palworld-admin
title: "Palworld：设置管理员"
description: "了解如何通过管理员密码保护你的 Palworld 服务器，并有效管理可信玩家 → 立即了解更多"
sidebar_label: 设置管理员
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## 介绍
本指南将教你如何为服务器设置管理员密码，并在游戏内将自己添加为管理员。你可以将此密码分享给可信玩家，以授予他们一系列管理员命令。想了解更多服务器命令，请查看我们的[服务器命令](palworld-server-commands.md)指南。
<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ramgExKNxeLeDdL/preview" title="一分钟快速设置 Palworld 服务器！" description="喜欢边看边学更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定设置。不管你是赶时间还是喜欢用最有趣的方式吸收信息，这里都有你想要的！"/>

<InlineVoucher />

## 配置管理员密码

首先，你需要进入配置设置。有几种方法可以做到这一点，我们在下面列出了每种方法及设置密码的步骤。我们推荐使用 **Web界面** 选项，因为它最友好易用。设置好管理员密码后，就可以进入下一部分了。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="通过 Web界面" default>

#### 通过 Web界面

最简单的方法是进入游戏服务器的 **设置** 页面。

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

在 **设置** 区域，找到 **游戏服务器密码** 选项。在这里输入你想设置的密码。

![](https://screensaver01.zap-hosting.com/index.php/s/aQYQDYMP34NnNXr/preview)

:::info
设置好密码后，别忘了往上滚动并点击绿色的 **保存** 按钮确认更改。

![](https://screensaver01.zap-hosting.com/index.php/s/YG5MZ6Jt8SdFy4A/preview)
:::

</TabItem>

<TabItem value="configs" label="通过 WI 配置文件">

#### 通过 WI 配置文件

:::note
编辑配置文件前，服务器必须先停止。编辑配置后重启服务器，否则更改将不会生效。
:::

如果你想直接编辑原始配置文件，可以进入游戏服务器的 **配置** 页面，点击蓝色的编辑文件按钮，如下图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/NGeBQ5TB6JkcCHq/preview)

这会在网页上打开一个文本编辑器，方便你修改。找到文件中的 **AdminPassword** 选项（可以用 `CTRL+F` 快速搜索），将其改成你想设置的管理员密码。最后保存文件，然后启动服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/gpBjxxmdsWKD4t2/preview)

</TabItem>

<TabItem value="ftp" label="通过 FTP">

#### 通过 FTP

:::note
编辑配置文件前，服务器必须先停止。编辑配置后重启服务器，否则更改将不会生效。
:::

最后一种方法是通过 FTP 访问原始文件。如果你不熟悉 FTP，建议先看看我们的[FTP访问指南](gameserver-ftpaccess.md)。不过这个方法比较慢，如果你只是想直接编辑文件内容，推荐使用游戏服务器 Web界面的 **配置** 页面。

</TabItem>
</Tabs>

## 设置自己为管理员

管理员密码设置好后，你需要在游戏内将自己添加为管理员。启动 Palworld 并连接到你的服务器。如果需要帮助，请查看我们的[连接服务器](palworld-connect.md)指南。

游戏内，按 `Enter` 打开聊天框。然后输入以下命令，将 `[password]` 替换成你之前设置的管理员密码：

```
/AdminPassword [password]
```

![](https://screensaver01.zap-hosting.com/index.php/s/75D5ejaWNM6oYNX/preview)

如果密码正确，你会在聊天框收到成功提示。如果出现错误，请确认你输入的管理员密码与之前设置的一致。

<InlineVoucher />