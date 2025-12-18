---
id: fivem-resolve-dbconnection
title: "FiveM: Resolve Database Connection issues"
description: "Discover how to fix FiveM server database connection issues and restore seamless communication with your database → Learn more now"
sidebar_label: Resolve DB Connection
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Oxmysql is a useful open-source FiveM resource that comes pre-installed with your FiveM server, to allow communication between the server and your database. During development, it is possible that you may perform changes (such as refreshing database credentials) that will require changes to the oxmysql connection string. Example of database connection issue:

![](https://screensaver01.zap-hosting.com/index.php/s/G5zACEEErfP4EHG/preview)

In this guide, we will explore the methods for resolving database connection issues on your FiveM server by adjusting the connection string in your server configuration file.

<InlineVoucher />



## Automatic Method

Begin by opening your server's web interface panel on the website and head over to the **Settings** section.

![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)

On this page, scroll to the bottom where you will be able to find the **Actions** buttons. Simply use the **Reconfigure MySQL connection string** button and once pressed, restart your server to ensure the changes are processed.

![](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

This will automatically update your `server.cfg` file with the correct current credentials, meaning your database should start functioning again.

## Manual Method

In order to resolve this manually, you will require access to your `server.cfg` file where you will adjust the connection string manually with the credentials provided on your web interface panel. Log in to the txAdmin interface and open the CFG editor. Now in another tab, head over to the **Tools->Databases** section where you will be able to view your existing credentials.

![](https://screensaver01.zap-hosting.com/index.php/s/7JJgtatLzZRXCDM/preview)

In your `server.cfg` file, add the following line (or **replace** it if it exists already), filling in the details with your own database credentials found on the web interface.

```
set mysql_connection_string "mysql://USER:PASSWORD@SERVER:3306/DATABASE"
```

![](https://screensaver01.zap-hosting.com/index.php/s/sf9sMJoZyJttHBE/preview)

Once this has been completed, make sure to save the file and restart your server.



## Conclusion

The next time the server launches, your database should be accessible again by your server and thus should fully function. You have successfully resolved your database connection issues. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
