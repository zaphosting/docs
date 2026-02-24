---
id: webspace-plesk-ssl
title: "Webspace：创建 SSL 证书"
description: "了解如何通过 SSL 加密保护你的网站，并启用 HTTPS 实现更安全的浏览 → 立即了解更多"
sidebar_label: 创建 SSL 证书
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 用 SSL 加密网站

:::info
这里假设你的域名已经指向了 Webspace 的 IP。
:::

当你在 Webspace 创建一个域名时，默认是未加密的。你可以在 Plesk 面板看到这一点：

![](https://screensaver01.zap-hosting.com/index.php/s/kkJ67Pd733pt95i/preview)

打开域名时浏览器的提示也会显示未加密：

![](https://screensaver01.zap-hosting.com/index.php/s/5iwXSgEb4LrY3xf/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/mpmK8TAjAsgY3FW/preview)

通过 SSL 证书，你可以为域名开启保护/加密。

<InlineVoucher />

## 证书创建流程

步骤 1️⃣：双击“SSL/TLS 证书”打开如下菜单：

![](https://screensaver01.zap-hosting.com/index.php/s/g5sr6WC4eawqzoF/preview)

你可以免费申请一个 Let’s Encrypt 证书。

步骤 2️⃣：填写所需信息。申请证书必须填写相关信息。

需要填写邮箱地址，并勾选证书适用的域名。通常每个域名都会启用 “www” 子域，所以如果 DNS 里有对应记录，也要勾选它。

![](https://screensaver01.zap-hosting.com/index.php/s/Mwf3CEWsYRwprS3/preview)

填写完成后，点击“免费获取”申请证书。

步骤 3️⃣：证书创建成功后，右上角会显示状态。接着需要开启 HTTP 自动跳转到 HTTPS，否则加密无法生效：

![](https://screensaver01.zap-hosting.com/index.php/s/YBdGQqmtNeWKdxA/preview)

设置完成后，无论你用 http 还是 https 访问，都会自动跳转到 https。

步骤 4️⃣：现在可以在浏览器里检查证书是否生效：

地址栏必须显示锁形图标：

![](https://screensaver01.zap-hosting.com/index.php/s/DkZoqg9XGgR67EK/preview)

点击锁标查看证书信息，应该显示你的域名：

![](https://screensaver01.zap-hosting.com/index.php/s/p5H6RZ25HksHsow/preview)

这样你的网站就已经被正确保护和加密了。

## 子域名证书

理论上，子域名也可以按同样步骤申请证书。但还有更简单的方式，可以一次性加密所有子域名（无论是已有还是新建的）。这就是“泛域名证书”，需要在域名的 DNS 里添加一个特殊的 TXT 记录。添加完成后，就能为所有子域名签发 SSL 证书。

步骤 1️⃣：再次打开 SSL/TLS 证书菜单。

![](https://screensaver01.zap-hosting.com/index.php/s/X4kFeMomqmz3nGp/preview)

点击左上角的“续订证书”。
接着会打开 Let’s Encrypt 申请窗口：

![](https://screensaver01.zap-hosting.com/index.php/s/eCcFtaJHxW3XWgF/preview)

选择“保护泛域名”：

![](https://screensaver01.zap-hosting.com/index.php/s/5STxWaKf3JWGfZe/preview)

“www”和“webmail”子域会自动添加。
然后再次点击“免费获取”。

步骤 2️⃣：这时会出现一个蓝色提示框，告诉你重要信息：

![](https://screensaver01.zap-hosting.com/index.php/s/JHag4cd85Lq6gwx/preview)

这里会给出一个域名和对应的值，需要你在域名的 DNS 里永久添加这个 TXT 记录，Let’s Encrypt 才能验证域名的真实性。

DNS 记录示例：

![](https://screensaver01.zap-hosting.com/index.php/s/qPCeWj5dJRFfYFB/preview)

:::info
DNS 记录生效可能需要最长 24 小时，全球范围内都可能有延迟。
:::

你可以用 mxtoolbox 的“TXT Lookup SuperTool”来检测 TXT 记录是否生效：`https://mxtoolbox.com/SuperTool.aspx`：

![](https://screensaver01.zap-hosting.com/index.php/s/CPSSWeQRpTDsagY/preview)

当你确认 TXT 记录已经显示出来后，回到 Plesk 的蓝色提示框点击“重新加载”。系统会检测 DNS 记录，确认无误后，几秒钟内“SSL/TLS 证书持有者”也就是“泛域名证书”状态会显示“已保护”：

![](https://screensaver01.zap-hosting.com/index.php/s/AwWiJboz3k6iea8/preview)

之后新建的子域名都会自动受保护：

![](https://screensaver01.zap-hosting.com/index.php/s/XLHzsgkeLmwJ55m/preview)

这样，整个网站的数据传输就都被加密保护了，搞定！

<InlineVoucher />