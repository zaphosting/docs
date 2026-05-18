---
id: webspace-wordpress-migration
title: "Webspace：将你的 WordPress 网站迁移到 ZAP-Hosting"
description: "了解如何无缝迁移你的 WordPress 网站到 ZAP-Hosting Webspace，提升你的网站表现 → 立即了解更多"
sidebar_label: 迁移
services:
  - webspace
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

想体验我们强大的 Webspace 产品并准备切换到我们这里？别找了！本指南将带你通过 WordPress 插件，轻松把你的网站迁移到 ZAP-Hosting 的 Webspace 产品。

<InlineVoucher />

## 准备工作

继续之前，请确保你已经准备好以下内容：
- 一个域名，并拥有管理 DNS 设置的管理员权限。
- 旧 WordPress 实例的管理员权限。
- 拥有我们的[Webspace](https://zap-hosting.com/en/shop/product/webspace/)产品。

## 第一步：准备 Webspace

先访问我们的[Webspace](https://zap-hosting.com/en/shop/product/webspace/)产品页面，购买适合你网站需求的 Webspace 主机方案。产品设置完成后，你需要在上面安装 WordPress。详细操作请参考我们的专门[安装指南](webspace-wordpress.md)。

WordPress 安装完成后，你还需要把你的域名绑定到 Webspace。再次提醒，请查看我们的专门[添加域名指南](webspace-adddomain.md)获取详细步骤。

![](https://screensaver01.zap-hosting.com/index.php/s/Qa3mmmQtTybNgGj/preview)


## 第二步：安装 Migrate Guru 插件

为了自动化迁移流程，我们推荐使用免费且广受欢迎的 **Migrate Guru** WordPress 插件。你需要在新旧两个 WordPress 实例上都安装它。

:::tip 登录管理员面板
要以管理员身份登录 WordPress，打开浏览器，访问你的网站，在网址后面加上 `/wp-admin`（例如 `[your_website].com/wp-admin`），然后访问这个地址。你会被重定向到 WordPress 管理登录页面，使用旧主机的 WordPress 管理员账号登录即可。

![](https://screensaver01.zap-hosting.com/index.php/s/zwzRyGJwEJMNPGQ/preview)
:::

登录后，在 WordPress 面板左侧找到 **插件** 分类，点击 **安装插件**，在搜索栏输入 **Migrate Guru**。

搜索结果出现后，点击 **安装**，然后点击 **启用**。确保在新旧两个 WordPress 实例上都完成这一步。

启用后，会弹出一个页面，要求你填写邮箱地址并同意条款，按提示完成即可。

![](https://screensaver01.zap-hosting.com/index.php/s/SXYGfpWJTwNyYjJ/preview)

## 第三步：获取迁移密钥

插件安装完成后，你需要在 **新** 的 ZAP-Hosting WordPress 实例中找到 **迁移密钥**。

在 WordPress 面板左侧找到 **Migrate Guru**，进入后复制这个密钥，下一步会用到。

![](https://screensaver01.zap-hosting.com/index.php/s/g3X9fMrqoWyfwtN/preview)

:::tip 备份准备
为了安全起见，建议你在通过插件开始迁移前，先备份旧的 WordPress 实例。虽然迁移过程不会丢失数据，但备份总是保险的。
:::

## 第四步：开始迁移

回到你 **旧** WordPress 实例的管理面板，进入 **Migrate Guru**，点击 **Migrate** 按钮，然后选择列表中的 **Other Hosts**。

![](https://screensaver01.zap-hosting.com/index.php/s/x6ctdxnL2mdpTt5/preview)

粘贴刚才从新 ZAP-Hosting WordPress 实例复制的迁移密钥，点击 **Migrate** 开始迁移。

:::warning
务必从你的 **新** ZAP-Hosting WordPress 管理面板复制迁移密钥，并粘贴到你的 **旧** WordPress 管理面板。如果反过来操作，会导致数据被覆盖。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/7nEr2L48PKCDXrj/preview)

点击 **Migrate** 后，迁移会在几次验证后立即开始。

迁移过程会在后台运行，不会造成网站停机，通常几分钟内完成。具体时间取决于你网站的规模。完成后会显示成功页面。

![](https://screensaver01.zap-hosting.com/index.php/s/YHSAwLkCjWBHsHT/preview)

:::tip
建议你在新 WordPress 实例上彻底测试网站，确保迁移完全成功。
:::

## 第五步：更新域名 DNS 设置

迁移完成后，最后一步是更新域名的 DNS 设置，将它指向新的 Webspace 实例。你需要把域名的 DNS 设置改成 ZAP Hosting Webspace 的 IP 地址，这样你的网站才能从 ZAP Hosting 服务器正常访问。

获取 Webspace IP 地址的方法：登录 ZAP-Hosting 网站，进入你的 Webspace 面板，找到 **DNS** 部分，就能看到 IP 地址。

![](https://screensaver01.zap-hosting.com/index.php/s/pd8iQdXsd8Kaobd/preview)

拿到 IP 地址后，如果你的域名不在 ZAP-Hosting 账户下，登录你的域名注册商网站。

找到 **DNS 设置** 或类似选项，替换所有指向旧主机的 **A 记录**，改成 ZAP Webspace 的 IP 地址。

全部替换完成后，你的域名就能正常指向 ZAP-Hosting 上的 WordPress 网站了。

:::info
请注意，DNS 记录更改可能需要最多 24 小时才能完全生效。通常很快，但有时会稍慢。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/P93CG3MLJc2DL3i/preview)

## 第六步：配置 SSL 证书

最后，建议你为新的 ZAP-Hosting Webspace 网站实例配置 SSL 证书。默认情况下，通过 Webspace 添加的域名是未加密的。

详细操作请参考我们的专门[创建 SSL 证书](webspace-plesk-ssl.md)指南。

## 总结

按照本指南操作，你应该已经成功将旧的 WordPress 网站迁移到了新的 ZAP-Hosting Webspace。建议你全面测试，确保迁移无误。

<InlineVoucher />