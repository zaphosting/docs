---
id: vserver-windows-installmysql
title: "VPS: Installation of MySQL"
description: Information on how to install and set up a MySQL server on your Windows server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install MySQL
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

A MySQL server is needed for various applications and can contain important data for example for a game server or a website. In the following we explain how to set up your own MySQL database server on your Windows VPS or Root server.
<InlineVoucher />

## Installation

At the beginning you connect via remote desktop connection to your server and download the latest version of MariaDB, which is used for the database server: [MariaDB Download](https://mariadb.org/download/?t=mariadb). 

Unpack the downloaded archive with WinRAR or 7Zip and start the installation file with a double click: 

![](https://screensaver01.zap-hosting.com/index.php/s/aPZn6jmLK5NZybW/preview)

Afterwards you navigate through the installation process by clicking on **Next** until you are asked to type in the root password:

![](https://screensaver01.zap-hosting.com/index.php/s/gMrr8aHEM2eAG22/preview)

There you can define the master password for the access to your database server. Please make sure that you use a secure password which no one else knows!

:::info
IMPORTANT! If you want to access the database externally via Navicat, HeidiSQL or any other tool you have to activate the option **Enable access from remote machins for root user**! For security reasons this is generally not recommended.
:::

Afterwards you click on **Next** until you reach the end of the installation, there you then have to click on **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/qYT3rrDrcXRb4gc/preview)

Your database server is now online and ready to use!

## Configuration of external access

If you have enabled "Enable access from remote machins for root user" during installation, you must also specify the MySQL port **3306** in the 
Windows-Firewall. To do so, open it and create a new rule there.
You can find the guide in how to forward ports in the firewall here:
[Port Forwarding (Firewall)](vserver-windows-port.md)

Now you can access your MySQL server externally!



## Conclusion

Congratulations, you have successfully installed and configurated the MySQL server on your VPS! If you have any further questions or problems, please contact our support team, who are available to help you every day! 