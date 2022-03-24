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

![image](https://user-images.githubusercontent.com/13604413/159168765-ce6eb80a-71eb-4e3a-8834-ed0e50da1ebe.png)


There you scroll down until you reach the point **Configure database** and make sure that this
is set to **yes, configure!** Then scroll to the bottom of the page and click **Save** at the bottom to apply the settings.

![image](https://user-images.githubusercontent.com/13604413/159168774-3302004e-4b6f-4c58-809b-c40cb2a14901.png)


Now navigate to the menu item **Resources** and install the resource **MySQL-Async** there, if this has not already been done.

![image](https://user-images.githubusercontent.com/13604413/159168777-0d4102db-8568-4751-a0b0-a4329ddc9a2d.png)


The database is now configured and ready for use.


## Preparing the SQL file

In this example the SQL file for the resource **es_extended** is imported into the database.
You open the folder of the resource and find a file with the file extension **.sql** there, if available.

![image](https://user-images.githubusercontent.com/13604413/159168782-da143379-084a-47d7-b466-8c7dbd22e1d8.png)


> CAUTION: Before importing, open the .sql file with any editor and check if the following lines are present:


![image](https://user-images.githubusercontent.com/13604413/159168784-570f0855-173d-4e1f-8a05-5a17e06d1daf.png)


If this is the case, first remove both lines, otherwise the SQL file cannot be imported.

**Declaration** The first line tells the database server that a new database with the name **essentialmode** should be created.
But we don't want this because your FiveM gameserver already has a database with another name and we want to use it.
The second line tells the database server to use the database with the name **essentialmode** for the import, but we don't want this either because the existing database is used for the import.


## Import the SQL file into the FiveM database

You can access the database of your Fivem game server via the menu item **Databases** on the left side of the menu.

![image](https://user-images.githubusercontent.com/13604413/159168788-e4899697-48e4-4d14-baa6-e4e37ff1a72e.png)


The database itself is managed by the tool **phpmyadmin**, which you open by clicking on the blue **Administer button**.
on the right side.

![image](https://user-images.githubusercontent.com/13604413/159168791-f5c360cf-ca61-4b91-86b7-cf76d868ea62.png)


Arrived in **phpmyadmin** you first select your database from the list on the left via left click. 

> The name of your database starts **ALWAYS** with zap!

![image](https://user-images.githubusercontent.com/13604413/159168811-626eba00-b7b3-4c45-894e-ca497571b2d7.png)


Your database is currently still empty, this will change shortly. Via the menu item **Import** in the upper part of **phpmyadmin**
you get to the import options.

![image](https://user-images.githubusercontent.com/13604413/159168816-f4f95697-782d-4bfa-b78c-4f2b7bc3c6fe.png)


There you select now over the point **Select file** your SQL file, this may be maximally 2MB large!

**Tip: For larger SQL files you can use a so called **SQL splitter** to split a large SQL file into two parts
into several small SQL files. An example of a **SQL splitter** is as follows [Pinetools SQL-Splitter](https://pinetools.com/split-files).

After you have selected your SQL file, you only have to click on **Go** to start the import process.

![image](https://user-images.githubusercontent.com/13604413/159168819-a12db25e-dee1-42a1-9b83-1653900e5be2.png)


If everything worked, you will see some success messages, like on the left side your newly created database contents.


![image](https://user-images.githubusercontent.com/13604413/159168822-94541dda-2c21-428f-9c31-d0a5b965e1e3.png)


You have now successfully imported your SQL file.
