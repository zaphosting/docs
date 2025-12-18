---
id: gameserver-databases-pma
title: 'Game server: PHPMyAdmin access'
description: "Discover how to efficiently manage MySQL databases with phpMyAdmin on ZAP-Hosting game servers for seamless database control → Learn more now"
sidebar_label: PHPMyAdmin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

By using phpMyAdmin, MySQL databases can be managed quickly and easily via a web interface. ZAP-Hosting offers MySQL databases inclusive with the game server products. These can be managed with phpMyAdmin as well as with external MySQL administration programs like Navicat or HeidiSQL. We also offer a guide for this which can be found [External database access](gameserver-database-external-access.md).

<InlineVoucher />

## Login to phpMyAdmin

First we go to the list of databases created for the game server. To do so, we open the menu item "Databases" in the left sidebar of the server under the tab "Tools".

![](https://screensaver01.zap-hosting.com/index.php/s/ay9X6jBsCRWYdDB/preview)

On this page all databases for this server are listed. The login to phpMyAdmin is quite easy because the login is done automatically by our system. You only have to click on the blue button "Manage".

:::info
If the login does not work automatically, then the login must be done manually with the corresponding user credentials. The information for this can be taken from the red marked area in this example.
:::


## Table-Tools

First of all only the start page of phpMyAdmin is displayed. To view and edit the tables of the respective database, the database must be opened: 

![](https://screensaver01.zap-hosting.com/index.php/s/DFTDGKm47ngaB9R/preview)

Now all tables of the database and some tools are listed with which you can perform certain actions, e.g. tables can be deleted by clicking the red "Delete" button.

![](https://screensaver01.zap-hosting.com/index.php/s/dkPqEj5xgQoHgHD/preview)

To save time, actions can be performed on several tables at the same time. To do this, click once on the selection box on the outer left side and repeat this until all desired tables are selected. If the action should be applied to all tables in the database, you can also use the "Select All" button, which automatically selects each table. Afterwards, the desired action can be selected from the drop-down menu and executed by clicking "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/Qip8TDLbeezT67F/preview)


## Modify table contents

Values in a table can be edited quickly and easily by double-clicking on the respective field. However, it must be ensured that the table is configured in such a way that editing is possible.This can be recognized by the three action buttons, which are shown in this case.

![](https://screensaver01.zap-hosting.com/index.php/s/H7twJagPyR7L66w/preview)


## Execute SQL commands

With phpMyAdmin it is also possible to execute normal SQL commands. To do this, the database must be selected first and then the menu option "SQL" must be called up at the top of the menu bar.

Once you have reached the command prompt, you can enter all desired SQL commands, which are then executed by clicking on "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/jJcmLGcXAfxQgkH/preview)

<InlineVoucher />
