---
id: vserver-ssh-default
title: "VPS：在个人资料中管理默认 SSH 密钥"
description: "了解如何自动设置 SSH 密钥，实现更快的服务器访问和更简便的产品安装 → 立即了解更多"
sidebar_label: 默认 SSH 密钥
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
我们在 ZAP-Hosting 网站界面新增了一个超赞功能——可以直接在你的 ZAP-Hosting 账户中添加默认 SSH 密钥。这个功能的最大好处是，个人资料页里设置的 SSH 密钥会在首次产品设置或操作系统重装时自动应用，帮你省去手动配置 SSH 密钥的麻烦，节省大量时间。

<InlineVoucher />

## 需求
要使用这个功能，你必须先生成一个 SSH 密钥。如果你已经有了 SSH 密钥，可以直接跳到下一节。

如果还没生成 SSH 密钥，我们建议你前往你的 vServer 网站界面中的 **信息->访问与安全**（Information->Access & Security）部分。

![](https://screensaver01.zap-hosting.com/index.php/s/N9FxTpdfibwCWSD/preview)

这里你会看到一个绿色的 **生成 SSH 密钥** 按钮。点击它后，你的 SSH 私钥会自动下载到你的电脑。这把私钥就是你连接服务器时用的钥匙。

![](https://screensaver01.zap-hosting.com/index.php/s/tdYfxJYNBFC2R9k/preview)

接下来请保存弹窗中显示的公钥，这就是你在个人资料中创建 SSH 密钥时需要提交的内容。

![](https://screensaver01.zap-hosting.com/index.php/s/Tc9MEGamAC9dDF3/preview)

准备好后，继续下一节。

## 管理个人资料中的 SSH 密钥
管理你账户里的默认 SSH 密钥超简单，打开你的 **[ZAP-Hosting 个人资料页面](https://zap-hosting.com/en/customer/home/profile/)**，往下滚动找到 **标准 SSH 密钥**（Standard SSH Keys）部分。

![](https://screensaver01.zap-hosting.com/index.php/s/QzefcYZWPGz3rJr/preview)

### 添加新密钥
要添加密钥，先点击绿色的加号图标打开创建窗口。先给你的 SSH 密钥取个合适的名字。

然后把你的 SSH 公钥粘贴到第二个输入框里。你的 SSH 密钥应该是 OpenSSH 格式，以 `ssh-rsa` 开头，末尾带有后缀。确认无误后，点击绿色的 **保存** 按钮添加密钥。

![](https://screensaver01.zap-hosting.com/index.php/s/CBTcDSiBLfNYi2R/preview)

:::tip
一定要提交你的 **SSH 公钥**，而不是私钥。SSH 私钥是用来登录时通过公钥认证的，千万别上传私钥哦。
:::

恭喜你，默认 SSH 密钥已成功添加到你的 ZAP-Hosting 账户。

### 编辑或删除密钥
要编辑密钥，点击蓝色的眼睛图标，会弹出编辑窗口。你可以查看当前密钥详情，直接修改并保存。

同理，点击红色垃圾桶图标即可删除对应密钥。

![](https://screensaver01.zap-hosting.com/index.php/s/56mPcDswpZBaHms/preview)

<InlineVoucher />