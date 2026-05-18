---
id: webspace-wordpress
title: "Webspace：安装 WordPress"
description: "了解如何在你的 Webspace 上安装 WordPress，高效创建和管理你的网站 → 立即了解更多"
sidebar_label: 安装
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

WordPress 是全球使用最广泛的免费内容管理系统。它由 Matthew Mullenweg 于 2003 年开始开发，最初作为博客软件，现作为开源项目持续发展。在本指南中，我们将讲解如何在我们的 Webspace 产品上安装这款软件。

![](https://screensaver01.zap-hosting.com/index.php/s/j3Ctfont64EnpcH/preview)

<InlineVoucher />

## 准备工作

在正式安装 WordPress 之前，需要做一些准备工作，包括获取软件、设置将要使用的数据库以及邮件服务器（邮箱地址）。



**软件**

软件可以从 WordPress 官方网站下载，下载链接在这里：[WordPress 下载](https://en.wordpress.org/download/)

![](https://screensaver01.zap-hosting.com/index.php/s/69YD2QWG8iHzzaa/preview)

下载的是一个压缩的 zip 文件，需要先在本地电脑解压。解压后你会看到一个名为 **wordpress** 的文件夹。里面的内容是必须的，需要通过 **FTP 或文件管理器** 上传到服务器。本例中演示的是通过 FTP 上传。你可以在 **网站与域名** 下的 **FTP 访问** 中创建 FTP 用户。



![](https://screensaver01.zap-hosting.com/index.php/s/nkKsBpyb6GM6Rkp/download/chrome_7Y5hmuXn5f.gif)



接着用刚创建的 FTP 账号连接到你的 Webspace，进入 **httpdocs** 目录，将软件文件上传到这里。



![](https://screensaver01.zap-hosting.com/index.php/s/c9JSb9XEjfwGwwQ/preview)



**数据库**

接下来需要创建数据库，后续网站的所有信息都会存储在这里。点击 **网站与域名**，然后进入 **数据库**，点击添加数据库，创建一个新的数据库：



![](https://screensaver01.zap-hosting.com/index.php/s/99BJeGCHjS9QHkz/download/chrome_Jzw3adOg7G.gif)



点击 **确定**，数据库就创建完成了。



**邮件服务器（邮箱地址）**

为了注册论坛账号，需要一个邮件服务器和邮箱地址，用于发送注册邮件。关于如何设置邮箱地址的详细说明请看这里：[发送邮件](webspace-plesk-sendmail.md)



## 安装

完成以上准备工作后，就可以开始正式安装 WordPress 了。现在在浏览器中打开你的网站，页面应该是这样的：

![](https://screensaver01.zap-hosting.com/index.php/s/8AcGsKyHpsSgKxL/preview)



点击 **开始吧！** 进入安装流程。首先需要配置数据库，这里填写之前创建的数据库信息。



![](https://screensaver01.zap-hosting.com/index.php/s/9jnjxz8B9TaeZSD/preview)



点击 **提交**，接着点击 **运行安装**。



![](https://screensaver01.zap-hosting.com/index.php/s/ZLZdC5NeWDoQBkr/preview)



WordPress 还需要一些额外信息，比如网站标题、用户名、密码和邮箱地址。



![](https://screensaver01.zap-hosting.com/index.php/s/WzckYZ47QJLd7yM/preview)



填写完所有字段后，点击 **安装 WordPress**。几秒钟内安装完成，登录界面会自动弹出。用刚创建的账号登录，之后就可以随心所欲地设置你的 WordPress 了！

![](https://screensaver01.zap-hosting.com/index.php/s/MnLRYMDJCXjJJ8i/download/chrome_4KNjihGpo0.gif)



## 总结

恭喜你，已经成功在你的 Webspace 上安装了 WordPress。如果你还有任何疑问或遇到问题，欢迎随时联系我们的支持团队，我们每天都在线帮你解决！

<InlineVoucher />