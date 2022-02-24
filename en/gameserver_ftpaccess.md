---
id: gameserver_ftpaccess
title: Gameserver: Uploading and downloading files with FTP
description: Information on how to use FTP to upload and download files to your game server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: FTP File Access
---

## Connect to FTP

To connect to the server, enter the **IP address (FTP server)**, the **username** and the **password**. This data can be viewed under FTP Browser. The port is always **21**, but this is usually entered automatically.

![](https://screensaver01.zap-hosting.com/index.php/s/5n9ATzFKPbebdiD/preview)

## Connect via FileZilla
### Correct FileZilla Version
> You need the "**FileZilla Client**" version, not the FileZilla Server version 

> Stop your server before editing or uploading files via FTP.
> After stopping the server update your FTP rights here.
> When the server is started, you may get "Permission denied" errors.

When the connection is established for the first time, the program will ask if the password should be saved:

You will also be asked whether this connection should be allowed, since the **password** is transmitted in plain text:

### FileZilla Overview

Once the connection is established, you can view and edit all data. In the upper right corner you have the directories. There you can quickly switch between the folders. At the bottom right are the data, which you can **download, view** and **edit** with a right click:

> It is important that the server must be offline when you edit the data, otherwise it will not be taken over or the server will crash.


### Upload files

Files can be dragged and dropped from the left side (the computer) to the right side (the server) using "**Drag and Drop**". 

> If you have more than one server, you have to find out the ID of the server first, so that you can move the data into the correct folder.

### 🚩 "Transfer connection interrupted" Error Message

If the error message "Transfer connection interrupted: ECCONABORTED - Connection aborted" appears during the connection or transfer, the transfer mode can be changed from "**Passive**" to "**Active**".
The following steps show how this can be changed in the Filezilla settings.

![](https://screensaver01.zap-hosting.com/index.php/s/3Bjwr2it7RP323X/preview)

Press "**Edit**" in your Filezilla client, then open the "**Settings...**" directly:

![](https://screensaver01.zap-hosting.com/index.php/s/ipKHjQG5YCFP5Jb/preview)

After that the "**Settings**" window opens. There you can click on "**FTP**" to see the settings for the FTP connection.
At "**FTP**" the default transfer mode will be set to "**Passive**", there you can select the radio button "**Active**" and confirm the change with "**OK**".

![](https://screensaver01.zap-hosting.com/index.php/s/Bo7yf5J5Dxipwnk/preview)

As soon as this is done, the FTP connection can be tested again.

## Connect via WinSCP

WinSCP [Download](https://winscp.net/eng/index.php).

> Stop your server before editing or uploading files via FTP.
> After stopping the server, update your FTP rights here.
> If the server is started, there may be "Permission denied" errors.

To connect, the transfer protocol must be set to FTP.

### WinSCP Overview

On the **left side** are the **own files** of the computer. On the **right side** are the **files from the server**, which can be **edited, deleted** or **downloaded** by right-clicking. On the **top** you can see the **current session**, there several sessions can be established at the same time.

> It is important that the server must be offline when editing the data, otherwise the data will not be taken over or the server will crash.

### Upload files

Files can be dragged and dropped from the left side (the computer) to the right side (the server) using "**Drag and Drop**". 

> If you have more than one server, you have to find out the ID of the server first, so that you can move the data into the correct folder.
