---
id: fivem-sql-file-import
title: "FiveM: SQL file import"
description: Information on how to import SQL files into the database of your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: SQL File Import
---

## Introduction

Many resources for FiveM will require a database to function correctly. Therefore, it is important that you import the SQL files provided with your resources correctly into your database to ensure that the resources can create entries into your database and function as expected.

:::info
Not all resources require a database to function! When you download a resource, check the description or documentation to figure out whether you need to import an SQL file.
:::

In many cases, one or more files with the file extension **.sql** will be enclosed within the download files for the resource. These must be imported into the database.

## Preparation of your database

To begin, you must access the **Settings** section on your game server webinterface.

![image](https://github.com/zaphosting/docs/assets/42719082/9947f778-770c-48ae-89c3-04f455862515)

You must active the **Configure database** section. By default, this should be enabled. However, check this by scrolling down, finding the correct subsection and setting this to `Yes, configure automatically!` if it's not set yet. Now scroll to the bottom of the page and ensure that you press the **Save** button.

![image](https://github.com/zaphosting/docs/assets/42719082/8540c281-1ded-45c9-8a56-e0e429445b62)

:::important
Ensure that you scroll to the bottom of the page and press the **Save** button, otherwise your changes might not be saved.
:::

Now, you must navigate to the **Resources** section on your game server webinterface. Here, you must install the `MySQL-Async` resource if it's not installed yet. This must be installed in order to allow the server to communicate with your database.

![image](https://github.com/zaphosting/docs/assets/42719082/7fd2f70a-bd2e-4235-adcf-8801c6b1388b)

You have now configured your database to work with your game server and it is ready to be used.

## Preparing the SQL file

In this example, we will be importing the SQL file for **ESX**. You should prepare the SQL file for the resource that you want to import it for. You can do this by opening the folder of your resource which requires a database and finding a file with the **.sql** file extension.

![image](https://github.com/zaphosting/docs/assets/42719082/3d2b4cd2-d98e-4b25-b606-9f451164edc9)

:::info
Before proceeding with the import, you should open the .sql file with any text editor and check if the following lines are present:

![image](https://github.com/zaphosting/docs/assets/42719082/dfc43c55-9918-45e7-99eb-1f70193c0be1)

If this exists within your .sql file, ensure to remove the `CREATE` and `USE` database lines and save the file, otherwise the SQL file cannot be imported. 

This is because the first line declares that a new database should be created, but you do not need this as your RedM game server already has a database with another name. The second line declares that the database with the name `essentialmode` should be used to import into, but once again you do not need this as there is an existing database that you will use for importing.
:::

## Import the SQL file into your database

You should now access the **Database** section on your game server webinterface.

![image](https://github.com/zaphosting/docs/assets/42719082/83ba522a-929e-4a90-8c9e-0badc2d779d4)

On the database page, you will be provided with a range of different functions to manage your database including the options to backup, create, manage and more. We will focus on accessing your database, however take a look at our other database guides if you want more information: [Setting up external DB access](gameserver-database-external-access.md).

You should press the blue redirect icon which will take you to the tool **phpmyadmin** where you can easily access your database. Login with the credentials that were provided on the database page if you are prompted.

Once you are on the page, select your database from the list on the left. The name of your database will **always** start with `zap` as the prefix.

![image](https://github.com/zaphosting/docs/assets/42719082/30fa6041-b94e-4ac8-a3cd-286cca226dba)

At the moment, your database will be empty if you have not used it before. Now you will finally import the .sql file.

Press the **Import** button on the top navigation bar on your phpmyadmin to open up the import menu.

![image](https://github.com/zaphosting/docs/assets/42719082/c0ca30f0-c520-4a71-843a-296064ba5761)

Next, you should press the **Browse...** button which will open up a file explorer window. Select the **.sql** file that you originally wanted to import.

![image](https://github.com/zaphosting/docs/assets/42719082/83ba22fb-fc6c-4dbb-9c47-ad42d3a9fa66)

:::note
The maximum file size is 2MB. If you have a larger SQL file than this, you should use a SQL splitter to split a large SQL file into smaller parts. We recommend the tool [Pinetools SQL-Splitter](https://pinetools.com/split-files) which does this for you. Once done, you can import the SQL files as normal.
:::

Finally, press the **Import** button at the bottom of the page to start the import process. If everything worked correctly, you will see a success message and a new table will be created within your database which you can view on the left-hand side.

![image](https://github.com/zaphosting/docs/assets/42719082/5fef5d58-78f1-4b59-bc3e-1e0af2ff981b)

You have successfully imported an SQL file to your game server's database!
