---
id: vserver-windows-ftpserver
title: "VPS：FTP 安装指南"
description: "了解如何在 Windows 上设置和管理 FileZilla FTP 服务器，实现安全文件传输和用户访问控制 → 立即学习"
sidebar_label: 安装 FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**FTP（文件传输协议）** 是一种用于通过 TCP/IP 网络传输文件的网络协议。该协议旨在实现系统间文件的轻松交换。

借助 **FileZilla Server**，你可以在 Windows 操作系统上搭建 FTP 服务器。FileZilla Server 安装配置简单，功能丰富，比如支持创建用户账号、管理访问权限和文件传输等。
<InlineVoucher />


## 准备工作

### 下载

搭建 FTP 服务器需要相应的软件。FileZilla Server 是 Windows 服务器操作系统上的一个可选方案。你可以在这里下载：[FileZilla server](https://filezilla-project.org/download.php?type=server)。



### 安装

下载好安装文件后，双击运行它。你会看到如下窗口： ![](https://screensaver01.zap-hosting.com/index.php/s/Qi97fYbyoKDdsi3/preview)



这里可以选择要安装的组件。默认选中的组件已经足够，直接点击 **Next**，然后选择安装路径：

![](https://screensaver01.zap-hosting.com/index.php/s/fsMiKt9Zjas4Rme/preview)

本例中，FileZilla Server 将安装在 **C:\Program Files (x86)\FileZilla Server**。你也可以自定义路径。选好路径后，需要选择 FTP 服务器的安装和启动方式，还可以设置端口号，并设置管理员密码。



![](https://screensaver01.zap-hosting.com/index.php/s/gCoGAcGnTtLQ2P6/preview)

接着点击 **Next**，然后在下一步点击 **Install** 开始安装。安装完成后，FileZilla FTP 服务器的管理界面会自动打开。点击 **Connect to FileZilla FTP Server** 按钮。

弹出的窗口中会显示 Host、Port 和 Password 字段。Host 和 Port 保持默认，输入你刚才设置的管理员密码。然后点击 **Ok** 建立连接。



## 配置

### 创建用户

要通过 FTP 连接你的服务器，必须先创建用户。  
点击上方菜单的 **Server**，然后选择 **Configure**。

![](https://screensaver01.zap-hosting.com/index.php/s/D7KHSrkGZEErEcH/preview)

在 Users 菜单下点击 **Add** 添加新用户：

![](https://screensaver01.zap-hosting.com/index.php/s/mtdi4oRmR4ZDzyq/preview)

本例中用户名为 **YourUserName**，你可以自由设置自己的用户名。



### 密码与权限

用户创建后，需要配置访问权限。在 **General** 分类下的 **Credentials** 中启用用户并设置密码。强烈建议启用密码保护，选择 **Require a password to log in** 并设置你的密码。

![](https://screensaver01.zap-hosting.com/index.php/s/gwkkexqXgmfXc2q/preview)

接下来，为确保用户拥有合适的权限，点击挂载点（mount points）中的 **Add**，指定用户可访问的目录。需要设置虚拟路径和实际路径。本例中将 C 盘挂载到 \。

![](https://screensaver01.zap-hosting.com/index.php/s/LE46PteX7eAftjQ/preview)

右侧的 **Permissions** 选项允许你设置该路径的访问权限。若想让用户既能读取又能修改文件，建议选择 **Read+Write**。

::: danger
出于安全考虑，建议只给用户开放特定文件夹的访问权限。
:::

完成后点击 **Apply** 应用并保存更改。



## Windows 防火墙例外设置

为了让 FTP 服务器能正常连接，需要在 Windows 防火墙中允许 FileZilla Server 通过。打开控制面板，进入 **控制面板\系统和安全\Windows Defender 防火墙**，点击 **允许应用或功能通过 Windows Defender 防火墙**。

在弹出的窗口中找到并勾选要允许的程序：

![](https://screensaver01.zap-hosting.com/index.php/s/aorQ7Y8gQJPSE8e/preview)

本例中路径为 **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**：

![](https://screensaver01.zap-hosting.com/index.php/s/wx7p5GykbQfx8B6/preview)

确认后点击 **OK** 关闭窗口，现在你就可以连接你的 FTP 服务器了。


## 总结

恭喜你，FTP 服务器已成功安装并配置完成！如果有任何疑问或遇到问题，欢迎随时联系在线客服，我们每天都在这里帮你！ 

<InlineVoucher />