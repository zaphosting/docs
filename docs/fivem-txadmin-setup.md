---
id: fivem-txadmin-setup
title: "FiveM: txAdmin Setup"
description: Information on how to set up the TxAdmin interface for FiveM game servers from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: txAdmin Setup
---

import YouTube from '@site/src/components/YouTube/YouTube';
import Advertisements from '@site/src/components/Advertisements/Advertisements';

## Introduction

txAdmin is a completely free to use, full-featured web panel to Manage & Monitor your FiveM server. It offers a wide range of features designed to make managing a FiveM server as easy as anything. Setting up txAdmin is completely free, begin your journey on using the most simplistic, yet functional FiveM server web panel.

<YouTube videoId="n3RoiExrvN0" title="Setup a txAdmin Server" description="Feel like you understand better when you see things in action?  We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

## First-Time Setup

After we have rented our txAdmin server, it will be displayed in the interface as follows:

![image](https://user-images.githubusercontent.com/13604413/159169306-97751551-ef77-47a1-9fe2-acf2a437c16c.png)

Here we now open the txAdmin interface via the link in the interface:

![image](https://user-images.githubusercontent.com/13604413/159169313-5e9e3c01-1c48-48e5-855e-6126c39bfdf9.png)

In the txAdmin interface we now enter our user and our password, which can be found under the link and log in.

After logging in we land directly in the txAdmin setup, here we can now select how our server is called:

:::info
This setting is **not** the server name in the server list, but an internal name for ingame messages and the Discord webhook.
:::

![image](https://user-images.githubusercontent.com/13604413/159169329-6b9670f4-e472-4619-8451-4dc8158a33cf.png)

Now we can choose how exactly we want to set up the server, there are several options here:

![image](https://user-images.githubusercontent.com/13604413/159169335-a4a52bc6-020e-4116-985c-9145ae7d5d84.png)

### Local Server Data

You should use this setting if you have already run a server with txAdmin and now want to run it with us, in this case you can simply upload the data via FTP, and specify the path of it in the setup:

![image](https://user-images.githubusercontent.com/13604413/159169346-9d8536fc-8fe2-4746-aa78-67b54b60c89c.png)


### Popular Template

Popular Templates are pre-made packs that can be used directly, this is the easiest way to use the FiveM server directly, if this is your first server this option is recommended:

![image](https://github.com/zaphosting/docs/assets/13604413/1363dc9c-bd9e-4aea-86d5-a85e989b06f3)

Now we can set a custom path for the pack, generally we would recommend to leave this path default.

![image](https://user-images.githubusercontent.com/13604413/159169394-3fc332b4-4537-46cf-bd25-57235783c843.png)


After confirming this, we immediately end up in the Recipe Deployer, if changes are to be made to the Recipe, this can be done now, otherwise this can simply be confirmed with the "Next" button.


If own database settings or License Key should be used, this can be changed now, we recommend not to change the database information.

![image](https://user-images.githubusercontent.com/13604413/159169403-1909153c-67ac-4b6b-9623-7d8cf6f0751b.png)



Almost done! Now we can make the last changes in the server.cfg, now we just press "Save & Run Server" and the FiveM server will start automatically!

### Remote URL Template

If a template is to be installed that is not linked in txAdmin itself, this function can be used to specify a separate recipe that is executed on the server.

### Custom Template

This option is intended for users who have already created their own recipe and want to reload it.

### Additional Support

For txAdmin specific support, please contact the txAdmin team through https://txadm.in/ or https://discord.gg/txAdmin/

