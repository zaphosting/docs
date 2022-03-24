---
id: fivem_installels
title: FiveM: Installing ELS on your server
description: Information on how to install ELS on your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install ELS
---

## Connect to FTP

In order to be able to install the resource, the [FTP access](gameserver_ftpaccess.md) needs to be configured.

## Preparation

First of all we download the latest [ELS-FiveM Version](https://github.com/MrDaGree/ELS-FiveM/releases/latest), which can be found under "Assets"

Once we have downloaded ELS, unzip the file and open the "ELS-FiveM" folder.

## Configuration

Now we configure ELS-FiveM by making a copy of the `vcf.default.lua`, and rename it to `vcf.lua`.

> Note: The old `vcf.default.lua` should not be deleted.

Further settings can also be adjusted in the "config.lua", but we will leave them as default.

## Upload Resource

You can install ELS-FiveM by uploading the files via drag & drop into the "resources" folder.

Once uploaded, you need to open the server.cfg in the server-data folder:

![image](https://user-images.githubusercontent.com/13604413/159167045-d0e3d23b-9fd9-4bf8-a7ef-eb018b71b11d.png)

Among the remaining start entries for resources the entry for ELS-FiveM can now be added.

Afterwards the server can be restarted and ELS-FiveM is available in game!

## Carmods Configuration

To add new carmods to ELS-FiveM we first need the ELS-Config which you can often find in the folder of the downloaded carmod. Usually it is called `autoname.xml`, in our case it is `scpdvic.xml`.

Upload them into the "vcf" folder of our ELS-FiveM folder via FTP.

Now that the file has been uploaded, we open the 'vcf.lua' file in the ELS-FiveM folder.


> Make sure that the previous line always ends with a comma.

Done! Our Carmod should be ELS enabled and functional after a restart of the server.
