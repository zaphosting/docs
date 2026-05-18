---
id: domain-teamspeak-redirect
title: "域名：设置 TeamSpeak 3 转发"
description: "了解如何使用自定义域名或子域名简化连接到你的 TeamSpeak 3 服务器 → 立即了解更多"
sidebar_label: TeamSpeak 3 转发
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
请注意，DNS 记录的更改生效可能最多需要 24 小时！
:::

## 介绍

你可以将整个域名或仅子域名重定向到你的 TeamSpeak 3 服务器。
这样，大家就不用记住复杂的数字 IP 地址，只需通过域名就能轻松连接到你的 TeamSpeak 3 服务器。

:::note
默认情况下，**新建** 的 TeamSpeak 3 服务器现在会获得一个带随机前缀的 `.zap.cloud` 别名，可直接用于连接。
:::

<InlineVoucher />

## 使用 TSDNS 快速设置

我们为 TeamSpeak 3 服务器推出了全新的 TSDNS 系统，让你只需几步点击就能为你的 TeamSpeak 3 服务器设置子域名！如果你没有在我们这里拥有域名，可以跳到下一节手动设置 DNS 记录。

只需前往我们网站上 TeamSpeak 的网页控制面板中的 **设置->TSDNS** 部分。在这里你可以选择一个子域名前缀，以及使用我们的 `zap-ts3.com` 域名，或者你在 ZAP-Hosting 账户中拥有的自有域名。

:::info
使用此快速设置功能，你需要[直接在我们这里购买一个完美域名](https://zap-hosting.com/en/shop/product/domain/)或将你自己的域名转移到你的 ZAP-Hosting 账户。这些域名设置完成后会显示在 TSDNS 部分。或者，你也可以免费使用默认的 `zap-ts3.com`。
:::

在我们的示例中，你可以看到我们使用 `.zap.cloud` 域创建了一个新子域，使用时会直接跳转到我们的 TeamSpeak 3 服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/Mi3wK7cY639Rp3x/preview)

:::note
请注意，域名传播并开始生效可能需要最多 3 小时。
:::

## 常规 DNS 设置

要转发 IP 地址，可以创建一个子域名重定向到 TeamSpeak 3 服务器的 IP，或者直接转发整个域名（无子域名）。
如果 TeamSpeak 3 服务器使用默认端口 **9987**，这就足够了。
但如果 TeamSpeak 3 服务器使用了非默认端口，则需要额外添加一个 **SRV 记录**，将域名或子域名转发到正确的端口。

### SRV 服务名

服务名总是以 **下划线** 开头。
TeamSpeak 3 服务器的服务名始终是 **_ts3**，没有例外。

### SRV 协议

协议指定连接使用的互联网协议，这里可选 **UDP** 和 **TCP**。
协议名也总是以 **下划线** 开头，分别是 **_udp** 或 **_tcp**。
TeamSpeak 3 服务器始终使用 **_udp**，无例外。

## 不带子域名的域名转发

如果想不创建子域名直接将域名转发到游戏服务器，先在仪表盘打开你的域名，然后从左侧菜单进入 DNS 管理。

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)

这里会显示该域名所有现有的 DNS 记录。
如果你还没创建过自己的记录，可以点击右侧的红色垃圾桶查看所有现有记录。

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

然后点击 **新建记录**，进入新 DNS 记录创建页面。
**名称** 填写域名本身，比如 **teamspeak-server.de**，类型选择 **A**，值填写你的 TeamSpeak 3 服务器 IP，比如 **88.214.57.116**。
**TTL** 字段保持默认即可。

![](https://screensaver01.zap-hosting.com/index.php/s/cTGTdBFrigs7HDG/preview)

填写完成后点击 **保存**，记录会被保存到 DNS 设置中，并在 24 小时内生效。

:::info
新 DNS 记录生效最多可能需要 24 小时，没人能控制这个时间。
:::

## 带子域名的域名转发

如果你想创建子域名，比如 ts.teamspeak-server.de，操作和上面类似，
但 **名称** 填写子域名而不是主域名。
示例如下：

![](https://screensaver01.zap-hosting.com/index.php/s/ocaqgX2DSdspGQ8/preview)

## 带端口的域名转发（SRV）

如果不是使用默认端口 **9987**，还需要额外创建一个 **SRV 记录**，不仅将域名指向游戏服务器 IP，还要指向正确端口。

首先，你可以像上面那样创建一个子域名，或者直接将域名转发到 TeamSpeak 3 服务器，两种方式都行。

### 不带子域名的转发

在你将域名转发到 TeamSpeak 3 服务器 IP 后，点击 **新建记录**，创建如下记录：

![](https://screensaver01.zap-hosting.com/index.php/s/H3NGmYZHyJsCYnf/preview)

**名称** 填写服务名，这里是 TeamSpeak 3 服务器的 **_ts3**，加上协议类型 **_udp** 和域名。
**类型** 选择 **SRV**。
**值** 填写游戏端口和域名，比如 **0 1234 teamspeak-server.de**，其中 **1234** 是游戏端口，**teamspeak-server.de** 是转发的域名。
值中的 **0** 不影响，保持不变。**TTL** 和 **Prio** 字段也不需要改动。

完成后点击 **保存**。

:::info
注意，**值** 字段中域名末尾必须带一个 **点号（.）**！
:::

### 带子域名的转发

带子域名的操作几乎一样。先创建子域名并转发到 TeamSpeak 3 服务器 IP，然后点击 **新建记录**，创建如下内容：

![](https://screensaver01.zap-hosting.com/index.php/s/aEkro3z9WBgWf8g/preview)

**名称** 填写服务名 **_ts3**，协议 **_udp**，以及带子域名的完整域名，比如 **ts.teamspeak-server.de**。
**类型** 选择 **SRV**。
**值** 填写端口和带子域名的域名，比如 **0 1234 ts.teamspeak-server.de**，其中 **1234** 是 TeamSpeak 3 服务器端口，**ts.teamspeak-server.de** 是转发的带子域名。
值中的 **0** 不影响，保持不变。**TTL** 和 **Prio** 字段也不需要改动。

<InlineVoucher />