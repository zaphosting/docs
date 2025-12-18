---
id: fivem-txadmin-import-server-base
title: "FiveM: txAdmin Import server base"
description: "Discover how to import a ready-made server base to your own server with txAdmin for quick setup and seamless integration → Learn more now"
sidebar_label: Import server base
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

Have you found a ready-made server on the Internet and want to upload it to your own server? No problem! With txAdmin, you can import a ready-made server quickly and easily - provided you take care of a few important requirements and details. In this guide, we will show how you can import a server base.



<InlineVoucher />

## Preparation

In order to start the setup process, it is necessary that you have already downloaded a ready server base from the Internet to your computer and that the file is already unpacked. 

The content of a server base may differ depending on the type and content of the server and the files may look different accordingly. However, your server base should generally contain the following data: 

- **Server configuration - `server.cfg` (required):** The server configuration file contains all relevant commands/settings for your server.
- **Resource folder - `resource` (required)** The resource folder contains all the ready resources used in the server base provided.
- **SQL file - `filenameXY.sql` (optional):** This file contains the finished database structure that is required for use and communication between the resources and the database (if used). 

The **data (`server.cfg`, `resources`)** of your downloaded server base must be uploaded to your game server. The **SQL file** must be imported into the ZAP database provided by us. 

### Server files
The upload of your Server Base data is realized via FTP. If you don't yet know exactly how this works, then have a look at the following guide: [FTP access](gameserver-ftpaccess.md)

Connect to your game server via FTP and navigate to the `fivem` folder. Create a folder for your server base there, if it doesn't exist yet. In this example, the name **ExampleServer** is used for the finished server base.

![img](https://screensaver01.zap-hosting.com/index.php/s/HzDrADKgK3rqfKm/download)



Once the folder has been created, the Server Base data must now be uploaded. To do this, navigate to your newly created folder and upload the resource folder and your server config. The result should look like this:

![img](https://screensaver01.zap-hosting.com/index.php/s/xyAZyt8W5XcxGaF/preview)

 

### Database

If your Server Base also requires the use of a database, then the SQL file provided must also be imported into your ZAP database. If you don't yet know exactly how this works, then have a look at the following guide: [Import SQL file](fivem-sql-file-import.md) 

Import your SQL file into your database as described in the guide. However, first make sure that you have adjusted the content of the SQL file and specified the correct name of your ZAP database. To do this, replace the original value in the Use '...' command with the name of your ZAP database.

:::warning Double check the content of the sql file before import
Please make sure that the content of the SQL file has been adjusted and is fully correct. before you import it. Otherwise the following error message appears: 

`Access denied for user ‘zapXXXXX-X’@’%’ to database ’originalDatabaseName’` 
:::



## txAdmin setup

The preparation for setting up the server has now been completed. The further setup, installation and configuration of the server is now performed via the setup process of the txAdmin interface. The following guide explains in detail how to access txAdmin and how exactly the setup is done: [txAdmin Setup](fivem-txadmin-setup.md)



### Welcome

Define a name that you would like to use for your project. This name is not intended for the server list but is solely for use within the txAdmin interface and for Chat/Discord messages. Continue with the Deployment Type step. 

![img](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)

### Deployment Type

Under Deployment Type, you now need to choose how you would like to set up your server. You have the following options: **Popular Recipes**, **Existing Server Data**, **Remote URL Template**, and **Custom Template**. For your use case you need to choose **Existing Server Data**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oMSBwf6jmHMwtYn/preview)

### Selecting the Paths

Next, the path where your server base is located must be specified. The folder structure starts as follows and must also be extended with your defined server base name: `/home/zapXXXXX/gXXXXXXXX/fivem/ExampleServer`.

You can simply copy and paste the specified folder structure as shown in the screenshot and then add the name of your previously created Server Base folder. The result should look like this:

![img](https://screensaver01.zap-hosting.com/index.php/s/eDPeDzSqfMbk7Tg/download)



Click on **Next**. The server configuration file `server.cfg` should now be recognized. Confirm this and complete the regular setup via the **Save & Start button**. 



## Configuration

It is highly likely that the server will not be able to start because not all the necessary information is correct. This is due, among other things, to incorrect information regarding the IP address and port of the server, missing database information for a successful connection to the database, as well as a missing license key. For this reason, final adjustments to the server configuration are still required for completion. 

### Server details

By default, the IP address and port information provided is either not available or incorrect. Make sure that the entries for the endpoints are present and correct in your server configuration file. The syntax for this is as follows:

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

Replace the IP address (0.0.0.0) and the port (30120) with the server information from your server. You can find these in the game server administration of your server. 

:::warning Incorrect IP address/port
If the information you have configured is not correct, you can recognize this by the following error message: 

```
Line XX: [ZAP-Hosting] the 'endpoint_add_tcp' interface MUST be 'XXX.XXX.XXX.XXX'
Line XX: [ZAP-Hosting] the 'endpoint_add_udp' interface MUST be 'XXX.XXX.XXX.XXX'
```
:::


### Database

In order for your server to be able to establish a connection to the database, a MySQL connection string with the database information must be specified in the server configuration file `server.cfg`. This can look like the following by default: 

```sql
set mysql_connection_string "mysql://username:password@dataBaseHostname/databaseName?charset=utf8mb4"
```

Whether such a MySQL connection string already exists in your server configuration or not depends on the server base you are using. If it doesn't already exist or doesn't contain the necessary database information, you will need to add and adjust it. You can view the database information in the game server administration under Databases. The result could for example look like this: 

```sql
set mysql_connection_string "mysql://zapXXXXXXX-X:yourDatabasePassword@mysql-mariadb-XX-XXX.zap-hosting.com/zapXXXXXX-X?charset=utf8mb4"
```

:::tip Keep it simple
If you wish to save yourself this step, you can also click on the **[Reconfigure MySQL Connection String](https://screensaver01.zap-hosting.com/index.php/s/zZSmQex6ropFK3X/preview)** button in the game server administration under the settings at the bottom of the page. 
:::


### Onesync

If the `server.cfg` configuration file of your Server Base contains any information regarding **Onesync**, this must be removed. Instead, it is managed via the settings of the txAdmin interface. If you want to activate this, you will find the option under **Settings ⟶ FXServer**. 

![img](https://screensaver01.zap-hosting.com/index.php/s/Y4LKM8ZRn4ZSFzp/download)

### License key 

To operate your server, you need your own license key from CFX. You can find out how to create your own license key in the following guide: [Own Licensekey](fivem-licensekey.md)

Add the license key to the server configuration file: 

```
sv_licenseKey "yourLicenseKeyGoesHere"
```



## Conclusion

Congratulations! Once you have successfully uploaded the files, completed the txAdmin setup and finally made the necessary changes to the server configuration, you can now start  and play on your server with your server base.

<InlineVoucher />
