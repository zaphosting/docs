---
id: fivem_editlocalfiles
title: FiveM Server: Editing the locales files
description: Information on how to edit the locales files of your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Edit Locales Files
---

## 📔 Overview

First of all we have to connect to the server.
Here you can find the [Instructions](gameserver_ftpaccess.md)

## 📑 Find Locales Files
Once we have done that we look for the script where we want to change the local files.

There we search for the Folder **locales**.

![image](https://user-images.githubusercontent.com/26007280/189978328-12e1af59-f429-48df-a2db-51238bdc2648.png)

There we look for our localesfile. In our case this is de.lua

![image](https://user-images.githubusercontent.com/26007280/189978346-553ed369-5f09-44cf-b67a-221bd89f9c2f.png)

Then we open it

## 📖 Edit Locales File

Now we can change the locales.
**Important** Always write in the '.

![image](https://user-images.githubusercontent.com/26007280/189978393-e3010950-6c9a-4a72-bf15-05924c37f0a9.png)

If we have changed everything we wanted to change, we save the file and upload it.

## 🔐 Set Config

After this is done we have to make sure that the correct locales file is specified in the config.

![image](https://user-images.githubusercontent.com/26007280/189978443-cdf9523c-c499-4b16-88d7-fe0e5eb6df87.png)

Once this is done we upload the file again and restart the server.
