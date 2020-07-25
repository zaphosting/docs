---
id: fivem_installels
title: Install ELS
sidebar_label: Install ELS
---

## Connect to FTP

In order to be able to install the resource, the [FTP access](gameserver_ftpaccess.md) needs to be configured.

## Preparation

First of all we download the latest [ELS-FiveM Version](https://github.com/MrDaGree/ELS-FiveM/releases/latest), which can be found under "Assets":

![](https://screensaver01.zap-hosting.com/index.php/s/q7ftdNXaZybDEtg/preview)

Once we have downloaded ELS, unzip the file and open the "ELS-FiveM" folder which should look like this:

![](https://screensaver01.zap-hosting.com/index.php/s/a2pm84dy77izHZg/preview)

## Configuration

Now we configure ELS-FiveM by making a copy of the `vcf.default.lua`, and rename it to `vcf.lua`.

> Note: The old `vcf.default.lua` should not be deleted.

Further settings can also be adjusted in the "config.lua", but we will leave them as default.

## Upload Resource

You can install ELS-FiveM by uploading the files via drag & drop into the "resources" folder.

![](https://screensaver01.zap-hosting.com/index.php/s/PeCsrNmqDgPmaTn/preview)

Once uploaded, you need to open the server.cfg in the server-data folder:

![](https://screensaver01.zap-hosting.com/index.php/s/eM8MtkZJCLg3gdz/preview)

Among the remaining start entries for resources the entry for ELS-FiveM can now be added:

![](https://screensaver01.zap-hosting.com/index.php/s/bqqwkH6d6rX4kcq/preview)

Afterwards the server can be restarted and ELS-FiveM is available in game!

## Carmods Configuration

To add new carmods to ELS-FiveM we first need the ELS-Config which you can often find in the folder of the downloaded carmod. Usually it is called `autoname.xml`, in our case it is `scpdvic.xml`.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCsWyTj3gZaZc6/preview)

Upload them into the "vcf" folder of our ELS-FiveM folder via FTP:

![](https://screensaver01.zap-hosting.com/index.php/s/c8CRmDdW3KDt5Rj/preview)

Now that the file has been uploaded, we open the 'vcf.lua' file in the ELS-FiveM folder:

![](https://screensaver01.zap-hosting.com/index.php/s/6fDTMeDLc5DWeEC/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/2W6SG2eoDq9g9Yo/preview)

Here we now insert our new file as shown below:

![](https://screensaver01.zap-hosting.com/index.php/s/tirH3rHBiq79Rz9/preview)

> Make sure that the previous line always ends with a comma.

Done! Our Carmod should be ELS enabled and functional after a restart of the server.
