---
id: gameserver-ftpaccess
title: "游戏服务器：通过 FTP 访问管理服务器文件"
description: "了解如何通过 FTP 安全访问和管理你的服务器文件，实现无缝文件传输和服务器控制 → 立即了解更多"
sidebar_label: FTP 访问
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

FTP（文件传输协议）是一种设计用于通过 TCP/IP 网络传输文件的网络协议。该协议旨在实现系统间的便捷文件交换。通过 FTP 协议，你可以访问和管理服务器文件，无论是上传下载文件，还是直接编辑文件，都能轻松搞定。

<InlineVoucher />

## 准备工作

要使用 FTP 协议管理文件，你需要一个合适的 FTP 客户端。市面上有很多 FTP 客户端可供选择，但其中最知名且稳定的两个是 **FileZilla** 和 **WinSCP**。

| FTP 客户端 | 下载链接                                                     |
| ---------- | ------------------------------------------------------------ |
| FileZilla  | [官方网站](https://filezilla-project.org/download.php?platform=win64) |
| WinSCP     | [官方网站](https://winscp.net/eng/downloads.php)              |



## 获取 FTP 详情

要通过 FTP 访问你的游戏服务器，你需要对应的登录凭据。这些信息可以在你的游戏服务器管理后台的 **FTP 浏览器** 部分找到。

只需输入 **IP 地址（FTP 服务器）**、**用户名** 和 **密码** 即可建立连接。这些凭据都列在 **FTP 浏览器** 页面。端口号固定为 **21**，通常会自动设置。

![img](https://screensaver01.zap-hosting.com/index.php/s/6FTFDwyBQZ792Fd/download)



## FileZilla

### 连接

你可以通过快速连接（Quickconnect）功能，或者通过菜单 **文件 -> 站点管理器** 来建立连接。在这里输入你的服务器 **FTP 凭据**，然后点击 **连接**。

![](https://screensaver01.zap-hosting.com/index.php/s/wxSSFoW3GTXJdLK/preview)

:::info
访问服务器文件前，请务必先停止服务器并更新 FTP 权限。否则可能会遇到“权限被拒绝”或“访问被拒绝”等错误提示。
:::

### 文件管理

如前所述，你可以用 FTP 客户端上传、下载和编辑服务器上的文件。FTP 客户端界面分为两部分，左侧代表你的客户端（电脑），右侧代表服务器。你可以在本地和服务器两个目录间自由浏览。

管理操作通过右键点击对应的文件或文件夹完成。根据需求，你可以上传、下载、编辑、重命名或移动文件和文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/qizoBD5JnHBRkJc/preview)

:::info
如果你有多个游戏服务器，务必先切换到正确的游戏服务器目录。
:::



### 常见问题及解决方案

#### “530 登录失败” 错误
连接时出现此错误，说明输入的凭据不正确。请检查所有字段是否填写完整且正确。

#### “传输连接中断” 错误
连接或传输时出现此错误，可以尝试将传输模式从 *被动模式* 切换为 *主动模式*。下面的步骤展示了如何在 FileZilla 中更改此设置。




## WinSCP

### 连接
你可以通过快速连接（Quickconnect）或顶部的 **新建会话** 来建立连接。在这里输入你的服务器 FTP 凭据，然后点击 **连接**。

![](https://screensaver01.zap-hosting.com/index.php/s/KNnkJsnETTFqZpD/preview)


:::info
访问服务器文件前，请务必先停止服务器并更新 FTP 权限。否则可能会遇到“权限被拒绝”或“访问被拒绝”等错误提示。
:::


### 文件管理

如前所述，你可以用 FTP 客户端上传、下载和编辑服务器上的文件。FTP 客户端界面分为两部分，左侧代表你的客户端（电脑），右侧代表服务器。你可以在本地和服务器两个目录间自由浏览。

管理操作通过右键点击对应的文件或文件夹完成。根据需求，你可以上传、下载、编辑、重命名或移动文件和文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/dAYiFwWQAipgTqW/preview)


### 常见问题及解决方案

#### “530 登录失败” 错误
连接时出现此错误，说明输入的凭据不正确。请检查所有字段是否填写完整且正确。

<InlineVoucher />