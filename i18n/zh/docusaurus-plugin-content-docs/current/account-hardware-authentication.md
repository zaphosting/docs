---
id: account-hardware-authentication
title: "硬件认证（Passkey）"
description: "了解如何通过 Passkey 提升账户安全，有效保护您的个人信息 → 立即了解更多"
sidebar_label: 硬件认证
---

import SearchableAccordion from '@site/src/components/SearchableAccordion/SearchableAccordion';
import items from '@site/data/faqs/account-hardware-authentication.json';

## 介绍

硬件认证使用 Passkey 是一种现代且抗钓鱼的用户账户安全方式。它不依赖传统密码，而是使用一对加密密钥。私钥安全地存储在您的设备上，且绝不会离开设备。认证过程在本地完成，通常通过指纹、面部识别等生物识别技术，或者设备 PIN 码来验证身份。

## 需求

要使用 Passkey 硬件认证，您的设备必须满足一定条件。您需要一台兼容的设备，比如智能手机、平板或电脑。操作系统和浏览器必须支持 Passkey 或 WebAuthn。设备上必须设置屏幕锁，比如指纹、Face ID 或本地 PIN。

## 启用认证

要启用硬件认证，打开客户区的个人资料设置，进入安全设置（个人资料设置 → 安全）。在这里，您可以配置账户的安全选项。选择硬件认证以继续设置。

选择该选项后，会弹出一个窗口。在窗口中点击“添加认证器”按钮，开始配置流程。

![img](https://screensaver01.zap-hosting.com/index.php/s/oSEpGD5emG9ToxW/download)

接下来会创建一个用于 ZAP-Hosting 的 Passkey 登录。在此步骤中，您需要设置一个恢复 PIN。该 PIN 用于在主要认证方式暂时不可用时恢复访问，请务必妥善保存。

![img](https://screensaver01.zap-hosting.com/index.php/s/tiPnCDTAkieNHNP/download)

确认以上步骤并成功设置 Passkey 硬件认证后，系统会自动登出您一次。这是正常的安全措施，确保新配置的认证方式生效。

下次登录时，输入用户名和密码后，会看到硬件认证选项。选择该选项，并在设备上确认认证请求，即可完成登录。

![img](https://screensaver01.zap-hosting.com/index.php/s/FEpZkCCLmi9FmLw/download)

## 关闭认证

如果想关闭双因素认证，进入 **个人资料设置 → 安全**。只要还能登录，随时可以在安全设置中移除已配置的认证器。

![img](https://screensaver01.zap-hosting.com/index.php/s/Htb3Td7NfbQeCg3/preview)

## 常见问题

如果你对硬件认证还有疑问，或者想了解它对账户的具体影响，下面的信息能帮你解答常见问题，并说明该功能在 ZAP-Hosting 的实际应用。

<SearchableAccordion items={items} locale="en" />