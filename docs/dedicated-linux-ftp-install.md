---
id: dedicated-linux-ftp-install
title: "Setup ProFTPD on a Linux Server - Host a Secure FTP Service"
description: "Discover how to set up and manage a secure FTP server on Linux with FileZilla Server to streamline file transfers and user access → Learn more now"
sidebar_label: Install FTP server
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The **FTP (File Transfer Protocol)** is a network protocol used to transfer files over a TCP/IP network. The protocol was developed to allow the easy exchange of files between systems. With the **FileZilla Server** it is possible to set up such a FTP server on a Linux operating system. The FileZilla Server is easy to install and configure, and offers numerous features such as the ability to set up user accounts, manage access rights and transfer files. In this guide, we will explore the process of installing and configuring the **FileZilla Server** service on a Linux server.



## How do I install the FTP server to add a user? 

To add a FTP user, you first need to install the FTP server. To do this, connect to the server once via SSH(Putty).

To install the FTP server now, enter the following **apt-get install proftpd**. You have to confirm the request with a **Y** and enter:

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

Now we still have to adjust the config. For this we enter the following **nano /etc/proftpd/proftpd.conf** and confirm. Afterwards the config file is opened in the Nanoeditor:

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

The following entries must be added: 

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

Now the FTP server must be restarted so that the changes are applied. This can be done with the following command: **service proftpd restart**

## How do I add an FTP user? 

To create the new FTP user, we first have to create an FTP group. We do this with the command **addgroup ftpuser**. This will look like this: 

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

Now we can add our first FTP user with the commands: **adduser benutzerftp -shell /bin/false -home /var/www** and then **adduser benutzerftp ftpuser**.

Now we are asked to set a password: 

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

Then we have to confirm that the entries are correct: 

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

The last step is to assign the new user to the group via **adduser benutzerftp ftpuser** :

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

Now we can connect with our set information:

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)



