---
id: ragemp_installpackages
title: RageMP: Installing packages on servers
description: Information on how to install packages on your RageMP server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Installing packages
---

## 🔑 Connect via FTP

Before packages can be installed, the [FTP-Access](gameserver_ftpaccess.md) must be set up:

![image](https://user-images.githubusercontent.com/13604413/159178012-0172691b-d49f-49d6-ab34-cc01eadbacf5.png)


## 📦 RageMP Packages

RageMP packages are extensions or modifications. 
RageMP distinguishes between "**Client**" and "**Server**" packages

### 🚶‍♂️ Client packages

Client-side packages are used to edit the in-game user interface or other visual effects.
The client-side packages are uploaded to the "**client_packages**" folder

![image](https://user-images.githubusercontent.com/26007280/189705362-37e49dcd-0fbf-479d-ab58-548c25f4704b.png)

In this folder a "**gamemode**" folder and a "**index.js**" file will be created.
The "**index.js**" file is important as soon as all scripts have been uploaded. 

![image](https://user-images.githubusercontent.com/26007280/189705391-d9403807-a2bc-4093-a00a-69bf8424defe.png)

In the "**gamemode**" folder the scripts are uploaded, which you want to use on the server.

![image](https://user-images.githubusercontent.com/26007280/189705412-54cacbd1-fa8e-4d9d-a439-a1e8058ae51e.png)

As soon as all desired scripts have been uploaded, the previously created "**index.js**" must be edited.
There for each script the line ***require(./gamemode/DEINSCRIPTNAME.js);*** is inserted

![image](https://user-images.githubusercontent.com/13604413/159178015-9106b7ea-41c4-4876-868c-dbca30410d62.png)

### 🖥️ Server packages

Server side packages are used to edit basic settings from the server.
For example: Spawn, players, cars, markers

The server side packages are uploaded to the "**packages**" folder

![image](https://user-images.githubusercontent.com/13604413/159178021-7b030066-b72a-41a9-9baa-c9abba124ff2.png)

In this folder another folder will be created, the name of this folder is freely selectable.

![image](https://user-images.githubusercontent.com/13604413/159178028-2b2bbd99-c4a1-4422-b4c8-bad298aefea7.png)

Once the folder is created, this folder will be filled with the server-side scripts.

![image](https://user-images.githubusercontent.com/13604413/159178033-5240c361-d4de-40dd-8d1f-64d207529842.png)

After all desired scripts are on the server a "**index.js**" must be created in the same folder.

![image](https://user-images.githubusercontent.com/26007280/189705458-b76e51c6-152e-4a7c-9f33-e8b693ec7c8b.png)

There for each script the line ***require(./DEINSCRIPTNAME.js);*** is inserted

![](https://user-images.githubusercontent.com/13604413/159178015-9106b7ea-41c4-4876-868c-dbca30410d62.png)

The "**Client**" as well as "**Server**" packages should be active directly on the server after a server restart
