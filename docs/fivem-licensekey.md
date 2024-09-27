---
id: fivem-licensekey
title: "FiveM: Add your own license key (Patreon) to the server"
description: Information on how to create your own custom license key (from Patreon) and add it to your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Own License Key
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

An own license key is necessary, especially if you want to access features like Onesync, colored server names, and other exclusive benefits available through [FiveM Patreon](https://www.patreon.com/fivem/posts). Additionally, you may require a custom license key if you need to change the listed server owner or if an error occurs indicating that the automatically generated ZAP key is invalid.

<InlineVoucher />

## Preparation

To create your own license key, you should first login to the [Cfx.re Keymaster website](https://keymaster.fivem.net). If you do not have an existing Cfx.re Forum account, you must create one in order to to be able to login and proceed. 

![](https://github.com/zaphosting/docs/assets/42719082/4c5bd4d9-ea1a-49aa-b70c-b5d7f07682c2)

After you are logged in, click on the **New server** button on the left navigation bar, which will take you to the key creation page. 



## Generate license key

Once you have provided all of the necessary information, you should be able to generate a key. Your page should look similar to below. Now, press the **Generate** button and a key will be created.

![](https://screensaver01.zap-hosting.com/index.php/s/oszSwCxqs43BWDa/preview)

Return back to the home page, and you will be able to see your newly registered license key.


## Add license key

Finally, you must head over to the **Settings** section on your game server's webinterface, and head over to the **Custom license key** field. In this field, paste the code that was generated.

![](https://github.com/zaphosting/docs/assets/42719082/c0475d70-bed9-4eaa-8d4c-c7cf121703d5)

:::info
**For txAdmin:**
If you are using txAdmin version of the game server, you must instead define the key under the `sv_licensekey` parameter. You can access your `server.cfg` file either via your txAdmin interface panel, the **Configs** section on your game server's webinterface or directly through FTP access.
:::



## Conclusion

After you have set your custom license key, proceed to restart your FiveM server. You have successfully set a custom license key for your FiveM game server!
