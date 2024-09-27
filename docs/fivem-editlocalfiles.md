---
id: fivem-editlocalfiles
title: "FiveM: Editing the locales files"
description: Information on how to edit the locales files of your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Edit Locales Files
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Overview

First of all we have to connect to the server.
Here you can find the [Access via FTP](gameserver-ftpaccess.md)

## Find Locales Files
Once we have done that we look for the script where we want to change the local files.

There we search for the Folder **locales**.

![](https://screensaver01.zap-hosting.com/index.php/s/TZWqpA6QBRRBcnt/preview)

There we look for our localesfile. In our case this is de.lua

![](https://screensaver01.zap-hosting.com/index.php/s/LHZXnXxXFYznCB9/preview)

Then we open it

## Edit Locales File

Now we can change the locales.
**Important** Always write in the '.

![](https://screensaver01.zap-hosting.com/index.php/s/JzZebKQPJsE2B93/preview)

If we have changed everything we wanted to change, we save the file and upload it.

## Set Config

After this is done we have to make sure that the correct locales file is specified in the config.

![](https://screensaver01.zap-hosting.com/index.php/s/4Sanr6qbRKM7fPo/preview)

Once this is done we upload the file again and restart the server.
