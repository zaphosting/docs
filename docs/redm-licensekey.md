---
id: redm-licensekey
title: "RedM: Add your own license key (Patreon) to the server"
description: Information on how to create your own custom license key (from Patreon) and add it to your RedM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Own License Key
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

An own license key is necessary, especially if you want to access features like Onesync, colored server names, and other exclusive benefits available through [RedM Patreon](https://www.patreon.com/fivem/posts). Additionally, you may require a custom license key if you need to change the listed server owner or if an error occurs indicating that the automatically generated ZAP key is invalid.

<InlineVoucher />

## Preparation

To create your own license key, you should first login to the [Cfx.re Keymaster website](https://keymaster.fivem.net). If you do not have an existing Cfx.re Forum account, you must create one in order to to be able to login and proceed. 

![image](https://github.com/zaphosting/docs/assets/42719082/4c5bd4d9-ea1a-49aa-b70c-b5d7f07682c2)

After you are logged in, click on the **New server** button on the left navigation bar, which will take you to the key creation page:

![image](https://github.com/zaphosting/docs/assets/42719082/8562c10c-3453-4fb8-bb1f-ed65219580a9)



## Generate Key

Once you have provided all of the necessary information, you should be able to generate a key. Your page should look similar to below. Now, press the **Generate** button and a key will be created.
![img](https://screensaver01.zap-hosting.com/index.php/s/oszSwCxqs43BWDa/preview)

Return back to the home page, and you will be able to see your newly registered license key.

## Configure Key

Finally, you must head over to the **Settings** section on your game server's webinterface, and head over to the **Custom license key** field. In this field, paste the code that was generated.

![image](https://github.com/zaphosting/docs/assets/42719082/c0475d70-bed9-4eaa-8d4c-c7cf121703d5)

:::info
**For txAdmin:**
If you are using txAdmin version of the game server, you must instead define the key under the `sv_licensekey` parameter. You can access your `server.cfg` file either via your txAdmin interface panel, the **Configs** section on your game server's webinterface or directly through FTP access.
:::



## Conclusion

After you have set your custom license key, proceed to restart your RedM server. You have successfully set a custom license key for your RedM game server!
