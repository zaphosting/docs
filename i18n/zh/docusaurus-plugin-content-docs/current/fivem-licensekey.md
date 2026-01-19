---
id: fivem-licensekey
title: "FiveM：添加自定义许可证密钥"
description: "了解如何创建和管理你自己的 FiveM 许可证密钥，解锁订阅福利并个性化你的服务器设置 → 立即了解更多"
sidebar_label: 自有许可证密钥
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

默认情况下，你的 FiveM 游戏服务器会附带一个自动生成的许可证密钥。调整并使用你自己的 FiveM 许可证密钥有多种好处，比如访问你的 FiveM Element Club 订阅福利（如 Onesync）、将服务器所有者更改为你的名字等等。在本指南中，我们将介绍如何创建并添加你自己的许可证密钥到 FiveM 游戏服务器。

<InlineVoucher />

## 准备工作

要开始创建密钥的流程，首先需要前往官方 **[Cfx.re 门户](https://portal.cfx.re/)** 网站，并使用你的 Cfx.re 论坛账号登录。如果你还没有账号，可以选择注册新账号。

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info 新的 Cfx.re 门户
Cfx.re 门户是 FiveM 相关所有内容的新家，取代了旧的 FiveM Keymaster 和 Patreon 方案。在这个新门户中，你可以统一管理服务器许可证密钥、访问你购买的任何资源以及管理你的 FiveM 订阅。

强烈建议阅读这篇 [官方博客文章](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/)，了解如何将 Patreon 订阅迁移到新的 Cfx.re 门户，以保持你的订阅福利。
:::

## 生成许可证密钥

登录门户后，通过顶部导航栏进入 **Servers（服务器）** 部分，访问主要的密钥管理区域。这取代了旧版 FiveM Keymaster 网站，整合在一个便捷的门户中。你也可以通过此页面的 **Re-Activate（重新激活）** 选项刷新任何许可证密钥。

点击 **Generate Key（生成密钥）** 按钮，打开注册提示框。

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

在提示框中输入一个有意义的名称，方便你以后识别该密钥。准备好后点击生成按钮。

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

现在你应该能在表格中看到刚生成的新密钥。使用右侧的操作按钮复制密钥，准备好用于下一步。

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## 将密钥添加到服务器

准备好许可证密钥后，你需要修改 FiveM 游戏服务器上现有的许可证密钥，替换为新创建的密钥。你需要登录 FiveM 游戏服务器的 txAdmin 面板来完成这些调整。该面板可以在你的游戏服务器网页控制面板中找到。使用页面上的凭据登录。

登录 txAdmin 后，点击左侧的 **CFG Editor（配置编辑器）**，打开 `server.cfg` 文件。在编辑器中找到 `sv_licensekey` 参数所在行，将其替换为你的自定义许可证密钥。完成后点击保存按钮。

![](https://screensaver01.zap-hosting.com/index.php/s/2E8j9jtykcjwF7L/preview)

## 总结

设置好自定义许可证密钥后，重启服务器开始使用它。你已经成功为你的 FiveM 游戏服务器添加了自定义许可证密钥。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />