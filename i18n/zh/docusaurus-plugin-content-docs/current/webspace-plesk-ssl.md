---
id: webspace-plesk-ssl
title: "Webspace：在 Plesk 中创建 SSL 证书"
description: "学习如何在 Plesk 中为你的网站配置 SSL 证书，启用 HTTPS 实现加密连接。"
sidebar_label: 创建 SSL 证书
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## 介绍

SSL 证书会加密你的网站与访问者之间的连接。一旦启用 HTTPS，浏览器就会建立安全连接，并在地址栏显示锁形图标。这不仅保护敏感数据，还能提升信任度，防止浏览器将你的网站标记为不安全。

<InlineVoucher />

## 保护你的主域名

当你在 Plesk 中首次创建域名时，它默认通过 HTTP 访问，连接未加密。在 Plesk 面板中，你会看到还没有分配任何证书。如果此时用浏览器打开该域名，通常会被标记为不安全：

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

要启用加密，进入 Plesk 面板中的该域名，导航到 **SSL/TLS 证书**。对应菜单会打开：

![img](https://screensaver01.zap-hosting.com/index.php/s/8rSr7Jt3DsjDzBY/download)

在这里，你可以申请免费的 Let's Encrypt 证书。申请过程中需要填写有效的邮箱地址，并选择要保护的域名。大多数情况下，根域名和 www 子域名都会被选中，前提是你的 DNS 配置中存在 www 记录：

![img](https://screensaver01.zap-hosting.com/index.php/s/LTFN73ekPjtikwp/preview)

点击 **免费获取** 确认申请后，Plesk 会自动与 Let's Encrypt 通信并签发证书。证书成功创建后，建议在主机设置中启用从 HTTP 到 HTTPS 的永久重定向，强制使用 HTTPS：

![img](https://screensaver01.zap-hosting.com/index.php/s/BN7AMzG6MyMKb38/preview)

启用后，所有访问者都会自动跳转到加密的 HTTPS 版本。你可以通过浏览器用 https 打开域名来验证安装是否成功。



## 使用泛域名证书保护所有子域名

如果你使用或计划使用多个子域名，泛域名证书是更高效的方案。它不仅保护主域名，还涵盖所有现有及未来的子域名。再次打开 **SSL/TLS 证书** 菜单：

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

选择续订或申请 Let's Encrypt 证书，勾选保护泛域名的选项：

![img](https://screensaver01.zap-hosting.com/index.php/s/ZMcdJk9wCzifBmq/preview)

确认申请后，Plesk 会显示一个蓝色信息框，里面包含必须创建的 DNS TXT 记录：

![img](https://screensaver01.zap-hosting.com/index.php/s/wnbNfKeTMsCdsy9/preview)

你需要将该 TXT 记录准确添加到你的域名 DNS 区域中。它用于确认域名所有权，帮助 Let's Encrypt 验证申请。DNS 记录示例大致如下：

![img](https://screensaver01.zap-hosting.com/index.php/s/tDtDaERR7twzaMr/preview)

:::warning DNS 传播延迟
DNS 传播可能需要最长 24 小时，TXT 记录才能在全球范围内生效。在此期间，验证可能失败，因为部分 DNS 服务器仍返回旧数据。如果遇到这种情况，请耐心等待记录完全传播后再尝试验证。
:::



为了确认 TXT 记录已正确传播并公开可见，你可以用外部 DNS 查询工具，比如 MXToolbox SuperTool 来验证：

https://mxtoolbox.com/SuperTool.aspx

打开网站，选择 **TXT Lookup** 选项。输入 Plesk 提供的完整主机名，通常格式为 `_acme-challenge.yourdomain.com`，然后开始查询。该工具会查询公共 DNS 服务器并显示当前可见的 TXT 记录。

如果显示的验证值与 Plesk 中完全一致，说明 DNS 记录已成功传播，Let's Encrypt 可以验证域名所有权。如果没有结果或值不符，说明 DNS 传播仍在进行中。此时请等待一段时间后再次查询，直到正确记录在全球范围内可见。

![img](https://screensaver01.zap-hosting.com/index.php/s/iFP5P8SY6oSXQBW/download)

记录可见后，返回 Plesk 再次触发验证。如果成功，泛域名证书将被签发并显示为已保护。从此以后，任何新建的子域名都会自动获得保护。



## 总结

恭喜你！你的网站现在已经成功启用了 SSL 加密。服务器与访问者之间传输的所有数据都被保护，浏览器也会将你的域名识别为可信，HTTPS 会自动强制启用。

如果你有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />