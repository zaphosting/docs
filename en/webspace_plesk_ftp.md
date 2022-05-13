---
id: webspace_plesk_ftp
title: Webspace: Setting up FTP access for webspace
description: Information on how to set up FTP access for your webspace from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: FTP Connection
---

## FTP Access

FTP stands for *file transfer protocol* and is required to upload files from the PC to the web space.
Every customer automatically gets FTP access to the ordered webspace. 

Here we explain how to set up further FTP accesses. This is useful if you are working with several people on a project and each person should have their own FTP access.

These people can then use the FTP access created only to the folders that were specified by the owner of the web space.

### 🔑 Set up FTP access

In the Plesk Dashboard, open the "**FTP access**" function

> On this main page you would also see the IP address, which will be needed for the test later.

![Bildschirmfoto vom 2022-05-13 05-29-41](https://user-images.githubusercontent.com/61953937/168206121-b21fa681-e9b7-41ab-bc8e-49e1a89fcd95.png)

There would be now the one FTP access to see, which is automatically created by the system with the finished order from the web space.
To create another account, you have to click on the button "**Add FTP account**".

![Bildschirmfoto vom 2022-05-13 05-29-53](https://user-images.githubusercontent.com/61953937/168206130-0dd67f84-b7ce-45c0-8b18-512381b9cb15.png)

Afterwards the desired data must be entered. As soon as the entries are complete, confirm them with "**OK**".

![Bildschirmfoto vom 2022-05-13 05-30-10](https://user-images.githubusercontent.com/61953937/168206141-869eafc8-c54e-4b57-9cbd-2907bf2de73e.png)

> At "**Base directory**" you can now select the directory to which the FTP access should have access. If the FTP access is allowed to view and edit everything, nothing has to be changed there. 

### 📝 Test FTP access

To test the FTP access a program is needed with which this would be possible. In our example we use *Filezilla Client*.
With "**Server**" the IP of the server is entered which is shown on the main page. 
At "**username**" and "**password**" we enter the data which we have created for the FTP access.
The default port is "**21**".

### ⚠️ User account already exists

This message occurs when the FTP account name is used by someone else on the system.
The ordered web space was created on a system with several customers, if one of these customers now uses the name, no other customer can use it.
In such a case another account name would have to be chosen.
