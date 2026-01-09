---
id: fivem-sql-file-import
title: "FiveM: SQL file import"
description: "Understand how to properly import SQL files to ensure FiveM resources function correctly with your database → Learn more now"
sidebar_label: SQL File Import
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Many resources for FiveM will require a database to function correctly. Therefore, it is important that you import the SQL files provided with your resources correctly into your database to ensure that the resources can create entries into your database and function as expected.

:::info
Not all resources require a database to function! When you download a resource, check the description or documentation to figure out whether you need to import an SQL file.
:::

In many cases, one or more files with the file extension **.sql** will be enclosed within the download files for the resource. These must be imported into the database.

<InlineVoucher />

## Preparing the SQL file

In this example, we will be importing the SQL file for **ESX**. You should prepare the SQL file for the resource that you want to import it for. You can do this by opening the folder of your resource which requires a database and finding a file with the **.sql** file extension.

![](https://screensaver01.zap-hosting.com/index.php/s/3YMrCZ29pc87aW8/preview)

:::info
Before proceeding with the import, you should open the .sql file with any text editor and check if the following lines are present:

![](https://screensaver01.zap-hosting.com/index.php/s/6CdTLq28sijcWEe/preview)

If this exists within your .sql file, ensure to remove the `CREATE` and `USE` database lines and save the file, otherwise the SQL file cannot be imported. 

This is because the first line declares that a new database should be created, but you do not need this as your RedM game server already has a database with another name. The second line declares that the database with the name `essentialmode` should be used to import into, but once again you do not need this as there is an existing database that you will use for importing.
:::

## Import the SQL file into your database

You should now access the **Database** section on your game server webinterface.

![](https://screensaver01.zap-hosting.com/index.php/s/jk6BBm4d5dDtNcd/preview)

On the database page, you will be provided with a range of different functions to manage your database including the options to backup, create, manage and more. We will focus on accessing your database, however take a look at our other database guides if you want more information: [External database access](gameserver-database-external-access.md).

You should press the blue redirect icon which will take you to the tool **phpmyadmin** where you can easily access your database. Login with the credentials that were provided on the database page if you are prompted.

Once you are on the page, select your database from the list on the left. The name of your database will **always** start with `zap` as the prefix.

![](https://screensaver01.zap-hosting.com/index.php/s/ZmEFxQzkEqHeptJ/preview)

At the moment, your database will be empty if you have not used it before. Now you will finally import the .sql file.

Press the **Import** button on the top navigation bar on your phpmyadmin to open up the import menu.

![](https://screensaver01.zap-hosting.com/index.php/s/oqmNDs2k9NqcNrc/preview)

Next, you should press the **Browse...** button which will open up a file explorer window. Select the **.sql** file that you originally wanted to import.

![](https://screensaver01.zap-hosting.com/index.php/s/cfTYGYfFGMEyQbA/preview)

:::note
The maximum file size is 2MB. If you have a larger SQL file than this, you should use a SQL splitter to split a large SQL file into smaller parts. We recommend the tool [Pinetools SQL-Splitter](https://pinetools.com/split-files) which does this for you. Once done, you can import the SQL files as normal.
:::

Finally, press the **Import** button at the bottom of the page to start the import process. If everything worked correctly, you will see a success message and a new table will be created within your database which you can view on the left-hand side.

![](https://screensaver01.zap-hosting.com/index.php/s/nxXqsoxWGeprkz3/preview)

## Conclusion

Importing an SQL File for your FiveM server is necessary to use a lot of resources without any problems. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
