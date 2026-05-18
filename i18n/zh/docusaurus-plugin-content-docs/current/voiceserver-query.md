---
id: voiceserver-query
title: "语音服务器：访问 TeamSpeak Query"
description: "了解如何通过 Query 登录外部管理你的 TeamSpeak 服务器，实现高效的服务器控制和管理 → 立即了解更多"
sidebar_label: Query 登录
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

TeamSpeak 的 Query 登录允许你访问服务器查询接口，通过命令外部管理你的 TeamSpeak 服务器。

:::warning 服务器管理员 Query 访问权限
我们的 TeamSpeak 服务器产品不包含服务器管理员 Query 访问权限。 
:::

<InlineVoucher />

## 登录详情

<Tabs>
<TabItem value="Webinterface" label="TeamSpeak 服务器产品" default>

出于安全考虑，**服务器管理员 Query** 登录在 **TeamSpeak 服务器产品** 中不可用。但如果你在你的 TeamSpeak 服务器上拥有管理员权限，可以通过以下步骤创建自己的 Query 登录。

:::info
导入快照、更改槽位/端口等功能不可用。这些设置由我们预设，无法手动调整。 
:::

要创建自己的 Query 登录，请在 TeamSpeak 客户端的“工具”中点击“Server Query Login”。
然后输入登录名称，这也将作为登录名，例如“MyQueryLogin”：

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

点击“确定”后，会显示一个密码。请务必保存，密码无法更改。 

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)


使用刚创建的登录信息即可建立连接，例如通过 [YaTQA](https://yat.qa)。需要填写服务器 IP、Query 端口、服务器端口以及 Query 登录名和密码。

服务器 IP、Query 端口和服务器端口可在 Web 面板的仪表盘查看：

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>
<TabItem value="self_hosted" label="自托管（VPS/独服）">

如果你的 TeamSpeak 服务器是通过 Web 面板安装在自己的 VPS 或独服上，则可以使用正常的“服务器管理员 Query”登录。登录信息可在 TeamSpeak 实例的 Web 面板中找到。

</TabItem>
</Tabs>

## 访问 Query

在 **YatQA** 应用的快速连接中填写提供的或自建的 Query 登录信息，然后点击 **连接按钮**。

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)

:::warning 自定义 Query 端口错误
默认情况下，如果你在初次安装后指定了非默认 Query 端口，会出现错误。这是正常现象，解决方法如下：

![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::

## 总结

你已成功通过 YatQA 建立了 Query 连接。如有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />