---
id: gameserver-database-manage-sqlfiles
title: "Game server: Import or Export an SQL file"
description: "Discover how to manage your game server database by importing and exporting SQL files efficiently using phpMyAdmin → Learn more now"
sidebar_label: Import/Export SQL Files
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A wide variety of games for your game server utilise databases to store long-term data and function correctly. Some games, resources or mods may provide you with an `.sql` file which is used to import the appropriate tables and data into your own database. Exporting your database may also prove useful for transferring your data between systems or to simply back up your files manually. In this guide, we will explore the process of importing and exporting SQL files into or from your game server's database through the use of the phpMyAdmin interface.

<InlineVoucher />

## Preparation

To begin, you must access your game server's MySQL database which can be done directly through the web interface. You should also have `.sql` file(s) ready that need importing to your database.

:::tip
Certain SQL files may force you to use a specific database name, which can conflict with the ZAP ID database name that you are automatically provided with and cause errors.

You can identify such a file by searching for a `USE xxx` or `CREATE DATABASE` statement when opening up the file in a text editor. If this is the case, you should remove both of the statements and save the file before importing.

![](https://screensaver01.zap-hosting.com/index.php/s/DRoDqGngrS7qbQW/preview)
:::

Head over to the **Tools->Databases** section and use the blue link button to open the phpMyAdmin interface. Use the credentials on your web interface page to login.

![](https://screensaver01.zap-hosting.com/index.php/s/8ix7q4tHmPnyYSy/preview)

To learn more about phpMyAdmin, we recommend reading our [Database Access](gameserver-databases-pma.md) guide, which covers the interface in more depth.

## Importing SQL File

Now that you are logged in to the phpMyAdmin interface, select the main database, which should be your ZAP ID. On the top navigation bar, find the **Import** section.

On this page, use the **Browse...** button to open up a file explorer window. Through this, find the SQL file that you wish to import into your database and open it.

:::note
The maximum file size for your SQL file is 2MB. If your file is larger, we recommend using an SQL splitter such as the [Pinetools SQL-Splitter](https://pinetools.com/split-files) which will split it into smaller files. You can then import these separately.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/TgZZBaSJJmXraZc/preview)

You can also adjust some additional settings if you wish. For most users, the default values should be acceptable therefore simply scroll down and use the **Import** button.

The SQL file should now be imported successfully and you should see this reflected in the database through changes such as new tables, data and more.

## Exporting SQL File

Exporting your database is another essential function which can be useful for easily transferring databases or backing up. Once again, select the main database which should be your ZAP ID and find the **Export** section on the top navigation bar.

By default, the **Quick** export method is selected, which will automatically export all of your tables and data. If you wish to customize which tables and data is specifically exported, select the **Custom** option and adjust the relevant parameters to your likings. Once ready, simply use the **Export** button to download an SQL file locally to your system.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa2HakWpYGpfzfA/preview)



## Conclusion 

You have successfully exported your database into an SQL file allowing you to easily import it in the future. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
