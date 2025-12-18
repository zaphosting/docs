---
id: gameserver-ftpaccess
title: "Game server: Access via FTP to manage server files"
description: "Discover how to securely access and manage your server files using FTP for seamless file transfers and server control → Learn more now"
sidebar_label: FTP access
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The FTP (File Transfer Protocol) is a network protocol designed to transfer files over a TCP/IP network. The protocol was developed to enable easy file exchange between systems. With the FTP protocol, you have the ability to access and manage your server files, whether you want to upload and download files or actively edit them.

<InlineVoucher />

## Preparation

To manage your files using the FTP protocol, you need a suitable FTP client. There is a fairly large selection of available FTP clients. However, two of the most well-known and established FTP clients are **FileZilla** and **WinSCP**.

| FTP Client | Download                                                     |
| ---------- | ------------------------------------------------------------ |
| FileZilla  | [Official Website](https://filezilla-project.org/download.php?platform=win64) |
| WinSCP     | [Official Website](https://winscp.net/eng/downloads.php)    |



## Obtain FTP details

To access your game server via FTP, you’ll need the corresponding login credentials. You can find these details in the **FTP Browser** section of your game server administration.

Simply enter the **IP address (FTP server)**, **username**, and **password** to establish the connection. These credentials are listed on the **FTP Browser** page. The port is always **21** and is usually set automatically.

![img](https://screensaver01.zap-hosting.com/index.php/s/6FTFDwyBQZ792Fd/download)



## FileZilla

### Connecting

You can establish a connection either through the Quickconnect feature or by going to **File -> Site Manager**. Enter the **FTP credentials** for your server there and then click **Connect**.

![](https://screensaver01.zap-hosting.com/index.php/s/wxSSFoW3GTXJdLK/preview)

:::info
Make sure to stop the server and update the FTP permissions before accessing the server files. Otherwise, error messages like "Permission Denied" or "Access Denied" may occur.
:::

### Managing Files

As mentioned before, you can use the FTP client to upload, download, and edit files on your server. The FTP client is divided into two parts. The left half represents your client (computer) and the right half represents your server. You can navigate both directories on both local and server levels.

Management is done by right-clicking on the respective file or folder. Depending on what you want to do, you can upload, download, edit, rename, or move files or folders.

![](https://screensaver01.zap-hosting.com/index.php/s/qizoBD5JnHBRkJc/preview)

:::info
If you have multiple game servers, you must first navigate to the correct game server directory.
:::



### Possible problems and solutions

#### "530 Login incorrect" Error
If this error occurs during the connection setup, it means that incorrect credentials have been provided. Check all the fields for completeness and correctness.

#### "Transfer connection interrupted" Error
If this error occurs during connection or transfer, you can try switching the transfer mode from *Passive* to *Active*. The following steps show how to change this setting in FileZilla.




## WinSCP

### Connecting
You can establish a connection through the Quickconnect or at the top via **New Session**. Enter the FTP credentials for your server there and then click **Connect**.

![](https://screensaver01.zap-hosting.com/index.php/s/KNnkJsnETTFqZpD/preview)


:::info
Make sure to stop the server and update the FTP permissions before accessing the server files. Otherwise, error messages like "Permission Denied" or "Access Denied" may occur.
:::


### Managing Files

As mentioned before, you can use the FTP client to upload, download, and edit files on your server. The FTP client is divided into two parts. The left half represents your client (computer) and the right half represents your server. You can navigate both directories on both local and server levels.

Management is done by right-clicking on the respective file or folder. Depending on what you want to do, you can upload, download, edit, rename, or move files or folders.

![](https://screensaver01.zap-hosting.com/index.php/s/dAYiFwWQAipgTqW/preview)


### Possible problems and solutions

#### "530 Login incorrect" Error
If this error occurs during the connection setup, it means that incorrect credentials have been provided. Check all the fields for completeness and correctness.

<InlineVoucher />
