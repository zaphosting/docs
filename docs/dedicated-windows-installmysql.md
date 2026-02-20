---
id: dedicated-windows-installmysql
title: "Setup MySQL on a Windows Server - Deploy and Manage Reliable Databases"
description: "Learn how to set up and secure your own MySQL database server on a Windows Dedicated Server for reliable data management → Learn more now"
sidebar_label: Install MySQL
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A MySQL server is needed for various applications and can contain important data for example for a game server or a website. In the following we explain how to set up your own MySQL database server on your Windows Dedicated Server.



## Installation

At the beginning you connect via remote desktop connection to your server and download the latest version of MariaDB, which is used for the database server: [MariaDB Download](https://mariadb.org/download/?t=mariadb). 

Unpack the downloaded archive with WinRAR or 7Zip and start the installation file with a double click: 

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

Afterwards you navigate through the installation process by clicking on **Next** until you are asked to type in the root password:

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

There you can define the master password for the access to your database server. Please make sure that you use a secure password which no one else knows!

:::info
IMPORTANT! If you want to access the database externally via Navicat, HeidiSQL or any other tool you have to activate the option **Enable access from remote machins for root user**! For security reasons this is generally not recommended.
:::

Afterwards you click on **Next** until you reach the end of the installation, there you then have to click on **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

Your database server is now online and ready to use!

## Configuration of external access

If you have enabled "Enable access from remote machins for root user" during installation, you must also specify the MySQL port **3306** in the 
Windows-Firewall. To do so, open it and create a new rule there.
You can find the guide in how to forward ports in the firewall here:
[Port Forwarding (Firewall)](vserver-windows-port.md)

Now you can access your MySQL server externally!



## Conclusion

Congratulations, you have successfully installed the MySQL server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


