---
id: gameserver-ftpaccess
title: 'Game server: Access via FTP to manage server files'
description: Information on how to connect via FTP and manage your game server files from ZAP-Hosting - ZAP-Hosting.com Documentation
sidebar_label: Access via FTP
---

## Introduction

The FTP (File Transfer Protocol) is a network protocol designed to transfer files over a TCP/IP network. The protocol was developed to enable easy file exchange between systems. With the FTP protocol, you have the ability to access and manage your server files, whether you want to upload and download files or actively edit them.

## Preparation

To manage your files using the FTP protocol, you need a suitable FTP client. There is a fairly large selection of available FTP clients. However, two of the most well-known and established FTP clients are **FileZilla** and **WinSCP**.

| FTP Client | Download                                                     |
| ---------- | ------------------------------------------------------------ |
| FileZilla  | [Official Website](https://filezilla-project.org/download.php?platform=win64) |
| WinSCP     | [Official Website](https://winscp.net/eng/downloads.php)    |

Choose an FTP client and install it on your computer. To connect to the server, you need to enter the **IP address (FTP Server)**, **username**, and **password**. This information can be found on the FTP browser page. The port is always **21**, which is usually entered automatically.

![img](https://screensaver01.zap-hosting.com/index.php/s/PXkQmqFN39dS3L5/preview)

## FileZilla

### Connecting

You can establish a connection either through the Quickconnect feature or by going to **File -> Site Manager**. Enter the **FTP credentials** for your server there and then click **Connect**.

![img](https://screensaver01.zap-hosting.com/index.php/s/wxSSFoW3GTXJdLK/preview)

:::info
Make sure to stop the server and update the FTP permissions before accessing the server files. Otherwise, error messages like "Permission Denied" or "Access Denied" may occur.
:::

### Managing Files

As mentioned before, you can use the FTP client to upload, download, and edit files on your server. The FTP client is divided into two parts. The left half represents your client (computer) and the right half represents your server. You can navigate both directories on both local and server levels.

Management is done by right-clicking on the respective file or folder. Depending on what you want to do, you can upload, download, edit, rename, or move files or folders.

![img](https://screensaver01.zap-hosting.com/index.php/s/qizoBD5JnHBRkJc/preview)

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

![img](https://screensaver01.zap-hosting.com/index.php/s/KNnkJsnETTFqZpD/preview)


:::info
Make sure to stop the server and update the FTP permissions before accessing the server files. Otherwise, error messages like "Permission Denied" or "Access Denied" may occur.
:::


### Managing Files

As mentioned before, you can use the FTP client to upload, download, and edit files on your server. The FTP client is divided into two parts. The left half represents your client (computer) and the right half represents your server. You can navigate both directories on both local and server levels.

Management is done by right-clicking on the respective file or folder. Depending on what you want to do, you can upload, download, edit, rename, or move files or folders.

![img](https://screensaver01.zap-hosting.com/index.php/s/dAYiFwWQAipgTqW/preview)


### Possible problems and solutions

#### "530 Login incorrect" Error
If this error occurs during the connection setup, it means that incorrect credentials have been provided. Check all the fields for completeness and correctness.
