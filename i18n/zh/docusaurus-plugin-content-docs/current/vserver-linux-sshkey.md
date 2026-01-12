---
id: vserver-linux-sshkey
title: "VPS：为 Linux 服务器生成和使用 SSH 密钥"
description: "了解如何安全生成和管理 Linux 服务器的 SSH 密钥，提升连接安全性和控制力 → 立即了解更多"
sidebar_label: SSH 密钥
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 生成 SSH 密钥

为了实现比传统 SSH 密码连接更安全的连接，推荐使用 SSH 密钥。打开 Linux 服务器面板中的“**访问与安全**”标签页。

![](https://screensaver01.zap-hosting.com/index.php/s/wJCtHY44dYiYoqX/preview)

在“**访问与安全**”中，点击“**生成 SSH 密钥**”按钮即可生成密钥。  
点击后会弹出窗口，随机生成的密钥会直接下载到你的电脑。  
要将密钥添加到服务器，必须点击“**添加密钥**”按钮。

:::info
对于 Linux VPS，密钥会直接添加。对于 Linux Root 服务器，必须重启服务器才能使更改生效。
:::

<InlineVoucher />

![](https://screensaver01.zap-hosting.com/index.php/s/GsER3sNYWYj8t7y/preview)

如果需要更多密钥，可以在同一窗口点击“**生成密钥**”按钮。  
通过“**密钥名称**”可以为密钥设置一个名字，方便在 ZAP-Hosting 面板中识别和管理，强烈推荐这样做。

当所有需要的密钥都生成并添加后，它们会显示在“**访问与安全**”下。

![](https://screensaver01.zap-hosting.com/index.php/s/5yjACdnpyiw6E97/preview)

如果你有自己外部生成的公钥（不是通过我们面板生成的），可以点击“**+**”图标将其导入。

![](https://screensaver01.zap-hosting.com/index.php/s/H75CCTe5tTonn8y/preview)

会打开一个空白面板，你可以粘贴自己的公钥。点击“**添加密钥**”后，密钥会被添加到服务器，并显示在我们的面板中。

## 使用 PuTTYGen 将 OpenSSH 密钥转换为 PuTTY 私钥

我们面板生成的 SSH 密钥是 OpenSSH 格式。要在 PuTTY 中使用，必须先将其转换为 PuTTY 私钥格式。你可以使用 PuTTY 自带的“**PuTTYGen**”软件完成转换。

PuTTYGen 程序位于 PuTTY 根目录，默认路径示例为“**C:\Program Files\PuTTY**”。

启动 PuTTYGen，点击“**文件**” -> “**加载私钥**”。

![](https://screensaver01.zap-hosting.com/index.php/s/KNeiG7eWpWateDz/preview)

然后打开 ZAP-Hosting 生成的密钥文件，通常在你的下载文件夹中。

:::info
**重要提示：** 确保文件类型过滤器设置为“**所有文件**”，否则系统生成的 .pri 文件不会显示。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/WQfWN264pJPKWYX/preview)

加载后，你可以填写注释和为密钥设置密码。  
要设置密码，需在“**密钥密码**”和“**确认密码**”中输入相同密码。  
*注意：* 也可以留空不设置密码，但安全性会降低，不推荐这么做。  
设置完成后，点击“**保存私钥**”保存一个 PuTTY 兼容的 .ppk 文件。

![](https://screensaver01.zap-hosting.com/index.php/s/N4dKc86M95yYbtK/preview)

给 .ppk 文件命名并保存，方便后续使用。

## 使用 SSH 密钥连接

要用密钥连接，先在 PuTTY 中关联密钥。点击“**SSH**” - “**认证**” - “**浏览...**”。

![](https://screensaver01.zap-hosting.com/index.php/s/3BJ7NaG2AemGSZt/preview)

找到刚用 PuTTYGen 生成的密钥文件，点击“**打开**”。

为了避免每次连接都重复操作，建议保存会话。点击“**会话**” - “**默认设置**” - “**保存**”，如截图所示。

![](https://screensaver01.zap-hosting.com/index.php/s/zENfY7DBZk85mMa/preview)

现在你可以用 PuTTY 登录服务器了。PuTTYGen 中填写的“密钥注释”也会显示出来。

## 禁用密码登录

SSH 密钥的目的是提升安全性。如果仍允许用密码登录，服务器安全性并未提升。  
因此，必须禁用密码登录。Linux VPS 和 Linux Root 服务器禁用方式不同。  
禁用成功后，只有拥有你创建的 SSH 密钥的用户才能连接服务器。

### Linux VPS

在“访问与安全”标签页中，可以轻松禁用密码登录。  
点击“生成 SSH 密钥”按钮旁的**禁用密码登录**按钮。  
禁用后，无法再通过密码登录服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/jd9NiypwxgpeMGe/preview)

“**通过密码登录 SSH**”状态会显示为“**已禁用**”。

## 总结

恭喜你，SSH 密钥已成功安装和配置！如果还有任何疑问或问题，随时联系我们的支持团队，每天都在线帮你解决！

<InlineVoucher />