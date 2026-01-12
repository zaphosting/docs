---
id: vserver-linux-xrdp
title: "VPS：安装 xRDP（远程桌面）"
description: "了解如何在 Ubuntu 和 Debian 服务器上设置远程桌面访问，实现更轻松的管理和控制 → 立即了解"
sidebar_label: 安装 xRDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

在 Linux 上，通常默认通过 SSH 控制台来管理服务器。但有时候，使用类似 Windows 的远程桌面连接会更方便。  
大多数 Linux 发行版都支持后期安装远程桌面功能。本指南以 Ubuntu 和 Debian 为例进行说明。  
<InlineVoucher />

:::info
重要提示：操作系统至少需要使用 Ubuntu 18.04.X LTS（Bionic Beaver）或 Debian 10（Buster）。推荐使用更新版本。  
:::

## 安装 xRDP

首先，更新服务器系统： 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

更新完成后，安装必要的软件包： 
```
// Debian
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// Ubuntu
sudo apt install ubuntu-desktop -y
```

接着安装 xRDP： 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

安装完成后，检查服务状态应显示“active”： 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/P3G4ztqbYjZZMGR/preview)

如果状态正常，还需要创建一个用户。然后重启 xRDP 服务： 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

配置完成后，你就可以通过远程桌面连接到服务器的 root 或对应用户账号了。  
默认端口是：3389

## 连接方式

你可以使用任何支持 RDP 的工具，通过 IP:端口 连接。  
连接时会提示输入登录信息： 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/GHzrDz6Ct3TGDN2/preview)

登录成功后即可看到桌面界面。  
Ubuntu 和 Debian 的界面略有不同：

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/tgkAEyQxXnrk3Qr/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/gtxmQcPACEZJce7/preview)


## 总结

恭喜你，xRDP 已成功安装！如果还有任何疑问或问题，欢迎随时联系我们的支持团队，我们每天都在线为你服务！  

<InlineVoucher />