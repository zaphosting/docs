---
id: dedicated-linux-jitsi
title: "在 Linux 服务器上搭建 Jitsi Meet - 自建专属视频会议平台"
description: "教你如何搭建并运行自己的安全 Jitsi Meet 视频会议服务器，轻松实现私密在线会议 → 立即了解"
sidebar_label: 安装 Jitsi Meet
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Jitsi Meet 是一款开源的视频会议软件，可以让你在自己的服务器上搭建专属的视频会议。Jitsi Meet 最大的优势就是操作简单：你只需要一个浏览器（手机端则用 Jitsi App），而且不会登录任何外部服务。每场视频会议都有独立的链接，方便加入。Jitsi Meet 非常适合即使是技术小白也能轻松使用的视频会议。

注意：默认情况下，任何访问 Jitsi Meet 服务器的人都可以在服务器上创建自己的视频会议。



## 在 Debian 服务器上安装 Jitsi Meet

下面我们演示如何在 Debian 服务器上安装 Jitsi Meet。其实 Jitsi Meet 也支持其他 Linux 发行版，比如 Ubuntu，安装步骤非常类似。

### 准备工作

为了更好地使用 Jitsi Meet，建议你用自己的域名访问 Jitsi 服务器。最好为 Jitsi Meet 服务器创建一个子域名。举个例子，我们用域名 meet.zap-testdomain.de。

如果你用的是 ZAP-Hosting 的域名，需要在 DNS 管理里新增一条记录。在“名称”字段填入子域名，在“值”字段填入你的服务器 IP。比如我们这里“名称”填 meet，“值”填我们测试服务器的 IP：185.239.239.49（请替换成你自己的服务器 IP，不要用示例 IP）

你可以通过 IP 地址访问 Jitsi Meet 服务器，但 SSL 证书必须绑定域名，否则浏览器会弹出安全警告。

子域名设置好后（DNS 生效可能需要最长 24 小时），就可以准备服务器安装了。

用 Putty 或 WinSCP 连接服务器。

继续之前，确保服务器已更新。如果需要超级用户权限，命令前加 sudo（比如 sudo apt-get update）。

```
$	apt-get update
```
```
$	apt-get upgrade
```

如果服务器没装防火墙，可以装个，比如 UFW：
```
$	apt install ufw
```

防火墙规则设置如下：

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

查看状态：
```
$	ufw status
```

### 安装 Jitsi Meet

安装 Jitsi Meet 之前，先装 gnupg 包：
```
$	apt install gnupg
```

装好后，下载 Jitsi 的 GPG 密钥并添加：
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

在编辑器里添加这一行，保存并退出：
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

安装过程中会让你输入主机名，填你刚才创建的子域名，比如我们的测试服务器是：meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)


确认“Ok”。接着会弹出窗口问你是否生成自签名 TLS 证书或使用已有证书，选择“Generate a new self-signed certificate”：

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)


Jitsi Meet 安装完成，接下来获取 TLS 证书。

安装 Certbot：
```
$	apt apt install certbot
```

运行 Let’s Encrypt 证书安装脚本：
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

执行时会让你输入一个邮箱地址，用于注册 letsencrypt.org，输入后确认即可。


完成后，Jitsi Meet 就完全安装并运行在你的服务器上了。测试是否安装成功，只需在浏览器地址栏输入你设置的子域名，比如：
```
https://meet.zap-testdomain.de
```

页面加载出 Jitsi Meet，就可以直接开始你的第一场视频会议啦。