---
id: vserver_windows_installmysql
title: VPS: Installing MySQL Server on Windows Server
description: Information on how to install and set up a MySQL server on your Windows server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: MySQL Server Installation
---

## MySQL Server on Windows

A MySQL server is needed for various applications and can contain important data for example for a game server or a website. In the following we explain how to set up your own MySQL database server on your Windows VPS or Rootserver.



## Begin of the installation process

At the beginning you connect via remote desktop connection to your server and download the latest version of MariaDB, which is used for the database server: [MariaDB Download](https://native-network.net/downloads/download/895/). 

Unpack the downloaded archive with WinRAR or 7Zip and start the installation file with a double click: 

![](https://screensaver01.zap-hosting.com/index.php/s/AP5CLB42cSkyDtW/preview)

Afterwards you navigate through the installation process by clicking on **Next** until you are asked to type in the root password:

![](https://screensaver01.zap-hosting.com/index.php/s/wd6pAmZ2g5nFDqx/preview)

There you can define the master password for the access to your database server. Please make sure that you use a secure password which no one else knows!

> IMPORTANT! If you want to access the database externally via Navicat, HeidiSQL or any other tool you have to activate the option **Enable access from remote machins for root user**! For security reasons this is generally not recommended.

Afterwards you click on **Next** until you reach the end of the installation, there you then have to click on **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/TM4Mkr6FftcDcH8/preview)

Your database server is now online and ready to use!

## Open the MySQL ports for an external connection

If you have enabled "Enable access from remote machins for root user" during installation, you must also specify the MySQL port **3306** in the 
Windows-Firewall. To do so, open it and create a new rule there which you add as follows:

![](https://screensaver01.zap-hosting.com/index.php/s/2bjZ7FRfZLytkYR/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/wRq6FsrBfoFe6pA/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/MDydornj7T7fcxE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/StD3CdZ5WSD9n3M/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/CDqwNXzywgHq3Yc/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/DDeLHr5aCNL9a4X/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/c6zQATN7m9nTMaE/preview)

Now you can access your MySQL server externally!
