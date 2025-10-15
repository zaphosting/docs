---
id: fivem-esx-changejobgarages
title: "FiveM: Job Garages - Adding Cars"
description: "Discover how to customize and extend job garages with additional cars to enhance your gameplay experience → Learn more now"
sidebar_label: Add Job-Garage Cars
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Would you like to change or extend the available cars in your job garages? Below we'll explain how to do this and what steps you have to follow!

<InlineVoucher />



## Configuration

Additional cars are added to the job garages via FTP. To do this, connect to your game server via FTP. If you don't know how to use FTP yet, please have a look at our [FTP access](gameserver-ftpaccess.md) guide. 

Once you are connected via FTP, navigate to the ESX resource folder and open the esx_addons folder. The folder structure should look like this: `/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

Now select either the Ambulance or Police job, for example, and open the `config.lua` configuration file from the resources.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)



In the configuration file, the section of `Config.AuthorizedVehicles` has to be adjusted. You can search for it using the search feature and then adjust or extend it according to your wishes: 

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning 
Make sure that you have a comma at the end of the previous line when you add new vehicles, otherwise issues may occur.
:::



## Conclusion

Provided you have followed all the steps, you should now have successfully customized or extended your Jobs garage. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
