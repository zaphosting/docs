
---
id: vserver_windows_installmysql
title: MySQL Server Installation
sidebar_label: MySQL Server Installation
---

## MySQL Server on Windows

A MySQL server is needed for various applications and can contain important data for example for a game server or a website. In the following we explain how to set up your own MySQL database server on your Windows VPS or Rootserver.



## Begin of the installation process

At the beginning you connect via remote desktop connection to your server and download the latest version of MariaDB, which is used for the database server: [MariaDB Download](https://native-network.net/downloads/download/895/). 

Unpack the downloaded archive with WinRAR or 7Zip and start the installation file with a double click: 

![](https://screensaver01.zap-hosting.com/index.php/s/rZ5bspccMfJQSRJ/preview)

Afterwards you navigate through the installation process by clicking on **Next** until you are asked to type in the root password:

![](https://screensaver01.zap-hosting.com/index.php/s/Kk2N3ppEEzScnmC/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/ZPRYf5A452oQfFA/preview)

There you can define the master password for the access to your database server. Please make sure that you use a secure password which no one else knows!

> IMPORTANT! If you want to access the database externally via Navicat, HeidiSQL or any other tool you have to activate the option **Enable access from remote machins for root user**! For security reasons this is generally not recommended.

![](https://screensaver01.zap-hosting.com/index.php/s/5DckzRf9mwiSFyX/preview)

Afterwards you click on **Next** until you reach the end of the installation, there you then have to click on **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/f6z9jsEmzWNkpcQ/preview)

Your database server is now online and ready to use!

## Open the MySQL ports for an external connection

If you have enabled "Enable access from remote machins for root user" during installation, you must also specify the MySQL port **3306** in the 
Windows-Firewall. To do so, open it and create a new rule there which you add as follows:

![](https://screensaver01.zap-hosting.com/index.php/s/iXGXjN4n8aLJC85/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/EAFCAnSWxLzFa6b/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/8MCrX4Xqf4KTa7f/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/DcDkjR5zW6HAB53/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/PPgJbFTap4BoXGK/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/MtKgLoqWgRxWnAJ/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/wnzr2RDTJbwPaWA/preview)

Now you can access your MySQL server externally!
