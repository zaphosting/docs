---
id: webspace-plesk-ftp
title: "Webspace：设置 Webspace 的 FTP 访问"
description: "了解如何管理多个 FTP 访问，实现多人协作项目的文件上传，并有效控制文件夹权限 → 立即了解"
sidebar_label: FTP 访问
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

FTP 是 *文件传输协议*，用于将文件从电脑上传到 Webspace。
每位客户都会自动获得所订购 Webspace 的 FTP 访问权限。

这里我们讲解如何设置更多的 FTP 访问。这在多人协作项目中非常实用，每个人都可以拥有自己的 FTP 账号。

这些账号只能访问 Webspace 所有者指定的文件夹。

<InlineVoucher />

## 设置 FTP 访问

在 Plesk 控制面板中，打开“**FTP 访问**”功能

:::info
在这个主页面你还能看到服务器的 IP 地址，后面测试时会用到。
:::

![Bildschirmfoto vom 2022-05-13 05-29-41](https://screensaver01.zap-hosting.com/index.php/s/FK3mBHJRqS3xdbB/preview)

这里会显示一个自动创建的 FTP 账号，是系统在 Webspace 订单完成后自动生成的。
要创建新账号，点击“**添加 FTP 账号**”按钮。

![Bildschirmfoto vom 2022-05-13 05-29-53](https://screensaver01.zap-hosting.com/index.php/s/L2Qa3p5nYHA3WGf/preview)

接着输入所需信息，填写完成后点击“**确定**”确认。

![Bildschirmfoto vom 2022-05-13 05-30-10](https://screensaver01.zap-hosting.com/index.php/s/xZM5rmy3QsPJN52/preview)

:::info
在“**基础目录**”可以选择该 FTP 账号可以访问的目录。如果允许该账号查看和编辑所有内容，则无需更改此项。
:::

## 测试 FTP 访问

测试 FTP 访问需要用到支持 FTP 的客户端程序。这里以 *Filezilla 客户端* 为例。
“**服务器**”填写主页面显示的服务器 IP。
“**用户名**”和“**密码**”填写刚刚创建的 FTP 账号信息。
默认端口是“**21**”。

## 用户账号已存在

当系统中已有相同的 FTP 账号名时，会出现此提示。
我们的 Webspace 是在多客户系统上创建的，如果已有客户使用了该账号名，其他客户就不能重复使用。
此时需要选择一个新的账号名。

<InlineVoucher />