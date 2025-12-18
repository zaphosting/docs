---
id: fivem-editlocalfiles
title: "FiveM: Locales files (Language variables)"
description: "Learn how to customize and add languages to your resource for a personalized experience → Learn more now"
sidebar_label: Locales Files (Language)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Would you like to change the language variables of a resource or add further languages to the resource that may not exist yet? The locale files allow you to adjust the language variables of your desired resource. 

<InlineVoucher />



## Find Locales Files

The locale files must be edited using an FTP client. If you are new to using FTP, we recommend reading the [FTP access](gameserver-ftpaccess.md) guide first. Once you are connected, navigate to the ESX resource directory of the resource you want to edit. Open the locales directory in the resource directory. 

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

Within the locales directory you will find all language files that exist for this resource. From here you can either edit an existing one or copy an existing one with a new name for a new language, which you can then edit. 

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)

## Edit Locales File

You can now adjust the content of the individual language variables in the opened locale file. The content of the language variables is located behind the equal sign within the quotation marks. Adjust the content to your liking and save the changes at the end. 

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## Set Locale (Language)

The language used can be defined via the configuration file `config.lua` in the resource directory. To do this, adjust the value of `Config.Locale = GetConvar('esx:locale', 'en')`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## Conclusion

Congratulations, assuming you have followed all the steps, you have successfully edited the locale file of your resource.  For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
