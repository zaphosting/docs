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

![](https://user-images.githubusercontent.com/61839701/166200227-8ca5c169-1cc6-404b-9522-15781eb22a84.png)

Afterwards you navigate through the installation process by clicking on **Next** until you are asked to type in the root password:

![](https://user-images.githubusercontent.com/61839701/166200257-5676d728-1c2f-476a-b943-afcf570b8614.png)

There you can define the master password for the access to your database server. Please make sure that you use a secure password which no one else knows!

> IMPORTANT! If you want to access the database externally via Navicat, HeidiSQL or any other tool you have to activate the option **Enable access from remote machins for root user**! For security reasons this is generally not recommended.

Afterwards you click on **Next** until you reach the end of the installation, there you then have to click on **Install**:

![](https://user-images.githubusercontent.com/61839701/166200280-68ab2ccd-225b-424e-b85b-11946c949ae6.png)

Your database server is now online and ready to use!

## Open the MySQL ports for an external connection

If you have enabled "Enable access from remote machins for root user" during installation, you must also specify the MySQL port **3306** in the 
Windows-Firewall. To do so, open it and create a new rule there.
You can find the guide in how to forward ports in the firewall here:
[Windows Port Forwarding](https://zap-hosting.com/guides/docs/en/vserver_windows_port/)

Now you can access your MySQL server externally!
