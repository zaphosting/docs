---
id: webspace-mybb
title: "Webspace：安装 MyBB 论坛软件"
description: "了解如何搭建并启动属于你的 MyBB 论坛，打造活跃的线上社区 → 立即了解更多"
sidebar_label: 安装 MyBB
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

MyBB，前身为 MyBulletinBoard，是由 MyBB 团队开发的免费开源论坛软件。在本指南中，我们将讲解如何在我们的 Webspace 产品上安装这款论坛软件。

<InlineVoucher />

## 准备工作

在正式安装 MyBB 之前，需要先做一些准备工作，包括获取论坛软件、设置将要使用的数据库以及邮件服务器（邮箱地址）。

**软件**

论坛软件可以从 MyBB 官方网站下载，下载链接在这里：[MyBB](https://mybb.com/download/)

![Bildschirmfoto vom 2022-05-15 23-16-59](https://screensaver01.zap-hosting.com/index.php/s/s8kbtNFq6c79SoH/preview)

下载包是一个压缩文件，需要先在本地解压。解压后你会看到一个名为 **Upload** 的文件夹，里面的内容就是需要上传的文件，上传方式可以用 **FTP 或文件管理器**。在 **网站与域名** 下的 **FTP 访问** 中可以创建 FTP 用户。

打开 Plesk 面板的文件管理器后，进入 **httpdocs** 目录，将论坛软件的文件上传到这里。

![en-file](https://screensaver01.zap-hosting.com/index.php/s/x9oWpWCzrtB87e7/preview)

**数据库**

接下来需要创建数据库，用来存储论坛的所有信息。点击 **网站与域名**，然后选择 **数据库**，点击添加数据库，创建一个新的数据库：

![en-db](https://screensaver01.zap-hosting.com/index.php/s/f3dwjM5qxQQpzd6/preview)

点击 **确定**，数据库就创建完成了。

**邮件服务器（邮箱地址）**

为了让用户注册论坛账号时能收到注册邮件，需要配置一个邮件服务器和邮箱地址。关于如何设置邮箱地址的详细说明请看这里：[发送邮件](webspace-plesk-sendmail.md)

## 安装

准备工作完成后，就可以开始正式安装 MyBB 了。打开浏览器访问你的网站，页面应该是这样的：

![mybbinstall](https://screensaver01.zap-hosting.com/index.php/s/DzgRZMBFotTgsXZ/preview)

接下来需要在安装过程中配置 9 个部分。安装程序会检查所有前提条件是否满足，配置数据库和论坛软件等等。首先需要选择是否允许匿名统计数据发送给 MyBB，接着同意许可条款。

然后会显示系统需求的概览，包括 PHP 版本、内存等。我们的 Webspace 默认已经满足这些需求。

![install2](https://screensaver01.zap-hosting.com/index.php/s/fTJQGRADn5SF62C/preview)

如果有任何需求未满足，请联系支持。否则点击 **下一步** 继续安装。现在需要填写之前创建的数据库信息：

![](https://screensaver01.zap-hosting.com/index.php/s/GaRZiSizcYCMX3Z/preview)

数据库配置完成可能需要一点时间。接着会导入默认数据和主题，只需点击 **下一步**。

然后进入常规配置，这里可以设置网站名称、论坛名称、URL 等：

![install3](https://screensaver01.zap-hosting.com/index.php/s/asEA4KqtZGaN65A/preview)

最后，需要创建一个管理员账号，安装才能最终完成。

![Install4](https://screensaver01.zap-hosting.com/index.php/s/3T6NMLYyMnb4pja/preview)

完成以上步骤且配置无误后，你会看到如下提示，并能访问你的论坛：

![](https://screensaver01.zap-hosting.com/index.php/s/9N2jBCbzEYe2iyn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/g9iecMjiDX4GoqP/preview)

<InlineVoucher />