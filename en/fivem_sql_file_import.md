---
id: fivem_sql_file_import
title: FiveM Server: SQL file import
description: Information on how to import SQL files into the database of your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: SQL File Import
---

## Importing SQL files into the FiveM database

Many resources for FiveM require entries in the database of your FiveM server to function properly.
Therefore it is important to import the SQL files of resources correctly into your database to ensure that the resources can use the required 
create entries in the database of your FiveM Server.

> Not all resources need the import of a SQL file into the database to work! When you download a resource
However, in many cases, one or more files with the file extension **.sql** are enclosed there, these must then be imported into the database.

## Preparation and establishment of the database

In the settings of your FiveM Server the option **Configure database** must be activated at the beginning and 
the required resource **MySQL-Async** must be installed, so that a database can be created and used.

![](https://screensaver01.zap-hosting.com/index.php/s/teBeyodKMND5wLM/preview)


There you scroll down until you reach the point **Configure database** and make sure that this
is set to **yes, configure!** Then scroll to the bottom of the page and click **Save** at the bottom to apply the settings.

![](https://screensaver01.zap-hosting.com/index.php/s/fEJ7bLgjcZrLpjz/preview)


Now navigate to the menu item **Resources** and install the resource **MySQL-Async** there, if this has not already been done.

![](https://screensaver01.zap-hosting.com/index.php/s/WBME5WCnzQfozro/preview)


The database is now configured and ready for use.


## Preparing the SQL file

In this example the SQL file for the resource **es_extended** is imported into the database.
You open the folder of the resource and find a file with the file extension **.sql** there, if available.

![](https://puu.sh/Fo5LS/64e0758dc4.png)


> CAUTION: Before importing, open the .sql file with any editor and check if the following lines are present:


![](https://puu.sh/Fo5NT/727de4c92a.png)


If this is the case, first remove both lines, otherwise the SQL file cannot be imported.

**Declaration** The first line tells the database server that a new database with the name **essentialmode** should be created.
But we don't want this because your FiveM gameserver already has a database with another name and we want to use it.
The second line tells the database server to use the database with the name **essentialmode** for the import, but we don't want this either because the existing database is used for the import.


## Import the SQL file into the FiveM database

You can access the database of your Fivem game server via the menu item **Databases** on the left side of the menu.

![](https://screensaver01.zap-hosting.com/index.php/s/ACaAcEeBL8BAiLR/preview)


The database itself is managed by the tool **phpmyadmin**, which you open by clicking on the blue **Administer button**.
on the right side.

![](https://screensaver01.zap-hosting.com/index.php/s/zBXfzQnHRbCHW7G/preview)


Arrived in **phpmyadmin** you first select your database from the list on the left via left click. 

> The name of your database starts **ALWAYS** with zap!

![](https://screensaver01.zap-hosting.com/index.php/s/bqe6bbMT3rjMyCM/preview)

Your database is currently still empty, this will change shortly. Via the menu item **Import** in the upper part of **phpmyadmin**
you get to the import options.

![](https://screensaver01.zap-hosting.com/index.php/s/MDneBboX5qrBc3R/preview)


There you select now over the point **Select file** your SQL file, this may be maximally 2MB large!

**Tip: For larger SQL files you can use a so called **SQL splitter** to split a large SQL file into two parts
into several small SQL files. An example of a **SQL splitter** is as follows [Pinetools SQL-Splitter](https://pinetools.com/split-files).

After you have selected your SQL file, you only have to click on **Go** to start the import process.

![](https://screensaver01.zap-hosting.com/index.php/s/obzKcD7mMgrJSaF/preview)


If everything worked, you will see some success messages, like on the left side your newly created database contents.


![](https://screensaver01.zap-hosting.com/index.php/s/xgtJZit8CBAHZcy/preview)


You have now successfully imported your SQL file.

