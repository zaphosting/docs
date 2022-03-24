---
id: fivem_vrp_changemoneyicon
title: FiveM VRP Server: Change money icon
description: Information on how to change the money icon for your FiveM server with VRP from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Change Money Icon
---

## Connect with FTP

First, the [FTP-Access](gameserver_ftpaccess.md) must be set up.

After this has been set up, you can now connect and open the server folder.

Here we open the following path: `gta5-fivem/server-data/resources/vrp/cfg/money.lua`

## Upload Money Icon

To use your own money icon, you first have to upload it to Imgur (or your desired uploader):

![image](https://user-images.githubusercontent.com/13604413/159137839-6556817e-d237-44fe-b6f1-671a7bd2d7c4.png)

Here we can now upload our picture via drag & drop:

![image](https://user-images.githubusercontent.com/13604413/159137847-9890edeb-af8e-4b40-9791-cd0c9e524238.png)

After the upload we see our picture uploaded to copy the URL, we right click on the icon and choose "Copy Image Address"

This URL can now be entered in the config.

## Edit Config

In the money.lua some settings of the money display can be adjusted. To change the money icon, we can edit the following line:

`content: url('https://i.imgur.com/JUz1njC.png'); `

We just replace this URL with our own Imgur link and save the file.

After a server restart, the Icon Ingame will be visible.
