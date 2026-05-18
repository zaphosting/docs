---
id: webspace-htaccess-discord
title: "Webspace：通过域名设置 Discord 转发"
description: "了解如何通过 Web 服务器配置将您的域名重定向到特定 URL，实现无缝转发 → 立即了解更多"
sidebar_label: Discord 转发
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

域名默认只能转发到服务器或网站的主地址，不能直接转发到具体的 URL。不过，你可以通过 Web 服务器配合 `.htaccess` 文件设置重定向，实现域名自动跳转到指定的目标 URL。

<InlineVoucher />

## 准备工作

要实现这种转发，前提是你已经拥有自己的域名（顶级域名）和一个 Webspace 套餐。将域名绑定到你的 Webspace 套餐。如果你不确定怎么操作，可以使用我们简单易用的 [EasyDNS](domain-easydns.md) 选项。

:::warning DNS 变更需要时间

DNS 设置的更改可能需要**最长 24 小时**才能在全球范围内完全生效。有时可能会更快，但由于不同服务器的缓存，延迟是正常现象。

:::

只要域名成功指向了 Webspace 并且可以访问，就可以开始配置 Discord 转发了。

## 配置

需要创建并配置一个 `.htaccess` 文件来实现转发。首先，进入 Plesk 管理后台的文件管理器，找到你的域名对应的目录。然后点击加号，创建一个名为 `discord` 的新文件夹。

![img](https://screensaver01.zap-hosting.com/index.php/s/ZAJAd7EXp7yJE64/download)

进入 `discord` 文件夹，创建一个名为 `.htaccess` 的新文件。用文本编辑器打开它，添加以下转发规则。复制并粘贴以下内容：
```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]
```

为了让规则和重定向生效，你需要把示例域名 `example-example.de` 替换成你自己的域名，并保存文件。同时，把 Discord 邀请链接替换成你服务器的链接。

现在，你应该可以通过你的域名加上定义的 discord 路径来访问重定向了。以我们的示例为例，结构是：`beispiel-example.de/discord`。

## 总结

只要你按照步骤操作，就能成功配置域名转发到你的 Discord 服务器。如果还有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />