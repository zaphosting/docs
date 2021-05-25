---
id: gameserver_database_external_access
title: Gameserver: External database access
description: Information on how to access the databases of game servers from ZAP-Hosting with external administration programs - ZAP-Hosting.com documentation
sidebar_label: External database access
---

## External database access

ZAP-Hosting offers MySQL databases inclusive for the gameserver products. These can be managed either internally via phpMyAdmin or externally via MySQL administration tools such as Navicat or HeidiSQL. In the following the setup and administration of the database is explained by using Navicat. 

![img](https://screensaver01.zap-hosting.com/index.php/s/XXsfnZaeRaXR2XP/preview)


### Preparation

First of all the Navicat software is necessary. In addition to the Premium version, there is also a Lite version available. It can be downloaded here: [Download](https://www.chip.de/downloads/Navicat-Lite_70358373.html) Afterwards the downloaded file must be executed and the setup procedure has to be followed. When this step is completed, the program can be started and the connection to the database configurated. 


### Establishment

The user credentials to access the database are required for this purpose. Those can be found in the game server administration under databases. For this you need the information regarding **server/IP**, **database**, **user**, **password** and the default port **3306**:

![img](https://screensaver01.zap-hosting.com/index.php/s/H4KKNyEssgjBPes/preview)

In order to establish the connection in Navicat we create a new connection. Under **Connection** we select **MySQL**. Afterwards another popup window opens where the database information must be inserted.

![img](https://screensaver01.zap-hosting.com/index.php/s/xJQ5Kcj6a6N6DMk/preview)


The **Connection Name** is only used for the overview of the databases and can therefore be chosen as desired. All other information is taken from the interface as described above. Afterwards we click on **OK** and the setup is finished. The connection can then be established on the left in the database overview. To do so, double click on your database or right click once and choose "Open connection":

![img](https://screensaver01.zap-hosting.com/index.php/s/t8AXi7XD6THnoxm/preview)

Afterwards the database opens with all existing database tables. There your can now modify or manage your database similar to phpMyAdmin by click as well as by using SQL commands.
![img](https://screensaver01.zap-hosting.com/index.php/s/D8s8x368txeraPN/preview)
