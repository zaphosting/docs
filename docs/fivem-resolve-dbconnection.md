---
id: fivem-resolve-dbconnection
title: "FiveM: Resolve Database Connection"
description: Information on how to resolve any issues with oxmysql database connection on a FiveM from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Resolve DB Connection
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Oxmysql is a useful open-source FiveM resource that comes pre-installed with your FiveM server, to allow communication between the server and your database. During development, it is possible that you may perform changes (such as refreshing database credentials) that will require changes to the oxmysql connection string. Example of database connection issue:

![image](https://screensaver01.zap-hosting.com/index.php/s/G5zACEEErfP4EHG/preview)

In this guide, we will explore the methods for resolving database connection issues on your FiveM server by adjusting the connection string in your server configuration file.

<InlineVoucher />

## Automatic Method

:::info
This method is currently only available for the **FiveM: txAdmin** game version. If are using a different game version, head over to the next section which covers how to adjust the connection string manually.
:::

Begin by opening your server's web interface panel on the website and head over to the **Settings** section.

![image](https://screensaver01.zap-hosting.com/index.php/s/DXxNyPXEAEntPHS/preview)

On this page, scroll to the bottom where you will be able to find the **Actions** buttons. Simply use the **Reconfigure mysql connection string** button and once pressed, restart your server to ensure the changes are processed.

![image](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

This will automatically update your `server.cfg` file with the correct current credentials, meaning your database should start functioning again.

## Manual Method

In order to resolve this manually, you will require access to your `server.cfg` file where you will adjust the connection string manually with the credentials provided on your web interface panel.

Begin by opening your server's web interface panel and head over to the **Settings->Configs** section. On this page, you will be able to use the edit icon to open a web editor.

![image](https://screensaver01.zap-hosting.com/index.php/s/pKLwQbeeZsCdqXd/preview)

Now in another tab, head over to the **Tools->Databases** section where you will be able to view your exsiting credentials.

![image](https://screensaver01.zap-hosting.com/index.php/s/7JJgtatLzZRXCDM/preview)

In your `server.cfg` file, add the following line (or **replace** it if it exists already), filling in the details with your own database credentials found on the web interface.

```
set mysql_connection_string "user=root;password=12345;host=localhost;port=3306;database=fivem"
```

:::tip
The Server/IP Address should go into the `host` section, and the `port` should be kept as 3306.
:::

Once you have this ready, make sure to save the file and restart your server.

![image](https://screensaver01.zap-hosting.com/index.php/s/MdanaTBPGLnkQX5/preview)

## Conclusion

The next time the server launches, your database should be accessible again by your server and thus should fully function. You have successfully resolved your database connection issues.



