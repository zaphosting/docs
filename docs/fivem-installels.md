---
id: fivem-installels
title: "FiveM: Installing ELS on your server"
description: "Discover how to set up and enable ELS-FiveM with carmods for enhanced gameplay on your server → Learn more now"
sidebar_label: Install ELS
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connect to FTP

In order to be able to install the resource, the [Access via FTP](gameserver-ftpaccess.md) needs to be configured.

## Preparation

First of all we download the latest [ELS-FiveM Version](https://github.com/MrDaGree/ELS-FiveM/releases/latest), which can be found under "Assets"

Once we have downloaded ELS, unzip the file and open the "ELS-FiveM" folder.

## Configuration

Now we configure ELS-FiveM by making a copy of the `vcf.default.lua`, and rename it to `vcf.lua`.

:::info
Note: The old `vcf.default.lua` should not be deleted.
:::

Further settings can also be adjusted in the "config.lua", but we will leave them as default.

## Upload Resource

You can install ELS-FiveM by uploading the files via drag & drop into the "resources" folder.

Once uploaded, you need to open the server.cfg in the server-data folder:

![](https://screensaver01.zap-hosting.com/index.php/s/6AfsTS6wyy9REFB/preview)

Among the remaining start entries for resources the entry for ELS-FiveM can now be added.

Afterwards the server can be restarted and ELS-FiveM is available in game!

## Carmods Configuration

To add new carmods to ELS-FiveM we first need the ELS-Config which you can often find in the folder of the downloaded carmod. Usually it is called `autoname.xml`, in our case it is `scpdvic.xml`.

Upload them into the "vcf" folder of our ELS-FiveM folder via FTP.

Now that the file has been uploaded, we open the 'vcf.lua' file in the ELS-FiveM folder.


:::info
Make sure that the previous line always ends with a comma.
:::

Done! Our Carmod should be ELS enabled and functional after a restart of the server.

<InlineVoucher />
