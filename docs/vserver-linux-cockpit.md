---
id: vserver-linux-cockpit
title: "Setup Cockpit on a Linux Server - Manage Your Server via Web Interface"
description: "Discover how to manage Linux servers efficiently with Cockpit’s web interface for beginners and experts alike → Learn more now"
sidebar_label: Install Cockpit
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Cockpit is a web interface to manage one or more Linux servers (cluster). From simple log outputs to managing the raid, Cockpit offers many features. 
Cockpit is suitable for beginners but also for advanced users who want to see/manage everything important in a short time. In addition, it can be accessed from almost any device.
The project website can be reached at https://cockpit-project.org/. 

:::info
This guide explains the installation for Debian (from Buster)/ for Ubuntu (from Bionic Beaver). The installation is also available on the project page for fedora, Red Hat, fedora CoreOS, CentOS, Clear Linux, archlinux and Tumbleweed.   
:::

<InlineVoucher />

## Installation

First, the server must be updated:
```
// Update
sudo apt update; sudo apt upgrade -y
```
Afterwards, the installation can take place: 
```
// Cockpit installation
sudo apt install cockpit -y
```
Once the installation is complete, the cockpit panel can be reached via IP:9090. 
The login takes place with the normal login data of the server/user. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## Conclusion

Congratulations, you have successfully installed and configured Cockpit! If you have any further questions or problems, please contact our support team, who are available to help you every day! 

<InlineVoucher />
