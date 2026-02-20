---
id: dedicated-linux-xrdp
title: "Setup xRDP on a Linux Server - Enable Remote Desktop Access"
description: "Discover how to set up remote desktop access on Ubuntu and Debian servers for easier management and control → Learn more now"
sidebar_label: Install xRDP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

On Linux, there is usually a default SSH console to manage the server. In some cases it may be easier to use a remote desktop connection, similar to Windows. 
A post-installation is possible for most Linux distros. In this guide this is explained for Ubuntu and Debian. 

:::info
Important: At least Ubuntu 18.04.X LTS (Bionic Beaver) or Debian 10 (Buster) must be used as OS. Newer versions are recommended. 
:::



## Installing xRDP

First, the server should be updated: 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

After the update, the necessary packages will be installed: 
```
// Debian
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// Ubuntu
sudo apt install ubuntu-desktop -y
```

Then xRDP can be installed: 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

After installation, the status should return "active": 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/wdKep3W6GHWekp3/preview)

If the status is okay, a user still needs to be created. Then the xRDP service has to be restarted: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

When finishing the configuration, you can connect to the root or the respective user data of the server via Remote Desktop. 
The default port is: 3389

## Connection 

The connection can be made via any RDP tool, connected with IP:PORT. 
When connecting you will be asked for the login data: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/btRPMG73cT6ysyL/preview)

After successful login you see the desktop. 
With Ubuntu it looks a bit different than with Debian:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/Co6TgmH3yoad6HP/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/riHNCEEyKcoLHDy/preview)


