---
id: dedicated-linux-sshkey
title: "独服：为 Linux 服务器生成和使用 SSH 密钥"
description: "了解如何安全生成和管理 Linux 服务器的 SSH 密钥，提升连接安全性 → 立即了解"
sidebar_label: SSH 密钥
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 生成 SSH 密钥

相比传统的 SSH 密码连接，推荐使用 SSH 密钥来实现更安全的连接。打开 Linux 服务器面板中的“**访问与安全**”标签页。

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

在“**访问与安全**”中，点击“**生成 SSH 密钥**”按钮即可生成密钥。点击后会弹出窗口，随机生成的密钥会直接下载到你的电脑。
要将密钥添加到服务器，必须点击“**添加密钥**”按钮。

:::info
Linux VPS 的密钥会直接添加生效；Linux Root 服务器则需要重启服务器，变更才会生效。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

如果需要生成更多密钥，可以在同一窗口点击“**生成密钥**”按钮。
通过“**密钥名称**”可以为密钥设置一个名字，方便在 ZAP-Hosting 面板中识别和管理，强烈推荐这样做以便更好地管理。

当所有需要的密钥都生成并添加后，它们会显示在“**访问与安全**”下。

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

如果你有自己外部生成的公钥（非通过我们面板生成），可以点击“**+**”图标导入。

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

会打开一个空白面板，你可以粘贴自己的公钥。点击“**添加密钥**”后，密钥会被添加到服务器，并显示在我们的面板中。

## 使用 PuTTYGen 将 OpenSSH 密钥转换为 PuTTY 私钥

我们面板生成的 SSH 密钥是 OpenSSH 格式。要在 PuTTY 中使用，必须先转换成 PuTTY 私钥格式。你可以使用 PuTTY 自带的“**PuTTYGen**”软件完成转换。

PuTTYGen 程序位于 PuTTY 根目录，默认路径示例为“**C:\Program Files\PuTTY**”。

启动 PuTTYGen，点击“**文件**” -> “**加载私钥**”。

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

然后打开 ZAP-Hosting 生成的密钥文件，通常在你的下载文件夹中。

:::info
**重要提示：** 确保文件类型过滤器设置为“**所有文件**”，否则系统生成的 .pri 文件可能看不到。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/5eRjG5HNMrxW38D/preview)

加载后，你可以填写注释和为密钥设置密码。密码需要在“**密钥密码**”和“**确认密码**”中输入相同内容。
*注意：* 也可以留空不设置密码，但安全性会降低，不推荐这么做。设置完成后，点击“**保存私钥**”保存一个 PuTTY 兼容的 .ppk 文件。

![](https://screensaver01.zap-hosting.com/index.php/s/S2XNpejKYds6C6K/preview)

给 .ppk 文件命名并保存，方便后续使用。

## 使用 SSH 密钥连接

要使用密钥连接，先在 PuTTY 中关联密钥。点击“**SSH**” - “**认证**” - “**浏览...**”。

![](https://screensaver01.zap-hosting.com/index.php/s/cxLBRMPiqEXBG55/preview)

找到刚用 PuTTYGen 生成的密钥文件，点击“**打开**”。

为了避免每次连接都重复操作，建议保存会话。点击“**会话**” - “**默认设置**” - “**保存**”，如图所示。

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

现在你可以用 PuTTY 登录服务器了，PuTTYGen 中填写的“密钥注释”也会显示出来。

## 关闭密码登录

SSH 密钥的目的是提升安全性。如果仍允许密码登录，服务器安全性并未提升。因此需要关闭密码登录。Linux VPS 和 Linux Root 服务器关闭密码登录的方式不同。关闭成功后，只有拥有你生成的 SSH 密钥的用户才能连接服务器。

### Linux VPS

在“访问与安全”标签页中可以轻松关闭密码登录。
点击“生成 SSH 密钥”按钮旁的 **关闭密码登录** 按钮。
关闭后，密码登录将无法使用。

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

“**通过密码登录 SSH**”状态会显示为“**已关闭**”。