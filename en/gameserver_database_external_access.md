---
id: gameserver_database_external_access
title: Gameserver: External database access
description: Information on how to access the databases of game servers from ZAP-Hosting with external administration programs - ZAP-Hosting.com documentation
sidebar_label: External database access
---

## External database access

ZAP-Hosting offers MySQL databases inclusive for the gameserver products. These can be managed either internally via phpMyAdmin or externally via MySQL administration tools such as Navicat or HeidiSQL. 

![](https://screensaver01.zap-hosting.com/index.php/s/ySbAL7f8rwQQdKE/preview)

The user credentials to access the database are required for this purpose. Those can be found in the game server administration under databases. For this you need the information regarding **server/IP**, **database**, **user**, **password** and the default port **3306**:

![image](https://user-images.githubusercontent.com/13604413/159171035-cbada76f-c540-42d1-8a77-26d9b09acaa1.png)

### Preparation

First of all we need a Software, in this example we're showing [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) or [HeidiSQL](https://www.heidisql.com/download.php) Afterwards the downloaded file must be executed and the setup procedure has to be followed. When this step is completed, the program can be started and the connection to the database configurated. 

### HeidiSQL

In order for the connection to be established in HeidiSQL, we create a new connection with "New".

![image](https://user-images.githubusercontent.com/71441339/161415767-8acd5679-6462-4207-9021-8d5ea4b4c4c5.png)

At Hostname / IP, we enter the name of your database, in our example "mysql-mariadb-5-101.zap-hosting.com".
User name and password are also to be taken from the data, port remains on 3306.

After that we just click "Open"


### Navicat

In order to establish the connection in Navicat we create a new connection. Under **Connection** we select **MySQL**. Afterwards another popup window opens where the database information must be inserted.

![](https://user-images.githubusercontent.com/61839701/165672645-81f0c3ed-0f1c-4be5-8a85-d92df335981f.png)


The **Connection Name** is only used for the overview of the databases and can therefore be chosen as desired. All other information is taken from the interface as described above. Afterwards we click on **OK** and the setup is finished. The connection can then be established on the left in the database overview. To do so, double click on your database or right click once and choose "Open connection":

![](https://user-images.githubusercontent.com/61839701/165673163-213ab077-478f-4102-b36b-60ff5e1f2262.png)

![](https://user-images.githubusercontent.com/61839701/165673099-e1cd908a-5421-4ec4-bb88-186c3d894c39.png)


Afterwards the database opens with all existing database tables. There your can now modify or manage your database similar to phpMyAdmin by click as well as by using SQL commands.
![image](https://user-images.githubusercontent.com/13604413/159171040-0e45c5ef-997f-49dd-aab8-3f6e0171a1dd.png)
