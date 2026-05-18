---
id: dedicated-windows-ftpserver
title: "在 Windows 服务器上设置 FTP - 搭建安全的文件传输服务"
description: "了解如何在 Windows 上设置和管理 FileZilla FTP 服务器，实现安全文件传输和用户访问控制 → 立即了解"
sidebar_label: 安装 FTP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**FTP（文件传输协议）** 是一种用于通过 TCP/IP 网络传输文件的网络协议。该协议旨在实现系统间文件的便捷交换。

借助 **FileZilla Server**，你可以在 Windows 操作系统上搭建 FTP 服务器。FileZilla Server 安装配置简单，功能丰富，比如支持创建用户账号、管理访问权限和传输文件等。



## 准备工作

### 下载

搭建 FTP 服务器需要相应的软件。FileZilla Server 是 Windows 服务器操作系统上的一个可选方案。你可以在这里下载：[FileZilla server](https://filezilla-project.org/download.php?type=server)。



### 安装

下载好安装文件后，双击运行它。你会看到如下窗口： ![](https://screensaver01.zap-hosting.com/index.php/s/a2DEpaR5jD28X23/preview)

这里可以选择要安装的组件，不过默认勾选的就足够了，直接点击 **Next**，然后选择安装路径：

![](https://screensaver01.zap-hosting.com/index.php/s/cN7K9Cte9tXFrF2/preview)

本例中，FileZilla Server 会安装在 **C:\Program Files (x86)\FileZilla Server**，你也可以自定义路径。接下来需要选择 FTP 服务器的安装和启动方式，还能设置端口，并设置管理员密码。



![](https://screensaver01.zap-hosting.com/index.php/s/WopFXcW3teFAyJK/preview)

之后继续点击 **Next**，最后点击 **Install** 开始安装。FileZilla FTP 服务器的管理界面会自动打开，点击 **Connect to FileZilla FTP Server**。

弹出的窗口中会显示 Host、Port 和 Password 字段。Host 和 Port 保持默认，输入你刚才设置的管理员密码，点击 **Ok** 建立连接。



## 配置

### 创建用户

要通过 FTP 连接服务器，必须先创建用户。  
点击上方菜单的 **Server**，然后选择 **Configure**。

![](https://screensaver01.zap-hosting.com/index.php/s/C5WLC8Lp8CjTjQg/preview)

在 Users 菜单下点击 **Add** 添加新用户：

![](https://screensaver01.zap-hosting.com/index.php/s/dbCS5yJfwqry8Dq/preview)

本例中用户名为 **YourUserName**，你可以自由设置自己的用户名。



### 密码与权限

用户创建后，需要配置访问权限。在 **General** 分类下的 **Credentials** 中启用用户并设置密码。强烈建议启用密码保护，选择 **Require a password to log in** 并设置密码。

![](https://screensaver01.zap-hosting.com/index.php/s/z78wpcFbYEAJYeB/preview)

接着，为确保用户拥有合适的权限，需要指定用户可访问的目录，点击挂载点的 **Add**。需要填写虚拟路径和本地路径。本例中将 C 盘挂载为 \。

![](https://screensaver01.zap-hosting.com/index.php/s/iqQrjGByHpkBcJF/preview)

右侧的 **Permissions** 选项允许你设置该路径的访问权限。若想让用户既能读取又能修改文件，建议选择 **Read+Write**。

::: danger
出于安全考虑，建议只给用户开放特定文件夹的访问权限。
:::

完成后点击 **Apply** 应用并保存设置。



## Windows 防火墙例外设置

为了让 FTP 服务器能被访问，需要在 Windows 防火墙中允许 FileZilla Server 通过。打开控制面板，进入 **控制面板\系统和安全\Windows Defender 防火墙**，点击 **允许应用或功能通过 Windows Defender 防火墙**。

在弹出的窗口中选择允许的应用：

![](https://screensaver01.zap-hosting.com/index.php/s/xHwQzCKokHTn424/preview)

本例中路径为 **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**：

![](https://screensaver01.zap-hosting.com/index.php/s/Laz3HFb7GrLBY9w/preview)

确认后点击 **OK** 关闭窗口，现在你就可以连接你的 FTP 服务器了。



## 总结

恭喜你，FTP 服务器已成功安装！如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂
