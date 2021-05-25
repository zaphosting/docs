---
id: ragemp_installpackages
title: RageMP: Installing packages on servers
description: Information on how to install packages on your RageMP server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Installing packages
---

## 🔑 Connect via FTP

Before packages can be installed, the [FTP-Access](gameserver_ftpaccess.md) must be set up:

![](https://screensaver01.zap-hosting.com/index.php/s/imH3yFWaFNmD9AH/preview)

## 📦 RageMP Packages

RageMP packages are extensions or modifications. 
RageMP distinguishes between "**Client**" and "**Server**" packages

### 🚶‍♂️ Client packages

Client-side packages are used to edit the in-game user interface or other visual effects.
The client-side packages are uploaded to the "**client_packages**" folder

![](https://screensaver01.zap-hosting.com/index.php/s/WCgLYZxNKHnnwW7/preview)

In this folder a "**gamemode**" folder and a "**index.js**" file will be created.
The "**index.js**" file is important as soon as all scripts have been uploaded. 

![](https://screensaver01.zap-hosting.com/index.php/s/MzezDL79zYnGpwK/preview)

In the "**gamemode**" folder the scripts are uploaded, which you want to use on the server.

![](https://screensaver01.zap-hosting.com/index.php/s/PdTa7dAYxotz57P/preview)

As soon as all desired scripts have been uploaded, the previously created "**index.js**" must be edited.
There for each script the line ***require(./gamemode/DEINSCRIPTNAME.js);*** is inserted

![](https://screensaver01.zap-hosting.com/index.php/s/DaRrftmqZSRrAm3/preview)

### 🖥️ Server packages

Server side packages are used to edit basic settings from the server.
For example: Spawn, players, cars, markers

The server side packages are uploaded to the "**packages**" folder

![](https://screensaver01.zap-hosting.com/index.php/s/QRspdA2sXBW93oH/preview)

In this folder another folder will be created, the name of this folder is freely selectable.

![](https://screensaver01.zap-hosting.com/index.php/s/Rxe23ToBE7M84Dz/preview)

Once the folder is created, this folder will be filled with the server-side scripts.

![](https://screensaver01.zap-hosting.com/index.php/s/Y3NzTR9ow7iDSec/preview)

After all desired scripts are on the server a "**index.js**" must be created in the same folder.

![](https://screensaver01.zap-hosting.com/index.php/s/gqc4RrHsseK2nze/preview)

There for each script the line ***require(./DEINSCRIPTNAME.js);*** is inserted

![](https://screensaver01.zap-hosting.com/index.php/s/6ate3XEJ33cHNW4/preview)

The "**Client**" as well as "**Server**" packages should be active directly on the server after a server restart
