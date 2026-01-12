---
id: vserver-linux-sftp
title: "VPS：通过 SFTP 建立连接"
description: "了解如何使用 SFTP 安全传输文件，并通过加密连接保护你的数据 → 立即了解更多"
sidebar_label: SFTP 连接
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';





## 介绍

SFTP 是一种通过互联网或网络在计算机之间安全传输文件的协议。它代表 **“SSH 文件传输协议”** 或 **“安全文件传输协议”**，基于 **SSH 协议（安全外壳）**。

与 FTP（文件传输协议）不同，FTP 传输的数据是未加密的，而 SFTP 确保所有数据都经过加密，因此能防止未经授权的访问。

<InlineVoucher />



## 建立连接

通过 **SFTP** 连接时，使用的是 root 用户的登录信息。下面的示例展示了如何使用 WinSCP 应用程序进行连接设置。在 WinSCP 中创建一个 **新会话**。

![img](https://screensaver01.zap-hosting.com/index.php/s/HDsMr5mnJpC7FtM/download)

在新会话的配置窗口中，选择 `SFTP` 作为 **传输协议**。接着输入你的服务器 **IP 地址** 和端口号 **22**。用户名和密码请使用你的 `root` 用户登录信息。

![img](https://screensaver01.zap-hosting.com/index.php/s/Wq59YHDnirKYkDr/download)

:::warning 使用 SSH 密钥
如果你使用的是 SSH 密钥而非简单密码，点击 **高级**，然后导航到 **SSH -> 认证**，你可以在那里保存你的 SSH 密钥。
:::

首次通过 SFTP 连接时，会弹出此消息，因为你的电脑还不认识这台服务器。如果你信任该服务器，请点击 **“是”**。这会保存服务器的安全密钥，今后连接时就不会再提示。这是首次连接新服务器时的正常步骤。

![img](https://screensaver01.zap-hosting.com/index.php/s/DxErsePZJnkxyCp/download)





## 总结

只要你按照以上步骤操作，就已经成功建立了与服务器的 SFTP 连接。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />