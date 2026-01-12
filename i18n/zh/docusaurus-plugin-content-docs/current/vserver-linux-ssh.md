---
id: vserver-linux-ssh
title: "VPS：通过 SSH 初次访问"
description: "探索流行的 SSH 客户端来通过控制台管理 Linux 服务器，并了解如何使用 Putty 安全连接 → 立即了解更多"
sidebar_label: 初次访问（SSH）
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

Linux 服务器产品默认不包含图形化管理界面，因此连接和管理都是通过 SSH 客户端（控制台）完成的。市面上有很多 SSH 客户端，下面是一些知名且常用的 SSH 客户端一览。



| SSH 客户端 | 支持的操作系统 | 是否开源 |                           下载                           |
| :--------: | :------------: | :------: | :----------------------------------------------------: |
|   Putty    |   Windows, Linux   |   是    |               [点击](https://www.putty.org/)                |
|   Kitty    |   Windows, Linux   |   是    |        [点击](http://www.9bis.net/kitty/)                   |
| MobaXterm  |   Windows, Linux   |   是    |           [点击](https://mobaxterm.mobatek.net/)            |
| SecureCRT  | Windows, Linux, Mac |   否    | [点击](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
| mRemoteNG  |      Windows      |   是    |           [点击](https://mremoteng.org/download)            |


<InlineVoucher />

## IP 地址 & 访问

下面以 Putty SSH 客户端为例说明连接方法。在配置窗口中，**主机名**处输入服务器的 IP 地址和 SSH 端口 22。之后点击 **Open** 按钮即可开始连接。



![](https://screensaver01.zap-hosting.com/index.php/s/wyfbo8dENbX3T9E/preview)



:::info
默认情况下，SSH 登录密码功能是关闭的。如果你想用密码登录，需要先在 **访问与安全** 里开启该选项。
:::



![](https://screensaver01.zap-hosting.com/index.php/s/N7ZL8MZfe55T7zR/preview)



:::info
首次连接服务器时，Putty 会弹出安全提示，告知尚未缓存主机密钥到注册表。如果你不想每次都看到这个提示，可以点击 **Yes** 确认。
:::

 

这时会打开 SSH 控制台，提示输入 **用户名** 和 **密码**。用户名是 "**root**"。密码可以在网页面板的 "**访问与安全**" 中查看或设置。



![](https://screensaver01.zap-hosting.com/index.php/s/X8ykHmkYFa826aM/preview)





## 通过 SSH 进行管理

为了更好地使用 SSH 客户端，掌握基本命令非常重要。下面是所有相关命令及其含义的简要概览：


### 账户管理

| 命令    |                说明                |            语法            |
| :-----: | :-------------------------------: | :------------------------: |
| useradd |          创建新用户          | useradd [选项] [参数] |
| usermod |      编辑已有用户       | usermod [选项] [参数] |
| userdel |        删除已有用户        | userdel [选项] [参数] |
| passwd  | 修改已有用户密码 |      passwd [选项]       |



### 系统管理

| 命令    |                         说明                         | 语法                                       |
| :-----: | :--------------------------------------------------: | ------------------------------------------ |
|   top   | 负载、进程及其他信息总览（类似 Windows 任务管理器） | top                                        |
|   df    |            显示存储分区使用情况            | df -h                                      |
|   du    |          显示目录的存储占用           | du -sh *                                   |
|  free   | 系统内存使用情况，区分 RAM 和 SWAP 空间 | free                                       |
|  kill   | 结束指定进程 ID（PID）的进程   | kill [ID]                                  |
| killall |        结束所有指定名称的进程        | killall [名称]                             |
|   mv    |       移动文件或目录到其他位置        | mv 源路径 目标路径                         |
|  mkdir  |                    创建新目录                    | mkdir 目录名                              |
| service |    启动、停止、重启服务及查看状态     | service 服务名 start/stop/restart/status  |
| reboot  |                      重启系统                        | reboot                                     |



### 文件管理

| 命令   | 说明 | 语法
| ------ | ------------------------------------------ | ---------------------------------------- |
| ls | 显示目录中的文件和文件夹 | ls |
| cd | 切换目录 | cd [选项] 目录 |
| cp | 复制文件或目录 | cp [选项] 源 目标 |
| mv | 移动文件或目录 | mv [选项] 源 目标 |
| mkdir | 创建新目录 | mkdir [选项] 目录名 |
| rmdir | 删除已有目录 | rmdir [选项] 目录 |
| find | 浏览文件系统 | find [选项] [目录] [操作] |
| grep | 搜索文本文件 | grep [选项] 搜索模式 [文件] |



### 网络管理

| 命令   | 说明 | 语法
| -------- | ------------------------------------------------- | ----------------------------------------- |
| ip | 查询和配置网络接口 | ip [选项] 对象 [命令 [参数]] |
| netstat | 查询网络接口状态 | netstat [选项] |
| nslookup | 查询 DNS 信息 | nslookup |
| ping | 检测网络连接 | ping [选项] 目标 |


<InlineVoucher />