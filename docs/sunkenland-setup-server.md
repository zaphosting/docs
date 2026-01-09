---
id: sunkenland-setup-server
title: "Sunkenland: Sunkenland Server Setup"
description: "Discover how to set up your Sunkenland game server for smooth gameplay and proper functionality → Learn more now"
sidebar_label: Server Setup
services:
  - gameserver-sunkenland
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Sunkenland servers require a quick first-time setup in order for the server to function correctly. In this guide, we will explore the steps necessary to setup your Sunkenland game server.

<InlineVoucher />

## Preparation
Before proceeding, you will have to first launch Sunkenland and create a world save file. Ensure that you save the world before proceeding.

In order to access your server files later in the guide, you will also require an FTP Client such as [WinSCP](https://winscp.net/eng/index.php) or [FileZilla](https://filezilla-project.org/) which are both open-source and free to download.

## Accessing your local data
The first step involves accessing your Sunkenland savegame data.

Simply press `CTRL+R` on your keyboard, and input the following into the Windows Run prompt:
```
%localappdata%low\Vector3 Studio\Sunkenland\
```

At this location, you will be able to see a `Worlds` folder which will contain all of your local savegame files. Select the one that you wish to host on the server, or if new, select the new one that you generated before starting this guide.

:::tip
Don't see anything here? Please make sure to launch Sunkenland and create a world save, which should create a new folder.
:::

## Upload Savegame
The next step involves connecting to your game server via FTP, and uploading the savegame that you selected in the previous step.

Begin by connecting to your server through an FTP Client using the credentials that are found under **Tools->FTP-Broswer** on your game server's webinterface. Please use our [Access via FTP](gameserver-ftpaccess.md) guide as further assistance to connect to your server.

Once connected, head over the the Sunkenland folder and open the "AppData" folder and then the "Worlds" folder, select the savegame from the previous step and upload it to this folder.

The folder structure should now look like this, where `Marvin's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86` is your own savegame.
![](https://screensaver01.zap-hosting.com/index.php/s/eFg6Ek3giFM3DLs/preview)

:::important
At this stage, please copy the GUID listed at the end of the savegame world name. You will require this in the following step to make your server functional.

The GUID looks like the following:
```
ZAP-Hosting's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Full world name
cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # The GUID you need
```
:::

## Activating Server
Finally, head over to the **Settings** section on your game server's webinterface. 

In this section, search for the **World GUID** option. Into this field, place the GUID that you copied at the end of the previous step.

Make sure to press the green **Save** button at the base of the page. Now attempt to start your server, and it should launch correctly.

You have successfully setup your Sunkenland game server.

<InlineVoucher />
