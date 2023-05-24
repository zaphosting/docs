---
id: gameserver-databases-pma
title: PHPMyAdmin for servers of ZAP-Hosting
description: Information on how to use PHPMyAdmin with game servers from ZAP-Hosting to manage the databases - ZAP-Hosting.com documentation
sidebar_label: PHPMyAdmin
---


## What is phpMyAdmin?

By using phpMyAdmin, MySQL databases can be managed quickly and easily via a web interface. ZAP-Hosting offers MySQL databases inclusive with the gameserver products. These can be managed with phpMyAdmin as well as with external MySQL administration programs like Navicat or HeidiSQL. We also offer a guide for this which can be found [here](https://zap-hosting.com/guides/docs/de/gameserver_database_external_access/).

## Login to phpMyAdmin

First we go to the list of databases created for the game server. To do so, we open the menu item "Databases" in the left sidebar of the server under the tab "Tools".

![](https://screensaver01.zap-hosting.com/index.php/s/ay9X6jBsCRWYdDB/preview)

On this page all databases for this server are listed. The login to phpMyAdmin is quite easy because the login is done automatically by our system. You only have to click on the blue button "Manage".

:::info
If the login does not work automatically, then the login must be done manually with the corresponding user credentials. The information for this can be taken from the red marked area in this example.
:::


## Table-Tools

First of all only the start page of phpMyAdmin is displayed. To view and edit the tables of the respective database, the database must be opened: 

![image](https://user-images.githubusercontent.com/26007280/195382085-0e7ed60c-5bb7-49f3-8904-91c71a4f8dcf.png)

Now all tables of the database and some tools are listed with which you can perform certain actions, e.g. tables can be deleted by clicking the red "Delete" button.

![image](https://user-images.githubusercontent.com/26007280/195382142-ee26179b-15dd-4de8-b769-94502c5677d7.png)

To save time, actions can be performed on several tables at the same time. To do this, click once on the selection box on the outer left side and repeat this until all desired tables are selected. If the action should be applied to all tables in the database, you can also use the "Select All" button, which automatically selects each table. Afterwards, the desired action can be selected from the drop-down menu and executed by clicking "OK".

![image](https://user-images.githubusercontent.com/26007280/195382194-4f94bdd8-f547-4759-966c-52b04637e180.png)


## Modify table contents

Values in a table can be edited quickly and easily by double-clicking on the respective field. However, it must be ensured that the table is configured in such a way that editing is possible.This can be recognized by the three action buttons, which are shown in this case.

![image](https://user-images.githubusercontent.com/26007280/195382250-2344e855-3ab9-4b56-a1fd-4c6a40f600a3.png)


## Execute SQL commands

With phpMyAdmin it is also possible to execute normal SQL commands. To do this, the database must be selected first and then the menu option "SQL" must be called up at the top of the menu bar.

Once you have reached the command prompt, you can enter all desired SQL commands, which are then executed by clicking on "OK".

![image](https://user-images.githubusercontent.com/26007280/195382284-05c129f0-c8ce-48c5-9806-da474d4542a9.png)
