---
id: vserver-linux-ftp-install
title: "VPS: Installation of a FTP server"
description: Information on how to install and set up an FTP server on your VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install FTP server
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The **FTP (File Transfer Protocol)** is a network protocol used to transfer files over a TCP/IP network. The protocol was developed to allow the easy exchange of files between systems. With the **FileZilla Server** it is possible to set up such a FTP server on a Linux operating system. The FileZilla Server is easy to install and configure, and offers numerous features such as the ability to set up user accounts, manage access rights and transfer files. In this guide, we will explore the process of installing and configuring the **FileZilla Server** service on a Linux server.

<InlineVoucher />

## How do I install the FTP server to add a user? 

To add a FTP user, you first need to install the FTP server. To do this, connect to the server once via SSH(Putty).

To install the FTP server now, enter the following **apt-get install proftpd**. You have to confirm the request with a **Y** and enter:

![](https://screensaver01.zap-hosting.com/index.php/s/seKtY9GBELG78in/preview)

Now we still have to adjust the config. For this we enter the following **nano /etc/proftpd/proftpd.conf** and confirm. Afterwards the config file is opened in the Nanoeditor:

![](https://screensaver01.zap-hosting.com/index.php/s/J5kS2bJFjDyLpCZ/preview)

The following entries must be added: 

![](https://screensaver01.zap-hosting.com/index.php/s/TZoDZpiBQi5Yb5L/preview)

Now the FTP server must be restarted so that the changes are applied. This can be done with the following command: **service proftpd restart**

## How do I add an FTP user? 

To create the new FTP user, we first have to create an FTP group. We do this with the command **addgroup ftpuser**. This will look like this: 

![](https://screensaver01.zap-hosting.com/index.php/s/M2jnE6mWqQLKkme/preview)

Now we can add our first FTP user with the commands: **adduser benutzerftp -shell /bin/false -home /var/www** and then **adduser benutzerftp ftpuser**.

Now we are asked to set a password: 

![](https://screensaver01.zap-hosting.com/index.php/s/LKsops7sKTr2jXt/preview)

Then we have to confirm that the entries are correct: 

![](https://screensaver01.zap-hosting.com/index.php/s/LWdMS2j7PnRQwnd/preview)

The last step is to assign the new user to the group via **adduser benutzerftp ftpuser** :

![](https://screensaver01.zap-hosting.com/index.php/s/66fqTTttpM5BPkg/preview)

Now we can connect with our set information:

![](https://screensaver01.zap-hosting.com/index.php/s/ftccknJBSoC2pCH/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/zRsRHA3NWNCwcsj/preview)



## Conclusion

Congratulations, you have successfully installed and configured FTP! If you have any further questions or problems, please contact our support team, who are available to help you every day! 