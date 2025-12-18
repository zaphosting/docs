---
id: webspace-plesk-ftp
title: "Webspace: Setting up FTP access for webspace"
description: "Discover how to manage multiple FTP accesses for collaborative web projects and control folder permissions effectively → Learn more now"
sidebar_label: FTP access
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

FTP stands for *file transfer protocol* and is required to upload files from the PC to the web space.
Every customer automatically gets FTP access to the ordered webspace. 

Here we explain how to set up further FTP accesses. This is useful if you are working with several people on a project and each person should have their own FTP access.

These people can then use the FTP access created only to the folders that were specified by the owner of the web space.

<InlineVoucher />

## Set up FTP access

In the Plesk Dashboard, open the "**FTP access**" function

:::info
On this main page you would also see the IP address, which will be needed for the test later.
:::

![Bildschirmfoto vom 2022-05-13 05-29-41](https://screensaver01.zap-hosting.com/index.php/s/FK3mBHJRqS3xdbB/preview)

There would be now the one FTP access to see, which is automatically created by the system with the finished order from the web space.
To create another account, you have to click on the button "**Add FTP account**".

![Bildschirmfoto vom 2022-05-13 05-29-53](https://screensaver01.zap-hosting.com/index.php/s/L2Qa3p5nYHA3WGf/preview)

Afterwards the desired data must be entered. As soon as the entries are complete, confirm them with "**OK**".

![Bildschirmfoto vom 2022-05-13 05-30-10](https://screensaver01.zap-hosting.com/index.php/s/xZM5rmy3QsPJN52/preview)

:::info
At "**Base directory**" you can now select the directory to which the FTP access should have access. If the FTP access is allowed to view and edit everything, nothing has to be changed there. 
:::

## Test FTP access

To test the FTP access a program is needed with which this would be possible. In our example we use *Filezilla Client*.
With "**Server**" the IP of the server is entered which is shown on the main page. 
At "**username**" and "**password**" we enter the data which we have created for the FTP access.
The default port is "**21**".

## User account already exists

This message occurs when the FTP account name is used by someone else on the system.
The ordered web space was created on a system with several customers, if one of these customers now uses the name, no other customer can use it.
In such a case another account name would have to be chosen.

<InlineVoucher />
