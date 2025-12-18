---
id: gameserver-database-external-access
title: 'Game server: External database access'
description: "Discover how to manage ZAP-Hosting MySQL databases for game servers using tools like Navicat or HeidiSQL → Learn more now"
sidebar_label: External database access
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

ZAP-Hosting offers MySQL databases inclusive for the game server products. These can be managed either internally via phpMyAdmin or externally via MySQL administration tools such as Navicat or HeidiSQL. 

The user credentials to access the database are required for this purpose. Those can be found in the game server administration under databases. For this you need the information regarding **server/IP**, **database**, **user**, **password** and the default port **3306**:

![](https://screensaver01.zap-hosting.com/index.php/s/GLG56HQ737rNC7R/preview)

<InlineVoucher />

## Preparation

First of all we need a Software, in this example we're showing [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) or [HeidiSQL](https://www.heidisql.com/download.php) Afterwards the downloaded file must be executed and the setup procedure has to be followed. When this step is completed, the program can be started and the connection to the database configured. 

## HeidiSQL

In order for the connection to be established in HeidiSQL, we create a new connection with "New".

![](https://screensaver01.zap-hosting.com/index.php/s/CgwFCeHErLAokHo/preview)

At Hostname / IP, we enter the name of your database, in our example "mysql-mariadb-5-101.zap-hosting.com".
User name and password are also to be taken from the data, port remains on 3306.

After that we just click "Open"


## Navicat

In order to establish the connection in Navicat we create a new connection. Under **Connection** we select **MySQL**. Afterwards another popup window opens where the database information must be inserted.

![](https://screensaver01.zap-hosting.com/index.php/s/rFBDYidqnBc4TZB/preview)


The **Connection Name** is only used for the overview of the databases and can therefore be chosen as desired. All other information is taken from the interface as described above. Afterwards we click on **OK** and the setup is finished. The connection can then be established on the left in the database overview. To do so, double click on your database or right click once and choose "Open connection":

![](https://screensaver01.zap-hosting.com/index.php/s/Gy7jjBDHiR5n5gn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WyqzoLaEP6yQn85/preview)


Afterwards the database opens with all existing database tables. There your can now modify or manage your database similar to phpMyAdmin by click as well as by using SQL commands.
![](https://screensaver01.zap-hosting.com/index.php/s/FxDrm2K3f7YwLqS/preview)





## Conclusion

You have successfully established a connection to your database and can now manage it. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
