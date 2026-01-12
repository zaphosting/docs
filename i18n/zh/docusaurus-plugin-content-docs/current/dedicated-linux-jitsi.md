---
id: dedicated-linux-jitsi
title: "独立服务器：安装 Jitsi Meet"
description: "了解如何搭建并运行你自己的安全 Jitsi Meet 视频会议服务器，轻松实现私密在线会议 → 立即了解"
sidebar_label: 安装 Jitsi Meet
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Jitsi Meet 是一款开源的视频会议软件，你可以在自己的服务器上搭建专属的视频会议。Jitsi Meet 的最大优势是操作简单：你只需要一个浏览器（手机端使用 Jitsi App），且无需登录任何外部服务。每场视频会议都会生成一个独立的链接，方便加入。Jitsi Meet 非常适合即使是技术小白也能轻松使用的视频会议。

注意：默认情况下，任何访问 Jitsi Meet 服务器的人都可以在服务器上创建自己的视频会议。

## 在 Debian 服务器上安装 Jitsi Meet

下面我们演示如何在 Debian 服务器上安装 Jitsi Meet 服务器。Jitsi Meet 也支持其他 Linux 发行版，比如 Ubuntu，安装步骤大同小异。

### 准备工作

为了更好地使用 Jitsi Meet，建议使用你自己的域名来访问 Jitsi 服务器。最好为 Jitsi Meet 服务器创建一个专属子域名。这里以域名 meet.zap-testdomain.de 为例。

如果你使用的是 ZAP-Hosting 域名，需要在 DNS 管理中添加一条新记录。在“名称”字段填写子域名，在“值”字段填写服务器的 IP 地址。比如我们在“名称”填入“meet”，在“值”填入我们测试服务器的 IP：185.239.239.49（请替换为你自己的服务器 IP）。

通过 IP 地址也能访问 Jitsi Meet 服务器，但 SSL 证书必须绑定域名，否则浏览器会弹出安全警告。

子域名设置完成后（DNS 变更生效可能需要最长 24 小时），就可以开始准备服务器安装了。

通过 Putty 或 WinSCP 连接你的服务器。

继续之前，确保服务器已更新。必要时，命令前加 sudo 以获得超级用户权限（例如 sudo apt-get update）。

```
$	apt-get update
```
```
$	apt-get upgrade
```

如果服务器没有安装防火墙，可以安装一个，比如 UFW：
```
$	apt install ufw
```

在防火墙上开放以下端口：

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

启用防火墙：
```
$	ufw enable
```

查看防火墙状态：
```
$	ufw status
```

### 安装 Jitsi Meet

安装 Jitsi Meet 之前，先安装 gnupg 包：
```
$	apt install gnupg
```

安装完成后，下载 Jitsi 的 GPG 密钥并添加：
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

添加 Jitsi 软件源：
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

在编辑器中添加以下内容，保存并退出：
```
$	deb https://download.jitsi.org stable/
```

更新软件包列表并安装 Jitsi Meet：
```
$	apt update
```
```
$	apt install jitsi-meet
```

安装过程中会提示输入主机名，填写你为 Jitsi Meet 创建的子域名。以我们的测试服务器为例，填写：meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)

确认后会弹出新窗口，询问是否生成自签名 TLS 证书或使用已有证书，选择“生成新的自签名证书”：

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)

Jitsi Meet 安装完成，接下来获取正式的 TLS 证书。

安装 Certbot：
```
$	apt install certbot
```

运行 Let’s Encrypt 证书安装脚本：
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

执行过程中会要求输入一个邮箱地址，该邮箱会发送给 letsencrypt.org，输入后确认。

完成后，Jitsi Meet 应该已经在你的服务器上完全安装并运行。

测试是否安装成功，只需在浏览器地址栏输入你设置的子域名，例如：
```
https://meet.zap-testdomain.de
```

页面加载出 Jitsi Meet 界面后，就可以直接开始你的第一场视频会议啦。